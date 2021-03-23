import {
  GraphQLBatchMigrationCreateEnumerationInput,
  GraphQLBatchMigrationUpdateEnumerationInput,
} from "./generated/schema";
import { MutationMode, PartialBy } from "./util";
import { ChangeItem, MigrationChange } from "./migration";

type CreateEnumerationArgs = Omit<
  PartialBy<GraphQLBatchMigrationCreateEnumerationInput, "values">,
  "displayName"
>;

type UpdateEnumerationArgs = GraphQLBatchMigrationUpdateEnumerationInput;

type EnumerationArgs = CreateEnumerationArgs | UpdateEnumerationArgs;

/**
 * For adding values to an enumeration.
 */
interface EnumerationCreate {
  /**
   * Add values to enumeration.
   * @param apiIds the value(s) for the enumeration.
   */
  addValue(...apiIds: string[]): void;
}

/**
 * For editing values of an enumeration.
 */
interface EnumerationUpdate extends EnumerationCreate {
  /**
   * Update an existing value.
   * @param apiId the apiId to update.
   * @param newApiId the new apiId to set.
   */
  updateValue(apiId: string, newApiId: string): EnumerationUpdate;

  /**
   * Delete values from enumeration.
   * @param apiIds list of apiIds of values to delete from the enumeration.
   */
  deleteValue(...apiIds: string[]): void;
}

/**
 * @ignore
 */
class EnumerationClass
  implements EnumerationCreate, EnumerationUpdate, ChangeItem {
  constructor(private mode: MutationMode, private args: EnumerationArgs) {}

  addValue(...apiIds: string[]) {
    const values = apiIds.map((apiId) => {
      return {
        apiId,
        displayName: apiId,
      };
    });

    if (this.mode === MutationMode.Update) {
      const args = this.args as UpdateEnumerationArgs;
      args.valuesToCreate = args.valuesToCreate || [];
      args.valuesToCreate.push(...values);
    } else {
      const args = this.args as CreateEnumerationArgs;
      args.values = args.values || [];
      args.values.push(...values);
    }
  }

  updateValue(apiId: string, newApiId: string): EnumerationUpdate {
    const args = this.args as UpdateEnumerationArgs;
    args.valuesToUpdate = args.valuesToUpdate || [];
    args.valuesToUpdate.push({
      apiId,
      newApiId,
      displayName: newApiId || apiId,
    });
    return this;
  }

  deleteValue(...apiIds: string[]) {
    const args = this.args as UpdateEnumerationArgs;
    args.valuesToDelete = args.valuesToDelete || [];
    args.valuesToDelete.push(...apiIds);
  }

  generateChange(): MigrationChange {
    if (this.mode === MutationMode.Create) {
      const args = this.args as CreateEnumerationArgs;
      if (!args.values || args.values.length === 0) {
        throw new Error("enumeration must have values");
      }
    }

    let action: string;

    switch (this.mode) {
      case MutationMode.Create:
        action = `createEnumeration`;
        break;
      case MutationMode.Update:
        action = `updateEnumeration`;
        break;
      case MutationMode.Delete:
        action = `deleteEnumeration`;
        break;
    }

    const change: { [key: string]: any } = {};
    change[action] = this.args;
    return change;
  }
}

export { EnumerationCreate, EnumerationUpdate, EnumerationClass };
