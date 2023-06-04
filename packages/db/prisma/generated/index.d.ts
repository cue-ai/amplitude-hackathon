
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model Workflow
 * 
 */
export type Workflow = {
  id: string
  createdAt: Date
  updatedAt: Date
  name: string
  goal: string
  relevantEvents: string[]
  status: WorkflowStatus
}

/**
 * Model WorkflowRun
 * 
 */
export type WorkflowRun = {
  id: string
  createdAt: Date
  updatedAt: Date
  workflowId: string
  triggeredBy: string
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const WorkflowStatus: {
  FetchingData: 'FetchingData',
  ProcessingData: 'ProcessingData',
  Training: 'Training',
  Ready: 'Ready'
};

export type WorkflowStatus = (typeof WorkflowStatus)[keyof typeof WorkflowStatus]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Workflows
 * const workflows = await prisma.workflow.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Workflows
   * const workflows = await prisma.workflow.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number }): Promise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

      /**
   * `prisma.workflow`: Exposes CRUD operations for the **Workflow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workflows
    * const workflows = await prisma.workflow.findMany()
    * ```
    */
  get workflow(): Prisma.WorkflowDelegate<GlobalReject>;

  /**
   * `prisma.workflowRun`: Exposes CRUD operations for the **WorkflowRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkflowRuns
    * const workflowRuns = await prisma.workflowRun.findMany()
    * ```
    */
  get workflowRun(): Prisma.WorkflowRunDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.13.0
   * Query Engine version: 1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Workflow: 'Workflow',
    WorkflowRun: 'WorkflowRun'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type WorkflowCountOutputType
   */


  export type WorkflowCountOutputType = {
    workflowRuns: number
  }

  export type WorkflowCountOutputTypeSelect = {
    workflowRuns?: boolean
  }

  export type WorkflowCountOutputTypeGetPayload<S extends boolean | null | undefined | WorkflowCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? WorkflowCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (WorkflowCountOutputTypeArgs)
    ? WorkflowCountOutputType 
    : S extends { select: any } & (WorkflowCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof WorkflowCountOutputType ? WorkflowCountOutputType[P] : never
  } 
      : WorkflowCountOutputType




  // Custom InputTypes

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the WorkflowCountOutputType
     */
    select?: WorkflowCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Workflow
   */


  export type AggregateWorkflow = {
    _count: WorkflowCountAggregateOutputType | null
    _min: WorkflowMinAggregateOutputType | null
    _max: WorkflowMaxAggregateOutputType | null
  }

  export type WorkflowMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    goal: string | null
    status: WorkflowStatus | null
  }

  export type WorkflowMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    goal: string | null
    status: WorkflowStatus | null
  }

  export type WorkflowCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    goal: number
    relevantEvents: number
    status: number
    _all: number
  }


  export type WorkflowMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    goal?: true
    status?: true
  }

  export type WorkflowMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    goal?: true
    status?: true
  }

  export type WorkflowCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    goal?: true
    relevantEvents?: true
    status?: true
    _all?: true
  }

  export type WorkflowAggregateArgs = {
    /**
     * Filter which Workflow to aggregate.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: Enumerable<WorkflowOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workflows
    **/
    _count?: true | WorkflowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowMaxAggregateInputType
  }

  export type GetWorkflowAggregateType<T extends WorkflowAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflow[P]>
      : GetScalarType<T[P], AggregateWorkflow[P]>
  }




  export type WorkflowGroupByArgs = {
    where?: WorkflowWhereInput
    orderBy?: Enumerable<WorkflowOrderByWithAggregationInput>
    by: WorkflowScalarFieldEnum[]
    having?: WorkflowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowCountAggregateInputType | true
    _min?: WorkflowMinAggregateInputType
    _max?: WorkflowMaxAggregateInputType
  }


  export type WorkflowGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    goal: string
    relevantEvents: string[]
    status: WorkflowStatus
    _count: WorkflowCountAggregateOutputType | null
    _min: WorkflowMinAggregateOutputType | null
    _max: WorkflowMaxAggregateOutputType | null
  }

  type GetWorkflowGroupByPayload<T extends WorkflowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<WorkflowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    goal?: boolean
    relevantEvents?: boolean
    status?: boolean
    workflowRuns?: boolean | Workflow$workflowRunsArgs
    _count?: boolean | WorkflowCountOutputTypeArgs
  }


  export type WorkflowInclude = {
    workflowRuns?: boolean | Workflow$workflowRunsArgs
    _count?: boolean | WorkflowCountOutputTypeArgs
  }

  export type WorkflowGetPayload<S extends boolean | null | undefined | WorkflowArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Workflow :
    S extends undefined ? never :
    S extends { include: any } & (WorkflowArgs | WorkflowFindManyArgs)
    ? Workflow  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'workflowRuns' ? Array < WorkflowRunGetPayload<S['include'][P]>>  :
        P extends '_count' ? WorkflowCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (WorkflowArgs | WorkflowFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'workflowRuns' ? Array < WorkflowRunGetPayload<S['select'][P]>>  :
        P extends '_count' ? WorkflowCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Workflow ? Workflow[P] : never
  } 
      : Workflow


  type WorkflowCountArgs = 
    Omit<WorkflowFindManyArgs, 'select' | 'include'> & {
      select?: WorkflowCountAggregateInputType | true
    }

  export interface WorkflowDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Workflow that matches the filter.
     * @param {WorkflowFindUniqueArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WorkflowFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WorkflowFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Workflow'> extends True ? Prisma__WorkflowClient<WorkflowGetPayload<T>> : Prisma__WorkflowClient<WorkflowGetPayload<T> | null, null>

    /**
     * Find one Workflow that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WorkflowFindUniqueOrThrowArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WorkflowFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, WorkflowFindUniqueOrThrowArgs>
    ): Prisma__WorkflowClient<WorkflowGetPayload<T>>

    /**
     * Find the first Workflow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindFirstArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WorkflowFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WorkflowFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Workflow'> extends True ? Prisma__WorkflowClient<WorkflowGetPayload<T>> : Prisma__WorkflowClient<WorkflowGetPayload<T> | null, null>

    /**
     * Find the first Workflow that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindFirstOrThrowArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WorkflowFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WorkflowFindFirstOrThrowArgs>
    ): Prisma__WorkflowClient<WorkflowGetPayload<T>>

    /**
     * Find zero or more Workflows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workflows
     * const workflows = await prisma.workflow.findMany()
     * 
     * // Get first 10 Workflows
     * const workflows = await prisma.workflow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowWithIdOnly = await prisma.workflow.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WorkflowFindManyArgs>(
      args?: SelectSubset<T, WorkflowFindManyArgs>
    ): Prisma.PrismaPromise<Array<WorkflowGetPayload<T>>>

    /**
     * Create a Workflow.
     * @param {WorkflowCreateArgs} args - Arguments to create a Workflow.
     * @example
     * // Create one Workflow
     * const Workflow = await prisma.workflow.create({
     *   data: {
     *     // ... data to create a Workflow
     *   }
     * })
     * 
    **/
    create<T extends WorkflowCreateArgs>(
      args: SelectSubset<T, WorkflowCreateArgs>
    ): Prisma__WorkflowClient<WorkflowGetPayload<T>>

    /**
     * Create many Workflows.
     *     @param {WorkflowCreateManyArgs} args - Arguments to create many Workflows.
     *     @example
     *     // Create many Workflows
     *     const workflow = await prisma.workflow.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WorkflowCreateManyArgs>(
      args?: SelectSubset<T, WorkflowCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Workflow.
     * @param {WorkflowDeleteArgs} args - Arguments to delete one Workflow.
     * @example
     * // Delete one Workflow
     * const Workflow = await prisma.workflow.delete({
     *   where: {
     *     // ... filter to delete one Workflow
     *   }
     * })
     * 
    **/
    delete<T extends WorkflowDeleteArgs>(
      args: SelectSubset<T, WorkflowDeleteArgs>
    ): Prisma__WorkflowClient<WorkflowGetPayload<T>>

    /**
     * Update one Workflow.
     * @param {WorkflowUpdateArgs} args - Arguments to update one Workflow.
     * @example
     * // Update one Workflow
     * const workflow = await prisma.workflow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WorkflowUpdateArgs>(
      args: SelectSubset<T, WorkflowUpdateArgs>
    ): Prisma__WorkflowClient<WorkflowGetPayload<T>>

    /**
     * Delete zero or more Workflows.
     * @param {WorkflowDeleteManyArgs} args - Arguments to filter Workflows to delete.
     * @example
     * // Delete a few Workflows
     * const { count } = await prisma.workflow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WorkflowDeleteManyArgs>(
      args?: SelectSubset<T, WorkflowDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workflows
     * const workflow = await prisma.workflow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WorkflowUpdateManyArgs>(
      args: SelectSubset<T, WorkflowUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Workflow.
     * @param {WorkflowUpsertArgs} args - Arguments to update or create a Workflow.
     * @example
     * // Update or create a Workflow
     * const workflow = await prisma.workflow.upsert({
     *   create: {
     *     // ... data to create a Workflow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workflow we want to update
     *   }
     * })
    **/
    upsert<T extends WorkflowUpsertArgs>(
      args: SelectSubset<T, WorkflowUpsertArgs>
    ): Prisma__WorkflowClient<WorkflowGetPayload<T>>

    /**
     * Find zero or more Workflows that matches the filter.
     * @param {WorkflowFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const workflow = await prisma.workflow.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: WorkflowFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Workflow.
     * @param {WorkflowAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const workflow = await prisma.workflow.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: WorkflowAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowCountArgs} args - Arguments to filter Workflows to count.
     * @example
     * // Count the number of Workflows
     * const count = await prisma.workflow.count({
     *   where: {
     *     // ... the filter for the Workflows we want to count
     *   }
     * })
    **/
    count<T extends WorkflowCountArgs>(
      args?: Subset<T, WorkflowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkflowAggregateArgs>(args: Subset<T, WorkflowAggregateArgs>): Prisma.PrismaPromise<GetWorkflowAggregateType<T>>

    /**
     * Group by Workflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkflowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkflowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Workflow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WorkflowClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    workflowRuns<T extends Workflow$workflowRunsArgs= {}>(args?: Subset<T, Workflow$workflowRunsArgs>): Prisma.PrismaPromise<Array<WorkflowRunGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Workflow base type for findUnique actions
   */
  export type WorkflowFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkflowInclude | null
    /**
     * Filter, which Workflow to fetch.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow findUnique
   */
  export interface WorkflowFindUniqueArgs extends WorkflowFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Workflow findUniqueOrThrow
   */
  export type WorkflowFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkflowInclude | null
    /**
     * Filter, which Workflow to fetch.
     */
    where: WorkflowWhereUniqueInput
  }


  /**
   * Workflow base type for findFirst actions
   */
  export type WorkflowFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkflowInclude | null
    /**
     * Filter, which Workflow to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: Enumerable<WorkflowOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflows.
     */
    distinct?: Enumerable<WorkflowScalarFieldEnum>
  }

  /**
   * Workflow findFirst
   */
  export interface WorkflowFindFirstArgs extends WorkflowFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Workflow findFirstOrThrow
   */
  export type WorkflowFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkflowInclude | null
    /**
     * Filter, which Workflow to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: Enumerable<WorkflowOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflows.
     */
    distinct?: Enumerable<WorkflowScalarFieldEnum>
  }


  /**
   * Workflow findMany
   */
  export type WorkflowFindManyArgs = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkflowInclude | null
    /**
     * Filter, which Workflows to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: Enumerable<WorkflowOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    distinct?: Enumerable<WorkflowScalarFieldEnum>
  }


  /**
   * Workflow create
   */
  export type WorkflowCreateArgs = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkflowInclude | null
    /**
     * The data needed to create a Workflow.
     */
    data: XOR<WorkflowCreateInput, WorkflowUncheckedCreateInput>
  }


  /**
   * Workflow createMany
   */
  export type WorkflowCreateManyArgs = {
    /**
     * The data used to create many Workflows.
     */
    data: Enumerable<WorkflowCreateManyInput>
  }


  /**
   * Workflow update
   */
  export type WorkflowUpdateArgs = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkflowInclude | null
    /**
     * The data needed to update a Workflow.
     */
    data: XOR<WorkflowUpdateInput, WorkflowUncheckedUpdateInput>
    /**
     * Choose, which Workflow to update.
     */
    where: WorkflowWhereUniqueInput
  }


  /**
   * Workflow updateMany
   */
  export type WorkflowUpdateManyArgs = {
    /**
     * The data used to update Workflows.
     */
    data: XOR<WorkflowUpdateManyMutationInput, WorkflowUncheckedUpdateManyInput>
    /**
     * Filter which Workflows to update
     */
    where?: WorkflowWhereInput
  }


  /**
   * Workflow upsert
   */
  export type WorkflowUpsertArgs = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkflowInclude | null
    /**
     * The filter to search for the Workflow to update in case it exists.
     */
    where: WorkflowWhereUniqueInput
    /**
     * In case the Workflow found by the `where` argument doesn't exist, create a new Workflow with this data.
     */
    create: XOR<WorkflowCreateInput, WorkflowUncheckedCreateInput>
    /**
     * In case the Workflow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowUpdateInput, WorkflowUncheckedUpdateInput>
  }


  /**
   * Workflow delete
   */
  export type WorkflowDeleteArgs = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkflowInclude | null
    /**
     * Filter which Workflow to delete.
     */
    where: WorkflowWhereUniqueInput
  }


  /**
   * Workflow deleteMany
   */
  export type WorkflowDeleteManyArgs = {
    /**
     * Filter which Workflows to delete
     */
    where?: WorkflowWhereInput
  }


  /**
   * Workflow findRaw
   */
  export type WorkflowFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Workflow aggregateRaw
   */
  export type WorkflowAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Workflow.workflowRuns
   */
  export type Workflow$workflowRunsArgs = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkflowRunInclude | null
    where?: WorkflowRunWhereInput
    orderBy?: Enumerable<WorkflowRunOrderByWithRelationInput>
    cursor?: WorkflowRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<WorkflowRunScalarFieldEnum>
  }


  /**
   * Workflow without action
   */
  export type WorkflowArgs = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkflowInclude | null
  }



  /**
   * Model WorkflowRun
   */


  export type AggregateWorkflowRun = {
    _count: WorkflowRunCountAggregateOutputType | null
    _min: WorkflowRunMinAggregateOutputType | null
    _max: WorkflowRunMaxAggregateOutputType | null
  }

  export type WorkflowRunMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    workflowId: string | null
    triggeredBy: string | null
  }

  export type WorkflowRunMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    workflowId: string | null
    triggeredBy: string | null
  }

  export type WorkflowRunCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    workflowId: number
    triggeredBy: number
    _all: number
  }


  export type WorkflowRunMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    workflowId?: true
    triggeredBy?: true
  }

  export type WorkflowRunMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    workflowId?: true
    triggeredBy?: true
  }

  export type WorkflowRunCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    workflowId?: true
    triggeredBy?: true
    _all?: true
  }

  export type WorkflowRunAggregateArgs = {
    /**
     * Filter which WorkflowRun to aggregate.
     */
    where?: WorkflowRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowRuns to fetch.
     */
    orderBy?: Enumerable<WorkflowRunOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkflowRuns
    **/
    _count?: true | WorkflowRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowRunMaxAggregateInputType
  }

  export type GetWorkflowRunAggregateType<T extends WorkflowRunAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflowRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflowRun[P]>
      : GetScalarType<T[P], AggregateWorkflowRun[P]>
  }




  export type WorkflowRunGroupByArgs = {
    where?: WorkflowRunWhereInput
    orderBy?: Enumerable<WorkflowRunOrderByWithAggregationInput>
    by: WorkflowRunScalarFieldEnum[]
    having?: WorkflowRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowRunCountAggregateInputType | true
    _min?: WorkflowRunMinAggregateInputType
    _max?: WorkflowRunMaxAggregateInputType
  }


  export type WorkflowRunGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    workflowId: string
    triggeredBy: string
    _count: WorkflowRunCountAggregateOutputType | null
    _min: WorkflowRunMinAggregateOutputType | null
    _max: WorkflowRunMaxAggregateOutputType | null
  }

  type GetWorkflowRunGroupByPayload<T extends WorkflowRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<WorkflowRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowRunGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowRunGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowRunSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workflowId?: boolean
    triggeredBy?: boolean
    workflow?: boolean | WorkflowArgs
  }


  export type WorkflowRunInclude = {
    workflow?: boolean | WorkflowArgs
  }

  export type WorkflowRunGetPayload<S extends boolean | null | undefined | WorkflowRunArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? WorkflowRun :
    S extends undefined ? never :
    S extends { include: any } & (WorkflowRunArgs | WorkflowRunFindManyArgs)
    ? WorkflowRun  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'workflow' ? WorkflowGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (WorkflowRunArgs | WorkflowRunFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'workflow' ? WorkflowGetPayload<S['select'][P]> :  P extends keyof WorkflowRun ? WorkflowRun[P] : never
  } 
      : WorkflowRun


  type WorkflowRunCountArgs = 
    Omit<WorkflowRunFindManyArgs, 'select' | 'include'> & {
      select?: WorkflowRunCountAggregateInputType | true
    }

  export interface WorkflowRunDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one WorkflowRun that matches the filter.
     * @param {WorkflowRunFindUniqueArgs} args - Arguments to find a WorkflowRun
     * @example
     * // Get one WorkflowRun
     * const workflowRun = await prisma.workflowRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WorkflowRunFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WorkflowRunFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'WorkflowRun'> extends True ? Prisma__WorkflowRunClient<WorkflowRunGetPayload<T>> : Prisma__WorkflowRunClient<WorkflowRunGetPayload<T> | null, null>

    /**
     * Find one WorkflowRun that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WorkflowRunFindUniqueOrThrowArgs} args - Arguments to find a WorkflowRun
     * @example
     * // Get one WorkflowRun
     * const workflowRun = await prisma.workflowRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WorkflowRunFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, WorkflowRunFindUniqueOrThrowArgs>
    ): Prisma__WorkflowRunClient<WorkflowRunGetPayload<T>>

    /**
     * Find the first WorkflowRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunFindFirstArgs} args - Arguments to find a WorkflowRun
     * @example
     * // Get one WorkflowRun
     * const workflowRun = await prisma.workflowRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WorkflowRunFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WorkflowRunFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'WorkflowRun'> extends True ? Prisma__WorkflowRunClient<WorkflowRunGetPayload<T>> : Prisma__WorkflowRunClient<WorkflowRunGetPayload<T> | null, null>

    /**
     * Find the first WorkflowRun that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunFindFirstOrThrowArgs} args - Arguments to find a WorkflowRun
     * @example
     * // Get one WorkflowRun
     * const workflowRun = await prisma.workflowRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WorkflowRunFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WorkflowRunFindFirstOrThrowArgs>
    ): Prisma__WorkflowRunClient<WorkflowRunGetPayload<T>>

    /**
     * Find zero or more WorkflowRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkflowRuns
     * const workflowRuns = await prisma.workflowRun.findMany()
     * 
     * // Get first 10 WorkflowRuns
     * const workflowRuns = await prisma.workflowRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowRunWithIdOnly = await prisma.workflowRun.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WorkflowRunFindManyArgs>(
      args?: SelectSubset<T, WorkflowRunFindManyArgs>
    ): Prisma.PrismaPromise<Array<WorkflowRunGetPayload<T>>>

    /**
     * Create a WorkflowRun.
     * @param {WorkflowRunCreateArgs} args - Arguments to create a WorkflowRun.
     * @example
     * // Create one WorkflowRun
     * const WorkflowRun = await prisma.workflowRun.create({
     *   data: {
     *     // ... data to create a WorkflowRun
     *   }
     * })
     * 
    **/
    create<T extends WorkflowRunCreateArgs>(
      args: SelectSubset<T, WorkflowRunCreateArgs>
    ): Prisma__WorkflowRunClient<WorkflowRunGetPayload<T>>

    /**
     * Create many WorkflowRuns.
     *     @param {WorkflowRunCreateManyArgs} args - Arguments to create many WorkflowRuns.
     *     @example
     *     // Create many WorkflowRuns
     *     const workflowRun = await prisma.workflowRun.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WorkflowRunCreateManyArgs>(
      args?: SelectSubset<T, WorkflowRunCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WorkflowRun.
     * @param {WorkflowRunDeleteArgs} args - Arguments to delete one WorkflowRun.
     * @example
     * // Delete one WorkflowRun
     * const WorkflowRun = await prisma.workflowRun.delete({
     *   where: {
     *     // ... filter to delete one WorkflowRun
     *   }
     * })
     * 
    **/
    delete<T extends WorkflowRunDeleteArgs>(
      args: SelectSubset<T, WorkflowRunDeleteArgs>
    ): Prisma__WorkflowRunClient<WorkflowRunGetPayload<T>>

    /**
     * Update one WorkflowRun.
     * @param {WorkflowRunUpdateArgs} args - Arguments to update one WorkflowRun.
     * @example
     * // Update one WorkflowRun
     * const workflowRun = await prisma.workflowRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WorkflowRunUpdateArgs>(
      args: SelectSubset<T, WorkflowRunUpdateArgs>
    ): Prisma__WorkflowRunClient<WorkflowRunGetPayload<T>>

    /**
     * Delete zero or more WorkflowRuns.
     * @param {WorkflowRunDeleteManyArgs} args - Arguments to filter WorkflowRuns to delete.
     * @example
     * // Delete a few WorkflowRuns
     * const { count } = await prisma.workflowRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WorkflowRunDeleteManyArgs>(
      args?: SelectSubset<T, WorkflowRunDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkflowRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkflowRuns
     * const workflowRun = await prisma.workflowRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WorkflowRunUpdateManyArgs>(
      args: SelectSubset<T, WorkflowRunUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkflowRun.
     * @param {WorkflowRunUpsertArgs} args - Arguments to update or create a WorkflowRun.
     * @example
     * // Update or create a WorkflowRun
     * const workflowRun = await prisma.workflowRun.upsert({
     *   create: {
     *     // ... data to create a WorkflowRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkflowRun we want to update
     *   }
     * })
    **/
    upsert<T extends WorkflowRunUpsertArgs>(
      args: SelectSubset<T, WorkflowRunUpsertArgs>
    ): Prisma__WorkflowRunClient<WorkflowRunGetPayload<T>>

    /**
     * Find zero or more WorkflowRuns that matches the filter.
     * @param {WorkflowRunFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const workflowRun = await prisma.workflowRun.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: WorkflowRunFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a WorkflowRun.
     * @param {WorkflowRunAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const workflowRun = await prisma.workflowRun.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: WorkflowRunAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of WorkflowRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunCountArgs} args - Arguments to filter WorkflowRuns to count.
     * @example
     * // Count the number of WorkflowRuns
     * const count = await prisma.workflowRun.count({
     *   where: {
     *     // ... the filter for the WorkflowRuns we want to count
     *   }
     * })
    **/
    count<T extends WorkflowRunCountArgs>(
      args?: Subset<T, WorkflowRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkflowRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkflowRunAggregateArgs>(args: Subset<T, WorkflowRunAggregateArgs>): Prisma.PrismaPromise<GetWorkflowRunAggregateType<T>>

    /**
     * Group by WorkflowRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkflowRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowRunGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowRunGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkflowRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkflowRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WorkflowRunClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    workflow<T extends WorkflowArgs= {}>(args?: Subset<T, WorkflowArgs>): Prisma__WorkflowClient<WorkflowGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * WorkflowRun base type for findUnique actions
   */
  export type WorkflowRunFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkflowRunInclude | null
    /**
     * Filter, which WorkflowRun to fetch.
     */
    where: WorkflowRunWhereUniqueInput
  }

  /**
   * WorkflowRun findUnique
   */
  export interface WorkflowRunFindUniqueArgs extends WorkflowRunFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WorkflowRun findUniqueOrThrow
   */
  export type WorkflowRunFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkflowRunInclude | null
    /**
     * Filter, which WorkflowRun to fetch.
     */
    where: WorkflowRunWhereUniqueInput
  }


  /**
   * WorkflowRun base type for findFirst actions
   */
  export type WorkflowRunFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkflowRunInclude | null
    /**
     * Filter, which WorkflowRun to fetch.
     */
    where?: WorkflowRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowRuns to fetch.
     */
    orderBy?: Enumerable<WorkflowRunOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowRuns.
     */
    cursor?: WorkflowRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowRuns.
     */
    distinct?: Enumerable<WorkflowRunScalarFieldEnum>
  }

  /**
   * WorkflowRun findFirst
   */
  export interface WorkflowRunFindFirstArgs extends WorkflowRunFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WorkflowRun findFirstOrThrow
   */
  export type WorkflowRunFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkflowRunInclude | null
    /**
     * Filter, which WorkflowRun to fetch.
     */
    where?: WorkflowRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowRuns to fetch.
     */
    orderBy?: Enumerable<WorkflowRunOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowRuns.
     */
    cursor?: WorkflowRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowRuns.
     */
    distinct?: Enumerable<WorkflowRunScalarFieldEnum>
  }


  /**
   * WorkflowRun findMany
   */
  export type WorkflowRunFindManyArgs = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkflowRunInclude | null
    /**
     * Filter, which WorkflowRuns to fetch.
     */
    where?: WorkflowRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowRuns to fetch.
     */
    orderBy?: Enumerable<WorkflowRunOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkflowRuns.
     */
    cursor?: WorkflowRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowRuns.
     */
    skip?: number
    distinct?: Enumerable<WorkflowRunScalarFieldEnum>
  }


  /**
   * WorkflowRun create
   */
  export type WorkflowRunCreateArgs = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkflowRunInclude | null
    /**
     * The data needed to create a WorkflowRun.
     */
    data: XOR<WorkflowRunCreateInput, WorkflowRunUncheckedCreateInput>
  }


  /**
   * WorkflowRun createMany
   */
  export type WorkflowRunCreateManyArgs = {
    /**
     * The data used to create many WorkflowRuns.
     */
    data: Enumerable<WorkflowRunCreateManyInput>
  }


  /**
   * WorkflowRun update
   */
  export type WorkflowRunUpdateArgs = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkflowRunInclude | null
    /**
     * The data needed to update a WorkflowRun.
     */
    data: XOR<WorkflowRunUpdateInput, WorkflowRunUncheckedUpdateInput>
    /**
     * Choose, which WorkflowRun to update.
     */
    where: WorkflowRunWhereUniqueInput
  }


  /**
   * WorkflowRun updateMany
   */
  export type WorkflowRunUpdateManyArgs = {
    /**
     * The data used to update WorkflowRuns.
     */
    data: XOR<WorkflowRunUpdateManyMutationInput, WorkflowRunUncheckedUpdateManyInput>
    /**
     * Filter which WorkflowRuns to update
     */
    where?: WorkflowRunWhereInput
  }


  /**
   * WorkflowRun upsert
   */
  export type WorkflowRunUpsertArgs = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkflowRunInclude | null
    /**
     * The filter to search for the WorkflowRun to update in case it exists.
     */
    where: WorkflowRunWhereUniqueInput
    /**
     * In case the WorkflowRun found by the `where` argument doesn't exist, create a new WorkflowRun with this data.
     */
    create: XOR<WorkflowRunCreateInput, WorkflowRunUncheckedCreateInput>
    /**
     * In case the WorkflowRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowRunUpdateInput, WorkflowRunUncheckedUpdateInput>
  }


  /**
   * WorkflowRun delete
   */
  export type WorkflowRunDeleteArgs = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkflowRunInclude | null
    /**
     * Filter which WorkflowRun to delete.
     */
    where: WorkflowRunWhereUniqueInput
  }


  /**
   * WorkflowRun deleteMany
   */
  export type WorkflowRunDeleteManyArgs = {
    /**
     * Filter which WorkflowRuns to delete
     */
    where?: WorkflowRunWhereInput
  }


  /**
   * WorkflowRun findRaw
   */
  export type WorkflowRunFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * WorkflowRun aggregateRaw
   */
  export type WorkflowRunAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * WorkflowRun without action
   */
  export type WorkflowRunArgs = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkflowRunInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const WorkflowRunScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    workflowId: 'workflowId',
    triggeredBy: 'triggeredBy'
  };

  export type WorkflowRunScalarFieldEnum = (typeof WorkflowRunScalarFieldEnum)[keyof typeof WorkflowRunScalarFieldEnum]


  export const WorkflowScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    goal: 'goal',
    relevantEvents: 'relevantEvents',
    status: 'status'
  };

  export type WorkflowScalarFieldEnum = (typeof WorkflowScalarFieldEnum)[keyof typeof WorkflowScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type WorkflowWhereInput = {
    AND?: Enumerable<WorkflowWhereInput>
    OR?: Enumerable<WorkflowWhereInput>
    NOT?: Enumerable<WorkflowWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    goal?: StringFilter | string
    relevantEvents?: StringNullableListFilter
    status?: EnumWorkflowStatusFilter | WorkflowStatus
    workflowRuns?: WorkflowRunListRelationFilter
  }

  export type WorkflowOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    goal?: SortOrder
    relevantEvents?: SortOrder
    status?: SortOrder
    workflowRuns?: WorkflowRunOrderByRelationAggregateInput
  }

  export type WorkflowWhereUniqueInput = {
    id?: string
  }

  export type WorkflowOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    goal?: SortOrder
    relevantEvents?: SortOrder
    status?: SortOrder
    _count?: WorkflowCountOrderByAggregateInput
    _max?: WorkflowMaxOrderByAggregateInput
    _min?: WorkflowMinOrderByAggregateInput
  }

  export type WorkflowScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WorkflowScalarWhereWithAggregatesInput>
    OR?: Enumerable<WorkflowScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WorkflowScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    goal?: StringWithAggregatesFilter | string
    relevantEvents?: StringNullableListFilter
    status?: EnumWorkflowStatusWithAggregatesFilter | WorkflowStatus
  }

  export type WorkflowRunWhereInput = {
    AND?: Enumerable<WorkflowRunWhereInput>
    OR?: Enumerable<WorkflowRunWhereInput>
    NOT?: Enumerable<WorkflowRunWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    workflowId?: StringFilter | string
    triggeredBy?: StringFilter | string
    workflow?: XOR<WorkflowRelationFilter, WorkflowWhereInput>
  }

  export type WorkflowRunOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workflowId?: SortOrder
    triggeredBy?: SortOrder
    workflow?: WorkflowOrderByWithRelationInput
  }

  export type WorkflowRunWhereUniqueInput = {
    id?: string
  }

  export type WorkflowRunOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workflowId?: SortOrder
    triggeredBy?: SortOrder
    _count?: WorkflowRunCountOrderByAggregateInput
    _max?: WorkflowRunMaxOrderByAggregateInput
    _min?: WorkflowRunMinOrderByAggregateInput
  }

  export type WorkflowRunScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WorkflowRunScalarWhereWithAggregatesInput>
    OR?: Enumerable<WorkflowRunScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WorkflowRunScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    workflowId?: StringWithAggregatesFilter | string
    triggeredBy?: StringWithAggregatesFilter | string
  }

  export type WorkflowCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    goal: string
    relevantEvents?: WorkflowCreaterelevantEventsInput | Enumerable<string>
    status: WorkflowStatus
    workflowRuns?: WorkflowRunCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    goal: string
    relevantEvents?: WorkflowCreaterelevantEventsInput | Enumerable<string>
    status: WorkflowStatus
    workflowRuns?: WorkflowRunUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    relevantEvents?: WorkflowUpdaterelevantEventsInput | Enumerable<string>
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | WorkflowStatus
    workflowRuns?: WorkflowRunUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    relevantEvents?: WorkflowUpdaterelevantEventsInput | Enumerable<string>
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | WorkflowStatus
    workflowRuns?: WorkflowRunUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    goal: string
    relevantEvents?: WorkflowCreaterelevantEventsInput | Enumerable<string>
    status: WorkflowStatus
  }

  export type WorkflowUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    relevantEvents?: WorkflowUpdaterelevantEventsInput | Enumerable<string>
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | WorkflowStatus
  }

  export type WorkflowUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    relevantEvents?: WorkflowUpdaterelevantEventsInput | Enumerable<string>
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | WorkflowStatus
  }

  export type WorkflowRunCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    triggeredBy: string
    workflow: WorkflowCreateNestedOneWithoutWorkflowRunsInput
  }

  export type WorkflowRunUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workflowId: string
    triggeredBy: string
  }

  export type WorkflowRunUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triggeredBy?: StringFieldUpdateOperationsInput | string
    workflow?: WorkflowUpdateOneRequiredWithoutWorkflowRunsNestedInput
  }

  export type WorkflowRunUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflowId?: StringFieldUpdateOperationsInput | string
    triggeredBy?: StringFieldUpdateOperationsInput | string
  }

  export type WorkflowRunCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workflowId: string
    triggeredBy: string
  }

  export type WorkflowRunUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triggeredBy?: StringFieldUpdateOperationsInput | string
  }

  export type WorkflowRunUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflowId?: StringFieldUpdateOperationsInput | string
    triggeredBy?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type EnumWorkflowStatusFilter = {
    equals?: WorkflowStatus
    in?: Enumerable<WorkflowStatus>
    notIn?: Enumerable<WorkflowStatus>
    not?: NestedEnumWorkflowStatusFilter | WorkflowStatus
  }

  export type WorkflowRunListRelationFilter = {
    every?: WorkflowRunWhereInput
    some?: WorkflowRunWhereInput
    none?: WorkflowRunWhereInput
  }

  export type WorkflowRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkflowCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    goal?: SortOrder
    relevantEvents?: SortOrder
    status?: SortOrder
  }

  export type WorkflowMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    goal?: SortOrder
    status?: SortOrder
  }

  export type WorkflowMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    goal?: SortOrder
    status?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type EnumWorkflowStatusWithAggregatesFilter = {
    equals?: WorkflowStatus
    in?: Enumerable<WorkflowStatus>
    notIn?: Enumerable<WorkflowStatus>
    not?: NestedEnumWorkflowStatusWithAggregatesFilter | WorkflowStatus
    _count?: NestedIntFilter
    _min?: NestedEnumWorkflowStatusFilter
    _max?: NestedEnumWorkflowStatusFilter
  }

  export type WorkflowRelationFilter = {
    is?: WorkflowWhereInput
    isNot?: WorkflowWhereInput
  }

  export type WorkflowRunCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workflowId?: SortOrder
    triggeredBy?: SortOrder
  }

  export type WorkflowRunMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workflowId?: SortOrder
    triggeredBy?: SortOrder
  }

  export type WorkflowRunMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workflowId?: SortOrder
    triggeredBy?: SortOrder
  }

  export type WorkflowCreaterelevantEventsInput = {
    set: Enumerable<string>
  }

  export type WorkflowRunCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<Enumerable<WorkflowRunCreateWithoutWorkflowInput>, Enumerable<WorkflowRunUncheckedCreateWithoutWorkflowInput>>
    connectOrCreate?: Enumerable<WorkflowRunCreateOrConnectWithoutWorkflowInput>
    createMany?: WorkflowRunCreateManyWorkflowInputEnvelope
    connect?: Enumerable<WorkflowRunWhereUniqueInput>
  }

  export type WorkflowRunUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<Enumerable<WorkflowRunCreateWithoutWorkflowInput>, Enumerable<WorkflowRunUncheckedCreateWithoutWorkflowInput>>
    connectOrCreate?: Enumerable<WorkflowRunCreateOrConnectWithoutWorkflowInput>
    createMany?: WorkflowRunCreateManyWorkflowInputEnvelope
    connect?: Enumerable<WorkflowRunWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type WorkflowUpdaterelevantEventsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type EnumWorkflowStatusFieldUpdateOperationsInput = {
    set?: WorkflowStatus
  }

  export type WorkflowRunUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<Enumerable<WorkflowRunCreateWithoutWorkflowInput>, Enumerable<WorkflowRunUncheckedCreateWithoutWorkflowInput>>
    connectOrCreate?: Enumerable<WorkflowRunCreateOrConnectWithoutWorkflowInput>
    upsert?: Enumerable<WorkflowRunUpsertWithWhereUniqueWithoutWorkflowInput>
    createMany?: WorkflowRunCreateManyWorkflowInputEnvelope
    set?: Enumerable<WorkflowRunWhereUniqueInput>
    disconnect?: Enumerable<WorkflowRunWhereUniqueInput>
    delete?: Enumerable<WorkflowRunWhereUniqueInput>
    connect?: Enumerable<WorkflowRunWhereUniqueInput>
    update?: Enumerable<WorkflowRunUpdateWithWhereUniqueWithoutWorkflowInput>
    updateMany?: Enumerable<WorkflowRunUpdateManyWithWhereWithoutWorkflowInput>
    deleteMany?: Enumerable<WorkflowRunScalarWhereInput>
  }

  export type WorkflowRunUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<Enumerable<WorkflowRunCreateWithoutWorkflowInput>, Enumerable<WorkflowRunUncheckedCreateWithoutWorkflowInput>>
    connectOrCreate?: Enumerable<WorkflowRunCreateOrConnectWithoutWorkflowInput>
    upsert?: Enumerable<WorkflowRunUpsertWithWhereUniqueWithoutWorkflowInput>
    createMany?: WorkflowRunCreateManyWorkflowInputEnvelope
    set?: Enumerable<WorkflowRunWhereUniqueInput>
    disconnect?: Enumerable<WorkflowRunWhereUniqueInput>
    delete?: Enumerable<WorkflowRunWhereUniqueInput>
    connect?: Enumerable<WorkflowRunWhereUniqueInput>
    update?: Enumerable<WorkflowRunUpdateWithWhereUniqueWithoutWorkflowInput>
    updateMany?: Enumerable<WorkflowRunUpdateManyWithWhereWithoutWorkflowInput>
    deleteMany?: Enumerable<WorkflowRunScalarWhereInput>
  }

  export type WorkflowCreateNestedOneWithoutWorkflowRunsInput = {
    create?: XOR<WorkflowCreateWithoutWorkflowRunsInput, WorkflowUncheckedCreateWithoutWorkflowRunsInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutWorkflowRunsInput
    connect?: WorkflowWhereUniqueInput
  }

  export type WorkflowUpdateOneRequiredWithoutWorkflowRunsNestedInput = {
    create?: XOR<WorkflowCreateWithoutWorkflowRunsInput, WorkflowUncheckedCreateWithoutWorkflowRunsInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutWorkflowRunsInput
    upsert?: WorkflowUpsertWithoutWorkflowRunsInput
    connect?: WorkflowWhereUniqueInput
    update?: XOR<WorkflowUpdateWithoutWorkflowRunsInput, WorkflowUncheckedUpdateWithoutWorkflowRunsInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedEnumWorkflowStatusFilter = {
    equals?: WorkflowStatus
    in?: Enumerable<WorkflowStatus>
    notIn?: Enumerable<WorkflowStatus>
    not?: NestedEnumWorkflowStatusFilter | WorkflowStatus
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedEnumWorkflowStatusWithAggregatesFilter = {
    equals?: WorkflowStatus
    in?: Enumerable<WorkflowStatus>
    notIn?: Enumerable<WorkflowStatus>
    not?: NestedEnumWorkflowStatusWithAggregatesFilter | WorkflowStatus
    _count?: NestedIntFilter
    _min?: NestedEnumWorkflowStatusFilter
    _max?: NestedEnumWorkflowStatusFilter
  }

  export type WorkflowRunCreateWithoutWorkflowInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    triggeredBy: string
  }

  export type WorkflowRunUncheckedCreateWithoutWorkflowInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    triggeredBy: string
  }

  export type WorkflowRunCreateOrConnectWithoutWorkflowInput = {
    where: WorkflowRunWhereUniqueInput
    create: XOR<WorkflowRunCreateWithoutWorkflowInput, WorkflowRunUncheckedCreateWithoutWorkflowInput>
  }

  export type WorkflowRunCreateManyWorkflowInputEnvelope = {
    data: Enumerable<WorkflowRunCreateManyWorkflowInput>
  }

  export type WorkflowRunUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: WorkflowRunWhereUniqueInput
    update: XOR<WorkflowRunUpdateWithoutWorkflowInput, WorkflowRunUncheckedUpdateWithoutWorkflowInput>
    create: XOR<WorkflowRunCreateWithoutWorkflowInput, WorkflowRunUncheckedCreateWithoutWorkflowInput>
  }

  export type WorkflowRunUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: WorkflowRunWhereUniqueInput
    data: XOR<WorkflowRunUpdateWithoutWorkflowInput, WorkflowRunUncheckedUpdateWithoutWorkflowInput>
  }

  export type WorkflowRunUpdateManyWithWhereWithoutWorkflowInput = {
    where: WorkflowRunScalarWhereInput
    data: XOR<WorkflowRunUpdateManyMutationInput, WorkflowRunUncheckedUpdateManyWithoutWorkflowRunsInput>
  }

  export type WorkflowRunScalarWhereInput = {
    AND?: Enumerable<WorkflowRunScalarWhereInput>
    OR?: Enumerable<WorkflowRunScalarWhereInput>
    NOT?: Enumerable<WorkflowRunScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    workflowId?: StringFilter | string
    triggeredBy?: StringFilter | string
  }

  export type WorkflowCreateWithoutWorkflowRunsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    goal: string
    relevantEvents?: WorkflowCreaterelevantEventsInput | Enumerable<string>
    status: WorkflowStatus
  }

  export type WorkflowUncheckedCreateWithoutWorkflowRunsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    goal: string
    relevantEvents?: WorkflowCreaterelevantEventsInput | Enumerable<string>
    status: WorkflowStatus
  }

  export type WorkflowCreateOrConnectWithoutWorkflowRunsInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutWorkflowRunsInput, WorkflowUncheckedCreateWithoutWorkflowRunsInput>
  }

  export type WorkflowUpsertWithoutWorkflowRunsInput = {
    update: XOR<WorkflowUpdateWithoutWorkflowRunsInput, WorkflowUncheckedUpdateWithoutWorkflowRunsInput>
    create: XOR<WorkflowCreateWithoutWorkflowRunsInput, WorkflowUncheckedCreateWithoutWorkflowRunsInput>
  }

  export type WorkflowUpdateWithoutWorkflowRunsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    relevantEvents?: WorkflowUpdaterelevantEventsInput | Enumerable<string>
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | WorkflowStatus
  }

  export type WorkflowUncheckedUpdateWithoutWorkflowRunsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    relevantEvents?: WorkflowUpdaterelevantEventsInput | Enumerable<string>
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | WorkflowStatus
  }

  export type WorkflowRunCreateManyWorkflowInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    triggeredBy: string
  }

  export type WorkflowRunUpdateWithoutWorkflowInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triggeredBy?: StringFieldUpdateOperationsInput | string
  }

  export type WorkflowRunUncheckedUpdateWithoutWorkflowInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triggeredBy?: StringFieldUpdateOperationsInput | string
  }

  export type WorkflowRunUncheckedUpdateManyWithoutWorkflowRunsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triggeredBy?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}