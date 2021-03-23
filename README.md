# @graphcms/management

GraphCMS Management SDK.

## Usage

### Migration

```js
// import library
const { newMigration, FieldType } = require("@graphcms/management");

// create a new migration for an environment
// using auth token and environment endpoint url.
const migration = newMigration({ authToken, endpoint });

// create model
const author = migration.createModel({
  apiId: "Author",
  apiIdPlural: "Authors",
  displayName: "Author",
});

// add fields
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

// run migration
migration.run();
```

## Table of Contents

- [Migration](#migration)
  - [New Migration](#new-migration)
  - [Running a Migration](#run-migration)
  - [DryRun a Migration](#dry-run-migration)
- [Updating an Entity](#updating-entity)
- [Locale](#locale)
  - [Creating a Locale](#create-locale)
  - [Updating a Locale](#update-locale)
  - [Deleting a Locale](#delete-locale)
- [Stage](#stage)
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

<a name="migration"></a>

## Migration

<a name="new-migration"></a>

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

<a name="run-migration"></a>

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

<a name="dry-run-migration"></a>

### Dry Run a Migration

A migration can be dry run to preview what changes would be applied.

```js
const changes = migration.dryRun();
console.log(changes);
```

<a name="updating-entity"></a>

## Updating an Entity

To update properties, specify the properties to be updated. All ommitted properties remain unmodified.

As a special case, `apiId` is a requirement because all entities are uniquely indentified by `apiId`.

To update the `apiId`, specify `newApiId`.

<a name="locale"></a>

## Locale

<a name="create-locale"></a>

### Creating a Locale

To create a locale

```js
migration.createLocale({
  apiId,
  displayName,
  description,
});
```

<a name="update-locale"></a>

### Updating a Locale

To update a locale

```js
migration.updateLocale({
  apiId,
  ... // properties to update
});
```

<a name="delete-locale"></a>

### Deleting a Locale

To delete a locale

```js
migration.deleteLocale(apiId);
```

## Stage

<a name="create-stage"></a>

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

<a name="update-stage"></a>

### Updating a Stage

To update a stage

```js
migration.updateStage({
  apiId,
  ... // properties to update
});
```

<a name="delete-stage"></a>

### Deleting a Stage

To delete a Stage

```js
migration.deleteStage(apiId);
```

<a name="enumerations"></a>

## Enumerations

<a name="create-enumation"></a>

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

<a name="update-enumation"></a>

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

<a name="delete-enumation"></a>

### Deleting Enumeration

To delete an enumeration and it's values

```js
migration.deleteEnumeration(apiId);
```

<a name="remote-type-def"></a>

## Remote Type Definitions

<a name="create-remote-type-def"></a>

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

<a name="update-remote-type-def"></a>

### Updating a Remote Type Definition

To update a Remote Type Definition

```js
migration.updateRemoteTypeDefinition({
  apiId:
  ... // properties to update
});
```

<a name="delete-remote-type-def"></a>

### Deleting a Remote Type Definition

To delete a Remote Type Definition

```js
migration.deleteRemoteTypeDefinition(apiId);
```

<a name="models"></a>

## Models

<a name="create-model"></a>

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

<a name="update-model"></a>

### Updating a Model

To update a model

```js
migration.updateModel({
  apiId, // required
  ... // properties to update
});
```

<a name="delete-model"></a>

### Deleting a Model

To delete a model

```js
migration.deleteModel(apiId);
```

<a name="fields"></a>

### Fields

<a name="create-field"></a>

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

<a name="update-field"></a>

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

<a name="delete-field"></a>

#### Deleting a Field

To delete a field

```js
model.deleteField(apiId);
```

## Typescript

The SDK is fully typed with Typescript and IDE intellisense is expected to work as desired.

## More

More documentation on using the SDK is available at [https://graphcms.com/docs/develop/management-sdk](https://graphcms.com/docs/develop/management-sdk).
