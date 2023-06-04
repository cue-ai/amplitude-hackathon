
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
 * Model Model
 * 
 */
export type Model = {
  id: string
  createdAt: Date
  updatedAt: Date
  name: string
  goal: string
  relevantEvents: string[]
  status: ModelStatus
  accuracy: number | null
}

/**
 * Model ModelRun
 * 
 */
export type ModelRun = {
  id: string
  createdAt: Date
  updatedAt: Date
  workflowId: string
  triggeredBy: string
  output: boolean
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const ModelStatus: {
  FetchingData: 'FetchingData',
  ProcessingData: 'ProcessingData',
  Training: 'Training',
  Ready: 'Ready'
};

export type ModelStatus = (typeof ModelStatus)[keyof typeof ModelStatus]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Models
 * const models = await prisma.model.findMany()
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
   * // Fetch zero or more Models
   * const models = await prisma.model.findMany()
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
   * `prisma.model`: Exposes CRUD operations for the **Model** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Models
    * const models = await prisma.model.findMany()
    * ```
    */
  get model(): Prisma.ModelDelegate<GlobalReject>;

  /**
   * `prisma.modelRun`: Exposes CRUD operations for the **ModelRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModelRuns
    * const modelRuns = await prisma.modelRun.findMany()
    * ```
    */
  get modelRun(): Prisma.ModelRunDelegate<GlobalReject>;
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
    Model: 'Model',
    ModelRun: 'ModelRun'
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
   * Count Type ModelCountOutputType
   */


  export type ModelCountOutputType = {
    workflowRuns: number
  }

  export type ModelCountOutputTypeSelect = {
    workflowRuns?: boolean
  }

  export type ModelCountOutputTypeGetPayload<S extends boolean | null | undefined | ModelCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ModelCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ModelCountOutputTypeArgs)
    ? ModelCountOutputType 
    : S extends { select: any } & (ModelCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ModelCountOutputType ? ModelCountOutputType[P] : never
  } 
      : ModelCountOutputType




  // Custom InputTypes

  /**
   * ModelCountOutputType without action
   */
  export type ModelCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ModelCountOutputType
     */
    select?: ModelCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Model
   */


  export type AggregateModel = {
    _count: ModelCountAggregateOutputType | null
    _avg: ModelAvgAggregateOutputType | null
    _sum: ModelSumAggregateOutputType | null
    _min: ModelMinAggregateOutputType | null
    _max: ModelMaxAggregateOutputType | null
  }

  export type ModelAvgAggregateOutputType = {
    accuracy: number | null
  }

  export type ModelSumAggregateOutputType = {
    accuracy: number | null
  }

  export type ModelMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    goal: string | null
    status: ModelStatus | null
    accuracy: number | null
  }

  export type ModelMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    goal: string | null
    status: ModelStatus | null
    accuracy: number | null
  }

  export type ModelCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    goal: number
    relevantEvents: number
    status: number
    accuracy: number
    _all: number
  }


  export type ModelAvgAggregateInputType = {
    accuracy?: true
  }

  export type ModelSumAggregateInputType = {
    accuracy?: true
  }

  export type ModelMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    goal?: true
    status?: true
    accuracy?: true
  }

  export type ModelMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    goal?: true
    status?: true
    accuracy?: true
  }

  export type ModelCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    goal?: true
    relevantEvents?: true
    status?: true
    accuracy?: true
    _all?: true
  }

  export type ModelAggregateArgs = {
    /**
     * Filter which Model to aggregate.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: Enumerable<ModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Models
    **/
    _count?: true | ModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelMaxAggregateInputType
  }

  export type GetModelAggregateType<T extends ModelAggregateArgs> = {
        [P in keyof T & keyof AggregateModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModel[P]>
      : GetScalarType<T[P], AggregateModel[P]>
  }




  export type ModelGroupByArgs = {
    where?: ModelWhereInput
    orderBy?: Enumerable<ModelOrderByWithAggregationInput>
    by: ModelScalarFieldEnum[]
    having?: ModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelCountAggregateInputType | true
    _avg?: ModelAvgAggregateInputType
    _sum?: ModelSumAggregateInputType
    _min?: ModelMinAggregateInputType
    _max?: ModelMaxAggregateInputType
  }


  export type ModelGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    goal: string
    relevantEvents: string[]
    status: ModelStatus
    accuracy: number | null
    _count: ModelCountAggregateOutputType | null
    _avg: ModelAvgAggregateOutputType | null
    _sum: ModelSumAggregateOutputType | null
    _min: ModelMinAggregateOutputType | null
    _max: ModelMaxAggregateOutputType | null
  }

  type GetModelGroupByPayload<T extends ModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelGroupByOutputType[P]>
            : GetScalarType<T[P], ModelGroupByOutputType[P]>
        }
      >
    >


  export type ModelSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    goal?: boolean
    relevantEvents?: boolean
    status?: boolean
    accuracy?: boolean
    workflowRuns?: boolean | Model$workflowRunsArgs
    _count?: boolean | ModelCountOutputTypeArgs
  }


  export type ModelInclude = {
    workflowRuns?: boolean | Model$workflowRunsArgs
    _count?: boolean | ModelCountOutputTypeArgs
  }

  export type ModelGetPayload<S extends boolean | null | undefined | ModelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Model :
    S extends undefined ? never :
    S extends { include: any } & (ModelArgs | ModelFindManyArgs)
    ? Model  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'workflowRuns' ? Array < ModelRunGetPayload<S['include'][P]>>  :
        P extends '_count' ? ModelCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ModelArgs | ModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'workflowRuns' ? Array < ModelRunGetPayload<S['select'][P]>>  :
        P extends '_count' ? ModelCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Model ? Model[P] : never
  } 
      : Model


  type ModelCountArgs = 
    Omit<ModelFindManyArgs, 'select' | 'include'> & {
      select?: ModelCountAggregateInputType | true
    }

  export interface ModelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Model that matches the filter.
     * @param {ModelFindUniqueArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ModelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ModelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Model'> extends True ? Prisma__ModelClient<ModelGetPayload<T>> : Prisma__ModelClient<ModelGetPayload<T> | null, null>

    /**
     * Find one Model that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ModelFindUniqueOrThrowArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ModelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ModelFindUniqueOrThrowArgs>
    ): Prisma__ModelClient<ModelGetPayload<T>>

    /**
     * Find the first Model that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindFirstArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ModelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ModelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Model'> extends True ? Prisma__ModelClient<ModelGetPayload<T>> : Prisma__ModelClient<ModelGetPayload<T> | null, null>

    /**
     * Find the first Model that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindFirstOrThrowArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ModelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ModelFindFirstOrThrowArgs>
    ): Prisma__ModelClient<ModelGetPayload<T>>

    /**
     * Find zero or more Models that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Models
     * const models = await prisma.model.findMany()
     * 
     * // Get first 10 Models
     * const models = await prisma.model.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelWithIdOnly = await prisma.model.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ModelFindManyArgs>(
      args?: SelectSubset<T, ModelFindManyArgs>
    ): Prisma.PrismaPromise<Array<ModelGetPayload<T>>>

    /**
     * Create a Model.
     * @param {ModelCreateArgs} args - Arguments to create a Model.
     * @example
     * // Create one Model
     * const Model = await prisma.model.create({
     *   data: {
     *     // ... data to create a Model
     *   }
     * })
     * 
    **/
    create<T extends ModelCreateArgs>(
      args: SelectSubset<T, ModelCreateArgs>
    ): Prisma__ModelClient<ModelGetPayload<T>>

    /**
     * Create many Models.
     *     @param {ModelCreateManyArgs} args - Arguments to create many Models.
     *     @example
     *     // Create many Models
     *     const model = await prisma.model.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ModelCreateManyArgs>(
      args?: SelectSubset<T, ModelCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Model.
     * @param {ModelDeleteArgs} args - Arguments to delete one Model.
     * @example
     * // Delete one Model
     * const Model = await prisma.model.delete({
     *   where: {
     *     // ... filter to delete one Model
     *   }
     * })
     * 
    **/
    delete<T extends ModelDeleteArgs>(
      args: SelectSubset<T, ModelDeleteArgs>
    ): Prisma__ModelClient<ModelGetPayload<T>>

    /**
     * Update one Model.
     * @param {ModelUpdateArgs} args - Arguments to update one Model.
     * @example
     * // Update one Model
     * const model = await prisma.model.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ModelUpdateArgs>(
      args: SelectSubset<T, ModelUpdateArgs>
    ): Prisma__ModelClient<ModelGetPayload<T>>

    /**
     * Delete zero or more Models.
     * @param {ModelDeleteManyArgs} args - Arguments to filter Models to delete.
     * @example
     * // Delete a few Models
     * const { count } = await prisma.model.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ModelDeleteManyArgs>(
      args?: SelectSubset<T, ModelDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Models
     * const model = await prisma.model.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ModelUpdateManyArgs>(
      args: SelectSubset<T, ModelUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Model.
     * @param {ModelUpsertArgs} args - Arguments to update or create a Model.
     * @example
     * // Update or create a Model
     * const model = await prisma.model.upsert({
     *   create: {
     *     // ... data to create a Model
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Model we want to update
     *   }
     * })
    **/
    upsert<T extends ModelUpsertArgs>(
      args: SelectSubset<T, ModelUpsertArgs>
    ): Prisma__ModelClient<ModelGetPayload<T>>

    /**
     * Find zero or more Models that matches the filter.
     * @param {ModelFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const model = await prisma.model.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ModelFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Model.
     * @param {ModelAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const model = await prisma.model.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ModelAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelCountArgs} args - Arguments to filter Models to count.
     * @example
     * // Count the number of Models
     * const count = await prisma.model.count({
     *   where: {
     *     // ... the filter for the Models we want to count
     *   }
     * })
    **/
    count<T extends ModelCountArgs>(
      args?: Subset<T, ModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Model.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModelAggregateArgs>(args: Subset<T, ModelAggregateArgs>): Prisma.PrismaPromise<GetModelAggregateType<T>>

    /**
     * Group by Model.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelGroupByArgs} args - Group by arguments.
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
      T extends ModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModelGroupByArgs['orderBy'] }
        : { orderBy?: ModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Model.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ModelClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    workflowRuns<T extends Model$workflowRunsArgs= {}>(args?: Subset<T, Model$workflowRunsArgs>): Prisma.PrismaPromise<Array<ModelRunGetPayload<T>>| Null>;

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
   * Model base type for findUnique actions
   */
  export type ModelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude | null
    /**
     * Filter, which Model to fetch.
     */
    where: ModelWhereUniqueInput
  }

  /**
   * Model findUnique
   */
  export interface ModelFindUniqueArgs extends ModelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Model findUniqueOrThrow
   */
  export type ModelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude | null
    /**
     * Filter, which Model to fetch.
     */
    where: ModelWhereUniqueInput
  }


  /**
   * Model base type for findFirst actions
   */
  export type ModelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude | null
    /**
     * Filter, which Model to fetch.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: Enumerable<ModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Models.
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     */
    distinct?: Enumerable<ModelScalarFieldEnum>
  }

  /**
   * Model findFirst
   */
  export interface ModelFindFirstArgs extends ModelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Model findFirstOrThrow
   */
  export type ModelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude | null
    /**
     * Filter, which Model to fetch.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: Enumerable<ModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Models.
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     */
    distinct?: Enumerable<ModelScalarFieldEnum>
  }


  /**
   * Model findMany
   */
  export type ModelFindManyArgs = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude | null
    /**
     * Filter, which Models to fetch.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: Enumerable<ModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Models.
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    distinct?: Enumerable<ModelScalarFieldEnum>
  }


  /**
   * Model create
   */
  export type ModelCreateArgs = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude | null
    /**
     * The data needed to create a Model.
     */
    data: XOR<ModelCreateInput, ModelUncheckedCreateInput>
  }


  /**
   * Model createMany
   */
  export type ModelCreateManyArgs = {
    /**
     * The data used to create many Models.
     */
    data: Enumerable<ModelCreateManyInput>
  }


  /**
   * Model update
   */
  export type ModelUpdateArgs = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude | null
    /**
     * The data needed to update a Model.
     */
    data: XOR<ModelUpdateInput, ModelUncheckedUpdateInput>
    /**
     * Choose, which Model to update.
     */
    where: ModelWhereUniqueInput
  }


  /**
   * Model updateMany
   */
  export type ModelUpdateManyArgs = {
    /**
     * The data used to update Models.
     */
    data: XOR<ModelUpdateManyMutationInput, ModelUncheckedUpdateManyInput>
    /**
     * Filter which Models to update
     */
    where?: ModelWhereInput
  }


  /**
   * Model upsert
   */
  export type ModelUpsertArgs = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude | null
    /**
     * The filter to search for the Model to update in case it exists.
     */
    where: ModelWhereUniqueInput
    /**
     * In case the Model found by the `where` argument doesn't exist, create a new Model with this data.
     */
    create: XOR<ModelCreateInput, ModelUncheckedCreateInput>
    /**
     * In case the Model was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModelUpdateInput, ModelUncheckedUpdateInput>
  }


  /**
   * Model delete
   */
  export type ModelDeleteArgs = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude | null
    /**
     * Filter which Model to delete.
     */
    where: ModelWhereUniqueInput
  }


  /**
   * Model deleteMany
   */
  export type ModelDeleteManyArgs = {
    /**
     * Filter which Models to delete
     */
    where?: ModelWhereInput
  }


  /**
   * Model findRaw
   */
  export type ModelFindRawArgs = {
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
   * Model aggregateRaw
   */
  export type ModelAggregateRawArgs = {
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
   * Model.workflowRuns
   */
  export type Model$workflowRunsArgs = {
    /**
     * Select specific fields to fetch from the ModelRun
     */
    select?: ModelRunSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelRunInclude | null
    where?: ModelRunWhereInput
    orderBy?: Enumerable<ModelRunOrderByWithRelationInput>
    cursor?: ModelRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ModelRunScalarFieldEnum>
  }


  /**
   * Model without action
   */
  export type ModelArgs = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude | null
  }



  /**
   * Model ModelRun
   */


  export type AggregateModelRun = {
    _count: ModelRunCountAggregateOutputType | null
    _min: ModelRunMinAggregateOutputType | null
    _max: ModelRunMaxAggregateOutputType | null
  }

  export type ModelRunMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    workflowId: string | null
    triggeredBy: string | null
    output: boolean | null
  }

  export type ModelRunMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    workflowId: string | null
    triggeredBy: string | null
    output: boolean | null
  }

  export type ModelRunCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    workflowId: number
    triggeredBy: number
    output: number
    _all: number
  }


  export type ModelRunMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    workflowId?: true
    triggeredBy?: true
    output?: true
  }

  export type ModelRunMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    workflowId?: true
    triggeredBy?: true
    output?: true
  }

  export type ModelRunCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    workflowId?: true
    triggeredBy?: true
    output?: true
    _all?: true
  }

  export type ModelRunAggregateArgs = {
    /**
     * Filter which ModelRun to aggregate.
     */
    where?: ModelRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelRuns to fetch.
     */
    orderBy?: Enumerable<ModelRunOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModelRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModelRuns
    **/
    _count?: true | ModelRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelRunMaxAggregateInputType
  }

  export type GetModelRunAggregateType<T extends ModelRunAggregateArgs> = {
        [P in keyof T & keyof AggregateModelRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModelRun[P]>
      : GetScalarType<T[P], AggregateModelRun[P]>
  }




  export type ModelRunGroupByArgs = {
    where?: ModelRunWhereInput
    orderBy?: Enumerable<ModelRunOrderByWithAggregationInput>
    by: ModelRunScalarFieldEnum[]
    having?: ModelRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelRunCountAggregateInputType | true
    _min?: ModelRunMinAggregateInputType
    _max?: ModelRunMaxAggregateInputType
  }


  export type ModelRunGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    workflowId: string
    triggeredBy: string
    output: boolean
    _count: ModelRunCountAggregateOutputType | null
    _min: ModelRunMinAggregateOutputType | null
    _max: ModelRunMaxAggregateOutputType | null
  }

  type GetModelRunGroupByPayload<T extends ModelRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ModelRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelRunGroupByOutputType[P]>
            : GetScalarType<T[P], ModelRunGroupByOutputType[P]>
        }
      >
    >


  export type ModelRunSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workflowId?: boolean
    triggeredBy?: boolean
    output?: boolean
    workflow?: boolean | ModelArgs
  }


  export type ModelRunInclude = {
    workflow?: boolean | ModelArgs
  }

  export type ModelRunGetPayload<S extends boolean | null | undefined | ModelRunArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ModelRun :
    S extends undefined ? never :
    S extends { include: any } & (ModelRunArgs | ModelRunFindManyArgs)
    ? ModelRun  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'workflow' ? ModelGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ModelRunArgs | ModelRunFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'workflow' ? ModelGetPayload<S['select'][P]> :  P extends keyof ModelRun ? ModelRun[P] : never
  } 
      : ModelRun


  type ModelRunCountArgs = 
    Omit<ModelRunFindManyArgs, 'select' | 'include'> & {
      select?: ModelRunCountAggregateInputType | true
    }

  export interface ModelRunDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ModelRun that matches the filter.
     * @param {ModelRunFindUniqueArgs} args - Arguments to find a ModelRun
     * @example
     * // Get one ModelRun
     * const modelRun = await prisma.modelRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ModelRunFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ModelRunFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ModelRun'> extends True ? Prisma__ModelRunClient<ModelRunGetPayload<T>> : Prisma__ModelRunClient<ModelRunGetPayload<T> | null, null>

    /**
     * Find one ModelRun that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ModelRunFindUniqueOrThrowArgs} args - Arguments to find a ModelRun
     * @example
     * // Get one ModelRun
     * const modelRun = await prisma.modelRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ModelRunFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ModelRunFindUniqueOrThrowArgs>
    ): Prisma__ModelRunClient<ModelRunGetPayload<T>>

    /**
     * Find the first ModelRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelRunFindFirstArgs} args - Arguments to find a ModelRun
     * @example
     * // Get one ModelRun
     * const modelRun = await prisma.modelRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ModelRunFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ModelRunFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ModelRun'> extends True ? Prisma__ModelRunClient<ModelRunGetPayload<T>> : Prisma__ModelRunClient<ModelRunGetPayload<T> | null, null>

    /**
     * Find the first ModelRun that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelRunFindFirstOrThrowArgs} args - Arguments to find a ModelRun
     * @example
     * // Get one ModelRun
     * const modelRun = await prisma.modelRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ModelRunFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ModelRunFindFirstOrThrowArgs>
    ): Prisma__ModelRunClient<ModelRunGetPayload<T>>

    /**
     * Find zero or more ModelRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelRunFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModelRuns
     * const modelRuns = await prisma.modelRun.findMany()
     * 
     * // Get first 10 ModelRuns
     * const modelRuns = await prisma.modelRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelRunWithIdOnly = await prisma.modelRun.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ModelRunFindManyArgs>(
      args?: SelectSubset<T, ModelRunFindManyArgs>
    ): Prisma.PrismaPromise<Array<ModelRunGetPayload<T>>>

    /**
     * Create a ModelRun.
     * @param {ModelRunCreateArgs} args - Arguments to create a ModelRun.
     * @example
     * // Create one ModelRun
     * const ModelRun = await prisma.modelRun.create({
     *   data: {
     *     // ... data to create a ModelRun
     *   }
     * })
     * 
    **/
    create<T extends ModelRunCreateArgs>(
      args: SelectSubset<T, ModelRunCreateArgs>
    ): Prisma__ModelRunClient<ModelRunGetPayload<T>>

    /**
     * Create many ModelRuns.
     *     @param {ModelRunCreateManyArgs} args - Arguments to create many ModelRuns.
     *     @example
     *     // Create many ModelRuns
     *     const modelRun = await prisma.modelRun.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ModelRunCreateManyArgs>(
      args?: SelectSubset<T, ModelRunCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ModelRun.
     * @param {ModelRunDeleteArgs} args - Arguments to delete one ModelRun.
     * @example
     * // Delete one ModelRun
     * const ModelRun = await prisma.modelRun.delete({
     *   where: {
     *     // ... filter to delete one ModelRun
     *   }
     * })
     * 
    **/
    delete<T extends ModelRunDeleteArgs>(
      args: SelectSubset<T, ModelRunDeleteArgs>
    ): Prisma__ModelRunClient<ModelRunGetPayload<T>>

    /**
     * Update one ModelRun.
     * @param {ModelRunUpdateArgs} args - Arguments to update one ModelRun.
     * @example
     * // Update one ModelRun
     * const modelRun = await prisma.modelRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ModelRunUpdateArgs>(
      args: SelectSubset<T, ModelRunUpdateArgs>
    ): Prisma__ModelRunClient<ModelRunGetPayload<T>>

    /**
     * Delete zero or more ModelRuns.
     * @param {ModelRunDeleteManyArgs} args - Arguments to filter ModelRuns to delete.
     * @example
     * // Delete a few ModelRuns
     * const { count } = await prisma.modelRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ModelRunDeleteManyArgs>(
      args?: SelectSubset<T, ModelRunDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModelRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModelRuns
     * const modelRun = await prisma.modelRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ModelRunUpdateManyArgs>(
      args: SelectSubset<T, ModelRunUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ModelRun.
     * @param {ModelRunUpsertArgs} args - Arguments to update or create a ModelRun.
     * @example
     * // Update or create a ModelRun
     * const modelRun = await prisma.modelRun.upsert({
     *   create: {
     *     // ... data to create a ModelRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModelRun we want to update
     *   }
     * })
    **/
    upsert<T extends ModelRunUpsertArgs>(
      args: SelectSubset<T, ModelRunUpsertArgs>
    ): Prisma__ModelRunClient<ModelRunGetPayload<T>>

    /**
     * Find zero or more ModelRuns that matches the filter.
     * @param {ModelRunFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const modelRun = await prisma.modelRun.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ModelRunFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ModelRun.
     * @param {ModelRunAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const modelRun = await prisma.modelRun.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ModelRunAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of ModelRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelRunCountArgs} args - Arguments to filter ModelRuns to count.
     * @example
     * // Count the number of ModelRuns
     * const count = await prisma.modelRun.count({
     *   where: {
     *     // ... the filter for the ModelRuns we want to count
     *   }
     * })
    **/
    count<T extends ModelRunCountArgs>(
      args?: Subset<T, ModelRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModelRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModelRunAggregateArgs>(args: Subset<T, ModelRunAggregateArgs>): Prisma.PrismaPromise<GetModelRunAggregateType<T>>

    /**
     * Group by ModelRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelRunGroupByArgs} args - Group by arguments.
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
      T extends ModelRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModelRunGroupByArgs['orderBy'] }
        : { orderBy?: ModelRunGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModelRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ModelRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ModelRunClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    workflow<T extends ModelArgs= {}>(args?: Subset<T, ModelArgs>): Prisma__ModelClient<ModelGetPayload<T> | Null>;

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
   * ModelRun base type for findUnique actions
   */
  export type ModelRunFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ModelRun
     */
    select?: ModelRunSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelRunInclude | null
    /**
     * Filter, which ModelRun to fetch.
     */
    where: ModelRunWhereUniqueInput
  }

  /**
   * ModelRun findUnique
   */
  export interface ModelRunFindUniqueArgs extends ModelRunFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ModelRun findUniqueOrThrow
   */
  export type ModelRunFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ModelRun
     */
    select?: ModelRunSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelRunInclude | null
    /**
     * Filter, which ModelRun to fetch.
     */
    where: ModelRunWhereUniqueInput
  }


  /**
   * ModelRun base type for findFirst actions
   */
  export type ModelRunFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ModelRun
     */
    select?: ModelRunSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelRunInclude | null
    /**
     * Filter, which ModelRun to fetch.
     */
    where?: ModelRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelRuns to fetch.
     */
    orderBy?: Enumerable<ModelRunOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModelRuns.
     */
    cursor?: ModelRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModelRuns.
     */
    distinct?: Enumerable<ModelRunScalarFieldEnum>
  }

  /**
   * ModelRun findFirst
   */
  export interface ModelRunFindFirstArgs extends ModelRunFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ModelRun findFirstOrThrow
   */
  export type ModelRunFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ModelRun
     */
    select?: ModelRunSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelRunInclude | null
    /**
     * Filter, which ModelRun to fetch.
     */
    where?: ModelRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelRuns to fetch.
     */
    orderBy?: Enumerable<ModelRunOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModelRuns.
     */
    cursor?: ModelRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModelRuns.
     */
    distinct?: Enumerable<ModelRunScalarFieldEnum>
  }


  /**
   * ModelRun findMany
   */
  export type ModelRunFindManyArgs = {
    /**
     * Select specific fields to fetch from the ModelRun
     */
    select?: ModelRunSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelRunInclude | null
    /**
     * Filter, which ModelRuns to fetch.
     */
    where?: ModelRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelRuns to fetch.
     */
    orderBy?: Enumerable<ModelRunOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModelRuns.
     */
    cursor?: ModelRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelRuns.
     */
    skip?: number
    distinct?: Enumerable<ModelRunScalarFieldEnum>
  }


  /**
   * ModelRun create
   */
  export type ModelRunCreateArgs = {
    /**
     * Select specific fields to fetch from the ModelRun
     */
    select?: ModelRunSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelRunInclude | null
    /**
     * The data needed to create a ModelRun.
     */
    data: XOR<ModelRunCreateInput, ModelRunUncheckedCreateInput>
  }


  /**
   * ModelRun createMany
   */
  export type ModelRunCreateManyArgs = {
    /**
     * The data used to create many ModelRuns.
     */
    data: Enumerable<ModelRunCreateManyInput>
  }


  /**
   * ModelRun update
   */
  export type ModelRunUpdateArgs = {
    /**
     * Select specific fields to fetch from the ModelRun
     */
    select?: ModelRunSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelRunInclude | null
    /**
     * The data needed to update a ModelRun.
     */
    data: XOR<ModelRunUpdateInput, ModelRunUncheckedUpdateInput>
    /**
     * Choose, which ModelRun to update.
     */
    where: ModelRunWhereUniqueInput
  }


  /**
   * ModelRun updateMany
   */
  export type ModelRunUpdateManyArgs = {
    /**
     * The data used to update ModelRuns.
     */
    data: XOR<ModelRunUpdateManyMutationInput, ModelRunUncheckedUpdateManyInput>
    /**
     * Filter which ModelRuns to update
     */
    where?: ModelRunWhereInput
  }


  /**
   * ModelRun upsert
   */
  export type ModelRunUpsertArgs = {
    /**
     * Select specific fields to fetch from the ModelRun
     */
    select?: ModelRunSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelRunInclude | null
    /**
     * The filter to search for the ModelRun to update in case it exists.
     */
    where: ModelRunWhereUniqueInput
    /**
     * In case the ModelRun found by the `where` argument doesn't exist, create a new ModelRun with this data.
     */
    create: XOR<ModelRunCreateInput, ModelRunUncheckedCreateInput>
    /**
     * In case the ModelRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModelRunUpdateInput, ModelRunUncheckedUpdateInput>
  }


  /**
   * ModelRun delete
   */
  export type ModelRunDeleteArgs = {
    /**
     * Select specific fields to fetch from the ModelRun
     */
    select?: ModelRunSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelRunInclude | null
    /**
     * Filter which ModelRun to delete.
     */
    where: ModelRunWhereUniqueInput
  }


  /**
   * ModelRun deleteMany
   */
  export type ModelRunDeleteManyArgs = {
    /**
     * Filter which ModelRuns to delete
     */
    where?: ModelRunWhereInput
  }


  /**
   * ModelRun findRaw
   */
  export type ModelRunFindRawArgs = {
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
   * ModelRun aggregateRaw
   */
  export type ModelRunAggregateRawArgs = {
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
   * ModelRun without action
   */
  export type ModelRunArgs = {
    /**
     * Select specific fields to fetch from the ModelRun
     */
    select?: ModelRunSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelRunInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ModelRunScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    workflowId: 'workflowId',
    triggeredBy: 'triggeredBy',
    output: 'output'
  };

  export type ModelRunScalarFieldEnum = (typeof ModelRunScalarFieldEnum)[keyof typeof ModelRunScalarFieldEnum]


  export const ModelScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    goal: 'goal',
    relevantEvents: 'relevantEvents',
    status: 'status',
    accuracy: 'accuracy'
  };

  export type ModelScalarFieldEnum = (typeof ModelScalarFieldEnum)[keyof typeof ModelScalarFieldEnum]


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


  /**
   * Deep Input Types
   */


  export type ModelWhereInput = {
    AND?: Enumerable<ModelWhereInput>
    OR?: Enumerable<ModelWhereInput>
    NOT?: Enumerable<ModelWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    goal?: StringFilter | string
    relevantEvents?: StringNullableListFilter
    status?: EnumModelStatusFilter | ModelStatus
    accuracy?: FloatNullableFilter | number | null
    workflowRuns?: ModelRunListRelationFilter
  }

  export type ModelOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    goal?: SortOrder
    relevantEvents?: SortOrder
    status?: SortOrder
    accuracy?: SortOrder
    workflowRuns?: ModelRunOrderByRelationAggregateInput
  }

  export type ModelWhereUniqueInput = {
    id?: string
  }

  export type ModelOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    goal?: SortOrder
    relevantEvents?: SortOrder
    status?: SortOrder
    accuracy?: SortOrder
    _count?: ModelCountOrderByAggregateInput
    _avg?: ModelAvgOrderByAggregateInput
    _max?: ModelMaxOrderByAggregateInput
    _min?: ModelMinOrderByAggregateInput
    _sum?: ModelSumOrderByAggregateInput
  }

  export type ModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<ModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ModelScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    goal?: StringWithAggregatesFilter | string
    relevantEvents?: StringNullableListFilter
    status?: EnumModelStatusWithAggregatesFilter | ModelStatus
    accuracy?: FloatNullableWithAggregatesFilter | number | null
  }

  export type ModelRunWhereInput = {
    AND?: Enumerable<ModelRunWhereInput>
    OR?: Enumerable<ModelRunWhereInput>
    NOT?: Enumerable<ModelRunWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    workflowId?: StringFilter | string
    triggeredBy?: StringFilter | string
    output?: BoolFilter | boolean
    workflow?: XOR<ModelRelationFilter, ModelWhereInput>
  }

  export type ModelRunOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workflowId?: SortOrder
    triggeredBy?: SortOrder
    output?: SortOrder
    workflow?: ModelOrderByWithRelationInput
  }

  export type ModelRunWhereUniqueInput = {
    id?: string
  }

  export type ModelRunOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workflowId?: SortOrder
    triggeredBy?: SortOrder
    output?: SortOrder
    _count?: ModelRunCountOrderByAggregateInput
    _max?: ModelRunMaxOrderByAggregateInput
    _min?: ModelRunMinOrderByAggregateInput
  }

  export type ModelRunScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ModelRunScalarWhereWithAggregatesInput>
    OR?: Enumerable<ModelRunScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ModelRunScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    workflowId?: StringWithAggregatesFilter | string
    triggeredBy?: StringWithAggregatesFilter | string
    output?: BoolWithAggregatesFilter | boolean
  }

  export type ModelCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    goal: string
    relevantEvents?: ModelCreaterelevantEventsInput | Enumerable<string>
    status: ModelStatus
    accuracy?: number | null
    workflowRuns?: ModelRunCreateNestedManyWithoutWorkflowInput
  }

  export type ModelUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    goal: string
    relevantEvents?: ModelCreaterelevantEventsInput | Enumerable<string>
    status: ModelStatus
    accuracy?: number | null
    workflowRuns?: ModelRunUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type ModelUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    relevantEvents?: ModelUpdaterelevantEventsInput | Enumerable<string>
    status?: EnumModelStatusFieldUpdateOperationsInput | ModelStatus
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    workflowRuns?: ModelRunUpdateManyWithoutWorkflowNestedInput
  }

  export type ModelUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    relevantEvents?: ModelUpdaterelevantEventsInput | Enumerable<string>
    status?: EnumModelStatusFieldUpdateOperationsInput | ModelStatus
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    workflowRuns?: ModelRunUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type ModelCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    goal: string
    relevantEvents?: ModelCreaterelevantEventsInput | Enumerable<string>
    status: ModelStatus
    accuracy?: number | null
  }

  export type ModelUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    relevantEvents?: ModelUpdaterelevantEventsInput | Enumerable<string>
    status?: EnumModelStatusFieldUpdateOperationsInput | ModelStatus
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ModelUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    relevantEvents?: ModelUpdaterelevantEventsInput | Enumerable<string>
    status?: EnumModelStatusFieldUpdateOperationsInput | ModelStatus
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ModelRunCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    triggeredBy: string
    output: boolean
    workflow: ModelCreateNestedOneWithoutWorkflowRunsInput
  }

  export type ModelRunUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workflowId: string
    triggeredBy: string
    output: boolean
  }

  export type ModelRunUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triggeredBy?: StringFieldUpdateOperationsInput | string
    output?: BoolFieldUpdateOperationsInput | boolean
    workflow?: ModelUpdateOneRequiredWithoutWorkflowRunsNestedInput
  }

  export type ModelRunUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflowId?: StringFieldUpdateOperationsInput | string
    triggeredBy?: StringFieldUpdateOperationsInput | string
    output?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModelRunCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workflowId: string
    triggeredBy: string
    output: boolean
  }

  export type ModelRunUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triggeredBy?: StringFieldUpdateOperationsInput | string
    output?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModelRunUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflowId?: StringFieldUpdateOperationsInput | string
    triggeredBy?: StringFieldUpdateOperationsInput | string
    output?: BoolFieldUpdateOperationsInput | boolean
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

  export type EnumModelStatusFilter = {
    equals?: ModelStatus
    in?: Enumerable<ModelStatus>
    notIn?: Enumerable<ModelStatus>
    not?: NestedEnumModelStatusFilter | ModelStatus
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
    isSet?: boolean
  }

  export type ModelRunListRelationFilter = {
    every?: ModelRunWhereInput
    some?: ModelRunWhereInput
    none?: ModelRunWhereInput
  }

  export type ModelRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModelCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    goal?: SortOrder
    relevantEvents?: SortOrder
    status?: SortOrder
    accuracy?: SortOrder
  }

  export type ModelAvgOrderByAggregateInput = {
    accuracy?: SortOrder
  }

  export type ModelMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    goal?: SortOrder
    status?: SortOrder
    accuracy?: SortOrder
  }

  export type ModelMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    goal?: SortOrder
    status?: SortOrder
    accuracy?: SortOrder
  }

  export type ModelSumOrderByAggregateInput = {
    accuracy?: SortOrder
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

  export type EnumModelStatusWithAggregatesFilter = {
    equals?: ModelStatus
    in?: Enumerable<ModelStatus>
    notIn?: Enumerable<ModelStatus>
    not?: NestedEnumModelStatusWithAggregatesFilter | ModelStatus
    _count?: NestedIntFilter
    _min?: NestedEnumModelStatusFilter
    _max?: NestedEnumModelStatusFilter
  }

  export type FloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
    isSet?: boolean
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type ModelRelationFilter = {
    is?: ModelWhereInput
    isNot?: ModelWhereInput
  }

  export type ModelRunCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workflowId?: SortOrder
    triggeredBy?: SortOrder
    output?: SortOrder
  }

  export type ModelRunMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workflowId?: SortOrder
    triggeredBy?: SortOrder
    output?: SortOrder
  }

  export type ModelRunMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workflowId?: SortOrder
    triggeredBy?: SortOrder
    output?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type ModelCreaterelevantEventsInput = {
    set: Enumerable<string>
  }

  export type ModelRunCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<Enumerable<ModelRunCreateWithoutWorkflowInput>, Enumerable<ModelRunUncheckedCreateWithoutWorkflowInput>>
    connectOrCreate?: Enumerable<ModelRunCreateOrConnectWithoutWorkflowInput>
    createMany?: ModelRunCreateManyWorkflowInputEnvelope
    connect?: Enumerable<ModelRunWhereUniqueInput>
  }

  export type ModelRunUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<Enumerable<ModelRunCreateWithoutWorkflowInput>, Enumerable<ModelRunUncheckedCreateWithoutWorkflowInput>>
    connectOrCreate?: Enumerable<ModelRunCreateOrConnectWithoutWorkflowInput>
    createMany?: ModelRunCreateManyWorkflowInputEnvelope
    connect?: Enumerable<ModelRunWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ModelUpdaterelevantEventsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type EnumModelStatusFieldUpdateOperationsInput = {
    set?: ModelStatus
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type ModelRunUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<Enumerable<ModelRunCreateWithoutWorkflowInput>, Enumerable<ModelRunUncheckedCreateWithoutWorkflowInput>>
    connectOrCreate?: Enumerable<ModelRunCreateOrConnectWithoutWorkflowInput>
    upsert?: Enumerable<ModelRunUpsertWithWhereUniqueWithoutWorkflowInput>
    createMany?: ModelRunCreateManyWorkflowInputEnvelope
    set?: Enumerable<ModelRunWhereUniqueInput>
    disconnect?: Enumerable<ModelRunWhereUniqueInput>
    delete?: Enumerable<ModelRunWhereUniqueInput>
    connect?: Enumerable<ModelRunWhereUniqueInput>
    update?: Enumerable<ModelRunUpdateWithWhereUniqueWithoutWorkflowInput>
    updateMany?: Enumerable<ModelRunUpdateManyWithWhereWithoutWorkflowInput>
    deleteMany?: Enumerable<ModelRunScalarWhereInput>
  }

  export type ModelRunUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<Enumerable<ModelRunCreateWithoutWorkflowInput>, Enumerable<ModelRunUncheckedCreateWithoutWorkflowInput>>
    connectOrCreate?: Enumerable<ModelRunCreateOrConnectWithoutWorkflowInput>
    upsert?: Enumerable<ModelRunUpsertWithWhereUniqueWithoutWorkflowInput>
    createMany?: ModelRunCreateManyWorkflowInputEnvelope
    set?: Enumerable<ModelRunWhereUniqueInput>
    disconnect?: Enumerable<ModelRunWhereUniqueInput>
    delete?: Enumerable<ModelRunWhereUniqueInput>
    connect?: Enumerable<ModelRunWhereUniqueInput>
    update?: Enumerable<ModelRunUpdateWithWhereUniqueWithoutWorkflowInput>
    updateMany?: Enumerable<ModelRunUpdateManyWithWhereWithoutWorkflowInput>
    deleteMany?: Enumerable<ModelRunScalarWhereInput>
  }

  export type ModelCreateNestedOneWithoutWorkflowRunsInput = {
    create?: XOR<ModelCreateWithoutWorkflowRunsInput, ModelUncheckedCreateWithoutWorkflowRunsInput>
    connectOrCreate?: ModelCreateOrConnectWithoutWorkflowRunsInput
    connect?: ModelWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ModelUpdateOneRequiredWithoutWorkflowRunsNestedInput = {
    create?: XOR<ModelCreateWithoutWorkflowRunsInput, ModelUncheckedCreateWithoutWorkflowRunsInput>
    connectOrCreate?: ModelCreateOrConnectWithoutWorkflowRunsInput
    upsert?: ModelUpsertWithoutWorkflowRunsInput
    connect?: ModelWhereUniqueInput
    update?: XOR<ModelUpdateWithoutWorkflowRunsInput, ModelUncheckedUpdateWithoutWorkflowRunsInput>
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

  export type NestedEnumModelStatusFilter = {
    equals?: ModelStatus
    in?: Enumerable<ModelStatus>
    notIn?: Enumerable<ModelStatus>
    not?: NestedEnumModelStatusFilter | ModelStatus
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
    isSet?: boolean
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

  export type NestedEnumModelStatusWithAggregatesFilter = {
    equals?: ModelStatus
    in?: Enumerable<ModelStatus>
    notIn?: Enumerable<ModelStatus>
    not?: NestedEnumModelStatusWithAggregatesFilter | ModelStatus
    _count?: NestedIntFilter
    _min?: NestedEnumModelStatusFilter
    _max?: NestedEnumModelStatusFilter
  }

  export type NestedFloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
    isSet?: boolean
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
    isSet?: boolean
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type ModelRunCreateWithoutWorkflowInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    triggeredBy: string
    output: boolean
  }

  export type ModelRunUncheckedCreateWithoutWorkflowInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    triggeredBy: string
    output: boolean
  }

  export type ModelRunCreateOrConnectWithoutWorkflowInput = {
    where: ModelRunWhereUniqueInput
    create: XOR<ModelRunCreateWithoutWorkflowInput, ModelRunUncheckedCreateWithoutWorkflowInput>
  }

  export type ModelRunCreateManyWorkflowInputEnvelope = {
    data: Enumerable<ModelRunCreateManyWorkflowInput>
  }

  export type ModelRunUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: ModelRunWhereUniqueInput
    update: XOR<ModelRunUpdateWithoutWorkflowInput, ModelRunUncheckedUpdateWithoutWorkflowInput>
    create: XOR<ModelRunCreateWithoutWorkflowInput, ModelRunUncheckedCreateWithoutWorkflowInput>
  }

  export type ModelRunUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: ModelRunWhereUniqueInput
    data: XOR<ModelRunUpdateWithoutWorkflowInput, ModelRunUncheckedUpdateWithoutWorkflowInput>
  }

  export type ModelRunUpdateManyWithWhereWithoutWorkflowInput = {
    where: ModelRunScalarWhereInput
    data: XOR<ModelRunUpdateManyMutationInput, ModelRunUncheckedUpdateManyWithoutWorkflowRunsInput>
  }

  export type ModelRunScalarWhereInput = {
    AND?: Enumerable<ModelRunScalarWhereInput>
    OR?: Enumerable<ModelRunScalarWhereInput>
    NOT?: Enumerable<ModelRunScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    workflowId?: StringFilter | string
    triggeredBy?: StringFilter | string
    output?: BoolFilter | boolean
  }

  export type ModelCreateWithoutWorkflowRunsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    goal: string
    relevantEvents?: ModelCreaterelevantEventsInput | Enumerable<string>
    status: ModelStatus
    accuracy?: number | null
  }

  export type ModelUncheckedCreateWithoutWorkflowRunsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    goal: string
    relevantEvents?: ModelCreaterelevantEventsInput | Enumerable<string>
    status: ModelStatus
    accuracy?: number | null
  }

  export type ModelCreateOrConnectWithoutWorkflowRunsInput = {
    where: ModelWhereUniqueInput
    create: XOR<ModelCreateWithoutWorkflowRunsInput, ModelUncheckedCreateWithoutWorkflowRunsInput>
  }

  export type ModelUpsertWithoutWorkflowRunsInput = {
    update: XOR<ModelUpdateWithoutWorkflowRunsInput, ModelUncheckedUpdateWithoutWorkflowRunsInput>
    create: XOR<ModelCreateWithoutWorkflowRunsInput, ModelUncheckedCreateWithoutWorkflowRunsInput>
  }

  export type ModelUpdateWithoutWorkflowRunsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    relevantEvents?: ModelUpdaterelevantEventsInput | Enumerable<string>
    status?: EnumModelStatusFieldUpdateOperationsInput | ModelStatus
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ModelUncheckedUpdateWithoutWorkflowRunsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    relevantEvents?: ModelUpdaterelevantEventsInput | Enumerable<string>
    status?: EnumModelStatusFieldUpdateOperationsInput | ModelStatus
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ModelRunCreateManyWorkflowInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    triggeredBy: string
    output: boolean
  }

  export type ModelRunUpdateWithoutWorkflowInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triggeredBy?: StringFieldUpdateOperationsInput | string
    output?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModelRunUncheckedUpdateWithoutWorkflowInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triggeredBy?: StringFieldUpdateOperationsInput | string
    output?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModelRunUncheckedUpdateManyWithoutWorkflowRunsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triggeredBy?: StringFieldUpdateOperationsInput | string
    output?: BoolFieldUpdateOperationsInput | boolean
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