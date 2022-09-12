export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  DateTime: any;
};

export enum GraphQLCacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE",
}

export type GraphQLIAssetConfig = {
  apiKey: Scalars["String"];
};

export type GraphQLFilestackSecurityOptions = {
  __typename?: "FilestackSecurityOptions";
  enabled: Scalars["Boolean"];
  auth?: Maybe<GraphQLFilestackSecurityAuthOptions>;
  globalExpires: Scalars["String"];
  stageOverrides: Array<GraphQLStageFilestackSecurityOptions>;
};

export type GraphQLFilestackSecurityAuthOptions = {
  __typename?: "FilestackSecurityAuthOptions";
  policy: Scalars["String"];
  signature: Scalars["String"];
};

export type GraphQLStageFilestackSecurityOptions = {
  __typename?: "StageFilestackSecurityOptions";
  stage: GraphQLStage;
  expires: Scalars["String"];
};

export type GraphQLFilestack = GraphQLIAssetConfig & {
  __typename?: "Filestack";
  apiKey: Scalars["String"];
  path: Scalars["String"];
  bucket: Scalars["String"];
  isManagedBucket: Scalars["Boolean"];
  security: GraphQLFilestackSecurityOptions;
};

export type GraphQLCommonFilestackSecurityOptions = {
  __typename?: "CommonFilestackSecurityOptions";
  enabled: Scalars["Boolean"];
  auth?: Maybe<GraphQLFilestackSecurityAuthOptions>;
};

export type GraphQLCommonFilestack = {
  __typename?: "CommonFilestack";
  apiKey: Scalars["String"];
  path: Scalars["String"];
  security: GraphQLCommonFilestackSecurityOptions;
};

export type GraphQLUpdateFilestackSecurityOptionsInput = {
  environmentId: Scalars["ID"];
  enabled?: Maybe<Scalars["Boolean"]>;
  globalExpires?: Maybe<Scalars["String"]>;
  stageOverrides?: Maybe<
    Array<GraphQLUpdateStageFilestackSecurityOptionsInput>
  >;
};

export type GraphQLUpdateStageFilestackSecurityOptionsInput = {
  stageId: Scalars["ID"];
  expires: Scalars["String"];
};

export type GraphQLUpdateFilestackSecurityOptionsPayload = {
  __typename?: "UpdateFilestackSecurityOptionsPayload";
  updatedEnvironment: GraphQLEnvironment;
  updatedFilestack: GraphQLFilestack;
};

export type GraphQLContentModel = {
  __typename?: "ContentModel";
  models: Array<GraphQLIModel>;
  components: Array<GraphQLComponent>;
  model: GraphQLIModel;
  component: GraphQLComponent;
  assetModel: GraphQLIModel;
  enumerations: Array<GraphQLEnumeration>;
  locales: Array<GraphQLLocale>;
  unions: Array<Maybe<GraphQLUnion>>;
  stages: Array<GraphQLStage>;
};

