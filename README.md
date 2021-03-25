# @graphcms/management

Programmatically manage GraphCMS project schema via migrations.

## Quickstart

```js
const { newMigration, FieldType } = require("@graphcms/management");

const migration = newMigration({ endpoint: "...", authToken: "..." });

const author = migration.createModel({
  apiId: "Author",
  apiIdPlural: "Authors",
  displayName: "Author",
});

author.addSimpleField({
  apiId: "firstName",
  displayName: "First Name",
  type: FieldType.String,
});
author.addSimpleField({
  apiId: "lastName",
  displayName: "Last Name",
  type: FieldType.String,
});

migration.run();
```

## Usage

<details>
  <summary>Table of contents</summary>

- [New Migration](#new-migration)
  - [Running a Migration](#running-a-migration)
  - [Dry run a Migration](#dry-run-migration)
- [Updating an Entity](#updating-entity)
- [Locale](#locale)
  - [Creating a Locale](#create-locale)
  - [Updating a Locale](#update-locale)
  - [Deleting a Locale](#delete-locale)
- [Stages](#stage)
  - [Creating a Stage](#create-stage)
  - [Updating a Stage](#update-stage)
  - [Deleting a Stage](#delete-stage)
- [Enumerations](#enumerations)
  - [Creating Enumeration](#create-enumation)
  - [Updating Enumeration](#update-enumation)
  - [Deleting Enumeration](#delete-enumation)
- [Remote Type Definitions](#remote-type-def)
  - [Creating Remote Type Definition](#create-remote-type-def)
  - [Updating Remote Type Definition](#create-remote-type-def)
  - [Deleting Remote Type Definition](#create-remote-type-def)
- [Models](#models)
  - [Creating a Model](#create-model)
  - [Updating a Model](#edit-model)
  - [Deleting a Model](#delete-model)
  - [Fields](#fields)
    - [Creating a Field](#create-field)
    - [Updating a Field](#update-field)
    - [Deleting a Field](#delete-field)
      </details>

### New Migration

A migration is scoped to an environment. To create a migration, the following parameters are required.

- Authentication Token `authToken`.

  Can be retrieved from `Settings > API Access` on https://app.graphcms.com

- Environment URL `endpoint`.

  Can be retrieved from `Settings > Environments` on https://app.graphcms.com

- Migration Name `name` [optional].

  Every migration has a unique name. If unspecified, a name would be generated and will be part of the response of a successful migration.

  Subsequent migrations with same name will fail.

```js
const { newMigration } = require("@graphcms/management");

const migration = newMigration({
  authToken,
  endpoint,
  name, // optional
});
```

### Running a Migration

The `run` method runs the migration.

By default, migrations run in the background. Passing an optional boolean argument configures the migration to run in the foreground.

```js
const foreground = true;

const result = migration.run(foreground);

if (result.errors) {
  console.log(result.errors);
} else {
  console.log(result.name);
}
```

### Dry Run a Migration

A migration can be dry run to preview what changes would be applied.

```js
const changes = migration.dryRun();

console.log(changes);
```

## Updating an Entity

To update properties, specify the properties to be updated. All ommitted properties remain unmodified.

As a special case, `apiId` is a requirement because all entities are uniquely indentified by `apiId`.

To update the `apiId`, specify `newApiId`.

## Locales

GraphCMS boasts a flexible localization API that you can use to publish content for all or specific locales in your project.

### Creating a Locale

To create a locale

```js
migration.createLocale({
  apiId,
  displayName,
  description,
});
```

### Updating a Locale

To update a locale

```js
migration.updateLocale({
  apiId,
  ... // properties to update
});
```

### Deleting a Locale

To delete a locale

```js
migration.deleteLocale(apiId);
```

## Stages

You can create your own content stages, and query content from these stages, as well as publish to.

### Creating a Stage

To create a stage

```js
migration.createStage({
  apiId,
  displayName,
  description,
  isDefault,
  allowQueries,
  color,
});
```

### Updating a Stage

To update a stage

```js
migration.updateStage({
  apiId,
  ... // properties to update
});
```

### Deleting a Stage

To delete a Stage

```js
migration.deleteStage(apiId);
```

## Enumerations

Enums values can only contain alphanumeric characters, and underscores.

### Creating an Enumeration

Create an enumeration with values.

```js
const colors = migration.createEnumeration({
  apiId,
  displayName,
  description,
});

// add values
colors.addValue("Red");
colors.addValue("Green");

// or add multiple values at a time.
colors.addValue("Blue", "Yellow");
```

### Updating an Enumeration

Updating an enumeration and it's values.

```js
const colors = migration.updateEnumeration({
  apiId,
  ... // properties to update.
});

colors.addValue("Black"); // add a new value
colors.updateValue("Red", "Dark Red"); // update existing value
colors.deleteValue("Blue"); // delete value
```

### Deleting Enumeration

To delete an enumeration and it's values

```js
migration.deleteEnumeration(apiId);
```

## Remote Type Definitions

Remote fields allow you to define an external resolver through the management SDK. Remote fields consist of two parts, defining any custom type that will represent the returning shape from the external resolver, defining the resolver itself.

### Creating a Remote Type Definition

Create a sample Remote Type Definition for Github API.

```js
migration.createRemoteTypeDefinition({
  definition:
    "type Github { id: Int!, login: String!, name: String!, company: String, bio: String, blog: String, location: String }",
  displayName: "Github profile",
  description: "Developer's Github profile",
});
```

### Updating a Remote Type Definition

To update a Remote Type Definition

```js
migration.updateRemoteTypeDefinition({
  apiId:
  ... // properties to update
});
```

### Deleting a Remote Type Definition

To delete a Remote Type Definition

```js
migration.deleteRemoteTypeDefinition(apiId);
```

## Models

Your schema is defined by the models you create, and fields you add.

### Creating a Model

A model can be created by passing in the required parameters.

```js
const modelName = migration.createModel({
  apiId, // must start with upper case letter
  apiIdPlural, // must start with upper case letter
  displayName,
  description,
});
```

### Updating a Model

To update a model

```js
migration.updateModel({
  apiId, // required
  ... // properties to update
});
```

### Deleting a Model

To delete a model

```js
migration.deleteModel(apiId);
```

### Fields

Your schema is built up of GraphQL types. If you’re familiar working with GraphQL, you should feel right at home. GraphCMS supports all of the common GraphQL types you are used to, as well as some of its own.

#### Create Field

To create a simple field.

```js
const { FieldType } = require("@graphcms/management");

model.addSimpleField({
  apiId,
  displayName,
  type: FieldType.String,
});
```

To create an enumerable field.

```js
model.addEnumerableField({
  apiId,
  displayName,
  enumerationApiId, // previously created enumeration.
});
```

To create a relational field.

```js
const { RelationType } = require("@graphcms/management");

model.addRelationalField({
  apiId,
  displayName,
  relationType: RelationType.OneToOne,
  model, // the related model

  // optional but can be specified to customize the details.
  reverseField: {
    apiId,
    displayName,
  },
});
```

To create an asset field.

```js
model.addRelationalField({
  apiId,
  displayName,
  model: "Asset", // this is compulsory to indicate Asset field.

  // optional but can be specified to customize the details.
  reverseField: {
    apiId,
    displayName,
  },
});
```

To create a union field.

```js
const { RelationType } = require("@graphcms/management");

model.addUnionField({
  apiId,
  displayName,
  relationType: RelationType.OneToOne,
  models, // list of related models

  // optional but can be specified to customize the details.
  reverseField: {
    apiId,
    displayName,
  },
});
```

To create a remote field.

```js
model.addRemoteField({
  apiId,
  displayName,
  remoteConfig: {
    method, // one of GET (default), POST or PUT.
    payloadFieldApiIds, // Array<String> of field API IDs to send as part of request payload
    returnType, // previously declared remote type definition
    url, // url to fetch the remote data from
  },
});
```

#### Update Field

To update a field, firstly retrieve the model.

```js
const model = migration.updateModel({...}) // to update the model
const model = migration.model(apiId) // to only retrieve the model
```

Updating simple field

```js
model.updateSimpleField({
  apiId,
  ... // properties to update
})
```

Updating enumerable field

```js
model.updateEnumerableField({
  apiId,
  ... // properties to update
})
```

Updating relational field

```js
model.updateRelationalField({
  apiId,
  ... // properties to update
})
```

Updating union field

```js
model.updateRelationalField({
  apiId,
  models, // list of related models
  ... // properties to update
})
```

#### Deleting a Field

To delete a field

```js
model.deleteField(apiId);
```
