import { Field, FieldType } from "./field";
import { MutationMode, PartialBy, RelationType } from "./util";
import { ChangeItem, ChangeListener, MigrationChange } from "./migration";
import { Renderer } from "./renderer";
import {
  GraphQLBatchMigrationCreateComponentFieldInput,
  GraphQLBatchMigrationCreateComponentInput,
  GraphQLBatchMigrationCreateComponentUnionFieldInput,
  GraphQLBatchMigrationCreateEnumerableFieldInput,
  GraphQLBatchMigrationCreateRelationalFieldInput,
  GraphQLBatchMigrationCreateReverseRelationalFieldInput,
  GraphQLBatchMigrationCreateReverseUnionFieldInput,
  GraphQLBatchMigrationCreateSimpleFieldInput,
  GraphQLBatchMigrationCreateUnionFieldInput,
  GraphQLBatchMigrationUpdateComponentFieldInput,
  GraphQLBatchMigrationUpdateComponentInput,
  GraphQLBatchMigrationUpdateEnumerableFieldInput,
  GraphQLBatchMigrationUpdateRelationalFieldInput,
  GraphQLBatchMigrationUpdateSimpleFieldInput,
  GraphQLBatchMigrationUpdateUnionFieldInput,
  GraphQLFieldValidationFloatRangeInput,
  GraphQLFieldValidationIntRangeInput,
  GraphQLFieldValidationRegExInput,
  GraphQLRelationalFieldType,
  GraphQLSimpleFieldType,
  GraphQLSimpleFieldValidationsInput,
} from "./generated/schema";

type ComponentArgs =
  | GraphQLBatchMigrationCreateComponentInput
  | GraphQLBatchMigrationUpdateComponentInput;

/**
 * Relational Fields
 */
