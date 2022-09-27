import { ChangeItem, MigrationChange } from "./migration";
import { MutationMode } from "./util";
import {
  GraphQLBatchMigrationCreateComponentFieldInput,
  GraphQLBatchMigrationCreateComponentUnionFieldInput,
  GraphQLBatchMigrationCreateEnumerableFieldInput,
  GraphQLBatchMigrationCreateRelationalFieldInput,
  GraphQLBatchMigrationCreateRemoteFieldInput,
  GraphQLBatchMigrationCreateSimpleFieldInput,
  GraphQLBatchMigrationCreateUnionFieldInput,
  GraphQLBatchMigrationUpdateComponentFieldInput,
  GraphQLBatchMigrationUpdateComponentUnionFieldInput,
  GraphQLBatchMigrationUpdateRelationalFieldInput,
  GraphQLBatchMigrationUpdateSimpleFieldInput,
  GraphQLBatchMigrationUpdateUnionFieldInput,
} from "./generated/schema";

export type FieldArgs =
  | GraphQLBatchMigrationCreateSimpleFieldInput
  | GraphQLBatchMigrationUpdateSimpleFieldInput
  | GraphQLBatchMigrationCreateRelationalFieldInput
  | GraphQLBatchMigrationUpdateRelationalFieldInput
  | GraphQLBatchMigrationCreateEnumerableFieldInput
  | GraphQLBatchMigrationCreateUnionFieldInput
  | GraphQLBatchMigrationUpdateUnionFieldInput
  | GraphQLBatchMigrationCreateRemoteFieldInput
  | GraphQLBatchMigrationCreateComponentFieldInput
  | GraphQLBatchMigrationUpdateComponentFieldInput
  | GraphQLBatchMigrationCreateComponentUnionFieldInput
  | GraphQLBatchMigrationUpdateComponentUnionFieldInput;

enum FieldType {
  SimpleField = 1,
  RelationalField,
  EnumerableField,
  UnionField,
  RemoteField,
  ComponentField,
  ComponentUnionField,
}

/**
 * @ignore
 */
class Field implements ChangeItem {
  constructor(
    private args: FieldArgs,
    private mode: MutationMode,
    private type: FieldType = FieldType.SimpleField
  ) {}

  generateChange(): MigrationChange {
    let action: string;
    const typeStr = FieldType[this.type];

    switch (this.mode) {
      case MutationMode.Create:
        action = `create${typeStr}`;
        break;
      case MutationMode.Update:
        action = `update${typeStr}`;
        break;
      case MutationMode.Delete:
        // delete is generic
        action = `deleteField`;
        break;
    }

    const change: { [key: string]: any } = {};
    change[action] = this.args;
    return change;
  }
}

export { Field, FieldType };
