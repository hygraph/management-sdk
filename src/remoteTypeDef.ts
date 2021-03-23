import { MutationMode } from "./util";
import { ChangeItem, MigrationChange } from "./migration";
import {
  GraphQLBatchMigrationCreateRemoteTypeDefinitionInput,
  GraphQLBatchMigrationDeleteRemoteTypeDefinitionInput,
  GraphQLBatchMigrationUpdateRemoteTypeDefinitionInput,
} from "./generated/schema";

type ModelArgs =
  | GraphQLBatchMigrationCreateRemoteTypeDefinitionInput
  | GraphQLBatchMigrationUpdateRemoteTypeDefinitionInput
  | GraphQLBatchMigrationDeleteRemoteTypeDefinitionInput;

/**
 * GraphCMS RemoteTypeDefinition
 */
interface RemoteTypeDefinition {}

/**
 * @ignore
 */
class RemoteTypeDefinitionClass implements RemoteTypeDefinition, ChangeItem {
  constructor(private mode: MutationMode, private args: ModelArgs) {}

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
        action = "createRemoteTypeDefinition";
        break;
      case MutationMode.Update:
        action = "updateRemoteTypeDefinition";
        break;
      case MutationMode.Delete:
        action = "deleteRemoteTypeDefinition";
        break;
    }

    const change: { [key: string]: any } = {};
    change[action] = this.args;
    return change;
  }
}

export { RemoteTypeDefinition, RemoteTypeDefinitionClass };
