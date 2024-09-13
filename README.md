<h1 align="center">@hygraph/management</h1>

<p align="center">Programmatically manage Hygraph project schema via migrations.</p>

<p align="center">
  <a href="https://npmjs.org/package/@hygraph/management-sdk">
    <img src="https://img.shields.io/npm/v/@hygraph/management-sdk.svg" alt="Version" />
  </a>
  <a href="https://npmjs.org/package/@hygraph/management-sdk">
    <img src="https://img.shields.io/npm/dw/@hygraph/management-sdk.svg" alt="Downloads/week" />
  </a>
  <a href="https://github.com/hygraph/management-sdk/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/@hygraph/management-sdk.svg" alt="License" />
  </a>
  <a href="https://github.com/hygraph/management-sdk/stargazers">
    <img src="https://img.shields.io/github/stars/hygraph/management-sdk" alt="Forks on GitHub" />
  </a>
  <img src="https://badgen.net/bundlephobia/minzip/@graphcms/management" alt="minified + gzip size" />
  <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
  <img src="https://img.shields.io/badge/all_contributors-1-purple.svg" alt="Contributors" />
  <!-- ALL-CONTRIBUTORS-BADGE:END -->
  <br/>
  <a href="https://slack.hygraph.com">Join us on Slack</a> • <a href="https://app.hygraph.com">Login to Hygraph</a> • <a href="https://x.com/hygraph">@hygraph</a>
</p>

---

⚠️ **@graphcms/management has been deprecated and will no longer receive support. Please use [@hygraph/management-sdk](https://www.npmjs.com/package/@hygraph/management-sdk) instead. Follow [this](https://hygraph.com/docs/api-reference/developer-tools/management-sdk#migration) guide to migrate to the new SDK. More information on the new SDK can be found [here](https://hygraph.com/docs/api-reference/developer-tools/management-sdk).** ⚠️

---

## Quickstart

```js
const { newMigration, FieldType } = require("@hygraph/management-sdk");

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

## Install

```bash
npm install @hygraph/management-sdk --save-dev
```

## Usage

Changes to your schema starts with a migration.

### New Migration

A migration is scoped to an environment. To create a migration, the following parameters are required.

- **Authentication Token `authToken`.**

  Can be retrieved from `Settings > API Access` on https://app.hygraph.com

- **Environment URL `endpoint`.**

  Can be retrieved from `Settings > Environments` on https://app.hygraph.com

- **Migration Name `name` [optional].**

  Every migration has a unique name. If unspecified, a name would be generated and will be part of the response of a successful migration.

  Subsequent migrations with same name will fail.

```js
const { newMigration } = require("@hygraph/management-sdk");

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

Hygraph boasts a flexible localization API that you can use to publish content for all or specific locales in your project.

### Create a Locale

To create a locale

```js
migration.createLocale({
  apiId,
  displayName,
  description,
});
```

### Update a Locale

To update a locale

```js
migration.updateLocale({
  apiId,
  ... // properties to update
});
```

### Delete a Locale

To delete a locale

```js
migration.deleteLocale(apiId);
```

## Stages

You can create your own content stages, and query content from these stages, as well as publish to.

### Create a Stage

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

### Update a Stage

To update a stage

```js
migration.updateStage({
  apiId,
  ... // properties to update
});
```

### Delete a Stage

To delete a Stage

```js
migration.deleteStage(apiId);
```

## Enumerations

Enums values can only contain alphanumeric characters, and underscores.

### Create a Enumeration

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

### Update a Enumeration

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

### Delete Enumeration

To delete an enumeration and it's values

```js
migration.deleteEnumeration(apiId);
```

## Models

Your schema is defined by the models you create, and fields you add.

### Create a Model

A model can be created by passing in the required parameters.

```js
const modelName = migration.createModel({
  apiId, // must start with upper case letter
  apiIdPlural, // must start with upper case letter
  displayName,
  description,
});
```

### Update a Model

To update a model

```js
migration.updateModel({
  apiId, // required
  ... // properties to update
});
```

### Delete a Model

To delete a model

```js
migration.deleteModel(apiId);
```

### Fields

Your schema is built up of GraphQL types. If you’re familiar working with GraphQL, you should feel right at home. Hygraph supports all of the common GraphQL types you are used to, as well as some of its own.

#### Create a Field

To create a simple field.

```js
const { FieldType } = require("@hygraph/management-sdk");

model.addSimpleField({
  apiId: '...',
  displayName: '...',
  type: FieldType.String,
});
```

String fields have several [form renderers](/src/renderer.ts#L4-L10), including single line, multiline, markdown, and slug. You can set the form renderer as follows:

```js
const { FieldType, Renderer } = require("@hygraph/management-sdk");

model.addSimpleField({
  apiId: '...',
  displayName: '...',
  type: FieldType.String,
  formRenderer: Renderer.MultiLine
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
const { RelationType } = require("@hygraph/management-sdk");

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
const { RelationType } = require("@hygraph/management-sdk");

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

#### Update a Field

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
model.updateUnionField({
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

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Local Development

To update the Management API schema this SDK depends on you must run `npm run generate`.

PR titles must follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) to publish to NPM automatically.
