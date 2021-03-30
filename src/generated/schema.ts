export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}



/** ### ASSETS: */
export type GraphQLIAssetConfig = {
  apiKey: Scalars['String'];
};

export type GraphQLFilestackSecurityOptions = {
  __typename?: 'FilestackSecurityOptions';
  enabled: Scalars['Boolean'];
  auth?: Maybe<GraphQLFilestackSecurityAuthOptions>;
  globalExpires: Scalars['String'];
  stageOverrides: Array<GraphQLStageFilestackSecurityOptions>;
};

export type GraphQLFilestackSecurityAuthOptions = {
  __typename?: 'FilestackSecurityAuthOptions';
  policy: Scalars['String'];
  signature: Scalars['String'];
};

export type GraphQLStageFilestackSecurityOptions = {
  __typename?: 'StageFilestackSecurityOptions';
  stage: GraphQLStage;
  expires: Scalars['String'];
};

export type GraphQLFilestack = GraphQLIAssetConfig & {
  __typename?: 'Filestack';
  apiKey: Scalars['String'];
  path: Scalars['String'];
  bucket: Scalars['String'];
  isManagedBucket: Scalars['Boolean'];
  security: GraphQLFilestackSecurityOptions;
};

export type GraphQLUpdateFilestackSecurityOptionsInput = {
  environmentId: Scalars['ID'];
  enabled?: Maybe<Scalars['Boolean']>;
  globalExpires?: Maybe<Scalars['String']>;
  stageOverrides?: Maybe<Array<GraphQLUpdateStageFilestackSecurityOptionsInput>>;
};

export type GraphQLUpdateStageFilestackSecurityOptionsInput = {
  stageId: Scalars['ID'];
  expires: Scalars['String'];
};

export type GraphQLUpdateFilestackSecurityOptionsPayload = {
  __typename?: 'UpdateFilestackSecurityOptionsPayload';
  updatedEnvironment: GraphQLEnvironment;
  updatedFilestack: GraphQLFilestack;
};

export type GraphQLContentModel = {
  __typename?: 'ContentModel';
  models: Array<GraphQLIModel>;
  model: GraphQLIModel;
  assetModel: GraphQLIModel;
  enumerations: Array<GraphQLEnumeration>;
  locales: Array<GraphQLLocale>;
  unions: Array<Maybe<GraphQLUnion>>;
  stages: Array<GraphQLStage>;
  remoteTypeDefinitions: Array<GraphQLRemoteTypeDefinition>;
};


export type GraphQLContentModelModelsArgs = {
  includeSystemModels?: Maybe<Scalars['Boolean']>;
};


export type GraphQLContentModelModelArgs = {
  id: Scalars['ID'];
};


export type GraphQLContentModelEnumerationsArgs = {
  includeSystemEnumerations?: Maybe<Scalars['Boolean']>;
};

export enum GraphQLContentViewType {
  BuiltIn = 'BUILT_IN',
  Public = 'PUBLIC'
}

export enum GraphQLColumnOrderByDir {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type GraphQLOrderBy = {
  __typename?: 'OrderBy';
  orderByField: GraphQLIField;
  orderDir: GraphQLColumnOrderByDir;
};

export type GraphQLContentView = {
  __typename?: 'ContentView';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  model: GraphQLIModel;
  type: GraphQLContentViewType;
  isSystem: Scalars['Boolean'];
  createdBy?: Maybe<GraphQLMember>;
  orderBy?: Maybe<GraphQLOrderBy>;
  columns: Array<GraphQLContentViewColumn>;
  viewGroup: GraphQLViewGroup;
  position?: Maybe<Scalars['Int']>;
  filters: Scalars['JSON'];
};

export type GraphQLCreateContentViewPayload = {
  __typename?: 'CreateContentViewPayload';
  createdContentView: GraphQLContentView;
};

export type GraphQLUpdateContentViewPayload = {
  __typename?: 'UpdateContentViewPayload';
  updatedContentView: GraphQLContentView;
};

export type GraphQLMoveContentViewPayload = {
  __typename?: 'MoveContentViewPayload';
  movedContentView: GraphQLContentView;
  updatedViewGroups: Array<GraphQLViewGroup>;
};

export type GraphQLDeleteContentViewPayload = {
  __typename?: 'DeleteContentViewPayload';
  deletedContentViewId: Scalars['ID'];
};

export type GraphQLContentViewColumn = {
  __typename?: 'ContentViewColumn';
  id: Scalars['ID'];
  field: GraphQLIField;
  isVisible: Scalars['Boolean'];
  width?: Maybe<Scalars['Int']>;
  position: Scalars['Int'];
};

export type GraphQLContentViewFilterInput = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};

export type GraphQLOrderByInput = {
  orderByField: Scalars['ID'];
  orderDir: GraphQLColumnOrderByDir;
};

export type GraphQLContentViewColumnInput = {
  fieldId: Scalars['ID'];
  isVisible: Scalars['Boolean'];
  width?: Maybe<Scalars['Int']>;
};

export type GraphQLCreateContentViewInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  modelId: Scalars['ID'];
  columns: Array<GraphQLContentViewColumnInput>;
  orderBy?: Maybe<GraphQLOrderByInput>;
  viewGroupId?: Maybe<Scalars['ID']>;
  filters?: Maybe<Scalars['JSON']>;
};

export type GraphQLUpdateContentViewInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  columns: Array<GraphQLContentViewColumnInput>;
  orderBy?: Maybe<GraphQLOrderByInput>;
  viewGroupId?: Maybe<Scalars['ID']>;
  filters?: Maybe<Scalars['JSON']>;
};

export type GraphQLMoveContentViewInput = {
  id: Scalars['ID'];
  viewGroupId: Scalars['ID'];
  position: Scalars['Int'];
};

export type GraphQLDeleteContentViewInput = {
  id: Scalars['ID'];
};

export type GraphQLInvite = {
  __typename?: 'Invite';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  expirationDate: Scalars['DateTime'];
  email: Scalars['String'];
  code: Scalars['String'];
  issuer?: Maybe<GraphQLMember>;
  project: GraphQLProject;
  acceptedAt?: Maybe<Scalars['DateTime']>;
  /** @deprecated use roles instead */
  role: GraphQLRole;
  roles: Array<GraphQLRole>;
};

export type GraphQLSendInviteInput = {
  email: Scalars['String'];
  projectId: Scalars['ID'];
  roleId?: Maybe<Scalars['ID']>;
  roleIds?: Maybe<Array<Scalars['ID']>>;
};

export type GraphQLRevokeInviteInput = {
  id: Scalars['ID'];
};

export type GraphQLAcceptInviteInput = {
  code: Scalars['String'];
};

export type GraphQLSendInvitePayload = {
  __typename?: 'SendInvitePayload';
  invite: GraphQLInvite;
};

export type GraphQLRevokeInvitePayload = {
  __typename?: 'RevokeInvitePayload';
  revokedInviteId: Scalars['ID'];
};

export type GraphQLAcceptInvitePayload = {
  __typename?: 'AcceptInvitePayload';
  invite: GraphQLInvite;
};

export enum GraphQLLimitType {
  Roles = 'ROLES',
  Locales = 'LOCALES',
  Environments = 'ENVIRONMENTS',
  Webhooks = 'WEBHOOKS',
  Models = 'MODELS',
  Records = 'RECORDS',
  AssetTraffic = 'ASSET_TRAFFIC',
  ApiOperations = 'API_OPERATIONS',
  Seats = 'SEATS',
  WorkflowSteps = 'WORKFLOW_STEPS',
  Integrations = 'INTEGRATIONS',
  Versions = 'VERSIONS',
  VersionRetentionPeriod = 'VERSION_RETENTION_PERIOD',
  ContentModels = 'CONTENT_MODELS',
  ContentStages = 'CONTENT_STAGES',
  AuditLogsRetentionPeriod = 'AUDIT_LOGS_RETENTION_PERIOD',
  RemoteFields = 'REMOTE_FIELDS',
  RemoteFieldsMaxExecutionTime = 'REMOTE_FIELDS_MAX_EXECUTION_TIME',
  RemoteFieldsMaxResponseSize = 'REMOTE_FIELDS_MAX_RESPONSE_SIZE',
  RemoteFieldsHttpWorkers = 'REMOTE_FIELDS_HTTP_WORKERS',
  RateLimitPerSecond = 'RATE_LIMIT_PER_SECOND'
}

export type GraphQLLimit = {
  __typename?: 'Limit';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  type: GraphQLLimitType;
  amount?: Maybe<Scalars['Float']>;
  addOnCode?: Maybe<Scalars['String']>;
  plan: GraphQLPlan;
};

export type GraphQLMetaInfo = {
  __typename?: 'MetaInfo';
  serverVersion: Scalars['String'];
};

export type GraphQLStats = {
  __typename?: 'Stats';
  time: Scalars['DateTime'];
  value: Scalars['Float'];
};

export type GraphQLMetrics = {
  __typename?: 'Metrics';
  /** The number of API operations */
  apiOperations: Array<GraphQLStats>;
  /** The asset traffic in Byte */
  assetTraffic: Array<GraphQLStats>;
  /** The number of used asset transformations */
  assetTransformations: Array<GraphQLStats>;
};


export type GraphQLMetricsApiOperationsArgs = {
  start: Scalars['DateTime'];
  end: Scalars['DateTime'];
  resolution: Scalars['Int'];
};


export type GraphQLMetricsAssetTrafficArgs = {
  start: Scalars['DateTime'];
  end: Scalars['DateTime'];
};


export type GraphQLMetricsAssetTransformationsArgs = {
  start: Scalars['DateTime'];
  end: Scalars['DateTime'];
};

export type GraphQLNotification = {
  __typename?: 'Notification';
  gcms?: Maybe<Scalars['String']>;
};

export type GraphQLSendNotificationPayload = {
  __typename?: 'SendNotificationPayload';
  gcms?: Maybe<Scalars['String']>;
};

export type GraphQLSendMailNotificationInput = {
  gcms?: Maybe<Scalars['String']>;
};

export type GraphQLSendNotificationInput = {
  gcms?: Maybe<Scalars['String']>;
};

export type GraphQLPaymentAccount = {
  __typename?: 'PaymentAccount';
  id: Scalars['ID'];
  accountName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isClosed: Scalars['Boolean'];
  isMain: Scalars['Boolean'];
  hostedPageUrl?: Maybe<Scalars['String']>;
  hostedBillingUrl?: Maybe<Scalars['String']>;
  accountManagementUrl?: Maybe<Scalars['String']>;
  user: GraphQLIUser;
  paymentSubscriptions: Array<GraphQLPaymentSubscription>;
};


export type GraphQLPaymentAccountHostedPageUrlArgs = {
  planName: Scalars['String'];
  projectId: Scalars['ID'];
};

export type GraphQLPlanAddonInput = {
  gcms?: Maybe<Scalars['String']>;
};

export type GraphQLBookPlanAddonsPayload = {
  __typename?: 'BookPlanAddonsPayload';
  gcms?: Maybe<Scalars['String']>;
};

export type GraphQLStartTrialPayload = {
  __typename?: 'StartTrialPayload';
  project: GraphQLProject;
};

export type GraphQLLeaveTrialPayload = {
  __typename?: 'LeaveTrialPayload';
  project: GraphQLProject;
};

export type GraphQLBillingPeriod = {
  __typename?: 'BillingPeriod';
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
};

export type GraphQLPaymentSubscription = {
  __typename?: 'PaymentSubscription';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  renewsAt?: Maybe<Scalars['DateTime']>;
  projects: Array<GraphQLProject>;
  identifier?: Maybe<Scalars['String']>;
  paymentAccount: GraphQLPaymentAccount;
  plan: GraphQLPlan;
  billingPeriod: GraphQLBillingPeriod;
  isCanceled: Scalars['Boolean'];
};

export type GraphQLBookPlanAddonsInput = {
  gcms?: Maybe<Scalars['String']>;
};

export type GraphQLSwitchPaymentSubscriptionInput = {
  planName: Scalars['String'];
  subscriptionId: Scalars['ID'];
};

export type GraphQLSwitchPaymentSubscriptionPayload = {
  __typename?: 'SwitchPaymentSubscriptionPayload';
  subscription: GraphQLPaymentSubscription;
  project: GraphQLProject;
};

export type GraphQLStartTrialInput = {
  projectId: Scalars['ID'];
  planId: Scalars['ID'];
};

export type GraphQLLeaveTrialInput = {
  projectId: Scalars['ID'];
};

/** ### TOKENS: */
export enum GraphQLPermanentAuthTokenAudience {
  ContentApi = 'CONTENT_API',
  ManagementApi = 'MANAGEMENT_API'
}

export type GraphQLPermanentAuthToken = {
  __typename?: 'PermanentAuthToken';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  token: Scalars['String'];
  /** @deprecated use content permission feature instead */
  permissions: GraphQLPermanentAuthTokenPermissions;
  /** @deprecated use managementPermissions instead */
  role?: Maybe<GraphQLRole>;
  defaults: GraphQLPermanentAuthTokenDefaults;
  contentPermissions: Array<Maybe<GraphQLIContentPermission>>;
  managementPermissions: Array<GraphQLManagementPermission>;
  /** @deprecated not used anymore */
  audience: Array<GraphQLPermanentAuthTokenAudience>;
};

export type GraphQLPermanentAuthTokenDefaults = {
  __typename?: 'PermanentAuthTokenDefaults';
  stage: GraphQLStage;
};

export type GraphQLPermanentAuthTokenPermissions = {
  __typename?: 'PermanentAuthTokenPermissions';
  allowMutations: Scalars['Boolean'];
  allowQueryOnStages: Array<GraphQLStage>;
};

/** deprecated use ManagementPermission instead */
export type GraphQLPermission = {
  __typename?: 'Permission';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  action: GraphQLPermissionAction;
};

export type GraphQLManagementPermission = {
  __typename?: 'ManagementPermission';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  action: GraphQLPermissionAction;
};

export type GraphQLCreatePermanentAuthTokenPayload = {
  __typename?: 'CreatePermanentAuthTokenPayload';
  createdPermanentAuthToken: GraphQLPermanentAuthToken;
};

export type GraphQLUpdatePermanentAuthTokenPayload = {
  __typename?: 'UpdatePermanentAuthTokenPayload';
  updatedPermanentAuthToken: GraphQLPermanentAuthToken;
};

export type GraphQLDeletePermanentAuthTokenPayload = {
  __typename?: 'DeletePermanentAuthTokenPayload';
  deletedPermanentAuthTokenId: Scalars['ID'];
};

export enum GraphQLPermissionAction {
  /**
   * Project-level
   * Virtual permission used to perform a project ownership check
   */
  ProjectClone = 'PROJECT_CLONE',
  ProjectUpdate = 'PROJECT_UPDATE',
  /** Virtual permission used to perform a project ownership check */
  ProjectDelete = 'PROJECT_DELETE',
  /** Virtual permission used to perform a project ownership check */
  ManagePayment = 'MANAGE_PAYMENT',
  PlaygroundUse = 'PLAYGROUND_USE',
  AuditLogsRead = 'AUDIT_LOGS_READ',
  /** Environments */
  EnvironmentCreate = 'ENVIRONMENT_CREATE',
  EnvironmentRead = 'ENVIRONMENT_READ',
  EnvironmentUpdate = 'ENVIRONMENT_UPDATE',
  EnvironmentDelete = 'ENVIRONMENT_DELETE',
  EnvironmentPromote = 'ENVIRONMENT_PROMOTE',
  /** Models */
  ModelCreate = 'MODEL_CREATE',
  ModelRead = 'MODEL_READ',
  ModelUpdate = 'MODEL_UPDATE',
  ModelDelete = 'MODEL_DELETE',
  /** Locales */
  LocaleCreate = 'LOCALE_CREATE',
  LocaleRead = 'LOCALE_READ',
  LocaleUpdate = 'LOCALE_UPDATE',
  LocaleDelete = 'LOCALE_DELETE',
  /** Stages */
  StageCreate = 'STAGE_CREATE',
  StageRead = 'STAGE_READ',
  StageUpdate = 'STAGE_UPDATE',
  StageDelete = 'STAGE_DELETE',
  /** Enumerations */
  EnumerationCreate = 'ENUMERATION_CREATE',
  EnumerationRead = 'ENUMERATION_READ',
  EnumerationUpdate = 'ENUMERATION_UPDATE',
  EnumerationDelete = 'ENUMERATION_DELETE',
  /** Fields */
  FieldCreate = 'FIELD_CREATE',
  FieldRead = 'FIELD_READ',
  FieldUpdate = 'FIELD_UPDATE',
  FieldDelete = 'FIELD_DELETE',
  /** PATs */
  PatCreate = 'PAT_CREATE',
  PatRead = 'PAT_READ',
  PatUpdate = 'PAT_UPDATE',
  PatDelete = 'PAT_DELETE',
  /** Content Views */
  ContentviewCreate = 'CONTENTVIEW_CREATE',
  ContentviewRead = 'CONTENTVIEW_READ',
  ContentviewUpdate = 'CONTENTVIEW_UPDATE',
  ContentviewDelete = 'CONTENTVIEW_DELETE',
  /** Project Storage Buckets */
  StorageBucketCreate = 'STORAGE_BUCKET_CREATE',
  StorageBucketRead = 'STORAGE_BUCKET_READ',
  StorageBucketUpdate = 'STORAGE_BUCKET_UPDATE',
  StorageBucketDelete = 'STORAGE_BUCKET_DELETE',
  /** Roles */
  RoleCreate = 'ROLE_CREATE',
  RoleUpdate = 'ROLE_UPDATE',
  RoleDelete = 'ROLE_DELETE',
  /** Webhooks */
  WebhookCreate = 'WEBHOOK_CREATE',
  WebhookRead = 'WEBHOOK_READ',
  WebhookUpdate = 'WEBHOOK_UPDATE',
  WebhookDelete = 'WEBHOOK_DELETE',
  /** Users */
  UserInvite = 'USER_INVITE',
  UserAssignrole = 'USER_ASSIGNROLE',
  UserRemove = 'USER_REMOVE',
  /** View Groups */
  ViewGroupCreate = 'VIEW_GROUP_CREATE',
  ViewGroupRead = 'VIEW_GROUP_READ',
  ViewGroupUpdate = 'VIEW_GROUP_UPDATE',
  ViewGroupDelete = 'VIEW_GROUP_DELETE',
  /**
   * deprecated!
   * Content (actual Content API permission)
   */
  ContentCreate = 'CONTENT_CREATE',
  ContentRead = 'CONTENT_READ',
  ContentUpdate = 'CONTENT_UPDATE',
  ContentDelete = 'CONTENT_DELETE',
  ContentPublish = 'CONTENT_PUBLISH',
  ContentUpdatePublished = 'CONTENT_UPDATE_PUBLISHED',
  /** Content Permissions */
  ContentPermissionCreate = 'CONTENT_PERMISSION_CREATE',
  ContentPermissionRead = 'CONTENT_PERMISSION_READ',
  ContentPermissionUpdate = 'CONTENT_PERMISSION_UPDATE',
  ContentPermissionDelete = 'CONTENT_PERMISSION_DELETE',
  /** Integration */
  IntegrationCreate = 'INTEGRATION_CREATE',
  IntegrationRead = 'INTEGRATION_READ',
  IntegrationUpdate = 'INTEGRATION_UPDATE',
  IntegrationDelete = 'INTEGRATION_DELETE',
  NetlifyTriggerBuild = 'NETLIFY_TRIGGER_BUILD',
  VercelTriggerBuild = 'VERCEL_TRIGGER_BUILD',
  /** Extension */
  ExtensionCreate = 'EXTENSION_CREATE',
  ExtensionRead = 'EXTENSION_READ',
  ExtensionUpdate = 'EXTENSION_UPDATE',
  ExtensionDelete = 'EXTENSION_DELETE'
}

