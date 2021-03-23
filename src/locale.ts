import { MutationMode } from "./util";
import { ChangeItem, MigrationChange } from "./migration";
import {
  GraphQLBatchMigrationCreateLocaleInput,
  GraphQLBatchMigrationUpdateLocaleInput,
} from "./generated/schema";

type LocaleArgs =
  | GraphQLBatchMigrationCreateLocaleInput
  | GraphQLBatchMigrationUpdateLocaleInput;

interface Locale {}

/**
 * @ignore
 */
class LocaleClass implements Locale, ChangeItem {
  constructor(private mode: MutationMode, private args: LocaleArgs) {}

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
        action = "createLocale";
        break;
      case MutationMode.Update:
        action = "updateLocale";
        break;
      case MutationMode.Delete:
        action = "deleteLocale";
        break;
    }

    const change: { [key: string]: any } = {};
    change[action] = this.args;
    return change;
  }
}

export { Locale, LocaleClass };
