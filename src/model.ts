import { Field, FieldType } from "./field";
import { MutationMode, PartialBy, RelationType } from "./util";
import { ChangeItem, ChangeListener, MigrationChange } from "./migration";
import { Renderer } from "./renderer";
import {
  GraphQLBatchMigrationCreateEnumerableFieldInput,
  GraphQLBatchMigrationCreateModelInput,
  GraphQLBatchMigrationCreateRelationalFieldInput,
  GraphQLBatchMigrationCreateRemoteFieldInput,
  GraphQLBatchMigrationCreateReverseRelationalFieldInput,
  GraphQLBatchMigrationCreateReverseUnionFieldInput,
  GraphQLBatchMigrationCreateSimpleFieldInput,
  GraphQLBatchMigrationCreateUnionFieldInput,
  GraphQLBatchMigrationUpdateEnumerableFieldInput,
  GraphQLBatchMigrationUpdateModelInput,
  GraphQLBatchMigrationUpdateRelationalFieldInput,
  GraphQLBatchMigrationUpdateRemoteFieldInput,
  GraphQLBatchMigrationUpdateSimpleFieldInput,
  GraphQLBatchMigrationUpdateUnionFieldInput,
  GraphQLFieldValidationFloatRangeInput,
  GraphQLFieldValidationIntRangeInput,
  GraphQLFieldValidationRegExInput,
  GraphQLRelationalFieldType,
  GraphQLSimpleFieldType,
  GraphQLSimpleFieldValidationsInput,
} from "./generated/schema";

type ModelArgs =
  | GraphQLBatchMigrationCreateModelInput
  | GraphQLBatchMigrationUpdateModelInput;

/**
 * Relational Fields
 */
interface RelationalFieldArgs
  extends Omit<
    GraphQLBatchMigrationCreateRelationalFieldInput,
    "reverseField" | "isHidden"
  > {
  relationType: RelationType;
  model: string;
  /**
   * @deprecated Use visibility instead.
   */
  isHidden: GraphQLBatchMigrationCreateRelationalFieldInput["isHidden"];
  reverseField?: Omit<
    GraphQLBatchMigrationCreateReverseRelationalFieldInput,
    "modelApiId" | "isList" | "isHidden"
  > & {
    /**
     * @deprecated Use visibility instead.
     */
    isHidden?: GraphQLBatchMigrationCreateReverseRelationalFieldInput["isHidden"];
  };
}

/**
 * Create Union Field
 */
interface CreateUnionFieldArgs
  extends Omit<
    GraphQLBatchMigrationCreateUnionFieldInput,
    "reverseField" | "isHidden"
  > {
  relationType: RelationType;
  models: string[];
  /**
   * @deprecated Use visibility instead.
   */
  isHidden: GraphQLBatchMigrationCreateRelationalFieldInput["isHidden"];
  reverseField?: Omit<
    GraphQLBatchMigrationCreateReverseUnionFieldInput,
    "modelApiIds" | "isList" | "isHidden"
  > & {
    /**
     * @deprecated Use visibility instead.
     */
    isHidden?: GraphQLBatchMigrationCreateReverseUnionFieldInput["isHidden"];
  };
}

/**
 * Update Union Field
 */
interface UpdateUnionFieldArgs
  extends Omit<GraphQLBatchMigrationUpdateUnionFieldInput, "reverseField"> {
  models?: string[];
}

interface FieldValidationArgs {
  range?: GraphQLFieldValidationFloatRangeInput;
  characters?: GraphQLFieldValidationIntRangeInput;
  listItemCount?: GraphQLFieldValidationIntRangeInput;
  matches?: GraphQLFieldValidationRegExInput;
  notMatches?: GraphQLFieldValidationRegExInput;
}

/**
 * Create Simple Field
 */
interface CreateSimpleFieldArgs
  extends Omit<
    GraphQLBatchMigrationCreateSimpleFieldInput,
    "validations" | "modelApiId" | "isHidden"
  > {
  validations?: FieldValidationArgs;
  /**
   * @deprecated Use visibility instead.
   */
  isHidden?: GraphQLBatchMigrationCreateSimpleFieldInput["isHidden"];
}

