import { MutationMode } from "./util";
import { ChangeItem, MigrationChange } from "./migration";
import {
  GraphQLBatchMigrationCreateGraphQlRemoteSourceInput,
  GraphQLBatchMigrationUpdateGraphQlRemoteSourceInput,
  GraphQLBatchMigrationCreateRestRemoteSourceInput,
  GraphQLBatchMigrationUpdateRestRemoteSourceInput,
} from "./generated/schema";

type RemoteSourceArgs =
  | GraphQLBatchMigrationCreateGraphQlRemoteSourceInput
  | GraphQLBatchMigrationUpdateGraphQlRemoteSourceInput
  | GraphQLBatchMigrationCreateRestRemoteSourceInput
  | GraphQLBatchMigrationUpdateRestRemoteSourceInput;

interface RemoteSource {}

/**
 * @ignore
 */
class RemoteSourceClass implements RemoteSource, ChangeItem {
  constructor(
    private mode: MutationMode,
    private sourceType: "GQL" | "REST",
    private args: RemoteSourceArgs
  ) {}

  hasChanges(): boolean {
    // all modes are guaranteed to have changes except Update.
    if (this.mode !== MutationMode.Update) {
      return true;
    }
    // apiId is always a requirement, length of 1 means its apiId only.
    if (Object.keys(this.args).length > 1) {
      return true;
    }
    return false;
  }

  generateChange(): MigrationChange {
    let action: string;
    switch (this.mode) {
      case MutationMode.Create:
        action =
          this.sourceType === "GQL"
            ? "createGraphQLRemoteSource"
            : "createRESTRemoteSource";
        break;
      case MutationMode.Update:
        action =
          this.sourceType === "GQL"
            ? "updateGraphQLRemoteSource"
            : "updateRESTRemoteSource";
        break;
      case MutationMode.Delete:
        action = "deleteRemoteSource";
        break;
    }

    const change: { [key: string]: any } = {};
    change[action] = this.args;
    return change;
  }
}

export { RemoteSource, RemoteSourceClass };