export type GraphQLPermanentAuthTokenPermissionsInput = {
  allowMutations: Scalars['Boolean'];
  allowQueriesOnStages: Array<Scalars['ID']>;
};

export type GraphQLPermanentAuthTokenDefaultsInput = {
  stage: Scalars['ID'];
};

export type GraphQLCreatePermanentAuthTokenInput = {
  environmentId: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  permissions?: Maybe<GraphQLPermanentAuthTokenPermissionsInput>;
  defaults?: Maybe<GraphQLPermanentAuthTokenDefaultsInput>;
  roleId?: Maybe<Scalars['ID']>;
  managementPermissionIds?: Maybe<Array<Scalars['ID']>>;
  audience?: Maybe<Array<GraphQLPermanentAuthTokenAudience>>;
};

export type GraphQLUpdatePermanentAuthTokenInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  permissions?: Maybe<GraphQLPermanentAuthTokenPermissionsInput>;
  defaults?: Maybe<GraphQLPermanentAuthTokenDefaultsInput>;
  roleId?: Maybe<Scalars['ID']>;
  managementPermissionIds?: Maybe<Array<Scalars['ID']>>;
  audience?: Maybe<Array<GraphQLPermanentAuthTokenAudience>>;
};

export type GraphQLDeletePermanentAuthTokenInput = {
  id: Scalars['ID'];
};

export type GraphQLUpdatePublicEndpointInput = {
  environmentId: Scalars['ID'];
  permissions?: Maybe<GraphQLUpdatePublicPermissionInput>;
  defaults?: Maybe<GraphQLUpdatePublicEndpointDefaultsInput>;
};

export type GraphQLUpdatePublicEndpointDefaultsInput = {
  stage: Scalars['ID'];
};

export type GraphQLUpdatePublicPermissionInput = {
  allowMutations: Scalars['Boolean'];
  allowQueriesOnStages: Array<Scalars['ID']>;
};

export type GraphQLUpdatePublicPermissionsPayload = {
  __typename?: 'UpdatePublicPermissionsPayload';
  environment: GraphQLEnvironment;
};

export type GraphQLPlan = {
  __typename?: 'Plan';
  id: Scalars['ID'];
  name: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  displayName: Scalars['String'];
  price: Scalars['Float'];
  isFree: Scalars['Boolean'];
  limits: Array<GraphQLLimit>;
  isSwitchable?: Maybe<Scalars['Boolean']>;
  billingPeriodMonths: Scalars['Int'];
};


export type GraphQLPlanIsSwitchableArgs = {
  projectId: Scalars['ID'];
};

export type GraphQLAuditLogWhereInput = {
  timestamp?: Maybe<Scalars['DateTime']>;
  timestamp_lt?: Maybe<Scalars['DateTime']>;
  timestamp_gt?: Maybe<Scalars['DateTime']>;
  timestamp_lte?: Maybe<Scalars['DateTime']>;
  timestamp_gte?: Maybe<Scalars['DateTime']>;
  triggeredBy?: Maybe<Scalars['String']>;
  action?: Maybe<GraphQLAuditLogAction>;
  triggerType?: Maybe<GraphQLAuditLogTriggerType>;
  environmentName?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['String']>;
  resource?: Maybe<GraphQLAuditLogResource>;
};

export enum GraphQLAuditLogOrderByInput {
  TimestampAsc = 'timestamp_ASC',
  TimestampDesc = 'timestamp_DESC'
}

export enum GraphQLAuditLogResource {
  Project = 'PROJECT',
  Environment = 'ENVIRONMENT',
  Model = 'MODEL',
  Stage = 'STAGE',
  Locale = 'LOCALE',
  Pat = 'PAT',
  Enumeration = 'ENUMERATION',
  Field = 'FIELD',
  Content = 'CONTENT',
  Webhook = 'WEBHOOK',
  Member = 'MEMBER',
  Role = 'ROLE',
  Viewgroup = 'VIEWGROUP',
  Contentview = 'CONTENTVIEW'
}

export enum GraphQLAuditLogAction {
  Create = 'CREATE',
  Update = 'UPDATE',
  Delete = 'DELETE',
  Publish = 'PUBLISH',
  Unpublish = 'UNPUBLISH'
}

export enum GraphQLAuditLogTriggerType {
  User = 'USER',
  Pat = 'PAT',
  ThirdParty = 'THIRD_PARTY',
  Open = 'OPEN'
}

export type GraphQLAuditLogTriggeredBy = GraphQLPermanentAuthToken | GraphQLMember;

export type GraphQLAuditLog = {
  __typename?: 'AuditLog';
  id: Scalars['String'];
  entityId?: Maybe<Scalars['String']>;
  timestamp: Scalars['DateTime'];
  resource: GraphQLAuditLogResource;
  action: GraphQLAuditLogAction;
  environmentName?: Maybe<Scalars['String']>;
  payload: Scalars['JSON'];
  triggeredBy?: Maybe<GraphQLAuditLogTriggeredBy>;
  triggerType: GraphQLAuditLogTriggerType;
};

export type GraphQLAuditLogsPayload = {
  __typename?: 'AuditLogsPayload';
  logs: Array<GraphQLAuditLog>;
  total: Scalars['Float'];
};

export enum GraphQLLifecycleStepType {
  ModelCreated = 'MODEL_CREATED',
  FieldCreated = 'FIELD_CREATED',
  WebhookCreated = 'WEBHOOK_CREATED',
  UserInvited = 'USER_INVITED',
  ContentAdded = 'CONTENT_ADDED',
  ApiPermissionsSet = 'API_PERMISSIONS_SET',
  SchemaSetup = 'SCHEMA_SETUP',
  ExternalTraffic = 'EXTERNAL_TRAFFIC'
}

export type GraphQLLifecycleStep = {
  __typename?: 'LifecycleStep';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  done: Scalars['Boolean'];
  type: GraphQLLifecycleStepType;
};

export type GraphQLLifecycle = {
  __typename?: 'Lifecycle';
  steps?: Maybe<Array<GraphQLLifecycleStep>>;
  progress: Scalars['Float'];
};

export type GraphQLMembersAggregate = {
  __typename?: 'MembersAggregate';
  count: Scalars['Int'];
};

export type GraphQLPageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  pageSize: Scalars['Int'];
};

export type GraphQLMembersConnection = {
  __typename?: 'MembersConnection';
  pageInfo: GraphQLPageInfo;
  edges: Array<GraphQLMemberEdge>;
  aggregate: GraphQLMembersAggregate;
};

export type GraphQLMemberEdge = {
  __typename?: 'MemberEdge';
  node: GraphQLMember;
};

export type GraphQLProject = {
  __typename?: 'Project';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  subscription: GraphQLPaymentSubscription;
  invites: Array<GraphQLInvite>;
  owner: GraphQLMember;
  /** Will be null if viewer is not a user */
  viewerAsMember?: Maybe<GraphQLMember>;
  /**
   * The viewers role in this project
   * @deprecated use viewerAsMember.roles instead
   */
  role: GraphQLRole;
  /** @deprecated use viewerAsMember.roles instead */
  roles: Array<GraphQLRole>;
  region: GraphQLRegion;
  existingRoles: Array<GraphQLRole>;
  existingRole: GraphQLRole;
  environments: Array<GraphQLEnvironment>;
  environment: GraphQLEnvironment;
  /** List of all members of the given project */
  members: Array<GraphQLMember>;
  membersConnection: GraphQLMembersConnection;
  quotas: GraphQLQuota;
  lifecycle: GraphQLLifecycle;
  inTrial?: Maybe<Scalars['Boolean']>;
  trialExpiresIn?: Maybe<Scalars['DateTime']>;
  isCloning?: Maybe<Scalars['Boolean']>;
  meta: Scalars['JSON'];
  auditLogs: GraphQLAuditLogsPayload;
  /**
   * List all Permissions usable/assignable to roles in this project
   * @deprecated use availableManagementPermissions instead
   */
  availablePermissions: Array<GraphQLPermission>;
  /** List all Permissions usable/assignable to roles in this project */
  availableManagementPermissions: Array<GraphQLManagementPermission>;
};


export type GraphQLProjectExistingRoleArgs = {
  id: Scalars['ID'];
};


export type GraphQLProjectEnvironmentArgs = {
  name: Scalars['String'];
};


export type GraphQLProjectMembersConnectionArgs = {
  skip?: Scalars['Int'];
  first?: Scalars['Int'];
};


export type GraphQLProjectAuditLogsArgs = {
  where?: Maybe<GraphQLAuditLogWhereInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GraphQLAuditLogOrderByInput>;
};

export type GraphQLDeleteProjectPayload = {
  __typename?: 'DeleteProjectPayload';
  deletedProjectId: Scalars['ID'];
};

export type GraphQLLeaveProjectPayload = {
  __typename?: 'LeaveProjectPayload';
  leftProjectId: Scalars['ID'];
};

export type GraphQLBlockProjectPayload = {
  __typename?: 'BlockProjectPayload';
  gcms?: Maybe<Scalars['String']>;
};

export type GraphQLBlockProjectInput = {
  gcms?: Maybe<Scalars['String']>;
};

export type GraphQLUnblockProjectPayload = {
  __typename?: 'UnblockProjectPayload';
  gcms?: Maybe<Scalars['String']>;
};

export type GraphQLUnblockProjectInput = {
  gcms?: Maybe<Scalars['String']>;
};

export type GraphQL_BookOverLimitInput = {
  gcms?: Maybe<Scalars['String']>;
};

export type GraphQL_BookOverLimitAddonUsage = {
  __typename?: '_BookOverLimitAddonUsage';
  gcms?: Maybe<Scalars['String']>;
};

export type GraphQL_OverLimitProjectUsage = {
  __typename?: '_OverLimitProjectUsage';
  gcms?: Maybe<Scalars['String']>;
};

export type GraphQL_OverLimitProjectAddonsValues = {
  __typename?: '_OverLimitProjectAddonsValues';
  gcms?: Maybe<Scalars['String']>;
};

export type GraphQL_OverLimitProjectAddons = {
  __typename?: '_OverLimitProjectAddons';
  gcms?: Maybe<Scalars['String']>;
};

export type GraphQL_OverLimitProject = {
  __typename?: '_OverLimitProject';
  gcms?: Maybe<Scalars['String']>;
};

export type GraphQL_BookOverLimitPayload = {
  __typename?: '_BookOverLimitPayload';
  gcms?: Maybe<Scalars['String']>;
};

export type GraphQLLeaveProjectInput = {
  id: Scalars['ID'];
};

/** create project from a template */
export type GraphQLCreateProjectTemplateInput = {
  /** id of template to create from */
  templateId: Scalars['ID'];
  /** Set to false to not include content */
  content?: Scalars['Boolean'];
  /** Set to true to include webhooks. If webhooks are included, they will be disabled initially in the created project. */
  webhooks?: Scalars['Boolean'];
};

export type GraphQLCreateProjectInput = {
  region: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  /** optional create the project from a template */
  template?: Maybe<GraphQLCreateProjectTemplateInput>;
};

export type GraphQLScheduleLegacyProjectMigrationInput = {
  region: Scalars['String'];
  legacyProject: Scalars['ID'];
  skipContent?: Scalars['Boolean'];
  skipWebhooks?: Scalars['Boolean'];
  skipMembers?: Scalars['Boolean'];
  skipContentViewsAndContentViewGroups?: Scalars['Boolean'];
  askedForHelp?: Scalars['Boolean'];
};

export type GraphQLScheduleLegacyProjectMigrationPayload = {
  __typename?: 'ScheduleLegacyProjectMigrationPayload';
  legacyProject: GraphQLLegacyProject;
};

export type GraphQLUpdateProjectInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

export type GraphQLDeleteProjectInput = {
  id: Scalars['ID'];
};

export type GraphQLProgress = {
  __typename?: 'Progress';
  current: Scalars['Float'];
  max?: Maybe<Scalars['Float']>;
  percent?: Maybe<Scalars['Float']>;
  estimate?: Maybe<Scalars['Float']>;
};

export type GraphQLQuota = {
  __typename?: 'Quota';
  apiOperations: GraphQLProgress;
  assetTraffic: GraphQLProgress;
  records: GraphQLProgress;
  seats: GraphQLProgress;
  /** @deprecated Use locale quota provided on the environment level */
  locales: GraphQLProgress;
  /** @deprecated Use webhooks quota provided on the environment level */
  webhooks: GraphQLProgress;
  environments: GraphQLProgress;
  roles: GraphQLProgress;
};

export type GraphQLEnvironmentLevelQuota = {
  __typename?: 'EnvironmentLevelQuota';
  locales: GraphQLProgress;
  webhooks: GraphQLProgress;
  models: GraphQLProgress;
  stages: GraphQLProgress;
};

export type GraphQLRegion = {
  __typename?: 'Region';
  id: Scalars['String'];
  name: Scalars['String'];
  isBeta: Scalars['Boolean'];
  pingUrl?: Maybe<Scalars['String']>;
};

export type GraphQLDeleteRolePayload = {
  __typename?: 'DeleteRolePayload';
  deletedId: Scalars['ID'];
};

export type GraphQLRole = {
  __typename?: 'Role';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isDefault: Scalars['Boolean'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  /** @deprecated renamed to managementPermissions */
  permissions: Array<GraphQLPermission>;
  /**
   * Returns contentPermissions for a role.
   * Optionally filtered by environment.
   */
  contentPermissions: Array<GraphQLIContentPermission>;
  managementPermissions: Array<GraphQLManagementPermission>;
  /** List of all members that have at least this role */
  members: Array<GraphQLMember>;
  membersConnection: GraphQLMembersConnection;
};


export type GraphQLRoleContentPermissionsArgs = {
  environmentId?: Maybe<Scalars['ID']>;
};


export type GraphQLRoleMembersConnectionArgs = {
  skip?: Scalars['Int'];
  first?: Scalars['Int'];
};

export type GraphQLCreateRoleInput = {
  projectId: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Scalars['ID']>>;
  managementPermissionIds?: Maybe<Array<Scalars['ID']>>;
};

export type GraphQLUpdateRoleInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<GraphQLPermissionAction>>;
  managementPermissionIds?: Maybe<Array<Scalars['ID']>>;
};

export type GraphQLDeleteRoleInput = {
  id: Scalars['ID'];
};

export type GraphQLContentPermissionRoleTarget = {
  __typename?: 'ContentPermissionRoleTarget';
  role: GraphQLRole;
  environment: GraphQLEnvironment;
};

export type GraphQLContentPermissionPermanentAuthTokenTarget = {
  __typename?: 'ContentPermissionPermanentAuthTokenTarget';
  permanentAuthToken: GraphQLPermanentAuthToken;
};

export type GraphQLContentPermissionPublicTarget = {
  __typename?: 'ContentPermissionPublicTarget';
  environment: GraphQLEnvironment;
};

export type GraphQLContentPermissionTarget = GraphQLContentPermissionRoleTarget | GraphQLContentPermissionPermanentAuthTokenTarget | GraphQLContentPermissionPublicTarget;

export type GraphQLIContentPermission = {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  enabled: Scalars['Boolean'];
  /** @deprecated use target instead */
  role: GraphQLRole;
  /** @deprecated use target instead */
  environment: GraphQLEnvironment;
  target: GraphQLContentPermissionTarget;
  /** Allows only access to this model. If null, all models are allowed. */
  model?: Maybe<GraphQLIModel>;
};

export type GraphQLReadContentPermission = GraphQLIContentPermission & {
  __typename?: 'ReadContentPermission';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  enabled: Scalars['Boolean'];
  /** @deprecated use target instead */
  role: GraphQLRole;
  /** @deprecated use target instead */
  environment: GraphQLEnvironment;
  target: GraphQLContentPermissionTarget;
  /** Allows only access to this model. If null, all models are allowed. */
  model?: Maybe<GraphQLIModel>;
  /** Allows only access to specific locales. If null, all locales are allowed */
  locales?: Maybe<Array<GraphQLLocale>>;
  /** Allows only access to specific stages. If null all stages are allowed */
  stages?: Maybe<Array<GraphQLStage>>;
  /** Allows access when conditions are met. Condition is a stringified JSON matching a usual where input. Ignored if there are no conditions. */
  condition?: Maybe<Scalars['String']>;
};

export type GraphQLCreateReadContentPermissionModelInput = {
  /** model id */
  id: Scalars['ID'];
  /** Allows access when conditions are met. Condition is a stringified JSON matching a usual where input. Ignored if there are no conditions. */
  condition?: Maybe<Scalars['String']>;
};

export enum GraphQLContentPermissionTargetKind {
  Role = 'ROLE',
  Pat = 'PAT',
  Public = 'PUBLIC'
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
  patId?: Maybe<Scalars['ID']>;
  roleId?: Maybe<Scalars['ID']>;
  environmentId?: Maybe<Scalars['ID']>;
};

