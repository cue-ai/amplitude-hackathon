Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  findSync,
} = require("./runtime/library");

const Prisma = {};

exports.Prisma = Prisma;

/**
 * Prisma Client JS version: 4.13.0
 * Query Engine version: 1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a
 */
Prisma.prismaVersion = {
  client: "4.13.0",
  engine: "1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a",
};

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
Prisma.PrismaClientValidationError = PrismaClientValidationError;
Prisma.NotFoundError = NotFoundError;
Prisma.Decimal = Decimal;

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag;
Prisma.empty = empty;
Prisma.join = join;
Prisma.raw = raw;
Prisma.validator = () => (val) => val;

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull;
Prisma.JsonNull = objectEnumValues.instances.JsonNull;
Prisma.AnyNull = objectEnumValues.instances.AnyNull;

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull,
};

const path = require("path");

const fs = require("fs");

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== "undefined" && __dirname !== "/";

// will work in most cases, ie. if the client has not been bundled
const regularDirname =
  hasDirname &&
  fs.existsSync(path.join(__dirname, "schema.prisma")) &&
  __dirname;

// if the client has been bundled, we need to look for the folders
const foundDirname =
  !regularDirname &&
  findSync(
    process.cwd(),
    ["prisma/generated", "generated"],
    ["d"],
    ["d"],
    1
  )[0];

const dirname = regularDirname || foundDirname || __dirname;

/**
 * Enums
 */

exports.Prisma.ModelRunScalarFieldEnum = {
  id: "id",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  workflowId: "workflowId",
  triggeredBy: "triggeredBy",
};

exports.Prisma.ModelScalarFieldEnum = {
  id: "id",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  name: "name",
  goal: "goal",
  relevantEvents: "relevantEvents",
  status: "status",
};

exports.Prisma.QueryMode = {
  default: "default",
  insensitive: "insensitive",
};

exports.Prisma.SortOrder = {
  asc: "asc",
  desc: "desc",
};
exports.ModelStatus = {
  FetchingData: "FetchingData",
  ProcessingData: "ProcessingData",
  Training: "Training",
  Ready: "Ready",
};

exports.Prisma.ModelName = {
  Model: "Model",
  ModelRun: "ModelRun",
};

const dmmfString =
  '{"datamodel":{"enums":[{"name":"ModelStatus","values":[{"name":"FetchingData","dbName":null},{"name":"ProcessingData","dbName":null},{"name":"Training","dbName":null},{"name":"Ready","dbName":null}],"dbName":null}],"models":[{"name":"Model","dbName":null,"fields":[{"name":"id","dbName":"_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"auto","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"goal","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"relevantEvents","kind":"scalar","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"ModelStatus","isGenerated":false,"isUpdatedAt":false},{"name":"workflowRuns","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"ModelRun","relationName":"ModelToModelRun","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},{"name":"ModelRun","dbName":null,"fields":[{"name":"id","dbName":"_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"auto","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"model","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Model","relationName":"ModelToModelRun","relationFromFields":["workflowId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"workflowId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"triggeredBy","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}],"types":[]},"mappings":{"modelOperations":[{"model":"Model","plural":"models","findUnique":"findUniqueModel","findUniqueOrThrow":"findUniqueModelOrThrow","findFirst":"findFirstModel","findFirstOrThrow":"findFirstModelOrThrow","findMany":"findManyModel","create":"createOneModel","createMany":"createManyModel","delete":"deleteOneModel","update":"updateOneModel","deleteMany":"deleteManyModel","updateMany":"updateManyModel","upsert":"upsertOneModel","aggregate":"aggregateModel","groupBy":"groupByModel","findRaw":"findModelRaw","aggregateRaw":"aggregateModelRaw"},{"model":"ModelRun","plural":"modelRuns","findUnique":"findUniqueModelRun","findUniqueOrThrow":"findUniqueModelRunOrThrow","findFirst":"findFirstModelRun","findFirstOrThrow":"findFirstModelRunOrThrow","findMany":"findManyModelRun","create":"createOneModelRun","createMany":"createManyModelRun","delete":"deleteOneModelRun","update":"updateOneModelRun","deleteMany":"deleteManyModelRun","updateMany":"updateManyModelRun","upsert":"upsertOneModelRun","aggregate":"aggregateModelRun","groupBy":"groupByModelRun","findRaw":"findModelRunRaw","aggregateRaw":"aggregateModelRunRaw"}],"otherOperations":{"read":[],"write":["runCommandRaw"]}}}';
const dmmf = JSON.parse(dmmfString);
exports.Prisma.dmmf = JSON.parse(dmmfString);

/**
 * Create the Client
 */
const config = {
  generator: {
    name: "client",
    provider: {
      fromEnvVar: null,
      value: "prisma-client-js",
    },
    output: {
      value:
        "/Users/caelinsutch/Github/amplitude-hackathon/packages/db/prisma/generated",
      fromEnvVar: null,
    },
    config: {
      engineType: "library",
    },
    binaryTargets: [],
    previewFeatures: [],
    isCustomOutput: true,
  },
  relativeEnvPaths: {
    rootEnvPath: null,
  },
  relativePath: "..",
  clientVersion: "4.13.0",
  engineVersion: "1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a",
  datasourceNames: ["db"],
  activeProvider: "mongodb",
  dataProxy: false,
  postinstall: false,
};
config.dirname = dirname;
config.document = dmmf;

const { warnEnvConflicts } = require("./runtime/library");

warnEnvConflicts({
  rootEnvPath:
    config.relativeEnvPaths.rootEnvPath &&
    path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
  schemaEnvPath:
    config.relativeEnvPaths.schemaEnvPath &&
    path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath),
});

const PrismaClient = getPrismaClient(config);
exports.PrismaClient = PrismaClient;
Object.assign(exports, Prisma);

path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(
  process.cwd(),
  "prisma/generated/libquery_engine-darwin-arm64.dylib.node"
);
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/schema.prisma");
