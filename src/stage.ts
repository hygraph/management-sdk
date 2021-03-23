import { MutationMode } from "./util";
import { ChangeItem, MigrationChange } from "./migration";
import {
  GraphQLBatchMigrationCreateStageInput,
  GraphQLBatchMigrationUpdateStageInput,
} from "./generated/schema";

type StageArgs =
  | GraphQLBatchMigrationCreateStageInput
  | GraphQLBatchMigrationUpdateStageInput;

interface Stage {}

/**
 * @ignore
 */
class StageClass implements Stage, ChangeItem {
  constructor(private mode: MutationMode, private args: StageArgs) {}

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
        action = "createStage";
        break;
      case MutationMode.Update:
        action = "updateStage";
        break;
      case MutationMode.Delete:
        action = "deleteStage";
        break;
    }

    const change: { [key: string]: any } = {};
    change[action] = this.args;
    return change;
  }
}

export { Stage, StageClass };
