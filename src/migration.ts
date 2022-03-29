import { GraphQLClient } from "graphql-request";

import { Model, ModelClass } from "./model";
import {
  fetchEnvironment,
  fetchMigration,
  MutationMode,
  submitMigration,
} from "./util";
import {
  GraphQLBatchMigrationCreateEnumerationInput,
  GraphQLBatchMigrationCreateModelInput,
  GraphQLBatchMigrationUpdateModelInput,
  GraphQLBatchMigrationCreateStageInput,
  GraphQLBatchMigrationUpdateStageInput,
  GraphQLBatchMigrationUpdateEnumerationInput,
  GraphQLBatchMigrationCreateLocaleInput,
  GraphQLBatchMigrationUpdateLocaleInput,
  GraphQLMigrationStatus,
  GraphQLBatchMigrationCreateGraphQlRemoteSourceInput,
  GraphQLBatchMigrationCreateRestRemoteSourceInput,
  GraphQLBatchMigrationUpdateGraphQlRemoteSourceInput,
  GraphQLBatchMigrationUpdateRestRemoteSourceInput,
  GraphQLBatchMigrationDeleteRemoteSourceInput,
} from "./generated/schema";
import {
  EnumerationCreate,
  EnumerationUpdate,
  EnumerationClass,
} from "./enumeration";
import { Stage, StageClass } from "./stage";
import { Locale, LocaleClass } from "./locale";
import { RemoteSource, RemoteSourceClass } from "./remoteSource";

/**
 * @ignore
 */
const endpoint =
  process.env.GRAPHCMS_GRAPHQL_ENDPOINT ||
  "https://management-next.graphcms.com/graphql";

/**
 * Configuration for a migration.
 */
interface MigrationConfig {
  /**
   * URL endpoint for the environment.
   * From `Settings > Environments` on https://app.graphcms.com.
   */
  endpoint: string;
  /**
   * Authentication Token.
   * From `Settings > API Access` on https://app.graphcms.com.
   */
  authToken: string;
  /**
   * Name for the migration. This must be unique to this migration.
   */
  name?: string;
}

interface MigrationChange {
  [key: string]: any;
}

interface EnvironmentInfo {
  id: string;
  name: string;
  endpoint: string;
  projectId: string;
}

/**
 * Information about a migration.
 */
interface MigrationInfo {
  id: string;
  name?: string;
  status?: string;
  errors?: string;
  createdAt?: string;
  finishedAt?: string;
}

/**
 * GraphCMS Migration.
 */
interface Migration {
  /**
   * Run the migration
   * @param foreground configures if the migration should run in the foreground.
   * By default, the migration is only scheduled. To wait for the migration to run,
   * set `foreground` to `true`.
   */
  run(foreground?: boolean): Promise<MigrationInfo>;

  /**
   * Dry run the migration. This returns the changes to be applied without running
   * the migration.
   */
  dryRun(): any;

  /**
   * Fetch an existing model
   * @param apiId the `apiId` for the model.
   */
  model(apiId: string): Model;

  /**
   * Create a new model
   * @param args options for the new model.
   */
  createModel(args: GraphQLBatchMigrationCreateModelInput): Model;

  /**
   * Update an existing model
   * @param args options for model update.
   */
  updateModel(args: GraphQLBatchMigrationUpdateModelInput): Model;

  /**
   * Delete a model
   * @param apiId the `apiId` of the model to delete.
   */
  deleteModel(apiId: string): void;

  /**
   * Create a new GraphQL remote source
   * @param args options for the new remote source.
   */
  createGraphQLRemoteSource(
    args: GraphQLBatchMigrationCreateGraphQlRemoteSourceInput
  ): RemoteSource;

  /**
   * Updates an existing GraphQL remote source
   * @param args options for the new remote source.
   */
  updateGraphQLRemoteSource(
    args: GraphQLBatchMigrationUpdateGraphQlRemoteSourceInput
  ): RemoteSource;