export type GraphQLCreateReadContentPermissionInput = {
  environmentId?: Maybe<Scalars['ID']>;
  roleId?: Maybe<Scalars['ID']>;
  target?: Maybe<GraphQLCreateContentPermissionTargetInput>;
  /** Allows only access to this model. If null, all models are allowed. */
  model?: Maybe<GraphQLCreateReadContentPermissionModelInput>;
  /** Allows only access to specific locales. If null, all locales are allowed */
  locales?: Maybe<Array<Scalars['ID']>>;
  /** Allows only access to specific stages. If null all stages are allowed */
  stages?: Maybe<Array<Scalars['ID']>>;
};

export type GraphQLUpdateReadContentPermissionInput = {
  /** Id of the read permission that should be updated. */
  permissionId: Scalars['ID'];
  /** Allows only access to this model. If null, all models are allowed. */
  model?: Maybe<GraphQLCreateReadContentPermissionModelInput>;
  /** Allows only access to specific locales. If null, all locales are allowed */
  locales?: Maybe<Array<Scalars['ID']>>;
  /** Allows only access to specific stages. If null all stages are allowed */
  stages?: Maybe<Array<Scalars['ID']>>;
};

export type GraphQLCreateReadContentPermissionPayload = {
  __typename?: 'CreateReadContentPermissionPayload';
  permission: GraphQLReadContentPermission;
};

export type GraphQLUpdateReadContentPermissionPayload = {
  __typename?: 'UpdateReadContentPermissionPayload';
  permission: GraphQLReadContentPermission;
};

export type GraphQLReadVersionContentPermission = GraphQLIContentPermission & {
  __typename?: 'ReadVersionContentPermission';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  enabled: Scalars['Boolean'];
  /** @deprecated use target instead */
  role: GraphQLRole;
  /** @deprecated use target instead */
  environment: GraphQLEnvironment;
  target: GraphQLContentPermissionTarget;
  /** Allows only access to this model. If null, all models are allowed. */
  model?: Maybe<GraphQLIModel>;
};

export type GraphQLCreateReadVersionContentPermissionInput = {
  environmentId?: Maybe<Scalars['ID']>;
  roleId?: Maybe<Scalars['ID']>;
  target?: Maybe<GraphQLCreateContentPermissionTargetInput>;
  /** Allows only access to this model. If null, all models are allowed. */
  modelId?: Maybe<Scalars['ID']>;
};

export type GraphQLUpdateReadVersionContentPermissionInput = {
  /** Id of the read permission that should be updated. */
  permissionId: Scalars['ID'];
  /** Allows only access to this model. If null, all models are allowed. */
  modelId?: Maybe<Scalars['ID']>;
};

export type GraphQLCreateReadVersionContentPermissionPayload = {
  __typename?: 'CreateReadVersionContentPermissionPayload';
  permission: GraphQLReadVersionContentPermission;
};

export type GraphQLUpdateReadVersionContentPermissionPayload = {
  __typename?: 'UpdateReadVersionContentPermissionPayload';
  permission: GraphQLReadVersionContentPermission;
};

export type GraphQLCreateContentPermission = GraphQLIContentPermission & {
  __typename?: 'CreateContentPermission';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  enabled: Scalars['Boolean'];
  /** @deprecated use target instead */
  role: GraphQLRole;
  /** @deprecated use target instead */
  environment: GraphQLEnvironment;
  target: GraphQLContentPermissionTarget;
  /** Allows only access to this model. If null, all models are allowed. */
  model?: Maybe<GraphQLIModel>;
  /** Allows only access to specific locales. If null, all locales are allowed */
  locales?: Maybe<Array<GraphQLLocale>>;
  /** Allows access when conditions are met. Condition is a stringified JSON matching a usual where input. Ignored if there are no conditions. */
  condition?: Maybe<Scalars['String']>;
};

export type GraphQLCreateCreateContentPermissionModelInput = {
  /** model id */
  id: Scalars['ID'];
  /** Allows access when conditions are met. Condition is a stringified JSON matching a usual where input. Ignored if there are no conditions. */
  condition?: Maybe<Scalars['String']>;
};

export type GraphQLCreateCreateContentPermissionInput = {
  environmentId?: Maybe<Scalars['ID']>;
  roleId?: Maybe<Scalars['ID']>;
  target?: Maybe<GraphQLCreateContentPermissionTargetInput>;
  /** Allows only access to this model. If null, all models are allowed. */
  model?: Maybe<GraphQLCreateCreateContentPermissionModelInput>;
  /** Allows only access to specific locales. If null, all locales are allowed */
  locales?: Maybe<Array<Scalars['ID']>>;
};

export type GraphQLUpdateCreateContentPermissionInput = {
  /** Id of the read permission that should be updated. */
  permissionId: Scalars['ID'];
  /** Allows only access to this model. If null, all models are allowed. */
  model?: Maybe<GraphQLCreateCreateContentPermissionModelInput>;
  /** Allows only access to specific locales. If null, all locales are allowed */
  locales?: Maybe<Array<Scalars['ID']>>;
};

export type GraphQLCreateCreateContentPermissionPayload = {
  __typename?: 'CreateCreateContentPermissionPayload';
  permission: GraphQLCreateContentPermission;
};

export type GraphQLUpdateCreateContentPermissionPayload = {
  __typename?: 'UpdateCreateContentPermissionPayload';
  permission: GraphQLCreateContentPermission;
};

export type GraphQLUpdateContentPermission = GraphQLIContentPermission & {
  __typename?: 'UpdateContentPermission';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  enabled: Scalars['Boolean'];
  /** @deprecated use target instead */
  role: GraphQLRole;
  /** @deprecated use target instead */
  environment: GraphQLEnvironment;
  target: GraphQLContentPermissionTarget;
  /** Allows only access to this model. If null, all models are allowed. */
  model?: Maybe<GraphQLIModel>;
  /** Allows only access to specific locales. If null, all locales are allowed */
  locales?: Maybe<Array<GraphQLLocale>>;
  /** Allows access when conditions are met. Condition is a stringified JSON matching a usual where input. Ignored if there are no conditions. */
  condition?: Maybe<Scalars['String']>;
};

export type GraphQLCreateUpdateContentPermissionModelInput = {
  /** model id */
  id: Scalars['ID'];
  /** Allows access when conditions are met. Condition is a stringified JSON matching a usual where input. Ignored if there are no conditions. */
  condition?: Maybe<Scalars['String']>;
};

export type GraphQLCreateUpdateContentPermissionInput = {
  environmentId?: Maybe<Scalars['ID']>;
  roleId?: Maybe<Scalars['ID']>;
  target?: Maybe<GraphQLCreateContentPermissionTargetInput>;
  /** Allows only access to this model. If null, all models are allowed. */
  model?: Maybe<GraphQLCreateUpdateContentPermissionModelInput>;
  /** Allows only access to specific locales. If null, all locales are allowed */
  locales?: Maybe<Array<Scalars['ID']>>;
};

export type GraphQLUpdateUpdateContentPermissionInput = {
  /** Id of the update permission that should be updated. */
  permissionId: Scalars['ID'];
  /** Allows only access to this model. If null, all models are allowed. */
  model?: Maybe<GraphQLCreateUpdateContentPermissionModelInput>;
  /** Allows only access to specific locales. If null, all locales are allowed */
  locales?: Maybe<Array<Scalars['ID']>>;
};

export type GraphQLCreateUpdateContentPermissionPayload = {
  __typename?: 'CreateUpdateContentPermissionPayload';
  permission: GraphQLUpdateContentPermission;
};

export type GraphQLUpdateUpdateContentPermissionPayload = {
  __typename?: 'UpdateUpdateContentPermissionPayload';
  permission: GraphQLUpdateContentPermission;
};

export type GraphQLDeleteContentPermission = GraphQLIContentPermission & {
  __typename?: 'DeleteContentPermission';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  enabled: Scalars['Boolean'];
  /** @deprecated use target instead */
  role: GraphQLRole;
  /** @deprecated use target instead */
  environment: GraphQLEnvironment;
  target: GraphQLContentPermissionTarget;
  /** Allows only access to this model. If null, all models are allowed. */
  model?: Maybe<GraphQLIModel>;
  /** Allows only access to specific locales. If null, all locales are allowed */
  locales?: Maybe<Array<GraphQLLocale>>;
  /** Allows access when conditions are met. Condition is a stringified JSON matching a usual where input. Ignored if there are no conditions. */
  condition?: Maybe<Scalars['String']>;
};

export type GraphQLCreateDeleteContentPermissionModelInput = {
  /** model id */
  id: Scalars['ID'];
  /** Allows access when conditions are met. Condition is a stringified JSON matching a usual where input. Ignored if there are no conditions. */
  condition?: Maybe<Scalars['String']>;
};

export type GraphQLCreateDeleteContentPermissionInput = {
  environmentId?: Maybe<Scalars['ID']>;
  roleId?: Maybe<Scalars['ID']>;
  target?: Maybe<GraphQLCreateContentPermissionTargetInput>;
  /** Allows only access to this model. If null, all models are allowed. */
  model?: Maybe<GraphQLCreateDeleteContentPermissionModelInput>;
  /** Allows only access to specific locales. If null, all locales are allowed */
  locales?: Maybe<Array<Scalars['ID']>>;
};

export type GraphQLUpdateDeleteContentPermissionInput = {
  /** Id of the delete permission that should be updated. */
  permissionId: Scalars['ID'];
  /** Allows only access to this model. If null, all models are allowed. */
  model?: Maybe<GraphQLCreateUpdateContentPermissionModelInput>;
  /** Allows only access to specific locales. If null, all locales are allowed */
  locales?: Maybe<Array<Scalars['ID']>>;
};

export type GraphQLCreateDeleteContentPermissionPayload = {
  __typename?: 'CreateDeleteContentPermissionPayload';
  permission: GraphQLDeleteContentPermission;
};

export type GraphQLUpdateDeleteContentPermissionPayload = {
  __typename?: 'UpdateDeleteContentPermissionPayload';
  permission: GraphQLDeleteContentPermission;
};

export type GraphQLPublishContentPermission = GraphQLIContentPermission & {
  __typename?: 'PublishContentPermission';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  enabled: Scalars['Boolean'];
  /** @deprecated use target instead */
  role: GraphQLRole;
  /** @deprecated use target instead */
  environment: GraphQLEnvironment;
  target: GraphQLContentPermissionTarget;
  /** Allows only access to this model. If null, all models are allowed. */
  model?: Maybe<GraphQLIModel>;
  /** Allows only access to specific locales. If null, all locales are allowed */
  locales?: Maybe<Array<GraphQLLocale>>;
  /** Allows only to publish from specific stages. If null all stages are allowed */
  fromStages?: Maybe<Array<GraphQLStage>>;
  /** Allows only to publish to specific stages. If null all stages are allowed */
  toStages?: Maybe<Array<GraphQLStage>>;
  /** Allows access when conditions are met. Condition is a stringified JSON matching a usual where input. Ignored if there are no conditions. */
  condition?: Maybe<Scalars['String']>;
};

export type GraphQLCreatePublishContentPermissionModelInput = {
  /** model id */
  id: Scalars['ID'];
  /**
   * Allows only access to specific fields. If null, all fields are allowed
   * Allows access when conditions are met. Condition is a stringified JSON matching a usual where input. Ignored if there are no conditions.
   */
  condition?: Maybe<Scalars['String']>;
};

export type GraphQLCreatePublishContentPermissionInput = {
  environmentId?: Maybe<Scalars['ID']>;
  roleId?: Maybe<Scalars['ID']>;
  target?: Maybe<GraphQLCreateContentPermissionTargetInput>;
  /** Allows only access to this model. If null, all models are allowed. */
  model?: Maybe<GraphQLCreatePublishContentPermissionModelInput>;
  /** Allows only access to specific locales. If null, all locales are allowed */
  locales?: Maybe<Array<Scalars['ID']>>;
  /** Allows only to publish from specific stages. If null all stages are allowed */
  fromStages?: Maybe<Array<Scalars['ID']>>;
  /** Allows only to publish to specific stages. If null all stages are allowed */
  toStages?: Maybe<Array<Scalars['ID']>>;
};

export type GraphQLCreatePublishContentPermissionPayload = {
  __typename?: 'CreatePublishContentPermissionPayload';
  permission: GraphQLPublishContentPermission;
};

export type GraphQLUpdatePublishContentPermissionModelInput = {
  /** model id */
  id: Scalars['ID'];
  /**
   * Allows only access to specific fields. If null, all fields are allowed
   * Allows access when conditions are met. Condition is a stringified JSON matching a usual where input. Ignored if there are no conditions.
   */
  condition?: Maybe<Scalars['String']>;
};

export type GraphQLUpdatePublishContentPermissionInput = {
  /** Id of the delete permission that should be updated. */
  permissionId: Scalars['ID'];
  /** Allows only access to this model. If null, all models are allowed. */
  model?: Maybe<GraphQLCreatePublishContentPermissionModelInput>;
  /** Allows only access to specific locales. If null, all locales are allowed */
  locales?: Maybe<Array<Scalars['ID']>>;
  /** Allows only to publish from specific stages. If null all stages are allowed */
  fromStages?: Maybe<Array<Scalars['ID']>>;
  /** Allows only to publish to specific stages. If null all stages are allowed */
  toStages?: Maybe<Array<Scalars['ID']>>;
};

export type GraphQLUpdatePublishContentPermissionPayload = {
  __typename?: 'UpdatePublishContentPermissionPayload';
  permission: GraphQLPublishContentPermission;
};

export type GraphQLUnpublishContentPermission = GraphQLIContentPermission & {
  __typename?: 'UnpublishContentPermission';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  enabled: Scalars['Boolean'];
  /** @deprecated use target instead */
  role: GraphQLRole;
  /** @deprecated use target instead */
  environment: GraphQLEnvironment;
  target: GraphQLContentPermissionTarget;
  /** Allows only access to this model. If null, all models are allowed. */
  model?: Maybe<GraphQLIModel>;
  /** Allows only access to specific locales. If null, all locales are allowed */
  locales?: Maybe<Array<GraphQLLocale>>;
  /** Allows only to publish from specific stages. If null all stages are allowed */
  stages?: Maybe<Array<GraphQLStage>>;
  /** Allows access when conditions are met. Condition is a stringified JSON matching a usual where input. Ignored if there are no conditions. */
  condition?: Maybe<Scalars['String']>;
};

export type GraphQLCreateUnpublishContentPermissionModelInput = {
  /** model id */
  id: Scalars['ID'];
  /**
   * Allows only access to specific fields. If null, all fields are allowed
   * Allows access when conditions are met. Condition is a stringified JSON matching a usual where input. Ignored if there are no conditions.
   */
  condition?: Maybe<Scalars['String']>;
};

export type GraphQLCreateUnpublishContentPermissionInput = {
  environmentId?: Maybe<Scalars['ID']>;
  roleId?: Maybe<Scalars['ID']>;
  target?: Maybe<GraphQLCreateContentPermissionTargetInput>;
  /** Allows only access to this model. If null, all models are allowed. */
  model?: Maybe<GraphQLCreateUnpublishContentPermissionModelInput>;
  /** Allows only access to specific locales. If null, all locales are allowed */
  locales?: Maybe<Array<Scalars['ID']>>;
  /** Allows only to publish from specific stages. If null all stages are allowed */
  stages?: Maybe<Array<Scalars['ID']>>;
};

export type GraphQLCreateUnpublishContentPermissionPayload = {
  __typename?: 'CreateUnpublishContentPermissionPayload';
  permission: GraphQLUnpublishContentPermission;
};

export type GraphQLUpdateUnpublishContentPermissionModelInput = {
  /** model id */
  id: Scalars['ID'];
  /**
   * Allows only access to specific fields. If null, all fields are allowed
   * Allows access when conditions are met. Condition is a stringified JSON matching a usual where input. Ignored if there are no conditions.
   */
  condition?: Maybe<Scalars['String']>;
};

export type GraphQLUpdateUnpublishContentPermissionInput = {
  /** Id of the delete permission that should be updated. */
  permissionId: Scalars['ID'];
  /** Allows only access to this model. If null, all models are allowed. */
  model?: Maybe<GraphQLUpdateUnpublishContentPermissionModelInput>;
  /** Allows only access to specific locales. If null, all locales are allowed */
  locales?: Maybe<Array<Scalars['ID']>>;
  /** Allows only to publish from specific stages. If null all stages are allowed */
  stages?: Maybe<Array<Scalars['ID']>>;
};

export type GraphQLUpdateUnpublishContentPermissionPayload = {
  __typename?: 'UpdateUnpublishContentPermissionPayload';
  permission: GraphQLUnpublishContentPermission;
};

export type GraphQLUpdateContentPermissionEnabledInput = {
  permissionId: Scalars['ID'];
  enabled: Scalars['Boolean'];
};

export type GraphQLUpdateContentPermissionEnabledPayload = {
  __typename?: 'UpdateContentPermissionEnabledPayload';
  permission: GraphQLIContentPermission;
};

export type GraphQLDeleteContentPermissionInput = {
  permissionId: Scalars['ID'];
};

export type GraphQLDeleteContentPermissionPayload = {
  __typename?: 'DeleteContentPermissionPayload';
  deletedPermissionId: Scalars['ID'];
};

export type GraphQLUpdateMemberRolesInput = {
  memberId: Scalars['ID'];
  roleIds: Array<Scalars['ID']>;
};