interface UpdateSimpleFieldArgs
  extends Omit<
    GraphQLBatchMigrationUpdateSimpleFieldInput,
    "validations" | "modelApiId" | "isHidden"
  > {
  validations?: FieldValidationArgs;
  /**
   * @deprecated Use visibility instead.
   */
  isHidden?: GraphQLBatchMigrationCreateSimpleFieldInput["isHidden"];
}

interface UpdateRelationalFieldArgs
  extends Omit<
    GraphQLBatchMigrationUpdateRelationalFieldInput,
    "modelApiId" | "isHidden"
  > {
  /**
   * @deprecated Use visibility instead.
   */
  isHidden?: GraphQLBatchMigrationUpdateRelationalFieldInput["isHidden"];
}

interface CreateEnumerableFieldArgs
  extends Omit<
    GraphQLBatchMigrationCreateEnumerableFieldInput,
    "modelApiId" | "isHidden"
  > {
  /**
   * @deprecated Use visibility instead.
   */
  isHidden?: GraphQLBatchMigrationCreateEnumerableFieldInput["isHidden"];
}

interface UpdateEnumerableFieldArgs
  extends Omit<
    GraphQLBatchMigrationUpdateEnumerableFieldInput,
    "modelApiId" | "isHidden"
  > {
  /**
   * @deprecated Use visibility instead.
   */
  isHidden?: GraphQLBatchMigrationUpdateEnumerableFieldInput["isHidden"];
}

interface CreateRemoteFieldArgs
  extends Omit<GraphQLBatchMigrationCreateRemoteFieldInput, "parentApiId"> {}

interface UpdateRemoteFieldArgs
  extends Omit<GraphQLBatchMigrationUpdateRemoteFieldInput, "parentApiId"> {}

/**
 * GraphCMS Model
 */
interface Model {
  /**
   * Add a new field to the model.
   * @param field options for the field.
   */
  addSimpleField(field: CreateSimpleFieldArgs): Model;

  /**
   * Update an existing field
   * @param field options for the field.
   */
  updateSimpleField(field: UpdateSimpleFieldArgs): Model;

  /**
   * Add a relational field
   * @param field options for the relational field.
   */
  addRelationalField(
    field: Omit<
      PartialBy<RelationalFieldArgs, "reverseField" | "type">,
      "modelApiId"
    >
  ): Model;

  /**
   * Update a relational field
   * @param field options for the relational field.
   */
  updateRelationalField(field: UpdateRelationalFieldArgs): Model;

  /**
   * Add a union field
   * @param field options for the union field.
   */
  addUnionField(
    field: Omit<PartialBy<CreateUnionFieldArgs, "reverseField">, "modelApiId">
  ): Model;

  /**
   * Update a union field.
   * @param field options for the union field.
   */
  updateUnionField(field: Omit<UpdateUnionFieldArgs, "modelApiId">): Model;

  /**
   * Create an enumerable field.
   * @param field options for the enumerable field.
   */
  addEnumerableField(field: CreateEnumerableFieldArgs): Model;

  /**
   * Update an enumerable field
   * @param field options for the enumerable field.
   */
  updateEnumerableField(field: UpdateEnumerableFieldArgs): Model;

  /* Create an remote field.
   * @param field options for the remote field.
   */
  addRemoteField(field: CreateRemoteFieldArgs): Model;

  /**
   * Update a remote field
   * @param field options for the remote field.
   */
  updateRemoteField(field: UpdateRemoteFieldArgs): Model;

  /**
   * Delete a field
   * @param apiId the apiId of the field to delete.
   */
  deleteField(apiId: string): void;
}

/**
 * @ignore
 */
class ModelClass implements Model, ChangeItem {
  constructor(
    private listener: ChangeListener,
    private mode: MutationMode,
    private args: ModelArgs
  ) {}

  addSimpleField(passedFieldArgs: any): Model {
    const fieldArgs = { ...passedFieldArgs };
    fieldArgs.modelApiId = this.args.apiId;
    if (fieldArgs.type === GraphQLSimpleFieldType.String) {
      fieldArgs.formRenderer = fieldArgs.formRenderer || Renderer.SingleLine;
    }

    if (fieldArgs.validations) {
      fieldArgs.validations = extractFieldValidations(fieldArgs);
    }

    const field = new Field(fieldArgs, MutationMode.Create);
    this.listener.registerChange(field);
    return this;
  }