  /**
   * Create a new REST remote source
   * @param args options for the new remote source.
   */
  createRESTRemoteSource(
    args: GraphQLBatchMigrationCreateRestRemoteSourceInput
  ): RemoteSource;

  /**
   * Updates an existing REST remote source
   * @param args options for the new remote source.
   */
  updateRESTRemoteSource(
    args: GraphQLBatchMigrationUpdateRestRemoteSourceInput
  ): RemoteSource;

  deleteRemoteSource(args: GraphQLBatchMigrationDeleteRemoteSourceInput): void;
  /**
   * Create a new enumeration
   * @param args options for the new enumeration.
   */
  createEnumeration(
    args: GraphQLBatchMigrationCreateEnumerationInput
  ): EnumerationCreate;

  /**
   * Create a new enumeration
   * @param args options for the new enumeration.
   */
  updateEnumeration(
    args: GraphQLBatchMigrationUpdateEnumerationInput
  ): EnumerationUpdate;

  /**
   * Delete an enumeration
   * @param apiId apiId of the enumeration to delete.
   */
  deleteEnumeration(apiId: string): void;

  /**
   * Create a new stage
   * @param args options for the new stage.
   */
  createStage(args: GraphQLBatchMigrationCreateStageInput): Stage;

  /**
   * Update an existing stage
   * @param args options for stage update.
   */
  updateStage(args: GraphQLBatchMigrationUpdateStageInput): Stage;

  /**
   * Delete a stage
   * @param apiId the `apiId` of the stage to delete.
   */
  deleteStage(apiId: string): void;

  /**
   * Create a new locale
   * @param args options for the new locale.
   */
  createLocale(args: GraphQLBatchMigrationCreateLocaleInput): Locale;

  /**
   * Update an existing locale
   * @param args options for locale update.
   */
  updateLocale(args: GraphQLBatchMigrationUpdateLocaleInput): Locale;

  /**
   * Delete a locale
   * @param apiId the `apiId` of the locale to delete.
   */
  deleteLocale(apiId: string): void;
}

/**
 * @ignore
 */
interface ChangeListener {
  registerChange(item: ChangeItem): void;
}

/**
 * @ignore
 */
interface ChangeItem {
  generateChange(): MigrationChange;
}

/**
 * @ignore
 */
class MigrationClass implements Migration, ChangeListener {
  changeItems: ChangeItem[] = [];
  config: MigrationConfig;
  client!: GraphQLClient;
  environment!: EnvironmentInfo;
  migrated: boolean = false;

  constructor(config: MigrationConfig) {
    this.config = config;
  }

  private async prepare(): Promise<void> {
    this.client = new GraphQLClient(endpoint, {
      headers: {
        authorization: `Bearer ${this.config.authToken}`,
        "apollographql-client-name": "management-sdk",
      },
    });
    this.environment = await fetchEnvironment(
      this.client,
      this.config.endpoint
    );
  }

  model(apiId: string): Model {
    const model = new ModelClass(this, MutationMode.Update, { apiId });
    return model;
  }

  createModel(args: any): Model {
    const model = new ModelClass(this, MutationMode.Create, args);
    this.registerChange(model);
    return model;
  }

  updateModel(args: any): Model {
    const model = new ModelClass(this, MutationMode.Update, args);
    this.registerChange(model);
    return model;
  }

  deleteModel(apiId: string) {
    const model = new ModelClass(this, MutationMode.Delete, { apiId });
    this.registerChange(model);
    return model;
  }

  createGraphQLRemoteSource(args: any): RemoteSource {
    const remoteSource = new RemoteSourceClass(
      MutationMode.Create,
      "GQL",
      args
    );
    this.registerChange(remoteSource);
    return remoteSource;
  }

  updateGraphQLRemoteSource(args: any): RemoteSource {
    const remoteSource = new RemoteSourceClass(
      MutationMode.Update,
      "GQL",
      args
    );
    this.registerChange(remoteSource);
    return remoteSource;
  }