/** ### SCHEMA CHANGES: */
export enum GraphQLSchemaChangeType {
  FieldArgumentDescriptionChanged = 'FIELD_ARGUMENT_DESCRIPTION_CHANGED',
  FieldArgumentDefaultChanged = 'FIELD_ARGUMENT_DEFAULT_CHANGED',
  FieldArgumentTypeChanged = 'FIELD_ARGUMENT_TYPE_CHANGED',
  DirectiveRemoved = 'DIRECTIVE_REMOVED',
  DirectiveAdded = 'DIRECTIVE_ADDED',
  DirectiveDescriptionChanged = 'DIRECTIVE_DESCRIPTION_CHANGED',
  DirectiveLocationAdded = 'DIRECTIVE_LOCATION_ADDED',
  DirectiveLocationRemoved = 'DIRECTIVE_LOCATION_REMOVED',
  DirectiveArgumentAdded = 'DIRECTIVE_ARGUMENT_ADDED',
  DirectiveArgumentRemoved = 'DIRECTIVE_ARGUMENT_REMOVED',
  DirectiveArgumentDescriptionChanged = 'DIRECTIVE_ARGUMENT_DESCRIPTION_CHANGED',
  DirectiveArgumentDefaultValueChanged = 'DIRECTIVE_ARGUMENT_DEFAULT_VALUE_CHANGED',
  DirectiveArgumentTypeChanged = 'DIRECTIVE_ARGUMENT_TYPE_CHANGED',
  EnumValueRemoved = 'ENUM_VALUE_REMOVED',
  EnumValueAdded = 'ENUM_VALUE_ADDED',
  EnumValueDescriptionChanged = 'ENUM_VALUE_DESCRIPTION_CHANGED',
  EnumValueDeprecationReasonChanged = 'ENUM_VALUE_DEPRECATION_REASON_CHANGED',
  FieldRemoved = 'FIELD_REMOVED',
  FieldAdded = 'FIELD_ADDED',
  FieldDescriptionChanged = 'FIELD_DESCRIPTION_CHANGED',
  FieldDescriptionAdded = 'FIELD_DESCRIPTION_ADDED',
  FieldDescriptionRemoved = 'FIELD_DESCRIPTION_REMOVED',
  FieldDeprecationAdded = 'FIELD_DEPRECATION_ADDED',
  FieldDeprecationRemoved = 'FIELD_DEPRECATION_REMOVED',
  FieldDeprecationReasonChanged = 'FIELD_DEPRECATION_REASON_CHANGED',
  FieldDeprecationReasonAdded = 'FIELD_DEPRECATION_REASON_ADDED',
  FieldDeprecationReasonRemoved = 'FIELD_DEPRECATION_REASON_REMOVED',
  FieldTypeChanged = 'FIELD_TYPE_CHANGED',
  FieldArgumentAdded = 'FIELD_ARGUMENT_ADDED',
  FieldArgumentRemoved = 'FIELD_ARGUMENT_REMOVED',
  InputFieldRemoved = 'INPUT_FIELD_REMOVED',
  InputFieldAdded = 'INPUT_FIELD_ADDED',
  InputFieldDescriptionAdded = 'INPUT_FIELD_DESCRIPTION_ADDED',
  InputFieldDescriptionRemoved = 'INPUT_FIELD_DESCRIPTION_REMOVED',
  InputFieldDescriptionChanged = 'INPUT_FIELD_DESCRIPTION_CHANGED',
  InputFieldDefaultValueChanged = 'INPUT_FIELD_DEFAULT_VALUE_CHANGED',
  InputFieldTypeChanged = 'INPUT_FIELD_TYPE_CHANGED',
  ObjectTypeInterfaceAdded = 'OBJECT_TYPE_INTERFACE_ADDED',
  ObjectTypeInterfaceRemoved = 'OBJECT_TYPE_INTERFACE_REMOVED',
  SchemaQueryTypeChanged = 'SCHEMA_QUERY_TYPE_CHANGED',
  SchemaMutationTypeChanged = 'SCHEMA_MUTATION_TYPE_CHANGED',
  SchemaSubscriptionTypeChanged = 'SCHEMA_SUBSCRIPTION_TYPE_CHANGED',
  TypeRemoved = 'TYPE_REMOVED',
  TypeAdded = 'TYPE_ADDED',
  TypeKindChanged = 'TYPE_KIND_CHANGED',
  TypeDescriptionChanged = 'TYPE_DESCRIPTION_CHANGED',
  UnionMemberRemoved = 'UNION_MEMBER_REMOVED',
  UnionMemberAdde = 'UNION_MEMBER_ADDE'
}

export enum GraphQLSchemaChangeCriticalityLevel {
  Breaking = 'BREAKING',
  NonBreaking = 'NON_BREAKING',
  Dangerous = 'DANGEROUS'
}

export type GraphQLSchemaChangeCriticality = {
  __typename?: 'SchemaChangeCriticality';
  level: GraphQLSchemaChangeCriticalityLevel;
  reason?: Maybe<Scalars['String']>;
};

export type GraphQLSchemaChange = {
  __typename?: 'SchemaChange';
  message: Scalars['String'];
  path?: Maybe<Scalars['String']>;
  type: GraphQLSchemaChangeType;
  criticality: GraphQLSchemaChangeCriticality;
};

export enum GraphQLMigrationStatus {
  Queued = 'QUEUED',
  Running = 'RUNNING',
  Success = 'SUCCESS',
  Timeout = 'TIMEOUT',
  Failed = 'FAILED'
}

export type GraphQLMigration = {
  __typename?: 'Migration';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  finishedAt?: Maybe<Scalars['DateTime']>;
  /** @deprecated This will be replaced by a union of Member | PermanentAuthToken */
  triggeredBy?: Maybe<GraphQLMember>;
  status: GraphQLMigrationStatus;
  errors?: Maybe<Scalars['String']>;
  operationType: GraphQLMigrationOperationType;
  resourceId?: Maybe<Scalars['ID']>;
};

export type GraphQLEnvironmentRevision = {
  __typename?: 'EnvironmentRevision';
  id: Scalars['String'];
  type: Scalars['String'];
  createdAt: Scalars['DateTime'];
  body?: Maybe<Scalars['JSON']>;
  createdBy?: Maybe<GraphQLMember>;
};

export type GraphQLEnvironment = {
  __typename?: 'Environment';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  endpoint: Scalars['String'];
  assetConfig: GraphQLIAssetConfig;
  metrics: GraphQLMetrics;
  webhook: GraphQLWebhook;
  webhooks: Array<GraphQLWebhook>;
  permanentAuthTokens: Array<GraphQLPermanentAuthToken>;
  authToken: Scalars['String'];
  contentView: GraphQLContentView;
  contentViews: Array<GraphQLContentView>;
  viewGroups: Array<GraphQLViewGroup>;
  contentModel: GraphQLContentModel;
  revisionCount: Scalars['Int'];
  revisions: Array<GraphQLEnvironmentRevision>;
  revision: GraphQLEnvironmentRevision;
  migrations: Array<GraphQLMigration>;
  migration: GraphQLMigration;
  runningMigration?: Maybe<GraphQLMigration>;
  /** @deprecated use publicContentAPI.contentPermissions instead */
  permissions: GraphQLEnvironmentPermissions;
  publicContentAPI: GraphQLPublicContentApi;
  /**
   * all content permissions configured for this env across roles, pat and public access
   * @deprecated not needed
   */
  contentPermissions: Array<GraphQLIContentPermission>;
  isCloning?: Maybe<Scalars['Boolean']>;
  quotas: GraphQLEnvironmentLevelQuota;
  integrations: Array<GraphQLIIntegration>;
  integration: GraphQLIIntegration;
  integrationCallbackUrl?: Maybe<Scalars['String']>;
  extensions: Array<GraphQLIExtension>;
  extension: GraphQLIExtension;
};


export type GraphQLEnvironmentWebhookArgs = {
  id: Scalars['ID'];
};


export type GraphQLEnvironmentContentViewArgs = {
  id: Scalars['ID'];
};


export type GraphQLEnvironmentContentViewsArgs = {
  includeSystemModels?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<GraphQLContentViewFilterInput>;
};


export type GraphQLEnvironmentRevisionsArgs = {
  skip: Scalars['Int'];
  limit: Scalars['Int'];
};


export type GraphQLEnvironmentRevisionArgs = {
  id: Scalars['String'];
};


export type GraphQLEnvironmentMigrationArgs = {
  id: Scalars['ID'];
};


export type GraphQLEnvironmentIntegrationArgs = {
  id: Scalars['ID'];
};


export type GraphQLEnvironmentIntegrationCallbackUrlArgs = {
  provider: GraphQLIntegration_Provider;
};


export type GraphQLEnvironmentExtensionArgs = {
  id: Scalars['ID'];
};

export type GraphQLPublicContentApiDefauts = {
  __typename?: 'PublicContentAPIDefauts';
  stage: GraphQLStage;
};

export type GraphQLPublicContentApi = {
  __typename?: 'PublicContentAPI';
  defaults: GraphQLPublicContentApiDefauts;
  /** returns configured content permissions used for public access of the environment */
  contentPermissions: Array<Maybe<GraphQLIContentPermission>>;
};

export enum GraphQLIntegration_Provider {
  Netlify = 'NETLIFY',
  Vercel = 'VERCEL',
  GatsbyCloud = 'GATSBY_CLOUD'
}