  updateSimpleField(passedFieldArgs: any): Model {
    const fieldArgs = { ...passedFieldArgs };
    fieldArgs.modelApiId = this.args.apiId;

    if (fieldArgs.validations) {
      fieldArgs.validations = extractFieldValidations(fieldArgs);
    }

    const { type, ...fieldChanges } = fieldArgs;
    const field = new Field(fieldChanges, MutationMode.Update);
    this.listener.registerChange(field);
    return this;
  }

  addRelationalField(passedFieldArgs: any): Model {
    const fieldArgs = { ...passedFieldArgs };
    fieldArgs.modelApiId = this.args.apiId;

    const fieldTypeUpper = fieldArgs.type?.toUpperCase();
    const fieldModelUpper = fieldArgs.model?.toUpperCase();

    if (
      fieldTypeUpper === GraphQLRelationalFieldType.Asset ||
      fieldModelUpper === GraphQLRelationalFieldType.Asset
    ) {
      fieldArgs.type = GraphQLRelationalFieldType.Asset;
    } else {
      fieldArgs.type = GraphQLRelationalFieldType.Relation;
    }

    if (!fieldArgs.reverseField) {
      fieldArgs.reverseField = {
        apiId: `related${fieldArgs.modelApiId}`,
        displayName: `Related ${fieldArgs.modelApiId}`,
      };
    }

    fieldArgs.reverseField.modelApiId = fieldArgs.model;

    fieldArgs.isList =
      fieldArgs.relationType === RelationType.OneToMany ||
      fieldArgs.relationType === RelationType.ManyToMany;
    fieldArgs.reverseField.isList =
      fieldArgs.relationType === RelationType.ManyToOne ||
      fieldArgs.relationType === RelationType.ManyToMany;

    if (fieldArgs.type === GraphQLRelationalFieldType.Asset) {
      // Asset needs the isRequired field
      if (fieldArgs.isRequired === undefined) {
        fieldArgs.isRequired = false;
      }
      // asset needs reverse field to be list
      fieldArgs.reverseField.isList = true;
      // asset needs reverse field to be hidden;
      fieldArgs.reverseField.isHidden = true;
    } else {
      // we have to drop them on relation fields:
      delete fieldArgs.isRequired;
    }

    // remove convenience fields
    delete fieldArgs.model;
    delete fieldArgs.relationType;

    const field = new Field(
      fieldArgs,
      MutationMode.Create,
      FieldType.RelationalField
    );
    this.listener.registerChange(field);
    return this;
  }

  addUnionField(passedFieldArgs: any): Model {
    const fieldArgs = { ...passedFieldArgs };
    fieldArgs.modelApiId = this.args.apiId;
    if (!fieldArgs.models || fieldArgs.models.length === 0) {
      throw new Error(`models cannot be empty`);
    }

    if (!fieldArgs.reverseField) {
      fieldArgs.reverseField = {
        apiId: `related${fieldArgs.modelApiId}`,
        displayName: `Related ${fieldArgs.modelApiId}`,
      };
    }
    fieldArgs.reverseField.modelApiIds = fieldArgs.models;

    fieldArgs.isList =
      fieldArgs.relationType === RelationType.OneToMany ||
      fieldArgs.relationType === RelationType.ManyToMany;
    fieldArgs.reverseField.isList =
      fieldArgs.relationType === RelationType.ManyToOne ||
      fieldArgs.relationType === RelationType.ManyToMany;

    // remove convenience fields
    delete fieldArgs.models;
    delete fieldArgs.relationType;

    const field = new Field(
      fieldArgs,
      MutationMode.Create,
      FieldType.UnionField
    );
    this.listener.registerChange(field);
    return this;
  }

  updateRelationalField(passedFieldArgs: any): Model {
    const fieldArgs = { ...passedFieldArgs };
    fieldArgs.modelApiId = this.args.apiId;
    fieldArgs.reverseField = passedFieldArgs?.reverseField;

    if (
      fieldArgs.modelApiId?.toUpperCase() ===
        GraphQLRelationalFieldType.Asset &&
      fieldArgs.isRequired !== undefined
    ) {
      fieldArgs.isRequired = Boolean(fieldArgs.isRequired);
    }

    const field = new Field(
      fieldArgs,
      MutationMode.Update,
      FieldType.RelationalField
    );
    this.listener.registerChange(field);
    return this;
  }