interface RelationalFieldArgs
  extends Omit<
    GraphQLBatchMigrationCreateRelationalFieldInput,
    "reverseField" | "isHidden"
  > {
  relationType: RelationType;
  component: string;
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

/**
 * Create Component Field
 */
interface CreateComponentFieldArgs
  extends Omit<
    GraphQLBatchMigrationCreateComponentFieldInput,
    "componentApiId"
  > {
  component?: string;
  componentApiIds: string[];
  componentApiId: string;
}

/**
 * Update Component Field
 */
interface UpdateComponentFieldArgs
  extends Omit<
    GraphQLBatchMigrationUpdateComponentFieldInput,
    "componentApiId"
  > {
  component?: string;
  componentApiIds: string[];
  componentApiId: string;
}

/**
 * Create Component Field
 */
interface CreateComponentUnionFieldArgs
  extends Omit<
    GraphQLBatchMigrationCreateComponentUnionFieldInput,
    "componentApiId"
  > {
  component?: string;
  componentApiIds: string[];
  componentApiId: string;
}

/**
 * Update Component Union Field
 */
interface UpdateComponentUnionFieldArgs
  extends Omit<
    GraphQLBatchMigrationUpdateComponentFieldInput,
    "componentApiId"
  > {
  components?: string[];
  componentApiIds: string[];
  componentApiId: string;
}

/**
 * Create Component Union Field
 */
interface CreateComponentUnionFieldArgs
  extends Omit<
    GraphQLBatchMigrationCreateComponentFieldInput,
    "componentApiId"
  > {
  components?: string[];
  componentApiIds: string[];
  componentApiId: string;
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

/**
 * GraphCMS Component
 */
interface Component {
  /**
   * Add a new field to the model.
   * @param field options for the field.
   */
  addSimpleField(field: CreateSimpleFieldArgs): Component;

  /**
   * Update an existing field
   * @param field options for the field.
   */
  updateSimpleField(field: UpdateSimpleFieldArgs): Component;

  /**
   * Add a relational field
   * @param field options for the relational field.
   */
  addRelationalField(
    field: Omit<PartialBy<RelationalFieldArgs, "type">, "modelApiId">
  ): Component;

  /**
   * Update a relational field
   * @param field options for the relational field.
   */
  updateRelationalField(field: UpdateRelationalFieldArgs): Component;

  /**
   * Add a union field
   * @param field options for the union field.
   */
  addUnionField(field: Omit<CreateUnionFieldArgs, "modelApiId">): Component;

  /**
   * Update a union field.
   * @param field options for the union field.
   */
  updateUnionField(field: Omit<UpdateUnionFieldArgs, "modelApiId">): Component;

  /**
   * Add a new component to the model.
   * @param field options for the field.
   */
  addComponentField(
    field: Omit<
      CreateComponentFieldArgs,
      "modelApiId" | "parentApiId" | "componentApiIds"
    >
  ): Component;

  /**
   * Add a new component union field to the model.
   * @param field options for the field.
   */
  addComponentUnionField(
    field: Omit<
      CreateComponentFieldArgs,
      "modelApiId" | "parentApiId" | "componentApiId"
    >
  ): Component;

  /**
   * Add a new component union field to the model.
   * @param field options for the field.
   */
  addComponentUnionField(
    field: Omit<
      CreateComponentUnionFieldArgs,
      "modelApiId" | "parentApiId" | "componentApiId"
    >
  ): Component;

  /**
   * update a component field
   * @param field options for the field.
   */
  updateComponentField(field: UpdateComponentFieldArgs): Component;

  /**
   * update a component union field
   * @param field options for the field.
   */
  updateComponentUnionField(field: UpdateComponentUnionFieldArgs): Component;

  /**
   * Create an enumerable field.
   * @param field options for the enumerable field.
   */
  addEnumerableField(field: CreateEnumerableFieldArgs): Component;

  /**
   * Update an enumerable field
   * @param field options for the enumerable field.
   */
  updateEnumerableField(field: UpdateEnumerableFieldArgs): Component;

  /**
   * Delete a field
   * @param apiId the apiId of the field to delete.
   */
  deleteField(apiId: string): void;
}

/**
 * @ignore
 */
class ComponentClass implements Component, ChangeItem {
  constructor(
    private listener: ChangeListener,
    private mode: MutationMode,
    private args: ComponentArgs
  ) {}

  addSimpleField(passedFieldArgs: any): Component {
    const fieldArgs = { ...passedFieldArgs };
    fieldArgs.parentApiId = this.args.apiId;
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

  updateSimpleField(passedFieldArgs: any): Component {
    const fieldArgs = { ...passedFieldArgs };
    fieldArgs.parentApiId = this.args.apiId;

    if (fieldArgs.validations) {
      fieldArgs.validations = extractFieldValidations(fieldArgs);
    }

    const { type, ...fieldChanges } = fieldArgs;
    const field = new Field(fieldChanges, MutationMode.Update);
    this.listener.registerChange(field);
    return this;
  }

  addRelationalField(passedFieldArgs: any): Component {
    const fieldArgs = { ...passedFieldArgs };
    fieldArgs.parentApiId = this.args.apiId;

    fieldArgs.reverseField = {
      modelApiId: fieldArgs.model,
      isUnidirectional: true,
      apiId: `related${fieldArgs.apiId}`,
      displayName: `Related ${fieldArgs.apiId}`,
    };

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

    fieldArgs.isList =
      fieldArgs.relationType === RelationType.OneToMany ||
      fieldArgs.relationType === RelationType.OneToMany;

    if (fieldArgs.type === GraphQLRelationalFieldType.Asset) {
      // Asset needs the isRequired field
      if (fieldArgs.isRequired === undefined) {
        fieldArgs.isRequired = false;
      }
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

  addUnionField(passedFieldArgs: any): Component {
    const fieldArgs = { ...passedFieldArgs };
    fieldArgs.parentApiId = this.args.apiId;
    if (!fieldArgs.models || fieldArgs.models.length === 0) {
      throw new Error(`models cannot be empty`);
    }

    fieldArgs.reverseField = {
      modelApiIds: fieldArgs.models,
      apiId: `related${fieldArgs.apiId}`,
      displayName: `Related ${fieldArgs.apiId}`,
    };

    fieldArgs.isList =
      fieldArgs.relationType === RelationType.OneToMany ||
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

  updateUnionField(passedFieldArgs: any): Component {
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

  updateRelationalField(passedFieldArgs: any): Component {
    const fieldArgs = { ...passedFieldArgs };
    fieldArgs.parentApiId = this.args.apiId;
    fieldArgs.reverseField = {
      ...passedFieldArgs?.reverseField,
      modelApiId: fieldArgs.model,
      isUnidirectional: true,
    };

    if (
      fieldArgs.parentApiId?.toUpperCase() ===
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

  addComponentField(passedFieldArgs: CreateComponentFieldArgs): Component {
    const fieldArgs = { ...passedFieldArgs };
    fieldArgs.parentApiId = this.args.apiId;
    if (!fieldArgs.component) {
      throw new Error(`components cannot be empty`);
    }

    fieldArgs.componentApiId = fieldArgs?.component;
    // remove convenience field
    delete fieldArgs.component;

    const field = new Field(
      fieldArgs,
      MutationMode.Create,
      FieldType.ComponentField
    );
    this.listener.registerChange(field);
    return this;
  }

  updateComponentField(passedFieldArgs: UpdateComponentFieldArgs): Component {
    const fieldArgs = { ...passedFieldArgs };
    fieldArgs.parentApiId = this.args.apiId;
    if (!fieldArgs.component) {
      throw new Error(`components cannot be empty`);
    }

    // remove convenience field
    delete fieldArgs.component;

    const field = new Field(
      fieldArgs,
      MutationMode.Update,
      FieldType.ComponentField
    );
    this.listener.registerChange(field);
    return this;
  }

  addComponentUnionField(
    passedFieldArgs: CreateComponentUnionFieldArgs
  ): Component {
    const fieldArgs = { ...passedFieldArgs };
    fieldArgs.parentApiId = this.args.apiId;
    if (!fieldArgs.components || fieldArgs.components.length === 0) {
      throw new Error(`components cannot be empty`);
    }

    fieldArgs.componentApiIds = fieldArgs?.components;
    // remove convenience field
    delete fieldArgs.components;

    const field = new Field(
      fieldArgs,
      MutationMode.Create,
      FieldType.ComponentUnionField
    );
    this.listener.registerChange(field);
    return this;
  }

  updateComponentUnionField(
    passedFieldArgs: UpdateComponentUnionFieldArgs
  ): Component {
    const fieldArgs = { ...passedFieldArgs };
    fieldArgs.parentApiId = this.args.apiId;
    if (!fieldArgs.components || fieldArgs.components.length === 0) {
      throw new Error(`components cannot be empty`);
    }

    fieldArgs.componentApiIds = fieldArgs?.components;
    // remove convenience field
    delete fieldArgs.components;

    const field = new Field(
      fieldArgs,
      MutationMode.Update,
      FieldType.ComponentUnionField
    );
    this.listener.registerChange(field);
    return this;
  }

  addEnumerableField(passedFieldArgs: any): Component {
    const fieldArgs = { ...passedFieldArgs };
    if (!fieldArgs.enumerationApiId) {
      throw new Error("enumerationApiId is required for enumerable field");
    }
    fieldArgs.parentApiId = this.args.apiId;
    const field = new Field(
      fieldArgs,
      MutationMode.Create,
      FieldType.EnumerableField
    );
    this.listener.registerChange(field);
    return this;
  }

  updateEnumerableField(passedFieldArgs: any): Component {
    const fieldArgs = { ...passedFieldArgs };
    fieldArgs.parentApiId = this.args.apiId;

    const field = new Field(
      fieldArgs,
      MutationMode.Update,
      FieldType.EnumerableField
    );
    this.listener.registerChange(field);
    return this;
  }

  deleteField(apiId: string): Component {
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
        action = "createComponent";
        break;
      case MutationMode.Update:
        action = "updateComponent";
        break;
      case MutationMode.Delete:
        action = "deleteComponent";
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

export { ComponentClass, Component };