export type GraphQLIIntegration = {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type GraphQLNetlifyIntegration = GraphQLIIntegration & {
  __typename?: 'NetlifyIntegration';
  /** Integration ID */
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  /** Integration display name on GCMS */
  displayName?: Maybe<Scalars['String']>;
  /** Integration description on GCMS */
  description?: Maybe<Scalars['String']>;
  /** Configured sites for netlify integration */
  sites: Array<GraphQLNetlifySite>;
  models: Array<GraphQLIModel>;
};

export type GraphQLVercelIntegration = GraphQLIIntegration & {
  __typename?: 'VercelIntegration';
  /** Integration ID */
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  /** Integration display name on GCMS */
  displayName?: Maybe<Scalars['String']>;
  /** Integration description on GCMS */
  description?: Maybe<Scalars['String']>;
  /** Configured projects for vercel integration */
  projects: Array<GraphQLVercelProject>;
  models: Array<GraphQLIModel>;
};

export type GraphQLGatsbyCloudIntegration = GraphQLIIntegration & {
  __typename?: 'GatsbyCloudIntegration';
  /** Integration ID */
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  /** Integration display name on GCMS */
  displayName?: Maybe<Scalars['String']>;
  /** Integration description on GCMS */
  description?: Maybe<Scalars['String']>;
  /** URL to your site */
  siteURL: Scalars['String'];
  /** Prefix of your site */
  sitePrefix: Scalars['String'];
  /** URL to the preview of your site */
  previewURL: Scalars['String'];
  /** URL to the production deployment of your site */
  productionURL: Scalars['String'];
  /** URL to trigger a Deploy Build. This webhook will be triggered when publishing and unpublishing entries. */
  buildWebhookURL: Scalars['String'];
  /** URL to trigger a CMS Preview build */
  previewWebhookURL: Scalars['String'];
};

export type GraphQLNetlifySite = {
  __typename?: 'NetlifySite';
  id: Scalars['String'];
  displayName: Scalars['String'];
  url: Scalars['String'];
  /** Contains information of the last time the build state was changing. */
  lastState?: Maybe<GraphQLNetlifyState>;
};

export type GraphQLVercelProject = {
  __typename?: 'VercelProject';
  id: Scalars['String'];
  displayName: Scalars['String'];
  url: Scalars['String'];
  /** Git branch to trigger the build from */
  ref: Scalars['String'];
  /** Contains information of the last time the build state was changing. */
  lastState?: Maybe<GraphQLVercelState>;
};

export type GraphQLNetlifyState = {
  __typename?: 'NetlifyState';
  /** Current state the site is in */
  buildState: GraphQLNetlifyBuildState;
  /** Time when the build of the site was started */
  buildStartedAt?: Maybe<Scalars['DateTime']>;
  /** Time when the build of the site was prepared */
  buildPreparedAt?: Maybe<Scalars['DateTime']>;
  /** Time when the build of the site was finished */
  buildFinishedAt?: Maybe<Scalars['DateTime']>;
  /** Member in the project who triggered a build. If the build was triggered externally this will be null. */
  triggeredBy?: Maybe<GraphQLNetlifyStateTriggeredBy>;
};

export type GraphQLVercelState = {
  __typename?: 'VercelState';
  /** Current state the site is in */
  buildState: GraphQLVercelBuildState;
  /** Time when the build of the site was started */
  buildStartedAt?: Maybe<Scalars['DateTime']>;
  /** Time when the build of the site was prepared */
  buildPreparedAt?: Maybe<Scalars['DateTime']>;
  /** Time when the build of the site was finished */
  buildFinishedAt?: Maybe<Scalars['DateTime']>;
  /** Member in the project who triggered a build. If the build was triggered externally this will be null. */
  triggeredBy?: Maybe<GraphQLVercelStateTriggeredBy>;
};

export type GraphQLNetlifyStateTriggeredBy = GraphQLPermanentAuthToken | GraphQLMember;

export type GraphQLVercelStateTriggeredBy = GraphQLPermanentAuthToken | GraphQLMember;

export type GraphQLNetlifyModels = {
  __typename?: 'NetlifyModels';
  all: Scalars['Boolean'];
  selected: Array<GraphQLIModel>;
};

export enum GraphQLColorPalette {
  Pink = 'PINK',
  Purple = 'PURPLE',
  Orange = 'ORANGE',
  Red = 'RED',
  Brown = 'BROWN',
  Teal = 'TEAL',
  Green = 'GREEN',
  Yellow = 'YELLOW'
}

export type GraphQLStage = {
  __typename?: 'Stage';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  apiId: Scalars['String'];
  color: Scalars['String'];
  colorPaletteId: GraphQLColorPalette;
  backgroundColor: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isSystem: Scalars['Boolean'];
  /**
   * This stage will be used as the default delivering your content
   * @deprecated moved to project publicAccess.defaults.stages
   */
  isDefault: Scalars['Boolean'];
  /**
   * Allow users to access content in this stage via queries
   * @deprecated moved to environment.publicContentAPI.contentPermissions
   */
  allowQueries: Scalars['Boolean'];
  position: Scalars['Int'];
};

export type GraphQLProfile = {
  __typename?: 'Profile';
  email: Scalars['String'];
  name: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
};

export type GraphQLIUser = {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  profile: GraphQLProfile;
};

export type GraphQLCreateUserPayload = {
  __typename?: 'CreateUserPayload';
  gcms?: Maybe<Scalars['String']>;
};

export type GraphQLLegacyProject = {
  __typename?: 'LegacyProject';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
  isOwner: Scalars['Boolean'];
  isMigrated: Scalars['Boolean'];
};

export type GraphQLTemplate = {
  __typename?: 'Template';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

/**
 * Represents the logged in user
 * Will be removed soon
 */
export type GraphQLViewer = GraphQLIUser & {
  __typename?: 'Viewer';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  profile: GraphQLProfile;
  pendingInvites: Array<GraphQLInvite>;
  pendingInvite?: Maybe<GraphQLInvite>;
  projects: Array<GraphQLProject>;
  plans: Array<GraphQLPlan>;
  project?: Maybe<GraphQLProject>;
  templates: Array<GraphQLTemplate>;
  legacyProjects: Array<GraphQLLegacyProject>;
  paymentAccounts: Array<GraphQLPaymentAccount>;
  paymentAccount: GraphQLPaymentAccount;
  regions: Array<GraphQLRegion>;
  availableIntegrations: Array<GraphQLIntegration_Provider>;
  availableExtensionSrcTypes: Array<GraphQLExtensionSrcType>;
  availableExtensionPermissions: Array<GraphQLAvailableExtensionPermission>;
};


/**
 * Represents the logged in user
 * Will be removed soon
 */
export type GraphQLViewerPendingInviteArgs = {
  code: Scalars['String'];
};


/**
 * Represents the logged in user
 * Will be removed soon
 */
export type GraphQLViewerProjectArgs = {
  id: Scalars['ID'];
};


/**
 * Represents the logged in user
 * Will be removed soon
 */
export type GraphQLViewerPaymentAccountArgs = {
  id: Scalars['ID'];
};

export type GraphQLIViewer = {
  id: Scalars['ID'];
  project?: Maybe<GraphQLProject>;
  plans: Array<GraphQLPlan>;
  templates: Array<GraphQLTemplate>;
  regions: Array<GraphQLRegion>;
  availableIntegrations: Array<GraphQLIntegration_Provider>;
  availableExtensionSrcTypes: Array<GraphQLExtensionSrcType>;
  availableExtensionPermissions: Array<GraphQLAvailableExtensionPermission>;
};


export type GraphQLIViewerProjectArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type GraphQLUser = GraphQLIUser & {
  __typename?: 'User';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  profile: GraphQLProfile;
};

export type GraphQLUserViewer = GraphQLIViewer & {
  __typename?: 'UserViewer';
  id: Scalars['ID'];
  user: GraphQLUser;
  pendingInvites: Array<GraphQLInvite>;
  pendingInvite?: Maybe<GraphQLInvite>;
  projects: Array<GraphQLProject>;
  project?: Maybe<GraphQLProject>;
  plans: Array<GraphQLPlan>;
  templates: Array<GraphQLTemplate>;
  legacyProjects: Array<GraphQLLegacyProject>;
  paymentAccounts: Array<GraphQLPaymentAccount>;
  paymentAccount: GraphQLPaymentAccount;
  regions: Array<GraphQLRegion>;
  availableIntegrations: Array<GraphQLIntegration_Provider>;
  availableExtensionSrcTypes: Array<GraphQLExtensionSrcType>;
  availableExtensionPermissions: Array<GraphQLAvailableExtensionPermission>;
};


export type GraphQLUserViewerPendingInviteArgs = {
  code: Scalars['String'];
};


export type GraphQLUserViewerProjectArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type GraphQLUserViewerPaymentAccountArgs = {
  id: Scalars['ID'];
};

export type GraphQLTokenViewer = GraphQLIViewer & {
  __typename?: 'TokenViewer';
  id: Scalars['ID'];
  project?: Maybe<GraphQLProject>;
  regions: Array<GraphQLRegion>;
  templates: Array<GraphQLTemplate>;
  plans: Array<GraphQLPlan>;
  availableIntegrations: Array<GraphQLIntegration_Provider>;
  availableExtensionSrcTypes: Array<GraphQLExtensionSrcType>;
  availableExtensionPermissions: Array<GraphQLAvailableExtensionPermission>;
};


export type GraphQLTokenViewerProjectArgs = {
  id?: Maybe<Scalars['ID']>;
};

/** Represents a user in a project */
export type GraphQLMember = GraphQLIUser & {
  __typename?: 'Member';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  profile: GraphQLProfile;
  /** @deprecated use roles instead */
  role: GraphQLRole;
  roles: Array<GraphQLRole>;
  isOwner: Scalars['Boolean'];
};

export type GraphQLUserAnalytics = {
  __typename?: 'UserAnalytics';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  landingPage?: Maybe<Scalars['String']>;
  conversionPage?: Maybe<Scalars['String']>;
  referrer?: Maybe<Scalars['String']>;
  gclid?: Maybe<Scalars['String']>;
  utmSource?: Maybe<Scalars['String']>;
  utmMedium?: Maybe<Scalars['String']>;
  utmCampaign?: Maybe<Scalars['String']>;
  utmTerm?: Maybe<Scalars['String']>;
  utmContent?: Maybe<Scalars['String']>;
  hubspotutk?: Maybe<Scalars['String']>;
};

export type GraphQLRemoveMemberPayload = {
  __typename?: 'RemoveMemberPayload';
  removedMemberId: Scalars['ID'];
};

export type GraphQLDeleteAccountPayload = {
  __typename?: 'DeleteAccountPayload';
  deletedUserId: Scalars['ID'];
};

export type GraphQLRemoveMemberInput = {
  memberId: Scalars['ID'];
};

export type GraphQLSetUserAnalyticsInput = {
  landingPage?: Maybe<Scalars['String']>;
  conversionPage?: Maybe<Scalars['String']>;
  referrer?: Maybe<Scalars['String']>;
  gclid?: Maybe<Scalars['String']>;
  utmSource?: Maybe<Scalars['String']>;
  utmMedium?: Maybe<Scalars['String']>;
  utmCampaign?: Maybe<Scalars['String']>;
  utmTerm?: Maybe<Scalars['String']>;
  utmContent?: Maybe<Scalars['String']>;
  hubspotutk?: Maybe<Scalars['String']>;
};

export type GraphQLUpdateProfileInput = {
  name?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
  jobRole?: Maybe<GraphQLProfileJobRole>;
};

export enum GraphQLProfileJobRole {
  DeveloperEngineering = 'DEVELOPER_ENGINEERING',
  EditorialContent = 'EDITORIAL_CONTENT',
  Management = 'MANAGEMENT',
  Procurement = 'PROCUREMENT',
  ProductManagement = 'PRODUCT_MANAGEMENT',
  ProjectManagement = 'PROJECT_MANAGEMENT',
  Sales = 'SALES',
  SecurityLegal = 'SECURITY_LEGAL',
  Other = 'OTHER'
}

export type GraphQLCreateUserInput = {
  gcms?: Maybe<Scalars['String']>;
};

export type GraphQLDeleteAccountInput = {
  churnQuestions?: Maybe<Scalars['JSON']>;
};

export enum GraphQLViewGroupType {
  Custom = 'CUSTOM',
  System = 'SYSTEM',
  UserCreated = 'USER_CREATED'
}

export enum GraphQLViewGroupContentType {
  Default = 'DEFAULT',
  Asset = 'ASSET'
}

export type GraphQLViewGroup = {
  __typename?: 'ViewGroup';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  environment: GraphQLEnvironment;
  type: GraphQLViewGroupType;
  contentType: GraphQLViewGroupContentType;
  position: Scalars['Int'];
  createdBy?: Maybe<GraphQLMember>;
  contentViews: Array<GraphQLContentView>;
};


export type GraphQLViewGroupContentViewsArgs = {
  filter?: Maybe<GraphQLContentViewFilterInput>;
};

export type GraphQLCreateViewGroupPayload = {
  __typename?: 'CreateViewGroupPayload';
  createdViewGroup: GraphQLViewGroup;
};

export type GraphQLUpdateViewGroupPayload = {
  __typename?: 'UpdateViewGroupPayload';
  updatedViewGroup: GraphQLViewGroup;
};

export type GraphQLDeleteViewGroupPayload = {
  __typename?: 'DeleteViewGroupPayload';
  deletedViewGroupId: Scalars['ID'];
};

export type GraphQLMoveViewGroupPayload = {
  __typename?: 'MoveViewGroupPayload';
  movedViewGroups: Array<GraphQLViewGroup>;
};

export type GraphQLCreateViewGroupInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<GraphQLViewGroupContentType>;
  environmentId: Scalars['ID'];
};

export type GraphQLUpdateViewGroupInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type GraphQLDeleteViewGroupInput = {
  id: Scalars['ID'];
};

export type GraphQLMoveViewGroupInput = {
  id: Scalars['ID'];
  position: Scalars['Int'];
};

export type GraphQLWebhook = {
  __typename?: 'Webhook';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  headers: Scalars['JSON'];
  isActive: Scalars['Boolean'];
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
  includePayload: Scalars['Boolean'];
  /** Logs when the webhooks where called */
  logs: Array<GraphQLWebhookLog>;
};

export type GraphQLWebhookLog = {
  __typename?: 'WebhookLog';
  id: Scalars['String'];
  /** Duration the request call took in milliseconds */
  duration: Scalars['Float'];
  /** Time when the webhook was called */
  calledAt: Scalars['DateTime'];
  /** Body that was send as the payload */
  requestBody: Scalars['JSON'];
  /** Body that was returned from the webhook */
  responseBody?: Maybe<Scalars['String']>;
  /** Status code of the response */
  responseStatusCode: Scalars['Int'];
  /** Headers of the response */
  responseHeaders?: Maybe<Scalars['JSON']>;
};

export type GraphQLCreateWebhookPayload = {
  __typename?: 'CreateWebhookPayload';
  createdWebhook: GraphQLWebhook;
};

export type GraphQLUpdateWebhookPayload = {
  __typename?: 'UpdateWebhookPayload';
  updatedWebhook: GraphQLWebhook;
};

export type GraphQLDeleteWebhookPayload = {
  __typename?: 'DeleteWebhookPayload';
  deletedWebhookId: Scalars['ID'];
};

/** Defines the type of the trigger */
export enum GraphQLWebhookTriggerType {
  ContentModel = 'CONTENT_MODEL'
}

/**
 * Defines which operation will trigger the webhook.
 * Some operations rely on the type of stage. E.g. on a
 * publishing stage, the webhook will only be triggered for
 * PUBLISH and UNPUBLISH events. On other stages, only
 * CREATE, UPDATE and DELETE are triggering the webhook.
 */
export enum GraphQLWebhookTriggerAction {
  Create = 'CREATE',
  Update = 'UPDATE',
  Delete = 'DELETE',
  Publish = 'PUBLISH',
  Unpublish = 'UNPUBLISH'
}

export type GraphQLCreateWebhookInput = {
  environmentId: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  headers?: Maybe<Scalars['JSON']>;
  isActive: Scalars['Boolean'];
  includePayload: Scalars['Boolean'];
  /**
   * Pass an empty array for all existing models.
   * This will also setup the webook for models
   * created in the future
   */
  models: Array<Scalars['ID']>;
  /**
   * Pass an empty array for all existing stages.
   * This will also setup the webook for stages
   * created in the future
   */
  stages: Array<Scalars['ID']>;
  triggerType: GraphQLWebhookTriggerType;
  triggerActions: Array<GraphQLWebhookTriggerAction>;
};

export type GraphQLUpdateWebhookInput = {
  webhookId: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  headers?: Maybe<Scalars['JSON']>;
  url?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  includePayload?: Maybe<Scalars['Boolean']>;
  stages?: Maybe<Array<Scalars['ID']>>;
  models?: Maybe<Array<Scalars['ID']>>;
  triggerType?: Maybe<GraphQLWebhookTriggerType>;
  triggerActions?: Maybe<Array<GraphQLWebhookTriggerAction>>;
};

export type GraphQLDeleteWebhookInput = {
  webhookId: Scalars['ID'];
};

export enum GraphQLAvailableExtensionSrcType {
  Inline = 'INLINE',
  Sdk = 'SDK'
}

export enum GraphQLAvailableExtensionPermissionAction {
  Input = 'INPUT',
  Form = 'FORM',
  Api = 'API'
}

export enum GraphQLExtensionFieldType {
  Id = 'ID',
  String = 'STRING',
  Richtext = 'RICHTEXT',
  Int = 'INT',
  Float = 'FLOAT',
  Boolean = 'BOOLEAN',
  Json = 'JSON',
  Datetime = 'DATETIME',
  Date = 'DATE',
  Location = 'LOCATION',
  Color = 'COLOR',
  Remote = 'REMOTE',
  Enumeration = 'ENUMERATION',
  Relation = 'RELATION',
  Asset = 'ASSET',
  Union = 'UNION'
}

export type GraphQLExtensionSrcType = {
  __typename?: 'ExtensionSrcType';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  type: GraphQLAvailableExtensionSrcType;
};

export type GraphQLAvailableExtensionPermission = {
  __typename?: 'AvailableExtensionPermission';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  name: GraphQLAvailableExtensionPermissionAction;
};

export type GraphQLIExtension = {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  createdBy?: Maybe<GraphQLMember>;
  updatedBy?: Maybe<GraphQLMember>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** The type indicating where the source for the extension will be obtained from */
  srcType: GraphQLExtensionSrcType;
  /** Location for the source if the source type is an external one */
  src: Scalars['String'];
  environment: GraphQLEnvironment;
  config: Scalars['JSON'];
  isActive: Scalars['Boolean'];
  meta?: Maybe<Scalars['JSON']>;
  neededPermissions: Array<GraphQLAvailableExtensionPermission>;
};

export type GraphQLFieldExtension = GraphQLIExtension & {
  __typename?: 'FieldExtension';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  createdBy?: Maybe<GraphQLMember>;
  updatedBy?: Maybe<GraphQLMember>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** The type indicating where the source for the extension will be obtained from */
  srcType: GraphQLExtensionSrcType;
  /** Location for the source if the source type is an external one */
  src: Scalars['String'];
  environment: GraphQLEnvironment;
  config: Scalars['JSON'];
  isActive: Scalars['Boolean'];
  meta?: Maybe<Scalars['JSON']>;
  neededPermissions: Array<GraphQLAvailableExtensionPermission>;
  fieldType: GraphQLExtensionFieldType;
  hasFormRenderer: Scalars['Boolean'];
  hasListRenderer: Scalars['Boolean'];
  hasTableRenderer: Scalars['Boolean'];
};

export type GraphQLCreateFieldExtensionPayload = {
  __typename?: 'CreateFieldExtensionPayload';
  createdExtension: GraphQLFieldExtension;
};

export type GraphQLUpdateFieldExtensionPayload = {
  __typename?: 'UpdateFieldExtensionPayload';
  updatedExtension: GraphQLFieldExtension;
};

export type GraphQLDeleteExtensionPayload = {
  __typename?: 'DeleteExtensionPayload';
  deletedExtensionId: Scalars['ID'];
};

export type GraphQLCreateFieldExtensionInput = {
  environmentId: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  srcTypeId: Scalars['ID'];
  src: Scalars['String'];
  config: Scalars['JSON'];
  isActive: Scalars['Boolean'];
  meta?: Maybe<Scalars['JSON']>;
  fieldType: GraphQLExtensionFieldType;
  hasFormRenderer: Scalars['Boolean'];
  hasListRenderer: Scalars['Boolean'];
  hasTableRenderer: Scalars['Boolean'];
  neededPermissions?: Maybe<Array<Scalars['ID']>>;
};

export type GraphQLUpdateFieldExtensionInput = {
  extensionId: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  srcTypeId?: Maybe<Scalars['ID']>;
  src?: Maybe<Scalars['String']>;
  config?: Maybe<Scalars['JSON']>;
  isActive?: Maybe<Scalars['Boolean']>;
  meta?: Maybe<Scalars['JSON']>;
  fieldType?: Maybe<GraphQLExtensionFieldType>;
  hasFormRenderer?: Maybe<Scalars['Boolean']>;
  hasListRenderer?: Maybe<Scalars['Boolean']>;
  hasTableRenderer?: Maybe<Scalars['Boolean']>;
  neededPermissions?: Maybe<Array<GraphQLAvailableExtensionPermissionAction>>;
};

export type GraphQLDeleteExtensionInput = {
  extensionId: Scalars['ID'];
};

export type GraphQLEnumerationValue = {
  __typename?: 'EnumerationValue';
  id: Scalars['ID'];
  apiId: Scalars['String'];
  displayName: Scalars['String'];
};

export type GraphQLEnumeration = {
  __typename?: 'Enumeration';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  apiId: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  environment: GraphQLEnvironment;
  values: Array<GraphQLEnumerationValue>;
  isSystem: Scalars['Boolean'];
};

export type GraphQLCreateEnumerationInput = {
  environmentId: Scalars['ID'];
  apiId: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  values: Array<GraphQLEnumerationValueCreateInput>;
};

export type GraphQLDeleteEnumerationInput = {
  id: Scalars['ID'];
};

export type GraphQLUpdateEnumerationInput = {
  id: Scalars['ID'];
  /**
   * New Api identifier to use,
   * will impact Content API
   */
  apiId?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** List of values to create */
  valuesToCreate?: Maybe<Array<GraphQLEnumerationValueCreateInput>>;
  /** List of existing values to update */
  valuesToUpdate?: Maybe<Array<GraphQLEnumerationValueUpdateInput>>;
  /** List of value IDs to delete */
  valuesToDelete?: Maybe<Array<Scalars['ID']>>;
};

export type GraphQLEnumerationValueCreateInput = {
  apiId: Scalars['String'];
  displayName: Scalars['String'];
};

export type GraphQLEnumerationValueUpdateInput = {
  id: Scalars['ID'];
  /** Update enumeration value API identifier */
  apiId?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
};

export type GraphQLIRequireableField = {
  isRequired: Scalars['Boolean'];
};

export type GraphQLIUniqueableField = {
  isUnique: Scalars['Boolean'];
};

export type GraphQLILocalizableField = {
  isLocalized: Scalars['Boolean'];
};

export type GraphQLITitleableField = {
  isTitle: Scalars['Boolean'];
};

export type GraphQLFieldValidationFloatRange = {
  __typename?: 'FieldValidationFloatRange';
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  errorMessage?: Maybe<Scalars['String']>;
};

export type GraphQLFieldValidationRange = {
  __typename?: 'FieldValidationRange';
  min?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
  errorMessage?: Maybe<Scalars['String']>;
};

export type GraphQLFieldValidationRegEx = {
  __typename?: 'FieldValidationRegEx';
  regex?: Maybe<Scalars['String']>;
  flags?: Maybe<Array<Maybe<Scalars['String']>>>;
  errorMessage?: Maybe<Scalars['String']>;
};

export type GraphQLStringFieldValidations = {
  __typename?: 'StringFieldValidations';
  characters?: Maybe<GraphQLFieldValidationRange>;
  listItemCount?: Maybe<GraphQLFieldValidationRange>;
  matches?: Maybe<GraphQLFieldValidationRegEx>;
  notMatches?: Maybe<GraphQLFieldValidationRegEx>;
};

export type GraphQLIntFieldValidations = {
  __typename?: 'IntFieldValidations';
  range?: Maybe<GraphQLFieldValidationRange>;
  listItemCount?: Maybe<GraphQLFieldValidationRange>;
};

export type GraphQLFloatFieldValidations = {
  __typename?: 'FloatFieldValidations';
  range?: Maybe<GraphQLFieldValidationFloatRange>;
  listItemCount?: Maybe<GraphQLFieldValidationRange>;
};

export type GraphQLSimpleFieldValidations = GraphQLStringFieldValidations | GraphQLIntFieldValidations | GraphQLFloatFieldValidations;

export type GraphQLIField = {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  apiId: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isSystem: Scalars['Boolean'];
  isList: Scalars['Boolean'];
  position: Scalars['Int'];
  isHidden: Scalars['Boolean'];
  model: GraphQLIModel;
  tableConfig: GraphQLFieldConfig;
  formConfig: GraphQLFieldConfig;
  extensions?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
};

/** Field types */
export enum GraphQLSimpleFieldType {
  Id = 'ID',
  String = 'STRING',
  Richtext = 'RICHTEXT',
  Int = 'INT',
  Float = 'FLOAT',
  Boolean = 'BOOLEAN',
  Json = 'JSON',
  Datetime = 'DATETIME',
  Date = 'DATE',
  Location = 'LOCATION',
  Color = 'COLOR'
}

export enum GraphQLRemoteFieldType {
  Remote = 'REMOTE'
}

export enum GraphQLEnumerableFieldType {
  Enumeration = 'ENUMERATION'
}

export enum GraphQLRelationalFieldType {
  Relation = 'RELATION',
  Asset = 'ASSET'
}

export enum GraphQLUnionFieldType {
  Union = 'UNION'
}

export type GraphQLSimpleField = GraphQLIField & GraphQLIRequireableField & GraphQLIUniqueableField & GraphQLILocalizableField & GraphQLITitleableField & {
  __typename?: 'SimpleField';
  id: Scalars['ID'];
  type: GraphQLSimpleFieldType;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  apiId: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isSystem: Scalars['Boolean'];
  isList: Scalars['Boolean'];
  isRequired: Scalars['Boolean'];
  isUnique: Scalars['Boolean'];
  position: Scalars['Int'];
  isHidden: Scalars['Boolean'];
  isLocalized: Scalars['Boolean'];
  initialValue?: Maybe<Scalars['String']>;
  model: GraphQLIModel;
  isTitle: Scalars['Boolean'];
  tableConfig: GraphQLFieldConfig;
  formConfig: GraphQLFieldConfig;
  extensions?: Maybe<Scalars['JSON']>;
  validations?: Maybe<GraphQLSimpleFieldValidations>;
  meta?: Maybe<Scalars['JSON']>;
  embedsEnabled?: Maybe<Scalars['Boolean']>;
};

export type GraphQLRemoteTypeDefinition = {
  __typename?: 'RemoteTypeDefinition';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  apiId: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  definition: Scalars['String'];
};

export type GraphQLRemoteFieldConfig = {
  __typename?: 'RemoteFieldConfig';
  returnType: Scalars['String'];
  payloadFields: Array<Maybe<GraphQLSimpleField>>;
  url: Scalars['String'];
  method: Scalars['String'];
  headers?: Maybe<Scalars['JSON']>;
};

export type GraphQLRemoteField = GraphQLIField & {
  __typename?: 'RemoteField';
  id: Scalars['ID'];
  type: GraphQLRemoteFieldType;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  apiId: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isSystem: Scalars['Boolean'];
  position: Scalars['Int'];
  isHidden: Scalars['Boolean'];
  isList: Scalars['Boolean'];
  model: GraphQLIModel;
  tableConfig: GraphQLFieldConfig;
  formConfig: GraphQLFieldConfig;
  extensions?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
  remoteConfig: GraphQLRemoteFieldConfig;
};

export type GraphQLEnumerableField = GraphQLIField & GraphQLIRequireableField & GraphQLIUniqueableField & GraphQLILocalizableField & GraphQLITitleableField & {
  __typename?: 'EnumerableField';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  type: GraphQLEnumerableFieldType;
  apiId: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isSystem: Scalars['Boolean'];
  isList: Scalars['Boolean'];
  isRequired: Scalars['Boolean'];
  isUnique: Scalars['Boolean'];
  position: Scalars['Int'];
  isHidden: Scalars['Boolean'];
  isLocalized: Scalars['Boolean'];
  initialValue?: Maybe<GraphQLEnumerationValue>;
  model: GraphQLIModel;
  isTitle: Scalars['Boolean'];
  tableConfig: GraphQLFieldConfig;
  formConfig: GraphQLFieldConfig;
  enumeration: GraphQLEnumeration;
  extensions?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
};

export type GraphQLRelationalField = GraphQLIField & GraphQLIRequireableField & {
  __typename?: 'RelationalField';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  type: GraphQLRelationalFieldType;
  apiId: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isSystem: Scalars['Boolean'];
  isList: Scalars['Boolean'];
  isRequired: Scalars['Boolean'];
  position: Scalars['Int'];
  isHidden: Scalars['Boolean'];
  model: GraphQLIModel;
  tableConfig: GraphQLFieldConfig;
  formConfig: GraphQLFieldConfig;
  relatedModel: GraphQLIModel;
  relatedField: GraphQLRelationalField;
  extensions?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
};

export type GraphQLUnionField = GraphQLIField & GraphQLIUnionField & {
  __typename?: 'UnionField';
  id: Scalars['ID'];
  type: GraphQLUnionFieldType;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  apiId: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isSystem: Scalars['Boolean'];
  isList: Scalars['Boolean'];
  position: Scalars['Int'];
  isHidden: Scalars['Boolean'];
  model: GraphQLIModel;
  tableConfig: GraphQLFieldConfig;
  formConfig: GraphQLFieldConfig;
  /** True if this field is the reverse side of the initally created union field */
  isMemberType: Scalars['Boolean'];
  union: GraphQLUnion;
  extensions?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
};

export type GraphQLUnion = {
  __typename?: 'Union';
  id: Scalars['ID'];
  apiId: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  memberTypes: Array<GraphQLUnionField>;
  field: GraphQLUnionField;
};

export type GraphQLIUnionField = {
  /** True if this field is the reverse side of the initally created union field */
  isMemberType: Scalars['Boolean'];
  union: GraphQLUnion;
};

export type GraphQLFieldConfig = {
  __typename?: 'FieldConfig';
  config: Scalars['JSON'];
  id: Scalars['String'];
  renderer: Scalars['String'];
};

export type GraphQLMoveFieldPayload = {
  __typename?: 'MoveFieldPayload';
  movedFields: Array<GraphQLIField>;
};

export type GraphQLFieldValidationIntRangeInput = {
  min?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
  errorMessage?: Maybe<Scalars['String']>;
};

export type GraphQLFieldValidationFloatRangeInput = {
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  errorMessage?: Maybe<Scalars['String']>;
};

export type GraphQLFieldValidationRegExInput = {
  regex?: Maybe<Scalars['String']>;
  flags?: Maybe<Array<Scalars['String']>>;
  errorMessage?: Maybe<Scalars['String']>;
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

export type GraphQLUpdateSimpleFieldInput = {
  id: Scalars['ID'];
  apiId?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isRequired?: Maybe<Scalars['Boolean']>;
  isUnique?: Maybe<Scalars['Boolean']>;
  isList?: Maybe<Scalars['Boolean']>;
  isHidden?: Maybe<Scalars['Boolean']>;
  isLocalized?: Maybe<Scalars['Boolean']>;
  isTitle?: Maybe<Scalars['Boolean']>;
  initialValue?: Maybe<Scalars['String']>;
  migrationValue?: Maybe<Scalars['String']>;
  formConfig?: Maybe<GraphQLFieldConfigInput>;
  tableConfig?: Maybe<GraphQLFieldConfigInput>;
  extensions?: Maybe<Scalars['JSON']>;
  validations?: Maybe<GraphQLSimpleFieldValidationsInput>;
  meta?: Maybe<Scalars['JSON']>;
  embedsEnabled?: Maybe<Scalars['Boolean']>;
};

export type GraphQLUpdateEnumerableFieldInput = {
  id: Scalars['ID'];
  apiId?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isRequired?: Maybe<Scalars['Boolean']>;
  isList?: Maybe<Scalars['Boolean']>;
  isUnique?: Maybe<Scalars['Boolean']>;
  isHidden?: Maybe<Scalars['Boolean']>;
  isLocalized?: Maybe<Scalars['Boolean']>;
  isTitle?: Maybe<Scalars['Boolean']>;
  initialValue?: Maybe<Scalars['String']>;
  migrationValue?: Maybe<Scalars['String']>;
  formConfig?: Maybe<GraphQLFieldConfigInput>;
  tableConfig?: Maybe<GraphQLFieldConfigInput>;
  extensions?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
};

export type GraphQLUpdateRelationalFieldInput = {
  id: Scalars['ID'];
  apiId?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isList?: Maybe<Scalars['Boolean']>;
  isHidden?: Maybe<Scalars['Boolean']>;
  isUnidirectional?: Maybe<Scalars['Boolean']>;
  /**
   * Marks the field as required.
   * Note: This is only supported for RelationFieldType ASSET!
   */
  isRequired?: Maybe<Scalars['Boolean']>;
  tableConfig?: Maybe<GraphQLFieldConfigInput>;
  formConfig?: Maybe<GraphQLFieldConfigInput>;
  extensions?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
};

export type GraphQLCreateMemberFieldInput = {
  /** ID of member model to add */
  modelId: Scalars['ID'];
  apiId: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isHidden?: Maybe<Scalars['Boolean']>;
  tableConfig?: Maybe<GraphQLFieldConfigInput>;
  formConfig?: Maybe<GraphQLFieldConfigInput>;
  extensions?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
};

export type GraphQLUpdateUnionInput = {
  apiId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  /** Models and member fields to add */
  membersToAdd?: Maybe<Array<GraphQLCreateMemberFieldInput>>;
  /** Models to remove from union (accepts Model ID) */
  membersToRemove?: Maybe<Array<Scalars['ID']>>;
};

export type GraphQLUpdateUnionFieldInput = {
  id: Scalars['ID'];
  union?: Maybe<GraphQLUpdateUnionInput>;
  apiId?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isHidden?: Maybe<Scalars['Boolean']>;
  tableConfig?: Maybe<GraphQLFieldConfigInput>;
  formConfig?: Maybe<GraphQLFieldConfigInput>;
  extensions?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
};

export type GraphQLFieldConfigInput = {
  renderer: Scalars['String'];
  config: Scalars['JSON'];
};

export type GraphQLFieldConfigUpdateInput = {
  renderer?: Maybe<Scalars['String']>;
  config?: Maybe<Scalars['JSON']>;
};

export type GraphQLCreateSimpleFieldInput = {
  modelId: Scalars['ID'];
  apiId: Scalars['String'];
  type: GraphQLSimpleFieldType;
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isRequired: Scalars['Boolean'];
  isUnique: Scalars['Boolean'];
  isList: Scalars['Boolean'];
  isLocalized: Scalars['Boolean'];
  isHidden?: Maybe<Scalars['Boolean']>;
  isTitle?: Maybe<Scalars['Boolean']>;
  initialValue?: Maybe<Scalars['String']>;
  migrationValue?: Maybe<Scalars['String']>;
  formConfig?: Maybe<GraphQLFieldConfigInput>;
  tableConfig?: Maybe<GraphQLFieldConfigInput>;
  extensions?: Maybe<Scalars['JSON']>;
  validations?: Maybe<GraphQLSimpleFieldValidationsInput>;
  meta?: Maybe<Scalars['JSON']>;
  position?: Maybe<Scalars['Int']>;
  embedsEnabled?: Maybe<Scalars['Boolean']>;
};

export type GraphQLRemoteFieldConfigInput = {
  /**
   * GraphQL type the remote field should return.
   *
   * Can be any built-in scalar
   *   - ID
   *   - String
   *   - Boolean
   *   - Int
   *   - Float
   *
   * or any GraphCMS custom scalar
   *   - Long
   *   - Json
   *   - DateTime
   *   - Date
   *
   * or any GraphCMS type
   *   - Color
   *   - Location
   *   - RichText
   *
   * or a remote type definition
   */
  returnType: Scalars['String'];
  payloadFieldIds: Array<Scalars['ID']>;
  url: Scalars['String'];
  method: Scalars['String'];
  headers?: Maybe<Scalars['JSON']>;
  requestParamFieldApiIds?: Maybe<Array<Scalars['String']>>;
};

export type GraphQLBatchMigrationRemoteFieldConfigInput = {
  /**
   * GraphQL type the remote field should return.
   *
   * Can be any built-in scalar
   *   - ID
   *   - String
   *   - Boolean
   *   - Int
   *   - Float
   *
   * or any GraphCMS custom scalar
   *   - Long
   *   - Json
   *   - DateTime
   *   - Date
   *
   * or any GraphCMS type
   *   - Color
   *   - Location
   *   - RichText
   *
   * or a remote type definition
   */
  returnType: Scalars['String'];
  url: Scalars['String'];
  method: Scalars['String'];
  headers?: Maybe<Scalars['JSON']>;
  payloadFieldApiIds?: Maybe<Array<Scalars['String']>>;
};

export type GraphQLCreateRemoteFieldInput = {
  modelId: Scalars['ID'];
  apiId: Scalars['String'];
  type: GraphQLRemoteFieldType;
  remoteConfig: GraphQLRemoteFieldConfigInput;
  isList: Scalars['Boolean'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isHidden?: Maybe<Scalars['Boolean']>;
  formConfig?: Maybe<GraphQLFieldConfigInput>;
  tableConfig?: Maybe<GraphQLFieldConfigInput>;
  extensions?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
};

export type GraphQLCreateEnumerableFieldInput = {
  modelId: Scalars['ID'];
  enumerationId: Scalars['ID'];
  type: GraphQLEnumerableFieldType;
  apiId: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isRequired: Scalars['Boolean'];
  isList: Scalars['Boolean'];
  isUnique: Scalars['Boolean'];
  isHidden?: Maybe<Scalars['Boolean']>;
  isLocalized?: Maybe<Scalars['Boolean']>;
  isTitle?: Maybe<Scalars['Boolean']>;
  initialValue?: Maybe<Scalars['String']>;
  migrationValue?: Maybe<Scalars['String']>;
  formConfig?: Maybe<GraphQLFieldConfigInput>;
  tableConfig?: Maybe<GraphQLFieldConfigInput>;
  extensions?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
  position?: Maybe<Scalars['Int']>;
};

export type GraphQLCreateReverseField = {
  apiId: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isList: Scalars['Boolean'];
  isHidden?: Maybe<Scalars['Boolean']>;
  tableConfig?: Maybe<GraphQLFieldConfigInput>;
  formConfig?: Maybe<GraphQLFieldConfigInput>;
  extensions?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
};

export type GraphQLCreateReverseRelationSide = {
  modelId: Scalars['ID'];
  field?: Maybe<GraphQLCreateReverseField>;
};

export type GraphQLCreateRelationalFieldInput = {
  modelId: Scalars['ID'];
  type: GraphQLRelationalFieldType;
  relationApiId?: Maybe<Scalars['String']>;
  apiId: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isList: Scalars['Boolean'];
  isHidden?: Maybe<Scalars['Boolean']>;
  /**
   * Marks the field as required.
   * Note: This is only supported for RelationFieldType ASSET!
   */
  isRequired?: Maybe<Scalars['Boolean']>;
  reverseSide: GraphQLCreateReverseRelationSide;
  tableConfig?: Maybe<GraphQLFieldConfigInput>;
  formConfig?: Maybe<GraphQLFieldConfigInput>;
  extensions?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
  position?: Maybe<Scalars['Int']>;
};

export type GraphQLCreateUnionInput = {
  apiId: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  /** IDs of models to add to union */
  modelIds: Array<Scalars['ID']>;
};

export type GraphQLCreateUnionFieldInput = {
  modelId: Scalars['ID'];
  type: GraphQLUnionFieldType;
  union: GraphQLCreateUnionInput;
  apiId: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isList: Scalars['Boolean'];
  isHidden?: Maybe<Scalars['Boolean']>;
  reverseSide: GraphQLCreateReverseField;
  tableConfig?: Maybe<GraphQLFieldConfigInput>;
  formConfig?: Maybe<GraphQLFieldConfigInput>;
  extensions?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
  position?: Maybe<Scalars['Int']>;
};

export type GraphQLMoveFieldInput = {
  id: Scalars['ID'];
  position: Scalars['Int'];
};

export type GraphQLDeleteFieldInput = {
  id: Scalars['ID'];
};

export type GraphQLIModel = {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  apiId: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isSystem: Scalars['Boolean'];
  apiIdPlural: Scalars['String'];
  isLocalized: Scalars['Boolean'];
  titleFields: Array<GraphQLIField>;
  fields: Array<GraphQLIField>;
  environment: GraphQLEnvironment;
  contentViews: Array<GraphQLContentView>;
  /** Model has at least one document */
  hasContent: Scalars['Boolean'];
  isVersioned: Scalars['Boolean'];
  previewURLs: Array<GraphQLPreviewUrl>;
};


export type GraphQLIModelFieldsArgs = {
  includeHiddenFields?: Maybe<Scalars['Boolean']>;
};


export type GraphQLIModelContentViewsArgs = {
  includeSystemContentViews?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<GraphQLContentViewFilterInput>;
};

export type GraphQLModel = GraphQLIModel & {
  __typename?: 'Model';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  apiId: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isSystem: Scalars['Boolean'];
  apiIdPlural: Scalars['String'];
  /** Is true when at least one field is marked as localized */
  isLocalized: Scalars['Boolean'];
  titleFields: Array<GraphQLIField>;
  fields: Array<GraphQLIField>;
  environment: GraphQLEnvironment;
  contentViews: Array<GraphQLContentView>;
  /** Model has at least one document */
  hasContent: Scalars['Boolean'];
  isVersioned: Scalars['Boolean'];
  previewURLs: Array<GraphQLPreviewUrl>;
};


export type GraphQLModelFieldsArgs = {
  includeHiddenFields?: Maybe<Scalars['Boolean']>;
};


export type GraphQLModelContentViewsArgs = {
  includeSystemContentViews?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<GraphQLContentViewFilterInput>;
};

export type GraphQLAssetModel = GraphQLIModel & {
  __typename?: 'AssetModel';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  apiId: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isSystem: Scalars['Boolean'];
  apiIdPlural: Scalars['String'];
  isLocalized: Scalars['Boolean'];
  titleFields: Array<GraphQLIField>;
  fields: Array<GraphQLIField>;
  environment: GraphQLEnvironment;
  contentViews: Array<GraphQLContentView>;
  /** Model has at least one document */
  hasContent: Scalars['Boolean'];
  isVersioned: Scalars['Boolean'];
  previewURLs: Array<GraphQLPreviewUrl>;
};


export type GraphQLAssetModelFieldsArgs = {
  includeHiddenFields?: Maybe<Scalars['Boolean']>;
};


export type GraphQLAssetModelContentViewsArgs = {
  includeSystemContentViews?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<GraphQLContentViewFilterInput>;
};

export type GraphQLUserModel = GraphQLIModel & {
  __typename?: 'UserModel';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  apiId: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isSystem: Scalars['Boolean'];
  apiIdPlural: Scalars['String'];
  isLocalized: Scalars['Boolean'];
  titleFields: Array<GraphQLIField>;
  fields: Array<GraphQLIField>;
  environment: GraphQLEnvironment;
  contentViews: Array<GraphQLContentView>;
  /** Model has at least one document */
  hasContent: Scalars['Boolean'];
  isVersioned: Scalars['Boolean'];
  previewURLs: Array<GraphQLPreviewUrl>;
};


export type GraphQLUserModelFieldsArgs = {
  includeHiddenFields?: Maybe<Scalars['Boolean']>;
};


export type GraphQLUserModelContentViewsArgs = {
  includeSystemContentViews?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<GraphQLContentViewFilterInput>;
};

export type GraphQLCreateModelInput = {
  environmentId: Scalars['ID'];
  apiId: Scalars['String'];
  apiIdPlural: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  previewURLs?: Maybe<Array<GraphQLPreviewUrlInput>>;
};

export type GraphQLUpdateModelInput = {
  id: Scalars['ID'];
  /**
   * Rename singular API ID to
   * specified value
   */
  apiId?: Maybe<Scalars['String']>;
  /**
   * Rename plural API ID to
   * specified value
   */
  apiIdPlural?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  previewURLs?: Maybe<Array<GraphQLPreviewUrlInput>>;
};

export type GraphQLDeleteModelInput = {
  id: Scalars['ID'];
};

export type GraphQLPreviewUrlInput = {
  name: Scalars['String'];
  template: Scalars['String'];
};

export type GraphQLPreviewUrl = {
  __typename?: 'PreviewURL';
  name: Scalars['String'];
  template: Scalars['String'];
};

export type GraphQLLocale = {
  __typename?: 'Locale';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  /**
   * Specifies if the locale is used as the
   * default locale which impacts the Content API
   */
  isDefault: Scalars['Boolean'];
  /**
   * Determines how the locale is
   * exposed in the Content API
   */
  apiId: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type GraphQLCreateLocaleInput = {
  environmentId: Scalars['ID'];
  apiId: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type GraphQLUpdateLocaleInput = {
  /** ID of locale to update */
  id: Scalars['ID'];
  /**
   * Mark locale as default,
   * will impact the Content API
   */
  isDefault?: Maybe<Scalars['Boolean']>;
  /**
   * Rename Locale apiId,
   * will impact the Content API
   */
  apiId?: Maybe<Scalars['String']>;
  /**
   * Update the Locale's
   * display name
   */
  displayName?: Maybe<Scalars['String']>;
  /** Update locale description */
  description?: Maybe<Scalars['String']>;
};

export type GraphQLDeleteLocaleInput = {
  /** ID of Locale to delete */
  id: Scalars['ID'];
  /**
   * Delete all localizations for this loclae.
   * This will prevent an exception from
   * being raised if documents were previously
   * localized in this locale
   */
  force?: Maybe<Scalars['Boolean']>;
};

export type GraphQLCreateStageInput = {
  environmentId: Scalars['ID'];
  /**
   * Identifier to be used in
   * Content API Schema
   */
  apiId: Scalars['String'];
  displayName: Scalars['String'];
  /** Color that will be used in the webapp */
  colorPaletteId: GraphQLColorPalette;
  description?: Maybe<Scalars['String']>;
  /**
   * Marks the stage to be default
   * This will impact the Content API
   */
  isDefault?: Maybe<Scalars['Boolean']>;
  /** Allow queries */
  allowQueries?: Maybe<Scalars['Boolean']>;
  position?: Maybe<Scalars['Int']>;
};

export type GraphQLUpdateStageInput = {
  /** ID of stage to update */
  id: Scalars['ID'];
  /** Color that will be used in the webapp */
  colorPaletteId?: Maybe<GraphQLColorPalette>;
  /**
   * Rename Stage apiId,
   * will impact the Content API
   */
  apiId?: Maybe<Scalars['String']>;
  /**
   * Update the Stage
   * display name
   */
  displayName?: Maybe<Scalars['String']>;
  /** Update stage description */
  description?: Maybe<Scalars['String']>;
  /**
   * Update the stage default
   * This will impact the Content API
   */
  isDefault?: Maybe<Scalars['Boolean']>;
  /** Update allowQueries */
  allowQueries?: Maybe<Scalars['Boolean']>;
  position?: Maybe<Scalars['Int']>;
};

export type GraphQLDeleteStageInput = {
  /** ID of Stage to delete */
  id: Scalars['ID'];
  /**
   * Delete all documents in stage.
   * This will prevent an exception from
   * being raised if documents were previously
   * published to this stage
   */
  force?: Maybe<Scalars['Boolean']>;
};

export type GraphQLEnvironmentPermissions = {
  __typename?: 'EnvironmentPermissions';
  /** True if mutations on this stage are allowed */
  allowMutations: Scalars['Boolean'];
};

/** Permissions of an environment */
export type GraphQLEnvironmentPermissionsInput = {
  /** True if mutations on this environment are allowed */
  allowMutations: Scalars['Boolean'];
};

export type GraphQLUpdateEnvironmentInput = {
  /** ID of environment to update */
  id: Scalars['ID'];
  /** Update the environment display name */
  displayName?: Maybe<Scalars['String']>;
  /** Update the environment description */
  description?: Maybe<Scalars['String']>;
  /** Update the permissions of the environment */
  permissions?: Maybe<GraphQLEnvironmentPermissionsInput>;
};

export type GraphQLUpdateEnvironmentPayload = {
  __typename?: 'UpdateEnvironmentPayload';
  updatedEnvironment: GraphQLEnvironment;
};

export type GraphQLQuery = {
  __typename?: 'Query';
  metaInfo: GraphQLMetaInfo;
  viewer: GraphQLIViewer;
  /** @deprecated Use viewer instead */
  _viewer: GraphQLIViewer;
};

export type GraphQLAsyncOperationPayload = {
  __typename?: 'AsyncOperationPayload';
  migration: GraphQLMigration;
};

export type GraphQLCreateEnvironmentInput = {
  /**
   * This will be used in your
   * API endpoint and has to be
   * an all-lowercase alphanumeric
   * string between 1 and 16 characters
   */
  name: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  /**
   * Specify which environment to use
   * as origin
   */
  fromEnvironment: Scalars['ID'];
  /**
   * Allows to create environment
   * with content of origin environment
   */
  withContent?: Maybe<Scalars['Boolean']>;
  /**
   * Allows to create environment
   * with webhooks of the origin environment.
   * By default cloned environments will get the same webhooks that will be initially deactivated.
   */
  withWebhooks?: Scalars['Boolean'];
};

export type GraphQLDeleteEnvironmentInput = {
  id: Scalars['ID'];
};

export type GraphQLCreateEnvironmentPayload = {
  __typename?: 'CreateEnvironmentPayload';
  createdEnvironment: GraphQLEnvironment;
};

export type GraphQLDeleteEnvironmentPayload = {
  __typename?: 'DeleteEnvironmentPayload';
  deletedEnvironmentId: Scalars['ID'];
};

/** Deleting a model. */
export type GraphQLBatchMigrationDeleteModelInput = {
  apiId: Scalars['String'];
};

/** Creating a model. */
export type GraphQLBatchMigrationCreateModelInput = {
  apiId: Scalars['String'];
  apiIdPlural: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

/** Creating a remote type definition */
export type GraphQLBatchMigrationCreateRemoteTypeDefinitionInput = {
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  /**
   * GraphQL type definition in SDL format
   * Can be enum or object type
   */
  definition: Scalars['String'];
};

/** Updating an existing remote type definition */
export type GraphQLBatchMigrationUpdateRemoteTypeDefinitionInput = {
  apiId: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /**
   * GraphQL type definition in SDL format
   * Can be enum or object type
   */
  definition: Scalars['String'];
};

/** Delete an existing remote type definition */
export type GraphQLBatchMigrationDeleteRemoteTypeDefinitionInput = {
  apiId: Scalars['String'];
};

/** Deleting a stage. */
export type GraphQLBatchMigrationDeleteStageInput = {
  apiId: Scalars['String'];
};

/** Updating a stage */
export type GraphQLBatchMigrationUpdateStageInput = {
  apiId: Scalars['String'];
  newApiId?: Maybe<Scalars['String']>;
  color?: Maybe<GraphQLColorPalette>;
  display?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isDefault?: Maybe<Scalars['Boolean']>;
  allowQueries?: Maybe<Scalars['Boolean']>;
  position?: Maybe<Scalars['Int']>;
};

/** Creating a stage. */
export type GraphQLBatchMigrationCreateStageInput = {
  apiId: Scalars['String'];
  displayName: Scalars['String'];
  color: GraphQLColorPalette;
  description?: Maybe<Scalars['String']>;
  isDefault?: Maybe<Scalars['Boolean']>;
  allowQueries?: Maybe<Scalars['Boolean']>;
  position?: Maybe<Scalars['Int']>;
};

/** Updating a model. */
export type GraphQLBatchMigrationUpdateModelInput = {
  apiId: Scalars['String'];
  newApiId?: Maybe<Scalars['String']>;
  apiIdPlural?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

/** Deleting a field. */
export type GraphQLBatchMigrationDeleteFieldInput = {
  apiId: Scalars['String'];
  modelApiId: Scalars['String'];
};

/** Creating a simple field. */
export type GraphQLBatchMigrationCreateSimpleFieldInput = {
  apiId: Scalars['String'];
  modelApiId: Scalars['String'];
  type: GraphQLSimpleFieldType;
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  tableRenderer?: Maybe<Scalars['String']>;
  formRenderer?: Maybe<Scalars['String']>;
  formConfig?: Maybe<Scalars['JSON']>;
  tableConfig?: Maybe<Scalars['JSON']>;
  isList?: Maybe<Scalars['Boolean']>;
  isLocalized?: Maybe<Scalars['Boolean']>;
  isRequired?: Maybe<Scalars['Boolean']>;
  isUnique?: Maybe<Scalars['Boolean']>;
  isHidden?: Maybe<Scalars['Boolean']>;
  isTitle?: Maybe<Scalars['Boolean']>;
  position?: Maybe<Scalars['Int']>;
  validations?: Maybe<GraphQLSimpleFieldValidationsInput>;
  embedsEnabled?: Maybe<Scalars['Boolean']>;
  migrationValue?: Maybe<Scalars['String']>;
};

/** Creating a remote field. */
export type GraphQLBatchMigrationCreateRemoteFieldInput = {
  apiId: Scalars['String'];
  modelApiId: Scalars['String'];
  type: GraphQLRemoteFieldType;
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  tableRenderer?: Maybe<Scalars['String']>;
  formRenderer?: Maybe<Scalars['String']>;
  isList?: Maybe<Scalars['Boolean']>;
  isHidden?: Maybe<Scalars['Boolean']>;
  position?: Maybe<Scalars['Int']>;
  remoteConfig: GraphQLBatchMigrationRemoteFieldConfigInput;
};

/** Creating an enumerable field. */
export type GraphQLBatchMigrationCreateEnumerableFieldInput = {
  apiId: Scalars['String'];
  modelApiId: Scalars['String'];
  enumerationApiId: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  tableRenderer?: Maybe<Scalars['String']>;
  formRenderer?: Maybe<Scalars['String']>;
  isList?: Maybe<Scalars['Boolean']>;
  isLocalized?: Maybe<Scalars['Boolean']>;
  isRequired?: Maybe<Scalars['Boolean']>;
  isUnique?: Maybe<Scalars['Boolean']>;
  isHidden?: Maybe<Scalars['Boolean']>;
  isTitle?: Maybe<Scalars['Boolean']>;
  position?: Maybe<Scalars['Int']>;
};

/** updating a union field */
export type GraphQLBatchMigrationUpdateUnionFieldInput = {
  apiId: Scalars['String'];
  newApiId?: Maybe<Scalars['String']>;
  modelApiId: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  reverseField: GraphQLBatchMigrationUpdateReverseUnionFieldInput;
};

/** Creating a union field */
export type GraphQLBatchMigrationCreateUnionFieldInput = {
  apiId: Scalars['String'];
  modelApiId: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  tableRenderer?: Maybe<Scalars['String']>;
  formRenderer?: Maybe<Scalars['String']>;
  isList?: Maybe<Scalars['Boolean']>;
  isHidden?: Maybe<Scalars['Boolean']>;
  reverseField: GraphQLBatchMigrationCreateReverseUnionFieldInput;
};

/** reverse field args */
export type GraphQLBatchMigrationCreateReverseUnionFieldInput = {
  apiId: Scalars['String'];
  modelApiIds: Array<Scalars['String']>;
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isList?: Maybe<Scalars['Boolean']>;
  isHidden?: Maybe<Scalars['Boolean']>;
};

/** reverse field args */
export type GraphQLBatchMigrationUpdateReverseUnionFieldInput = {
  modelApiIds: Array<Scalars['String']>;
};

/** Creating a relational field */
export type GraphQLBatchMigrationCreateRelationalFieldInput = {
  apiId: Scalars['String'];
  modelApiId: Scalars['String'];
  type: GraphQLRelationalFieldType;
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  tableRenderer?: Maybe<Scalars['String']>;
  formRenderer?: Maybe<Scalars['String']>;
  isList?: Maybe<Scalars['Boolean']>;
  /**
   * Marks the field as required.
   * Note: This is only supported for RelationFieldType ASSET!
   */
  isRequired?: Maybe<Scalars['Boolean']>;
  isHidden?: Maybe<Scalars['Boolean']>;
  reverseField: GraphQLBatchMigrationCreateReverseRelationalFieldInput;
};

/** reverse field args */
export type GraphQLBatchMigrationCreateReverseRelationalFieldInput = {
  apiId: Scalars['String'];
  modelApiId: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isList?: Maybe<Scalars['Boolean']>;
  isHidden?: Maybe<Scalars['Boolean']>;
  isUnidirectional?: Maybe<Scalars['Boolean']>;
};

/** Updating relational field */
export type GraphQLBatchMigrationUpdateRelationalFieldInput = {
  apiId: Scalars['String'];
  newApiId?: Maybe<Scalars['String']>;
  modelApiId: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isList?: Maybe<Scalars['Boolean']>;
  isHidden?: Maybe<Scalars['Boolean']>;
  isUnidirectional?: Maybe<Scalars['Boolean']>;
  /**
   * Marks the field as required.
   * Note: This is only supported for RelationFieldType ASSET!
   */
  isRequired?: Maybe<Scalars['Boolean']>;
};

/** Updating simple field */
export type GraphQLBatchMigrationUpdateSimpleFieldInput = {
  apiId: Scalars['String'];
  newApiId?: Maybe<Scalars['String']>;
  modelApiId: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isList?: Maybe<Scalars['Boolean']>;
  isLocalized?: Maybe<Scalars['Boolean']>;
  isRequired?: Maybe<Scalars['Boolean']>;
  isUnique?: Maybe<Scalars['Boolean']>;
  isHidden?: Maybe<Scalars['Boolean']>;
  isTitle?: Maybe<Scalars['Boolean']>;
  position?: Maybe<Scalars['Int']>;
  initialValue?: Maybe<Scalars['String']>;
  migrationValue?: Maybe<Scalars['String']>;
  validations?: Maybe<GraphQLSimpleFieldValidationsInput>;
  embedsEnabled?: Maybe<Scalars['Boolean']>;
  tableRenderer?: Maybe<Scalars['String']>;
  formRenderer?: Maybe<Scalars['String']>;
  formConfig?: Maybe<Scalars['JSON']>;
  tableConfig?: Maybe<Scalars['JSON']>;
};

/** Updating enumerable field */
export type GraphQLBatchMigrationUpdateEnumerableFieldInput = {
  apiId: Scalars['String'];
  newApiId?: Maybe<Scalars['String']>;
  modelApiId: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isList?: Maybe<Scalars['Boolean']>;
  isLocalized?: Maybe<Scalars['Boolean']>;
  isRequired?: Maybe<Scalars['Boolean']>;
  isUnique?: Maybe<Scalars['Boolean']>;
  isHidden?: Maybe<Scalars['Boolean']>;
  isTitle?: Maybe<Scalars['Boolean']>;
  position?: Maybe<Scalars['Int']>;
  initialValue?: Maybe<Scalars['String']>;
  migrationValue?: Maybe<Scalars['String']>;
};

/** Deleting enumarable field */
export type GraphQLBatchMigrationDeleteEnumerationInput = {
  apiId: Scalars['String'];
};

/** Creating enumeration */
export type GraphQLBatchMigrationCreateEnumerationInput = {
  apiId: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  values: Array<GraphQLBatchMigrationCreateEnumerationValueInput>;
};

/** Updating enumeration */
export type GraphQLBatchMigrationUpdateEnumerationInput = {
  apiId: Scalars['String'];
  newApiId?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  valuesToCreate?: Maybe<Array<GraphQLBatchMigrationCreateEnumerationValueInput>>;
  valuesToUpdate?: Maybe<Array<GraphQLBatchMigrationUpdateEnumerationValueInput>>;
  valuesToDelete?: Maybe<Array<Scalars['String']>>;
};

/** enumeration value */
export type GraphQLBatchMigrationCreateEnumerationValueInput = {
  apiId: Scalars['String'];
  displayName: Scalars['String'];
};

/** update enumeration value */
export type GraphQLBatchMigrationUpdateEnumerationValueInput = {
  apiId: Scalars['String'];
  newApiId: Scalars['String'];
  displayName: Scalars['String'];
};

/** Creating locale */
export type GraphQLBatchMigrationCreateLocaleInput = {
  apiId: Scalars['String'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

/** Updating locale */
export type GraphQLBatchMigrationUpdateLocaleInput = {
  apiId: Scalars['String'];
  newApiId?: Maybe<Scalars['String']>;
  isDefault?: Maybe<Scalars['Boolean']>;
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

/** Deleting locale */
export type GraphQLBatchMigrationDeleteLocaleInput = {
  apiId: Scalars['String'];
  force?: Maybe<Scalars['Boolean']>;
};

export type GraphQLBatchMigrationChangeInput = {
  /** Models */
  createModel?: Maybe<GraphQLBatchMigrationCreateModelInput>;
  updateModel?: Maybe<GraphQLBatchMigrationUpdateModelInput>;
  deleteModel?: Maybe<GraphQLBatchMigrationDeleteModelInput>;
  /** Remote type defs */
  createRemoteTypeDefinition?: Maybe<GraphQLBatchMigrationCreateRemoteTypeDefinitionInput>;
  updateRemoteTypeDefinition?: Maybe<GraphQLBatchMigrationUpdateRemoteTypeDefinitionInput>;
  deleteRemoteTypeDefinition?: Maybe<GraphQLBatchMigrationDeleteRemoteTypeDefinitionInput>;
  /** Fields */
  createSimpleField?: Maybe<GraphQLBatchMigrationCreateSimpleFieldInput>;
  createRemoteField?: Maybe<GraphQLBatchMigrationCreateRemoteFieldInput>;
  updateSimpleField?: Maybe<GraphQLBatchMigrationUpdateSimpleFieldInput>;
  createRelationalField?: Maybe<GraphQLBatchMigrationCreateRelationalFieldInput>;
  updateRelationalField?: Maybe<GraphQLBatchMigrationUpdateRelationalFieldInput>;
  createUnionField?: Maybe<GraphQLBatchMigrationCreateUnionFieldInput>;
  updateUnionField?: Maybe<GraphQLBatchMigrationUpdateUnionFieldInput>;
  createEnumerableField?: Maybe<GraphQLBatchMigrationCreateEnumerableFieldInput>;
  updateEnumerableField?: Maybe<GraphQLBatchMigrationUpdateEnumerableFieldInput>;
  deleteField?: Maybe<GraphQLBatchMigrationDeleteFieldInput>;
  /** Enumerations */
  createEnumeration?: Maybe<GraphQLBatchMigrationCreateEnumerationInput>;
  updateEnumeration?: Maybe<GraphQLBatchMigrationUpdateEnumerationInput>;
  deleteEnumeration?: Maybe<GraphQLBatchMigrationDeleteEnumerationInput>;
  /** State */
  createStage?: Maybe<GraphQLBatchMigrationCreateStageInput>;
  deleteStage?: Maybe<GraphQLBatchMigrationDeleteStageInput>;
  updateStage?: Maybe<GraphQLBatchMigrationUpdateStageInput>;
  /** Locale */
  createLocale?: Maybe<GraphQLBatchMigrationCreateLocaleInput>;
  deleteLocale?: Maybe<GraphQLBatchMigrationDeleteLocaleInput>;
  updateLocale?: Maybe<GraphQLBatchMigrationUpdateLocaleInput>;
};

export type GraphQLBatchMigrationInput = {
  environmentId: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  changes: Array<GraphQLBatchMigrationChangeInput>;
};

export type GraphQLNetlifySiteInput = {
  id: Scalars['String'];
  displayName: Scalars['String'];
};

export type GraphQLVercelProjectInput = {
  id: Scalars['String'];
  ref: Scalars['String'];
  displayName: Scalars['String'];
};

export type GraphQLCreateNetlifyIntegrationInput = {
  environmentId: Scalars['ID'];
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /**
   * A selection of models where the integration should be displayed in the frontend.
   * If the integration should be displayed on every model, pass null or an empty array here.
   */
  models?: Maybe<Array<Scalars['ID']>>;
  sites: Array<GraphQLNetlifySiteInput>;
  /**
   * This token is used to create the needed BuildHook and BuildNotifications in Netlify.
   * This token is only used once and won't be stored anywhere
   */
  accessToken: Scalars['String'];
};

export type GraphQLCreateVercelIntegrationInput = {
  environmentId: Scalars['ID'];
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /**
   * A selection of models where the integration should be displayed in the frontend.
   * If the integration should be displayed on every model, pass null or an empty array here.
   */
  models?: Maybe<Array<Scalars['ID']>>;
  projects: Array<GraphQLVercelProjectInput>;
  /**
   * This token is used to create the needed BuildHook and BuildNotifications in Netlify.
   * This token is only used once and won't be stored anywhere
   */
  accessToken: Scalars['String'];
};

export type GraphQLCreateGatsbyCloudIntegrationInput = {
  environmentId: Scalars['ID'];
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /**
   * Prefix of your site
   * Only lower case alphabetical characters, numbers and underscores are allowed.
   */
  sitePrefix?: Maybe<Scalars['String']>;
  siteURL?: Maybe<Scalars['String']>;
  /** URL to trigger a Deploy Build. */
  buildWebhookURL: Scalars['String'];
  /** URL to trigger a CMS Preview build. */
  previewWebhookURL: Scalars['String'];
};

export type GraphQLUpdateNetlifyIntegrationInput = {
  integrationId: Scalars['ID'];
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  models?: Maybe<Array<Scalars['ID']>>;
  /** Overrides the currently setup netlify sites. Omit if you don't want to update the existing sites. */
  sites?: Maybe<Array<GraphQLNetlifySiteInput>>;
  /**
   * This token is used to create the needed BuildHook and BuildNotifications in Netlify.
   * This token is only used once and won't be stored anywhere
   */
  accessToken: Scalars['String'];
};

export type GraphQLUpdateVercelIntegrationInput = {
  integrationId: Scalars['ID'];
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  models?: Maybe<Array<Scalars['ID']>>;
  /** Overrides the currently setup vercel projects. Omit if you don't want to update the existing projects. */
  projects?: Maybe<Array<GraphQLVercelProjectInput>>;
  /**
   * This token is used to create the needed BuildHook and BuildNotifications in Vercel.
   * This token is only used once and won't be stored anywhere
   */
  accessToken: Scalars['String'];
};

export type GraphQLUpdateGatsbyCloudIntegrationInput = {
  integrationId: Scalars['ID'];
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  /**
   * Prefix of your site
   * Only lower case alphabetical characters, numbers and underscores are allowed.
   */
  sitePrefix?: Maybe<Scalars['String']>;
  /** URL to trigger a Deploy Build. This webhook will be triggered when publishing and unpublishing entries. */
  buildWebhookURL?: Maybe<Scalars['String']>;
  previewWebhookURL?: Maybe<Scalars['String']>;
};

export type GraphQLCreateNetlifyIntegrationPayload = {
  __typename?: 'CreateNetlifyIntegrationPayload';
  createdNetlifyIntegration: GraphQLNetlifyIntegration;
};

export type GraphQLCreateVercelIntegrationPayload = {
  __typename?: 'CreateVercelIntegrationPayload';
  createdVercelIntegration: GraphQLVercelIntegration;
};

export type GraphQLCreateGatsbyCloudIntegrationPayload = {
  __typename?: 'CreateGatsbyCloudIntegrationPayload';
  createdGatsbyCloudIntegration: GraphQLGatsbyCloudIntegration;
};

export type GraphQLUpdateNetlifyIntegrationPayload = {
  __typename?: 'UpdateNetlifyIntegrationPayload';
  updatedNetlifyIntegration: GraphQLNetlifyIntegration;
};

export type GraphQLUpdateVercelIntegrationPayload = {
  __typename?: 'UpdateVercelIntegrationPayload';
  updatedVercelIntegration: GraphQLVercelIntegration;
};

export type GraphQLUpdateGatsbyCloudIntegrationPayload = {
  __typename?: 'UpdateGatsbyCloudIntegrationPayload';
  updatedGatsbyCloudIntegration: GraphQLGatsbyCloudIntegration;
};

export type GraphQLDeleteNetlifyIntegrationInput = {
  id: Scalars['ID'];
  /**
   * This token is used to cleanup the resources in Netlify that where used by this integration .
   * This token is only used once and won't be stored anywhere
   */
  accessToken: Scalars['String'];
};

export type GraphQLDeleteVercelIntegrationInput = {
  id: Scalars['ID'];
  /**
   * This token is used to cleanup the resources in Vercel that where used by this integration .
   * This token is only used once and won't be stored anywhere
   */
  accessToken: Scalars['String'];
};

export type GraphQLDeleteGatsbyCloudIntegrationInput = {
  id: Scalars['ID'];
};

export type GraphQLDeleteNetlifyIntegrationPayload = {
  __typename?: 'DeleteNetlifyIntegrationPayload';
  deletedNetlifyIntegrationId: Scalars['ID'];
};

export type GraphQLDeleteVercelIntegrationPayload = {
  __typename?: 'DeleteVercelIntegrationPayload';
  deletedVercelIntegrationId: Scalars['ID'];
};

export type GraphQLDeleteGatsbyCloudIntegrationPayload = {
  __typename?: 'DeleteGatsbyCloudIntegrationPayload';
  deletedGatsbyCloudIntegrationId: Scalars['ID'];
};

export type GraphQLTriggerNetlifyIntegrationBuildInput = {
  siteId: Scalars['String'];
  integrationId: Scalars['ID'];
};

export type GraphQLTriggerVercelIntegrationBuildInput = {
  projectId: Scalars['String'];
  integrationId: Scalars['ID'];
};

export type GraphQLTriggerNetlifyIntegrationBuildPayload = {
  __typename?: 'TriggerNetlifyIntegrationBuildPayload';
  integration: GraphQLNetlifyIntegration;
};

export type GraphQLTriggerVercelIntegrationBuildPayload = {
  __typename?: 'TriggerVercelIntegrationBuildPayload';
  integration: GraphQLVercelIntegration;
};

export type GraphQLPromoteEnvironmentInput = {
  environmentId: Scalars['ID'];
  renameCurrentMasterApiIdTo: Scalars['String'];
  renameCurrentMasterDisplayNameTo: Scalars['String'];
};

export type GraphQLPromoteEnvironmentPayload = {
  __typename?: 'PromoteEnvironmentPayload';
  promotedEnvironment: GraphQLEnvironment;
  previousMasterEnvironment: GraphQLEnvironment;
};

export type GraphQLCreateRemoteTypeDefinitionInput = {
  environmentId: Scalars['ID'];
  displayName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  /**
   * GraphQL type definition in SDL format
   * Can be enum or object type
   */
  definition: Scalars['String'];
};

export type GraphQLUpdateRemoteTypeDefinitionInput = {
  id: Scalars['ID'];
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /**
   * GraphQL type definition in SDL format
   * Can be enum or object type
   */
  definition?: Maybe<Scalars['String']>;
};

export type GraphQLDeleteRemoteTypeDefinitionInput = {
  id: Scalars['ID'];
};

export type GraphQLMutation = {
  __typename?: 'Mutation';
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
  scheduleLegacyProjectMigration: GraphQLScheduleLegacyProjectMigrationPayload;
  updateProject: GraphQLProject;
  deleteProject: GraphQLDeleteProjectPayload;
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
  deleteAccount: GraphQLDeleteAccountPayload;
  /** @deprecated Use updateUserProfile instead */
  updateProfile: GraphQLViewer;
  updateUserProfile: GraphQLUserViewer;
  createWebhook: GraphQLCreateWebhookPayload;
  updateWebhook: GraphQLUpdateWebhookPayload;
  deleteWebhook: GraphQLDeleteWebhookPayload;
  moveField: GraphQLMoveFieldPayload;
  createEnvironment: GraphQLCreateEnvironmentPayload;
  updateEnvironment: GraphQLUpdateEnvironmentPayload;
  deleteEnvironment: GraphQLDeleteEnvironmentPayload;
  promoteEnvironment: GraphQLPromoteEnvironmentPayload;
  updateFilestackSecurityOptions: GraphQLUpdateFilestackSecurityOptionsPayload;
  updatePublicEndpoint?: Maybe<GraphQLUpdatePublicPermissionsPayload>;
  createNetlifyIntegration?: Maybe<GraphQLCreateNetlifyIntegrationPayload>;
  triggerNetlifyIntegrationBuild?: Maybe<GraphQLTriggerNetlifyIntegrationBuildPayload>;
  updateNetlifyIntegration?: Maybe<GraphQLUpdateNetlifyIntegrationPayload>;
  deleteNetlifyIntegration?: Maybe<GraphQLDeleteNetlifyIntegrationPayload>;
  createVercelIntegration?: Maybe<GraphQLCreateVercelIntegrationPayload>;
  triggerVercelIntegrationBuild?: Maybe<GraphQLTriggerVercelIntegrationBuildPayload>;
  updateVercelIntegration?: Maybe<GraphQLUpdateVercelIntegrationPayload>;
  deleteVercelIntegration?: Maybe<GraphQLDeleteVercelIntegrationPayload>;
  createGatsbyCloudIntegration?: Maybe<GraphQLCreateGatsbyCloudIntegrationPayload>;
  updateGatsbyCloudIntegration?: Maybe<GraphQLUpdateGatsbyCloudIntegrationPayload>;
  deleteGatsbyCloudIntegration?: Maybe<GraphQLDeleteGatsbyCloudIntegrationPayload>;
  createFieldExtension: GraphQLCreateFieldExtensionPayload;
  updateFieldExtension: GraphQLUpdateFieldExtensionPayload;
  deleteExtension: GraphQLDeleteExtensionPayload;
  createStage: GraphQLAsyncOperationPayload;
  updateStage: GraphQLAsyncOperationPayload;
  deleteStage: GraphQLAsyncOperationPayload;
  createLocale: GraphQLAsyncOperationPayload;
  updateLocale: GraphQLAsyncOperationPayload;
  deleteLocale: GraphQLAsyncOperationPayload;
  createModel: GraphQLAsyncOperationPayload;
  updateModel: GraphQLAsyncOperationPayload;
  deleteModel: GraphQLAsyncOperationPayload;
  createRemoteTypeDefinition: GraphQLAsyncOperationPayload;
  updateRemoteTypeDefinition: GraphQLAsyncOperationPayload;
  deleteRemoteTypeDefinition: GraphQLAsyncOperationPayload;
  createEnumeration: GraphQLAsyncOperationPayload;
  deleteEnumeration: GraphQLAsyncOperationPayload;
  updateEnumeration: GraphQLAsyncOperationPayload;
  createSimpleField: GraphQLAsyncOperationPayload;
  createRemoteField: GraphQLAsyncOperationPayload;
  createEnumerableField: GraphQLAsyncOperationPayload;
  createRelationalField: GraphQLAsyncOperationPayload;
  createUnionField: GraphQLAsyncOperationPayload;
  updateSimpleField: GraphQLAsyncOperationPayload;
  updateEnumerableField: GraphQLAsyncOperationPayload;
  updateRelationalField: GraphQLAsyncOperationPayload;
  updateUnionField: GraphQLAsyncOperationPayload;
  deleteField: GraphQLAsyncOperationPayload;
  submitBatchChanges: GraphQLAsyncOperationPayload;
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


export type GraphQLMutationScheduleLegacyProjectMigrationArgs = {
  data: GraphQLScheduleLegacyProjectMigrationInput;
};


export type GraphQLMutationUpdateProjectArgs = {
  data: GraphQLUpdateProjectInput;
};


export type GraphQLMutationDeleteProjectArgs = {
  data: GraphQLDeleteProjectInput;
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


export type GraphQLMutationDeleteAccountArgs = {
  data?: Maybe<GraphQLDeleteAccountInput>;
};


export type GraphQLMutationUpdateProfileArgs = {
  data: GraphQLUpdateProfileInput;
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


export type GraphQLMutationDeleteExtensionArgs = {
  data: GraphQLDeleteExtensionInput;
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


export type GraphQLMutationUpdateModelArgs = {
  data: GraphQLUpdateModelInput;
};


export type GraphQLMutationDeleteModelArgs = {
  data: GraphQLDeleteModelInput;
};


export type GraphQLMutationCreateRemoteTypeDefinitionArgs = {
  data: GraphQLCreateRemoteTypeDefinitionInput;
};


export type GraphQLMutationUpdateRemoteTypeDefinitionArgs = {
  data: GraphQLUpdateRemoteTypeDefinitionInput;
};


export type GraphQLMutationDeleteRemoteTypeDefinitionArgs = {
  data: GraphQLDeleteRemoteTypeDefinitionInput;
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


export type GraphQLMutationUpdateSimpleFieldArgs = {
  data: GraphQLUpdateSimpleFieldInput;
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


export type GraphQLMutationDeleteFieldArgs = {
  data: GraphQLDeleteFieldInput;
};


export type GraphQLMutationSubmitBatchChangesArgs = {
  data: GraphQLBatchMigrationInput;
};

export enum GraphQLMigrationOperationType {
  CreateProjectFromTemplate = 'CREATE_PROJECT_FROM_TEMPLATE',
  CreateEnvironment = 'CREATE_ENVIRONMENT',
  Batch = 'BATCH',
  CreateStage = 'CREATE_STAGE',
  UpdateStage = 'UPDATE_STAGE',
  DeleteStage = 'DELETE_STAGE',
  CreateLocale = 'CREATE_LOCALE',
  UpdateLocale = 'UPDATE_LOCALE',
  DeleteLocale = 'DELETE_LOCALE',
  CreateModel = 'CREATE_MODEL',
  UpdateModel = 'UPDATE_MODEL',
  DeleteModel = 'DELETE_MODEL',
  CreateRemoteTypeDefinition = 'CREATE_REMOTE_TYPE_DEFINITION',
  UpdateRemoteTypeDefinition = 'UPDATE_REMOTE_TYPE_DEFINITION',
  DeleteRemoteTypeDefinition = 'DELETE_REMOTE_TYPE_DEFINITION',
  CreateEnumeration = 'CREATE_ENUMERATION',
  UpdateEnumeration = 'UPDATE_ENUMERATION',
  DeleteEnumeration = 'DELETE_ENUMERATION',
  CreateSimpleField = 'CREATE_SIMPLE_FIELD',
  CreateEnumerableField = 'CREATE_ENUMERABLE_FIELD',
  CreateRelationalField = 'CREATE_RELATIONAL_FIELD',
  CreateUnionField = 'CREATE_UNION_FIELD',
  CreateRemoteField = 'CREATE_REMOTE_FIELD',
  UpdateSimpleField = 'UPDATE_SIMPLE_FIELD',
  UpdateEnumerableField = 'UPDATE_ENUMERABLE_FIELD',
  UpdateRelationalField = 'UPDATE_RELATIONAL_FIELD',
  UpdateUnionField = 'UPDATE_UNION_FIELD',
  DeleteField = 'DELETE_FIELD'
}

export type GraphQLISchemaMigrationPayload = {
  migration: GraphQLMigration;
};

export enum GraphQLNetlifyBuildState {
  Ready = 'READY',
  Preparing = 'PREPARING',
  Building = 'BUILDING',
  Failed = 'FAILED'
}

export enum GraphQLVercelBuildState {
  Ready = 'READY',
  Preparing = 'PREPARING',
  Building = 'BUILDING',
  Failed = 'FAILED'
}

export type GraphQLNetlifyIntegrationCallbackPayload = {
  __typename?: 'NetlifyIntegrationCallbackPayload';
  integrationId: Scalars['ID'];
  site: GraphQLNetlifySite;
  error?: Maybe<Scalars['String']>;
};

export type GraphQLVercelIntegrationCallbackPayload = {
  __typename?: 'VercelIntegrationCallbackPayload';
  integrationId: Scalars['ID'];
  project: GraphQLVercelProject;
  error?: Maybe<Scalars['String']>;
};

export type GraphQLSchemaMigrationSubscriptionPayload = GraphQLISchemaMigrationPayload & {
  __typename?: 'SchemaMigrationSubscriptionPayload';
  migration: GraphQLMigration;
};

export type GraphQLSchemaMigrationSucceededSubscriptionPayload = GraphQLISchemaMigrationPayload & {
  __typename?: 'SchemaMigrationSucceededSubscriptionPayload';
  migration: GraphQLMigration;
  affectedResourceType: GraphQLMigrationOperationType;
  affectedResourceId: Scalars['ID'];
  environment: GraphQLEnvironment;
};

export type GraphQLEnvironmentPromotedPayload = {
  __typename?: 'EnvironmentPromotedPayload';
  promotedEnvironment: GraphQLEnvironment;
  previousMasterEnvironment: GraphQLEnvironment;
  promotedEnvironmentPreviousDisplayName: Scalars['String'];
};

export type GraphQLSubscription = {
  __typename?: 'Subscription';
  schemaMigration: GraphQLISchemaMigrationPayload;
  netlifyBuildNotification: GraphQLNetlifyIntegrationCallbackPayload;
  vercelBuildNotification: GraphQLVercelIntegrationCallbackPayload;
  environmentPromoted: GraphQLEnvironmentPromotedPayload;
};


export type GraphQLSubscriptionSchemaMigrationArgs = {
  environmentId: Scalars['ID'];
};


export type GraphQLSubscriptionNetlifyBuildNotificationArgs = {
  integrationId: Scalars['ID'];
};


export type GraphQLSubscriptionVercelBuildNotificationArgs = {
  integrationId: Scalars['ID'];
};


export type GraphQLSubscriptionEnvironmentPromotedArgs = {
  projectId: Scalars['ID'];
};