  updateUnionField(passedFieldArgs: any): Model {
    const fieldArgs = { ...passedFieldArgs };
    fieldArgs.modelApiId = this.args.apiId;
    fieldArgs.reverseField = {
      ...passedFieldArgs?.reverseField,
      modelApiIds: fieldArgs.models,
    };

    // remove convenience field
    delete fieldArgs.models;

    const field = new Field(
      fieldArgs,
      MutationMode.Update,
      FieldType.UnionField
    );

    this.listener.registerChange(field);
    return this;
  }

  addEnumerableField(passedFieldArgs: any): Model {
    const fieldArgs = { ...passedFieldArgs };
    if (!fieldArgs.enumerationApiId) {
      throw new Error("enumerationApiId is required for enumerable field");
    }
    fieldArgs.modelApiId = this.args.apiId;
    const field = new Field(
      fieldArgs,
      MutationMode.Create,
      FieldType.EnumerableField
    );
    this.listener.registerChange(field);
    return this;
  }

  updateEnumerableField(passedFieldArgs: any): Model {
    const fieldArgs = { ...passedFieldArgs };
    fieldArgs.modelApiId = this.args.apiId;

    const field = new Field(
      fieldArgs,
      MutationMode.Update,
      FieldType.EnumerableField
    );
    this.listener.registerChange(field);
    return this;
  }

  addRemoteField(passedFieldArgs: any): Model {
    const fieldArgs = { ...passedFieldArgs };
    fieldArgs.parentApiId = this.args.apiId;

    const field = new Field(
      fieldArgs,
      MutationMode.Create,
      FieldType.RemoteField
    );
    this.listener.registerChange(field);
    return this;
  }

  updateRemoteField(passedFieldArgs: any): Model {
    const fieldArgs = { ...passedFieldArgs };
    fieldArgs.parentApiId = this.args.apiId;

    const field = new Field(
      fieldArgs,
      MutationMode.Update,
      FieldType.RemoteField
    );
    this.listener.registerChange(field);
    return this;
  }

  deleteField(apiId: string): Model {
    const field = new Field(
      { apiId, modelApiId: this.args.apiId },
      MutationMode.Delete
    );
    this.listener.registerChange(field);
    return this;
  }

  hasChanges(): boolean {
    // all modes are guaranteed to have changes except Update.
    if (this.mode !== MutationMode.Update) {
      return true;
    }
    // apiId is always a requirement, length of 1 means its apiId only.
    return Object.keys(this.args).length > 1;
  }

  generateChange(): MigrationChange {
    let action: string;
    switch (this.mode) {
      case MutationMode.Create:
        action = "createModel";
        break;
      case MutationMode.Update:
        action = "updateModel";
        break;
      case MutationMode.Delete:
        action = "deleteModel";
        break;
    }

    const change: { [key: string]: any } = {};
    change[action] = this.args;
    return change;
  }
}

/**
 * @ignore
 * @param fieldArgs
 */
function extractFieldValidations(
  fieldArgs: CreateSimpleFieldArgs
): GraphQLSimpleFieldValidationsInput {
  const validations: GraphQLSimpleFieldValidationsInput = {};
  switch (fieldArgs.type) {
    case GraphQLSimpleFieldType.Int:
      validations.Int = { range: fieldArgs.validations?.range };
      if (fieldArgs.isList) {
        validations.Int.listItemCount = fieldArgs.validations?.listItemCount;
      }
      break;

    case GraphQLSimpleFieldType.Float:
      validations.Float = { range: fieldArgs.validations?.range };
      if (fieldArgs.isList) {
        validations.Float.listItemCount = fieldArgs.validations?.listItemCount;
      }
      break;

    case GraphQLSimpleFieldType.String:
      validations.String = {
        characters: fieldArgs.validations?.characters,
        matches: fieldArgs.validations?.matches,
        notMatches: fieldArgs.validations?.notMatches,
      };
      if (fieldArgs.isList) {
        validations.String.listItemCount = fieldArgs.validations?.listItemCount;
      }
      break;

    default:
      throw new Error(`field validations not supported for ${fieldArgs.type}`);
  }

  return validations;
}

export { Model, ModelClass };
