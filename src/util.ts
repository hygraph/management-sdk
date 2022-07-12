import { GraphQLClient } from "graphql-request/dist";
import { EnvironmentInfo, MigrationChange, MigrationInfo } from "./migration";
import { nanoid } from "nanoid";

// Credit: https://stackoverflow.com/a/54178819/524060
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * @ignore
 */
enum MutationMode {
  Create = 1,
  Update,
  Delete,
}

/**
 * RelationType is the relationship type for Relational and Union Fields.
 */
enum RelationType {
  OneToOne = 1,
  OneToMany,
  ManyToOne,
  ManyToMany,
}

/**
 * @ignore
 * @param client
 * @param endpoint
 */
async function fetchEnvironment(
  client: GraphQLClient,
  endpoint: string
): Promise<EnvironmentInfo> {
  const contentAPIEndpoint = endpoint.replace("graphcms.com", "hygraph.com");
  const query = `
    {
      viewer {
        ... on TokenViewer {
          project {
            id
            environments {
              id
              name
              endpoint
            }
          }
        }
        ...on UserViewer {
          projects {
            id
            environments {
              id
              name
              endpoint
            }
          }
        }
      }
    }
    `;

  try {
    const notFound = `environment with endpoint '${contentAPIEndpoint}' not found`;
    const res = await client.request(query);

    const project = res?.viewer?.project;
    const projects = res?.viewer?.projects;
    if (!project && !projects) {
      return Promise.reject(notFound);
    }
    if (projects) {
      for (const p of projects) {
        for (const environment of p.environments) {
          if (environment.endpoint === contentAPIEndpoint) {
            environment.projectId = p.id;
            return environment;
          }
        }
      }
    } else {
      for (const environment of project.environments) {
        if (environment.endpoint === contentAPIEndpoint) {
          environment.projectId = project.id;
          return environment;
        }
      }
    }
    return Promise.reject(notFound);
  } catch (e) {
    throw new Error(e);
  }
}

/**
 * @ignore
 * @param client
 * @param environmentId
 * @param changes
 */
async function submitMigration(
  client: GraphQLClient,
  body: {
    environmentId: string;
    name?: string;
    changes: MigrationChange[];
  }
) {
  const mutationArgs = [
    "$environmentId: ID!",
    "$changes: [BatchMigrationChangeInput!]!",
    "$name: String!",
  ];
  const bodyArgs = [
    "environmentId: $environmentId",
    "changes: $changes",
    "name: $name",
  ];

  const query = `
    mutation (${mutationArgs.join(", ")}) {
      submitBatchChanges(data: {
        ${bodyArgs.join(", ")}
      }) {
        migration {
          id,
          status,
          errors,
        }
      }
    }
  `;

  try {
    const variables = {
      changes: body.changes,
      environmentId: body.environmentId,
      name: body.name || nanoid(),
    };

    const res = await client.request(query, variables);
    const migration = res?.submitBatchChanges?.migration;

    if (!migration) {
      return Promise.reject({
        // TODO: have a decent error code.
        errors: "unexpected response received",
      });
    }

    if (migration.errors) {
      return Promise.reject({
        id: migration.id,
        errors: migration.errors,
      });
    }

    return {
      id: migration.id,
      status: migration.status,
      name: variables.name,
    };
  } catch (e) {
    return Promise.reject(e);
  }
}

/**
 * @ignore
 */
interface FetchMigrationArgs {
  projectId: string;
  migrationId: string;
  environmentName: string;
}

/**
 * @ignore
 * @param client
 * @param args
 */
async function fetchMigration(
  client: GraphQLClient,
  args: FetchMigrationArgs
): Promise<MigrationInfo> {
  const query = `
    query fetchMigration($projectId: ID!, $environmentName: String!, $migrationId: ID!){
      viewer {
        project(id: $projectId) {
          environment(name: $environmentName) {
            migration(id: $migrationId) {
              id
              status
              errors
              createdAt
              finishedAt
            }
          }
        }
      }
    }
   `;

  const variables = {
    migrationId: args.migrationId,
    environmentName: args.environmentName,
    projectId: args.projectId,
  };

  try {
    const notFound = `migration with id '${args.migrationId}' not found`;
    const res = await client.request(query, variables);
    const migration = res?.viewer?.project?.environment?.migration;
    if (!migration) {
      return Promise.reject(notFound);
    }
    return migration;
  } catch (e) {
    return Promise.reject(e);
  }
}

export {
  PartialBy,
  MutationMode,
  RelationType,
  fetchEnvironment,
  fetchMigration,
  FetchMigrationArgs,
  submitMigration,
};