  createRESTRemoteSource(args: any): RemoteSource {
    const remoteSource = new RemoteSourceClass(
      MutationMode.Create,
      "REST",
      args
    );
    this.registerChange(remoteSource);
    return remoteSource;
  }

  updateRESTRemoteSource(args: any): RemoteSource {
    const remoteSource = new RemoteSourceClass(
      MutationMode.Update,
      "REST",
      args
    );
    this.registerChange(remoteSource);
    return remoteSource;
  }

  deleteRemoteSource(args: any): RemoteSource {
    const remoteSource = new RemoteSourceClass(
      MutationMode.Delete,
      "REST",
      args
    );
    this.registerChange(remoteSource);
    return remoteSource;
  }

  createEnumeration(args: any): EnumerationCreate {
    const enumeration = new EnumerationClass(MutationMode.Create, args);
    this.registerChange(enumeration);
    return enumeration;
  }

  updateEnumeration(args: any): EnumerationUpdate {
    const enumeration = new EnumerationClass(MutationMode.Update, args);
    this.registerChange(enumeration);
    return enumeration;
  }

  deleteEnumeration(apiId: string) {
    const enumeration = new EnumerationClass(MutationMode.Delete, { apiId });
    this.registerChange(enumeration);
  }

  createStage(args: any) {
    const stage = new StageClass(MutationMode.Create, args);
    this.registerChange(stage);
    return stage;
  }

  updateStage(args: any) {
    const stage = new StageClass(MutationMode.Update, args);
    this.registerChange(stage);
    return stage;
  }

  deleteStage(apiId: string) {
    const stage = new StageClass(MutationMode.Delete, { apiId });
    this.registerChange(stage);
    return stage;
  }

  createLocale(args: any) {
    const locale = new LocaleClass(MutationMode.Create, args);
    this.registerChange(locale);
    return locale;
  }

  updateLocale(args: any) {
    const locale = new LocaleClass(MutationMode.Update, args);
    this.registerChange(locale);
    return locale;
  }

  deleteLocale(apiId: string) {
    const locale = new LocaleClass(MutationMode.Delete, { apiId });
    this.registerChange(locale);
    return locale;
  }

  async run(foreground?: boolean): Promise<MigrationInfo> {
    if (this.migrated) {
      return Promise.reject("migration previously done");
    }
    await this.prepare();

    const changes = this.generateChanges();
    const resp = await submitMigration(this.client, {
      environmentId: this.environment.id,
      name: this.config.name,
      changes,
    });

    this.migrated = true;

    if (foreground) {
      try {
        const migration = await this.waitForMigration(resp.id);
        if (migration.errors) {
          return migration;
        }
        // only include name for successful migrations.
        return {
          name: resp.name,
          ...migration,
        };
      } catch (e) {
        return Promise.reject(e);
      }
    }
    return resp;
  }

  dryRun(): any {
    return this.generateChanges();
  }

  private async waitForMigration(migrationId: string): Promise<MigrationInfo> {
    while (true) {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));

        const migration = await fetchMigration(this.client, {
          projectId: this.environment.projectId,
          environmentName: this.environment.name,
          migrationId,
        });
        if (
          migration.status !== GraphQLMigrationStatus.Queued &&
          migration.status !== GraphQLMigrationStatus.Running
        ) {
          return migration;
        }
      } catch (e) {
        return Promise.reject(e);
      }
    }
  }

  private generateChanges(): MigrationChange[] {
    const changes: MigrationChange[] = [];
    for (const item of this.changeItems) {
      changes.push(item.generateChange());
    }
    return changes;
  }

  registerChange(change: ChangeItem) {
    this.changeItems.push(change);
  }
}

/**
 * Create a new migration.
 * @param config the configuration for the migration.
 */
function newMigration(config: MigrationConfig): Migration {
  return new MigrationClass(config);
}

export {
  EnvironmentInfo,
  newMigration,
  MigrationInfo,
  MigrationChange,
  MigrationConfig,
  ChangeListener,
  ChangeItem,
};