export type GraphQLContentModelModelsArgs = {
  includeSystemModels?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLContentModelComponentsArgs = {
  includeSystemComponents?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLContentModelModelArgs = {
  id: Scalars["ID"];
};

export type GraphQLContentModelComponentArgs = {
  id: Scalars["ID"];
};

export type GraphQLContentModelEnumerationsArgs = {
  includeSystemEnumerations?: Maybe<Scalars["Boolean"]>;
};

export enum GraphQLContentViewType {
  BuiltIn = "BUILT_IN",
  Public = "PUBLIC",
}

export enum GraphQLColumnOrderByDir {
  Asc = "ASC",
  Desc = "DESC",
}

export type GraphQLOrderBy = {
  __typename?: "OrderBy";
  orderByField: GraphQLIField;
  orderDir: GraphQLColumnOrderByDir;
};

export type GraphQLContentView = {
  __typename?: "ContentView";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  model: GraphQLIModel;
  type: GraphQLContentViewType;
  isSystem: Scalars["Boolean"];
  orderBy?: Maybe<GraphQLOrderBy>;
  columns: Array<GraphQLContentViewColumn>;
  viewGroup: GraphQLViewGroup;
  position?: Maybe<Scalars["Int"]>;
  filters: Scalars["JSON"];
};

export type GraphQLCreateContentViewPayload = {
  __typename?: "CreateContentViewPayload";
  createdContentView: GraphQLContentView;
};

export type GraphQLUpdateContentViewPayload = {
  __typename?: "UpdateContentViewPayload";
  updatedContentView: GraphQLContentView;
};

export type GraphQLMoveContentViewPayload = {
  __typename?: "MoveContentViewPayload";
  movedContentView: GraphQLContentView;
  updatedViewGroups: Array<GraphQLViewGroup>;
};

export type GraphQLDeleteContentViewPayload = {
  __typename?: "DeleteContentViewPayload";
  deletedContentViewId: Scalars["ID"];
};

export type GraphQLContentViewColumn = {
  __typename?: "ContentViewColumn";
  id: Scalars["ID"];
  field: GraphQLIField;
  isVisible: Scalars["Boolean"];
  width?: Maybe<Scalars["Int"]>;
  position: Scalars["Int"];
};

export type GraphQLContentViewFilterInput = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  search?: Maybe<Scalars["String"]>;
};

export type GraphQLOrderByInput = {
  orderByField: Scalars["ID"];
  orderDir: GraphQLColumnOrderByDir;
};

export type GraphQLContentViewColumnInput = {
  fieldId: Scalars["ID"];
  isVisible: Scalars["Boolean"];
  width?: Maybe<Scalars["Int"]>;
};

export type GraphQLCreateContentViewInput = {
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  modelId: Scalars["ID"];
  columns: Array<GraphQLContentViewColumnInput>;
  orderBy?: Maybe<GraphQLOrderByInput>;
  viewGroupId?: Maybe<Scalars["ID"]>;
  filters?: Maybe<Scalars["JSON"]>;
};

export type GraphQLUpdateContentViewInput = {
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  columns: Array<GraphQLContentViewColumnInput>;
  orderBy?: Maybe<GraphQLOrderByInput>;
  viewGroupId?: Maybe<Scalars["ID"]>;
  filters?: Maybe<Scalars["JSON"]>;
};

export type GraphQLMoveContentViewInput = {
  id: Scalars["ID"];
  viewGroupId: Scalars["ID"];
  position: Scalars["Int"];
};

export type GraphQLDeleteContentViewInput = {
  id: Scalars["ID"];
};

export type GraphQLInvite = {
  __typename?: "Invite";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  expirationDate: Scalars["DateTime"];
  email: Scalars["String"];
  code: Scalars["String"];
  issuer?: Maybe<GraphQLMember>;
  project: GraphQLProject;
  acceptedAt?: Maybe<Scalars["DateTime"]>;
  roles: Array<GraphQLRole>;
  origin?: Maybe<Scalars["String"]>;
};

export type GraphQLSendInviteInput = {
  email: Scalars["String"];
  projectId: Scalars["ID"];
  roleIds: Array<Scalars["ID"]>;
  origin?: Maybe<Scalars["String"]>;
};

export type GraphQLRevokeInviteInput = {
  id: Scalars["ID"];
};

export type GraphQLAcceptInviteInput = {
  code: Scalars["String"];
};

export type GraphQLSendInvitePayload = {
  __typename?: "SendInvitePayload";
  invite: GraphQLInvite;
};

export type GraphQLRevokeInvitePayload = {
  __typename?: "RevokeInvitePayload";
  revokedInviteId: Scalars["ID"];
};

export type GraphQLAcceptInvitePayload = {
  __typename?: "AcceptInvitePayload";
  invite: GraphQLInvite;
};

export enum GraphQLLimitType {
  Roles = "ROLES",
  Locales = "LOCALES",
  Environments = "ENVIRONMENTS",
  Webhooks = "WEBHOOKS",
  Models = "MODELS",
  Records = "RECORDS",
  AssetTraffic = "ASSET_TRAFFIC",
  ApiOperations = "API_OPERATIONS",
  Seats = "SEATS",
  WorkflowSteps = "WORKFLOW_STEPS",
  Integrations = "INTEGRATIONS",
  Versions = "VERSIONS",
  VersionRetentionPeriod = "VERSION_RETENTION_PERIOD",
  ContentModels = "CONTENT_MODELS",
  ContentStages = "CONTENT_STAGES",
  AuditLogsRetentionPeriod = "AUDIT_LOGS_RETENTION_PERIOD",
  RemoteSources = "REMOTE_SOURCES",
  RemoteFields = "REMOTE_FIELDS",
  RemoteFieldsMaxExecutionTime = "REMOTE_FIELDS_MAX_EXECUTION_TIME",
  RemoteFieldsMaxResponseSize = "REMOTE_FIELDS_MAX_RESPONSE_SIZE",
  RemoteFieldsHttpWorkers = "REMOTE_FIELDS_HTTP_WORKERS",
  RateLimitPerSecond = "RATE_LIMIT_PER_SECOND",
  ContentPermissions = "CONTENT_PERMISSIONS",
  PermanentAuthTokens = "PERMANENT_AUTH_TOKENS",
  SchedulingPendingReleases = "SCHEDULING_PENDING_RELEASES",
  SchedulingPendingOperations = "SCHEDULING_PENDING_OPERATIONS",
  SchedulingOperationsInRelease = "SCHEDULING_OPERATIONS_IN_RELEASE",
}

export type GraphQLLimit = {
  __typename?: "Limit";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  name: Scalars["String"];
  type: GraphQLLimitType;
  amount?: Maybe<Scalars["Float"]>;
  addOnCode?: Maybe<Scalars["String"]>;
  plan: GraphQLPlan;
};

export type GraphQLMetaInfo = {
  __typename?: "MetaInfo";
  serverVersion: Scalars["String"];
};

export type GraphQLStats = {
  __typename?: "Stats";
  time: Scalars["DateTime"];
  value: Scalars["Float"];
};

export type GraphQLMetrics = {
  __typename?: "Metrics";
  apiOperations: Array<GraphQLStats>;
  assetTraffic: Array<GraphQLStats>;
  assetTransformations: Array<GraphQLStats>;
};

export type GraphQLMetricsApiOperationsArgs = {
  start: Scalars["DateTime"];
  end: Scalars["DateTime"];
  resolution: Scalars["Int"];
};

export type GraphQLMetricsAssetTrafficArgs = {
  start: Scalars["DateTime"];
  end: Scalars["DateTime"];
};

export type GraphQLMetricsAssetTransformationsArgs = {
  start: Scalars["DateTime"];
  end: Scalars["DateTime"];
};

export type GraphQLPaymentAccount = {
  __typename?: "PaymentAccount";
  id: Scalars["ID"];
  accountName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  isClosed: Scalars["Boolean"];
  isMain: Scalars["Boolean"];
  hostedPageUrl?: Maybe<Scalars["String"]>;
  hostedBillingUrl?: Maybe<Scalars["String"]>;
  accountManagementUrl?: Maybe<Scalars["String"]>;
  user: GraphQLIUser;
  paymentSubscriptions: Array<GraphQLPaymentSubscription>;
};

export type GraphQLPaymentAccountHostedPageUrlArgs = {
  planName: Scalars["String"];
  projectId: Scalars["ID"];
};

export type GraphQLStartTrialPayload = {
  __typename?: "StartTrialPayload";
  project: GraphQLProject;
};

export type GraphQLLeaveTrialPayload = {
  __typename?: "LeaveTrialPayload";
  project: GraphQLProject;
};

export type GraphQLBillingPeriod = {
  __typename?: "BillingPeriod";
  from: Scalars["DateTime"];
  to: Scalars["DateTime"];
};

export type GraphQLPaymentSubscription = {
  __typename?: "PaymentSubscription";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  renewsAt?: Maybe<Scalars["DateTime"]>;
  projects: Array<GraphQLProject>;
  identifier?: Maybe<Scalars["String"]>;
  paymentAccount: GraphQLPaymentAccount;
  plan: GraphQLPlan;
  billingPeriod: GraphQLBillingPeriod;
  isCanceled: Scalars["Boolean"];
};

export type GraphQLSwitchPaymentSubscriptionInput = {
  planName: Scalars["String"];
  subscriptionId: Scalars["ID"];
};

export type GraphQLSwitchPaymentSubscriptionPayload = {
  __typename?: "SwitchPaymentSubscriptionPayload";
  subscription: GraphQLPaymentSubscription;
  project: GraphQLProject;
};

export type GraphQLStartTrialInput = {
  projectId: Scalars["ID"];
  planId: Scalars["ID"];
};

export type GraphQLLeaveTrialInput = {
  projectId: Scalars["ID"];
};

export enum GraphQLPermanentAuthTokenAudience {
  ContentApi = "CONTENT_API",
  ManagementApi = "MANAGEMENT_API",
}

export type GraphQLPermanentAuthToken = {
  __typename?: "PermanentAuthToken";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  token: Scalars["String"];
  defaults: GraphQLPermanentAuthTokenDefaults;
  contentPermissions: Array<GraphQLIContentPermission>;
  managementPermissions: Array<GraphQLManagementPermission>;
};

export type GraphQLPermanentAuthTokenDefaults = {
  __typename?: "PermanentAuthTokenDefaults";
  stage: GraphQLStage;
};

export type GraphQLManagementPermission = {
  __typename?: "ManagementPermission";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  description?: Maybe<Scalars["String"]>;
  action: GraphQLPermissionAction;
};

export type GraphQLCreatePermanentAuthTokenPayload = {
  __typename?: "CreatePermanentAuthTokenPayload";
  createdPermanentAuthToken: GraphQLPermanentAuthToken;
};

export type GraphQLUpdatePermanentAuthTokenPayload = {
  __typename?: "UpdatePermanentAuthTokenPayload";
  updatedPermanentAuthToken: GraphQLPermanentAuthToken;
};

export type GraphQLDeletePermanentAuthTokenPayload = {
  __typename?: "DeletePermanentAuthTokenPayload";
  deletedPermanentAuthTokenId: Scalars["ID"];
};

export enum GraphQLPermissionAction {
  ProjectClone = "PROJECT_CLONE",
  ProjectUpdate = "PROJECT_UPDATE",
  ProjectDelete = "PROJECT_DELETE",
  ManagePayment = "MANAGE_PAYMENT",
  PlaygroundUse = "PLAYGROUND_USE",
  AuditLogsRead = "AUDIT_LOGS_READ",
  ViewTeamMemberSettings = "VIEW_TEAM_MEMBER_SETTINGS",
  ViewRolePermissionSettings = "VIEW_ROLE_PERMISSION_SETTINGS",
  ViewSchema = "VIEW_SCHEMA",
  EnvironmentCreate = "ENVIRONMENT_CREATE",
  EnvironmentRead = "ENVIRONMENT_READ",
  EnvironmentUpdate = "ENVIRONMENT_UPDATE",
  EnvironmentDelete = "ENVIRONMENT_DELETE",
  EnvironmentPromote = "ENVIRONMENT_PROMOTE",
  ModelCreate = "MODEL_CREATE",
  ModelRead = "MODEL_READ",
  ModelUpdate = "MODEL_UPDATE",
  ModelDelete = "MODEL_DELETE",
  ComponentCreate = "COMPONENT_CREATE",
  ComponentRead = "COMPONENT_READ",
  ComponentUpdate = "COMPONENT_UPDATE",
  ComponentDelete = "COMPONENT_DELETE",
  LocaleCreate = "LOCALE_CREATE",
  LocaleRead = "LOCALE_READ",
  LocaleUpdate = "LOCALE_UPDATE",
  LocaleDelete = "LOCALE_DELETE",
  StageCreate = "STAGE_CREATE",
  StageRead = "STAGE_READ",
  StageUpdate = "STAGE_UPDATE",
  StageDelete = "STAGE_DELETE",
  EnumerationCreate = "ENUMERATION_CREATE",
  EnumerationRead = "ENUMERATION_READ",
  EnumerationUpdate = "ENUMERATION_UPDATE",
  EnumerationDelete = "ENUMERATION_DELETE",
  FieldCreate = "FIELD_CREATE",
  FieldRead = "FIELD_READ",
  FieldUpdate = "FIELD_UPDATE",
  FieldDelete = "FIELD_DELETE",
  RemoteSourceCreate = "REMOTE_SOURCE_CREATE",
  RemoteSourceRead = "REMOTE_SOURCE_READ",
  RemoteSourceUpdate = "REMOTE_SOURCE_UPDATE",
  RemoteSourceDelete = "REMOTE_SOURCE_DELETE",
  PatCreate = "PAT_CREATE",
  PatRead = "PAT_READ",
  PatUpdate = "PAT_UPDATE",
  PatDelete = "PAT_DELETE",
  ContentviewCreate = "CONTENTVIEW_CREATE",
  ContentviewRead = "CONTENTVIEW_READ",
  ContentviewUpdate = "CONTENTVIEW_UPDATE",
  ContentviewSystemUpdate = "CONTENTVIEW_SYSTEM_UPDATE",
  ContentviewDelete = "CONTENTVIEW_DELETE",
  StorageBucketCreate = "STORAGE_BUCKET_CREATE",
  StorageBucketRead = "STORAGE_BUCKET_READ",
  StorageBucketUpdate = "STORAGE_BUCKET_UPDATE",
  StorageBucketDelete = "STORAGE_BUCKET_DELETE",
  RoleCreate = "ROLE_CREATE",
  RoleUpdate = "ROLE_UPDATE",
  RoleDelete = "ROLE_DELETE",
  WebhookCreate = "WEBHOOK_CREATE",
  WebhookRead = "WEBHOOK_READ",
  WebhookUpdate = "WEBHOOK_UPDATE",
  WebhookDelete = "WEBHOOK_DELETE",
  UserInvite = "USER_INVITE",
  UserAssignrole = "USER_ASSIGNROLE",
  UserRemove = "USER_REMOVE",
  ViewGroupCreate = "VIEW_GROUP_CREATE",
  ViewGroupRead = "VIEW_GROUP_READ",
  ViewGroupUpdate = "VIEW_GROUP_UPDATE",
  ViewGroupDelete = "VIEW_GROUP_DELETE",
  ContentCreate = "CONTENT_CREATE",
  ContentRead = "CONTENT_READ",
  ContentUpdate = "CONTENT_UPDATE",
  ContentDelete = "CONTENT_DELETE",
  ContentPublish = "CONTENT_PUBLISH",
  ContentUpdatePublished = "CONTENT_UPDATE_PUBLISHED",
  ContentPermissionCreate = "CONTENT_PERMISSION_CREATE",
  ContentPermissionRead = "CONTENT_PERMISSION_READ",
  ContentPermissionUpdate = "CONTENT_PERMISSION_UPDATE",
  ContentPermissionDelete = "CONTENT_PERMISSION_DELETE",
  IntegrationCreate = "INTEGRATION_CREATE",
  IntegrationRead = "INTEGRATION_READ",
  IntegrationUpdate = "INTEGRATION_UPDATE",
  IntegrationDelete = "INTEGRATION_DELETE",
  NetlifyTriggerBuild = "NETLIFY_TRIGGER_BUILD",
  VercelTriggerBuild = "VERCEL_TRIGGER_BUILD",
  ExtensionCreate = "EXTENSION_CREATE",
  ExtensionRead = "EXTENSION_READ",
  ExtensionUpdate = "EXTENSION_UPDATE",
  ExtensionDelete = "EXTENSION_DELETE",
  AppCreate = "APP_CREATE",
  AppUpdate = "APP_UPDATE",
  AppDelete = "APP_DELETE",
  AppInstallationCreate = "APP_INSTALLATION_CREATE",
  AppInstallationUpdate = "APP_INSTALLATION_UPDATE",
  AppInstallationDelete = "APP_INSTALLATION_DELETE",
}

export type GraphQLPermanentAuthTokenDefaultsInput = {
  stage: Scalars["ID"];
};

export type GraphQLCreatePermanentAuthTokenInput = {
  environmentId: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  defaults?: Maybe<GraphQLPermanentAuthTokenDefaultsInput>;
  managementPermissionIds?: Maybe<Array<Scalars["ID"]>>;
};

export type GraphQLUpdatePermanentAuthTokenInput = {
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  defaults?: Maybe<GraphQLPermanentAuthTokenDefaultsInput>;
  managementPermissionIds?: Maybe<Array<Scalars["ID"]>>;
};

export type GraphQLDeletePermanentAuthTokenInput = {
  id: Scalars["ID"];
};

export type GraphQLUpdatePublicEndpointInput = {
  environmentId: Scalars["ID"];
  defaults?: Maybe<GraphQLUpdatePublicEndpointDefaultsInput>;
};

export type GraphQLUpdatePublicEndpointDefaultsInput = {
  stage: Scalars["ID"];
};

export type GraphQLUpdatePublicPermissionInput = {
  allowMutations: Scalars["Boolean"];
  allowQueriesOnStages: Array<Scalars["ID"]>;
};

export type GraphQLUpdatePublicPermissionsPayload = {
  __typename?: "UpdatePublicPermissionsPayload";
  environment: GraphQLEnvironment;
};

export type GraphQLPlan = {
  __typename?: "Plan";
  id: Scalars["ID"];
  name: Scalars["String"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  displayName: Scalars["String"];
  price: Scalars["Float"];
  isFree: Scalars["Boolean"];
  limits: Array<GraphQLLimit>;
  isSwitchable?: Maybe<Scalars["Boolean"]>;
  isEnterprise: Scalars["Boolean"];
  billingPeriodMonths: Scalars["Int"];
};

export type GraphQLPlanIsSwitchableArgs = {
  projectId: Scalars["ID"];
};

export type GraphQLAuditLogWhereInput = {
  timestamp?: Maybe<Scalars["DateTime"]>;
  timestamp_lt?: Maybe<Scalars["DateTime"]>;
  timestamp_gt?: Maybe<Scalars["DateTime"]>;
  timestamp_lte?: Maybe<Scalars["DateTime"]>;
  timestamp_gte?: Maybe<Scalars["DateTime"]>;
  triggeredBy?: Maybe<Scalars["String"]>;
  action?: Maybe<GraphQLAuditLogAction>;
  triggerType?: Maybe<GraphQLAuditLogTriggerType>;
  environmentName?: Maybe<Scalars["String"]>;
  entityId?: Maybe<Scalars["String"]>;
  resource?: Maybe<GraphQLAuditLogResource>;
};

export enum GraphQLAuditLogOrderByInput {
  TimestampAsc = "timestamp_ASC",
  TimestampDesc = "timestamp_DESC",
}

export enum GraphQLAuditLogResource {
  Project = "PROJECT",
  Environment = "ENVIRONMENT",
  Model = "MODEL",
  Stage = "STAGE",
  Locale = "LOCALE",
  Pat = "PAT",
  Enumeration = "ENUMERATION",
  Field = "FIELD",
  Content = "CONTENT",
  Webhook = "WEBHOOK",
  Member = "MEMBER",
  Role = "ROLE",
  Viewgroup = "VIEWGROUP",
  Contentview = "CONTENTVIEW",
  Extension = "EXTENSION",
  EnumerationValue = "ENUMERATION_VALUE",
  Invite = "INVITE",
  Component = "COMPONENT",
}

export enum GraphQLAuditLogAction {
  Create = "CREATE",
  Update = "UPDATE",
  Delete = "DELETE",
  Publish = "PUBLISH",
  Unpublish = "UNPUBLISH",
  Accept = "ACCEPT",
}

export enum GraphQLAuditLogTriggerType {
  User = "USER",
  Pat = "PAT",
  ThirdParty = "THIRD_PARTY",
  Open = "OPEN",
}

export type GraphQLAuditLogTriggeredBy =
  | GraphQLPermanentAuthToken
  | GraphQLMember;

export type GraphQLAuditLog = {
  __typename?: "AuditLog";
  id: Scalars["String"];
  entityId?: Maybe<Scalars["String"]>;
  timestamp: Scalars["DateTime"];
  resource: GraphQLAuditLogResource;
  action: GraphQLAuditLogAction;
  environmentName?: Maybe<Scalars["String"]>;
  payload?: Maybe<Scalars["JSON"]>;
  triggeredBy?: Maybe<GraphQLAuditLogTriggeredBy>;
  triggerType: GraphQLAuditLogTriggerType;
};

export type GraphQLAuditLogsPayload = {
  __typename?: "AuditLogsPayload";
  logs: Array<GraphQLAuditLog>;
  total: Scalars["Float"];
};

export enum GraphQLLifecycleStepType {
  SchemaSetup = "SCHEMA_SETUP",
  ContentAdded = "CONTENT_ADDED",
  ExploreContentApi = "EXPLORE_CONTENT_API",
  ApiPermissionsSet = "API_PERMISSIONS_SET",
  ExternalTraffic = "EXTERNAL_TRAFFIC",
}

export type GraphQLLifecycleStep = {
  __typename?: "LifecycleStep";
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  done: Scalars["Boolean"];
  type: GraphQLLifecycleStepType;
};

export type GraphQLLifecycle = {
  __typename?: "Lifecycle";
  steps?: Maybe<Array<GraphQLLifecycleStep>>;
  progress: Scalars["Float"];
};

export type GraphQLMembersAggregate = {
  __typename?: "MembersAggregate";
  count: Scalars["Int"];
};

export type GraphQLPageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  pageSize: Scalars["Int"];
};

export type GraphQLMembersConnection = {
  __typename?: "MembersConnection";
  pageInfo: GraphQLPageInfo;
  edges: Array<GraphQLMemberEdge>;
  aggregate: GraphQLMembersAggregate;
};

export type GraphQLMemberEdge = {
  __typename?: "MemberEdge";
  node: GraphQLMember;
};

export type GraphQLProject = {
  __typename?: "Project";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  picture?: Maybe<Scalars["String"]>;
  subscription: GraphQLPaymentSubscription;
  invites: Array<GraphQLInvite>;
  owner: GraphQLMember;
  viewerAsMember?: Maybe<GraphQLMember>;
  region: GraphQLRegion;
  existingRoles: Array<GraphQLRole>;
  existingRole: GraphQLRole;
  environments: Array<GraphQLEnvironment>;
  environment: GraphQLEnvironment;
  members: Array<GraphQLMember>;
  membersConnection: GraphQLMembersConnection;
  quotas: GraphQLQuota;
  lifecycle: GraphQLLifecycle;
  inTrial?: Maybe<Scalars["Boolean"]>;
  trialExpiresIn?: Maybe<Scalars["DateTime"]>;
  isCloning?: Maybe<Scalars["Boolean"]>;
  meta: Scalars["JSON"];
  auditLogs: GraphQLAuditLogsPayload;
  availableManagementPermissions: Array<GraphQLManagementPermission>;
  cloningProjects: Array<GraphQLCloningProject>;
  /** if this is `null` it means the project is not publicly clone-able */
  publicCloneAccess?: Maybe<GraphQLPublicCloneAccess>;
  defaultPaginationSize?: Maybe<Scalars["Int"]>;
  maxPaginationSize?: Maybe<Scalars["Int"]>;
};

export type GraphQLProjectExistingRoleArgs = {
  id: Scalars["ID"];
};

export type GraphQLProjectEnvironmentArgs = {
  name: Scalars["String"];
};

export type GraphQLProjectMembersConnectionArgs = {
  skip?: Scalars["Int"];
  first?: Scalars["Int"];
};

export type GraphQLProjectAuditLogsArgs = {
  where?: Maybe<GraphQLAuditLogWhereInput>;
  limit?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<GraphQLAuditLogOrderByInput>;
};

export type GraphQLPublicCloneAccess = {
  __typename?: "PublicCloneAccess";
  id: Scalars["ID"];
  enabled: Scalars["Boolean"];
  includeContent: Scalars["Boolean"];
  includeWebhooks: Scalars["Boolean"];
};

export type GraphQLDeleteProjectPayload = {
  __typename?: "DeleteProjectPayload";
  deletedProjectId: Scalars["ID"];
};

export type GraphQLLeaveProjectPayload = {
  __typename?: "LeaveProjectPayload";
  leftProjectId: Scalars["ID"];
};

export type GraphQLTemplateResourceInput = {
  title: Scalars["String"];
  url: Scalars["String"];
};

export type GraphQLTechnologyStackInput = {
  image: Scalars["String"];
  title: Scalars["String"];
  url?: Maybe<Scalars["String"]>;
};

export type GraphQLUpsertTemplateInput = {
  gcms?: Maybe<Scalars["String"]>;
};

export type GraphQLUpsertTemplatePayload = {
  __typename?: "UpsertTemplatePayload";
  gcms?: Maybe<Scalars["String"]>;
};

export type GraphQLMaxComplexityInput = {
  gcms?: Maybe<Scalars["String"]>;
};

export type GraphQLMaxComplexityPayload = {
  __typename?: "MaxComplexityPayload";
  gcms?: Maybe<Scalars["String"]>;
};

export type GraphQL_UpdatePlanTrialInput = {
  gcms?: Maybe<Scalars["String"]>;
};

export type GraphQL_UpdatePlanTrialPayload = {
  __typename?: "_UpdatePlanTrialPayload";
  gcms?: Maybe<Scalars["String"]>;
};

export type GraphQL_SwitchOwnerInput = {
  gcms?: Maybe<Scalars["String"]>;
};

export type GraphQL_SwitchOwnerPayload = {
  __typename?: "_SwitchOwnerPayload";
  gcms?: Maybe<Scalars["String"]>;
};

export type GraphQL_ResetContentConfigInput = {
  gcms?: Maybe<Scalars["String"]>;
};

export type GraphQL_ResetContentConfigPayload = {
  __typename?: "_ResetContentConfigPayload";
  gcms?: Maybe<Scalars["String"]>;
};

export type GraphQL_BookOverLimitInput = {
  gcms?: Maybe<Scalars["String"]>;
};

export type GraphQL_BookOverLimitAddonUsage = {
  __typename?: "_BookOverLimitAddonUsage";
  gcms?: Maybe<Scalars["String"]>;
};

export type GraphQL_OverLimitProjectUsage = {
  __typename?: "_OverLimitProjectUsage";
  gcms?: Maybe<Scalars["String"]>;
};

export type GraphQL_OverLimitProjectAddonsValues = {
  __typename?: "_OverLimitProjectAddonsValues";
  gcms?: Maybe<Scalars["String"]>;
};

export type GraphQL_OverLimitProjectAddons = {
  __typename?: "_OverLimitProjectAddons";
  gcms?: Maybe<Scalars["String"]>;
};

export type GraphQL_OverLimitProject = {
  __typename?: "_OverLimitProject";
  gcms?: Maybe<Scalars["String"]>;
};

export type GraphQL_BookOverLimitPayload = {
  __typename?: "_BookOverLimitPayload";
  gcms?: Maybe<Scalars["String"]>;
};

export type GraphQLLeaveProjectInput = {
  id: Scalars["ID"];
};

/** create project from a template */
export type GraphQLCreateProjectTemplateInput = {
  /** id of template (if it's marked as template) or id of a project you are an owner of */
  templateId: Scalars["ID"];
  /** Set to false to not include content */
  content?: Scalars["Boolean"];
  /** Set to true to include webhooks. If webhooks are included, they will be disabled initially in the created project. */
  webhooks?: Scalars["Boolean"];
};

/** clone project from a template */
export type GraphQLCloneProjectTemplateInput = {
  /** id of template (if it's marked as template) or id of a project you are an owner of */
  templateId: Scalars["ID"];
  /** Set to false to not include content */
  content?: Scalars["Boolean"];
  /** Set to true to include webhooks. If webhooks are included, they will be disabled initially in the cloned project. */
  webhooks?: Scalars["Boolean"];
};

export type GraphQLCloneProjectInput = {
  region: Scalars["String"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  /** required to clone from a template or a project you are an owner of */
  template: GraphQLCloneProjectTemplateInput;
};

/** This is used to clone a project that someone made publicly clone-able. */
export type GraphQLClonePublicProjectInput = {
  region: Scalars["String"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  /** Usually extracted from the public clone url. */
  publicCloneAccessId: Scalars["ID"];
};

export type GraphQLCreateProjectInput = {
  region: Scalars["String"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  /** optional argument used for creating the project from a template or a project you are an owner of */
  template?: Maybe<GraphQLCreateProjectTemplateInput>;
};

export type GraphQLUpdatePublicCloneAccessInput = {
  enabled: Scalars["Boolean"];
  includeContent: Scalars["Boolean"];
  includeWebhooks: Scalars["Boolean"];
};

export type GraphQLUpdateProjectInput = {
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  picture?: Maybe<Scalars["String"]>;
  publicCloneAccess?: Maybe<GraphQLUpdatePublicCloneAccessInput>;
};

export type GraphQLDeleteProjectInput = {
  id: Scalars["ID"];
};

export type GraphQLProgress = {
  __typename?: "Progress";
  current: Scalars["Float"];
  max?: Maybe<Scalars["Float"]>;
  percent?: Maybe<Scalars["Float"]>;
  estimate?: Maybe<Scalars["Float"]>;
};

export type GraphQLQuota = {
  __typename?: "Quota";
  apiOperations: GraphQLProgress;
  assetTraffic: GraphQLProgress;
  records: GraphQLProgress;
  seats: GraphQLProgress;
  environments: GraphQLProgress;
  roles: GraphQLProgress;
};

export type GraphQLEnvironmentLevelQuota = {
  __typename?: "EnvironmentLevelQuota";
  locales: GraphQLProgress;
  webhooks: GraphQLProgress;
  models: GraphQLProgress;
  stages: GraphQLProgress;
  contentPermissions: GraphQLProgress;
  remoteSources: GraphQLProgress;
};

export type GraphQLRegion = {
  __typename?: "Region";
  id: Scalars["String"];
  name: Scalars["String"];
  isBeta: Scalars["Boolean"];
  pingUrl?: Maybe<Scalars["String"]>;
  isReadOnly: Scalars["Boolean"];
};

export type GraphQLDeleteRolePayload = {
  __typename?: "DeleteRolePayload";
  deletedId: Scalars["ID"];
};

export type GraphQLRole = {
  __typename?: "Role";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  isDefault: Scalars["Boolean"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  /**
   * Returns contentPermissions for a role.
   * Optionally filtered by environment.
   */
  contentPermissions: Array<GraphQLIContentPermission>;
  managementPermissions: Array<GraphQLManagementPermission>;
  members: Array<GraphQLMember>;
  membersConnection: GraphQLMembersConnection;
};

export type GraphQLRoleContentPermissionsArgs = {
  environmentId?: Maybe<Scalars["ID"]>;
};

export type GraphQLRoleMembersConnectionArgs = {
  skip?: Scalars["Int"];
  first?: Scalars["Int"];
};

export type GraphQLCreateRoleInput = {
  projectId: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  managementPermissionIds?: Maybe<Array<Scalars["ID"]>>;
};

export type GraphQLUpdateRoleInput = {
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  managementPermissionIds?: Maybe<Array<Scalars["ID"]>>;
};

export type GraphQLDeleteRoleInput = {
  id: Scalars["ID"];
};

export type GraphQLContentPermissionRoleTarget = {
  __typename?: "ContentPermissionRoleTarget";
  role: GraphQLRole;
  environment: GraphQLEnvironment;
};

export type GraphQLContentPermissionPermanentAuthTokenTarget = {
  __typename?: "ContentPermissionPermanentAuthTokenTarget";
  permanentAuthToken: GraphQLPermanentAuthToken;
};

export type GraphQLContentPermissionPublicTarget = {
  __typename?: "ContentPermissionPublicTarget";
  environment: GraphQLEnvironment;
};

export type GraphQLContentPermissionTarget =
  | GraphQLContentPermissionRoleTarget
  | GraphQLContentPermissionPermanentAuthTokenTarget
  | GraphQLContentPermissionPublicTarget;

export type GraphQLIContentPermission = {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  enabled: Scalars["Boolean"];
  target: GraphQLContentPermissionTarget;
  model?: Maybe<GraphQLIModel>;
};

export type GraphQLReadContentPermission = GraphQLIContentPermission & {
  __typename?: "ReadContentPermission";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  enabled: Scalars["Boolean"];
  target: GraphQLContentPermissionTarget;
  model?: Maybe<GraphQLIModel>;
  locales?: Maybe<Array<GraphQLLocale>>;
  stages?: Maybe<Array<GraphQLStage>>;
  condition?: Maybe<Scalars["String"]>;
};

export type GraphQLCreateReadContentPermissionModelInput = {
  id: Scalars["ID"];
  condition?: Maybe<Scalars["String"]>;
};

export enum GraphQLContentPermissionTargetKind {
  Role = "ROLE",
  Pat = "PAT",
  Public = "PUBLIC",
}

/**
 * CreateContentPermissionTargetInput describes the target of a Create<Action>ContentPermissionInput
 * Depending on the kind you need to pass different ids:
 * - ROLE: roleId & environmentId
 * - PAT: patId
 * - PUBLIC: environmentId
 */
export type GraphQLCreateContentPermissionTargetInput = {
  kind: GraphQLContentPermissionTargetKind;
  patId?: Maybe<Scalars["ID"]>;
  roleId?: Maybe<Scalars["ID"]>;
  environmentId?: Maybe<Scalars["ID"]>;
};

export type GraphQLCreateReadContentPermissionInput = {
  target: GraphQLCreateContentPermissionTargetInput;
  model?: Maybe<GraphQLCreateReadContentPermissionModelInput>;
  locales?: Maybe<Array<Scalars["ID"]>>;
  stages?: Maybe<Array<Scalars["ID"]>>;
};

export type GraphQLUpdateReadContentPermissionInput = {
  permissionId: Scalars["ID"];
  model?: Maybe<GraphQLCreateReadContentPermissionModelInput>;
  locales?: Maybe<Array<Scalars["ID"]>>;
  stages?: Maybe<Array<Scalars["ID"]>>;
};

export type GraphQLCreateReadContentPermissionPayload = {
  __typename?: "CreateReadContentPermissionPayload";
  permission: GraphQLReadContentPermission;
};

export type GraphQLUpdateReadContentPermissionPayload = {
  __typename?: "UpdateReadContentPermissionPayload";
  permission: GraphQLReadContentPermission;
};

export type GraphQLReadVersionContentPermission = GraphQLIContentPermission & {
  __typename?: "ReadVersionContentPermission";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  enabled: Scalars["Boolean"];
  target: GraphQLContentPermissionTarget;
  model?: Maybe<GraphQLIModel>;
};

export type GraphQLCreateReadVersionContentPermissionInput = {
  target: GraphQLCreateContentPermissionTargetInput;
  modelId?: Maybe<Scalars["ID"]>;
};

export type GraphQLUpdateReadVersionContentPermissionInput = {
  permissionId: Scalars["ID"];
  modelId?: Maybe<Scalars["ID"]>;
};

export type GraphQLCreateReadVersionContentPermissionPayload = {
  __typename?: "CreateReadVersionContentPermissionPayload";
  permission: GraphQLReadVersionContentPermission;
};

export type GraphQLUpdateReadVersionContentPermissionPayload = {
  __typename?: "UpdateReadVersionContentPermissionPayload";
  permission: GraphQLReadVersionContentPermission;
};

export type GraphQLCreateContentPermission = GraphQLIContentPermission & {
  __typename?: "CreateContentPermission";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  enabled: Scalars["Boolean"];
  target: GraphQLContentPermissionTarget;
  model?: Maybe<GraphQLIModel>;
  locales?: Maybe<Array<GraphQLLocale>>;
  condition?: Maybe<Scalars["String"]>;
};

export type GraphQLCreateCreateContentPermissionModelInput = {
  id: Scalars["ID"];
  condition?: Maybe<Scalars["String"]>;
};

export type GraphQLCreateCreateContentPermissionInput = {
  target: GraphQLCreateContentPermissionTargetInput;
  model?: Maybe<GraphQLCreateCreateContentPermissionModelInput>;
  locales?: Maybe<Array<Scalars["ID"]>>;
};

export type GraphQLUpdateCreateContentPermissionInput = {
  permissionId: Scalars["ID"];
  model?: Maybe<GraphQLCreateCreateContentPermissionModelInput>;
  locales?: Maybe<Array<Scalars["ID"]>>;
};

export type GraphQLCreateCreateContentPermissionPayload = {
  __typename?: "CreateCreateContentPermissionPayload";
  permission: GraphQLCreateContentPermission;
};

export type GraphQLUpdateCreateContentPermissionPayload = {
  __typename?: "UpdateCreateContentPermissionPayload";
  permission: GraphQLCreateContentPermission;
};

export type GraphQLUpdateContentPermission = GraphQLIContentPermission & {
  __typename?: "UpdateContentPermission";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  enabled: Scalars["Boolean"];
  target: GraphQLContentPermissionTarget;
  model?: Maybe<GraphQLIModel>;
  locales?: Maybe<Array<GraphQLLocale>>;
  condition?: Maybe<Scalars["String"]>;
};

export type GraphQLCreateUpdateContentPermissionModelInput = {
  id: Scalars["ID"];
  condition?: Maybe<Scalars["String"]>;
};

export type GraphQLCreateUpdateContentPermissionInput = {
  target: GraphQLCreateContentPermissionTargetInput;
  model?: Maybe<GraphQLCreateUpdateContentPermissionModelInput>;
  locales?: Maybe<Array<Scalars["ID"]>>;
};

export type GraphQLUpdateUpdateContentPermissionInput = {
  permissionId: Scalars["ID"];
  model?: Maybe<GraphQLCreateUpdateContentPermissionModelInput>;
  locales?: Maybe<Array<Scalars["ID"]>>;
};

export type GraphQLCreateUpdateContentPermissionPayload = {
  __typename?: "CreateUpdateContentPermissionPayload";
  permission: GraphQLUpdateContentPermission;
};

export type GraphQLUpdateUpdateContentPermissionPayload = {
  __typename?: "UpdateUpdateContentPermissionPayload";
  permission: GraphQLUpdateContentPermission;
};

export type GraphQLDeleteContentPermission = GraphQLIContentPermission & {
  __typename?: "DeleteContentPermission";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  enabled: Scalars["Boolean"];
  target: GraphQLContentPermissionTarget;
  model?: Maybe<GraphQLIModel>;
  locales?: Maybe<Array<GraphQLLocale>>;
  condition?: Maybe<Scalars["String"]>;
};

export type GraphQLCreateDeleteContentPermissionModelInput = {
  id: Scalars["ID"];
  condition?: Maybe<Scalars["String"]>;
};

export type GraphQLCreateDeleteContentPermissionInput = {
  target: GraphQLCreateContentPermissionTargetInput;
  model?: Maybe<GraphQLCreateDeleteContentPermissionModelInput>;
  locales?: Maybe<Array<Scalars["ID"]>>;
};

export type GraphQLUpdateDeleteContentPermissionInput = {
  permissionId: Scalars["ID"];
  model?: Maybe<GraphQLCreateUpdateContentPermissionModelInput>;
  locales?: Maybe<Array<Scalars["ID"]>>;
};

export type GraphQLCreateDeleteContentPermissionPayload = {
  __typename?: "CreateDeleteContentPermissionPayload";
  permission: GraphQLDeleteContentPermission;
};

export type GraphQLUpdateDeleteContentPermissionPayload = {
  __typename?: "UpdateDeleteContentPermissionPayload";
  permission: GraphQLDeleteContentPermission;
};

export type GraphQLPublishContentPermission = GraphQLIContentPermission & {
  __typename?: "PublishContentPermission";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  enabled: Scalars["Boolean"];
  target: GraphQLContentPermissionTarget;
  model?: Maybe<GraphQLIModel>;
  locales?: Maybe<Array<GraphQLLocale>>;
  fromStages?: Maybe<Array<GraphQLStage>>;
  toStages?: Maybe<Array<GraphQLStage>>;
  condition?: Maybe<Scalars["String"]>;
};

export type GraphQLCreatePublishContentPermissionModelInput = {
  id: Scalars["ID"];
  condition?: Maybe<Scalars["String"]>;
};

export type GraphQLCreatePublishContentPermissionInput = {
  target: GraphQLCreateContentPermissionTargetInput;
  model?: Maybe<GraphQLCreatePublishContentPermissionModelInput>;
  locales?: Maybe<Array<Scalars["ID"]>>;
  fromStages?: Maybe<Array<Scalars["ID"]>>;
  toStages?: Maybe<Array<Scalars["ID"]>>;
};

export type GraphQLCreatePublishContentPermissionPayload = {
  __typename?: "CreatePublishContentPermissionPayload";
  permission: GraphQLPublishContentPermission;
};

export type GraphQLUpdatePublishContentPermissionModelInput = {
  id: Scalars["ID"];
  condition?: Maybe<Scalars["String"]>;
};

export type GraphQLUpdatePublishContentPermissionInput = {
  permissionId: Scalars["ID"];
  model?: Maybe<GraphQLCreatePublishContentPermissionModelInput>;
  locales?: Maybe<Array<Scalars["ID"]>>;
  fromStages?: Maybe<Array<Scalars["ID"]>>;
  toStages?: Maybe<Array<Scalars["ID"]>>;
};

export type GraphQLUpdatePublishContentPermissionPayload = {
  __typename?: "UpdatePublishContentPermissionPayload";
  permission: GraphQLPublishContentPermission;
};

export type GraphQLUnpublishContentPermission = GraphQLIContentPermission & {
  __typename?: "UnpublishContentPermission";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  enabled: Scalars["Boolean"];
  target: GraphQLContentPermissionTarget;
  model?: Maybe<GraphQLIModel>;
  locales?: Maybe<Array<GraphQLLocale>>;
  stages?: Maybe<Array<GraphQLStage>>;
  condition?: Maybe<Scalars["String"]>;
};

export type GraphQLCreateUnpublishContentPermissionModelInput = {
  id: Scalars["ID"];
  condition?: Maybe<Scalars["String"]>;
};

export type GraphQLCreateUnpublishContentPermissionInput = {
  target: GraphQLCreateContentPermissionTargetInput;
  model?: Maybe<GraphQLCreateUnpublishContentPermissionModelInput>;
  locales?: Maybe<Array<Scalars["ID"]>>;
  stages?: Maybe<Array<Scalars["ID"]>>;
};

export type GraphQLCreateUnpublishContentPermissionPayload = {
  __typename?: "CreateUnpublishContentPermissionPayload";
  permission: GraphQLUnpublishContentPermission;
};

export type GraphQLUpdateUnpublishContentPermissionModelInput = {
  id: Scalars["ID"];
  condition?: Maybe<Scalars["String"]>;
};

export type GraphQLUpdateUnpublishContentPermissionInput = {
  permissionId: Scalars["ID"];
  model?: Maybe<GraphQLUpdateUnpublishContentPermissionModelInput>;
  locales?: Maybe<Array<Scalars["ID"]>>;
  stages?: Maybe<Array<Scalars["ID"]>>;
};

export type GraphQLUpdateUnpublishContentPermissionPayload = {
  __typename?: "UpdateUnpublishContentPermissionPayload";
  permission: GraphQLUnpublishContentPermission;
};

export type GraphQLUpdateContentPermissionEnabledInput = {
  permissionId: Scalars["ID"];
  enabled: Scalars["Boolean"];
};

export type GraphQLUpdateContentPermissionEnabledPayload = {
  __typename?: "UpdateContentPermissionEnabledPayload";
  permission: GraphQLIContentPermission;
};

export type GraphQLDeleteContentPermissionInput = {
  permissionId: Scalars["ID"];
};

export type GraphQLDeleteContentPermissionPayload = {
  __typename?: "DeleteContentPermissionPayload";
  deletedPermissionId: Scalars["ID"];
};

export type GraphQLUpdateMemberRolesInput = {
  memberId: Scalars["ID"];
  roleIds: Array<Scalars["ID"]>;
};

export enum GraphQLMigrationStatus {
  Queued = "QUEUED",
  Running = "RUNNING",
  Success = "SUCCESS",
  Timeout = "TIMEOUT",
  Failed = "FAILED",
}

export type GraphQLMigration = {
  __typename?: "Migration";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  finishedAt?: Maybe<Scalars["DateTime"]>;
  /** @deprecated This will be replaced by a union of Member | PermanentAuthToken */
  triggeredBy?: Maybe<GraphQLMember>;
  status: GraphQLMigrationStatus;
  errors?: Maybe<Scalars["String"]>;
  /** @deprecated Field no longer supported */
  operationType: GraphQLMigrationOperationType;
  /** @deprecated Field no longer supported */
  resourceId?: Maybe<Scalars["ID"]>;
};

export enum GraphQLRemote_Graphql_Type {
  Scalar = "SCALAR",
  Object = "OBJECT",
  Interface = "INTERFACE",
  Union = "UNION",
  Enum = "ENUM",
  InputObject = "INPUT_OBJECT",
}

export type GraphQLIRemoteSource = {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  prefix: Scalars["String"];
  url: Scalars["String"];
  /**
   * Optional headers that will be sent to the remote source on every remote field. In case the remote field is using the same
   * Header Keys, the values will be overridden
   */
  headers?: Maybe<Scalars["JSON"]>;
  type: GraphQLRemoteSourceType;
  remoteTypeDefinitionsConnection: GraphQLRemoteTypeDefinitionsConnection;
  debugEnabled: Scalars["Boolean"];
};

export type GraphQLIRemoteSourceRemoteTypeDefinitionsConnectionArgs = {
  remoteGraphQLTypes?: Maybe<Array<GraphQLRemote_Graphql_Type>>;
  isUserDefined?: Maybe<Scalars["Boolean"]>;
  skip?: Scalars["Int"];
  first?: Scalars["Int"];
};

export type GraphQLGraphQlRemoteSource = GraphQLIRemoteSource & {
  __typename?: "GraphQLRemoteSource";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  prefix: Scalars["String"];
  url: Scalars["String"];
  headers?: Maybe<Scalars["JSON"]>;
  type: GraphQLRemoteSourceType;
  remoteTypeDefinitionsConnection: GraphQLRemoteTypeDefinitionsConnection;
  debugEnabled: Scalars["Boolean"];
  /**
   * Specific URL that will be used for introspection if the introspection is available on another url than the regular url.
   * Can be ignored if the introspection url is the same as the url of the remote source.
   */
  introspectionUrl?: Maybe<Scalars["String"]>;
  /** HTTP Headers that will be used when sending the introspection only */
  introspectionHeaders?: Maybe<Scalars["JSON"]>;
  /** HTTP method that will be used for introspection */
  introspectionMethod: GraphQLGraphQlRemoteSourceIntrospectionMethod;
  schema: Scalars["String"];
};

export type GraphQLGraphQlRemoteSourceRemoteTypeDefinitionsConnectionArgs = {
  remoteGraphQLTypes?: Maybe<Array<GraphQLRemote_Graphql_Type>>;
  isUserDefined?: Maybe<Scalars["Boolean"]>;
  skip?: Scalars["Int"];
  first?: Scalars["Int"];
};

export type GraphQLRestRemoteSource = GraphQLIRemoteSource & {
  __typename?: "RESTRemoteSource";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  prefix: Scalars["String"];
  url: Scalars["String"];
  headers?: Maybe<Scalars["JSON"]>;
  type: GraphQLRemoteSourceType;
  remoteTypeDefinitionsConnection: GraphQLRemoteTypeDefinitionsConnection;
  debugEnabled: Scalars["Boolean"];
};

export type GraphQLRestRemoteSourceRemoteTypeDefinitionsConnectionArgs = {
  remoteGraphQLTypes?: Maybe<Array<GraphQLRemote_Graphql_Type>>;
  isUserDefined?: Maybe<Scalars["Boolean"]>;
  skip?: Scalars["Int"];
  first?: Scalars["Int"];
};

export type GraphQLRemoteTypeDefinitionEdge = {
  __typename?: "RemoteTypeDefinitionEdge";
  node: GraphQLRemoteTypeDefinition;
};

export type GraphQLRemoteTypeDefinitionsAggregate = {
  __typename?: "RemoteTypeDefinitionsAggregate";
  count: Scalars["Int"];
};

export type GraphQLRemoteTypeDefinitionsConnection = {
  __typename?: "RemoteTypeDefinitionsConnection";
  pageInfo: GraphQLPageInfo;
  edges: Array<GraphQLRemoteTypeDefinitionEdge>;
  aggregate: GraphQLRemoteTypeDefinitionsAggregate;
};

export type GraphQLCommentingConfig = {
  __typename?: "CommentingConfig";
  url: Scalars["String"];
  token: Scalars["String"];
  userKey: Scalars["String"];
};

export type GraphQLEnvironment = {
  __typename?: "Environment";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  name: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  endpoint: Scalars["String"];
  assetConfig: GraphQLIAssetConfig;
  metrics: GraphQLMetrics;
  webhook: GraphQLWebhook;
  webhooks: Array<GraphQLWebhook>;
  permanentAuthTokens: Array<GraphQLPermanentAuthToken>;
  authToken: Scalars["String"];
  contentView: GraphQLContentView;
  contentViews: Array<GraphQLContentView>;
  viewGroups: Array<GraphQLViewGroup>;
  contentModel: GraphQLContentModel;
  remoteSources: Array<GraphQLIRemoteSource>;
  remoteSource: GraphQLIRemoteSource;
  /** @deprecated Revisions are no longer maintained */
  revisionCount: Scalars["Int"];
  migrations: Array<GraphQLMigration>;
  migration: GraphQLMigration;
  runningMigration?: Maybe<GraphQLMigration>;
  publicContentAPI: GraphQLPublicContentApi;
  isCloning?: Maybe<Scalars["Boolean"]>;
  quotas: GraphQLEnvironmentLevelQuota;
  integrations: Array<GraphQLIIntegration>;
  integration: GraphQLIIntegration;
  extensions: Array<GraphQLIExtension>;
  extension: GraphQLIExtension;
  appInstallations: Array<GraphQLAppInstallation>;
  appInstallation: GraphQLAppInstallation;
  diff: GraphQLDiffEnvironmentPayload;
  commentingConfig?: Maybe<GraphQLCommentingConfig>;
};

export type GraphQLEnvironmentWebhookArgs = {
  id: Scalars["ID"];
};

export type GraphQLEnvironmentContentViewArgs = {
  id: Scalars["ID"];
};

export type GraphQLEnvironmentContentViewsArgs = {
  includeSystemModels?: Maybe<Scalars["Boolean"]>;
  filter?: Maybe<GraphQLContentViewFilterInput>;
};

export type GraphQLEnvironmentRemoteSourceArgs = {
  prefix: Scalars["String"];
};

export type GraphQLEnvironmentMigrationArgs = {
  id: Scalars["ID"];
};

export type GraphQLEnvironmentIntegrationArgs = {
  id: Scalars["ID"];
};

export type GraphQLEnvironmentExtensionArgs = {
  id: Scalars["ID"];
};

export type GraphQLEnvironmentAppInstallationsArgs = {
  status?: Maybe<GraphQLAppInstallationStatus>;
};

export type GraphQLEnvironmentAppInstallationArgs = {
  appApiId: Scalars["String"];
};

export type GraphQLEnvironmentDiffArgs = {
  environmentName: Scalars["String"];
};

export type GraphQLPublicContentApiDefauts = {
  __typename?: "PublicContentAPIDefauts";
  stage: GraphQLStage;
};

export type GraphQLPublicContentApi = {
  __typename?: "PublicContentAPI";
  defaults: GraphQLPublicContentApiDefauts;
  contentPermissions: Array<GraphQLIContentPermission>;
};

export enum GraphQLIntegration_Provider {
  Netlify = "NETLIFY",
  Vercel = "VERCEL",
  GatsbyCloud = "GATSBY_CLOUD",
}

export type GraphQLIIntegration = {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
};

export type GraphQLNetlifyIntegration = GraphQLIIntegration & {
  __typename?: "NetlifyIntegration";
  /** Integration ID */
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  /** Integration display name on GCMS */
  displayName?: Maybe<Scalars["String"]>;
  /** Integration description on GCMS */
  description?: Maybe<Scalars["String"]>;
  /** Configured sites for netlify integration */
  sites: Array<GraphQLNetlifySite>;
  models: Array<GraphQLIModel>;
};

export type GraphQLVercelIntegration = GraphQLIIntegration & {
  __typename?: "VercelIntegration";
  /** Integration ID */
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  /** Integration display name on GCMS */
  displayName?: Maybe<Scalars["String"]>;
  /** Integration description on GCMS */
  description?: Maybe<Scalars["String"]>;
  /** Configured projects for vercel integration */
  projects: Array<GraphQLVercelProject>;
  models: Array<GraphQLIModel>;
};

export type GraphQLGatsbyCloudIntegration = GraphQLIIntegration & {
  __typename?: "GatsbyCloudIntegration";
  /** Integration ID */
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  /** Integration display name on GCMS */
  displayName?: Maybe<Scalars["String"]>;
  /** Integration description on GCMS */
  description?: Maybe<Scalars["String"]>;
  /** URL to your site */
  siteURL: Scalars["String"];
  /** Prefix of your site */
  sitePrefix: Scalars["String"];
  /** URL to the preview of your site */
  previewURL: Scalars["String"];
  /** URL to the production deployment of your site */
  productionURL: Scalars["String"];
  /** URL to trigger a Deploy Build. This webhook will be triggered when publishing and unpublishing entries. */
  buildWebhookURL: Scalars["String"];
  /** URL to trigger a CMS Preview build */
  previewWebhookURL: Scalars["String"];
};

export type GraphQLNetlifySite = {
  __typename?: "NetlifySite";
  id: Scalars["String"];
  displayName: Scalars["String"];
  url: Scalars["String"];
  /** Contains information of the last time the build state was changing. */
  lastState?: Maybe<GraphQLNetlifyState>;
};

export type GraphQLVercelProject = {
  __typename?: "VercelProject";
  id: Scalars["String"];
  displayName: Scalars["String"];
  url: Scalars["String"];
  /** Git branch to trigger the build from */
  ref: Scalars["String"];
  /** Contains information of the last time the build state was changing. */
  lastState?: Maybe<GraphQLVercelState>;
};

export type GraphQLNetlifyState = {
  __typename?: "NetlifyState";
  /** Current state the site is in */
  buildState: GraphQLNetlifyBuildState;
  /** Time when the build of the site was started */
  buildStartedAt?: Maybe<Scalars["DateTime"]>;
  /** Time when the build of the site was prepared */
  buildPreparedAt?: Maybe<Scalars["DateTime"]>;
  /** Time when the build of the site was finished */
  buildFinishedAt?: Maybe<Scalars["DateTime"]>;
  /** Member in the project who triggered a build. If the build was triggered externally this will be null. */
  triggeredBy?: Maybe<GraphQLNetlifyStateTriggeredBy>;
};

export type GraphQLVercelState = {
  __typename?: "VercelState";
  /** Current state the site is in */
  buildState: GraphQLVercelBuildState;
  /** Time when the build of the site was started */
  buildStartedAt?: Maybe<Scalars["DateTime"]>;
  /** Time when the build of the site was prepared */
  buildPreparedAt?: Maybe<Scalars["DateTime"]>;
  /** Time when the build of the site was finished */
  buildFinishedAt?: Maybe<Scalars["DateTime"]>;
  /** Member in the project who triggered a build. If the build was triggered externally this will be null. */
  triggeredBy?: Maybe<GraphQLVercelStateTriggeredBy>;
};

export type GraphQLNetlifyStateTriggeredBy =
  | GraphQLPermanentAuthToken
  | GraphQLMember;

export type GraphQLVercelStateTriggeredBy =
  | GraphQLPermanentAuthToken
  | GraphQLMember;

export enum GraphQLColorPalette {
  Pink = "PINK",
  Purple = "PURPLE",
  Orange = "ORANGE",
  Red = "RED",
  Brown = "BROWN",
  Teal = "TEAL",
  Green = "GREEN",
  Yellow = "YELLOW",
}

export type GraphQLStage = {
  __typename?: "Stage";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  apiId: Scalars["String"];
  color: Scalars["String"];
  colorPaletteId: GraphQLColorPalette;
  backgroundColor: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  isSystem: Scalars["Boolean"];
  position: Scalars["Int"];
};

export type GraphQLProfile = {
  __typename?: "Profile";
  id: Scalars["ID"];
  email: Scalars["String"];
  name: Scalars["String"];
  picture?: Maybe<Scalars["String"]>;
  role?: Maybe<Scalars["String"]>;
  purpose?: Maybe<Scalars["String"]>;
  companyName?: Maybe<Scalars["String"]>;
  companySize?: Maybe<Scalars["String"]>;
};

export type GraphQLIUser = {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  profile: GraphQLProfile;
};

export type GraphQLCreateUserPayload = {
  __typename?: "CreateUserPayload";
  gcms?: Maybe<Scalars["String"]>;
};

export type GraphQLLegacyProject = {
  __typename?: "LegacyProject";
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  url: Scalars["String"];
  picture?: Maybe<Scalars["String"]>;
  isOwner: Scalars["Boolean"];
  isMigrated: Scalars["Boolean"];
};

export type GraphQLITemplate = {
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  picture?: Maybe<Scalars["String"]>;
  details?: Maybe<Scalars["String"]>;
  coverPicture?: Maybe<Scalars["String"]>;
  resources: Array<GraphQLTemplateResource>;
};

export type GraphQLTemplate = GraphQLITemplate & {
  __typename?: "Template";
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  picture?: Maybe<Scalars["String"]>;
  details?: Maybe<Scalars["String"]>;
  coverPicture?: Maybe<Scalars["String"]>;
  resources: Array<GraphQLTemplateResource>;
};

export type GraphQLStarterTemplate = GraphQLITemplate & {
  __typename?: "StarterTemplate";
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  picture?: Maybe<Scalars["String"]>;
  details?: Maybe<Scalars["String"]>;
  coverPicture?: Maybe<Scalars["String"]>;
  resources: Array<GraphQLTemplateResource>;
  stack: Array<GraphQLTechnologyStack>;
};

export type GraphQLTemplateResource = {
  __typename?: "TemplateResource";
  title: Scalars["String"];
  url: Scalars["String"];
};

export type GraphQLTechnologyStack = {
  __typename?: "TechnologyStack";
  image: Scalars["String"];
  title: Scalars["String"];
  url?: Maybe<Scalars["String"]>;
};

export type GraphQLViewer = GraphQLIUser & {
  __typename?: "Viewer";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  profile: GraphQLProfile;
  pendingInvites: Array<GraphQLInvite>;
  pendingInvite?: Maybe<GraphQLInvite>;
  projects: Array<GraphQLProject>;
  plans: Array<GraphQLPlan>;
  project?: Maybe<GraphQLProject>;
  templates: Array<GraphQLITemplate>;
  paymentAccounts: Array<GraphQLPaymentAccount>;
  paymentAccount: GraphQLPaymentAccount;
  regions: Array<GraphQLRegion>;
  availableIntegrations: Array<GraphQLIntegration_Provider>;
  availableExtensionSrcTypes: Array<GraphQLExtensionSrcType>;
  availableExtensionPermissions: Array<GraphQLAvailableExtensionPermission>;
};

export type GraphQLViewerPendingInviteArgs = {
  code: Scalars["String"];
};

export type GraphQLViewerProjectArgs = {
  id: Scalars["ID"];
};

export type GraphQLViewerPaymentAccountArgs = {
  id: Scalars["ID"];
};

export type GraphQLIViewer = {
  id: Scalars["ID"];
  project?: Maybe<GraphQLProject>;
  plans: Array<GraphQLPlan>;
  templates: Array<GraphQLITemplate>;
  regions: Array<GraphQLRegion>;
  availableIntegrations: Array<GraphQLIntegration_Provider>;
  availableExtensionSrcTypes: Array<GraphQLExtensionSrcType>;
  availableExtensionPermissions: Array<GraphQLAvailableExtensionPermission>;
};

export type GraphQLIViewerProjectArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type GraphQLUser = GraphQLIUser & {
  __typename?: "User";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  profile: GraphQLProfile;
};

export type GraphQLUserViewer = GraphQLIViewer & {
  __typename?: "UserViewer";
  id: Scalars["ID"];
  user: GraphQLUser;
  pendingInvites: Array<GraphQLInvite>;
  pendingInvite?: Maybe<GraphQLInvite>;
  plans: Array<GraphQLPlan>;
  templates: Array<GraphQLITemplate>;
  paymentAccounts: Array<GraphQLPaymentAccount>;
  paymentAccount: GraphQLPaymentAccount;
  regions: Array<GraphQLRegion>;
  availableIntegrations: Array<GraphQLIntegration_Provider>;
  availableExtensionSrcTypes: Array<GraphQLExtensionSrcType>;
  availableExtensionPermissions: Array<GraphQLAvailableExtensionPermission>;
  pendingProjects: Array<GraphQLIPendingProject>;
  pendingProject?: Maybe<GraphQLIPendingProject>;
  projects: Array<GraphQLProject>;
  project?: Maybe<GraphQLProject>;
  commonAssetConfig: GraphQLCommonFilestack;
  apps: Array<GraphQLApp>;
  app: GraphQLApp;
};

export type GraphQLUserViewerPendingInviteArgs = {
  code: Scalars["String"];
};

export type GraphQLUserViewerPaymentAccountArgs = {
  id: Scalars["ID"];
};

export type GraphQLUserViewerPendingProjectArgs = {
  id: Scalars["ID"];
};

export type GraphQLUserViewerProjectArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type GraphQLUserViewerAppArgs = {
  apiId: Scalars["String"];
};

export type GraphQLTokenViewer = GraphQLIViewer & {
  __typename?: "TokenViewer";
  id: Scalars["ID"];
  project?: Maybe<GraphQLProject>;
  regions: Array<GraphQLRegion>;
  templates: Array<GraphQLITemplate>;
  plans: Array<GraphQLPlan>;
  availableIntegrations: Array<GraphQLIntegration_Provider>;
  availableExtensionSrcTypes: Array<GraphQLExtensionSrcType>;
  availableExtensionPermissions: Array<GraphQLAvailableExtensionPermission>;
};

export type GraphQLTokenViewerProjectArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type GraphQLMember = GraphQLIUser & {
  __typename?: "Member";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  profile: GraphQLProfile;
  roles: Array<GraphQLRole>;
  isOwner: Scalars["Boolean"];
};

export type GraphQLUserAnalytics = {
  __typename?: "UserAnalytics";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  landingPage?: Maybe<Scalars["String"]>;
  conversionPage?: Maybe<Scalars["String"]>;
  referrer?: Maybe<Scalars["String"]>;
  gclid?: Maybe<Scalars["String"]>;
  utmSource?: Maybe<Scalars["String"]>;
  utmMedium?: Maybe<Scalars["String"]>;
  utmCampaign?: Maybe<Scalars["String"]>;
  utmTerm?: Maybe<Scalars["String"]>;
  utmContent?: Maybe<Scalars["String"]>;
  hubspotutk?: Maybe<Scalars["String"]>;
};

export type GraphQLRemoveMemberPayload = {
  __typename?: "RemoveMemberPayload";
  removedMemberId: Scalars["ID"];
};

export type GraphQLDeleteAccountPayload = {
  __typename?: "DeleteAccountPayload";
  deletedUserId: Scalars["ID"];
};

export type GraphQLRemoveMemberInput = {
  memberId: Scalars["ID"];
};

export type GraphQLSetUserAnalyticsInput = {
  landingPage?: Maybe<Scalars["String"]>;
  conversionPage?: Maybe<Scalars["String"]>;
  referrer?: Maybe<Scalars["String"]>;
  gclid?: Maybe<Scalars["String"]>;
  utmSource?: Maybe<Scalars["String"]>;
  utmMedium?: Maybe<Scalars["String"]>;
  utmCampaign?: Maybe<Scalars["String"]>;
  utmTerm?: Maybe<Scalars["String"]>;
  utmContent?: Maybe<Scalars["String"]>;
  hubspotutk?: Maybe<Scalars["String"]>;
};

export enum GraphQLTrackEvent {
  CreatedContent = "CREATED_CONTENT",
  UsedPlayground = "USED_PLAYGROUND",
  CheckedQuickstart = "CHECKED_QUICKSTART",
}

export type GraphQLTrackInput = {
  projectId: Scalars["ID"];
  event: GraphQLTrackEvent;
  meta?: Maybe<Scalars["String"]>;
};

export type GraphQLTrackPayload = {
  __typename?: "TrackPayload";
  success: Scalars["Boolean"];
};

export type GraphQLUpdateProfileInput = {
  name?: Maybe<Scalars["String"]>;
  company?: Maybe<Scalars["String"]>;
  jobTitle?: Maybe<Scalars["String"]>;
  jobRole?: Maybe<GraphQLProfileJobRole>;
  picture?: Maybe<Scalars["String"]>;
  role?: Maybe<Scalars["String"]>;
  purpose?: Maybe<Scalars["String"]>;
  companyName?: Maybe<Scalars["String"]>;
  companySize?: Maybe<Scalars["String"]>;
};

export enum GraphQLProfileJobRole {
  DeveloperEngineering = "DEVELOPER_ENGINEERING",
  EditorialContent = "EDITORIAL_CONTENT",
  Management = "MANAGEMENT",
  Procurement = "PROCUREMENT",
  ProductManagement = "PRODUCT_MANAGEMENT",
  ProjectManagement = "PROJECT_MANAGEMENT",
  Sales = "SALES",
  SecurityLegal = "SECURITY_LEGAL",
  Other = "OTHER",
}

export type GraphQLCreateUserInput = {
  gcms?: Maybe<Scalars["String"]>;
};

export type GraphQLDeleteAccountInput = {
  churnQuestions?: Maybe<Scalars["JSON"]>;
};

export enum GraphQLViewGroupType {
  Custom = "CUSTOM",
  System = "SYSTEM",
  UserCreated = "USER_CREATED",
}

export enum GraphQLViewGroupContentType {
  Default = "DEFAULT",
  Asset = "ASSET",
}

export type GraphQLViewGroup = {
  __typename?: "ViewGroup";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  environment: GraphQLEnvironment;
  type: GraphQLViewGroupType;
  contentType: GraphQLViewGroupContentType;
  position: Scalars["Int"];
  createdBy?: Maybe<GraphQLMember>;
  contentViews: Array<GraphQLContentView>;
};

export type GraphQLViewGroupContentViewsArgs = {
  filter?: Maybe<GraphQLContentViewFilterInput>;
};

export type GraphQLCreateViewGroupPayload = {
  __typename?: "CreateViewGroupPayload";
  createdViewGroup: GraphQLViewGroup;
};

export type GraphQLUpdateViewGroupPayload = {
  __typename?: "UpdateViewGroupPayload";
  updatedViewGroup: GraphQLViewGroup;
};

export type GraphQLDeleteViewGroupPayload = {
  __typename?: "DeleteViewGroupPayload";
  deletedViewGroupId: Scalars["ID"];
};

export type GraphQLMoveViewGroupPayload = {
  __typename?: "MoveViewGroupPayload";
  movedViewGroups: Array<GraphQLViewGroup>;
};

export type GraphQLCreateViewGroupInput = {
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  type?: Maybe<GraphQLViewGroupContentType>;
  environmentId: Scalars["ID"];
};

export type GraphQLUpdateViewGroupInput = {
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
};

export type GraphQLDeleteViewGroupInput = {
  id: Scalars["ID"];
};

export type GraphQLMoveViewGroupInput = {
  id: Scalars["ID"];
  position: Scalars["Int"];
};

export type GraphQLWebhook = {
  __typename?: "Webhook";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  url: Scalars["String"];
  headers: Scalars["JSON"];
  isActive: Scalars["Boolean"];
  environment: GraphQLEnvironment;
  /**
   * List of models on which the webhook will be triggered.
   * In case of any model, this array will be empty.
   */
  models: Array<GraphQLIModel>;
  /**
   * List of stages on which the webhook will be triggered.
   * In case of any stage, this array will be empty.
   */
  stages: Array<GraphQLStage>;
  /** The type of trigger the webhook is registered */
  triggerType: GraphQLWebhookTriggerType;
  /** When one of the actions happen, the webhook will be triggered */
  triggerActions: Array<GraphQLWebhookTriggerAction>;
  /**
   * Defines wether the data of the changed data will be sent
   * in the webhook payload or not
   */
  includePayload: Scalars["Boolean"];
  hasSecretKey?: Maybe<Scalars["Boolean"]>;
  logs: GraphQLWebhookLogsPayload;
  log?: Maybe<GraphQLWebhookLog>;
  triggerSources?: Maybe<Array<GraphQLWebhookTriggerSource>>;
};

export type GraphQLWebhookLogsArgs = {
  where?: Maybe<GraphQLWebhookLogsWhereInput>;
  limit?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  orderBy?: Maybe<GraphQLWebhookLogOrderByInput>;
};

export type GraphQLWebhookLogArgs = {
  id: Scalars["String"];
};

export enum GraphQLWebhookTriggerSource {
  Pat = "PAT",
  Member = "MEMBER",
  Public = "PUBLIC",
}

export type GraphQLWebhookLogsPayload = {
  __typename?: "WebhookLogsPayload";
  total: Scalars["Int"];
  entries: Array<GraphQLWebhookLog>;
};

export type GraphQLWebhookLogsWhereInput = {
  action_eq?: Maybe<GraphQLWebhookTriggerAction>;
  modelId_eq?: Maybe<Scalars["ID"]>;
  status_eq?: Maybe<Scalars["Int"]>;
  status_in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  status_gt?: Maybe<Scalars["Int"]>;
  status_gte?: Maybe<Scalars["Int"]>;
  status_lt?: Maybe<Scalars["Int"]>;
  status_lte?: Maybe<Scalars["Int"]>;
};

export enum GraphQLWebhookLogOrderByInput {
  CalledAtAsc = "calledAt_ASC",
  CalledAtDesc = "calledAt_DESC",
}

export type GraphQLWebhookLog = {
  __typename?: "WebhookLog";
  id: Scalars["String"];
  requestPayload?: Maybe<Scalars["JSON"]>;
  responsePayload?: Maybe<Scalars["String"]>;
  responsePayloadSize?: Maybe<Scalars["Int"]>;
  calledAt: Scalars["DateTime"];
  statusCode: Scalars["Int"];
  model?: Maybe<GraphQLIModel>;
  triggerAction: GraphQLWebhookTriggerAction;
  attempts: Scalars["Int"];
  duration: Scalars["Float"];
};

export type GraphQLCreateWebhookPayload = {
  __typename?: "CreateWebhookPayload";
  createdWebhook: GraphQLWebhook;
};

export type GraphQLUpdateWebhookPayload = {
  __typename?: "UpdateWebhookPayload";
  updatedWebhook: GraphQLWebhook;
};

export type GraphQLDeleteWebhookPayload = {
  __typename?: "DeleteWebhookPayload";
  deletedWebhookId: Scalars["ID"];
};

/** Defines the type of the trigger */
export enum GraphQLWebhookTriggerType {
  ContentModel = "CONTENT_MODEL",
}

/**
 * Defines which operation will trigger the webhook.
 * Some operations rely on the type of stage. E.g. on a
 * publishing stage, the webhook will only be triggered for
 * PUBLISH and UNPUBLISH events. On other stages, only
 * CREATE, UPDATE and DELETE are triggering the webhook.
 */
export enum GraphQLWebhookTriggerAction {
  Create = "CREATE",
  Update = "UPDATE",
  Delete = "DELETE",
  Publish = "PUBLISH",
  Unpublish = "UNPUBLISH",
}

export type GraphQLCreateWebhookInput = {
  environmentId: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  url: Scalars["String"];
  headers?: Maybe<Scalars["JSON"]>;
  isActive: Scalars["Boolean"];
  includePayload: Scalars["Boolean"];
  /**
   * Pass an empty array for all existing models.
   * This will also setup the webook for models
   * created in the future
   */
  models: Array<Scalars["ID"]>;
  /**
   * Pass an empty array for all existing stages.
   * This will also setup the webook for stages
   * created in the future
   */
  stages: Array<Scalars["ID"]>;
  triggerType: GraphQLWebhookTriggerType;
  triggerActions: Array<GraphQLWebhookTriggerAction>;
  secretKey?: Maybe<Scalars["String"]>;
  triggerSources?: Maybe<Array<GraphQLWebhookTriggerSource>>;
};

export type GraphQLUpdateWebhookInput = {
  webhookId: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  headers?: Maybe<Scalars["JSON"]>;
  url?: Maybe<Scalars["String"]>;
  isActive?: Maybe<Scalars["Boolean"]>;
  includePayload?: Maybe<Scalars["Boolean"]>;
  stages?: Maybe<Array<Scalars["ID"]>>;
  models?: Maybe<Array<Scalars["ID"]>>;
  triggerType?: Maybe<GraphQLWebhookTriggerType>;
  triggerActions?: Maybe<Array<GraphQLWebhookTriggerAction>>;
  secretKey?: Maybe<Scalars["String"]>;
  triggerSources?: Maybe<Array<GraphQLWebhookTriggerSource>>;
};

export type GraphQLDeleteWebhookInput = {
  webhookId: Scalars["ID"];
};

export type GraphQLRetriggerWebhookInput = {
  webhookId: Scalars["ID"];
  logId: Scalars["String"];
};

export type GraphQLRetriggerWebhookPayload = {
  __typename?: "RetriggerWebhookPayload";
  logId: Scalars["String"];
};

export enum GraphQLAvailableExtensionSrcType {
  Inline = "INLINE",
  Sdk = "SDK",
}

export enum GraphQLAvailableExtensionPermissionAction {
  Input = "INPUT",
  Form = "FORM",
  Api = "API",
}

export enum GraphQLExtensionFieldType {
  Id = "ID",
  String = "STRING",
  Richtext = "RICHTEXT",
  Int = "INT",
  Float = "FLOAT",
  Boolean = "BOOLEAN",
  Json = "JSON",
  Datetime = "DATETIME",
  Date = "DATE",
  Location = "LOCATION",
  Color = "COLOR",
  Graphql = "GRAPHQL",
  Rest = "REST",
  Enumeration = "ENUMERATION",
  Relation = "RELATION",
  Asset = "ASSET",
  Union = "UNION",
}

export type GraphQLExtensionSrcType = {
  __typename?: "ExtensionSrcType";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  description?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  type: GraphQLAvailableExtensionSrcType;
};

export type GraphQLAvailableExtensionPermission = {
  __typename?: "AvailableExtensionPermission";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  description?: Maybe<Scalars["String"]>;
  name: GraphQLAvailableExtensionPermissionAction;
};

export type GraphQLIExtension = {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  createdBy?: Maybe<GraphQLMember>;
  updatedBy?: Maybe<GraphQLMember>;
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  apiId: Scalars["String"];
  /** The type indicating where the source for the extension will be obtained from */
  srcType: GraphQLExtensionSrcType;
  /** Location for the source if the source type is an external one */
  src: Scalars["String"];
  environment: GraphQLEnvironment;
  config: Scalars["JSON"];
  isActive: Scalars["Boolean"];
  meta?: Maybe<Scalars["JSON"]>;
  neededPermissions: Array<GraphQLAvailableExtensionPermission>;
};

export type GraphQLFieldExtension = GraphQLIExtension & {
  __typename?: "FieldExtension";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  createdBy?: Maybe<GraphQLMember>;
  updatedBy?: Maybe<GraphQLMember>;
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  apiId: Scalars["String"];
  /** The type indicating where the source for the extension will be obtained from */
  srcType: GraphQLExtensionSrcType;
  /** Location for the source if the source type is an external one */
  src: Scalars["String"];
  environment: GraphQLEnvironment;
  config: Scalars["JSON"];
  isActive: Scalars["Boolean"];
  meta?: Maybe<Scalars["JSON"]>;
  neededPermissions: Array<GraphQLAvailableExtensionPermission>;
  fieldType: GraphQLExtensionFieldType;
  hasFormRenderer: Scalars["Boolean"];
  hasListRenderer: Scalars["Boolean"];
  hasTableRenderer: Scalars["Boolean"];
  fields: Array<GraphQLIField>;
};

export type GraphQLSidebarExtension = GraphQLIExtension & {
  __typename?: "SidebarExtension";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  createdBy?: Maybe<GraphQLMember>;
  updatedBy?: Maybe<GraphQLMember>;
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  apiId: Scalars["String"];
  /** The type indicating where the source for the extension will be obtained from */
  srcType: GraphQLExtensionSrcType;
  /** Location for the source if the source type is an external one */
  src: Scalars["String"];
  environment: GraphQLEnvironment;
  config: Scalars["JSON"];
  isActive: Scalars["Boolean"];
  meta?: Maybe<Scalars["JSON"]>;
  neededPermissions: Array<GraphQLAvailableExtensionPermission>;
  sidebarElements: Array<GraphQLISidebarElement>;
};

export type GraphQLCreateFieldExtensionPayload = {
  __typename?: "CreateFieldExtensionPayload";
  createdExtension: GraphQLFieldExtension;
};

export type GraphQLUpdateFieldExtensionPayload = {
  __typename?: "UpdateFieldExtensionPayload";
  updatedExtension: GraphQLFieldExtension;
};

export type GraphQLCreateSidebarExtensionPayload = {
  __typename?: "CreateSidebarExtensionPayload";
  createdExtension: GraphQLSidebarExtension;
};

export type GraphQLUpdateSidebarExtensionPayload = {
  __typename?: "UpdateSidebarExtensionPayload";
  updatedExtension: GraphQLSidebarExtension;
};

export type GraphQLDeleteExtensionPayload = {
  __typename?: "DeleteExtensionPayload";
  deletedExtensionId: Scalars["ID"];
};

export type GraphQLCreateFieldExtensionInput = {
  environmentId: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  apiId: Scalars["String"];
  srcTypeId: Scalars["ID"];
  src: Scalars["String"];
  config: Scalars["JSON"];
  isActive: Scalars["Boolean"];
  meta?: Maybe<Scalars["JSON"]>;
  fieldType: GraphQLExtensionFieldType;
  hasFormRenderer: Scalars["Boolean"];
  hasListRenderer: Scalars["Boolean"];
  hasTableRenderer: Scalars["Boolean"];
  neededPermissions?: Maybe<Array<Scalars["ID"]>>;
};

export type GraphQLUpdateFieldExtensionInput = {
  extensionId: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  apiId: Scalars["String"];
  srcTypeId?: Maybe<Scalars["ID"]>;
  src?: Maybe<Scalars["String"]>;
  config?: Maybe<Scalars["JSON"]>;
  isActive?: Maybe<Scalars["Boolean"]>;
  meta?: Maybe<Scalars["JSON"]>;
  fieldType?: Maybe<GraphQLExtensionFieldType>;
  hasFormRenderer?: Maybe<Scalars["Boolean"]>;
  hasListRenderer?: Maybe<Scalars["Boolean"]>;
  hasTableRenderer?: Maybe<Scalars["Boolean"]>;
  neededPermissions?: Maybe<Array<GraphQLAvailableExtensionPermissionAction>>;
};

export type GraphQLCreateSidebarExtensionInput = {
  environmentId: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  apiId: Scalars["String"];
  srcTypeId: Scalars["ID"];
  src: Scalars["String"];
  config: Scalars["JSON"];
  isActive: Scalars["Boolean"];
  meta?: Maybe<Scalars["JSON"]>;
  neededPermissions?: Maybe<Array<Scalars["ID"]>>;
};

export type GraphQLUpdateSidebarExtensionInput = {
  extensionId: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  apiId: Scalars["String"];
  srcTypeId?: Maybe<Scalars["ID"]>;
  src?: Maybe<Scalars["String"]>;
  config?: Maybe<Scalars["JSON"]>;
  isActive?: Maybe<Scalars["Boolean"]>;
  meta?: Maybe<Scalars["JSON"]>;
  neededPermissions?: Maybe<Array<GraphQLAvailableExtensionPermissionAction>>;
};

export type GraphQLDeleteExtensionInput = {
  extensionId: Scalars["ID"];
};

export enum GraphQLAppPublicationStatus {
  Private = "PRIVATE",
  Pending = "PENDING",
  Public = "PUBLIC",
}

export type GraphQLApp = {
  __typename?: "App";
  id: Scalars["ID"];
  author: Scalars["ID"];
  name: Scalars["String"];
  apiId: Scalars["String"];
  setupUrl: Scalars["String"];
  webhookUrl?: Maybe<Scalars["String"]>;
  configurationUrl?: Maybe<Scalars["String"]>;
  elements?: Maybe<Array<GraphQLIAppElement>>;
  avatarUrl: Scalars["String"];
  description: Scalars["String"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  publicationStatus: GraphQLAppPublicationStatus;
};

export enum GraphQLAppElementType {
  Field = "field",
  FormSidebar = "formSidebar",
  Page = "page",
}

export type GraphQLIAppElement = {
  id: Scalars["ID"];
  name: Scalars["String"];
  apiId: Scalars["String"];
  type: GraphQLAppElementType;
  description?: Maybe<Scalars["String"]>;
  config?: Maybe<Scalars["JSON"]>;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  src: Scalars["String"];
  app: GraphQLApp;
};

export enum GraphQLFieldAppElementFeature {
  FieldRenderer = "FieldRenderer",
  ListRenderer = "ListRenderer",
  TableRenderer = "TableRenderer",
}

export type GraphQLFieldAppElement = GraphQLIAppElement & {
  __typename?: "FieldAppElement";
  id: Scalars["ID"];
  name: Scalars["String"];
  apiId: Scalars["String"];
  type: GraphQLAppElementType;
  description?: Maybe<Scalars["String"]>;
  config?: Maybe<Scalars["JSON"]>;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  src: Scalars["String"];
  features: Array<GraphQLFieldAppElementFeature>;
  fieldType: GraphQLSimpleFieldType;
  app: GraphQLApp;
};

export type GraphQLFormSidebarAppElement = GraphQLIAppElement & {
  __typename?: "FormSidebarAppElement";
  id: Scalars["ID"];
  name: Scalars["String"];
  apiId: Scalars["String"];
  type: GraphQLAppElementType;
  description?: Maybe<Scalars["String"]>;
  config?: Maybe<Scalars["JSON"]>;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  src: Scalars["String"];
  app: GraphQLApp;
};

export type GraphQLPageAppElement = GraphQLIAppElement & {
  __typename?: "PageAppElement";
  id: Scalars["ID"];
  name: Scalars["String"];
  apiId: Scalars["String"];
  type: GraphQLAppElementType;
  description?: Maybe<Scalars["String"]>;
  config?: Maybe<Scalars["JSON"]>;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  src: Scalars["String"];
  app: GraphQLApp;
};

export type GraphQLCreateAppInput = {
  name: Scalars["String"];
  apiId: Scalars["String"];
  setupUrl: Scalars["String"];
  avatarUrl: Scalars["String"];
  description: Scalars["String"];
  webhookUrl?: Maybe<Scalars["String"]>;
  elements?: Maybe<Array<GraphQLAppElementInput>>;
  configurationUrl?: Maybe<Scalars["String"]>;
};

export type GraphQLAppElementInput = {
  id: Scalars["ID"];
  apiId: Scalars["String"];
  name: Scalars["String"];
  type: GraphQLAppElementType;
  description?: Maybe<Scalars["String"]>;
  config?: Maybe<Scalars["JSON"]>;
  src: Scalars["String"];
  features?: Maybe<Array<GraphQLFieldAppElementFeature>>;
  fieldType?: Maybe<GraphQLSimpleFieldType>;
};

export type GraphQLUpdateAppInput = {
  apiId: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  setupUrl?: Maybe<Scalars["String"]>;
  webhookUrl?: Maybe<Scalars["String"]>;
  elements?: Maybe<Array<GraphQLAppElementInput>>;
  avatarUrl?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  configurationUrl?: Maybe<Scalars["String"]>;
};

export type GraphQLDeleteAppInput = {
  apiId: Scalars["String"];
};

export type GraphQLCreateAppPayload = {
  __typename?: "CreateAppPayload";
  createdApp: GraphQLApp;
};

export type GraphQLUpdateAppPayload = {
  __typename?: "UpdateAppPayload";
  updatedApp: GraphQLApp;
};

export type GraphQLDeleteAppPayload = {
  __typename?: "DeleteAppPayload";
  deletedAppId: Scalars["ID"];
};

export enum GraphQLAppInstallationStatus {
  Pending = "PENDING",
  Completed = "COMPLETED",
  Disabled = "DISABLED",
}

export type GraphQLAppInstallation = {
  __typename?: "AppInstallation";
  id: Scalars["ID"];
  environment: GraphQLEnvironment;
  fields: Array<GraphQLIField>;
  sidebarElements: Array<GraphQLAppSidebarElement>;
  app: GraphQLApp;
  config: Scalars["JSON"];
  status: GraphQLAppInstallationStatus;
  authToken: Scalars["String"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type GraphQLCreateAppInstallationInput = {
  environment: Scalars["ID"];
  appApiId: Scalars["String"];
  status?: Maybe<GraphQLAppInstallationStatus>;
  config: Scalars["JSON"];
};

export type GraphQLUpdateAppInstallationInput = {
  appInstallationId: Scalars["ID"];
  config: Scalars["JSON"];
  status?: Maybe<GraphQLAppInstallationStatus>;
};

export type GraphQLDeleteAppInstallationInput = {
  appInstallationId: Scalars["ID"];
};

export type GraphQLCreateAppInstallationPayload = {
  __typename?: "CreateAppInstallationPayload";
  createdAppInstallation: GraphQLAppInstallation;
};

export type GraphQLUpdateAppInstallationPayload = {
  __typename?: "UpdateAppInstallationPayload";
  updatedAppInstallation: GraphQLAppInstallation;
};

export type GraphQLDeleteAppInstallationPayload = {
  __typename?: "DeleteAppInstallationPayload";
  deletedAppInstallationId: Scalars["ID"];
};

export type GraphQLEnumerationValue = {
  __typename?: "EnumerationValue";
  id: Scalars["ID"];
  apiId: Scalars["String"];
  displayName: Scalars["String"];
};

export type GraphQLEnumeration = {
  __typename?: "Enumeration";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  apiId: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  environment: GraphQLEnvironment;
  values: Array<GraphQLEnumerationValue>;
  isSystem: Scalars["Boolean"];
};

export type GraphQLCreateEnumerationInput = {
  environmentId: Scalars["ID"];
  apiId: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  values: Array<GraphQLEnumerationValueCreateInput>;
};

export type GraphQLDeleteEnumerationInput = {
  id: Scalars["ID"];
};

export type GraphQLUpdateEnumerationInput = {
  id: Scalars["ID"];
  /**
   * New Api identifier to use,
   * will impact Content API
   */
  apiId?: Maybe<Scalars["String"]>;
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  /** List of values to create */
  valuesToCreate?: Maybe<Array<GraphQLEnumerationValueCreateInput>>;
  /** List of existing values to update */
  valuesToUpdate?: Maybe<Array<GraphQLEnumerationValueUpdateInput>>;
  /** List of value IDs to delete */
  valuesToDelete?: Maybe<Array<Scalars["ID"]>>;
};

export type GraphQLEnumerationValueCreateInput = {
  apiId: Scalars["String"];
  displayName: Scalars["String"];
};

export type GraphQLEnumerationValueUpdateInput = {
  id: Scalars["ID"];
  /** Update enumeration value API identifier */
  apiId?: Maybe<Scalars["String"]>;
  displayName?: Maybe<Scalars["String"]>;
};

export type GraphQLIRequireableField = {
  isRequired: Scalars["Boolean"];
};

export type GraphQLIUniqueableField = {
  isUnique: Scalars["Boolean"];
};

export type GraphQLILocalizableField = {
  isLocalized: Scalars["Boolean"];
};

export type GraphQLITitleableField = {
  isTitle: Scalars["Boolean"];
};

export type GraphQLFieldValidationFloatRange = {
  __typename?: "FieldValidationFloatRange";
  min?: Maybe<Scalars["Float"]>;
  max?: Maybe<Scalars["Float"]>;
  errorMessage?: Maybe<Scalars["String"]>;
};

export type GraphQLFieldValidationRange = {
  __typename?: "FieldValidationRange";
  min?: Maybe<Scalars["Int"]>;
  max?: Maybe<Scalars["Int"]>;
  errorMessage?: Maybe<Scalars["String"]>;
};

export type GraphQLFieldValidationRegEx = {
  __typename?: "FieldValidationRegEx";
  regex?: Maybe<Scalars["String"]>;
  flags?: Maybe<Array<Scalars["String"]>>;
  errorMessage?: Maybe<Scalars["String"]>;
};

export type GraphQLFieldValidationIntRange = {
  __typename?: "FieldValidationIntRange";
  min?: Maybe<Scalars["Int"]>;
  max?: Maybe<Scalars["Int"]>;
  errorMessage?: Maybe<Scalars["String"]>;
};

export type GraphQLStringFieldValidations = {
  __typename?: "StringFieldValidations";
  characters?: Maybe<GraphQLFieldValidationRange>;
  listItemCount?: Maybe<GraphQLFieldValidationRange>;
  matches?: Maybe<GraphQLFieldValidationRegEx>;
  notMatches?: Maybe<GraphQLFieldValidationRegEx>;
};

export type GraphQLIntFieldValidations = {
  __typename?: "IntFieldValidations";
  range?: Maybe<GraphQLFieldValidationRange>;
  listItemCount?: Maybe<GraphQLFieldValidationRange>;
};

export type GraphQLFloatFieldValidations = {
  __typename?: "FloatFieldValidations";
  range?: Maybe<GraphQLFieldValidationFloatRange>;
  listItemCount?: Maybe<GraphQLFieldValidationRange>;
};

export type GraphQLSimpleFieldValidations =
  | GraphQLStringFieldValidations
  | GraphQLIntFieldValidations
  | GraphQLFloatFieldValidations;

export type GraphQLIField = {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  apiId: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  isSystem: Scalars["Boolean"];
  isList: Scalars["Boolean"];
  position: Scalars["Int"];
  /** @deprecated Use visibility instead */
  isHidden: Scalars["Boolean"];
  visibility: GraphQLVisibilityTypes;
  /**
   * This will throw a runtime error for fields that are on a component instead of model!
   * @deprecated Use parent instead
   */
  model: GraphQLIModel;
  parent: GraphQLIFieldParent;
  tableConfig: GraphQLFieldConfig;
  formConfig: GraphQLFieldConfig;
  extensions?: Maybe<Scalars["JSON"]>;
  meta?: Maybe<Scalars["JSON"]>;
};

/** Field types */
export enum GraphQLSimpleFieldType {
  Id = "ID",
  String = "STRING",
  Richtext = "RICHTEXT",
  Int = "INT",
  Float = "FLOAT",
  Boolean = "BOOLEAN",
  Json = "JSON",
  Datetime = "DATETIME",
  Date = "DATE",
  Location = "LOCATION",
  Color = "COLOR",
}

export enum GraphQLRemoteFieldType {
  Graphql = "GRAPHQL",
  Rest = "REST",
}

export enum GraphQLRemoteFieldApiMethod {
  Get = "GET",
  Post = "POST",
}

export enum GraphQLGraphQlRemoteSourceIntrospectionMethod {
  Get = "GET",
  Post = "POST",
}

export enum GraphQLEnumerableFieldType {
  Enumeration = "ENUMERATION",
}

export enum GraphQLRelationalFieldType {
  Relation = "RELATION",
  Asset = "ASSET",
}

export enum GraphQLComponentFieldType {
  Component = "COMPONENT",
}

export enum GraphQLUnionFieldType {
  Union = "UNION",
}

export enum GraphQLComponentUnionFieldType {
  ComponentUnion = "COMPONENT_UNION",
}

export enum GraphQLVisibilityTypes {
  /** Field can be read and edited */
  ReadWrite = "READ_WRITE",
  /** Field is shown but can't be edited in the UI, only through the API */
  ReadOnly = "READ_ONLY",
  /** Field is not shown, but can be used by other fields such as slugs or UI Extensions */
  Hidden = "HIDDEN",
  /** Field is not shown, and can only be read or edited through the API */
  ApiOnly = "API_ONLY",
}

export type GraphQLSimpleField = GraphQLIField &
  GraphQLIRequireableField &
  GraphQLIUniqueableField &
  GraphQLILocalizableField &
  GraphQLITitleableField & {
    __typename?: "SimpleField";
    id: Scalars["ID"];
    type: GraphQLSimpleFieldType;
    createdAt: Scalars["DateTime"];
    updatedAt: Scalars["DateTime"];
    apiId: Scalars["String"];
    displayName: Scalars["String"];
    description?: Maybe<Scalars["String"]>;
    isSystem: Scalars["Boolean"];
    isList: Scalars["Boolean"];
    isRequired: Scalars["Boolean"];
    isUnique: Scalars["Boolean"];
    position: Scalars["Int"];
    /** @deprecated Use visibility instead */
    isHidden: Scalars["Boolean"];
    visibility: GraphQLVisibilityTypes;
    isLocalized: Scalars["Boolean"];
    initialValue?: Maybe<Scalars["String"]>;
    /**
     * This will throw a runtime error for fields that are on a component instead of model!
     * @deprecated Use parent instead
     */
    model: GraphQLIModel;
    parent: GraphQLIFieldParent;
    isTitle: Scalars["Boolean"];
    tableConfig: GraphQLFieldConfig;
    formConfig: GraphQLFieldConfig;
    extensions?: Maybe<Scalars["JSON"]>;
    validations?: Maybe<GraphQLSimpleFieldValidations>;
    meta?: Maybe<Scalars["JSON"]>;
    embedsEnabled?: Maybe<Scalars["Boolean"]>;
    embeddableModels?: Maybe<Array<GraphQLIModel>>;
  };

export type GraphQLRemoteTypeDefinition = {
  __typename?: "RemoteTypeDefinition";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  apiId: Scalars["String"];
  sdl: Scalars["String"];
  graphqlType: GraphQLRemote_Graphql_Type;
  isSystem: Scalars["Boolean"];
};

export type GraphQLIRemoteFieldConfig = {
  returnType: GraphQLRemoteTypeDefinition;
  /** Headers that will be sent to the remote source. Those headers will override the headers defined on the remote source if setup */
  headers?: Maybe<Scalars["JSON"]>;
  method: GraphQLRemoteFieldApiMethod;
  cacheTTLSeconds?: Maybe<Scalars["Int"]>;
  remoteSource: GraphQLIRemoteSource;
  forwardClientHeaders: Scalars["Boolean"];
};

export type GraphQLGraphQlRemoteFieldConfig = GraphQLIRemoteFieldConfig & {
  __typename?: "GraphQLRemoteFieldConfig";
  returnType: GraphQLRemoteTypeDefinition;
  headers?: Maybe<Scalars["JSON"]>;
  method: GraphQLRemoteFieldApiMethod;
  cacheTTLSeconds?: Maybe<Scalars["Int"]>;
  forwardClientHeaders: Scalars["Boolean"];
  /** In case of apiType GraphQL graphqlQuery contains the GraphQL query that will be sent to the remote source */
  query?: Maybe<Scalars["String"]>;
  operationName?: Maybe<Scalars["String"]>;
  remoteSource: GraphQLGraphQlRemoteSource;
};

export type GraphQLRestRemoteFieldConfig = GraphQLIRemoteFieldConfig & {
  __typename?: "RestRemoteFieldConfig";
  returnType: GraphQLRemoteTypeDefinition;
  headers?: Maybe<Scalars["JSON"]>;
  method: GraphQLRemoteFieldApiMethod;
  cacheTTLSeconds?: Maybe<Scalars["Int"]>;
  forwardClientHeaders: Scalars["Boolean"];
  path?: Maybe<Scalars["String"]>;
  remoteSource: GraphQLRestRemoteSource;
};

export type GraphQLRemoteField = GraphQLIField & {
  __typename?: "RemoteField";
  id: Scalars["ID"];
  type: GraphQLRemoteFieldType;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  apiId: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  isSystem: Scalars["Boolean"];
  position: Scalars["Int"];
  /** @deprecated Use visibility instead */
  isHidden: Scalars["Boolean"];
  visibility: GraphQLVisibilityTypes;
  isList: Scalars["Boolean"];
  isRequired: Scalars["Boolean"];
  /**
   * This will throw a runtime error for fields that are on a component instead of model!
   * @deprecated Use parent instead
   */
  model: GraphQLIModel;
  parent: GraphQLIFieldParent;
  tableConfig: GraphQLFieldConfig;
  formConfig: GraphQLFieldConfig;
  extensions?: Maybe<Scalars["JSON"]>;
  meta?: Maybe<Scalars["JSON"]>;
  remoteConfig: GraphQLIRemoteFieldConfig;
  inputArgs?: Maybe<Array<GraphQLFieldInputArg>>;
};

export type GraphQLEnumerableField = GraphQLIField &
  GraphQLIRequireableField &
  GraphQLIUniqueableField &
  GraphQLILocalizableField &
  GraphQLITitleableField & {
    __typename?: "EnumerableField";
    id: Scalars["ID"];
    createdAt: Scalars["DateTime"];
    updatedAt: Scalars["DateTime"];
    type: GraphQLEnumerableFieldType;
    apiId: Scalars["String"];
    displayName: Scalars["String"];
    description?: Maybe<Scalars["String"]>;
    isSystem: Scalars["Boolean"];
    isList: Scalars["Boolean"];
    isRequired: Scalars["Boolean"];
    isUnique: Scalars["Boolean"];
    position: Scalars["Int"];
    /** @deprecated Use visibility instead */
    isHidden: Scalars["Boolean"];
    visibility: GraphQLVisibilityTypes;
    isLocalized: Scalars["Boolean"];
    initialValue?: Maybe<GraphQLEnumerationValue>;
    /**
     * This will throw a runtime error for fields that are on a component instead of model!
     * @deprecated Use parent instead
     */
    model: GraphQLIModel;
    parent: GraphQLIFieldParent;
    isTitle: Scalars["Boolean"];
    tableConfig: GraphQLFieldConfig;
    formConfig: GraphQLFieldConfig;
    enumeration: GraphQLEnumeration;
    extensions?: Maybe<Scalars["JSON"]>;
    meta?: Maybe<Scalars["JSON"]>;
  };

export type GraphQLRelationalField = GraphQLIField &
  GraphQLIRequireableField & {
    __typename?: "RelationalField";
    id: Scalars["ID"];
    createdAt: Scalars["DateTime"];
    updatedAt: Scalars["DateTime"];
    type: GraphQLRelationalFieldType;
    apiId: Scalars["String"];
    displayName: Scalars["String"];
    description?: Maybe<Scalars["String"]>;
    isSystem: Scalars["Boolean"];
    isList: Scalars["Boolean"];
    isRequired: Scalars["Boolean"];
    position: Scalars["Int"];
    /** @deprecated Use visibility instead */
    isHidden: Scalars["Boolean"];
    visibility: GraphQLVisibilityTypes;
    /**
     * This will throw a runtime error for fields that are on a component instead of model!
     * @deprecated Use parent instead
     */
    model: GraphQLIModel;
    parent: GraphQLIFieldParent;
    tableConfig: GraphQLFieldConfig;
    formConfig: GraphQLFieldConfig;
    relatedModel: GraphQLIModel;
    relatedField: GraphQLRelationalField;
    extensions?: Maybe<Scalars["JSON"]>;
    meta?: Maybe<Scalars["JSON"]>;
  };

export type GraphQLUniDirectionalRelationalField = GraphQLIField &
  GraphQLIRequireableField & {
    __typename?: "UniDirectionalRelationalField";
    id: Scalars["ID"];
    createdAt: Scalars["DateTime"];
    updatedAt: Scalars["DateTime"];
    type: GraphQLRelationalFieldType;
    apiId: Scalars["String"];
    displayName: Scalars["String"];
    description?: Maybe<Scalars["String"]>;
    isSystem: Scalars["Boolean"];
    isList: Scalars["Boolean"];
    isRequired: Scalars["Boolean"];
    position: Scalars["Int"];
    /** @deprecated Use visibility instead */
    isHidden: Scalars["Boolean"];
    visibility: GraphQLVisibilityTypes;
    /**
     * This will throw a runtime error for fields that are on a component instead of model!
     * @deprecated Use parent instead
     */
    model: GraphQLIModel;
    parent: GraphQLIFieldParent;
    tableConfig: GraphQLFieldConfig;
    formConfig: GraphQLFieldConfig;
    relatedModel: GraphQLIModel;
    extensions?: Maybe<Scalars["JSON"]>;
    meta?: Maybe<Scalars["JSON"]>;
  };

export type GraphQLComponentField = GraphQLIField &
  GraphQLIRequireableField & {
    __typename?: "ComponentField";
    id: Scalars["ID"];
    createdAt: Scalars["DateTime"];
    updatedAt: Scalars["DateTime"];
    type: GraphQLComponentFieldType;
    apiId: Scalars["String"];
    displayName: Scalars["String"];
    description?: Maybe<Scalars["String"]>;
    isSystem: Scalars["Boolean"];
    isList: Scalars["Boolean"];
    isRequired: Scalars["Boolean"];
    position: Scalars["Int"];
    /** @deprecated Use visibility instead */
    isHidden: Scalars["Boolean"];
    visibility: GraphQLVisibilityTypes;
    /**
     * This will throw a runtime error for fields that are on a component instead of model!
     * @deprecated Use parent instead
     */
    model: GraphQLIModel;
    parent: GraphQLIFieldParent;
    hasEmptyValues: Scalars["Boolean"];
    tableConfig: GraphQLFieldConfig;
    formConfig: GraphQLFieldConfig;
    component: GraphQLComponent;
    extensions?: Maybe<Scalars["JSON"]>;
    meta?: Maybe<Scalars["JSON"]>;
  };

export type GraphQLUnionField = GraphQLIField &
  GraphQLIUnionField & {
    __typename?: "UnionField";
    id: Scalars["ID"];
    type: GraphQLUnionFieldType;
    createdAt: Scalars["DateTime"];
    updatedAt: Scalars["DateTime"];
    apiId: Scalars["String"];
    displayName: Scalars["String"];
    description?: Maybe<Scalars["String"]>;
    isSystem: Scalars["Boolean"];
    isList: Scalars["Boolean"];
    position: Scalars["Int"];
    /** @deprecated Use visibility instead */
    isHidden: Scalars["Boolean"];
    visibility: GraphQLVisibilityTypes;
    /**
     * This will throw a runtime error for fields that are on a component instead of model!
     * @deprecated Use parent instead
     */
    model: GraphQLIModel;
    parent: GraphQLIFieldParent;
    tableConfig: GraphQLFieldConfig;
    formConfig: GraphQLFieldConfig;
    /** True if this field is the reverse side of the initally created union field */
    isMemberType: Scalars["Boolean"];
    union: GraphQLUnion;
    extensions?: Maybe<Scalars["JSON"]>;
    meta?: Maybe<Scalars["JSON"]>;
  };

export type GraphQLComponentUnionField = GraphQLIField &
  GraphQLIRequireableField & {
    __typename?: "ComponentUnionField";
    id: Scalars["ID"];
    createdAt: Scalars["DateTime"];
    updatedAt: Scalars["DateTime"];
    type: GraphQLComponentUnionFieldType;
    apiId: Scalars["String"];
    displayName: Scalars["String"];
    description?: Maybe<Scalars["String"]>;
    isSystem: Scalars["Boolean"];
    isList: Scalars["Boolean"];
    isRequired: Scalars["Boolean"];
    position: Scalars["Int"];
    /** @deprecated Use visibility instead */
    isHidden: Scalars["Boolean"];
    visibility: GraphQLVisibilityTypes;
    /**
     * This will throw a runtime error for fields that are on a component instead of model!
     * @deprecated Use parent instead
     */
    model: GraphQLIModel;
    parent: GraphQLIFieldParent;
    tableConfig: GraphQLFieldConfig;
    formConfig: GraphQLFieldConfig;
    components: Array<GraphQLComponent>;
    extensions?: Maybe<Scalars["JSON"]>;
    meta?: Maybe<Scalars["JSON"]>;
  };

export type GraphQLUnion = {
  __typename?: "Union";
  id: Scalars["ID"];
  apiId: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  memberTypes: Array<GraphQLUnionField>;
  field: GraphQLUnionField;
};

export type GraphQLIUnionField = {
  /** True if this field is the reverse side of the initally created union field */
  isMemberType: Scalars["Boolean"];
  union: GraphQLUnion;
};

export type GraphQLFieldConfig = {
  __typename?: "FieldConfig";
  config: Scalars["JSON"];
  id: Scalars["String"];
  renderer: Scalars["String"];
  extension?: Maybe<GraphQLFieldExtension>;
  appInstallation?: Maybe<GraphQLAppInstallation>;
  appElement?: Maybe<GraphQLFieldAppElement>;
};

export type GraphQLMoveFieldPayload = {
  __typename?: "MoveFieldPayload";
  movedFields: Array<GraphQLIField>;
};

export type GraphQLMoveSidebarElementPayload = {
  __typename?: "MoveSidebarElementPayload";
  movedSidebarElements: Array<GraphQLISidebarElement>;
};

export type GraphQLFieldValidationIntRangeInput = {
  min?: Maybe<Scalars["Int"]>;
  max?: Maybe<Scalars["Int"]>;
  errorMessage?: Maybe<Scalars["String"]>;
};

export type GraphQLFieldValidationFloatRangeInput = {
  min?: Maybe<Scalars["Float"]>;
  max?: Maybe<Scalars["Float"]>;
  errorMessage?: Maybe<Scalars["String"]>;
};

export type GraphQLFieldValidationRegExInput = {
  regex?: Maybe<Scalars["String"]>;
  flags?: Maybe<Array<Scalars["String"]>>;
  errorMessage?: Maybe<Scalars["String"]>;
};

export type GraphQLIntFieldValidationsInput = {
  range?: Maybe<GraphQLFieldValidationIntRangeInput>;
  listItemCount?: Maybe<GraphQLFieldValidationIntRangeInput>;
};

export type GraphQLFloatFieldValidationsInput = {
  range?: Maybe<GraphQLFieldValidationFloatRangeInput>;
  listItemCount?: Maybe<GraphQLFieldValidationIntRangeInput>;
};

export type GraphQLStringFieldValidationsInput = {
  characters?: Maybe<GraphQLFieldValidationIntRangeInput>;
  listItemCount?: Maybe<GraphQLFieldValidationIntRangeInput>;
  matches?: Maybe<GraphQLFieldValidationRegExInput>;
  notMatches?: Maybe<GraphQLFieldValidationRegExInput>;
};

export type GraphQLSimpleFieldValidationsInput = {
  Int?: Maybe<GraphQLIntFieldValidationsInput>;
  Float?: Maybe<GraphQLFloatFieldValidationsInput>;
  String?: Maybe<GraphQLStringFieldValidationsInput>;
};

export type GraphQLEmbeddableModelsInput = {
  modelsToAdd?: Maybe<Array<Scalars["ID"]>>;
  modelsToRemove?: Maybe<Array<Scalars["ID"]>>;
};

export type GraphQLUpdateSimpleFieldInput = {
  id: Scalars["ID"];
  apiId?: Maybe<Scalars["String"]>;
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  isRequired?: Maybe<Scalars["Boolean"]>;
  isUnique?: Maybe<Scalars["Boolean"]>;
  isList?: Maybe<Scalars["Boolean"]>;
  isHidden?: Maybe<Scalars["Boolean"]>;
  visibility?: Maybe<GraphQLVisibilityTypes>;
  isLocalized?: Maybe<Scalars["Boolean"]>;
  isTitle?: Maybe<Scalars["Boolean"]>;
  initialValue?: Maybe<Scalars["String"]>;
  migrationValue?: Maybe<Scalars["String"]>;
  formConfig?: Maybe<GraphQLFieldConfigInput>;
  tableConfig?: Maybe<GraphQLFieldConfigInput>;
  extensions?: Maybe<Scalars["JSON"]>;
  validations?: Maybe<GraphQLSimpleFieldValidationsInput>;
  meta?: Maybe<Scalars["JSON"]>;
  embedsEnabled?: Maybe<Scalars["Boolean"]>;
  embeddableModels?: Maybe<GraphQLEmbeddableModelsInput>;
};

export type GraphQLUpdateRemoteFieldInput = {
  id: Scalars["ID"];
  apiId?: Maybe<Scalars["String"]>;
  remoteConfig?: Maybe<GraphQLUpdateRemoteFieldConfigInput>;
  inputArgs?: Maybe<GraphQLUpsertFieldInputArgInput>;
  isList?: Maybe<Scalars["Boolean"]>;
  isRequired?: Maybe<Scalars["Boolean"]>;
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  visibility?: Maybe<GraphQLVisibilityTypes>;
  formConfig?: Maybe<GraphQLFieldConfigInput>;
  tableConfig?: Maybe<GraphQLFieldConfigInput>;
  extensions?: Maybe<Scalars["JSON"]>;
  meta?: Maybe<Scalars["JSON"]>;
};

export type GraphQLUpdateEnumerableFieldInput = {
  id: Scalars["ID"];
  apiId?: Maybe<Scalars["String"]>;
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  isRequired?: Maybe<Scalars["Boolean"]>;
  isList?: Maybe<Scalars["Boolean"]>;
  isUnique?: Maybe<Scalars["Boolean"]>;
  isHidden?: Maybe<Scalars["Boolean"]>;
  visibility?: Maybe<GraphQLVisibilityTypes>;
  isLocalized?: Maybe<Scalars["Boolean"]>;
  isTitle?: Maybe<Scalars["Boolean"]>;
  initialValue?: Maybe<Scalars["String"]>;
  migrationValue?: Maybe<Scalars["String"]>;
  formConfig?: Maybe<GraphQLFieldConfigInput>;
  tableConfig?: Maybe<GraphQLFieldConfigInput>;
  extensions?: Maybe<Scalars["JSON"]>;
  meta?: Maybe<Scalars["JSON"]>;
};

export type GraphQLUpdateRelationalFieldInput = {
  id: Scalars["ID"];
  apiId?: Maybe<Scalars["String"]>;
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  isList?: Maybe<Scalars["Boolean"]>;
  isHidden?: Maybe<Scalars["Boolean"]>;
  visibility?: Maybe<GraphQLVisibilityTypes>;
  isUnidirectional?: Maybe<Scalars["Boolean"]>;
  /**
   * Marks the field as required.
   * Note: This is only supported for RelationFieldType ASSET!
   */
  isRequired?: Maybe<Scalars["Boolean"]>;
  tableConfig?: Maybe<GraphQLFieldConfigInput>;
  formConfig?: Maybe<GraphQLFieldConfigInput>;
  extensions?: Maybe<Scalars["JSON"]>;
  meta?: Maybe<Scalars["JSON"]>;
};

export type GraphQLUpdateComponentFieldInput = {
  id: Scalars["ID"];
  apiId?: Maybe<Scalars["String"]>;
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  isList?: Maybe<Scalars["Boolean"]>;
  visibility?: Maybe<GraphQLVisibilityTypes>;
  isRequired?: Maybe<Scalars["Boolean"]>;
  tableConfig?: Maybe<GraphQLFieldConfigInput>;
  formConfig?: Maybe<GraphQLFieldConfigInput>;
  extensions?: Maybe<Scalars["JSON"]>;
  meta?: Maybe<Scalars["JSON"]>;
};

export type GraphQLUpdateComponentUnionFieldInput = {
  id: Scalars["ID"];
  components?: Maybe<Array<Scalars["ID"]>>;
  apiId?: Maybe<Scalars["String"]>;
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  visibility?: Maybe<GraphQLVisibilityTypes>;
  tableConfig?: Maybe<GraphQLFieldConfigInput>;
  formConfig?: Maybe<GraphQLFieldConfigInput>;
  extensions?: Maybe<Scalars["JSON"]>;
  meta?: Maybe<Scalars["JSON"]>;
};

export type GraphQLCreateMemberFieldInput = {
  /** ID of member model to add */
  modelId: Scalars["ID"];
  apiId?: Maybe<Scalars["String"]>;
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  isHidden?: Maybe<Scalars["Boolean"]>;
  visibility?: Maybe<GraphQLVisibilityTypes>;
  tableConfig?: Maybe<GraphQLFieldConfigInput>;
  formConfig?: Maybe<GraphQLFieldConfigInput>;
  extensions?: Maybe<Scalars["JSON"]>;
  meta?: Maybe<Scalars["JSON"]>;
};

export type GraphQLUpdateUnionInput = {
  apiId?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  displayName?: Maybe<Scalars["String"]>;
  /** Models and member fields to add */
  membersToAdd?: Maybe<Array<GraphQLCreateMemberFieldInput>>;
  /** Models to remove from union (accepts Model ID) */
  membersToRemove?: Maybe<Array<Scalars["ID"]>>;
};

export type GraphQLUpdateUnionFieldInput = {
  id: Scalars["ID"];
  union?: Maybe<GraphQLUpdateUnionInput>;
  apiId?: Maybe<Scalars["String"]>;
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  isHidden?: Maybe<Scalars["Boolean"]>;
  visibility?: Maybe<GraphQLVisibilityTypes>;
  tableConfig?: Maybe<GraphQLFieldConfigInput>;
  formConfig?: Maybe<GraphQLFieldConfigInput>;
  extensions?: Maybe<Scalars["JSON"]>;
  meta?: Maybe<Scalars["JSON"]>;
};

export type GraphQLFieldConfigInput = {
  renderer: Scalars["String"];
  config: Scalars["JSON"];
  extensionId?: Maybe<Scalars["ID"]>;
  appInstallationId?: Maybe<Scalars["ID"]>;
  appElementId?: Maybe<Scalars["ID"]>;
};

export type GraphQLFieldConfigUpdateInput = {
  renderer?: Maybe<Scalars["String"]>;
  config?: Maybe<Scalars["JSON"]>;
  extensionId?: Maybe<Scalars["ID"]>;
};

export type GraphQLCreateSimpleFieldInput = {
  modelId?: Maybe<Scalars["ID"]>;
  /**
   * This can be a model or component id, modelId must be empty when parentId is used
   * either modelId or parentId needs to be set and is required via validation, it will be made required.
   */
  parentId?: Maybe<Scalars["ID"]>;
  apiId: Scalars["String"];
  type: GraphQLSimpleFieldType;
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  isRequired: Scalars["Boolean"];
  isUnique: Scalars["Boolean"];
  isList: Scalars["Boolean"];
  isLocalized: Scalars["Boolean"];
  isHidden?: Maybe<Scalars["Boolean"]>;
  visibility?: Maybe<GraphQLVisibilityTypes>;
  isTitle?: Maybe<Scalars["Boolean"]>;
  initialValue?: Maybe<Scalars["String"]>;
  migrationValue?: Maybe<Scalars["String"]>;
  formConfig?: Maybe<GraphQLFieldConfigInput>;
  tableConfig?: Maybe<GraphQLFieldConfigInput>;
  extensions?: Maybe<Scalars["JSON"]>;
  validations?: Maybe<GraphQLSimpleFieldValidationsInput>;
  meta?: Maybe<Scalars["JSON"]>;
  position?: Maybe<Scalars["Int"]>;
  embedsEnabled?: Maybe<Scalars["Boolean"]>;
  embeddableModels?: Maybe<Array<Scalars["ID"]>>;
};

export type GraphQLRemoteFieldConfigInput = {
  /** Remote Type definitions apiId of the type the remote field should return. */
  returnTypeApiId: Scalars["String"];
  headers?: Maybe<Scalars["JSON"]>;
  method: GraphQLRemoteFieldApiMethod;
  cacheTTLSeconds?: Maybe<Scalars["Int"]>;
  remoteSourceId: Scalars["ID"];
  /** In case of apiType GraphQL graphqlQuery contains the GraphQL query that will be sent to the remote source */
  graphQLQuery?: Maybe<Scalars["String"]>;
  /** In case of apiType REST restPath contains the path that will be appended to the API base url */
  restPath?: Maybe<Scalars["String"]>;
  /** If true, headers that are sent by the client will be forwarded to the remote source */
  forwardClientHeaders?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLUpdateRemoteFieldConfigInput = {
  /** Remote Type definitions apiId of the type the remote field should return. */
  returnTypeApiId?: Maybe<Scalars["String"]>;
  headers?: Maybe<Scalars["JSON"]>;
  method?: Maybe<GraphQLRemoteFieldApiMethod>;
  forwardClientHeaders?: Maybe<Scalars["Boolean"]>;
  /** In case of apiType GraphQL graphqlQuery contains the GraphQL query that will be sent to the remote source */
  graphQLQuery?: Maybe<Scalars["String"]>;
  /** In case of apiType REST restPath contains the path that will be appended to the base url of the api */
  restPath?: Maybe<Scalars["String"]>;
  cacheTTLSeconds?: Maybe<Scalars["Int"]>;
  remoteSourceId?: Maybe<Scalars["ID"]>;
};

export type GraphQLUpsertFieldInputArgInputToCreateInput = {
  remoteTypeId: Scalars["ID"];
  apiId: Scalars["String"];
  isRequired: Scalars["Boolean"];
  isList: Scalars["Boolean"];
};

export type GraphQLUpsertFieldInputArgInputToUpdateInput = {
  inputArgId: Scalars["ID"];
  remoteTypeId?: Maybe<Scalars["ID"]>;
  apiId?: Maybe<Scalars["String"]>;
  isRequired?: Maybe<Scalars["Boolean"]>;
  isList?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLUpsertFieldInputArgInputToDeleteInput = {
  inputArgId: Scalars["ID"];
};

export type GraphQLUpsertFieldInputArgInput = {
  fieldInputArgsToCreate?: Maybe<
    Array<GraphQLUpsertFieldInputArgInputToCreateInput>
  >;
  fieldInputArgsToDelete?: Maybe<
    Array<GraphQLUpsertFieldInputArgInputToDeleteInput>
  >;
  fieldInputArgsToUpdate?: Maybe<
    Array<GraphQLUpsertFieldInputArgInputToUpdateInput>
  >;
};

export type GraphQLCreateFieldInputArgInput = {
  remoteTypeId: Scalars["ID"];
  apiId: Scalars["String"];
  isRequired: Scalars["Boolean"];
  isList: Scalars["Boolean"];
};

export type GraphQLFieldInputArg = {
  __typename?: "FieldInputArg";
  id: Scalars["ID"];
  apiId: Scalars["String"];
  isRequired: Scalars["Boolean"];
  isList: Scalars["Boolean"];
  remoteType: GraphQLRemoteTypeDefinition;
};

export type GraphQLBatchMigrationRemoteFieldInputArgInput = {
  remoteTypeApiId: Scalars["String"];
  apiId: Scalars["String"];
  isRequired: Scalars["Boolean"];
  isList: Scalars["Boolean"];
};

export type GraphQLBatchMigrationRemoteFieldConfigInput = {
  returnTypeApiId: Scalars["String"];
  headers?: Maybe<Scalars["JSON"]>;
  method: GraphQLRemoteFieldApiMethod;
  cacheTTLSeconds?: Maybe<Scalars["Int"]>;
  remoteSourcePrefix: Scalars["String"];
  /** In case of apiType GraphQL graphqlQuery contains the GraphQL query that will be sent to the remote source */
  graphQLQuery?: Maybe<Scalars["String"]>;
  /** In case of apiType REST restPath contains the path that will be appended to the API base url */
  restPath?: Maybe<Scalars["String"]>;
  /** If true, headers that are sent by the client will be forwarded to the remote source */
  forwardClientHeaders?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLBatchMigrationUpdateRemoteFieldConfigInput = {
  returnTypeApiId?: Maybe<Scalars["String"]>;
  remoteSourcePrefix?: Maybe<Scalars["String"]>;
  headers?: Maybe<Scalars["JSON"]>;
  method?: Maybe<GraphQLRemoteFieldApiMethod>;
  cacheTTLSeconds?: Maybe<Scalars["Int"]>;
  /** In case of apiType GraphQL graphqlQuery contains the GraphQL query that will be sent to the remote source */
  graphQLQuery?: Maybe<Scalars["String"]>;
  /** In case of apiType REST restPath contains the path that will be appended to the API base url */
  restPath?: Maybe<Scalars["String"]>;
  /** If true, headers that are sent by the client will be forwarded to the remote source */
  forwardClientHeaders?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLBatchMigrationUpsertFieldInputArgInputToCreateInput = {
  remoteTypeApiId: Scalars["String"];
  apiId: Scalars["String"];
  isRequired: Scalars["Boolean"];
  isList: Scalars["Boolean"];
};

export type GraphQLBatchMigrationUpsertFieldInputArgInputToUpdateInput = {
  argApiId: Scalars["String"];
  remoteTypeApiId?: Maybe<Scalars["String"]>;
  apiId?: Maybe<Scalars["String"]>;
  isRequired?: Maybe<Scalars["Boolean"]>;
  isList?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLBatchMigrationUpsertFieldInputArgInputToDeleteInput = {
  argApiId: Scalars["String"];
};

export type GraphQLBatchMigrationUpsertFieldInputArgInput = {
  fieldInputArgsToCreate?: Maybe<
    Array<GraphQLBatchMigrationUpsertFieldInputArgInputToCreateInput>
  >;
  fieldInputArgsToDelete?: Maybe<
    Array<GraphQLBatchMigrationUpsertFieldInputArgInputToDeleteInput>
  >;
  fieldInputArgsToUpdate?: Maybe<
    Array<GraphQLBatchMigrationUpsertFieldInputArgInputToUpdateInput>
  >;
};

export type GraphQLCreateRemoteFieldInput = {
  modelId?: Maybe<Scalars["ID"]>;
  /**
   * This can be a model or component id, modelId must be empty when parentId is used
   * either modelId or parentId needs to be set and is required via validation, it will be made required.
   */
  parentId?: Maybe<Scalars["ID"]>;
  apiId: Scalars["String"];
  type: GraphQLRemoteFieldType;
  remoteConfig: GraphQLRemoteFieldConfigInput;
  inputArgs?: Maybe<Array<GraphQLCreateFieldInputArgInput>>;
  isList: Scalars["Boolean"];
  isRequired: Scalars["Boolean"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  isHidden?: Maybe<Scalars["Boolean"]>;
  visibility?: Maybe<GraphQLVisibilityTypes>;
  formConfig?: Maybe<GraphQLFieldConfigInput>;
  tableConfig?: Maybe<GraphQLFieldConfigInput>;
  extensions?: Maybe<Scalars["JSON"]>;
  meta?: Maybe<Scalars["JSON"]>;
};

export type GraphQLCreateEnumerableFieldInput = {
  modelId?: Maybe<Scalars["ID"]>;
  /**
   * This can be a model or component id, modelId must be empty when parentId is used
   * either modelId or parentId needs to be set and is required via validation, it will be made required.
   */
  parentId?: Maybe<Scalars["ID"]>;
  enumerationId: Scalars["ID"];
  type: GraphQLEnumerableFieldType;
  apiId: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  isRequired: Scalars["Boolean"];
  isList: Scalars["Boolean"];
  isUnique: Scalars["Boolean"];
  isHidden?: Maybe<Scalars["Boolean"]>;
  visibility?: Maybe<GraphQLVisibilityTypes>;
  isLocalized?: Maybe<Scalars["Boolean"]>;
  isTitle?: Maybe<Scalars["Boolean"]>;
  initialValue?: Maybe<Scalars["String"]>;
  migrationValue?: Maybe<Scalars["String"]>;
  formConfig?: Maybe<GraphQLFieldConfigInput>;
  tableConfig?: Maybe<GraphQLFieldConfigInput>;
  extensions?: Maybe<Scalars["JSON"]>;
  meta?: Maybe<Scalars["JSON"]>;
  position?: Maybe<Scalars["Int"]>;
};

export type GraphQLCreateReverseField = {
  apiId: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  isList: Scalars["Boolean"];
  isHidden?: Maybe<Scalars["Boolean"]>;
  visibility?: Maybe<GraphQLVisibilityTypes>;
  tableConfig?: Maybe<GraphQLFieldConfigInput>;
  formConfig?: Maybe<GraphQLFieldConfigInput>;
  extensions?: Maybe<Scalars["JSON"]>;
  meta?: Maybe<Scalars["JSON"]>;
};

export type GraphQLCreateReverseRelationSide = {
  modelId: Scalars["ID"];
  field?: Maybe<GraphQLCreateReverseField>;
};

export type GraphQLCreateRelationalFieldInput = {
  modelId?: Maybe<Scalars["ID"]>;
  /**
   * This can be a model or component id, modelId must be empty when parentId is used
   * either modelId or parentId needs to be set and is required via validation, it will be made required.
   */
  parentId?: Maybe<Scalars["ID"]>;
  type: GraphQLRelationalFieldType;
  relationApiId?: Maybe<Scalars["String"]>;
  apiId: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  isList: Scalars["Boolean"];
  isHidden?: Maybe<Scalars["Boolean"]>;
  visibility?: Maybe<GraphQLVisibilityTypes>;
  /**
   * Marks the field as required.
   * Note: This is only supported for RelationFieldType ASSET!
   */
  isRequired?: Maybe<Scalars["Boolean"]>;
  reverseSide: GraphQLCreateReverseRelationSide;
  tableConfig?: Maybe<GraphQLFieldConfigInput>;
  formConfig?: Maybe<GraphQLFieldConfigInput>;
  extensions?: Maybe<Scalars["JSON"]>;
  meta?: Maybe<Scalars["JSON"]>;
  position?: Maybe<Scalars["Int"]>;
};

export type GraphQLCreateUnionInput = {
  apiId: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  displayName: Scalars["String"];
  /** IDs of models to add to union */
  modelIds: Array<Scalars["ID"]>;
};

export type GraphQLCreateUnionFieldInput = {
  modelId?: Maybe<Scalars["ID"]>;
  /**
   * This can be a model or component id, modelId must be empty when parentId is used
   * either modelId or parentId needs to be set and is required via validation, it will be made required.
   */
  parentId?: Maybe<Scalars["ID"]>;
  type: GraphQLUnionFieldType;
  union: GraphQLCreateUnionInput;
  apiId: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  isList: Scalars["Boolean"];
  isHidden?: Maybe<Scalars["Boolean"]>;
  visibility?: Maybe<GraphQLVisibilityTypes>;
  reverseSide?: Maybe<GraphQLCreateReverseField>;
  tableConfig?: Maybe<GraphQLFieldConfigInput>;
  formConfig?: Maybe<GraphQLFieldConfigInput>;
  extensions?: Maybe<Scalars["JSON"]>;
  meta?: Maybe<Scalars["JSON"]>;
  position?: Maybe<Scalars["Int"]>;
};

export type GraphQLCreateComponentFieldInput = {
  /** This can be a model or component id */
  parentId: Scalars["ID"];
  apiId: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  isList: Scalars["Boolean"];
  visibility?: GraphQLVisibilityTypes;
  isRequired: Scalars["Boolean"];
  component: Scalars["ID"];
  tableConfig?: Maybe<GraphQLFieldConfigInput>;
  formConfig?: Maybe<GraphQLFieldConfigInput>;
  extensions?: Maybe<Scalars["JSON"]>;
  meta?: Maybe<Scalars["JSON"]>;
  position?: Maybe<Scalars["Int"]>;
};

export type GraphQLCreateComponentUnionFieldInput = {
  /** This can be a model or component id */
  parentId: Scalars["ID"];
  apiId: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  isList: Scalars["Boolean"];
  visibility?: GraphQLVisibilityTypes;
  components: Array<Scalars["ID"]>;
  tableConfig?: Maybe<GraphQLFieldConfigInput>;
  formConfig?: Maybe<GraphQLFieldConfigInput>;
  extensions?: Maybe<Scalars["JSON"]>;
  meta?: Maybe<Scalars["JSON"]>;
  position?: Maybe<Scalars["Int"]>;
};

export type GraphQLMoveFieldInput = {
  id: Scalars["ID"];
  position: Scalars["Int"];
};

export type GraphQLMoveSidebarElementInput = {
  id: Scalars["ID"];
  position: Scalars["Int"];
};

export type GraphQLUpdateSidebarElementInput = {
  id: Scalars["ID"];
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  config?: Maybe<Scalars["JSON"]>;
};

export type GraphQLResetSidebarElementsInput = {
  modelId: Scalars["ID"];
};

export type GraphQLResetSidebarElementsPayload = {
  __typename?: "ResetSidebarElementsPayload";
  model?: Maybe<GraphQLIModel>;
};

export type GraphQLUpdateSidebarElementPayload = {
  __typename?: "UpdateSidebarElementPayload";
  updatedSidebarElement: GraphQLISidebarElement;
};

export type GraphQLCreateCustomSidebarElementInput = {
  modelId: Scalars["ID"];
  extensionId?: Maybe<Scalars["ID"]>;
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  config?: Maybe<Scalars["JSON"]>;
  appElementId?: Maybe<Scalars["ID"]>;
  appInstallationId?: Maybe<Scalars["ID"]>;
};

export type GraphQLCreateSystemSidebarElementInput = {
  modelId: Scalars["ID"];
  type: GraphQLSystemSidebarElementType;
  config?: Maybe<Scalars["JSON"]>;
};

export type GraphQLCreateSidebarElementPayload = {
  __typename?: "CreateSidebarElementPayload";
  createdSidebarElement?: Maybe<GraphQLISidebarElement>;
};

export type GraphQLDeleteSidebarElementInput = {
  sidebarElementId: Scalars["ID"];
};

export type GraphQLDeleteSidebarElementPayload = {
  __typename?: "DeleteSidebarElementPayload";
  deletedSidebarElementId: Scalars["ID"];
};

export type GraphQLDeleteFieldInput = {
  id: Scalars["ID"];
};

/**
 * This types holds a superset of the allowed read operations on a model.
 * This means even if this states access is allowed, it could still potentially be denied.
 */
export type GraphQLModelViewerReadContentPermission = {
  __typename?: "ModelViewerReadContentPermission";
  allowedWithCondition: Scalars["Boolean"];
  allowedLocales: Array<GraphQLLocale>;
};

export type GraphQLModelViewerReadContentPermissionByStage = {
  __typename?: "ModelViewerReadContentPermissionByStage";
  stage: GraphQLStage;
  /**
   * If the current viewer is allowed to read this models content for the provided stage,
   * this field will return the potential limitations that must be met.
   * `null` means not allowed!
   */
  allowed?: Maybe<GraphQLModelViewerReadContentPermission>;
};

export type GraphQLModelViewerContentPermission = {
  __typename?: "ModelViewerContentPermission";
  /** Lists all stages and the corresponding read permissions the user has on those stages. */
  readByStages: Array<GraphQLModelViewerReadContentPermissionByStage>;
  readVersion: Scalars["Boolean"];
};

/** Simplified computed version of the permissions the current viewer has on this model */
export type GraphQLModelViewerPermission = {
  __typename?: "ModelViewerPermission";
  content: GraphQLModelViewerContentPermission;
};

export type GraphQLIFieldParent = {
  id: Scalars["ID"];
  apiId: Scalars["String"];
  displayName: Scalars["String"];
};

export type GraphQLIModel = {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  apiId: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  isSystem: Scalars["Boolean"];
  apiIdPlural: Scalars["String"];
  isLocalized: Scalars["Boolean"];
  titleFields: Array<GraphQLIField>;
  fields: Array<GraphQLIField>;
  field: GraphQLIField;
  environment: GraphQLEnvironment;
  contentViews: Array<GraphQLContentView>;
  /** Model has at least one document */
  hasContent: Scalars["Boolean"];
  isVersioned: Scalars["Boolean"];
  viewerPermission: GraphQLModelViewerPermission;
  sidebarElements: Array<GraphQLISidebarElement>;
  hasLocalizedComponents: Scalars["Boolean"];
};

export type GraphQLIModelFieldsArgs = {
  includeHiddenFields?: Maybe<Scalars["Boolean"]>;
  includeApiOnlyFields?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLIModelFieldArgs = {
  id: Scalars["ID"];
};

export type GraphQLIModelContentViewsArgs = {
  includeSystemContentViews?: Maybe<Scalars["Boolean"]>;
  filter?: Maybe<GraphQLContentViewFilterInput>;
};

export type GraphQLSidebarElements =
  | GraphQLSystemSidebarElement
  | GraphQLAppSidebarElement
  | GraphQLExtensionSidebarElement
  | GraphQLCustomSidebarElement;

export type GraphQLISidebarElement = {
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  config?: Maybe<Scalars["JSON"]>;
  position: Scalars["Int"];
  isEnabled: Scalars["Boolean"];
  model: GraphQLIModel;
};

export type GraphQLCustomSidebarElement = GraphQLISidebarElement & {
  __typename?: "CustomSidebarElement";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  config?: Maybe<Scalars["JSON"]>;
  position: Scalars["Int"];
  isEnabled: Scalars["Boolean"];
  model: GraphQLIModel;
  extension: GraphQLSidebarExtension;
};

export enum GraphQLSystemSidebarElementType {
  Information = "INFORMATION",
  Stages = "STAGES",
  Localizations = "LOCALIZATIONS",
  Versions = "VERSIONS",
  PreviewUrls = "PREVIEW_URLS",
  Releases = "RELEASES",
}

export type GraphQLSystemSidebarElement = GraphQLISidebarElement & {
  __typename?: "SystemSidebarElement";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  config?: Maybe<Scalars["JSON"]>;
  position: Scalars["Int"];
  isEnabled: Scalars["Boolean"];
  model: GraphQLIModel;
  type: GraphQLSystemSidebarElementType;
};

export type GraphQLExtensionSidebarElement = GraphQLISidebarElement & {
  __typename?: "ExtensionSidebarElement";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  config?: Maybe<Scalars["JSON"]>;
  position: Scalars["Int"];
  isEnabled: Scalars["Boolean"];
  model: GraphQLIModel;
  extension: GraphQLSidebarExtension;
};

export type GraphQLAppSidebarElement = GraphQLISidebarElement & {
  __typename?: "AppSidebarElement";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  config?: Maybe<Scalars["JSON"]>;
  position: Scalars["Int"];
  isEnabled: Scalars["Boolean"];
  model: GraphQLIModel;
  appElement: GraphQLFormSidebarAppElement;
  appInstallation: GraphQLAppInstallation;
};

export type GraphQLModel = GraphQLIModel &
  GraphQLIFieldParent & {
    __typename?: "Model";
    id: Scalars["ID"];
    createdAt: Scalars["DateTime"];
    updatedAt: Scalars["DateTime"];
    apiId: Scalars["String"];
    displayName: Scalars["String"];
    description?: Maybe<Scalars["String"]>;
    isSystem: Scalars["Boolean"];
    apiIdPlural: Scalars["String"];
    /** Is true when at least one field is marked as localized */
    isLocalized: Scalars["Boolean"];
    titleFields: Array<GraphQLIField>;
    fields: Array<GraphQLIField>;
    field: GraphQLIField;
    environment: GraphQLEnvironment;
    contentViews: Array<GraphQLContentView>;
    /** Model has at least one document */
    hasContent: Scalars["Boolean"];
    isVersioned: Scalars["Boolean"];
    viewerPermission: GraphQLModelViewerPermission;
    sidebarElements: Array<GraphQLISidebarElement>;
    hasLocalizedComponents: Scalars["Boolean"];
  };

export type GraphQLModelFieldsArgs = {
  includeHiddenFields?: Maybe<Scalars["Boolean"]>;
  includeApiOnlyFields?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLModelFieldArgs = {
  id: Scalars["ID"];
};

export type GraphQLModelContentViewsArgs = {
  includeSystemContentViews?: Maybe<Scalars["Boolean"]>;
  filter?: Maybe<GraphQLContentViewFilterInput>;
};

export type GraphQLComponent = GraphQLIFieldParent & {
  __typename?: "Component";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  apiId: Scalars["String"];
  apiIdPlural: Scalars["String"];
  isSystem: Scalars["Boolean"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  /** Is true when at least one field is marked as localized */
  isLocalized: Scalars["Boolean"];
  titleFields: Array<GraphQLIField>;
  fields: Array<GraphQLIField>;
  environment: GraphQLEnvironment;
  /** Component has at least one instance in any of its usages */
  hasContent: Scalars["Boolean"];
};

export type GraphQLComponentFieldsArgs = {
  includeHiddenFields?: Maybe<Scalars["Boolean"]>;
  includeApiOnlyFields?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLAssetModel = GraphQLIModel &
  GraphQLIFieldParent & {
    __typename?: "AssetModel";
    id: Scalars["ID"];
    createdAt: Scalars["DateTime"];
    updatedAt: Scalars["DateTime"];
    apiId: Scalars["String"];
    displayName: Scalars["String"];
    description?: Maybe<Scalars["String"]>;
    isSystem: Scalars["Boolean"];
    apiIdPlural: Scalars["String"];
    isLocalized: Scalars["Boolean"];
    titleFields: Array<GraphQLIField>;
    fields: Array<GraphQLIField>;
    field: GraphQLIField;
    environment: GraphQLEnvironment;
    contentViews: Array<GraphQLContentView>;
    /** Model has at least one document */
    hasContent: Scalars["Boolean"];
    isVersioned: Scalars["Boolean"];
    viewerPermission: GraphQLModelViewerPermission;
    sidebarElements: Array<GraphQLISidebarElement>;
    hasLocalizedComponents: Scalars["Boolean"];
  };

export type GraphQLAssetModelFieldsArgs = {
  includeHiddenFields?: Maybe<Scalars["Boolean"]>;
  includeApiOnlyFields?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLAssetModelFieldArgs = {
  id: Scalars["ID"];
};

export type GraphQLAssetModelContentViewsArgs = {
  includeSystemContentViews?: Maybe<Scalars["Boolean"]>;
  filter?: Maybe<GraphQLContentViewFilterInput>;
};

export type GraphQLUserModel = GraphQLIModel &
  GraphQLIFieldParent & {
    __typename?: "UserModel";
    id: Scalars["ID"];
    createdAt: Scalars["DateTime"];
    updatedAt: Scalars["DateTime"];
    apiId: Scalars["String"];
    displayName: Scalars["String"];
    description?: Maybe<Scalars["String"]>;
    isSystem: Scalars["Boolean"];
    apiIdPlural: Scalars["String"];
    isLocalized: Scalars["Boolean"];
    titleFields: Array<GraphQLIField>;
    fields: Array<GraphQLIField>;
    field: GraphQLIField;
    environment: GraphQLEnvironment;
    contentViews: Array<GraphQLContentView>;
    /** Model has at least one document */
    hasContent: Scalars["Boolean"];
    isVersioned: Scalars["Boolean"];
    viewerPermission: GraphQLModelViewerPermission;
    sidebarElements: Array<GraphQLISidebarElement>;
    hasLocalizedComponents: Scalars["Boolean"];
  };

export type GraphQLUserModelFieldsArgs = {
  includeHiddenFields?: Maybe<Scalars["Boolean"]>;
  includeApiOnlyFields?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLUserModelFieldArgs = {
  id: Scalars["ID"];
};

export type GraphQLUserModelContentViewsArgs = {
  includeSystemContentViews?: Maybe<Scalars["Boolean"]>;
  filter?: Maybe<GraphQLContentViewFilterInput>;
};

export type GraphQLSchedulingModel = GraphQLIModel &
  GraphQLIFieldParent & {
    __typename?: "SchedulingModel";
    id: Scalars["ID"];
    createdAt: Scalars["DateTime"];
    updatedAt: Scalars["DateTime"];
    apiId: Scalars["String"];
    displayName: Scalars["String"];
    description?: Maybe<Scalars["String"]>;
    isSystem: Scalars["Boolean"];
    apiIdPlural: Scalars["String"];
    isLocalized: Scalars["Boolean"];
    titleFields: Array<GraphQLIField>;
    fields: Array<GraphQLIField>;
    field: GraphQLIField;
    environment: GraphQLEnvironment;
    contentViews: Array<GraphQLContentView>;
    /** Model has at least one document */
    hasContent: Scalars["Boolean"];
    isVersioned: Scalars["Boolean"];
    viewerPermission: GraphQLModelViewerPermission;
    sidebarElements: Array<GraphQLISidebarElement>;
    hasLocalizedComponents: Scalars["Boolean"];
  };

export type GraphQLSchedulingModelFieldsArgs = {
  includeHiddenFields?: Maybe<Scalars["Boolean"]>;
  includeApiOnlyFields?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLSchedulingModelFieldArgs = {
  id: Scalars["ID"];
};

export type GraphQLSchedulingModelContentViewsArgs = {
  includeSystemContentViews?: Maybe<Scalars["Boolean"]>;
  filter?: Maybe<GraphQLContentViewFilterInput>;
};

export type GraphQLCreateModelInput = {
  environmentId: Scalars["ID"];
  apiId: Scalars["String"];
  apiIdPlural: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export type GraphQLDuplicateModelInput = {
  modelId: Scalars["ID"];
  apiId: Scalars["String"];
  apiIdPlural: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export type GraphQLUpdateModelInput = {
  id: Scalars["ID"];
  /**
   * Rename singular API ID to
   * specified value
   */
  apiId?: Maybe<Scalars["String"]>;
  /**
   * Rename plural API ID to
   * specified value
   */
  apiIdPlural?: Maybe<Scalars["String"]>;
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
};

export type GraphQLDeleteModelInput = {
  id: Scalars["ID"];
};

export type GraphQLCreateComponentInput = {
  environmentId: Scalars["ID"];
  apiId: Scalars["String"];
  apiIdPlural: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export type GraphQLDuplicateComponentInput = {
  componentId: Scalars["ID"];
  apiId: Scalars["String"];
  apiIdPlural: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export type GraphQLUpdateComponentInput = {
  id: Scalars["ID"];
  /**
   * Rename singular API ID to
   * specified value
   */
  apiId?: Maybe<Scalars["String"]>;
  /**
   * Rename plural API ID to
   * specified value
   */
  apiIdPlural?: Maybe<Scalars["String"]>;
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
};

export type GraphQLDeleteComponentInput = {
  id: Scalars["ID"];
};

export type GraphQLLocale = {
  __typename?: "Locale";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  /**
   * Specifies if the locale is used as the
   * default locale which impacts the Content API
   */
  isDefault: Scalars["Boolean"];
  /**
   * Determines how the locale is
   * exposed in the Content API
   */
  apiId: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export type GraphQLCreateLocaleInput = {
  environmentId: Scalars["ID"];
  apiId: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export type GraphQLUpdateLocaleInput = {
  /** ID of locale to update */
  id: Scalars["ID"];
  /**
   * Mark locale as default,
   * will impact the Content API
   */
  isDefault?: Maybe<Scalars["Boolean"]>;
  /**
   * Rename Locale apiId,
   * will impact the Content API
   */
  apiId?: Maybe<Scalars["String"]>;
  /**
   * Update the Locale's
   * display name
   */
  displayName?: Maybe<Scalars["String"]>;
  /** Update locale description */
  description?: Maybe<Scalars["String"]>;
};

export type GraphQLDeleteLocaleInput = {
  /** ID of Locale to delete */
  id: Scalars["ID"];
  /**
   * Delete all localizations for this locale.
   * This will prevent an exception from
   * being raised if documents were previously
   * localized in this locale
   */
  force?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLCreateStageInput = {
  environmentId: Scalars["ID"];
  /**
   * Identifier to be used in
   * Content API Schema
   */
  apiId: Scalars["String"];
  displayName: Scalars["String"];
  /** Color that will be used in the webapp */
  colorPaletteId: GraphQLColorPalette;
  description?: Maybe<Scalars["String"]>;
  position?: Maybe<Scalars["Int"]>;
};

export type GraphQLUpdateStageInput = {
  /** ID of stage to update */
  id: Scalars["ID"];
  /** Color that will be used in the webapp */
  colorPaletteId?: Maybe<GraphQLColorPalette>;
  /**
   * Rename Stage apiId,
   * will impact the Content API
   */
  apiId?: Maybe<Scalars["String"]>;
  /**
   * Update the Stage
   * display name
   */
  displayName?: Maybe<Scalars["String"]>;
  /** Update stage description */
  description?: Maybe<Scalars["String"]>;
  position?: Maybe<Scalars["Int"]>;
};

export type GraphQLDeleteStageInput = {
  /** ID of Stage to delete */
  id: Scalars["ID"];
  /**
   * Delete all documents in stage.
   * This will prevent an exception from
   * being raised if documents were previously
   * published to this stage
   */
  force?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLEnvironmentPermissions = {
  __typename?: "EnvironmentPermissions";
  /** True if mutations on this stage are allowed */
  allowMutations: Scalars["Boolean"];
};

/** Permissions of an environment */
export type GraphQLEnvironmentPermissionsInput = {
  /** True if mutations on this environment are allowed */
  allowMutations: Scalars["Boolean"];
};

export type GraphQLUpdateEnvironmentInput = {
  /** ID of environment to update */
  id: Scalars["ID"];
  /** Update the environment display name */
  displayName?: Maybe<Scalars["String"]>;
  /** Update the environment description */
  description?: Maybe<Scalars["String"]>;
};

export type GraphQLUpdateEnvironmentPayload = {
  __typename?: "UpdateEnvironmentPayload";
  updatedEnvironment: GraphQLEnvironment;
};

export type GraphQLCommentingInfoInput = {
  gcms?: Maybe<Scalars["String"]>;
};

export type GraphQLCommentingInfoPayload = {
  __typename?: "CommentingInfoPayload";
  gcms?: Maybe<Scalars["String"]>;
};

export type GraphQLQuery = {
  __typename?: "Query";
  metaInfo: GraphQLMetaInfo;
  viewer: GraphQLIViewer;
  /** @deprecated Use viewer instead */
  _viewer: GraphQLIViewer;
};

export type GraphQLAsyncOperationPayload = {
  __typename?: "AsyncOperationPayload";
  migration: GraphQLMigration;
};

export type GraphQLCreateEnvironmentInput = {
  /**
   * This will be used in your
   * API endpoint and has to be
   * an all-lowercase alphanumeric
   * string between 1 and 16 characters
   */
  name: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  /**
   * Specify which environment to use
   * as origin
   */
  fromEnvironment: Scalars["ID"];
  /**
   * Allows to create environment
   * with content of origin environment
   */
  withContent?: Maybe<Scalars["Boolean"]>;
  /**
   * Allows to create environment
   * with webhooks of the origin environment.
   * By default cloned environments will get the same webhooks that will be initially deactivated.
   */
  withWebhooks?: Scalars["Boolean"];
};

export type GraphQLDeleteEnvironmentInput = {
  id: Scalars["ID"];
};

export type GraphQLCreateEnvironmentPayload = {
  __typename?: "CreateEnvironmentPayload";
  createdEnvironment: GraphQLEnvironment;
};

export type GraphQLDeleteEnvironmentPayload = {
  __typename?: "DeleteEnvironmentPayload";
  deletedEnvironmentId: Scalars["ID"];
};

/** Creating a model. */
export type GraphQLBatchMigrationCreateModelInput = {
  /** The model apiId  */
  apiId: Scalars["String"];
  /** The models plural apiId. This is used for lists  */
  apiIdPlural: Scalars["String"];
  /** Display name that is used to render the model in the webapp */
  displayName: Scalars["String"];
  /** Optional description of the model */
  description?: Maybe<Scalars["String"]>;
};

/** Updating a model. */
export type GraphQLBatchMigrationUpdateModelInput = {
  apiId: Scalars["String"];
  newApiId?: Maybe<Scalars["String"]>;
  apiIdPlural?: Maybe<Scalars["String"]>;
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
};

/** Deleting a model. */
export type GraphQLBatchMigrationDeleteModelInput = {
  apiId: Scalars["String"];
};

/** Creating a component. */
export type GraphQLBatchMigrationCreateComponentInput = {
  apiId: Scalars["String"];
  apiIdPlural: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

/** Updating a component. */
export type GraphQLBatchMigrationUpdateComponentInput = {
  apiId: Scalars["String"];
  newApiId?: Maybe<Scalars["String"]>;
  apiIdPlural?: Maybe<Scalars["String"]>;
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
};

/** Deleting a component. */
export type GraphQLBatchMigrationDeleteComponentInput = {
  apiId: Scalars["String"];
};

/** Creating a custom type definition */
export type GraphQLBatchMigrationCreateCustomTypeDefinitionInput = {
  /**
   * GraphQL type definition in SDL format
   * Can be enum or object type
   */
  sdl: Scalars["String"];
};

/** Creating a custom input type definition */
export type GraphQLBatchMigrationCreateCustomInputTypeDefinitionInput = {
  /** GraphQL type input definition in SDL format */
  sdl: Scalars["String"];
};

/** Delete an existing custom input type definition */
export type GraphQLBatchMigrationDeleteCustomInputTypeDefinitionInput = {
  apiId: Scalars["String"];
};

/** Delete an existing custom type definition */
export type GraphQLBatchMigrationDeleteRemoteTypeDefinitionInput = {
  apiId: Scalars["String"];
};

/** Deleting a stage. */
export type GraphQLBatchMigrationDeleteStageInput = {
  apiId: Scalars["String"];
};

/** Updating a stage */
export type GraphQLBatchMigrationUpdateStageInput = {
  apiId: Scalars["String"];
  newApiId?: Maybe<Scalars["String"]>;
  color?: Maybe<GraphQLColorPalette>;
  display?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  position?: Maybe<Scalars["Int"]>;
};

/** Creating a stage. */
export type GraphQLBatchMigrationCreateStageInput = {
  apiId: Scalars["String"];
  displayName: Scalars["String"];
  color: GraphQLColorPalette;
  description?: Maybe<Scalars["String"]>;
  position?: Maybe<Scalars["Int"]>;
};

/** Deleting a field. */
export type GraphQLBatchMigrationDeleteFieldInput = {
  apiId: Scalars["String"];
  modelApiId?: Maybe<Scalars["String"]>;
  parentApiId?: Maybe<Scalars["String"]>;
};

/** Creating a simple field. */
export type GraphQLBatchMigrationEmbeddableModelsInput = {
  modelsToAdd?: Maybe<Array<Scalars["String"]>>;
  modelsToRemove?: Maybe<Array<Scalars["String"]>>;
};

/** Creating a simple field. */
export type GraphQLBatchMigrationCreateSimpleFieldInput = {
  apiId: Scalars["String"];
  modelApiId?: Maybe<Scalars["String"]>;
  parentApiId?: Maybe<Scalars["String"]>;
  type: GraphQLSimpleFieldType;
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  tableRenderer?: Maybe<Scalars["String"]>;
  formRenderer?: Maybe<Scalars["String"]>;
  tableExtension?: Maybe<Scalars["String"]>;
  formExtension?: Maybe<Scalars["String"]>;
  formConfig?: Maybe<Scalars["JSON"]>;
  tableConfig?: Maybe<Scalars["JSON"]>;
  isList?: Maybe<Scalars["Boolean"]>;
  isLocalized?: Maybe<Scalars["Boolean"]>;
  isRequired?: Maybe<Scalars["Boolean"]>;
  isUnique?: Maybe<Scalars["Boolean"]>;
  isHidden?: Maybe<Scalars["Boolean"]>;
  visibility?: Maybe<GraphQLVisibilityTypes>;
  isTitle?: Maybe<Scalars["Boolean"]>;
  position?: Maybe<Scalars["Int"]>;
  validations?: Maybe<GraphQLSimpleFieldValidationsInput>;
  migrationValue?: Maybe<Scalars["String"]>;
  embedsEnabled?: Maybe<Scalars["Boolean"]>;
  embeddableModels?: Maybe<Array<Scalars["String"]>>;
};

export type GraphQLBatchMigrationCreateRemoteFieldInput = {
  apiId: Scalars["String"];
  parentApiId: Scalars["String"];
  type: GraphQLRemoteFieldType;
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  tableRenderer?: Maybe<Scalars["String"]>;
  formRenderer?: Maybe<Scalars["String"]>;
  tableExtension?: Maybe<Scalars["String"]>;
  formExtension?: Maybe<Scalars["String"]>;
  formConfig?: Maybe<Scalars["JSON"]>;
  tableConfig?: Maybe<Scalars["JSON"]>;
  isList?: Maybe<Scalars["Boolean"]>;
  isRequired?: Maybe<Scalars["Boolean"]>;
  visibility?: Maybe<GraphQLVisibilityTypes>;
  position?: Maybe<Scalars["Int"]>;
  remoteConfig: GraphQLBatchMigrationRemoteFieldConfigInput;
  inputArgs?: Maybe<Array<GraphQLBatchMigrationRemoteFieldInputArgInput>>;
};

export type GraphQLBatchMigrationUpdateRemoteFieldInput = {
  apiId: Scalars["String"];
  newApiId?: Maybe<Scalars["String"]>;
  parentApiId: Scalars["String"];
  remoteConfig?: Maybe<GraphQLBatchMigrationUpdateRemoteFieldConfigInput>;
  inputArgs?: Maybe<GraphQLBatchMigrationUpsertFieldInputArgInput>;
  isList?: Maybe<Scalars["Boolean"]>;
  isRequired?: Maybe<Scalars["Boolean"]>;
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  visibility?: Maybe<GraphQLVisibilityTypes>;
  formConfig?: Maybe<GraphQLFieldConfigInput>;
  tableConfig?: Maybe<GraphQLFieldConfigInput>;
  extensions?: Maybe<Scalars["JSON"]>;
  meta?: Maybe<Scalars["JSON"]>;
};

/** Creating an enumerable field. */
export type GraphQLBatchMigrationCreateEnumerableFieldInput = {
  apiId: Scalars["String"];
  modelApiId?: Maybe<Scalars["String"]>;
  parentApiId?: Maybe<Scalars["String"]>;
  enumerationApiId: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  tableRenderer?: Maybe<Scalars["String"]>;
  formRenderer?: Maybe<Scalars["String"]>;
  tableExtension?: Maybe<Scalars["String"]>;
  formExtension?: Maybe<Scalars["String"]>;
  isList?: Maybe<Scalars["Boolean"]>;
  isLocalized?: Maybe<Scalars["Boolean"]>;
  isRequired?: Maybe<Scalars["Boolean"]>;
  isUnique?: Maybe<Scalars["Boolean"]>;
  isHidden?: Maybe<Scalars["Boolean"]>;
  visibility?: Maybe<GraphQLVisibilityTypes>;
  isTitle?: Maybe<Scalars["Boolean"]>;
  position?: Maybe<Scalars["Int"]>;
};

/** updating a union field */
export type GraphQLBatchMigrationUpdateUnionFieldInput = {
  apiId: Scalars["String"];
  newApiId?: Maybe<Scalars["String"]>;
  modelApiId?: Maybe<Scalars["String"]>;
  parentApiId?: Maybe<Scalars["String"]>;
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  visibility?: Maybe<GraphQLVisibilityTypes>;
  reverseField?: Maybe<GraphQLBatchMigrationUpdateReverseUnionFieldInput>;
};

/** Creating a union field */
export type GraphQLBatchMigrationCreateUnionFieldInput = {
  apiId: Scalars["String"];
  modelApiId?: Maybe<Scalars["String"]>;
  parentApiId?: Maybe<Scalars["String"]>;
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  tableRenderer?: Maybe<Scalars["String"]>;
  formRenderer?: Maybe<Scalars["String"]>;
  tableExtension?: Maybe<Scalars["String"]>;
  formExtension?: Maybe<Scalars["String"]>;
  isList?: Maybe<Scalars["Boolean"]>;
  isHidden?: Maybe<Scalars["Boolean"]>;
  visibility?: Maybe<GraphQLVisibilityTypes>;
  reverseField: GraphQLBatchMigrationCreateReverseUnionFieldInput;
};

/** updating a component-union field */
export type GraphQLBatchMigrationUpdateComponentUnionFieldInput = {
  apiId: Scalars["String"];
  newApiId?: Maybe<Scalars["String"]>;
  parentApiId: Scalars["String"];
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  componentApiIds?: Maybe<Array<Scalars["String"]>>;
};

/** Creating a component-union field */
export type GraphQLBatchMigrationCreateComponentUnionFieldInput = {
  apiId: Scalars["String"];
  parentApiId: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  tableRenderer?: Maybe<Scalars["String"]>;
  formRenderer?: Maybe<Scalars["String"]>;
  tableExtension?: Maybe<Scalars["String"]>;
  formExtension?: Maybe<Scalars["String"]>;
  isList?: Maybe<Scalars["Boolean"]>;
  isRequired?: Maybe<Scalars["Boolean"]>;
  visibility?: Maybe<GraphQLVisibilityTypes>;
  componentApiIds: Array<Scalars["String"]>;
};

/** reverse field args */
export type GraphQLBatchMigrationCreateReverseUnionFieldInput = {
  apiId?: Maybe<Scalars["String"]>;
  modelApiIds: Array<Scalars["String"]>;
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  isList?: Maybe<Scalars["Boolean"]>;
  isHidden?: Maybe<Scalars["Boolean"]>;
  visibility?: Maybe<GraphQLVisibilityTypes>;
};

/** reverse field args */
export type GraphQLBatchMigrationUpdateReverseUnionFieldInput = {
  modelApiIds: Array<Scalars["String"]>;
};

/** Creating a relational field */
export type GraphQLBatchMigrationCreateRelationalFieldInput = {
  apiId: Scalars["String"];
  modelApiId?: Maybe<Scalars["String"]>;
  parentApiId?: Maybe<Scalars["String"]>;
  type: GraphQLRelationalFieldType;
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  tableRenderer?: Maybe<Scalars["String"]>;
  formRenderer?: Maybe<Scalars["String"]>;
  tableExtension?: Maybe<Scalars["String"]>;
  formExtension?: Maybe<Scalars["String"]>;
  isList?: Maybe<Scalars["Boolean"]>;
  /**
   * Marks the field as required.
   * Note: This is only supported for RelationFieldType ASSET!
   */
  isRequired?: Maybe<Scalars["Boolean"]>;
  isHidden?: Maybe<Scalars["Boolean"]>;
  visibility?: Maybe<GraphQLVisibilityTypes>;
  reverseField: GraphQLBatchMigrationCreateReverseRelationalFieldInput;
};

/** Creating a component field */
export type GraphQLBatchMigrationCreateComponentFieldInput = {
  apiId: Scalars["String"];
  parentApiId: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  tableRenderer?: Maybe<Scalars["String"]>;
  formRenderer?: Maybe<Scalars["String"]>;
  tableExtension?: Maybe<Scalars["String"]>;
  formExtension?: Maybe<Scalars["String"]>;
  isList?: Maybe<Scalars["Boolean"]>;
  isRequired?: Maybe<Scalars["Boolean"]>;
  visibility?: Maybe<GraphQLVisibilityTypes>;
  componentApiId: Scalars["String"];
  position?: Maybe<Scalars["Int"]>;
};

/** reverse field args */
export type GraphQLBatchMigrationCreateReverseRelationalFieldInput = {
  apiId: Scalars["String"];
  modelApiId: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  isList?: Maybe<Scalars["Boolean"]>;
  isHidden?: Maybe<Scalars["Boolean"]>;
  visibility?: Maybe<GraphQLVisibilityTypes>;
  isUnidirectional?: Maybe<Scalars["Boolean"]>;
};

/** Updating relational field */
export type GraphQLBatchMigrationUpdateRelationalFieldInput = {
  apiId: Scalars["String"];
  newApiId?: Maybe<Scalars["String"]>;
  modelApiId?: Maybe<Scalars["String"]>;
  parentApiId?: Maybe<Scalars["String"]>;
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  isList?: Maybe<Scalars["Boolean"]>;
  isHidden?: Maybe<Scalars["Boolean"]>;
  visibility?: Maybe<GraphQLVisibilityTypes>;
  isUnidirectional?: Maybe<Scalars["Boolean"]>;
  /**
   * Marks the field as required.
   * Note: This is only supported for RelationFieldType ASSET!
   */
  isRequired?: Maybe<Scalars["Boolean"]>;
};

/** Updating component field */
export type GraphQLBatchMigrationUpdateComponentFieldInput = {
  apiId: Scalars["String"];
  newApiId?: Maybe<Scalars["String"]>;
  parentApiId: Scalars["String"];
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  isList?: Maybe<Scalars["Boolean"]>;
  visibility?: Maybe<GraphQLVisibilityTypes>;
  isRequired?: Maybe<Scalars["Boolean"]>;
};

/** Updating simple field */
export type GraphQLBatchMigrationUpdateSimpleFieldInput = {
  apiId: Scalars["String"];
  newApiId?: Maybe<Scalars["String"]>;
  modelApiId?: Maybe<Scalars["String"]>;
  parentApiId?: Maybe<Scalars["String"]>;
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  isList?: Maybe<Scalars["Boolean"]>;
  isLocalized?: Maybe<Scalars["Boolean"]>;
  isRequired?: Maybe<Scalars["Boolean"]>;
  isUnique?: Maybe<Scalars["Boolean"]>;
  isHidden?: Maybe<Scalars["Boolean"]>;
  visibility?: Maybe<GraphQLVisibilityTypes>;
  isTitle?: Maybe<Scalars["Boolean"]>;
  position?: Maybe<Scalars["Int"]>;
  initialValue?: Maybe<Scalars["String"]>;
  migrationValue?: Maybe<Scalars["String"]>;
  validations?: Maybe<GraphQLSimpleFieldValidationsInput>;
  embedsEnabled?: Maybe<Scalars["Boolean"]>;
  tableRenderer?: Maybe<Scalars["String"]>;
  formRenderer?: Maybe<Scalars["String"]>;
  tableExtension?: Maybe<Scalars["String"]>;
  formExtension?: Maybe<Scalars["String"]>;
  formConfig?: Maybe<Scalars["JSON"]>;
  tableConfig?: Maybe<Scalars["JSON"]>;
  embeddableModels?: Maybe<GraphQLBatchMigrationEmbeddableModelsInput>;
};

/** Updating enumerable field */
export type GraphQLBatchMigrationUpdateEnumerableFieldInput = {
  apiId: Scalars["String"];
  newApiId?: Maybe<Scalars["String"]>;
  modelApiId?: Maybe<Scalars["String"]>;
  parentApiId?: Maybe<Scalars["String"]>;
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  isList?: Maybe<Scalars["Boolean"]>;
  isLocalized?: Maybe<Scalars["Boolean"]>;
  isRequired?: Maybe<Scalars["Boolean"]>;
  isUnique?: Maybe<Scalars["Boolean"]>;
  isHidden?: Maybe<Scalars["Boolean"]>;
  visibility?: Maybe<GraphQLVisibilityTypes>;
  isTitle?: Maybe<Scalars["Boolean"]>;
  position?: Maybe<Scalars["Int"]>;
  initialValue?: Maybe<Scalars["String"]>;
  migrationValue?: Maybe<Scalars["String"]>;
};

/** Deleting enumarable field */
export type GraphQLBatchMigrationDeleteEnumerationInput = {
  apiId: Scalars["String"];
};

/** Creating enumeration */
export type GraphQLBatchMigrationCreateEnumerationInput = {
  apiId: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  values: Array<GraphQLBatchMigrationCreateEnumerationValueInput>;
};

/** Updating enumeration */
export type GraphQLBatchMigrationUpdateEnumerationInput = {
  apiId: Scalars["String"];
  newApiId?: Maybe<Scalars["String"]>;
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  valuesToCreate?: Maybe<
    Array<GraphQLBatchMigrationCreateEnumerationValueInput>
  >;
  valuesToUpdate?: Maybe<
    Array<GraphQLBatchMigrationUpdateEnumerationValueInput>
  >;
  valuesToDelete?: Maybe<Array<Scalars["String"]>>;
};

/** enumeration value */
export type GraphQLBatchMigrationCreateEnumerationValueInput = {
  apiId: Scalars["String"];
  displayName: Scalars["String"];
};

/** update enumeration value */
export type GraphQLBatchMigrationUpdateEnumerationValueInput = {
  apiId: Scalars["String"];
  newApiId?: Maybe<Scalars["String"]>;
  displayName?: Maybe<Scalars["String"]>;
};

/** Creating locale */
export type GraphQLBatchMigrationCreateLocaleInput = {
  apiId: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

/** Updating locale */
export type GraphQLBatchMigrationUpdateLocaleInput = {
  apiId: Scalars["String"];
  newApiId?: Maybe<Scalars["String"]>;
  isDefault?: Maybe<Scalars["Boolean"]>;
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
};

/** Deleting locale */
export type GraphQLBatchMigrationDeleteLocaleInput = {
  apiId: Scalars["String"];
  force?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLBatchMigrationCreateGraphQlRemoteSourceInput = {
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  /** Unique prefix that will be prepended to all of the remote types. This value cannot be changed! */
  prefix: Scalars["String"];
  url: Scalars["String"];
  headers?: Maybe<Scalars["JSON"]>;
  /**
   * Specific URL that will be used for introspection if the introspection is available on another url than the regular url.
   * Can be ignored if the introspection url is the same as the url of the remote source.
   */
  introspectionUrl?: Maybe<Scalars["String"]>;
  /** HTTP method that will be used for introspection */
  introspectionMethod: GraphQLGraphQlRemoteSourceIntrospectionMethod;
  /** HTTP headers that will be used for introspection */
  introspectionHeaders?: Maybe<Scalars["JSON"]>;
  /** Custom GraphQL input types that can be used as arguments in remote fields that belong to this remoteSource */
  remoteTypeDefinitions?: Maybe<
    GraphQLBatchMigrationCreateRemoteTypeDefinitionInput
  >;
  debugEnabled?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLBatchMigrationUpdateGraphQlRemoteSourceInput = {
  prefix: Scalars["String"];
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  headers?: Maybe<Scalars["JSON"]>;
  introspectionUrl?: Maybe<Scalars["String"]>;
  introspectionMethod?: Maybe<GraphQLGraphQlRemoteSourceIntrospectionMethod>;
  introspectionHeaders?: Maybe<Scalars["JSON"]>;
  remoteTypeDefinitionsToUpsert?: Maybe<
    GraphQLBatchMigrationUpsertRemoteTypeDefinitionsInput
  >;
  debugEnabled?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLBatchMigrationCreateRestRemoteSourceInput = {
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  /** Unique prefix that will be prepended to all of the remote types. This value cannot be changed! */
  prefix: Scalars["String"];
  url: Scalars["String"];
  headers?: Maybe<Scalars["JSON"]>;
  /** Remote type definitions that the remote source supports or input types that can be used by any remote field of this remote source */
  remoteTypeDefinitions?: Maybe<
    GraphQLBatchMigrationCreateRemoteTypeDefinitionInput
  >;
  debugEnabled?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLBatchMigrationUpdateRestRemoteSourceInput = {
  prefix: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  headers?: Maybe<Scalars["JSON"]>;
  remoteTypeDefinitionsToUpsert?: Maybe<
    GraphQLBatchMigrationUpsertRemoteTypeDefinitionsInput
  >;
  debugEnabled?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLBatchMigrationCreateRemoteTypeDefinitionInput = {
  sdl: Scalars["String"];
};

export type GraphQLBatchMigrationDeleteRemoteSourceInput = {
  prefix: Scalars["String"];
};

/** Creating a custom sidebar element with app element */
export type GraphQLBatchMigrationCreateCustomSidebarElementInput = {
  /** Api Id of the model associated with the custom sidebar element */
  modelApiId: Scalars["String"];
  /** Display name for the sidebar element */
  displayName: Scalars["String"];
  /** Description name for the sidebar element */
  description?: Maybe<Scalars["String"]>;
  /** Json metadata associated with the sidebar element */
  config?: Maybe<Scalars["JSON"]>;
  /** Api Id of the App element to create custom sidebar element with */
  appElementApiId: Scalars["String"];
  /** Api Id of the App */
  appApiId: Scalars["String"];
};

/** Deleting a custom sidebar element created by app element */
export type GraphQLBatchMigrationDeleteCustomSidebarElementInput = {
  /** Api Id of the App */
  appApiId: Scalars["String"];
  /** Api Id of the App element associated with the custom sidebar element */
  appElementApiId: Scalars["String"];
  /** Api Id of the model associated with the custom sidebar element */
  modelApiId: Scalars["String"];
};

export type GraphQLBatchMigrationChangeInput = {
  /** creates a new model */
  createModel?: Maybe<GraphQLBatchMigrationCreateModelInput>;
  updateModel?: Maybe<GraphQLBatchMigrationUpdateModelInput>;
  deleteModel?: Maybe<GraphQLBatchMigrationDeleteModelInput>;
  createComponent?: Maybe<GraphQLBatchMigrationCreateComponentInput>;
  updateComponent?: Maybe<GraphQLBatchMigrationUpdateComponentInput>;
  deleteComponent?: Maybe<GraphQLBatchMigrationDeleteComponentInput>;
  createSimpleField?: Maybe<GraphQLBatchMigrationCreateSimpleFieldInput>;
  updateSimpleField?: Maybe<GraphQLBatchMigrationUpdateSimpleFieldInput>;
  createRemoteField?: Maybe<GraphQLBatchMigrationCreateRemoteFieldInput>;
  updateRemoteField?: Maybe<GraphQLBatchMigrationUpdateRemoteFieldInput>;
  createRelationalField?: Maybe<
    GraphQLBatchMigrationCreateRelationalFieldInput
  >;
  updateRelationalField?: Maybe<
    GraphQLBatchMigrationUpdateRelationalFieldInput
  >;
  createUnionField?: Maybe<GraphQLBatchMigrationCreateUnionFieldInput>;
  updateUnionField?: Maybe<GraphQLBatchMigrationUpdateUnionFieldInput>;
  createComponentField?: Maybe<GraphQLBatchMigrationCreateComponentFieldInput>;
  updateComponentField?: Maybe<GraphQLBatchMigrationUpdateComponentFieldInput>;
  createComponentUnionField?: Maybe<
    GraphQLBatchMigrationCreateComponentUnionFieldInput
  >;
  updateComponentUnionField?: Maybe<
    GraphQLBatchMigrationUpdateComponentUnionFieldInput
  >;
  createEnumerableField?: Maybe<
    GraphQLBatchMigrationCreateEnumerableFieldInput
  >;
  updateEnumerableField?: Maybe<
    GraphQLBatchMigrationUpdateEnumerableFieldInput
  >;
  deleteField?: Maybe<GraphQLBatchMigrationDeleteFieldInput>;
  createCustomSidebarElement?: Maybe<
    GraphQLBatchMigrationCreateCustomSidebarElementInput
  >;
  deleteCustomSidebarElement?: Maybe<
    GraphQLBatchMigrationDeleteCustomSidebarElementInput
  >;
  createEnumeration?: Maybe<GraphQLBatchMigrationCreateEnumerationInput>;
  updateEnumeration?: Maybe<GraphQLBatchMigrationUpdateEnumerationInput>;
  deleteEnumeration?: Maybe<GraphQLBatchMigrationDeleteEnumerationInput>;
  createStage?: Maybe<GraphQLBatchMigrationCreateStageInput>;
  deleteStage?: Maybe<GraphQLBatchMigrationDeleteStageInput>;
  updateStage?: Maybe<GraphQLBatchMigrationUpdateStageInput>;
  createLocale?: Maybe<GraphQLBatchMigrationCreateLocaleInput>;
  deleteLocale?: Maybe<GraphQLBatchMigrationDeleteLocaleInput>;
  updateLocale?: Maybe<GraphQLBatchMigrationUpdateLocaleInput>;
  createGraphQLRemoteSource?: Maybe<
    GraphQLBatchMigrationCreateGraphQlRemoteSourceInput
  >;
  updateGraphQLRemoteSource?: Maybe<
    GraphQLBatchMigrationUpdateGraphQlRemoteSourceInput
  >;
  createRESTRemoteSource?: Maybe<
    GraphQLBatchMigrationCreateRestRemoteSourceInput
  >;
  updateRESTRemoteSource?: Maybe<
    GraphQLBatchMigrationUpdateRestRemoteSourceInput
  >;
  deleteRemoteSource?: Maybe<GraphQLBatchMigrationDeleteRemoteSourceInput>;
};

export type GraphQLDiffEnvironmentPayload = {
  __typename?: "DiffEnvironmentPayload";
  changes: Array<Scalars["JSON"]>;
};

export type GraphQLBatchMigrationInput = {
  environmentId: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  changes: Array<GraphQLBatchMigrationChangeInput>;
};

export type GraphQLNetlifySiteInput = {
  id: Scalars["String"];
  displayName: Scalars["String"];
};

export type GraphQLVercelProjectInput = {
  id: Scalars["String"];
  ref: Scalars["String"];
  displayName: Scalars["String"];
};

export type GraphQLCreateNetlifyIntegrationInput = {
  environmentId: Scalars["ID"];
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  /**
   * A selection of models where the integration should be displayed in the frontend.
   * If the integration should be displayed on every model, pass null or an empty array here.
   */
  models?: Maybe<Array<Scalars["ID"]>>;
  sites: Array<GraphQLNetlifySiteInput>;
  /**
   * This token is used to create the needed BuildHook and BuildNotifications in Netlify.
   * This token is only used once and won't be stored anywhere
   */
  accessToken: Scalars["String"];
};

export type GraphQLCreateVercelIntegrationInput = {
  environmentId: Scalars["ID"];
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  /**
   * A selection of models where the integration should be displayed in the frontend.
   * If the integration should be displayed on every model, pass null or an empty array here.
   */
  models?: Maybe<Array<Scalars["ID"]>>;
  projects: Array<GraphQLVercelProjectInput>;
  /**
   * This token is used to create the needed BuildHook and BuildNotifications in Netlify.
   * This token is only used once and won't be stored anywhere
   */
  accessToken: Scalars["String"];
};

export type GraphQLCreateGatsbyCloudIntegrationInput = {
  environmentId: Scalars["ID"];
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  /**
   * Prefix of your site
   * Only lower case alphabetical characters, numbers and underscores are allowed.
   */
  sitePrefix: Scalars["String"];
  /** URL to trigger a Deploy Build. */
  buildWebhookURL: Scalars["String"];
  /** URL to trigger a CMS Preview build. */
  previewWebhookURL: Scalars["String"];
};

export type GraphQLUpdateNetlifyIntegrationInput = {
  integrationId: Scalars["ID"];
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  models?: Maybe<Array<Scalars["ID"]>>;
  /** Overrides the currently setup netlify sites. Omit if you don't want to update the existing sites. */
  sites?: Maybe<Array<GraphQLNetlifySiteInput>>;
  /**
   * This token is used to create the needed BuildHook and BuildNotifications in Netlify.
   * This token is only used once and won't be stored anywhere
   */
  accessToken: Scalars["String"];
};

export type GraphQLUpdateVercelIntegrationInput = {
  integrationId: Scalars["ID"];
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  models?: Maybe<Array<Scalars["ID"]>>;
  /** Overrides the currently setup vercel projects. Omit if you don't want to update the existing projects. */
  projects?: Maybe<Array<GraphQLVercelProjectInput>>;
  /**
   * This token is used to create the needed BuildHook and BuildNotifications in Vercel.
   * This token is only used once and won't be stored anywhere
   */
  accessToken: Scalars["String"];
};

export type GraphQLUpdateGatsbyCloudIntegrationInput = {
  integrationId: Scalars["ID"];
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  /**
   * Prefix of your site
   * Only lower case alphabetical characters, numbers and underscores are allowed.
   */
  sitePrefix?: Maybe<Scalars["String"]>;
  /** URL to trigger a Deploy Build. This webhook will be triggered when publishing and unpublishing entries. */
  buildWebhookURL?: Maybe<Scalars["String"]>;
  previewWebhookURL?: Maybe<Scalars["String"]>;
};

export type GraphQLCreateNetlifyIntegrationPayload = {
  __typename?: "CreateNetlifyIntegrationPayload";
  createdNetlifyIntegration: GraphQLNetlifyIntegration;
};

export type GraphQLCreateVercelIntegrationPayload = {
  __typename?: "CreateVercelIntegrationPayload";
  createdVercelIntegration: GraphQLVercelIntegration;
};

export type GraphQLCreateGatsbyCloudIntegrationPayload = {
  __typename?: "CreateGatsbyCloudIntegrationPayload";
  createdGatsbyCloudIntegration: GraphQLGatsbyCloudIntegration;
};

export type GraphQLUpdateNetlifyIntegrationPayload = {
  __typename?: "UpdateNetlifyIntegrationPayload";
  updatedNetlifyIntegration: GraphQLNetlifyIntegration;
};

export type GraphQLUpdateVercelIntegrationPayload = {
  __typename?: "UpdateVercelIntegrationPayload";
  updatedVercelIntegration: GraphQLVercelIntegration;
};

export type GraphQLUpdateGatsbyCloudIntegrationPayload = {
  __typename?: "UpdateGatsbyCloudIntegrationPayload";
  updatedGatsbyCloudIntegration: GraphQLGatsbyCloudIntegration;
};

export type GraphQLDeleteNetlifyIntegrationInput = {
  id: Scalars["ID"];
  /**
   * This token is used to cleanup the resources in Netlify that where used by this integration .
   * This token is only used once and won't be stored anywhere
   */
  accessToken: Scalars["String"];
};

export type GraphQLDeleteVercelIntegrationInput = {
  id: Scalars["ID"];
  /**
   * This token is used to cleanup the resources in Vercel that where used by this integration .
   * This token is only used once and won't be stored anywhere
   */
  accessToken: Scalars["String"];
};

export type GraphQLDeleteGatsbyCloudIntegrationInput = {
  id: Scalars["ID"];
};

export type GraphQLDeleteNetlifyIntegrationPayload = {
  __typename?: "DeleteNetlifyIntegrationPayload";
  deletedNetlifyIntegrationId: Scalars["ID"];
};

export type GraphQLDeleteVercelIntegrationPayload = {
  __typename?: "DeleteVercelIntegrationPayload";
  deletedVercelIntegrationId: Scalars["ID"];
};

export type GraphQLDeleteGatsbyCloudIntegrationPayload = {
  __typename?: "DeleteGatsbyCloudIntegrationPayload";
  deletedGatsbyCloudIntegrationId: Scalars["ID"];
};

export type GraphQLTriggerNetlifyIntegrationBuildInput = {
  siteId: Scalars["String"];
  integrationId: Scalars["ID"];
};

export type GraphQLTriggerVercelIntegrationBuildInput = {
  projectId: Scalars["String"];
  integrationId: Scalars["ID"];
};

export type GraphQLTriggerNetlifyIntegrationBuildPayload = {
  __typename?: "TriggerNetlifyIntegrationBuildPayload";
  integration: GraphQLNetlifyIntegration;
};

export type GraphQLTriggerVercelIntegrationBuildPayload = {
  __typename?: "TriggerVercelIntegrationBuildPayload";
  integration: GraphQLVercelIntegration;
};

export type GraphQLPromoteEnvironmentInput = {
  environmentId: Scalars["ID"];
  renameCurrentMasterApiIdTo: Scalars["String"];
  renameCurrentMasterDisplayNameTo: Scalars["String"];
};

export type GraphQLPromoteEnvironmentPayload = {
  __typename?: "PromoteEnvironmentPayload";
  promotedEnvironment: GraphQLEnvironment;
  previousMasterEnvironment: GraphQLEnvironment;
};

export type GraphQLUpsertRemoteTypeDefinitionsInput = {
  remoteTypeDefinitionsToCreate?: Maybe<
    Array<GraphQLUpsertRemoteTypeDefinitionToCreateInput>
  >;
  remoteTypeDefinitionsToDelete?: Maybe<
    Array<GraphQLUpsertRemoteTypeDefinitionToDeleteInput>
  >;
  remoteTypeDefinitionsToUpdate?: Maybe<
    Array<GraphQLUpsertRemoteTypeDefinitionToUpdateInput>
  >;
};

export type GraphQLBatchMigrationUpsertRemoteTypeDefinitionsInput = {
  remoteTypeDefinitionsToCreate?: Maybe<
    Array<GraphQLBatchMigrationUpsertRemoteTypeDefinitionToCreateInput>
  >;
  remoteTypeDefinitionsToDelete?: Maybe<
    Array<GraphQLBatchMigrationUpsertRemoteTypeDefinitionToDeleteInput>
  >;
  remoteTypeDefinitionsToUpdate?: Maybe<
    Array<GraphQLBatchMigrationUpsertRemoteTypeDefinitionToUpdateInput>
  >;
};

export type GraphQLUpsertRemoteTypeDefinitionToCreateInput = {
  sdl: Scalars["String"];
};

export type GraphQLUpsertRemoteTypeDefinitionToDeleteInput = {
  id: Scalars["ID"];
};

export type GraphQLUpsertRemoteTypeDefinitionToUpdateInput = {
  id: Scalars["ID"];
  sdl?: Maybe<Scalars["String"]>;
};

export type GraphQLBatchMigrationUpsertRemoteTypeDefinitionToCreateInput = {
  sdl: Scalars["String"];
};

export type GraphQLBatchMigrationUpsertRemoteTypeDefinitionToDeleteInput = {
  apiId: Scalars["String"];
};

export type GraphQLBatchMigrationUpsertRemoteTypeDefinitionToUpdateInput = {
  apiId: Scalars["String"];
  sdl?: Maybe<Scalars["String"]>;
};

export type GraphQLCreateRemoteTypeDefinitionInput = {
  sdl: Scalars["String"];
};

export enum GraphQLRemoteSourceType {
  Graphql = "GRAPHQL",
  Rest = "REST",
}

export type GraphQLDeleteRemoteSourceInput = {
  id: Scalars["ID"];
};

export type GraphQLCreateGraphQlRemoteSourceInput = {
  environmentId: Scalars["ID"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  /** Unique prefix that will be prepended to all of the remote types. This value cannot be changed! */
  prefix: Scalars["String"];
  url: Scalars["String"];
  headers?: Maybe<Scalars["JSON"]>;
  /**
   * Specific URL that will be used for introspection if the introspection is available on another url than the regular url.
   * Can be ignored if the introspection url is the same as the url of the remote source.
   */
  introspectionUrl?: Maybe<Scalars["String"]>;
  /** HTTP method that will be used for introspection */
  introspectionMethod: GraphQLGraphQlRemoteSourceIntrospectionMethod;
  /** HTTP headers that will be used for introspection */
  introspectionHeaders?: Maybe<Scalars["JSON"]>;
  /** Custom GraphQL input types that can be used as arguments in remote fields that belong to this remoteSource */
  remoteTypeDefinitions?: Maybe<Array<GraphQLCreateRemoteTypeDefinitionInput>>;
  debugEnabled?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLUpdateGraphQlRemoteSourceInput = {
  id: Scalars["ID"];
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  headers?: Maybe<Scalars["JSON"]>;
  introspectionUrl?: Maybe<Scalars["String"]>;
  introspectionMethod?: Maybe<GraphQLGraphQlRemoteSourceIntrospectionMethod>;
  introspectionHeaders?: Maybe<Scalars["JSON"]>;
  remoteTypeDefinitionsToUpsert?: Maybe<
    GraphQLUpsertRemoteTypeDefinitionsInput
  >;
  debugEnabled?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLCreateRestRemoteSourceInput = {
  environmentId: Scalars["ID"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  /** Unique prefix that will be prepended to all of the remote types. This value cannot be changed! */
  prefix: Scalars["String"];
  url: Scalars["String"];
  headers?: Maybe<Scalars["JSON"]>;
  /** Remote type definitions that the remote source supports or input types that can be used by any remote field of this remote source */
  remoteTypeDefinitions?: Maybe<Array<GraphQLCreateRemoteTypeDefinitionInput>>;
  debugEnabled?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLUpdateRestRemoteSourceInput = {
  id: Scalars["ID"];
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  headers?: Maybe<Scalars["JSON"]>;
  remoteTypeDefinitionsToUpsert?: Maybe<
    GraphQLUpsertRemoteTypeDefinitionsInput
  >;
  debugEnabled?: Maybe<Scalars["Boolean"]>;
};

export type GraphQLMutation = {
  __typename?: "Mutation";
  createContentView: GraphQLCreateContentViewPayload;
  updateContentView: GraphQLUpdateContentViewPayload;
  deleteContentView: GraphQLDeleteContentViewPayload;
  moveContentView: GraphQLMoveContentViewPayload;
  createViewGroup: GraphQLCreateViewGroupPayload;
  updateViewGroup: GraphQLUpdateViewGroupPayload;
  deleteViewGroup: GraphQLDeleteViewGroupPayload;
  moveViewGroup: GraphQLMoveViewGroupPayload;
  sendInvite: GraphQLSendInvitePayload;
  revokeInvite: GraphQLRevokeInvitePayload;
  acceptInvite: GraphQLAcceptInvitePayload;
  switchPaymentSubscription: GraphQLSwitchPaymentSubscriptionPayload;
  startTrial: GraphQLStartTrialPayload;
  leaveTrial: GraphQLLeaveTrialPayload;
  createPermanentAuthToken: GraphQLCreatePermanentAuthTokenPayload;
  updatePermanentAuthToken: GraphQLUpdatePermanentAuthTokenPayload;
  deletePermanentAuthToken: GraphQLDeletePermanentAuthTokenPayload;
  createProject: GraphQLProject;
  updateProject: GraphQLProject;
  deleteProject: GraphQLDeleteProjectPayload;
  cloneProject: GraphQLProject;
  clonePublicProject: GraphQLProject;
  leaveProject: GraphQLLeaveProjectPayload;
  createRole: GraphQLRole;
  updateRole: GraphQLRole;
  deleteRole: GraphQLDeleteRolePayload;
  createReadContentPermission: GraphQLCreateReadContentPermissionPayload;
  updateReadContentPermission: GraphQLUpdateReadContentPermissionPayload;
  createCreateContentPermission: GraphQLCreateCreateContentPermissionPayload;
  updateCreateContentPermission: GraphQLUpdateCreateContentPermissionPayload;
  createUpdateContentPermission: GraphQLCreateUpdateContentPermissionPayload;
  updateUpdateContentPermission: GraphQLUpdateUpdateContentPermissionPayload;
  deleteContentPermission: GraphQLDeleteContentPermissionPayload;
  updateContentPermissionEnabled: GraphQLUpdateContentPermissionEnabledPayload;
  createDeleteContentPermission: GraphQLCreateDeleteContentPermissionPayload;
  updateDeleteContentPermission: GraphQLUpdateDeleteContentPermissionPayload;
  updatePublishContentPermission: GraphQLUpdatePublishContentPermissionPayload;
  updateUnpublishContentPermission: GraphQLUpdateUnpublishContentPermissionPayload;
  createReadVersionContentPermission: GraphQLCreateReadVersionContentPermissionPayload;
  updateReadVersionContentPermission: GraphQLUpdateReadVersionContentPermissionPayload;
  createPublishContentPermission: GraphQLCreatePublishContentPermissionPayload;
  createUnpublishContentPermission: GraphQLCreateUnpublishContentPermissionPayload;
  updateMemberRoles: GraphQLMember;
  removeMember: GraphQLRemoveMemberPayload;
  setUserAnalytics: GraphQLUserAnalytics;
  track: GraphQLTrackPayload;
  deleteAccount: GraphQLDeleteAccountPayload;
  updateUserProfile: GraphQLUserViewer;
  createWebhook: GraphQLCreateWebhookPayload;
  updateWebhook: GraphQLUpdateWebhookPayload;
  deleteWebhook: GraphQLDeleteWebhookPayload;
  retriggerWebhook: GraphQLRetriggerWebhookPayload;
  moveField: GraphQLMoveFieldPayload;
  createEnvironment: GraphQLCreateEnvironmentPayload;
  updateEnvironment: GraphQLUpdateEnvironmentPayload;
  deleteEnvironment: GraphQLDeleteEnvironmentPayload;
  promoteEnvironment: GraphQLPromoteEnvironmentPayload;
  updateFilestackSecurityOptions: GraphQLUpdateFilestackSecurityOptionsPayload;
  updatePublicEndpoint?: Maybe<GraphQLUpdatePublicPermissionsPayload>;
  createNetlifyIntegration?: Maybe<GraphQLCreateNetlifyIntegrationPayload>;
  triggerNetlifyIntegrationBuild?: Maybe<
    GraphQLTriggerNetlifyIntegrationBuildPayload
  >;
  updateNetlifyIntegration?: Maybe<GraphQLUpdateNetlifyIntegrationPayload>;
  deleteNetlifyIntegration?: Maybe<GraphQLDeleteNetlifyIntegrationPayload>;
  createVercelIntegration?: Maybe<GraphQLCreateVercelIntegrationPayload>;
  triggerVercelIntegrationBuild?: Maybe<
    GraphQLTriggerVercelIntegrationBuildPayload
  >;
  updateVercelIntegration?: Maybe<GraphQLUpdateVercelIntegrationPayload>;
  deleteVercelIntegration?: Maybe<GraphQLDeleteVercelIntegrationPayload>;
  createGatsbyCloudIntegration?: Maybe<
    GraphQLCreateGatsbyCloudIntegrationPayload
  >;
  updateGatsbyCloudIntegration?: Maybe<
    GraphQLUpdateGatsbyCloudIntegrationPayload
  >;
  deleteGatsbyCloudIntegration?: Maybe<
    GraphQLDeleteGatsbyCloudIntegrationPayload
  >;
  createFieldExtension: GraphQLCreateFieldExtensionPayload;
  updateFieldExtension: GraphQLUpdateFieldExtensionPayload;
  createSidebarExtension: GraphQLCreateSidebarExtensionPayload;
  updateSidebarExtension: GraphQLUpdateSidebarExtensionPayload;
  deleteExtension: GraphQLDeleteExtensionPayload;
  createCustomSidebarElement: GraphQLCreateSidebarElementPayload;
  createSystemSidebarElement: GraphQLCreateSidebarElementPayload;
  deleteSidebarElement: GraphQLDeleteSidebarElementPayload;
  moveSidebarElement: GraphQLMoveSidebarElementPayload;
  updateSidebarElement: GraphQLUpdateSidebarElementPayload;
  resetSidebarElements: GraphQLResetSidebarElementsPayload;
  createApp: GraphQLCreateAppPayload;
  updateApp: GraphQLUpdateAppPayload;
  deleteApp: GraphQLDeleteAppPayload;
  createAppInstallation: GraphQLCreateAppInstallationPayload;
  updateAppInstallation: GraphQLUpdateAppInstallationPayload;
  deleteAppInstallation: GraphQLDeleteAppInstallationPayload;
  createStage: GraphQLAsyncOperationPayload;
  updateStage: GraphQLAsyncOperationPayload;
  deleteStage: GraphQLAsyncOperationPayload;
  createLocale: GraphQLAsyncOperationPayload;
  updateLocale: GraphQLAsyncOperationPayload;
  deleteLocale: GraphQLAsyncOperationPayload;
  createModel: GraphQLAsyncOperationPayload;
  duplicateModel: GraphQLAsyncOperationPayload;
  updateModel: GraphQLAsyncOperationPayload;
  deleteModel: GraphQLAsyncOperationPayload;
  createComponent: GraphQLAsyncOperationPayload;
  duplicateComponent: GraphQLAsyncOperationPayload;
  updateComponent: GraphQLAsyncOperationPayload;
  deleteComponent: GraphQLAsyncOperationPayload;
  createEnumeration: GraphQLAsyncOperationPayload;
  deleteEnumeration: GraphQLAsyncOperationPayload;
  updateEnumeration: GraphQLAsyncOperationPayload;
  createSimpleField: GraphQLAsyncOperationPayload;
  createRemoteField: GraphQLAsyncOperationPayload;
  createEnumerableField: GraphQLAsyncOperationPayload;
  createRelationalField: GraphQLAsyncOperationPayload;
  createUnionField: GraphQLAsyncOperationPayload;
  createComponentField: GraphQLAsyncOperationPayload;
  createComponentUnionField: GraphQLAsyncOperationPayload;
  updateSimpleField: GraphQLAsyncOperationPayload;
  updateRemoteField: GraphQLAsyncOperationPayload;
  updateEnumerableField: GraphQLAsyncOperationPayload;
  updateRelationalField: GraphQLAsyncOperationPayload;
  updateUnionField: GraphQLAsyncOperationPayload;
  updateComponentField: GraphQLAsyncOperationPayload;
  updateComponentUnionField: GraphQLAsyncOperationPayload;
  deleteField: GraphQLAsyncOperationPayload;
  submitBatchChanges: GraphQLAsyncOperationPayload;
  createGraphQLRemoteSource: GraphQLAsyncOperationPayload;
  updateGraphQLRemoteSource: GraphQLAsyncOperationPayload;
  createRESTRemoteSource: GraphQLAsyncOperationPayload;
  updateRESTRemoteSource: GraphQLAsyncOperationPayload;
  deleteRemoteSource: GraphQLAsyncOperationPayload;
};

export type GraphQLMutationCreateContentViewArgs = {
  data: GraphQLCreateContentViewInput;
};

export type GraphQLMutationUpdateContentViewArgs = {
  data: GraphQLUpdateContentViewInput;
};

export type GraphQLMutationDeleteContentViewArgs = {
  data: GraphQLDeleteContentViewInput;
};

export type GraphQLMutationMoveContentViewArgs = {
  data: GraphQLMoveContentViewInput;
};

export type GraphQLMutationCreateViewGroupArgs = {
  data: GraphQLCreateViewGroupInput;
};

export type GraphQLMutationUpdateViewGroupArgs = {
  data: GraphQLUpdateViewGroupInput;
};

export type GraphQLMutationDeleteViewGroupArgs = {
  data: GraphQLDeleteViewGroupInput;
};

export type GraphQLMutationMoveViewGroupArgs = {
  data: GraphQLMoveViewGroupInput;
};

export type GraphQLMutationSendInviteArgs = {
  data: GraphQLSendInviteInput;
};

export type GraphQLMutationRevokeInviteArgs = {
  data: GraphQLRevokeInviteInput;
};

export type GraphQLMutationAcceptInviteArgs = {
  data: GraphQLAcceptInviteInput;
};

export type GraphQLMutationSwitchPaymentSubscriptionArgs = {
  data: GraphQLSwitchPaymentSubscriptionInput;
};

export type GraphQLMutationStartTrialArgs = {
  data: GraphQLStartTrialInput;
};

export type GraphQLMutationLeaveTrialArgs = {
  data: GraphQLLeaveTrialInput;
};

export type GraphQLMutationCreatePermanentAuthTokenArgs = {
  data: GraphQLCreatePermanentAuthTokenInput;
};

export type GraphQLMutationUpdatePermanentAuthTokenArgs = {
  data: GraphQLUpdatePermanentAuthTokenInput;
};

export type GraphQLMutationDeletePermanentAuthTokenArgs = {
  data: GraphQLDeletePermanentAuthTokenInput;
};

export type GraphQLMutationCreateProjectArgs = {
  data: GraphQLCreateProjectInput;
};

export type GraphQLMutationUpdateProjectArgs = {
  data: GraphQLUpdateProjectInput;
};

export type GraphQLMutationDeleteProjectArgs = {
  data: GraphQLDeleteProjectInput;
};

export type GraphQLMutationCloneProjectArgs = {
  data: GraphQLCloneProjectInput;
};

export type GraphQLMutationClonePublicProjectArgs = {
  data: GraphQLClonePublicProjectInput;
};

export type GraphQLMutationLeaveProjectArgs = {
  data: GraphQLLeaveProjectInput;
};

export type GraphQLMutationCreateRoleArgs = {
  data: GraphQLCreateRoleInput;
};

export type GraphQLMutationUpdateRoleArgs = {
  data: GraphQLUpdateRoleInput;
};

export type GraphQLMutationDeleteRoleArgs = {
  data: GraphQLDeleteRoleInput;
};

export type GraphQLMutationCreateReadContentPermissionArgs = {
  data: GraphQLCreateReadContentPermissionInput;
};

export type GraphQLMutationUpdateReadContentPermissionArgs = {
  data: GraphQLUpdateReadContentPermissionInput;
};

export type GraphQLMutationCreateCreateContentPermissionArgs = {
  data: GraphQLCreateCreateContentPermissionInput;
};

export type GraphQLMutationUpdateCreateContentPermissionArgs = {
  data: GraphQLUpdateCreateContentPermissionInput;
};

export type GraphQLMutationCreateUpdateContentPermissionArgs = {
  data: GraphQLCreateUpdateContentPermissionInput;
};

export type GraphQLMutationUpdateUpdateContentPermissionArgs = {
  data: GraphQLUpdateUpdateContentPermissionInput;
};

export type GraphQLMutationDeleteContentPermissionArgs = {
  data: GraphQLDeleteContentPermissionInput;
};

export type GraphQLMutationUpdateContentPermissionEnabledArgs = {
  data: GraphQLUpdateContentPermissionEnabledInput;
};

export type GraphQLMutationCreateDeleteContentPermissionArgs = {
  data: GraphQLCreateDeleteContentPermissionInput;
};

export type GraphQLMutationUpdateDeleteContentPermissionArgs = {
  data: GraphQLUpdateDeleteContentPermissionInput;
};

export type GraphQLMutationUpdatePublishContentPermissionArgs = {
  data: GraphQLUpdatePublishContentPermissionInput;
};

export type GraphQLMutationUpdateUnpublishContentPermissionArgs = {
  data: GraphQLUpdateUnpublishContentPermissionInput;
};

export type GraphQLMutationCreateReadVersionContentPermissionArgs = {
  data: GraphQLCreateReadVersionContentPermissionInput;
};

export type GraphQLMutationUpdateReadVersionContentPermissionArgs = {
  data: GraphQLUpdateReadVersionContentPermissionInput;
};

export type GraphQLMutationCreatePublishContentPermissionArgs = {
  data: GraphQLCreatePublishContentPermissionInput;
};

export type GraphQLMutationCreateUnpublishContentPermissionArgs = {
  data: GraphQLCreateUnpublishContentPermissionInput;
};

export type GraphQLMutationUpdateMemberRolesArgs = {
  data: GraphQLUpdateMemberRolesInput;
};

export type GraphQLMutationRemoveMemberArgs = {
  data: GraphQLRemoveMemberInput;
};

export type GraphQLMutationSetUserAnalyticsArgs = {
  data: GraphQLSetUserAnalyticsInput;
};

export type GraphQLMutationTrackArgs = {
  data: GraphQLTrackInput;
};

export type GraphQLMutationDeleteAccountArgs = {
  data?: Maybe<GraphQLDeleteAccountInput>;
};

export type GraphQLMutationUpdateUserProfileArgs = {
  data: GraphQLUpdateProfileInput;
};

export type GraphQLMutationCreateWebhookArgs = {
  data: GraphQLCreateWebhookInput;
};

export type GraphQLMutationUpdateWebhookArgs = {
  data: GraphQLUpdateWebhookInput;
};

export type GraphQLMutationDeleteWebhookArgs = {
  data: GraphQLDeleteWebhookInput;
};

export type GraphQLMutationRetriggerWebhookArgs = {
  data: GraphQLRetriggerWebhookInput;
};

export type GraphQLMutationMoveFieldArgs = {
  data: GraphQLMoveFieldInput;
};

export type GraphQLMutationCreateEnvironmentArgs = {
  data: GraphQLCreateEnvironmentInput;
};

export type GraphQLMutationUpdateEnvironmentArgs = {
  data: GraphQLUpdateEnvironmentInput;
};

export type GraphQLMutationDeleteEnvironmentArgs = {
  data: GraphQLDeleteEnvironmentInput;
};

export type GraphQLMutationPromoteEnvironmentArgs = {
  data: GraphQLPromoteEnvironmentInput;
};

export type GraphQLMutationUpdateFilestackSecurityOptionsArgs = {
  data: GraphQLUpdateFilestackSecurityOptionsInput;
};

export type GraphQLMutationUpdatePublicEndpointArgs = {
  data: GraphQLUpdatePublicEndpointInput;
};

export type GraphQLMutationCreateNetlifyIntegrationArgs = {
  data: GraphQLCreateNetlifyIntegrationInput;
};

export type GraphQLMutationTriggerNetlifyIntegrationBuildArgs = {
  data: GraphQLTriggerNetlifyIntegrationBuildInput;
};

export type GraphQLMutationUpdateNetlifyIntegrationArgs = {
  data: GraphQLUpdateNetlifyIntegrationInput;
};

export type GraphQLMutationDeleteNetlifyIntegrationArgs = {
  data: GraphQLDeleteNetlifyIntegrationInput;
};

export type GraphQLMutationCreateVercelIntegrationArgs = {
  data: GraphQLCreateVercelIntegrationInput;
};

export type GraphQLMutationTriggerVercelIntegrationBuildArgs = {
  data: GraphQLTriggerVercelIntegrationBuildInput;
};

export type GraphQLMutationUpdateVercelIntegrationArgs = {
  data: GraphQLUpdateVercelIntegrationInput;
};

export type GraphQLMutationDeleteVercelIntegrationArgs = {
  data: GraphQLDeleteVercelIntegrationInput;
};

export type GraphQLMutationCreateGatsbyCloudIntegrationArgs = {
  data: GraphQLCreateGatsbyCloudIntegrationInput;
};

export type GraphQLMutationUpdateGatsbyCloudIntegrationArgs = {
  data: GraphQLUpdateGatsbyCloudIntegrationInput;
};

export type GraphQLMutationDeleteGatsbyCloudIntegrationArgs = {
  data: GraphQLDeleteGatsbyCloudIntegrationInput;
};

export type GraphQLMutationCreateFieldExtensionArgs = {
  data: GraphQLCreateFieldExtensionInput;
};

export type GraphQLMutationUpdateFieldExtensionArgs = {
  data: GraphQLUpdateFieldExtensionInput;
};

export type GraphQLMutationCreateSidebarExtensionArgs = {
  data: GraphQLCreateSidebarExtensionInput;
};

export type GraphQLMutationUpdateSidebarExtensionArgs = {
  data: GraphQLUpdateSidebarExtensionInput;
};

export type GraphQLMutationDeleteExtensionArgs = {
  data: GraphQLDeleteExtensionInput;
};

export type GraphQLMutationCreateCustomSidebarElementArgs = {
  data: GraphQLCreateCustomSidebarElementInput;
};

export type GraphQLMutationCreateSystemSidebarElementArgs = {
  data: GraphQLCreateSystemSidebarElementInput;
};

export type GraphQLMutationDeleteSidebarElementArgs = {
  data: GraphQLDeleteSidebarElementInput;
};

export type GraphQLMutationMoveSidebarElementArgs = {
  data: GraphQLMoveSidebarElementInput;
};

export type GraphQLMutationUpdateSidebarElementArgs = {
  data: GraphQLUpdateSidebarElementInput;
};

export type GraphQLMutationResetSidebarElementsArgs = {
  data: GraphQLResetSidebarElementsInput;
};

export type GraphQLMutationCreateAppArgs = {
  data: GraphQLCreateAppInput;
};

export type GraphQLMutationUpdateAppArgs = {
  data: GraphQLUpdateAppInput;
};

export type GraphQLMutationDeleteAppArgs = {
  data: GraphQLDeleteAppInput;
};

export type GraphQLMutationCreateAppInstallationArgs = {
  data: GraphQLCreateAppInstallationInput;
};

export type GraphQLMutationUpdateAppInstallationArgs = {
  data: GraphQLUpdateAppInstallationInput;
};

export type GraphQLMutationDeleteAppInstallationArgs = {
  data: GraphQLDeleteAppInstallationInput;
};

export type GraphQLMutationCreateStageArgs = {
  data: GraphQLCreateStageInput;
};

export type GraphQLMutationUpdateStageArgs = {
  data: GraphQLUpdateStageInput;
};

export type GraphQLMutationDeleteStageArgs = {
  data: GraphQLDeleteStageInput;
};

export type GraphQLMutationCreateLocaleArgs = {
  data: GraphQLCreateLocaleInput;
};

export type GraphQLMutationUpdateLocaleArgs = {
  data: GraphQLUpdateLocaleInput;
};

export type GraphQLMutationDeleteLocaleArgs = {
  data: GraphQLDeleteLocaleInput;
};

export type GraphQLMutationCreateModelArgs = {
  data: GraphQLCreateModelInput;
};

export type GraphQLMutationDuplicateModelArgs = {
  data: GraphQLDuplicateModelInput;
};

export type GraphQLMutationUpdateModelArgs = {
  data: GraphQLUpdateModelInput;
};

export type GraphQLMutationDeleteModelArgs = {
  data: GraphQLDeleteModelInput;
};

export type GraphQLMutationCreateComponentArgs = {
  data: GraphQLCreateComponentInput;
};

export type GraphQLMutationDuplicateComponentArgs = {
  data: GraphQLDuplicateComponentInput;
};

export type GraphQLMutationUpdateComponentArgs = {
  data: GraphQLUpdateComponentInput;
};

export type GraphQLMutationDeleteComponentArgs = {
  data: GraphQLDeleteComponentInput;
};

export type GraphQLMutationCreateEnumerationArgs = {
  data: GraphQLCreateEnumerationInput;
};

export type GraphQLMutationDeleteEnumerationArgs = {
  data: GraphQLDeleteEnumerationInput;
};

export type GraphQLMutationUpdateEnumerationArgs = {
  data: GraphQLUpdateEnumerationInput;
};

export type GraphQLMutationCreateSimpleFieldArgs = {
  data: GraphQLCreateSimpleFieldInput;
};

export type GraphQLMutationCreateRemoteFieldArgs = {
  data: GraphQLCreateRemoteFieldInput;
};

export type GraphQLMutationCreateEnumerableFieldArgs = {
  data: GraphQLCreateEnumerableFieldInput;
};

export type GraphQLMutationCreateRelationalFieldArgs = {
  data: GraphQLCreateRelationalFieldInput;
};

export type GraphQLMutationCreateUnionFieldArgs = {
  data: GraphQLCreateUnionFieldInput;
};

export type GraphQLMutationCreateComponentFieldArgs = {
  data: GraphQLCreateComponentFieldInput;
};

export type GraphQLMutationCreateComponentUnionFieldArgs = {
  data: GraphQLCreateComponentUnionFieldInput;
};

export type GraphQLMutationUpdateSimpleFieldArgs = {
  data: GraphQLUpdateSimpleFieldInput;
};

export type GraphQLMutationUpdateRemoteFieldArgs = {
  data: GraphQLUpdateRemoteFieldInput;
};

export type GraphQLMutationUpdateEnumerableFieldArgs = {
  data: GraphQLUpdateEnumerableFieldInput;
};

export type GraphQLMutationUpdateRelationalFieldArgs = {
  data: GraphQLUpdateRelationalFieldInput;
};

export type GraphQLMutationUpdateUnionFieldArgs = {
  data: GraphQLUpdateUnionFieldInput;
};

export type GraphQLMutationUpdateComponentFieldArgs = {
  data: GraphQLUpdateComponentFieldInput;
};

export type GraphQLMutationUpdateComponentUnionFieldArgs = {
  data: GraphQLUpdateComponentUnionFieldInput;
};

export type GraphQLMutationDeleteFieldArgs = {
  data: GraphQLDeleteFieldInput;
};

export type GraphQLMutationSubmitBatchChangesArgs = {
  data: GraphQLBatchMigrationInput;
};

export type GraphQLMutationCreateGraphQlRemoteSourceArgs = {
  data: GraphQLCreateGraphQlRemoteSourceInput;
};

export type GraphQLMutationUpdateGraphQlRemoteSourceArgs = {
  data: GraphQLUpdateGraphQlRemoteSourceInput;
};

export type GraphQLMutationCreateRestRemoteSourceArgs = {
  data: GraphQLCreateRestRemoteSourceInput;
};

export type GraphQLMutationUpdateRestRemoteSourceArgs = {
  data: GraphQLUpdateRestRemoteSourceInput;
};

export type GraphQLMutationDeleteRemoteSourceArgs = {
  data: GraphQLDeleteRemoteSourceInput;
};

export enum GraphQLMigrationOperationType {
  CreateProjectFromTemplate = "CREATE_PROJECT_FROM_TEMPLATE",
  CreateEnvironment = "CREATE_ENVIRONMENT",
  Batch = "BATCH",
  CreateStage = "CREATE_STAGE",
  UpdateStage = "UPDATE_STAGE",
  DeleteStage = "DELETE_STAGE",
  CreateLocale = "CREATE_LOCALE",
  UpdateLocale = "UPDATE_LOCALE",
  DeleteLocale = "DELETE_LOCALE",
  CreateModel = "CREATE_MODEL",
  UpdateModel = "UPDATE_MODEL",
  DeleteModel = "DELETE_MODEL",
  CreateRemoteTypeDefinition = "CREATE_REMOTE_TYPE_DEFINITION",
  UpdateRemoteTypeDefinition = "UPDATE_REMOTE_TYPE_DEFINITION",
  DeleteRemoteTypeDefinition = "DELETE_REMOTE_TYPE_DEFINITION",
  CreateEnumeration = "CREATE_ENUMERATION",
  UpdateEnumeration = "UPDATE_ENUMERATION",
  DeleteEnumeration = "DELETE_ENUMERATION",
  CreateSimpleField = "CREATE_SIMPLE_FIELD",
  CreateEnumerableField = "CREATE_ENUMERABLE_FIELD",
  CreateRelationalField = "CREATE_RELATIONAL_FIELD",
  CreateUnionField = "CREATE_UNION_FIELD",
  CreateRemoteField = "CREATE_REMOTE_FIELD",
  UpdateSimpleField = "UPDATE_SIMPLE_FIELD",
  UpdateEnumerableField = "UPDATE_ENUMERABLE_FIELD",
  UpdateRelationalField = "UPDATE_RELATIONAL_FIELD",
  UpdateUnionField = "UPDATE_UNION_FIELD",
  DeleteField = "DELETE_FIELD",
}

export type GraphQLISchemaMigrationPayload = {
  migration: GraphQLMigration;
};

export enum GraphQLNetlifyBuildState {
  Ready = "READY",
  Preparing = "PREPARING",
  Building = "BUILDING",
  Failed = "FAILED",
}

export enum GraphQLVercelBuildState {
  Ready = "READY",
  Preparing = "PREPARING",
  Building = "BUILDING",
  Failed = "FAILED",
}

export type GraphQLNetlifyIntegrationCallbackPayload = {
  __typename?: "NetlifyIntegrationCallbackPayload";
  /** @deprecated use integration instead */
  integrationId: Scalars["ID"];
  integration: GraphQLNetlifyIntegration;
  site: GraphQLNetlifySite;
  error?: Maybe<Scalars["String"]>;
};

export type GraphQLVercelIntegrationCallbackPayload = {
  __typename?: "VercelIntegrationCallbackPayload";
  /** @deprecated use integration instead */
  integrationId: Scalars["ID"];
  integration: GraphQLVercelIntegration;
  project: GraphQLVercelProject;
  error?: Maybe<Scalars["String"]>;
};

export type GraphQLIPendingProject = {
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  picture?: Maybe<Scalars["String"]>;
};

export type GraphQLCloningFrom =
  | GraphQLProject
  | GraphQLTemplate
  | GraphQLStarterTemplate;

export type GraphQLCloningProject = GraphQLIPendingProject & {
  __typename?: "CloningProject";
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  picture?: Maybe<Scalars["String"]>;
  cloningFrom: GraphQLCloningFrom;
};

export type GraphQLProjectChangeCompletedCloning = {
  __typename?: "ProjectChangeCompletedCloning";
  clonedProject: GraphQLProject;
};

export type GraphQLProjectChangedPayload = GraphQLProjectChangeCompletedCloning;

export type GraphQLSchemaMigrationSubscriptionPayload = GraphQLISchemaMigrationPayload & {
  __typename?: "SchemaMigrationSubscriptionPayload";
  migration: GraphQLMigration;
};

export type GraphQLSchemaMigrationSucceededSubscriptionPayload = GraphQLISchemaMigrationPayload & {
  __typename?: "SchemaMigrationSucceededSubscriptionPayload";
  migration: GraphQLMigration;
  environment: GraphQLEnvironment;
  /** @deprecated Field no longer supported */
  affectedResourceType: GraphQLMigrationOperationType;
  /** @deprecated Field no longer supported */
  affectedResourceId: Scalars["ID"];
};

export type GraphQLEnvironmentPromotedPayload = {
  __typename?: "EnvironmentPromotedPayload";
  promotedEnvironment: GraphQLEnvironment;
  previousMasterEnvironment: GraphQLEnvironment;
  promotedEnvironmentPreviousDisplayName: Scalars["String"];
};

export type GraphQLSubscription = {
  __typename?: "Subscription";
  schemaMigration: GraphQLISchemaMigrationPayload;
  projectChanged: GraphQLProjectChangedPayload;
  netlifyBuildNotification: GraphQLNetlifyIntegrationCallbackPayload;
  vercelBuildNotification: GraphQLVercelIntegrationCallbackPayload;
  environmentPromoted: GraphQLEnvironmentPromotedPayload;
};

export type GraphQLSubscriptionSchemaMigrationArgs = {
  environmentId: Scalars["ID"];
};

export type GraphQLSubscriptionNetlifyBuildNotificationArgs = {
  integrationId: Scalars["ID"];
};

export type GraphQLSubscriptionVercelBuildNotificationArgs = {
  integrationId: Scalars["ID"];
};

export type GraphQLSubscriptionEnvironmentPromotedArgs = {
  projectId: Scalars["ID"];
};
