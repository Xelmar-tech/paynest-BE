
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model organization
 * 
 */
export type organization = $Result.DefaultSelection<Prisma.$organizationPayload>
/**
 * Model schedule
 * 
 */
export type schedule = $Result.DefaultSelection<Prisma.$schedulePayload>
/**
 * Model stream
 * 
 */
export type stream = $Result.DefaultSelection<Prisma.$streamPayload>
/**
 * Model transaction
 * 
 */
export type transaction = $Result.DefaultSelection<Prisma.$transactionPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model waitlist
 * 
 */
export type waitlist = $Result.DefaultSelection<Prisma.$waitlistPayload>
/**
 * Model wallet
 * 
 */
export type wallet = $Result.DefaultSelection<Prisma.$walletPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const interval_type: {
  daily: 'daily',
  weekly: 'weekly',
  biweekly: 'biweekly',
  monthly: 'monthly',
  quarterly: 'quarterly',
  semiannual: 'semiannual',
  yearly: 'yearly'
};

export type interval_type = (typeof interval_type)[keyof typeof interval_type]


export const network_type: {
  Base: 'Base'
};

export type network_type = (typeof network_type)[keyof typeof network_type]


export const token: {
  USDT: 'USDT',
  USDC: 'USDC'
};

export type token = (typeof token)[keyof typeof token]


export const stream_state: {
  inactive: 'inactive',
  active: 'active',
  paused: 'paused',
  cancelled: 'cancelled'
};

export type stream_state = (typeof stream_state)[keyof typeof stream_state]

}

export type interval_type = $Enums.interval_type

export const interval_type: typeof $Enums.interval_type

export type network_type = $Enums.network_type

export const network_type: typeof $Enums.network_type

export type token = $Enums.token

export const token: typeof $Enums.token

export type stream_state = $Enums.stream_state

export const stream_state: typeof $Enums.stream_state

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Organizations
 * const organizations = await prisma.organization.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.organization`: Exposes CRUD operations for the **organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.organizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.scheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stream`: Exposes CRUD operations for the **stream** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Streams
    * const streams = await prisma.stream.findMany()
    * ```
    */
  get stream(): Prisma.streamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.transactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.waitlist`: Exposes CRUD operations for the **waitlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Waitlists
    * const waitlists = await prisma.waitlist.findMany()
    * ```
    */
  get waitlist(): Prisma.waitlistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wallet`: Exposes CRUD operations for the **wallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wallets
    * const wallets = await prisma.wallet.findMany()
    * ```
    */
  get wallet(): Prisma.walletDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    organization: 'organization',
    schedule: 'schedule',
    stream: 'stream',
    transaction: 'transaction',
    user: 'user',
    waitlist: 'waitlist',
    wallet: 'wallet'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "organization" | "schedule" | "stream" | "transaction" | "user" | "waitlist" | "wallet"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      organization: {
        payload: Prisma.$organizationPayload<ExtArgs>
        fields: Prisma.organizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.organizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.organizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>
          }
          findFirst: {
            args: Prisma.organizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.organizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>
          }
          findMany: {
            args: Prisma.organizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>[]
          }
          create: {
            args: Prisma.organizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>
          }
          createMany: {
            args: Prisma.organizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.organizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>[]
          }
          delete: {
            args: Prisma.organizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>
          }
          update: {
            args: Prisma.organizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>
          }
          deleteMany: {
            args: Prisma.organizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.organizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.organizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>[]
          }
          upsert: {
            args: Prisma.organizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.organizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.organizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      schedule: {
        payload: Prisma.$schedulePayload<ExtArgs>
        fields: Prisma.scheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.scheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.scheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>
          }
          findFirst: {
            args: Prisma.scheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.scheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>
          }
          findMany: {
            args: Prisma.scheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>[]
          }
          create: {
            args: Prisma.scheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>
          }
          createMany: {
            args: Prisma.scheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.scheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>[]
          }
          delete: {
            args: Prisma.scheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>
          }
          update: {
            args: Prisma.scheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>
          }
          deleteMany: {
            args: Prisma.scheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.scheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.scheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>[]
          }
          upsert: {
            args: Prisma.scheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.scheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.scheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
          }
        }
      }
      stream: {
        payload: Prisma.$streamPayload<ExtArgs>
        fields: Prisma.streamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.streamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$streamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.streamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$streamPayload>
          }
          findFirst: {
            args: Prisma.streamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$streamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.streamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$streamPayload>
          }
          findMany: {
            args: Prisma.streamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$streamPayload>[]
          }
          create: {
            args: Prisma.streamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$streamPayload>
          }
          createMany: {
            args: Prisma.streamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.streamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$streamPayload>[]
          }
          delete: {
            args: Prisma.streamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$streamPayload>
          }
          update: {
            args: Prisma.streamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$streamPayload>
          }
          deleteMany: {
            args: Prisma.streamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.streamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.streamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$streamPayload>[]
          }
          upsert: {
            args: Prisma.streamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$streamPayload>
          }
          aggregate: {
            args: Prisma.StreamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStream>
          }
          groupBy: {
            args: Prisma.streamGroupByArgs<ExtArgs>
            result: $Utils.Optional<StreamGroupByOutputType>[]
          }
          count: {
            args: Prisma.streamCountArgs<ExtArgs>
            result: $Utils.Optional<StreamCountAggregateOutputType> | number
          }
        }
      }
      transaction: {
        payload: Prisma.$transactionPayload<ExtArgs>
        fields: Prisma.transactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          findFirst: {
            args: Prisma.transactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          findMany: {
            args: Prisma.transactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          create: {
            args: Prisma.transactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          createMany: {
            args: Prisma.transactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          delete: {
            args: Prisma.transactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          update: {
            args: Prisma.transactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          deleteMany: {
            args: Prisma.transactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          upsert: {
            args: Prisma.transactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.transactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.transactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      waitlist: {
        payload: Prisma.$waitlistPayload<ExtArgs>
        fields: Prisma.waitlistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.waitlistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waitlistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.waitlistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waitlistPayload>
          }
          findFirst: {
            args: Prisma.waitlistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waitlistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.waitlistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waitlistPayload>
          }
          findMany: {
            args: Prisma.waitlistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waitlistPayload>[]
          }
          create: {
            args: Prisma.waitlistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waitlistPayload>
          }
          createMany: {
            args: Prisma.waitlistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.waitlistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waitlistPayload>[]
          }
          delete: {
            args: Prisma.waitlistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waitlistPayload>
          }
          update: {
            args: Prisma.waitlistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waitlistPayload>
          }
          deleteMany: {
            args: Prisma.waitlistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.waitlistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.waitlistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waitlistPayload>[]
          }
          upsert: {
            args: Prisma.waitlistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waitlistPayload>
          }
          aggregate: {
            args: Prisma.WaitlistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWaitlist>
          }
          groupBy: {
            args: Prisma.waitlistGroupByArgs<ExtArgs>
            result: $Utils.Optional<WaitlistGroupByOutputType>[]
          }
          count: {
            args: Prisma.waitlistCountArgs<ExtArgs>
            result: $Utils.Optional<WaitlistCountAggregateOutputType> | number
          }
        }
      }
      wallet: {
        payload: Prisma.$walletPayload<ExtArgs>
        fields: Prisma.walletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.walletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.walletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletPayload>
          }
          findFirst: {
            args: Prisma.walletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.walletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletPayload>
          }
          findMany: {
            args: Prisma.walletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletPayload>[]
          }
          create: {
            args: Prisma.walletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletPayload>
          }
          createMany: {
            args: Prisma.walletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.walletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletPayload>[]
          }
          delete: {
            args: Prisma.walletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletPayload>
          }
          update: {
            args: Prisma.walletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletPayload>
          }
          deleteMany: {
            args: Prisma.walletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.walletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.walletUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletPayload>[]
          }
          upsert: {
            args: Prisma.walletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletPayload>
          }
          aggregate: {
            args: Prisma.WalletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWallet>
          }
          groupBy: {
            args: Prisma.walletGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.walletCountArgs<ExtArgs>
            result: $Utils.Optional<WalletCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    organization?: organizationOmit
    schedule?: scheduleOmit
    stream?: streamOmit
    transaction?: transactionOmit
    user?: userOmit
    waitlist?: waitlistOmit
    wallet?: walletOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    streams: number
    schedules: number
    transactions: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streams?: boolean | OrganizationCountOutputTypeCountStreamsArgs
    schedules?: boolean | OrganizationCountOutputTypeCountSchedulesArgs
    transactions?: boolean | OrganizationCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountStreamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: streamWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: scheduleWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
  }


  /**
   * Count Type ScheduleCountOutputType
   */

  export type ScheduleCountOutputType = {
    txns: number
  }

  export type ScheduleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    txns?: boolean | ScheduleCountOutputTypeCountTxnsArgs
  }

  // Custom InputTypes
  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleCountOutputType
     */
    select?: ScheduleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeCountTxnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
  }


  /**
   * Count Type StreamCountOutputType
   */

  export type StreamCountOutputType = {
    txns: number
  }

  export type StreamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    txns?: boolean | StreamCountOutputTypeCountTxnsArgs
  }

  // Custom InputTypes
  /**
   * StreamCountOutputType without action
   */
  export type StreamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamCountOutputType
     */
    select?: StreamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StreamCountOutputType without action
   */
  export type StreamCountOutputTypeCountTxnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    streams: number
    schedules: number
    wallets: number
    txns: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streams?: boolean | UserCountOutputTypeCountStreamsArgs
    schedules?: boolean | UserCountOutputTypeCountSchedulesArgs
    wallets?: boolean | UserCountOutputTypeCountWalletsArgs
    txns?: boolean | UserCountOutputTypeCountTxnsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStreamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: streamWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: scheduleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWalletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: walletWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTxnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    owner: string | null
    wallet: string | null
    plugin: string | null
    admin: string | null
    logo: string | null
    name: string | null
    info: string | null
    network: $Enums.network_type | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    owner: string | null
    wallet: string | null
    plugin: string | null
    admin: string | null
    logo: string | null
    name: string | null
    info: string | null
    network: $Enums.network_type | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    owner: number
    wallet: number
    plugin: number
    admin: number
    logo: number
    name: number
    info: number
    network: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    owner?: true
    wallet?: true
    plugin?: true
    admin?: true
    logo?: true
    name?: true
    info?: true
    network?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    owner?: true
    wallet?: true
    plugin?: true
    admin?: true
    logo?: true
    name?: true
    info?: true
    network?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    owner?: true
    wallet?: true
    plugin?: true
    admin?: true
    logo?: true
    name?: true
    info?: true
    network?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organization to aggregate.
     */
    where?: organizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: organizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type organizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationWhereInput
    orderBy?: organizationOrderByWithAggregationInput | organizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: organizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    owner: string
    wallet: string
    plugin: string
    admin: string
    logo: string
    name: string
    info: string
    network: $Enums.network_type
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends organizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type organizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner?: boolean
    wallet?: boolean
    plugin?: boolean
    admin?: boolean
    logo?: boolean
    name?: boolean
    info?: boolean
    network?: boolean
    streams?: boolean | organization$streamsArgs<ExtArgs>
    schedules?: boolean | organization$schedulesArgs<ExtArgs>
    transactions?: boolean | organization$transactionsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type organizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner?: boolean
    wallet?: boolean
    plugin?: boolean
    admin?: boolean
    logo?: boolean
    name?: boolean
    info?: boolean
    network?: boolean
  }, ExtArgs["result"]["organization"]>

  export type organizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner?: boolean
    wallet?: boolean
    plugin?: boolean
    admin?: boolean
    logo?: boolean
    name?: boolean
    info?: boolean
    network?: boolean
  }, ExtArgs["result"]["organization"]>

  export type organizationSelectScalar = {
    id?: boolean
    owner?: boolean
    wallet?: boolean
    plugin?: boolean
    admin?: boolean
    logo?: boolean
    name?: boolean
    info?: boolean
    network?: boolean
  }

  export type organizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "owner" | "wallet" | "plugin" | "admin" | "logo" | "name" | "info" | "network", ExtArgs["result"]["organization"]>
  export type organizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streams?: boolean | organization$streamsArgs<ExtArgs>
    schedules?: boolean | organization$schedulesArgs<ExtArgs>
    transactions?: boolean | organization$transactionsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type organizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type organizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $organizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "organization"
    objects: {
      streams: Prisma.$streamPayload<ExtArgs>[]
      schedules: Prisma.$schedulePayload<ExtArgs>[]
      transactions: Prisma.$transactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      owner: string
      wallet: string
      plugin: string
      admin: string
      logo: string
      name: string
      info: string
      network: $Enums.network_type
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type organizationGetPayload<S extends boolean | null | undefined | organizationDefaultArgs> = $Result.GetResult<Prisma.$organizationPayload, S>

  type organizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<organizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface organizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organization'], meta: { name: 'organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {organizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends organizationFindUniqueArgs>(args: SelectSubset<T, organizationFindUniqueArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {organizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends organizationFindUniqueOrThrowArgs>(args: SelectSubset<T, organizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends organizationFindFirstArgs>(args?: SelectSubset<T, organizationFindFirstArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends organizationFindFirstOrThrowArgs>(args?: SelectSubset<T, organizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends organizationFindManyArgs>(args?: SelectSubset<T, organizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {organizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends organizationCreateArgs>(args: SelectSubset<T, organizationCreateArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {organizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends organizationCreateManyArgs>(args?: SelectSubset<T, organizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {organizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends organizationCreateManyAndReturnArgs>(args?: SelectSubset<T, organizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {organizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends organizationDeleteArgs>(args: SelectSubset<T, organizationDeleteArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {organizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends organizationUpdateArgs>(args: SelectSubset<T, organizationUpdateArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {organizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends organizationDeleteManyArgs>(args?: SelectSubset<T, organizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends organizationUpdateManyArgs>(args: SelectSubset<T, organizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {organizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends organizationUpdateManyAndReturnArgs>(args: SelectSubset<T, organizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {organizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends organizationUpsertArgs>(args: SelectSubset<T, organizationUpsertArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends organizationCountArgs>(
      args?: Subset<T, organizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationGroupByArgs} args - Group by arguments.
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
      T extends organizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizationGroupByArgs['orderBy'] }
        : { orderBy?: organizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, organizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the organization model
   */
  readonly fields: organizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    streams<T extends organization$streamsArgs<ExtArgs> = {}>(args?: Subset<T, organization$streamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$streamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedules<T extends organization$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, organization$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends organization$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, organization$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the organization model
   */
  interface organizationFieldRefs {
    readonly id: FieldRef<"organization", 'String'>
    readonly owner: FieldRef<"organization", 'String'>
    readonly wallet: FieldRef<"organization", 'String'>
    readonly plugin: FieldRef<"organization", 'String'>
    readonly admin: FieldRef<"organization", 'String'>
    readonly logo: FieldRef<"organization", 'String'>
    readonly name: FieldRef<"organization", 'String'>
    readonly info: FieldRef<"organization", 'String'>
    readonly network: FieldRef<"organization", 'network_type'>
  }
    

  // Custom InputTypes
  /**
   * organization findUnique
   */
  export type organizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput
  }

  /**
   * organization findUniqueOrThrow
   */
  export type organizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput
  }

  /**
   * organization findFirst
   */
  export type organizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * organization findFirstOrThrow
   */
  export type organizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * organization findMany
   */
  export type organizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing organizations.
     */
    cursor?: organizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * organization create
   */
  export type organizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * The data needed to create a organization.
     */
    data: XOR<organizationCreateInput, organizationUncheckedCreateInput>
  }

  /**
   * organization createMany
   */
  export type organizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizations.
     */
    data: organizationCreateManyInput | organizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * organization createManyAndReturn
   */
  export type organizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * The data used to create many organizations.
     */
    data: organizationCreateManyInput | organizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * organization update
   */
  export type organizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * The data needed to update a organization.
     */
    data: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>
    /**
     * Choose, which organization to update.
     */
    where: organizationWhereUniqueInput
  }

  /**
   * organization updateMany
   */
  export type organizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyInput>
    /**
     * Filter which organizations to update
     */
    where?: organizationWhereInput
    /**
     * Limit how many organizations to update.
     */
    limit?: number
  }

  /**
   * organization updateManyAndReturn
   */
  export type organizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyInput>
    /**
     * Filter which organizations to update
     */
    where?: organizationWhereInput
    /**
     * Limit how many organizations to update.
     */
    limit?: number
  }

  /**
   * organization upsert
   */
  export type organizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * The filter to search for the organization to update in case it exists.
     */
    where: organizationWhereUniqueInput
    /**
     * In case the organization found by the `where` argument doesn't exist, create a new organization with this data.
     */
    create: XOR<organizationCreateInput, organizationUncheckedCreateInput>
    /**
     * In case the organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>
  }

  /**
   * organization delete
   */
  export type organizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * Filter which organization to delete.
     */
    where: organizationWhereUniqueInput
  }

  /**
   * organization deleteMany
   */
  export type organizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizations to delete
     */
    where?: organizationWhereInput
    /**
     * Limit how many organizations to delete.
     */
    limit?: number
  }

  /**
   * organization.streams
   */
  export type organization$streamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stream
     */
    select?: streamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stream
     */
    omit?: streamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: streamInclude<ExtArgs> | null
    where?: streamWhereInput
    orderBy?: streamOrderByWithRelationInput | streamOrderByWithRelationInput[]
    cursor?: streamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StreamScalarFieldEnum | StreamScalarFieldEnum[]
  }

  /**
   * organization.schedules
   */
  export type organization$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    where?: scheduleWhereInput
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[]
    cursor?: scheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * organization.transactions
   */
  export type organization$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    cursor?: transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * organization without action
   */
  export type organizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
  }


  /**
   * Model schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleAvgAggregateOutputType = {
    amount: Decimal | null
    nextPayout: number | null
    payout: Decimal | null
  }

  export type ScheduleSumAggregateOutputType = {
    amount: Decimal | null
    nextPayout: bigint | null
    payout: Decimal | null
  }

  export type ScheduleMinAggregateOutputType = {
    username: string | null
    amount: Decimal | null
    isOneTime: boolean | null
    org_id: string | null
    nextPayout: bigint | null
    created_at: Date | null
    updated_at: Date | null
    network: $Enums.network_type | null
    asset: $Enums.token | null
    id: string | null
    role: string | null
    title: string | null
    active: boolean | null
    interval: $Enums.interval_type | null
    payout: Decimal | null
  }

  export type ScheduleMaxAggregateOutputType = {
    username: string | null
    amount: Decimal | null
    isOneTime: boolean | null
    org_id: string | null
    nextPayout: bigint | null
    created_at: Date | null
    updated_at: Date | null
    network: $Enums.network_type | null
    asset: $Enums.token | null
    id: string | null
    role: string | null
    title: string | null
    active: boolean | null
    interval: $Enums.interval_type | null
    payout: Decimal | null
  }

  export type ScheduleCountAggregateOutputType = {
    username: number
    amount: number
    isOneTime: number
    org_id: number
    nextPayout: number
    created_at: number
    updated_at: number
    network: number
    asset: number
    id: number
    role: number
    title: number
    active: number
    interval: number
    payout: number
    _all: number
  }


  export type ScheduleAvgAggregateInputType = {
    amount?: true
    nextPayout?: true
    payout?: true
  }

  export type ScheduleSumAggregateInputType = {
    amount?: true
    nextPayout?: true
    payout?: true
  }

  export type ScheduleMinAggregateInputType = {
    username?: true
    amount?: true
    isOneTime?: true
    org_id?: true
    nextPayout?: true
    created_at?: true
    updated_at?: true
    network?: true
    asset?: true
    id?: true
    role?: true
    title?: true
    active?: true
    interval?: true
    payout?: true
  }

  export type ScheduleMaxAggregateInputType = {
    username?: true
    amount?: true
    isOneTime?: true
    org_id?: true
    nextPayout?: true
    created_at?: true
    updated_at?: true
    network?: true
    asset?: true
    id?: true
    role?: true
    title?: true
    active?: true
    interval?: true
    payout?: true
  }

  export type ScheduleCountAggregateInputType = {
    username?: true
    amount?: true
    isOneTime?: true
    org_id?: true
    nextPayout?: true
    created_at?: true
    updated_at?: true
    network?: true
    asset?: true
    id?: true
    role?: true
    title?: true
    active?: true
    interval?: true
    payout?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schedule to aggregate.
     */
    where?: scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type scheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: scheduleWhereInput
    orderBy?: scheduleOrderByWithAggregationInput | scheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: scheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _avg?: ScheduleAvgAggregateInputType
    _sum?: ScheduleSumAggregateInputType
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    username: string
    amount: Decimal
    isOneTime: boolean
    org_id: string
    nextPayout: bigint
    created_at: Date
    updated_at: Date
    network: $Enums.network_type
    asset: $Enums.token
    id: string
    role: string
    title: string
    active: boolean
    interval: $Enums.interval_type
    payout: Decimal
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends scheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type scheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    amount?: boolean
    isOneTime?: boolean
    org_id?: boolean
    nextPayout?: boolean
    created_at?: boolean
    updated_at?: boolean
    network?: boolean
    asset?: boolean
    id?: boolean
    role?: boolean
    title?: boolean
    active?: boolean
    interval?: boolean
    payout?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    org?: boolean | organizationDefaultArgs<ExtArgs>
    txns?: boolean | schedule$txnsArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type scheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    amount?: boolean
    isOneTime?: boolean
    org_id?: boolean
    nextPayout?: boolean
    created_at?: boolean
    updated_at?: boolean
    network?: boolean
    asset?: boolean
    id?: boolean
    role?: boolean
    title?: boolean
    active?: boolean
    interval?: boolean
    payout?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    org?: boolean | organizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type scheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    amount?: boolean
    isOneTime?: boolean
    org_id?: boolean
    nextPayout?: boolean
    created_at?: boolean
    updated_at?: boolean
    network?: boolean
    asset?: boolean
    id?: boolean
    role?: boolean
    title?: boolean
    active?: boolean
    interval?: boolean
    payout?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    org?: boolean | organizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type scheduleSelectScalar = {
    username?: boolean
    amount?: boolean
    isOneTime?: boolean
    org_id?: boolean
    nextPayout?: boolean
    created_at?: boolean
    updated_at?: boolean
    network?: boolean
    asset?: boolean
    id?: boolean
    role?: boolean
    title?: boolean
    active?: boolean
    interval?: boolean
    payout?: boolean
  }

  export type scheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"username" | "amount" | "isOneTime" | "org_id" | "nextPayout" | "created_at" | "updated_at" | "network" | "asset" | "id" | "role" | "title" | "active" | "interval" | "payout", ExtArgs["result"]["schedule"]>
  export type scheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    org?: boolean | organizationDefaultArgs<ExtArgs>
    txns?: boolean | schedule$txnsArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type scheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    org?: boolean | organizationDefaultArgs<ExtArgs>
  }
  export type scheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    org?: boolean | organizationDefaultArgs<ExtArgs>
  }

  export type $schedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "schedule"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      org: Prisma.$organizationPayload<ExtArgs>
      txns: Prisma.$transactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      username: string
      amount: Prisma.Decimal
      isOneTime: boolean
      org_id: string
      nextPayout: bigint
      created_at: Date
      updated_at: Date
      network: $Enums.network_type
      asset: $Enums.token
      id: string
      role: string
      title: string
      active: boolean
      interval: $Enums.interval_type
      payout: Prisma.Decimal
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }

  type scheduleGetPayload<S extends boolean | null | undefined | scheduleDefaultArgs> = $Result.GetResult<Prisma.$schedulePayload, S>

  type scheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<scheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface scheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['schedule'], meta: { name: 'schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {scheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends scheduleFindUniqueArgs>(args: SelectSubset<T, scheduleFindUniqueArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {scheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends scheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, scheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends scheduleFindFirstArgs>(args?: SelectSubset<T, scheduleFindFirstArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends scheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, scheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `username`
     * const scheduleWithUsernameOnly = await prisma.schedule.findMany({ select: { username: true } })
     * 
     */
    findMany<T extends scheduleFindManyArgs>(args?: SelectSubset<T, scheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedule.
     * @param {scheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
     */
    create<T extends scheduleCreateArgs>(args: SelectSubset<T, scheduleCreateArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {scheduleCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends scheduleCreateManyArgs>(args?: SelectSubset<T, scheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedules and returns the data saved in the database.
     * @param {scheduleCreateManyAndReturnArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedules and only return the `username`
     * const scheduleWithUsernameOnly = await prisma.schedule.createManyAndReturn({
     *   select: { username: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends scheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, scheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Schedule.
     * @param {scheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
     */
    delete<T extends scheduleDeleteArgs>(args: SelectSubset<T, scheduleDeleteArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedule.
     * @param {scheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends scheduleUpdateArgs>(args: SelectSubset<T, scheduleUpdateArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {scheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends scheduleDeleteManyArgs>(args?: SelectSubset<T, scheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends scheduleUpdateManyArgs>(args: SelectSubset<T, scheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules and returns the data updated in the database.
     * @param {scheduleUpdateManyAndReturnArgs} args - Arguments to update many Schedules.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedules and only return the `username`
     * const scheduleWithUsernameOnly = await prisma.schedule.updateManyAndReturn({
     *   select: { username: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends scheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, scheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Schedule.
     * @param {scheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     */
    upsert<T extends scheduleUpsertArgs>(args: SelectSubset<T, scheduleUpsertArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends scheduleCountArgs>(
      args?: Subset<T, scheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleGroupByArgs} args - Group by arguments.
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
      T extends scheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: scheduleGroupByArgs['orderBy'] }
        : { orderBy?: scheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, scheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the schedule model
   */
  readonly fields: scheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__scheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    org<T extends organizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, organizationDefaultArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    txns<T extends schedule$txnsArgs<ExtArgs> = {}>(args?: Subset<T, schedule$txnsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the schedule model
   */
  interface scheduleFieldRefs {
    readonly username: FieldRef<"schedule", 'String'>
    readonly amount: FieldRef<"schedule", 'Decimal'>
    readonly isOneTime: FieldRef<"schedule", 'Boolean'>
    readonly org_id: FieldRef<"schedule", 'String'>
    readonly nextPayout: FieldRef<"schedule", 'BigInt'>
    readonly created_at: FieldRef<"schedule", 'DateTime'>
    readonly updated_at: FieldRef<"schedule", 'DateTime'>
    readonly network: FieldRef<"schedule", 'network_type'>
    readonly asset: FieldRef<"schedule", 'token'>
    readonly id: FieldRef<"schedule", 'String'>
    readonly role: FieldRef<"schedule", 'String'>
    readonly title: FieldRef<"schedule", 'String'>
    readonly active: FieldRef<"schedule", 'Boolean'>
    readonly interval: FieldRef<"schedule", 'interval_type'>
    readonly payout: FieldRef<"schedule", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * schedule findUnique
   */
  export type scheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * Filter, which schedule to fetch.
     */
    where: scheduleWhereUniqueInput
  }

  /**
   * schedule findUniqueOrThrow
   */
  export type scheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * Filter, which schedule to fetch.
     */
    where: scheduleWhereUniqueInput
  }

  /**
   * schedule findFirst
   */
  export type scheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * Filter, which schedule to fetch.
     */
    where?: scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for schedules.
     */
    cursor?: scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * schedule findFirstOrThrow
   */
  export type scheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * Filter, which schedule to fetch.
     */
    where?: scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for schedules.
     */
    cursor?: scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * schedule findMany
   */
  export type scheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * Filter, which schedules to fetch.
     */
    where?: scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing schedules.
     */
    cursor?: scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * schedule create
   */
  export type scheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a schedule.
     */
    data: XOR<scheduleCreateInput, scheduleUncheckedCreateInput>
  }

  /**
   * schedule createMany
   */
  export type scheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many schedules.
     */
    data: scheduleCreateManyInput | scheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * schedule createManyAndReturn
   */
  export type scheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * The data used to create many schedules.
     */
    data: scheduleCreateManyInput | scheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * schedule update
   */
  export type scheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a schedule.
     */
    data: XOR<scheduleUpdateInput, scheduleUncheckedUpdateInput>
    /**
     * Choose, which schedule to update.
     */
    where: scheduleWhereUniqueInput
  }

  /**
   * schedule updateMany
   */
  export type scheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update schedules.
     */
    data: XOR<scheduleUpdateManyMutationInput, scheduleUncheckedUpdateManyInput>
    /**
     * Filter which schedules to update
     */
    where?: scheduleWhereInput
    /**
     * Limit how many schedules to update.
     */
    limit?: number
  }

  /**
   * schedule updateManyAndReturn
   */
  export type scheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * The data used to update schedules.
     */
    data: XOR<scheduleUpdateManyMutationInput, scheduleUncheckedUpdateManyInput>
    /**
     * Filter which schedules to update
     */
    where?: scheduleWhereInput
    /**
     * Limit how many schedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * schedule upsert
   */
  export type scheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the schedule to update in case it exists.
     */
    where: scheduleWhereUniqueInput
    /**
     * In case the schedule found by the `where` argument doesn't exist, create a new schedule with this data.
     */
    create: XOR<scheduleCreateInput, scheduleUncheckedCreateInput>
    /**
     * In case the schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<scheduleUpdateInput, scheduleUncheckedUpdateInput>
  }

  /**
   * schedule delete
   */
  export type scheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * Filter which schedule to delete.
     */
    where: scheduleWhereUniqueInput
  }

  /**
   * schedule deleteMany
   */
  export type scheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schedules to delete
     */
    where?: scheduleWhereInput
    /**
     * Limit how many schedules to delete.
     */
    limit?: number
  }

  /**
   * schedule.txns
   */
  export type schedule$txnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    cursor?: transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * schedule without action
   */
  export type scheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
  }


  /**
   * Model stream
   */

  export type AggregateStream = {
    _count: StreamCountAggregateOutputType | null
    _avg: StreamAvgAggregateOutputType | null
    _sum: StreamSumAggregateOutputType | null
    _min: StreamMinAggregateOutputType | null
    _max: StreamMaxAggregateOutputType | null
  }

  export type StreamAvgAggregateOutputType = {
    amount: Decimal | null
    lastPayout: number | null
    payout: Decimal | null
  }

  export type StreamSumAggregateOutputType = {
    amount: Decimal | null
    lastPayout: bigint | null
    payout: Decimal | null
  }

  export type StreamMinAggregateOutputType = {
    username: string | null
    amount: Decimal | null
    org_id: string | null
    lastPayout: bigint | null
    created_at: Date | null
    updated_at: Date | null
    network: $Enums.network_type | null
    asset: $Enums.token | null
    id: string | null
    payout: Decimal | null
    role: string | null
    title: string | null
    state: $Enums.stream_state | null
    active: boolean | null
    interval: $Enums.interval_type | null
  }

  export type StreamMaxAggregateOutputType = {
    username: string | null
    amount: Decimal | null
    org_id: string | null
    lastPayout: bigint | null
    created_at: Date | null
    updated_at: Date | null
    network: $Enums.network_type | null
    asset: $Enums.token | null
    id: string | null
    payout: Decimal | null
    role: string | null
    title: string | null
    state: $Enums.stream_state | null
    active: boolean | null
    interval: $Enums.interval_type | null
  }

  export type StreamCountAggregateOutputType = {
    username: number
    amount: number
    org_id: number
    lastPayout: number
    created_at: number
    updated_at: number
    network: number
    asset: number
    id: number
    payout: number
    role: number
    title: number
    state: number
    active: number
    interval: number
    _all: number
  }


  export type StreamAvgAggregateInputType = {
    amount?: true
    lastPayout?: true
    payout?: true
  }

  export type StreamSumAggregateInputType = {
    amount?: true
    lastPayout?: true
    payout?: true
  }

  export type StreamMinAggregateInputType = {
    username?: true
    amount?: true
    org_id?: true
    lastPayout?: true
    created_at?: true
    updated_at?: true
    network?: true
    asset?: true
    id?: true
    payout?: true
    role?: true
    title?: true
    state?: true
    active?: true
    interval?: true
  }

  export type StreamMaxAggregateInputType = {
    username?: true
    amount?: true
    org_id?: true
    lastPayout?: true
    created_at?: true
    updated_at?: true
    network?: true
    asset?: true
    id?: true
    payout?: true
    role?: true
    title?: true
    state?: true
    active?: true
    interval?: true
  }

  export type StreamCountAggregateInputType = {
    username?: true
    amount?: true
    org_id?: true
    lastPayout?: true
    created_at?: true
    updated_at?: true
    network?: true
    asset?: true
    id?: true
    payout?: true
    role?: true
    title?: true
    state?: true
    active?: true
    interval?: true
    _all?: true
  }

  export type StreamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stream to aggregate.
     */
    where?: streamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of streams to fetch.
     */
    orderBy?: streamOrderByWithRelationInput | streamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: streamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` streams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned streams
    **/
    _count?: true | StreamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StreamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StreamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StreamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StreamMaxAggregateInputType
  }

  export type GetStreamAggregateType<T extends StreamAggregateArgs> = {
        [P in keyof T & keyof AggregateStream]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStream[P]>
      : GetScalarType<T[P], AggregateStream[P]>
  }




  export type streamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: streamWhereInput
    orderBy?: streamOrderByWithAggregationInput | streamOrderByWithAggregationInput[]
    by: StreamScalarFieldEnum[] | StreamScalarFieldEnum
    having?: streamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StreamCountAggregateInputType | true
    _avg?: StreamAvgAggregateInputType
    _sum?: StreamSumAggregateInputType
    _min?: StreamMinAggregateInputType
    _max?: StreamMaxAggregateInputType
  }

  export type StreamGroupByOutputType = {
    username: string
    amount: Decimal
    org_id: string
    lastPayout: bigint
    created_at: Date
    updated_at: Date
    network: $Enums.network_type
    asset: $Enums.token
    id: string
    payout: Decimal
    role: string
    title: string
    state: $Enums.stream_state
    active: boolean
    interval: $Enums.interval_type
    _count: StreamCountAggregateOutputType | null
    _avg: StreamAvgAggregateOutputType | null
    _sum: StreamSumAggregateOutputType | null
    _min: StreamMinAggregateOutputType | null
    _max: StreamMaxAggregateOutputType | null
  }

  type GetStreamGroupByPayload<T extends streamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StreamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StreamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StreamGroupByOutputType[P]>
            : GetScalarType<T[P], StreamGroupByOutputType[P]>
        }
      >
    >


  export type streamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    amount?: boolean
    org_id?: boolean
    lastPayout?: boolean
    created_at?: boolean
    updated_at?: boolean
    network?: boolean
    asset?: boolean
    id?: boolean
    payout?: boolean
    role?: boolean
    title?: boolean
    state?: boolean
    active?: boolean
    interval?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    org?: boolean | organizationDefaultArgs<ExtArgs>
    txns?: boolean | stream$txnsArgs<ExtArgs>
    _count?: boolean | StreamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stream"]>

  export type streamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    amount?: boolean
    org_id?: boolean
    lastPayout?: boolean
    created_at?: boolean
    updated_at?: boolean
    network?: boolean
    asset?: boolean
    id?: boolean
    payout?: boolean
    role?: boolean
    title?: boolean
    state?: boolean
    active?: boolean
    interval?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    org?: boolean | organizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stream"]>

  export type streamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    amount?: boolean
    org_id?: boolean
    lastPayout?: boolean
    created_at?: boolean
    updated_at?: boolean
    network?: boolean
    asset?: boolean
    id?: boolean
    payout?: boolean
    role?: boolean
    title?: boolean
    state?: boolean
    active?: boolean
    interval?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    org?: boolean | organizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stream"]>

  export type streamSelectScalar = {
    username?: boolean
    amount?: boolean
    org_id?: boolean
    lastPayout?: boolean
    created_at?: boolean
    updated_at?: boolean
    network?: boolean
    asset?: boolean
    id?: boolean
    payout?: boolean
    role?: boolean
    title?: boolean
    state?: boolean
    active?: boolean
    interval?: boolean
  }

  export type streamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"username" | "amount" | "org_id" | "lastPayout" | "created_at" | "updated_at" | "network" | "asset" | "id" | "payout" | "role" | "title" | "state" | "active" | "interval", ExtArgs["result"]["stream"]>
  export type streamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    org?: boolean | organizationDefaultArgs<ExtArgs>
    txns?: boolean | stream$txnsArgs<ExtArgs>
    _count?: boolean | StreamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type streamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    org?: boolean | organizationDefaultArgs<ExtArgs>
  }
  export type streamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    org?: boolean | organizationDefaultArgs<ExtArgs>
  }

  export type $streamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stream"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      org: Prisma.$organizationPayload<ExtArgs>
      txns: Prisma.$transactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      username: string
      amount: Prisma.Decimal
      org_id: string
      lastPayout: bigint
      created_at: Date
      updated_at: Date
      network: $Enums.network_type
      asset: $Enums.token
      id: string
      payout: Prisma.Decimal
      role: string
      title: string
      state: $Enums.stream_state
      active: boolean
      interval: $Enums.interval_type
    }, ExtArgs["result"]["stream"]>
    composites: {}
  }

  type streamGetPayload<S extends boolean | null | undefined | streamDefaultArgs> = $Result.GetResult<Prisma.$streamPayload, S>

  type streamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<streamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StreamCountAggregateInputType | true
    }

  export interface streamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stream'], meta: { name: 'stream' } }
    /**
     * Find zero or one Stream that matches the filter.
     * @param {streamFindUniqueArgs} args - Arguments to find a Stream
     * @example
     * // Get one Stream
     * const stream = await prisma.stream.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends streamFindUniqueArgs>(args: SelectSubset<T, streamFindUniqueArgs<ExtArgs>>): Prisma__streamClient<$Result.GetResult<Prisma.$streamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stream that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {streamFindUniqueOrThrowArgs} args - Arguments to find a Stream
     * @example
     * // Get one Stream
     * const stream = await prisma.stream.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends streamFindUniqueOrThrowArgs>(args: SelectSubset<T, streamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__streamClient<$Result.GetResult<Prisma.$streamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stream that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {streamFindFirstArgs} args - Arguments to find a Stream
     * @example
     * // Get one Stream
     * const stream = await prisma.stream.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends streamFindFirstArgs>(args?: SelectSubset<T, streamFindFirstArgs<ExtArgs>>): Prisma__streamClient<$Result.GetResult<Prisma.$streamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stream that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {streamFindFirstOrThrowArgs} args - Arguments to find a Stream
     * @example
     * // Get one Stream
     * const stream = await prisma.stream.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends streamFindFirstOrThrowArgs>(args?: SelectSubset<T, streamFindFirstOrThrowArgs<ExtArgs>>): Prisma__streamClient<$Result.GetResult<Prisma.$streamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Streams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {streamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Streams
     * const streams = await prisma.stream.findMany()
     * 
     * // Get first 10 Streams
     * const streams = await prisma.stream.findMany({ take: 10 })
     * 
     * // Only select the `username`
     * const streamWithUsernameOnly = await prisma.stream.findMany({ select: { username: true } })
     * 
     */
    findMany<T extends streamFindManyArgs>(args?: SelectSubset<T, streamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$streamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stream.
     * @param {streamCreateArgs} args - Arguments to create a Stream.
     * @example
     * // Create one Stream
     * const Stream = await prisma.stream.create({
     *   data: {
     *     // ... data to create a Stream
     *   }
     * })
     * 
     */
    create<T extends streamCreateArgs>(args: SelectSubset<T, streamCreateArgs<ExtArgs>>): Prisma__streamClient<$Result.GetResult<Prisma.$streamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Streams.
     * @param {streamCreateManyArgs} args - Arguments to create many Streams.
     * @example
     * // Create many Streams
     * const stream = await prisma.stream.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends streamCreateManyArgs>(args?: SelectSubset<T, streamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Streams and returns the data saved in the database.
     * @param {streamCreateManyAndReturnArgs} args - Arguments to create many Streams.
     * @example
     * // Create many Streams
     * const stream = await prisma.stream.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Streams and only return the `username`
     * const streamWithUsernameOnly = await prisma.stream.createManyAndReturn({
     *   select: { username: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends streamCreateManyAndReturnArgs>(args?: SelectSubset<T, streamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$streamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stream.
     * @param {streamDeleteArgs} args - Arguments to delete one Stream.
     * @example
     * // Delete one Stream
     * const Stream = await prisma.stream.delete({
     *   where: {
     *     // ... filter to delete one Stream
     *   }
     * })
     * 
     */
    delete<T extends streamDeleteArgs>(args: SelectSubset<T, streamDeleteArgs<ExtArgs>>): Prisma__streamClient<$Result.GetResult<Prisma.$streamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stream.
     * @param {streamUpdateArgs} args - Arguments to update one Stream.
     * @example
     * // Update one Stream
     * const stream = await prisma.stream.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends streamUpdateArgs>(args: SelectSubset<T, streamUpdateArgs<ExtArgs>>): Prisma__streamClient<$Result.GetResult<Prisma.$streamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Streams.
     * @param {streamDeleteManyArgs} args - Arguments to filter Streams to delete.
     * @example
     * // Delete a few Streams
     * const { count } = await prisma.stream.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends streamDeleteManyArgs>(args?: SelectSubset<T, streamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Streams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {streamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Streams
     * const stream = await prisma.stream.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends streamUpdateManyArgs>(args: SelectSubset<T, streamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Streams and returns the data updated in the database.
     * @param {streamUpdateManyAndReturnArgs} args - Arguments to update many Streams.
     * @example
     * // Update many Streams
     * const stream = await prisma.stream.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Streams and only return the `username`
     * const streamWithUsernameOnly = await prisma.stream.updateManyAndReturn({
     *   select: { username: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends streamUpdateManyAndReturnArgs>(args: SelectSubset<T, streamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$streamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stream.
     * @param {streamUpsertArgs} args - Arguments to update or create a Stream.
     * @example
     * // Update or create a Stream
     * const stream = await prisma.stream.upsert({
     *   create: {
     *     // ... data to create a Stream
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stream we want to update
     *   }
     * })
     */
    upsert<T extends streamUpsertArgs>(args: SelectSubset<T, streamUpsertArgs<ExtArgs>>): Prisma__streamClient<$Result.GetResult<Prisma.$streamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Streams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {streamCountArgs} args - Arguments to filter Streams to count.
     * @example
     * // Count the number of Streams
     * const count = await prisma.stream.count({
     *   where: {
     *     // ... the filter for the Streams we want to count
     *   }
     * })
    **/
    count<T extends streamCountArgs>(
      args?: Subset<T, streamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StreamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stream.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StreamAggregateArgs>(args: Subset<T, StreamAggregateArgs>): Prisma.PrismaPromise<GetStreamAggregateType<T>>

    /**
     * Group by Stream.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {streamGroupByArgs} args - Group by arguments.
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
      T extends streamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: streamGroupByArgs['orderBy'] }
        : { orderBy?: streamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, streamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStreamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stream model
   */
  readonly fields: streamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stream.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__streamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    org<T extends organizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, organizationDefaultArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    txns<T extends stream$txnsArgs<ExtArgs> = {}>(args?: Subset<T, stream$txnsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the stream model
   */
  interface streamFieldRefs {
    readonly username: FieldRef<"stream", 'String'>
    readonly amount: FieldRef<"stream", 'Decimal'>
    readonly org_id: FieldRef<"stream", 'String'>
    readonly lastPayout: FieldRef<"stream", 'BigInt'>
    readonly created_at: FieldRef<"stream", 'DateTime'>
    readonly updated_at: FieldRef<"stream", 'DateTime'>
    readonly network: FieldRef<"stream", 'network_type'>
    readonly asset: FieldRef<"stream", 'token'>
    readonly id: FieldRef<"stream", 'String'>
    readonly payout: FieldRef<"stream", 'Decimal'>
    readonly role: FieldRef<"stream", 'String'>
    readonly title: FieldRef<"stream", 'String'>
    readonly state: FieldRef<"stream", 'stream_state'>
    readonly active: FieldRef<"stream", 'Boolean'>
    readonly interval: FieldRef<"stream", 'interval_type'>
  }
    

  // Custom InputTypes
  /**
   * stream findUnique
   */
  export type streamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stream
     */
    select?: streamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stream
     */
    omit?: streamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: streamInclude<ExtArgs> | null
    /**
     * Filter, which stream to fetch.
     */
    where: streamWhereUniqueInput
  }

  /**
   * stream findUniqueOrThrow
   */
  export type streamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stream
     */
    select?: streamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stream
     */
    omit?: streamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: streamInclude<ExtArgs> | null
    /**
     * Filter, which stream to fetch.
     */
    where: streamWhereUniqueInput
  }

  /**
   * stream findFirst
   */
  export type streamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stream
     */
    select?: streamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stream
     */
    omit?: streamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: streamInclude<ExtArgs> | null
    /**
     * Filter, which stream to fetch.
     */
    where?: streamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of streams to fetch.
     */
    orderBy?: streamOrderByWithRelationInput | streamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for streams.
     */
    cursor?: streamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` streams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of streams.
     */
    distinct?: StreamScalarFieldEnum | StreamScalarFieldEnum[]
  }

  /**
   * stream findFirstOrThrow
   */
  export type streamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stream
     */
    select?: streamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stream
     */
    omit?: streamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: streamInclude<ExtArgs> | null
    /**
     * Filter, which stream to fetch.
     */
    where?: streamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of streams to fetch.
     */
    orderBy?: streamOrderByWithRelationInput | streamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for streams.
     */
    cursor?: streamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` streams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of streams.
     */
    distinct?: StreamScalarFieldEnum | StreamScalarFieldEnum[]
  }

  /**
   * stream findMany
   */
  export type streamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stream
     */
    select?: streamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stream
     */
    omit?: streamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: streamInclude<ExtArgs> | null
    /**
     * Filter, which streams to fetch.
     */
    where?: streamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of streams to fetch.
     */
    orderBy?: streamOrderByWithRelationInput | streamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing streams.
     */
    cursor?: streamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` streams.
     */
    skip?: number
    distinct?: StreamScalarFieldEnum | StreamScalarFieldEnum[]
  }

  /**
   * stream create
   */
  export type streamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stream
     */
    select?: streamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stream
     */
    omit?: streamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: streamInclude<ExtArgs> | null
    /**
     * The data needed to create a stream.
     */
    data: XOR<streamCreateInput, streamUncheckedCreateInput>
  }

  /**
   * stream createMany
   */
  export type streamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many streams.
     */
    data: streamCreateManyInput | streamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stream createManyAndReturn
   */
  export type streamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stream
     */
    select?: streamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stream
     */
    omit?: streamOmit<ExtArgs> | null
    /**
     * The data used to create many streams.
     */
    data: streamCreateManyInput | streamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: streamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * stream update
   */
  export type streamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stream
     */
    select?: streamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stream
     */
    omit?: streamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: streamInclude<ExtArgs> | null
    /**
     * The data needed to update a stream.
     */
    data: XOR<streamUpdateInput, streamUncheckedUpdateInput>
    /**
     * Choose, which stream to update.
     */
    where: streamWhereUniqueInput
  }

  /**
   * stream updateMany
   */
  export type streamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update streams.
     */
    data: XOR<streamUpdateManyMutationInput, streamUncheckedUpdateManyInput>
    /**
     * Filter which streams to update
     */
    where?: streamWhereInput
    /**
     * Limit how many streams to update.
     */
    limit?: number
  }

  /**
   * stream updateManyAndReturn
   */
  export type streamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stream
     */
    select?: streamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stream
     */
    omit?: streamOmit<ExtArgs> | null
    /**
     * The data used to update streams.
     */
    data: XOR<streamUpdateManyMutationInput, streamUncheckedUpdateManyInput>
    /**
     * Filter which streams to update
     */
    where?: streamWhereInput
    /**
     * Limit how many streams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: streamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * stream upsert
   */
  export type streamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stream
     */
    select?: streamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stream
     */
    omit?: streamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: streamInclude<ExtArgs> | null
    /**
     * The filter to search for the stream to update in case it exists.
     */
    where: streamWhereUniqueInput
    /**
     * In case the stream found by the `where` argument doesn't exist, create a new stream with this data.
     */
    create: XOR<streamCreateInput, streamUncheckedCreateInput>
    /**
     * In case the stream was found with the provided `where` argument, update it with this data.
     */
    update: XOR<streamUpdateInput, streamUncheckedUpdateInput>
  }

  /**
   * stream delete
   */
  export type streamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stream
     */
    select?: streamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stream
     */
    omit?: streamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: streamInclude<ExtArgs> | null
    /**
     * Filter which stream to delete.
     */
    where: streamWhereUniqueInput
  }

  /**
   * stream deleteMany
   */
  export type streamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which streams to delete
     */
    where?: streamWhereInput
    /**
     * Limit how many streams to delete.
     */
    limit?: number
  }

  /**
   * stream.txns
   */
  export type stream$txnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    cursor?: transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * stream without action
   */
  export type streamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stream
     */
    select?: streamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stream
     */
    omit?: streamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: streamInclude<ExtArgs> | null
  }


  /**
   * Model transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type TransactionMinAggregateOutputType = {
    tx_id: string | null
    amount: Decimal | null
    asset: $Enums.token | null
    network: $Enums.network_type | null
    created_at: Date | null
    recipient: string | null
    org_id: string | null
    username: string | null
    schedule_id: string | null
    stream_id: string | null
  }

  export type TransactionMaxAggregateOutputType = {
    tx_id: string | null
    amount: Decimal | null
    asset: $Enums.token | null
    network: $Enums.network_type | null
    created_at: Date | null
    recipient: string | null
    org_id: string | null
    username: string | null
    schedule_id: string | null
    stream_id: string | null
  }

  export type TransactionCountAggregateOutputType = {
    tx_id: number
    amount: number
    asset: number
    network: number
    created_at: number
    recipient: number
    org_id: number
    username: number
    schedule_id: number
    stream_id: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    tx_id?: true
    amount?: true
    asset?: true
    network?: true
    created_at?: true
    recipient?: true
    org_id?: true
    username?: true
    schedule_id?: true
    stream_id?: true
  }

  export type TransactionMaxAggregateInputType = {
    tx_id?: true
    amount?: true
    asset?: true
    network?: true
    created_at?: true
    recipient?: true
    org_id?: true
    username?: true
    schedule_id?: true
    stream_id?: true
  }

  export type TransactionCountAggregateInputType = {
    tx_id?: true
    amount?: true
    asset?: true
    network?: true
    created_at?: true
    recipient?: true
    org_id?: true
    username?: true
    schedule_id?: true
    stream_id?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction to aggregate.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type transactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithAggregationInput | transactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: transactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    tx_id: string
    amount: Decimal
    asset: $Enums.token
    network: $Enums.network_type
    created_at: Date
    recipient: string
    org_id: string
    username: string
    schedule_id: string | null
    stream_id: string | null
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends transactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type transactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tx_id?: boolean
    amount?: boolean
    asset?: boolean
    network?: boolean
    created_at?: boolean
    recipient?: boolean
    org_id?: boolean
    username?: boolean
    schedule_id?: boolean
    stream_id?: boolean
    org?: boolean | organizationDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    schedule?: boolean | transaction$scheduleArgs<ExtArgs>
    stream?: boolean | transaction$streamArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tx_id?: boolean
    amount?: boolean
    asset?: boolean
    network?: boolean
    created_at?: boolean
    recipient?: boolean
    org_id?: boolean
    username?: boolean
    schedule_id?: boolean
    stream_id?: boolean
    org?: boolean | organizationDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    schedule?: boolean | transaction$scheduleArgs<ExtArgs>
    stream?: boolean | transaction$streamArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tx_id?: boolean
    amount?: boolean
    asset?: boolean
    network?: boolean
    created_at?: boolean
    recipient?: boolean
    org_id?: boolean
    username?: boolean
    schedule_id?: boolean
    stream_id?: boolean
    org?: boolean | organizationDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    schedule?: boolean | transaction$scheduleArgs<ExtArgs>
    stream?: boolean | transaction$streamArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectScalar = {
    tx_id?: boolean
    amount?: boolean
    asset?: boolean
    network?: boolean
    created_at?: boolean
    recipient?: boolean
    org_id?: boolean
    username?: boolean
    schedule_id?: boolean
    stream_id?: boolean
  }

  export type transactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tx_id" | "amount" | "asset" | "network" | "created_at" | "recipient" | "org_id" | "username" | "schedule_id" | "stream_id", ExtArgs["result"]["transaction"]>
  export type transactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | organizationDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    schedule?: boolean | transaction$scheduleArgs<ExtArgs>
    stream?: boolean | transaction$streamArgs<ExtArgs>
  }
  export type transactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | organizationDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    schedule?: boolean | transaction$scheduleArgs<ExtArgs>
    stream?: boolean | transaction$streamArgs<ExtArgs>
  }
  export type transactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | organizationDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    schedule?: boolean | transaction$scheduleArgs<ExtArgs>
    stream?: boolean | transaction$streamArgs<ExtArgs>
  }

  export type $transactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaction"
    objects: {
      org: Prisma.$organizationPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
      schedule: Prisma.$schedulePayload<ExtArgs> | null
      stream: Prisma.$streamPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      tx_id: string
      amount: Prisma.Decimal
      asset: $Enums.token
      network: $Enums.network_type
      created_at: Date
      recipient: string
      org_id: string
      username: string
      schedule_id: string | null
      stream_id: string | null
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type transactionGetPayload<S extends boolean | null | undefined | transactionDefaultArgs> = $Result.GetResult<Prisma.$transactionPayload, S>

  type transactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface transactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaction'], meta: { name: 'transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {transactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transactionFindUniqueArgs>(args: SelectSubset<T, transactionFindUniqueArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transactionFindUniqueOrThrowArgs>(args: SelectSubset<T, transactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transactionFindFirstArgs>(args?: SelectSubset<T, transactionFindFirstArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transactionFindFirstOrThrowArgs>(args?: SelectSubset<T, transactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `tx_id`
     * const transactionWithTx_idOnly = await prisma.transaction.findMany({ select: { tx_id: true } })
     * 
     */
    findMany<T extends transactionFindManyArgs>(args?: SelectSubset<T, transactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {transactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends transactionCreateArgs>(args: SelectSubset<T, transactionCreateArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {transactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transactionCreateManyArgs>(args?: SelectSubset<T, transactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {transactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `tx_id`
     * const transactionWithTx_idOnly = await prisma.transaction.createManyAndReturn({
     *   select: { tx_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transactionCreateManyAndReturnArgs>(args?: SelectSubset<T, transactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {transactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends transactionDeleteArgs>(args: SelectSubset<T, transactionDeleteArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {transactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transactionUpdateArgs>(args: SelectSubset<T, transactionUpdateArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {transactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transactionDeleteManyArgs>(args?: SelectSubset<T, transactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transactionUpdateManyArgs>(args: SelectSubset<T, transactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {transactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `tx_id`
     * const transactionWithTx_idOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { tx_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends transactionUpdateManyAndReturnArgs>(args: SelectSubset<T, transactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {transactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends transactionUpsertArgs>(args: SelectSubset<T, transactionUpsertArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends transactionCountArgs>(
      args?: Subset<T, transactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionGroupByArgs} args - Group by arguments.
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
      T extends transactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transactionGroupByArgs['orderBy'] }
        : { orderBy?: transactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, transactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaction model
   */
  readonly fields: transactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends organizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, organizationDefaultArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    schedule<T extends transaction$scheduleArgs<ExtArgs> = {}>(args?: Subset<T, transaction$scheduleArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    stream<T extends transaction$streamArgs<ExtArgs> = {}>(args?: Subset<T, transaction$streamArgs<ExtArgs>>): Prisma__streamClient<$Result.GetResult<Prisma.$streamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the transaction model
   */
  interface transactionFieldRefs {
    readonly tx_id: FieldRef<"transaction", 'String'>
    readonly amount: FieldRef<"transaction", 'Decimal'>
    readonly asset: FieldRef<"transaction", 'token'>
    readonly network: FieldRef<"transaction", 'network_type'>
    readonly created_at: FieldRef<"transaction", 'DateTime'>
    readonly recipient: FieldRef<"transaction", 'String'>
    readonly org_id: FieldRef<"transaction", 'String'>
    readonly username: FieldRef<"transaction", 'String'>
    readonly schedule_id: FieldRef<"transaction", 'String'>
    readonly stream_id: FieldRef<"transaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * transaction findUnique
   */
  export type transactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction findUniqueOrThrow
   */
  export type transactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction findFirst
   */
  export type transactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction findFirstOrThrow
   */
  export type transactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction findMany
   */
  export type transactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction create
   */
  export type transactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The data needed to create a transaction.
     */
    data: XOR<transactionCreateInput, transactionUncheckedCreateInput>
  }

  /**
   * transaction createMany
   */
  export type transactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transactions.
     */
    data: transactionCreateManyInput | transactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaction createManyAndReturn
   */
  export type transactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * The data used to create many transactions.
     */
    data: transactionCreateManyInput | transactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaction update
   */
  export type transactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The data needed to update a transaction.
     */
    data: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>
    /**
     * Choose, which transaction to update.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction updateMany
   */
  export type transactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
  }

  /**
   * transaction updateManyAndReturn
   */
  export type transactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaction upsert
   */
  export type transactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The filter to search for the transaction to update in case it exists.
     */
    where: transactionWhereUniqueInput
    /**
     * In case the transaction found by the `where` argument doesn't exist, create a new transaction with this data.
     */
    create: XOR<transactionCreateInput, transactionUncheckedCreateInput>
    /**
     * In case the transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>
  }

  /**
   * transaction delete
   */
  export type transactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter which transaction to delete.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction deleteMany
   */
  export type transactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to delete
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to delete.
     */
    limit?: number
  }

  /**
   * transaction.schedule
   */
  export type transaction$scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    where?: scheduleWhereInput
  }

  /**
   * transaction.stream
   */
  export type transaction$streamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stream
     */
    select?: streamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stream
     */
    omit?: streamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: streamInclude<ExtArgs> | null
    where?: streamWhereInput
  }

  /**
   * transaction without action
   */
  export type transactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    total_payout: Decimal | null
  }

  export type UserSumAggregateOutputType = {
    total_payout: Decimal | null
  }

  export type UserMinAggregateOutputType = {
    username: string | null
    image: string | null
    name: string | null
    total_payout: Decimal | null
    uid: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    username: string | null
    image: string | null
    name: string | null
    total_payout: Decimal | null
    uid: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    username: number
    image: number
    name: number
    total_payout: number
    uid: number
    email: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    total_payout?: true
  }

  export type UserSumAggregateInputType = {
    total_payout?: true
  }

  export type UserMinAggregateInputType = {
    username?: true
    image?: true
    name?: true
    total_payout?: true
    uid?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    username?: true
    image?: true
    name?: true
    total_payout?: true
    uid?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    username?: true
    image?: true
    name?: true
    total_payout?: true
    uid?: true
    email?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    username: string | null
    image: string | null
    name: string | null
    total_payout: Decimal
    uid: string
    email: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    image?: boolean
    name?: boolean
    total_payout?: boolean
    uid?: boolean
    email?: boolean
    streams?: boolean | user$streamsArgs<ExtArgs>
    schedules?: boolean | user$schedulesArgs<ExtArgs>
    wallets?: boolean | user$walletsArgs<ExtArgs>
    txns?: boolean | user$txnsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    image?: boolean
    name?: boolean
    total_payout?: boolean
    uid?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    image?: boolean
    name?: boolean
    total_payout?: boolean
    uid?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    username?: boolean
    image?: boolean
    name?: boolean
    total_payout?: boolean
    uid?: boolean
    email?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"username" | "image" | "name" | "total_payout" | "uid" | "email", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streams?: boolean | user$streamsArgs<ExtArgs>
    schedules?: boolean | user$schedulesArgs<ExtArgs>
    wallets?: boolean | user$walletsArgs<ExtArgs>
    txns?: boolean | user$txnsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      streams: Prisma.$streamPayload<ExtArgs>[]
      schedules: Prisma.$schedulePayload<ExtArgs>[]
      wallets: Prisma.$walletPayload<ExtArgs>[]
      txns: Prisma.$transactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      username: string | null
      image: string | null
      name: string | null
      total_payout: Prisma.Decimal
      uid: string
      email: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `username`
     * const userWithUsernameOnly = await prisma.user.findMany({ select: { username: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `username`
     * const userWithUsernameOnly = await prisma.user.createManyAndReturn({
     *   select: { username: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `username`
     * const userWithUsernameOnly = await prisma.user.updateManyAndReturn({
     *   select: { username: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    streams<T extends user$streamsArgs<ExtArgs> = {}>(args?: Subset<T, user$streamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$streamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedules<T extends user$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, user$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wallets<T extends user$walletsArgs<ExtArgs> = {}>(args?: Subset<T, user$walletsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    txns<T extends user$txnsArgs<ExtArgs> = {}>(args?: Subset<T, user$txnsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly username: FieldRef<"user", 'String'>
    readonly image: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly total_payout: FieldRef<"user", 'Decimal'>
    readonly uid: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.streams
   */
  export type user$streamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stream
     */
    select?: streamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stream
     */
    omit?: streamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: streamInclude<ExtArgs> | null
    where?: streamWhereInput
    orderBy?: streamOrderByWithRelationInput | streamOrderByWithRelationInput[]
    cursor?: streamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StreamScalarFieldEnum | StreamScalarFieldEnum[]
  }

  /**
   * user.schedules
   */
  export type user$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the schedule
     */
    omit?: scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    where?: scheduleWhereInput
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[]
    cursor?: scheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * user.wallets
   */
  export type user$walletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletInclude<ExtArgs> | null
    where?: walletWhereInput
    orderBy?: walletOrderByWithRelationInput | walletOrderByWithRelationInput[]
    cursor?: walletWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * user.txns
   */
  export type user$txnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    cursor?: transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model waitlist
   */

  export type AggregateWaitlist = {
    _count: WaitlistCountAggregateOutputType | null
    _min: WaitlistMinAggregateOutputType | null
    _max: WaitlistMaxAggregateOutputType | null
  }

  export type WaitlistMinAggregateOutputType = {
    email: string | null
    name: string | null
    company: string | null
  }

  export type WaitlistMaxAggregateOutputType = {
    email: string | null
    name: string | null
    company: string | null
  }

  export type WaitlistCountAggregateOutputType = {
    email: number
    name: number
    company: number
    _all: number
  }


  export type WaitlistMinAggregateInputType = {
    email?: true
    name?: true
    company?: true
  }

  export type WaitlistMaxAggregateInputType = {
    email?: true
    name?: true
    company?: true
  }

  export type WaitlistCountAggregateInputType = {
    email?: true
    name?: true
    company?: true
    _all?: true
  }

  export type WaitlistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which waitlist to aggregate.
     */
    where?: waitlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of waitlists to fetch.
     */
    orderBy?: waitlistOrderByWithRelationInput | waitlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: waitlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` waitlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` waitlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned waitlists
    **/
    _count?: true | WaitlistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaitlistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaitlistMaxAggregateInputType
  }

  export type GetWaitlistAggregateType<T extends WaitlistAggregateArgs> = {
        [P in keyof T & keyof AggregateWaitlist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaitlist[P]>
      : GetScalarType<T[P], AggregateWaitlist[P]>
  }




  export type waitlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: waitlistWhereInput
    orderBy?: waitlistOrderByWithAggregationInput | waitlistOrderByWithAggregationInput[]
    by: WaitlistScalarFieldEnum[] | WaitlistScalarFieldEnum
    having?: waitlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaitlistCountAggregateInputType | true
    _min?: WaitlistMinAggregateInputType
    _max?: WaitlistMaxAggregateInputType
  }

  export type WaitlistGroupByOutputType = {
    email: string
    name: string | null
    company: string | null
    _count: WaitlistCountAggregateOutputType | null
    _min: WaitlistMinAggregateOutputType | null
    _max: WaitlistMaxAggregateOutputType | null
  }

  type GetWaitlistGroupByPayload<T extends waitlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaitlistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaitlistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaitlistGroupByOutputType[P]>
            : GetScalarType<T[P], WaitlistGroupByOutputType[P]>
        }
      >
    >


  export type waitlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    name?: boolean
    company?: boolean
  }, ExtArgs["result"]["waitlist"]>

  export type waitlistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    name?: boolean
    company?: boolean
  }, ExtArgs["result"]["waitlist"]>

  export type waitlistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    name?: boolean
    company?: boolean
  }, ExtArgs["result"]["waitlist"]>

  export type waitlistSelectScalar = {
    email?: boolean
    name?: boolean
    company?: boolean
  }

  export type waitlistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"email" | "name" | "company", ExtArgs["result"]["waitlist"]>

  export type $waitlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "waitlist"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      email: string
      name: string | null
      company: string | null
    }, ExtArgs["result"]["waitlist"]>
    composites: {}
  }

  type waitlistGetPayload<S extends boolean | null | undefined | waitlistDefaultArgs> = $Result.GetResult<Prisma.$waitlistPayload, S>

  type waitlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<waitlistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WaitlistCountAggregateInputType | true
    }

  export interface waitlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['waitlist'], meta: { name: 'waitlist' } }
    /**
     * Find zero or one Waitlist that matches the filter.
     * @param {waitlistFindUniqueArgs} args - Arguments to find a Waitlist
     * @example
     * // Get one Waitlist
     * const waitlist = await prisma.waitlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends waitlistFindUniqueArgs>(args: SelectSubset<T, waitlistFindUniqueArgs<ExtArgs>>): Prisma__waitlistClient<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Waitlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {waitlistFindUniqueOrThrowArgs} args - Arguments to find a Waitlist
     * @example
     * // Get one Waitlist
     * const waitlist = await prisma.waitlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends waitlistFindUniqueOrThrowArgs>(args: SelectSubset<T, waitlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__waitlistClient<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Waitlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waitlistFindFirstArgs} args - Arguments to find a Waitlist
     * @example
     * // Get one Waitlist
     * const waitlist = await prisma.waitlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends waitlistFindFirstArgs>(args?: SelectSubset<T, waitlistFindFirstArgs<ExtArgs>>): Prisma__waitlistClient<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Waitlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waitlistFindFirstOrThrowArgs} args - Arguments to find a Waitlist
     * @example
     * // Get one Waitlist
     * const waitlist = await prisma.waitlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends waitlistFindFirstOrThrowArgs>(args?: SelectSubset<T, waitlistFindFirstOrThrowArgs<ExtArgs>>): Prisma__waitlistClient<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Waitlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waitlistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Waitlists
     * const waitlists = await prisma.waitlist.findMany()
     * 
     * // Get first 10 Waitlists
     * const waitlists = await prisma.waitlist.findMany({ take: 10 })
     * 
     * // Only select the `email`
     * const waitlistWithEmailOnly = await prisma.waitlist.findMany({ select: { email: true } })
     * 
     */
    findMany<T extends waitlistFindManyArgs>(args?: SelectSubset<T, waitlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Waitlist.
     * @param {waitlistCreateArgs} args - Arguments to create a Waitlist.
     * @example
     * // Create one Waitlist
     * const Waitlist = await prisma.waitlist.create({
     *   data: {
     *     // ... data to create a Waitlist
     *   }
     * })
     * 
     */
    create<T extends waitlistCreateArgs>(args: SelectSubset<T, waitlistCreateArgs<ExtArgs>>): Prisma__waitlistClient<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Waitlists.
     * @param {waitlistCreateManyArgs} args - Arguments to create many Waitlists.
     * @example
     * // Create many Waitlists
     * const waitlist = await prisma.waitlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends waitlistCreateManyArgs>(args?: SelectSubset<T, waitlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Waitlists and returns the data saved in the database.
     * @param {waitlistCreateManyAndReturnArgs} args - Arguments to create many Waitlists.
     * @example
     * // Create many Waitlists
     * const waitlist = await prisma.waitlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Waitlists and only return the `email`
     * const waitlistWithEmailOnly = await prisma.waitlist.createManyAndReturn({
     *   select: { email: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends waitlistCreateManyAndReturnArgs>(args?: SelectSubset<T, waitlistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Waitlist.
     * @param {waitlistDeleteArgs} args - Arguments to delete one Waitlist.
     * @example
     * // Delete one Waitlist
     * const Waitlist = await prisma.waitlist.delete({
     *   where: {
     *     // ... filter to delete one Waitlist
     *   }
     * })
     * 
     */
    delete<T extends waitlistDeleteArgs>(args: SelectSubset<T, waitlistDeleteArgs<ExtArgs>>): Prisma__waitlistClient<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Waitlist.
     * @param {waitlistUpdateArgs} args - Arguments to update one Waitlist.
     * @example
     * // Update one Waitlist
     * const waitlist = await prisma.waitlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends waitlistUpdateArgs>(args: SelectSubset<T, waitlistUpdateArgs<ExtArgs>>): Prisma__waitlistClient<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Waitlists.
     * @param {waitlistDeleteManyArgs} args - Arguments to filter Waitlists to delete.
     * @example
     * // Delete a few Waitlists
     * const { count } = await prisma.waitlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends waitlistDeleteManyArgs>(args?: SelectSubset<T, waitlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Waitlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waitlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Waitlists
     * const waitlist = await prisma.waitlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends waitlistUpdateManyArgs>(args: SelectSubset<T, waitlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Waitlists and returns the data updated in the database.
     * @param {waitlistUpdateManyAndReturnArgs} args - Arguments to update many Waitlists.
     * @example
     * // Update many Waitlists
     * const waitlist = await prisma.waitlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Waitlists and only return the `email`
     * const waitlistWithEmailOnly = await prisma.waitlist.updateManyAndReturn({
     *   select: { email: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends waitlistUpdateManyAndReturnArgs>(args: SelectSubset<T, waitlistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Waitlist.
     * @param {waitlistUpsertArgs} args - Arguments to update or create a Waitlist.
     * @example
     * // Update or create a Waitlist
     * const waitlist = await prisma.waitlist.upsert({
     *   create: {
     *     // ... data to create a Waitlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Waitlist we want to update
     *   }
     * })
     */
    upsert<T extends waitlistUpsertArgs>(args: SelectSubset<T, waitlistUpsertArgs<ExtArgs>>): Prisma__waitlistClient<$Result.GetResult<Prisma.$waitlistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Waitlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waitlistCountArgs} args - Arguments to filter Waitlists to count.
     * @example
     * // Count the number of Waitlists
     * const count = await prisma.waitlist.count({
     *   where: {
     *     // ... the filter for the Waitlists we want to count
     *   }
     * })
    **/
    count<T extends waitlistCountArgs>(
      args?: Subset<T, waitlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaitlistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Waitlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WaitlistAggregateArgs>(args: Subset<T, WaitlistAggregateArgs>): Prisma.PrismaPromise<GetWaitlistAggregateType<T>>

    /**
     * Group by Waitlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waitlistGroupByArgs} args - Group by arguments.
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
      T extends waitlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: waitlistGroupByArgs['orderBy'] }
        : { orderBy?: waitlistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, waitlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaitlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the waitlist model
   */
  readonly fields: waitlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for waitlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__waitlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the waitlist model
   */
  interface waitlistFieldRefs {
    readonly email: FieldRef<"waitlist", 'String'>
    readonly name: FieldRef<"waitlist", 'String'>
    readonly company: FieldRef<"waitlist", 'String'>
  }
    

  // Custom InputTypes
  /**
   * waitlist findUnique
   */
  export type waitlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlist
     */
    select?: waitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waitlist
     */
    omit?: waitlistOmit<ExtArgs> | null
    /**
     * Filter, which waitlist to fetch.
     */
    where: waitlistWhereUniqueInput
  }

  /**
   * waitlist findUniqueOrThrow
   */
  export type waitlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlist
     */
    select?: waitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waitlist
     */
    omit?: waitlistOmit<ExtArgs> | null
    /**
     * Filter, which waitlist to fetch.
     */
    where: waitlistWhereUniqueInput
  }

  /**
   * waitlist findFirst
   */
  export type waitlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlist
     */
    select?: waitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waitlist
     */
    omit?: waitlistOmit<ExtArgs> | null
    /**
     * Filter, which waitlist to fetch.
     */
    where?: waitlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of waitlists to fetch.
     */
    orderBy?: waitlistOrderByWithRelationInput | waitlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for waitlists.
     */
    cursor?: waitlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` waitlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` waitlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of waitlists.
     */
    distinct?: WaitlistScalarFieldEnum | WaitlistScalarFieldEnum[]
  }

  /**
   * waitlist findFirstOrThrow
   */
  export type waitlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlist
     */
    select?: waitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waitlist
     */
    omit?: waitlistOmit<ExtArgs> | null
    /**
     * Filter, which waitlist to fetch.
     */
    where?: waitlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of waitlists to fetch.
     */
    orderBy?: waitlistOrderByWithRelationInput | waitlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for waitlists.
     */
    cursor?: waitlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` waitlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` waitlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of waitlists.
     */
    distinct?: WaitlistScalarFieldEnum | WaitlistScalarFieldEnum[]
  }

  /**
   * waitlist findMany
   */
  export type waitlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlist
     */
    select?: waitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waitlist
     */
    omit?: waitlistOmit<ExtArgs> | null
    /**
     * Filter, which waitlists to fetch.
     */
    where?: waitlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of waitlists to fetch.
     */
    orderBy?: waitlistOrderByWithRelationInput | waitlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing waitlists.
     */
    cursor?: waitlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` waitlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` waitlists.
     */
    skip?: number
    distinct?: WaitlistScalarFieldEnum | WaitlistScalarFieldEnum[]
  }

  /**
   * waitlist create
   */
  export type waitlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlist
     */
    select?: waitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waitlist
     */
    omit?: waitlistOmit<ExtArgs> | null
    /**
     * The data needed to create a waitlist.
     */
    data: XOR<waitlistCreateInput, waitlistUncheckedCreateInput>
  }

  /**
   * waitlist createMany
   */
  export type waitlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many waitlists.
     */
    data: waitlistCreateManyInput | waitlistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * waitlist createManyAndReturn
   */
  export type waitlistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlist
     */
    select?: waitlistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the waitlist
     */
    omit?: waitlistOmit<ExtArgs> | null
    /**
     * The data used to create many waitlists.
     */
    data: waitlistCreateManyInput | waitlistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * waitlist update
   */
  export type waitlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlist
     */
    select?: waitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waitlist
     */
    omit?: waitlistOmit<ExtArgs> | null
    /**
     * The data needed to update a waitlist.
     */
    data: XOR<waitlistUpdateInput, waitlistUncheckedUpdateInput>
    /**
     * Choose, which waitlist to update.
     */
    where: waitlistWhereUniqueInput
  }

  /**
   * waitlist updateMany
   */
  export type waitlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update waitlists.
     */
    data: XOR<waitlistUpdateManyMutationInput, waitlistUncheckedUpdateManyInput>
    /**
     * Filter which waitlists to update
     */
    where?: waitlistWhereInput
    /**
     * Limit how many waitlists to update.
     */
    limit?: number
  }

  /**
   * waitlist updateManyAndReturn
   */
  export type waitlistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlist
     */
    select?: waitlistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the waitlist
     */
    omit?: waitlistOmit<ExtArgs> | null
    /**
     * The data used to update waitlists.
     */
    data: XOR<waitlistUpdateManyMutationInput, waitlistUncheckedUpdateManyInput>
    /**
     * Filter which waitlists to update
     */
    where?: waitlistWhereInput
    /**
     * Limit how many waitlists to update.
     */
    limit?: number
  }

  /**
   * waitlist upsert
   */
  export type waitlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlist
     */
    select?: waitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waitlist
     */
    omit?: waitlistOmit<ExtArgs> | null
    /**
     * The filter to search for the waitlist to update in case it exists.
     */
    where: waitlistWhereUniqueInput
    /**
     * In case the waitlist found by the `where` argument doesn't exist, create a new waitlist with this data.
     */
    create: XOR<waitlistCreateInput, waitlistUncheckedCreateInput>
    /**
     * In case the waitlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<waitlistUpdateInput, waitlistUncheckedUpdateInput>
  }

  /**
   * waitlist delete
   */
  export type waitlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlist
     */
    select?: waitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waitlist
     */
    omit?: waitlistOmit<ExtArgs> | null
    /**
     * Filter which waitlist to delete.
     */
    where: waitlistWhereUniqueInput
  }

  /**
   * waitlist deleteMany
   */
  export type waitlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which waitlists to delete
     */
    where?: waitlistWhereInput
    /**
     * Limit how many waitlists to delete.
     */
    limit?: number
  }

  /**
   * waitlist without action
   */
  export type waitlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waitlist
     */
    select?: waitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waitlist
     */
    omit?: waitlistOmit<ExtArgs> | null
  }


  /**
   * Model wallet
   */

  export type AggregateWallet = {
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  export type WalletAvgAggregateOutputType = {
    id: number | null
  }

  export type WalletSumAggregateOutputType = {
    id: number | null
  }

  export type WalletMinAggregateOutputType = {
    username: string | null
    network: $Enums.network_type | null
    address: string | null
    id: number | null
  }

  export type WalletMaxAggregateOutputType = {
    username: string | null
    network: $Enums.network_type | null
    address: string | null
    id: number | null
  }

  export type WalletCountAggregateOutputType = {
    username: number
    network: number
    address: number
    id: number
    _all: number
  }


  export type WalletAvgAggregateInputType = {
    id?: true
  }

  export type WalletSumAggregateInputType = {
    id?: true
  }

  export type WalletMinAggregateInputType = {
    username?: true
    network?: true
    address?: true
    id?: true
  }

  export type WalletMaxAggregateInputType = {
    username?: true
    network?: true
    address?: true
    id?: true
  }

  export type WalletCountAggregateInputType = {
    username?: true
    network?: true
    address?: true
    id?: true
    _all?: true
  }

  export type WalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which wallet to aggregate.
     */
    where?: walletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallets to fetch.
     */
    orderBy?: walletOrderByWithRelationInput | walletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: walletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wallets
    **/
    _count?: true | WalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletMaxAggregateInputType
  }

  export type GetWalletAggregateType<T extends WalletAggregateArgs> = {
        [P in keyof T & keyof AggregateWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallet[P]>
      : GetScalarType<T[P], AggregateWallet[P]>
  }




  export type walletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: walletWhereInput
    orderBy?: walletOrderByWithAggregationInput | walletOrderByWithAggregationInput[]
    by: WalletScalarFieldEnum[] | WalletScalarFieldEnum
    having?: walletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletCountAggregateInputType | true
    _avg?: WalletAvgAggregateInputType
    _sum?: WalletSumAggregateInputType
    _min?: WalletMinAggregateInputType
    _max?: WalletMaxAggregateInputType
  }

  export type WalletGroupByOutputType = {
    username: string
    network: $Enums.network_type
    address: string
    id: number
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  type GetWalletGroupByPayload<T extends walletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletGroupByOutputType[P]>
            : GetScalarType<T[P], WalletGroupByOutputType[P]>
        }
      >
    >


  export type walletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    network?: boolean
    address?: boolean
    id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type walletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    network?: boolean
    address?: boolean
    id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type walletSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    username?: boolean
    network?: boolean
    address?: boolean
    id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type walletSelectScalar = {
    username?: boolean
    network?: boolean
    address?: boolean
    id?: boolean
  }

  export type walletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"username" | "network" | "address" | "id", ExtArgs["result"]["wallet"]>
  export type walletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type walletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type walletIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $walletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "wallet"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      username: string
      network: $Enums.network_type
      address: string
      id: number
    }, ExtArgs["result"]["wallet"]>
    composites: {}
  }

  type walletGetPayload<S extends boolean | null | undefined | walletDefaultArgs> = $Result.GetResult<Prisma.$walletPayload, S>

  type walletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<walletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalletCountAggregateInputType | true
    }

  export interface walletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['wallet'], meta: { name: 'wallet' } }
    /**
     * Find zero or one Wallet that matches the filter.
     * @param {walletFindUniqueArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends walletFindUniqueArgs>(args: SelectSubset<T, walletFindUniqueArgs<ExtArgs>>): Prisma__walletClient<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wallet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {walletFindUniqueOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends walletFindUniqueOrThrowArgs>(args: SelectSubset<T, walletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__walletClient<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletFindFirstArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends walletFindFirstArgs>(args?: SelectSubset<T, walletFindFirstArgs<ExtArgs>>): Prisma__walletClient<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletFindFirstOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends walletFindFirstOrThrowArgs>(args?: SelectSubset<T, walletFindFirstOrThrowArgs<ExtArgs>>): Prisma__walletClient<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallets
     * const wallets = await prisma.wallet.findMany()
     * 
     * // Get first 10 Wallets
     * const wallets = await prisma.wallet.findMany({ take: 10 })
     * 
     * // Only select the `username`
     * const walletWithUsernameOnly = await prisma.wallet.findMany({ select: { username: true } })
     * 
     */
    findMany<T extends walletFindManyArgs>(args?: SelectSubset<T, walletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wallet.
     * @param {walletCreateArgs} args - Arguments to create a Wallet.
     * @example
     * // Create one Wallet
     * const Wallet = await prisma.wallet.create({
     *   data: {
     *     // ... data to create a Wallet
     *   }
     * })
     * 
     */
    create<T extends walletCreateArgs>(args: SelectSubset<T, walletCreateArgs<ExtArgs>>): Prisma__walletClient<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wallets.
     * @param {walletCreateManyArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends walletCreateManyArgs>(args?: SelectSubset<T, walletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wallets and returns the data saved in the database.
     * @param {walletCreateManyAndReturnArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wallets and only return the `username`
     * const walletWithUsernameOnly = await prisma.wallet.createManyAndReturn({
     *   select: { username: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends walletCreateManyAndReturnArgs>(args?: SelectSubset<T, walletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Wallet.
     * @param {walletDeleteArgs} args - Arguments to delete one Wallet.
     * @example
     * // Delete one Wallet
     * const Wallet = await prisma.wallet.delete({
     *   where: {
     *     // ... filter to delete one Wallet
     *   }
     * })
     * 
     */
    delete<T extends walletDeleteArgs>(args: SelectSubset<T, walletDeleteArgs<ExtArgs>>): Prisma__walletClient<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wallet.
     * @param {walletUpdateArgs} args - Arguments to update one Wallet.
     * @example
     * // Update one Wallet
     * const wallet = await prisma.wallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends walletUpdateArgs>(args: SelectSubset<T, walletUpdateArgs<ExtArgs>>): Prisma__walletClient<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wallets.
     * @param {walletDeleteManyArgs} args - Arguments to filter Wallets to delete.
     * @example
     * // Delete a few Wallets
     * const { count } = await prisma.wallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends walletDeleteManyArgs>(args?: SelectSubset<T, walletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends walletUpdateManyArgs>(args: SelectSubset<T, walletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets and returns the data updated in the database.
     * @param {walletUpdateManyAndReturnArgs} args - Arguments to update many Wallets.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wallets and only return the `username`
     * const walletWithUsernameOnly = await prisma.wallet.updateManyAndReturn({
     *   select: { username: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends walletUpdateManyAndReturnArgs>(args: SelectSubset<T, walletUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Wallet.
     * @param {walletUpsertArgs} args - Arguments to update or create a Wallet.
     * @example
     * // Update or create a Wallet
     * const wallet = await prisma.wallet.upsert({
     *   create: {
     *     // ... data to create a Wallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallet we want to update
     *   }
     * })
     */
    upsert<T extends walletUpsertArgs>(args: SelectSubset<T, walletUpsertArgs<ExtArgs>>): Prisma__walletClient<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletCountArgs} args - Arguments to filter Wallets to count.
     * @example
     * // Count the number of Wallets
     * const count = await prisma.wallet.count({
     *   where: {
     *     // ... the filter for the Wallets we want to count
     *   }
     * })
    **/
    count<T extends walletCountArgs>(
      args?: Subset<T, walletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WalletAggregateArgs>(args: Subset<T, WalletAggregateArgs>): Prisma.PrismaPromise<GetWalletAggregateType<T>>

    /**
     * Group by Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletGroupByArgs} args - Group by arguments.
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
      T extends walletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: walletGroupByArgs['orderBy'] }
        : { orderBy?: walletGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, walletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the wallet model
   */
  readonly fields: walletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for wallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__walletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the wallet model
   */
  interface walletFieldRefs {
    readonly username: FieldRef<"wallet", 'String'>
    readonly network: FieldRef<"wallet", 'network_type'>
    readonly address: FieldRef<"wallet", 'String'>
    readonly id: FieldRef<"wallet", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * wallet findUnique
   */
  export type walletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletInclude<ExtArgs> | null
    /**
     * Filter, which wallet to fetch.
     */
    where: walletWhereUniqueInput
  }

  /**
   * wallet findUniqueOrThrow
   */
  export type walletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletInclude<ExtArgs> | null
    /**
     * Filter, which wallet to fetch.
     */
    where: walletWhereUniqueInput
  }

  /**
   * wallet findFirst
   */
  export type walletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletInclude<ExtArgs> | null
    /**
     * Filter, which wallet to fetch.
     */
    where?: walletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallets to fetch.
     */
    orderBy?: walletOrderByWithRelationInput | walletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wallets.
     */
    cursor?: walletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * wallet findFirstOrThrow
   */
  export type walletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletInclude<ExtArgs> | null
    /**
     * Filter, which wallet to fetch.
     */
    where?: walletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallets to fetch.
     */
    orderBy?: walletOrderByWithRelationInput | walletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wallets.
     */
    cursor?: walletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * wallet findMany
   */
  export type walletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletInclude<ExtArgs> | null
    /**
     * Filter, which wallets to fetch.
     */
    where?: walletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallets to fetch.
     */
    orderBy?: walletOrderByWithRelationInput | walletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wallets.
     */
    cursor?: walletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallets.
     */
    skip?: number
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * wallet create
   */
  export type walletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletInclude<ExtArgs> | null
    /**
     * The data needed to create a wallet.
     */
    data: XOR<walletCreateInput, walletUncheckedCreateInput>
  }

  /**
   * wallet createMany
   */
  export type walletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many wallets.
     */
    data: walletCreateManyInput | walletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * wallet createManyAndReturn
   */
  export type walletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * The data used to create many wallets.
     */
    data: walletCreateManyInput | walletCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * wallet update
   */
  export type walletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletInclude<ExtArgs> | null
    /**
     * The data needed to update a wallet.
     */
    data: XOR<walletUpdateInput, walletUncheckedUpdateInput>
    /**
     * Choose, which wallet to update.
     */
    where: walletWhereUniqueInput
  }

  /**
   * wallet updateMany
   */
  export type walletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update wallets.
     */
    data: XOR<walletUpdateManyMutationInput, walletUncheckedUpdateManyInput>
    /**
     * Filter which wallets to update
     */
    where?: walletWhereInput
    /**
     * Limit how many wallets to update.
     */
    limit?: number
  }

  /**
   * wallet updateManyAndReturn
   */
  export type walletUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * The data used to update wallets.
     */
    data: XOR<walletUpdateManyMutationInput, walletUncheckedUpdateManyInput>
    /**
     * Filter which wallets to update
     */
    where?: walletWhereInput
    /**
     * Limit how many wallets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * wallet upsert
   */
  export type walletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletInclude<ExtArgs> | null
    /**
     * The filter to search for the wallet to update in case it exists.
     */
    where: walletWhereUniqueInput
    /**
     * In case the wallet found by the `where` argument doesn't exist, create a new wallet with this data.
     */
    create: XOR<walletCreateInput, walletUncheckedCreateInput>
    /**
     * In case the wallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<walletUpdateInput, walletUncheckedUpdateInput>
  }

  /**
   * wallet delete
   */
  export type walletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletInclude<ExtArgs> | null
    /**
     * Filter which wallet to delete.
     */
    where: walletWhereUniqueInput
  }

  /**
   * wallet deleteMany
   */
  export type walletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which wallets to delete
     */
    where?: walletWhereInput
    /**
     * Limit how many wallets to delete.
     */
    limit?: number
  }

  /**
   * wallet without action
   */
  export type walletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    owner: 'owner',
    wallet: 'wallet',
    plugin: 'plugin',
    admin: 'admin',
    logo: 'logo',
    name: 'name',
    info: 'info',
    network: 'network'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    username: 'username',
    amount: 'amount',
    isOneTime: 'isOneTime',
    org_id: 'org_id',
    nextPayout: 'nextPayout',
    created_at: 'created_at',
    updated_at: 'updated_at',
    network: 'network',
    asset: 'asset',
    id: 'id',
    role: 'role',
    title: 'title',
    active: 'active',
    interval: 'interval',
    payout: 'payout'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const StreamScalarFieldEnum: {
    username: 'username',
    amount: 'amount',
    org_id: 'org_id',
    lastPayout: 'lastPayout',
    created_at: 'created_at',
    updated_at: 'updated_at',
    network: 'network',
    asset: 'asset',
    id: 'id',
    payout: 'payout',
    role: 'role',
    title: 'title',
    state: 'state',
    active: 'active',
    interval: 'interval'
  };

  export type StreamScalarFieldEnum = (typeof StreamScalarFieldEnum)[keyof typeof StreamScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    tx_id: 'tx_id',
    amount: 'amount',
    asset: 'asset',
    network: 'network',
    created_at: 'created_at',
    recipient: 'recipient',
    org_id: 'org_id',
    username: 'username',
    schedule_id: 'schedule_id',
    stream_id: 'stream_id'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    username: 'username',
    image: 'image',
    name: 'name',
    total_payout: 'total_payout',
    uid: 'uid',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WaitlistScalarFieldEnum: {
    email: 'email',
    name: 'name',
    company: 'company'
  };

  export type WaitlistScalarFieldEnum = (typeof WaitlistScalarFieldEnum)[keyof typeof WaitlistScalarFieldEnum]


  export const WalletScalarFieldEnum: {
    username: 'username',
    network: 'network',
    address: 'address',
    id: 'id'
  };

  export type WalletScalarFieldEnum = (typeof WalletScalarFieldEnum)[keyof typeof WalletScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'network_type'
   */
  export type Enumnetwork_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'network_type'>
    


  /**
   * Reference to a field of type 'network_type[]'
   */
  export type ListEnumnetwork_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'network_type[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'token'
   */
  export type EnumtokenFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'token'>
    


  /**
   * Reference to a field of type 'token[]'
   */
  export type ListEnumtokenFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'token[]'>
    


  /**
   * Reference to a field of type 'interval_type'
   */
  export type Enuminterval_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'interval_type'>
    


  /**
   * Reference to a field of type 'interval_type[]'
   */
  export type ListEnuminterval_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'interval_type[]'>
    


  /**
   * Reference to a field of type 'stream_state'
   */
  export type Enumstream_stateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'stream_state'>
    


  /**
   * Reference to a field of type 'stream_state[]'
   */
  export type ListEnumstream_stateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'stream_state[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type organizationWhereInput = {
    AND?: organizationWhereInput | organizationWhereInput[]
    OR?: organizationWhereInput[]
    NOT?: organizationWhereInput | organizationWhereInput[]
    id?: StringFilter<"organization"> | string
    owner?: StringFilter<"organization"> | string
    wallet?: StringFilter<"organization"> | string
    plugin?: StringFilter<"organization"> | string
    admin?: StringFilter<"organization"> | string
    logo?: StringFilter<"organization"> | string
    name?: StringFilter<"organization"> | string
    info?: StringFilter<"organization"> | string
    network?: Enumnetwork_typeFilter<"organization"> | $Enums.network_type
    streams?: StreamListRelationFilter
    schedules?: ScheduleListRelationFilter
    transactions?: TransactionListRelationFilter
  }

  export type organizationOrderByWithRelationInput = {
    id?: SortOrder
    owner?: SortOrder
    wallet?: SortOrder
    plugin?: SortOrder
    admin?: SortOrder
    logo?: SortOrder
    name?: SortOrder
    info?: SortOrder
    network?: SortOrder
    streams?: streamOrderByRelationAggregateInput
    schedules?: scheduleOrderByRelationAggregateInput
    transactions?: transactionOrderByRelationAggregateInput
  }

  export type organizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    wallet?: string
    plugin?: string
    admin?: string
    name?: string
    AND?: organizationWhereInput | organizationWhereInput[]
    OR?: organizationWhereInput[]
    NOT?: organizationWhereInput | organizationWhereInput[]
    owner?: StringFilter<"organization"> | string
    logo?: StringFilter<"organization"> | string
    info?: StringFilter<"organization"> | string
    network?: Enumnetwork_typeFilter<"organization"> | $Enums.network_type
    streams?: StreamListRelationFilter
    schedules?: ScheduleListRelationFilter
    transactions?: TransactionListRelationFilter
  }, "id" | "wallet" | "plugin" | "admin" | "name">

  export type organizationOrderByWithAggregationInput = {
    id?: SortOrder
    owner?: SortOrder
    wallet?: SortOrder
    plugin?: SortOrder
    admin?: SortOrder
    logo?: SortOrder
    name?: SortOrder
    info?: SortOrder
    network?: SortOrder
    _count?: organizationCountOrderByAggregateInput
    _max?: organizationMaxOrderByAggregateInput
    _min?: organizationMinOrderByAggregateInput
  }

  export type organizationScalarWhereWithAggregatesInput = {
    AND?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[]
    OR?: organizationScalarWhereWithAggregatesInput[]
    NOT?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"organization"> | string
    owner?: StringWithAggregatesFilter<"organization"> | string
    wallet?: StringWithAggregatesFilter<"organization"> | string
    plugin?: StringWithAggregatesFilter<"organization"> | string
    admin?: StringWithAggregatesFilter<"organization"> | string
    logo?: StringWithAggregatesFilter<"organization"> | string
    name?: StringWithAggregatesFilter<"organization"> | string
    info?: StringWithAggregatesFilter<"organization"> | string
    network?: Enumnetwork_typeWithAggregatesFilter<"organization"> | $Enums.network_type
  }

  export type scheduleWhereInput = {
    AND?: scheduleWhereInput | scheduleWhereInput[]
    OR?: scheduleWhereInput[]
    NOT?: scheduleWhereInput | scheduleWhereInput[]
    username?: StringFilter<"schedule"> | string
    amount?: DecimalFilter<"schedule"> | Decimal | DecimalJsLike | number | string
    isOneTime?: BoolFilter<"schedule"> | boolean
    org_id?: StringFilter<"schedule"> | string
    nextPayout?: BigIntFilter<"schedule"> | bigint | number
    created_at?: DateTimeFilter<"schedule"> | Date | string
    updated_at?: DateTimeFilter<"schedule"> | Date | string
    network?: Enumnetwork_typeFilter<"schedule"> | $Enums.network_type
    asset?: EnumtokenFilter<"schedule"> | $Enums.token
    id?: StringFilter<"schedule"> | string
    role?: StringFilter<"schedule"> | string
    title?: StringFilter<"schedule"> | string
    active?: BoolFilter<"schedule"> | boolean
    interval?: Enuminterval_typeFilter<"schedule"> | $Enums.interval_type
    payout?: DecimalFilter<"schedule"> | Decimal | DecimalJsLike | number | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    org?: XOR<OrganizationScalarRelationFilter, organizationWhereInput>
    txns?: TransactionListRelationFilter
  }

  export type scheduleOrderByWithRelationInput = {
    username?: SortOrder
    amount?: SortOrder
    isOneTime?: SortOrder
    org_id?: SortOrder
    nextPayout?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    network?: SortOrder
    asset?: SortOrder
    id?: SortOrder
    role?: SortOrder
    title?: SortOrder
    active?: SortOrder
    interval?: SortOrder
    payout?: SortOrder
    user?: userOrderByWithRelationInput
    org?: organizationOrderByWithRelationInput
    txns?: transactionOrderByRelationAggregateInput
  }

  export type scheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: scheduleWhereInput | scheduleWhereInput[]
    OR?: scheduleWhereInput[]
    NOT?: scheduleWhereInput | scheduleWhereInput[]
    username?: StringFilter<"schedule"> | string
    amount?: DecimalFilter<"schedule"> | Decimal | DecimalJsLike | number | string
    isOneTime?: BoolFilter<"schedule"> | boolean
    org_id?: StringFilter<"schedule"> | string
    nextPayout?: BigIntFilter<"schedule"> | bigint | number
    created_at?: DateTimeFilter<"schedule"> | Date | string
    updated_at?: DateTimeFilter<"schedule"> | Date | string
    network?: Enumnetwork_typeFilter<"schedule"> | $Enums.network_type
    asset?: EnumtokenFilter<"schedule"> | $Enums.token
    role?: StringFilter<"schedule"> | string
    title?: StringFilter<"schedule"> | string
    active?: BoolFilter<"schedule"> | boolean
    interval?: Enuminterval_typeFilter<"schedule"> | $Enums.interval_type
    payout?: DecimalFilter<"schedule"> | Decimal | DecimalJsLike | number | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    org?: XOR<OrganizationScalarRelationFilter, organizationWhereInput>
    txns?: TransactionListRelationFilter
  }, "id">

  export type scheduleOrderByWithAggregationInput = {
    username?: SortOrder
    amount?: SortOrder
    isOneTime?: SortOrder
    org_id?: SortOrder
    nextPayout?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    network?: SortOrder
    asset?: SortOrder
    id?: SortOrder
    role?: SortOrder
    title?: SortOrder
    active?: SortOrder
    interval?: SortOrder
    payout?: SortOrder
    _count?: scheduleCountOrderByAggregateInput
    _avg?: scheduleAvgOrderByAggregateInput
    _max?: scheduleMaxOrderByAggregateInput
    _min?: scheduleMinOrderByAggregateInput
    _sum?: scheduleSumOrderByAggregateInput
  }

  export type scheduleScalarWhereWithAggregatesInput = {
    AND?: scheduleScalarWhereWithAggregatesInput | scheduleScalarWhereWithAggregatesInput[]
    OR?: scheduleScalarWhereWithAggregatesInput[]
    NOT?: scheduleScalarWhereWithAggregatesInput | scheduleScalarWhereWithAggregatesInput[]
    username?: StringWithAggregatesFilter<"schedule"> | string
    amount?: DecimalWithAggregatesFilter<"schedule"> | Decimal | DecimalJsLike | number | string
    isOneTime?: BoolWithAggregatesFilter<"schedule"> | boolean
    org_id?: StringWithAggregatesFilter<"schedule"> | string
    nextPayout?: BigIntWithAggregatesFilter<"schedule"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"schedule"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"schedule"> | Date | string
    network?: Enumnetwork_typeWithAggregatesFilter<"schedule"> | $Enums.network_type
    asset?: EnumtokenWithAggregatesFilter<"schedule"> | $Enums.token
    id?: StringWithAggregatesFilter<"schedule"> | string
    role?: StringWithAggregatesFilter<"schedule"> | string
    title?: StringWithAggregatesFilter<"schedule"> | string
    active?: BoolWithAggregatesFilter<"schedule"> | boolean
    interval?: Enuminterval_typeWithAggregatesFilter<"schedule"> | $Enums.interval_type
    payout?: DecimalWithAggregatesFilter<"schedule"> | Decimal | DecimalJsLike | number | string
  }

  export type streamWhereInput = {
    AND?: streamWhereInput | streamWhereInput[]
    OR?: streamWhereInput[]
    NOT?: streamWhereInput | streamWhereInput[]
    username?: StringFilter<"stream"> | string
    amount?: DecimalFilter<"stream"> | Decimal | DecimalJsLike | number | string
    org_id?: StringFilter<"stream"> | string
    lastPayout?: BigIntFilter<"stream"> | bigint | number
    created_at?: DateTimeFilter<"stream"> | Date | string
    updated_at?: DateTimeFilter<"stream"> | Date | string
    network?: Enumnetwork_typeFilter<"stream"> | $Enums.network_type
    asset?: EnumtokenFilter<"stream"> | $Enums.token
    id?: StringFilter<"stream"> | string
    payout?: DecimalFilter<"stream"> | Decimal | DecimalJsLike | number | string
    role?: StringFilter<"stream"> | string
    title?: StringFilter<"stream"> | string
    state?: Enumstream_stateFilter<"stream"> | $Enums.stream_state
    active?: BoolFilter<"stream"> | boolean
    interval?: Enuminterval_typeFilter<"stream"> | $Enums.interval_type
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    org?: XOR<OrganizationScalarRelationFilter, organizationWhereInput>
    txns?: TransactionListRelationFilter
  }

  export type streamOrderByWithRelationInput = {
    username?: SortOrder
    amount?: SortOrder
    org_id?: SortOrder
    lastPayout?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    network?: SortOrder
    asset?: SortOrder
    id?: SortOrder
    payout?: SortOrder
    role?: SortOrder
    title?: SortOrder
    state?: SortOrder
    active?: SortOrder
    interval?: SortOrder
    user?: userOrderByWithRelationInput
    org?: organizationOrderByWithRelationInput
    txns?: transactionOrderByRelationAggregateInput
  }

  export type streamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: streamWhereInput | streamWhereInput[]
    OR?: streamWhereInput[]
    NOT?: streamWhereInput | streamWhereInput[]
    username?: StringFilter<"stream"> | string
    amount?: DecimalFilter<"stream"> | Decimal | DecimalJsLike | number | string
    org_id?: StringFilter<"stream"> | string
    lastPayout?: BigIntFilter<"stream"> | bigint | number
    created_at?: DateTimeFilter<"stream"> | Date | string
    updated_at?: DateTimeFilter<"stream"> | Date | string
    network?: Enumnetwork_typeFilter<"stream"> | $Enums.network_type
    asset?: EnumtokenFilter<"stream"> | $Enums.token
    payout?: DecimalFilter<"stream"> | Decimal | DecimalJsLike | number | string
    role?: StringFilter<"stream"> | string
    title?: StringFilter<"stream"> | string
    state?: Enumstream_stateFilter<"stream"> | $Enums.stream_state
    active?: BoolFilter<"stream"> | boolean
    interval?: Enuminterval_typeFilter<"stream"> | $Enums.interval_type
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    org?: XOR<OrganizationScalarRelationFilter, organizationWhereInput>
    txns?: TransactionListRelationFilter
  }, "id">

  export type streamOrderByWithAggregationInput = {
    username?: SortOrder
    amount?: SortOrder
    org_id?: SortOrder
    lastPayout?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    network?: SortOrder
    asset?: SortOrder
    id?: SortOrder
    payout?: SortOrder
    role?: SortOrder
    title?: SortOrder
    state?: SortOrder
    active?: SortOrder
    interval?: SortOrder
    _count?: streamCountOrderByAggregateInput
    _avg?: streamAvgOrderByAggregateInput
    _max?: streamMaxOrderByAggregateInput
    _min?: streamMinOrderByAggregateInput
    _sum?: streamSumOrderByAggregateInput
  }

  export type streamScalarWhereWithAggregatesInput = {
    AND?: streamScalarWhereWithAggregatesInput | streamScalarWhereWithAggregatesInput[]
    OR?: streamScalarWhereWithAggregatesInput[]
    NOT?: streamScalarWhereWithAggregatesInput | streamScalarWhereWithAggregatesInput[]
    username?: StringWithAggregatesFilter<"stream"> | string
    amount?: DecimalWithAggregatesFilter<"stream"> | Decimal | DecimalJsLike | number | string
    org_id?: StringWithAggregatesFilter<"stream"> | string
    lastPayout?: BigIntWithAggregatesFilter<"stream"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"stream"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"stream"> | Date | string
    network?: Enumnetwork_typeWithAggregatesFilter<"stream"> | $Enums.network_type
    asset?: EnumtokenWithAggregatesFilter<"stream"> | $Enums.token
    id?: StringWithAggregatesFilter<"stream"> | string
    payout?: DecimalWithAggregatesFilter<"stream"> | Decimal | DecimalJsLike | number | string
    role?: StringWithAggregatesFilter<"stream"> | string
    title?: StringWithAggregatesFilter<"stream"> | string
    state?: Enumstream_stateWithAggregatesFilter<"stream"> | $Enums.stream_state
    active?: BoolWithAggregatesFilter<"stream"> | boolean
    interval?: Enuminterval_typeWithAggregatesFilter<"stream"> | $Enums.interval_type
  }

  export type transactionWhereInput = {
    AND?: transactionWhereInput | transactionWhereInput[]
    OR?: transactionWhereInput[]
    NOT?: transactionWhereInput | transactionWhereInput[]
    tx_id?: StringFilter<"transaction"> | string
    amount?: DecimalFilter<"transaction"> | Decimal | DecimalJsLike | number | string
    asset?: EnumtokenFilter<"transaction"> | $Enums.token
    network?: Enumnetwork_typeFilter<"transaction"> | $Enums.network_type
    created_at?: DateTimeFilter<"transaction"> | Date | string
    recipient?: StringFilter<"transaction"> | string
    org_id?: StringFilter<"transaction"> | string
    username?: StringFilter<"transaction"> | string
    schedule_id?: StringNullableFilter<"transaction"> | string | null
    stream_id?: StringNullableFilter<"transaction"> | string | null
    org?: XOR<OrganizationScalarRelationFilter, organizationWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    schedule?: XOR<ScheduleNullableScalarRelationFilter, scheduleWhereInput> | null
    stream?: XOR<StreamNullableScalarRelationFilter, streamWhereInput> | null
  }

  export type transactionOrderByWithRelationInput = {
    tx_id?: SortOrder
    amount?: SortOrder
    asset?: SortOrder
    network?: SortOrder
    created_at?: SortOrder
    recipient?: SortOrder
    org_id?: SortOrder
    username?: SortOrder
    schedule_id?: SortOrderInput | SortOrder
    stream_id?: SortOrderInput | SortOrder
    org?: organizationOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    schedule?: scheduleOrderByWithRelationInput
    stream?: streamOrderByWithRelationInput
  }

  export type transactionWhereUniqueInput = Prisma.AtLeast<{
    tx_id?: string
    AND?: transactionWhereInput | transactionWhereInput[]
    OR?: transactionWhereInput[]
    NOT?: transactionWhereInput | transactionWhereInput[]
    amount?: DecimalFilter<"transaction"> | Decimal | DecimalJsLike | number | string
    asset?: EnumtokenFilter<"transaction"> | $Enums.token
    network?: Enumnetwork_typeFilter<"transaction"> | $Enums.network_type
    created_at?: DateTimeFilter<"transaction"> | Date | string
    recipient?: StringFilter<"transaction"> | string
    org_id?: StringFilter<"transaction"> | string
    username?: StringFilter<"transaction"> | string
    schedule_id?: StringNullableFilter<"transaction"> | string | null
    stream_id?: StringNullableFilter<"transaction"> | string | null
    org?: XOR<OrganizationScalarRelationFilter, organizationWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    schedule?: XOR<ScheduleNullableScalarRelationFilter, scheduleWhereInput> | null
    stream?: XOR<StreamNullableScalarRelationFilter, streamWhereInput> | null
  }, "tx_id">

  export type transactionOrderByWithAggregationInput = {
    tx_id?: SortOrder
    amount?: SortOrder
    asset?: SortOrder
    network?: SortOrder
    created_at?: SortOrder
    recipient?: SortOrder
    org_id?: SortOrder
    username?: SortOrder
    schedule_id?: SortOrderInput | SortOrder
    stream_id?: SortOrderInput | SortOrder
    _count?: transactionCountOrderByAggregateInput
    _avg?: transactionAvgOrderByAggregateInput
    _max?: transactionMaxOrderByAggregateInput
    _min?: transactionMinOrderByAggregateInput
    _sum?: transactionSumOrderByAggregateInput
  }

  export type transactionScalarWhereWithAggregatesInput = {
    AND?: transactionScalarWhereWithAggregatesInput | transactionScalarWhereWithAggregatesInput[]
    OR?: transactionScalarWhereWithAggregatesInput[]
    NOT?: transactionScalarWhereWithAggregatesInput | transactionScalarWhereWithAggregatesInput[]
    tx_id?: StringWithAggregatesFilter<"transaction"> | string
    amount?: DecimalWithAggregatesFilter<"transaction"> | Decimal | DecimalJsLike | number | string
    asset?: EnumtokenWithAggregatesFilter<"transaction"> | $Enums.token
    network?: Enumnetwork_typeWithAggregatesFilter<"transaction"> | $Enums.network_type
    created_at?: DateTimeWithAggregatesFilter<"transaction"> | Date | string
    recipient?: StringWithAggregatesFilter<"transaction"> | string
    org_id?: StringWithAggregatesFilter<"transaction"> | string
    username?: StringWithAggregatesFilter<"transaction"> | string
    schedule_id?: StringNullableWithAggregatesFilter<"transaction"> | string | null
    stream_id?: StringNullableWithAggregatesFilter<"transaction"> | string | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    username?: StringNullableFilter<"user"> | string | null
    image?: StringNullableFilter<"user"> | string | null
    name?: StringNullableFilter<"user"> | string | null
    total_payout?: DecimalFilter<"user"> | Decimal | DecimalJsLike | number | string
    uid?: StringFilter<"user"> | string
    email?: StringNullableFilter<"user"> | string | null
    streams?: StreamListRelationFilter
    schedules?: ScheduleListRelationFilter
    wallets?: WalletListRelationFilter
    txns?: TransactionListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    username?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    total_payout?: SortOrder
    uid?: SortOrder
    email?: SortOrderInput | SortOrder
    streams?: streamOrderByRelationAggregateInput
    schedules?: scheduleOrderByRelationAggregateInput
    wallets?: walletOrderByRelationAggregateInput
    txns?: transactionOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    username?: string
    uid?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    image?: StringNullableFilter<"user"> | string | null
    name?: StringNullableFilter<"user"> | string | null
    total_payout?: DecimalFilter<"user"> | Decimal | DecimalJsLike | number | string
    streams?: StreamListRelationFilter
    schedules?: ScheduleListRelationFilter
    wallets?: WalletListRelationFilter
    txns?: TransactionListRelationFilter
  }, "uid" | "username" | "email">

  export type userOrderByWithAggregationInput = {
    username?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    total_payout?: SortOrder
    uid?: SortOrder
    email?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    username?: StringNullableWithAggregatesFilter<"user"> | string | null
    image?: StringNullableWithAggregatesFilter<"user"> | string | null
    name?: StringNullableWithAggregatesFilter<"user"> | string | null
    total_payout?: DecimalWithAggregatesFilter<"user"> | Decimal | DecimalJsLike | number | string
    uid?: StringWithAggregatesFilter<"user"> | string
    email?: StringNullableWithAggregatesFilter<"user"> | string | null
  }

  export type waitlistWhereInput = {
    AND?: waitlistWhereInput | waitlistWhereInput[]
    OR?: waitlistWhereInput[]
    NOT?: waitlistWhereInput | waitlistWhereInput[]
    email?: StringFilter<"waitlist"> | string
    name?: StringNullableFilter<"waitlist"> | string | null
    company?: StringNullableFilter<"waitlist"> | string | null
  }

  export type waitlistOrderByWithRelationInput = {
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
  }

  export type waitlistWhereUniqueInput = Prisma.AtLeast<{
    email?: string
    AND?: waitlistWhereInput | waitlistWhereInput[]
    OR?: waitlistWhereInput[]
    NOT?: waitlistWhereInput | waitlistWhereInput[]
    name?: StringNullableFilter<"waitlist"> | string | null
    company?: StringNullableFilter<"waitlist"> | string | null
  }, "email">

  export type waitlistOrderByWithAggregationInput = {
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    _count?: waitlistCountOrderByAggregateInput
    _max?: waitlistMaxOrderByAggregateInput
    _min?: waitlistMinOrderByAggregateInput
  }

  export type waitlistScalarWhereWithAggregatesInput = {
    AND?: waitlistScalarWhereWithAggregatesInput | waitlistScalarWhereWithAggregatesInput[]
    OR?: waitlistScalarWhereWithAggregatesInput[]
    NOT?: waitlistScalarWhereWithAggregatesInput | waitlistScalarWhereWithAggregatesInput[]
    email?: StringWithAggregatesFilter<"waitlist"> | string
    name?: StringNullableWithAggregatesFilter<"waitlist"> | string | null
    company?: StringNullableWithAggregatesFilter<"waitlist"> | string | null
  }

  export type walletWhereInput = {
    AND?: walletWhereInput | walletWhereInput[]
    OR?: walletWhereInput[]
    NOT?: walletWhereInput | walletWhereInput[]
    username?: StringFilter<"wallet"> | string
    network?: Enumnetwork_typeFilter<"wallet"> | $Enums.network_type
    address?: StringFilter<"wallet"> | string
    id?: IntFilter<"wallet"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type walletOrderByWithRelationInput = {
    username?: SortOrder
    network?: SortOrder
    address?: SortOrder
    id?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type walletWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username_network?: walletUsernameNetworkCompoundUniqueInput
    AND?: walletWhereInput | walletWhereInput[]
    OR?: walletWhereInput[]
    NOT?: walletWhereInput | walletWhereInput[]
    username?: StringFilter<"wallet"> | string
    network?: Enumnetwork_typeFilter<"wallet"> | $Enums.network_type
    address?: StringFilter<"wallet"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id" | "username_network">

  export type walletOrderByWithAggregationInput = {
    username?: SortOrder
    network?: SortOrder
    address?: SortOrder
    id?: SortOrder
    _count?: walletCountOrderByAggregateInput
    _avg?: walletAvgOrderByAggregateInput
    _max?: walletMaxOrderByAggregateInput
    _min?: walletMinOrderByAggregateInput
    _sum?: walletSumOrderByAggregateInput
  }

  export type walletScalarWhereWithAggregatesInput = {
    AND?: walletScalarWhereWithAggregatesInput | walletScalarWhereWithAggregatesInput[]
    OR?: walletScalarWhereWithAggregatesInput[]
    NOT?: walletScalarWhereWithAggregatesInput | walletScalarWhereWithAggregatesInput[]
    username?: StringWithAggregatesFilter<"wallet"> | string
    network?: Enumnetwork_typeWithAggregatesFilter<"wallet"> | $Enums.network_type
    address?: StringWithAggregatesFilter<"wallet"> | string
    id?: IntWithAggregatesFilter<"wallet"> | number
  }

  export type organizationCreateInput = {
    id: string
    owner: string
    wallet: string
    plugin: string
    admin: string
    logo: string
    name: string
    info: string
    network: $Enums.network_type
    streams?: streamCreateNestedManyWithoutOrgInput
    schedules?: scheduleCreateNestedManyWithoutOrgInput
    transactions?: transactionCreateNestedManyWithoutOrgInput
  }

  export type organizationUncheckedCreateInput = {
    id: string
    owner: string
    wallet: string
    plugin: string
    admin: string
    logo: string
    name: string
    info: string
    network: $Enums.network_type
    streams?: streamUncheckedCreateNestedManyWithoutOrgInput
    schedules?: scheduleUncheckedCreateNestedManyWithoutOrgInput
    transactions?: transactionUncheckedCreateNestedManyWithoutOrgInput
  }

  export type organizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
    plugin?: StringFieldUpdateOperationsInput | string
    admin?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    info?: StringFieldUpdateOperationsInput | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    streams?: streamUpdateManyWithoutOrgNestedInput
    schedules?: scheduleUpdateManyWithoutOrgNestedInput
    transactions?: transactionUpdateManyWithoutOrgNestedInput
  }

  export type organizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
    plugin?: StringFieldUpdateOperationsInput | string
    admin?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    info?: StringFieldUpdateOperationsInput | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    streams?: streamUncheckedUpdateManyWithoutOrgNestedInput
    schedules?: scheduleUncheckedUpdateManyWithoutOrgNestedInput
    transactions?: transactionUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type organizationCreateManyInput = {
    id: string
    owner: string
    wallet: string
    plugin: string
    admin: string
    logo: string
    name: string
    info: string
    network: $Enums.network_type
  }

  export type organizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
    plugin?: StringFieldUpdateOperationsInput | string
    admin?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    info?: StringFieldUpdateOperationsInput | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
  }

  export type organizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
    plugin?: StringFieldUpdateOperationsInput | string
    admin?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    info?: StringFieldUpdateOperationsInput | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
  }

  export type scheduleCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    isOneTime?: boolean
    nextPayout: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    network: $Enums.network_type
    asset: $Enums.token
    id: string
    role: string
    title: string
    active?: boolean
    interval: $Enums.interval_type
    payout?: Decimal | DecimalJsLike | number | string
    user: userCreateNestedOneWithoutSchedulesInput
    org: organizationCreateNestedOneWithoutSchedulesInput
    txns?: transactionCreateNestedManyWithoutScheduleInput
  }

  export type scheduleUncheckedCreateInput = {
    username: string
    amount: Decimal | DecimalJsLike | number | string
    isOneTime?: boolean
    org_id: string
    nextPayout: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    network: $Enums.network_type
    asset: $Enums.token
    id: string
    role: string
    title: string
    active?: boolean
    interval: $Enums.interval_type
    payout?: Decimal | DecimalJsLike | number | string
    txns?: transactionUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type scheduleUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isOneTime?: BoolFieldUpdateOperationsInput | boolean
    nextPayout?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    interval?: Enuminterval_typeFieldUpdateOperationsInput | $Enums.interval_type
    payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: userUpdateOneRequiredWithoutSchedulesNestedInput
    org?: organizationUpdateOneRequiredWithoutSchedulesNestedInput
    txns?: transactionUpdateManyWithoutScheduleNestedInput
  }

  export type scheduleUncheckedUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isOneTime?: BoolFieldUpdateOperationsInput | boolean
    org_id?: StringFieldUpdateOperationsInput | string
    nextPayout?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    interval?: Enuminterval_typeFieldUpdateOperationsInput | $Enums.interval_type
    payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    txns?: transactionUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type scheduleCreateManyInput = {
    username: string
    amount: Decimal | DecimalJsLike | number | string
    isOneTime?: boolean
    org_id: string
    nextPayout: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    network: $Enums.network_type
    asset: $Enums.token
    id: string
    role: string
    title: string
    active?: boolean
    interval: $Enums.interval_type
    payout?: Decimal | DecimalJsLike | number | string
  }

  export type scheduleUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isOneTime?: BoolFieldUpdateOperationsInput | boolean
    nextPayout?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    interval?: Enuminterval_typeFieldUpdateOperationsInput | $Enums.interval_type
    payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type scheduleUncheckedUpdateManyInput = {
    username?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isOneTime?: BoolFieldUpdateOperationsInput | boolean
    org_id?: StringFieldUpdateOperationsInput | string
    nextPayout?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    interval?: Enuminterval_typeFieldUpdateOperationsInput | $Enums.interval_type
    payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type streamCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    lastPayout?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    network: $Enums.network_type
    asset: $Enums.token
    id: string
    payout?: Decimal | DecimalJsLike | number | string
    role: string
    title: string
    state?: $Enums.stream_state
    active?: boolean
    interval: $Enums.interval_type
    user: userCreateNestedOneWithoutStreamsInput
    org: organizationCreateNestedOneWithoutStreamsInput
    txns?: transactionCreateNestedManyWithoutStreamInput
  }

  export type streamUncheckedCreateInput = {
    username: string
    amount: Decimal | DecimalJsLike | number | string
    org_id: string
    lastPayout?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    network: $Enums.network_type
    asset: $Enums.token
    id: string
    payout?: Decimal | DecimalJsLike | number | string
    role: string
    title: string
    state?: $Enums.stream_state
    active?: boolean
    interval: $Enums.interval_type
    txns?: transactionUncheckedCreateNestedManyWithoutStreamInput
  }

  export type streamUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastPayout?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    id?: StringFieldUpdateOperationsInput | string
    payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    role?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    state?: Enumstream_stateFieldUpdateOperationsInput | $Enums.stream_state
    active?: BoolFieldUpdateOperationsInput | boolean
    interval?: Enuminterval_typeFieldUpdateOperationsInput | $Enums.interval_type
    user?: userUpdateOneRequiredWithoutStreamsNestedInput
    org?: organizationUpdateOneRequiredWithoutStreamsNestedInput
    txns?: transactionUpdateManyWithoutStreamNestedInput
  }

  export type streamUncheckedUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    org_id?: StringFieldUpdateOperationsInput | string
    lastPayout?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    id?: StringFieldUpdateOperationsInput | string
    payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    role?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    state?: Enumstream_stateFieldUpdateOperationsInput | $Enums.stream_state
    active?: BoolFieldUpdateOperationsInput | boolean
    interval?: Enuminterval_typeFieldUpdateOperationsInput | $Enums.interval_type
    txns?: transactionUncheckedUpdateManyWithoutStreamNestedInput
  }

  export type streamCreateManyInput = {
    username: string
    amount: Decimal | DecimalJsLike | number | string
    org_id: string
    lastPayout?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    network: $Enums.network_type
    asset: $Enums.token
    id: string
    payout?: Decimal | DecimalJsLike | number | string
    role: string
    title: string
    state?: $Enums.stream_state
    active?: boolean
    interval: $Enums.interval_type
  }

  export type streamUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastPayout?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    id?: StringFieldUpdateOperationsInput | string
    payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    role?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    state?: Enumstream_stateFieldUpdateOperationsInput | $Enums.stream_state
    active?: BoolFieldUpdateOperationsInput | boolean
    interval?: Enuminterval_typeFieldUpdateOperationsInput | $Enums.interval_type
  }

  export type streamUncheckedUpdateManyInput = {
    username?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    org_id?: StringFieldUpdateOperationsInput | string
    lastPayout?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    id?: StringFieldUpdateOperationsInput | string
    payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    role?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    state?: Enumstream_stateFieldUpdateOperationsInput | $Enums.stream_state
    active?: BoolFieldUpdateOperationsInput | boolean
    interval?: Enuminterval_typeFieldUpdateOperationsInput | $Enums.interval_type
  }

  export type transactionCreateInput = {
    tx_id: string
    amount: Decimal | DecimalJsLike | number | string
    asset: $Enums.token
    network: $Enums.network_type
    created_at?: Date | string
    recipient: string
    org: organizationCreateNestedOneWithoutTransactionsInput
    user: userCreateNestedOneWithoutTxnsInput
    schedule?: scheduleCreateNestedOneWithoutTxnsInput
    stream?: streamCreateNestedOneWithoutTxnsInput
  }

  export type transactionUncheckedCreateInput = {
    tx_id: string
    amount: Decimal | DecimalJsLike | number | string
    asset: $Enums.token
    network: $Enums.network_type
    created_at?: Date | string
    recipient: string
    org_id: string
    username: string
    schedule_id?: string | null
    stream_id?: string | null
  }

  export type transactionUpdateInput = {
    tx_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recipient?: StringFieldUpdateOperationsInput | string
    org?: organizationUpdateOneRequiredWithoutTransactionsNestedInput
    user?: userUpdateOneRequiredWithoutTxnsNestedInput
    schedule?: scheduleUpdateOneWithoutTxnsNestedInput
    stream?: streamUpdateOneWithoutTxnsNestedInput
  }

  export type transactionUncheckedUpdateInput = {
    tx_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recipient?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    schedule_id?: NullableStringFieldUpdateOperationsInput | string | null
    stream_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transactionCreateManyInput = {
    tx_id: string
    amount: Decimal | DecimalJsLike | number | string
    asset: $Enums.token
    network: $Enums.network_type
    created_at?: Date | string
    recipient: string
    org_id: string
    username: string
    schedule_id?: string | null
    stream_id?: string | null
  }

  export type transactionUpdateManyMutationInput = {
    tx_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recipient?: StringFieldUpdateOperationsInput | string
  }

  export type transactionUncheckedUpdateManyInput = {
    tx_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recipient?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    schedule_id?: NullableStringFieldUpdateOperationsInput | string | null
    stream_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userCreateInput = {
    username?: string | null
    image?: string | null
    name?: string | null
    total_payout?: Decimal | DecimalJsLike | number | string
    uid: string
    email?: string | null
    streams?: streamCreateNestedManyWithoutUserInput
    schedules?: scheduleCreateNestedManyWithoutUserInput
    wallets?: walletCreateNestedManyWithoutUserInput
    txns?: transactionCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    username?: string | null
    image?: string | null
    name?: string | null
    total_payout?: Decimal | DecimalJsLike | number | string
    uid: string
    email?: string | null
    streams?: streamUncheckedCreateNestedManyWithoutUserInput
    schedules?: scheduleUncheckedCreateNestedManyWithoutUserInput
    wallets?: walletUncheckedCreateNestedManyWithoutUserInput
    txns?: transactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    total_payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    uid?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    streams?: streamUpdateManyWithoutUserNestedInput
    schedules?: scheduleUpdateManyWithoutUserNestedInput
    wallets?: walletUpdateManyWithoutUserNestedInput
    txns?: transactionUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    total_payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    uid?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    streams?: streamUncheckedUpdateManyWithoutUserNestedInput
    schedules?: scheduleUncheckedUpdateManyWithoutUserNestedInput
    wallets?: walletUncheckedUpdateManyWithoutUserNestedInput
    txns?: transactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    username?: string | null
    image?: string | null
    name?: string | null
    total_payout?: Decimal | DecimalJsLike | number | string
    uid: string
    email?: string | null
  }

  export type userUpdateManyMutationInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    total_payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    uid?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUncheckedUpdateManyInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    total_payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    uid?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type waitlistCreateInput = {
    email: string
    name?: string | null
    company?: string | null
  }

  export type waitlistUncheckedCreateInput = {
    email: string
    name?: string | null
    company?: string | null
  }

  export type waitlistUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type waitlistUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type waitlistCreateManyInput = {
    email: string
    name?: string | null
    company?: string | null
  }

  export type waitlistUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type waitlistUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type walletCreateInput = {
    network: $Enums.network_type
    address: string
    user: userCreateNestedOneWithoutWalletsInput
  }

  export type walletUncheckedCreateInput = {
    username: string
    network: $Enums.network_type
    address: string
    id?: number
  }

  export type walletUpdateInput = {
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    address?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutWalletsNestedInput
  }

  export type walletUncheckedUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    address?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
  }

  export type walletCreateManyInput = {
    username: string
    network: $Enums.network_type
    address: string
    id?: number
  }

  export type walletUpdateManyMutationInput = {
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    address?: StringFieldUpdateOperationsInput | string
  }

  export type walletUncheckedUpdateManyInput = {
    username?: StringFieldUpdateOperationsInput | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    address?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Enumnetwork_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.network_type | Enumnetwork_typeFieldRefInput<$PrismaModel>
    in?: $Enums.network_type[] | ListEnumnetwork_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.network_type[] | ListEnumnetwork_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumnetwork_typeFilter<$PrismaModel> | $Enums.network_type
  }

  export type StreamListRelationFilter = {
    every?: streamWhereInput
    some?: streamWhereInput
    none?: streamWhereInput
  }

  export type ScheduleListRelationFilter = {
    every?: scheduleWhereInput
    some?: scheduleWhereInput
    none?: scheduleWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: transactionWhereInput
    some?: transactionWhereInput
    none?: transactionWhereInput
  }

  export type streamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type scheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type transactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type organizationCountOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    wallet?: SortOrder
    plugin?: SortOrder
    admin?: SortOrder
    logo?: SortOrder
    name?: SortOrder
    info?: SortOrder
    network?: SortOrder
  }

  export type organizationMaxOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    wallet?: SortOrder
    plugin?: SortOrder
    admin?: SortOrder
    logo?: SortOrder
    name?: SortOrder
    info?: SortOrder
    network?: SortOrder
  }

  export type organizationMinOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    wallet?: SortOrder
    plugin?: SortOrder
    admin?: SortOrder
    logo?: SortOrder
    name?: SortOrder
    info?: SortOrder
    network?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Enumnetwork_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.network_type | Enumnetwork_typeFieldRefInput<$PrismaModel>
    in?: $Enums.network_type[] | ListEnumnetwork_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.network_type[] | ListEnumnetwork_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumnetwork_typeWithAggregatesFilter<$PrismaModel> | $Enums.network_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumnetwork_typeFilter<$PrismaModel>
    _max?: NestedEnumnetwork_typeFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumtokenFilter<$PrismaModel = never> = {
    equals?: $Enums.token | EnumtokenFieldRefInput<$PrismaModel>
    in?: $Enums.token[] | ListEnumtokenFieldRefInput<$PrismaModel>
    notIn?: $Enums.token[] | ListEnumtokenFieldRefInput<$PrismaModel>
    not?: NestedEnumtokenFilter<$PrismaModel> | $Enums.token
  }

  export type Enuminterval_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.interval_type | Enuminterval_typeFieldRefInput<$PrismaModel>
    in?: $Enums.interval_type[] | ListEnuminterval_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.interval_type[] | ListEnuminterval_typeFieldRefInput<$PrismaModel>
    not?: NestedEnuminterval_typeFilter<$PrismaModel> | $Enums.interval_type
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type OrganizationScalarRelationFilter = {
    is?: organizationWhereInput
    isNot?: organizationWhereInput
  }

  export type scheduleCountOrderByAggregateInput = {
    username?: SortOrder
    amount?: SortOrder
    isOneTime?: SortOrder
    org_id?: SortOrder
    nextPayout?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    network?: SortOrder
    asset?: SortOrder
    id?: SortOrder
    role?: SortOrder
    title?: SortOrder
    active?: SortOrder
    interval?: SortOrder
    payout?: SortOrder
  }

  export type scheduleAvgOrderByAggregateInput = {
    amount?: SortOrder
    nextPayout?: SortOrder
    payout?: SortOrder
  }

  export type scheduleMaxOrderByAggregateInput = {
    username?: SortOrder
    amount?: SortOrder
    isOneTime?: SortOrder
    org_id?: SortOrder
    nextPayout?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    network?: SortOrder
    asset?: SortOrder
    id?: SortOrder
    role?: SortOrder
    title?: SortOrder
    active?: SortOrder
    interval?: SortOrder
    payout?: SortOrder
  }

  export type scheduleMinOrderByAggregateInput = {
    username?: SortOrder
    amount?: SortOrder
    isOneTime?: SortOrder
    org_id?: SortOrder
    nextPayout?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    network?: SortOrder
    asset?: SortOrder
    id?: SortOrder
    role?: SortOrder
    title?: SortOrder
    active?: SortOrder
    interval?: SortOrder
    payout?: SortOrder
  }

  export type scheduleSumOrderByAggregateInput = {
    amount?: SortOrder
    nextPayout?: SortOrder
    payout?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumtokenWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.token | EnumtokenFieldRefInput<$PrismaModel>
    in?: $Enums.token[] | ListEnumtokenFieldRefInput<$PrismaModel>
    notIn?: $Enums.token[] | ListEnumtokenFieldRefInput<$PrismaModel>
    not?: NestedEnumtokenWithAggregatesFilter<$PrismaModel> | $Enums.token
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtokenFilter<$PrismaModel>
    _max?: NestedEnumtokenFilter<$PrismaModel>
  }

  export type Enuminterval_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.interval_type | Enuminterval_typeFieldRefInput<$PrismaModel>
    in?: $Enums.interval_type[] | ListEnuminterval_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.interval_type[] | ListEnuminterval_typeFieldRefInput<$PrismaModel>
    not?: NestedEnuminterval_typeWithAggregatesFilter<$PrismaModel> | $Enums.interval_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnuminterval_typeFilter<$PrismaModel>
    _max?: NestedEnuminterval_typeFilter<$PrismaModel>
  }

  export type Enumstream_stateFilter<$PrismaModel = never> = {
    equals?: $Enums.stream_state | Enumstream_stateFieldRefInput<$PrismaModel>
    in?: $Enums.stream_state[] | ListEnumstream_stateFieldRefInput<$PrismaModel>
    notIn?: $Enums.stream_state[] | ListEnumstream_stateFieldRefInput<$PrismaModel>
    not?: NestedEnumstream_stateFilter<$PrismaModel> | $Enums.stream_state
  }

  export type streamCountOrderByAggregateInput = {
    username?: SortOrder
    amount?: SortOrder
    org_id?: SortOrder
    lastPayout?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    network?: SortOrder
    asset?: SortOrder
    id?: SortOrder
    payout?: SortOrder
    role?: SortOrder
    title?: SortOrder
    state?: SortOrder
    active?: SortOrder
    interval?: SortOrder
  }

  export type streamAvgOrderByAggregateInput = {
    amount?: SortOrder
    lastPayout?: SortOrder
    payout?: SortOrder
  }

  export type streamMaxOrderByAggregateInput = {
    username?: SortOrder
    amount?: SortOrder
    org_id?: SortOrder
    lastPayout?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    network?: SortOrder
    asset?: SortOrder
    id?: SortOrder
    payout?: SortOrder
    role?: SortOrder
    title?: SortOrder
    state?: SortOrder
    active?: SortOrder
    interval?: SortOrder
  }

  export type streamMinOrderByAggregateInput = {
    username?: SortOrder
    amount?: SortOrder
    org_id?: SortOrder
    lastPayout?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    network?: SortOrder
    asset?: SortOrder
    id?: SortOrder
    payout?: SortOrder
    role?: SortOrder
    title?: SortOrder
    state?: SortOrder
    active?: SortOrder
    interval?: SortOrder
  }

  export type streamSumOrderByAggregateInput = {
    amount?: SortOrder
    lastPayout?: SortOrder
    payout?: SortOrder
  }

  export type Enumstream_stateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.stream_state | Enumstream_stateFieldRefInput<$PrismaModel>
    in?: $Enums.stream_state[] | ListEnumstream_stateFieldRefInput<$PrismaModel>
    notIn?: $Enums.stream_state[] | ListEnumstream_stateFieldRefInput<$PrismaModel>
    not?: NestedEnumstream_stateWithAggregatesFilter<$PrismaModel> | $Enums.stream_state
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstream_stateFilter<$PrismaModel>
    _max?: NestedEnumstream_stateFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ScheduleNullableScalarRelationFilter = {
    is?: scheduleWhereInput | null
    isNot?: scheduleWhereInput | null
  }

  export type StreamNullableScalarRelationFilter = {
    is?: streamWhereInput | null
    isNot?: streamWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type transactionCountOrderByAggregateInput = {
    tx_id?: SortOrder
    amount?: SortOrder
    asset?: SortOrder
    network?: SortOrder
    created_at?: SortOrder
    recipient?: SortOrder
    org_id?: SortOrder
    username?: SortOrder
    schedule_id?: SortOrder
    stream_id?: SortOrder
  }

  export type transactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type transactionMaxOrderByAggregateInput = {
    tx_id?: SortOrder
    amount?: SortOrder
    asset?: SortOrder
    network?: SortOrder
    created_at?: SortOrder
    recipient?: SortOrder
    org_id?: SortOrder
    username?: SortOrder
    schedule_id?: SortOrder
    stream_id?: SortOrder
  }

  export type transactionMinOrderByAggregateInput = {
    tx_id?: SortOrder
    amount?: SortOrder
    asset?: SortOrder
    network?: SortOrder
    created_at?: SortOrder
    recipient?: SortOrder
    org_id?: SortOrder
    username?: SortOrder
    schedule_id?: SortOrder
    stream_id?: SortOrder
  }

  export type transactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type WalletListRelationFilter = {
    every?: walletWhereInput
    some?: walletWhereInput
    none?: walletWhereInput
  }

  export type walletOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    username?: SortOrder
    image?: SortOrder
    name?: SortOrder
    total_payout?: SortOrder
    uid?: SortOrder
    email?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    total_payout?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    username?: SortOrder
    image?: SortOrder
    name?: SortOrder
    total_payout?: SortOrder
    uid?: SortOrder
    email?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    username?: SortOrder
    image?: SortOrder
    name?: SortOrder
    total_payout?: SortOrder
    uid?: SortOrder
    email?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    total_payout?: SortOrder
  }

  export type waitlistCountOrderByAggregateInput = {
    email?: SortOrder
    name?: SortOrder
    company?: SortOrder
  }

  export type waitlistMaxOrderByAggregateInput = {
    email?: SortOrder
    name?: SortOrder
    company?: SortOrder
  }

  export type waitlistMinOrderByAggregateInput = {
    email?: SortOrder
    name?: SortOrder
    company?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type walletUsernameNetworkCompoundUniqueInput = {
    username: string
    network: $Enums.network_type
  }

  export type walletCountOrderByAggregateInput = {
    username?: SortOrder
    network?: SortOrder
    address?: SortOrder
    id?: SortOrder
  }

  export type walletAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type walletMaxOrderByAggregateInput = {
    username?: SortOrder
    network?: SortOrder
    address?: SortOrder
    id?: SortOrder
  }

  export type walletMinOrderByAggregateInput = {
    username?: SortOrder
    network?: SortOrder
    address?: SortOrder
    id?: SortOrder
  }

  export type walletSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type streamCreateNestedManyWithoutOrgInput = {
    create?: XOR<streamCreateWithoutOrgInput, streamUncheckedCreateWithoutOrgInput> | streamCreateWithoutOrgInput[] | streamUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: streamCreateOrConnectWithoutOrgInput | streamCreateOrConnectWithoutOrgInput[]
    createMany?: streamCreateManyOrgInputEnvelope
    connect?: streamWhereUniqueInput | streamWhereUniqueInput[]
  }

  export type scheduleCreateNestedManyWithoutOrgInput = {
    create?: XOR<scheduleCreateWithoutOrgInput, scheduleUncheckedCreateWithoutOrgInput> | scheduleCreateWithoutOrgInput[] | scheduleUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: scheduleCreateOrConnectWithoutOrgInput | scheduleCreateOrConnectWithoutOrgInput[]
    createMany?: scheduleCreateManyOrgInputEnvelope
    connect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
  }

  export type transactionCreateNestedManyWithoutOrgInput = {
    create?: XOR<transactionCreateWithoutOrgInput, transactionUncheckedCreateWithoutOrgInput> | transactionCreateWithoutOrgInput[] | transactionUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutOrgInput | transactionCreateOrConnectWithoutOrgInput[]
    createMany?: transactionCreateManyOrgInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type streamUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<streamCreateWithoutOrgInput, streamUncheckedCreateWithoutOrgInput> | streamCreateWithoutOrgInput[] | streamUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: streamCreateOrConnectWithoutOrgInput | streamCreateOrConnectWithoutOrgInput[]
    createMany?: streamCreateManyOrgInputEnvelope
    connect?: streamWhereUniqueInput | streamWhereUniqueInput[]
  }

  export type scheduleUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<scheduleCreateWithoutOrgInput, scheduleUncheckedCreateWithoutOrgInput> | scheduleCreateWithoutOrgInput[] | scheduleUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: scheduleCreateOrConnectWithoutOrgInput | scheduleCreateOrConnectWithoutOrgInput[]
    createMany?: scheduleCreateManyOrgInputEnvelope
    connect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
  }

  export type transactionUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<transactionCreateWithoutOrgInput, transactionUncheckedCreateWithoutOrgInput> | transactionCreateWithoutOrgInput[] | transactionUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutOrgInput | transactionCreateOrConnectWithoutOrgInput[]
    createMany?: transactionCreateManyOrgInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Enumnetwork_typeFieldUpdateOperationsInput = {
    set?: $Enums.network_type
  }

  export type streamUpdateManyWithoutOrgNestedInput = {
    create?: XOR<streamCreateWithoutOrgInput, streamUncheckedCreateWithoutOrgInput> | streamCreateWithoutOrgInput[] | streamUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: streamCreateOrConnectWithoutOrgInput | streamCreateOrConnectWithoutOrgInput[]
    upsert?: streamUpsertWithWhereUniqueWithoutOrgInput | streamUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: streamCreateManyOrgInputEnvelope
    set?: streamWhereUniqueInput | streamWhereUniqueInput[]
    disconnect?: streamWhereUniqueInput | streamWhereUniqueInput[]
    delete?: streamWhereUniqueInput | streamWhereUniqueInput[]
    connect?: streamWhereUniqueInput | streamWhereUniqueInput[]
    update?: streamUpdateWithWhereUniqueWithoutOrgInput | streamUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: streamUpdateManyWithWhereWithoutOrgInput | streamUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: streamScalarWhereInput | streamScalarWhereInput[]
  }

  export type scheduleUpdateManyWithoutOrgNestedInput = {
    create?: XOR<scheduleCreateWithoutOrgInput, scheduleUncheckedCreateWithoutOrgInput> | scheduleCreateWithoutOrgInput[] | scheduleUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: scheduleCreateOrConnectWithoutOrgInput | scheduleCreateOrConnectWithoutOrgInput[]
    upsert?: scheduleUpsertWithWhereUniqueWithoutOrgInput | scheduleUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: scheduleCreateManyOrgInputEnvelope
    set?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
    disconnect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
    delete?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
    connect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
    update?: scheduleUpdateWithWhereUniqueWithoutOrgInput | scheduleUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: scheduleUpdateManyWithWhereWithoutOrgInput | scheduleUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: scheduleScalarWhereInput | scheduleScalarWhereInput[]
  }

  export type transactionUpdateManyWithoutOrgNestedInput = {
    create?: XOR<transactionCreateWithoutOrgInput, transactionUncheckedCreateWithoutOrgInput> | transactionCreateWithoutOrgInput[] | transactionUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutOrgInput | transactionCreateOrConnectWithoutOrgInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutOrgInput | transactionUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: transactionCreateManyOrgInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutOrgInput | transactionUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutOrgInput | transactionUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type streamUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<streamCreateWithoutOrgInput, streamUncheckedCreateWithoutOrgInput> | streamCreateWithoutOrgInput[] | streamUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: streamCreateOrConnectWithoutOrgInput | streamCreateOrConnectWithoutOrgInput[]
    upsert?: streamUpsertWithWhereUniqueWithoutOrgInput | streamUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: streamCreateManyOrgInputEnvelope
    set?: streamWhereUniqueInput | streamWhereUniqueInput[]
    disconnect?: streamWhereUniqueInput | streamWhereUniqueInput[]
    delete?: streamWhereUniqueInput | streamWhereUniqueInput[]
    connect?: streamWhereUniqueInput | streamWhereUniqueInput[]
    update?: streamUpdateWithWhereUniqueWithoutOrgInput | streamUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: streamUpdateManyWithWhereWithoutOrgInput | streamUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: streamScalarWhereInput | streamScalarWhereInput[]
  }

  export type scheduleUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<scheduleCreateWithoutOrgInput, scheduleUncheckedCreateWithoutOrgInput> | scheduleCreateWithoutOrgInput[] | scheduleUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: scheduleCreateOrConnectWithoutOrgInput | scheduleCreateOrConnectWithoutOrgInput[]
    upsert?: scheduleUpsertWithWhereUniqueWithoutOrgInput | scheduleUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: scheduleCreateManyOrgInputEnvelope
    set?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
    disconnect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
    delete?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
    connect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
    update?: scheduleUpdateWithWhereUniqueWithoutOrgInput | scheduleUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: scheduleUpdateManyWithWhereWithoutOrgInput | scheduleUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: scheduleScalarWhereInput | scheduleScalarWhereInput[]
  }

  export type transactionUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<transactionCreateWithoutOrgInput, transactionUncheckedCreateWithoutOrgInput> | transactionCreateWithoutOrgInput[] | transactionUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutOrgInput | transactionCreateOrConnectWithoutOrgInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutOrgInput | transactionUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: transactionCreateManyOrgInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutOrgInput | transactionUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutOrgInput | transactionUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<userCreateWithoutSchedulesInput, userUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: userCreateOrConnectWithoutSchedulesInput
    connect?: userWhereUniqueInput
  }

  export type organizationCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<organizationCreateWithoutSchedulesInput, organizationUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: organizationCreateOrConnectWithoutSchedulesInput
    connect?: organizationWhereUniqueInput
  }

  export type transactionCreateNestedManyWithoutScheduleInput = {
    create?: XOR<transactionCreateWithoutScheduleInput, transactionUncheckedCreateWithoutScheduleInput> | transactionCreateWithoutScheduleInput[] | transactionUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutScheduleInput | transactionCreateOrConnectWithoutScheduleInput[]
    createMany?: transactionCreateManyScheduleInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type transactionUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: XOR<transactionCreateWithoutScheduleInput, transactionUncheckedCreateWithoutScheduleInput> | transactionCreateWithoutScheduleInput[] | transactionUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutScheduleInput | transactionCreateOrConnectWithoutScheduleInput[]
    createMany?: transactionCreateManyScheduleInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumtokenFieldUpdateOperationsInput = {
    set?: $Enums.token
  }

  export type Enuminterval_typeFieldUpdateOperationsInput = {
    set?: $Enums.interval_type
  }

  export type userUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<userCreateWithoutSchedulesInput, userUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: userCreateOrConnectWithoutSchedulesInput
    upsert?: userUpsertWithoutSchedulesInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutSchedulesInput, userUpdateWithoutSchedulesInput>, userUncheckedUpdateWithoutSchedulesInput>
  }

  export type organizationUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<organizationCreateWithoutSchedulesInput, organizationUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: organizationCreateOrConnectWithoutSchedulesInput
    upsert?: organizationUpsertWithoutSchedulesInput
    connect?: organizationWhereUniqueInput
    update?: XOR<XOR<organizationUpdateToOneWithWhereWithoutSchedulesInput, organizationUpdateWithoutSchedulesInput>, organizationUncheckedUpdateWithoutSchedulesInput>
  }

  export type transactionUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<transactionCreateWithoutScheduleInput, transactionUncheckedCreateWithoutScheduleInput> | transactionCreateWithoutScheduleInput[] | transactionUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutScheduleInput | transactionCreateOrConnectWithoutScheduleInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutScheduleInput | transactionUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: transactionCreateManyScheduleInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutScheduleInput | transactionUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutScheduleInput | transactionUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type transactionUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<transactionCreateWithoutScheduleInput, transactionUncheckedCreateWithoutScheduleInput> | transactionCreateWithoutScheduleInput[] | transactionUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutScheduleInput | transactionCreateOrConnectWithoutScheduleInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutScheduleInput | transactionUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: transactionCreateManyScheduleInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutScheduleInput | transactionUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutScheduleInput | transactionUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutStreamsInput = {
    create?: XOR<userCreateWithoutStreamsInput, userUncheckedCreateWithoutStreamsInput>
    connectOrCreate?: userCreateOrConnectWithoutStreamsInput
    connect?: userWhereUniqueInput
  }

  export type organizationCreateNestedOneWithoutStreamsInput = {
    create?: XOR<organizationCreateWithoutStreamsInput, organizationUncheckedCreateWithoutStreamsInput>
    connectOrCreate?: organizationCreateOrConnectWithoutStreamsInput
    connect?: organizationWhereUniqueInput
  }

  export type transactionCreateNestedManyWithoutStreamInput = {
    create?: XOR<transactionCreateWithoutStreamInput, transactionUncheckedCreateWithoutStreamInput> | transactionCreateWithoutStreamInput[] | transactionUncheckedCreateWithoutStreamInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutStreamInput | transactionCreateOrConnectWithoutStreamInput[]
    createMany?: transactionCreateManyStreamInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type transactionUncheckedCreateNestedManyWithoutStreamInput = {
    create?: XOR<transactionCreateWithoutStreamInput, transactionUncheckedCreateWithoutStreamInput> | transactionCreateWithoutStreamInput[] | transactionUncheckedCreateWithoutStreamInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutStreamInput | transactionCreateOrConnectWithoutStreamInput[]
    createMany?: transactionCreateManyStreamInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type Enumstream_stateFieldUpdateOperationsInput = {
    set?: $Enums.stream_state
  }

  export type userUpdateOneRequiredWithoutStreamsNestedInput = {
    create?: XOR<userCreateWithoutStreamsInput, userUncheckedCreateWithoutStreamsInput>
    connectOrCreate?: userCreateOrConnectWithoutStreamsInput
    upsert?: userUpsertWithoutStreamsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutStreamsInput, userUpdateWithoutStreamsInput>, userUncheckedUpdateWithoutStreamsInput>
  }

  export type organizationUpdateOneRequiredWithoutStreamsNestedInput = {
    create?: XOR<organizationCreateWithoutStreamsInput, organizationUncheckedCreateWithoutStreamsInput>
    connectOrCreate?: organizationCreateOrConnectWithoutStreamsInput
    upsert?: organizationUpsertWithoutStreamsInput
    connect?: organizationWhereUniqueInput
    update?: XOR<XOR<organizationUpdateToOneWithWhereWithoutStreamsInput, organizationUpdateWithoutStreamsInput>, organizationUncheckedUpdateWithoutStreamsInput>
  }

  export type transactionUpdateManyWithoutStreamNestedInput = {
    create?: XOR<transactionCreateWithoutStreamInput, transactionUncheckedCreateWithoutStreamInput> | transactionCreateWithoutStreamInput[] | transactionUncheckedCreateWithoutStreamInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutStreamInput | transactionCreateOrConnectWithoutStreamInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutStreamInput | transactionUpsertWithWhereUniqueWithoutStreamInput[]
    createMany?: transactionCreateManyStreamInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutStreamInput | transactionUpdateWithWhereUniqueWithoutStreamInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutStreamInput | transactionUpdateManyWithWhereWithoutStreamInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type transactionUncheckedUpdateManyWithoutStreamNestedInput = {
    create?: XOR<transactionCreateWithoutStreamInput, transactionUncheckedCreateWithoutStreamInput> | transactionCreateWithoutStreamInput[] | transactionUncheckedCreateWithoutStreamInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutStreamInput | transactionCreateOrConnectWithoutStreamInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutStreamInput | transactionUpsertWithWhereUniqueWithoutStreamInput[]
    createMany?: transactionCreateManyStreamInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutStreamInput | transactionUpdateWithWhereUniqueWithoutStreamInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutStreamInput | transactionUpdateManyWithWhereWithoutStreamInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type organizationCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<organizationCreateWithoutTransactionsInput, organizationUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: organizationCreateOrConnectWithoutTransactionsInput
    connect?: organizationWhereUniqueInput
  }

  export type userCreateNestedOneWithoutTxnsInput = {
    create?: XOR<userCreateWithoutTxnsInput, userUncheckedCreateWithoutTxnsInput>
    connectOrCreate?: userCreateOrConnectWithoutTxnsInput
    connect?: userWhereUniqueInput
  }

  export type scheduleCreateNestedOneWithoutTxnsInput = {
    create?: XOR<scheduleCreateWithoutTxnsInput, scheduleUncheckedCreateWithoutTxnsInput>
    connectOrCreate?: scheduleCreateOrConnectWithoutTxnsInput
    connect?: scheduleWhereUniqueInput
  }

  export type streamCreateNestedOneWithoutTxnsInput = {
    create?: XOR<streamCreateWithoutTxnsInput, streamUncheckedCreateWithoutTxnsInput>
    connectOrCreate?: streamCreateOrConnectWithoutTxnsInput
    connect?: streamWhereUniqueInput
  }

  export type organizationUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<organizationCreateWithoutTransactionsInput, organizationUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: organizationCreateOrConnectWithoutTransactionsInput
    upsert?: organizationUpsertWithoutTransactionsInput
    connect?: organizationWhereUniqueInput
    update?: XOR<XOR<organizationUpdateToOneWithWhereWithoutTransactionsInput, organizationUpdateWithoutTransactionsInput>, organizationUncheckedUpdateWithoutTransactionsInput>
  }

  export type userUpdateOneRequiredWithoutTxnsNestedInput = {
    create?: XOR<userCreateWithoutTxnsInput, userUncheckedCreateWithoutTxnsInput>
    connectOrCreate?: userCreateOrConnectWithoutTxnsInput
    upsert?: userUpsertWithoutTxnsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutTxnsInput, userUpdateWithoutTxnsInput>, userUncheckedUpdateWithoutTxnsInput>
  }

  export type scheduleUpdateOneWithoutTxnsNestedInput = {
    create?: XOR<scheduleCreateWithoutTxnsInput, scheduleUncheckedCreateWithoutTxnsInput>
    connectOrCreate?: scheduleCreateOrConnectWithoutTxnsInput
    upsert?: scheduleUpsertWithoutTxnsInput
    disconnect?: scheduleWhereInput | boolean
    delete?: scheduleWhereInput | boolean
    connect?: scheduleWhereUniqueInput
    update?: XOR<XOR<scheduleUpdateToOneWithWhereWithoutTxnsInput, scheduleUpdateWithoutTxnsInput>, scheduleUncheckedUpdateWithoutTxnsInput>
  }

  export type streamUpdateOneWithoutTxnsNestedInput = {
    create?: XOR<streamCreateWithoutTxnsInput, streamUncheckedCreateWithoutTxnsInput>
    connectOrCreate?: streamCreateOrConnectWithoutTxnsInput
    upsert?: streamUpsertWithoutTxnsInput
    disconnect?: streamWhereInput | boolean
    delete?: streamWhereInput | boolean
    connect?: streamWhereUniqueInput
    update?: XOR<XOR<streamUpdateToOneWithWhereWithoutTxnsInput, streamUpdateWithoutTxnsInput>, streamUncheckedUpdateWithoutTxnsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type streamCreateNestedManyWithoutUserInput = {
    create?: XOR<streamCreateWithoutUserInput, streamUncheckedCreateWithoutUserInput> | streamCreateWithoutUserInput[] | streamUncheckedCreateWithoutUserInput[]
    connectOrCreate?: streamCreateOrConnectWithoutUserInput | streamCreateOrConnectWithoutUserInput[]
    createMany?: streamCreateManyUserInputEnvelope
    connect?: streamWhereUniqueInput | streamWhereUniqueInput[]
  }

  export type scheduleCreateNestedManyWithoutUserInput = {
    create?: XOR<scheduleCreateWithoutUserInput, scheduleUncheckedCreateWithoutUserInput> | scheduleCreateWithoutUserInput[] | scheduleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: scheduleCreateOrConnectWithoutUserInput | scheduleCreateOrConnectWithoutUserInput[]
    createMany?: scheduleCreateManyUserInputEnvelope
    connect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
  }

  export type walletCreateNestedManyWithoutUserInput = {
    create?: XOR<walletCreateWithoutUserInput, walletUncheckedCreateWithoutUserInput> | walletCreateWithoutUserInput[] | walletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: walletCreateOrConnectWithoutUserInput | walletCreateOrConnectWithoutUserInput[]
    createMany?: walletCreateManyUserInputEnvelope
    connect?: walletWhereUniqueInput | walletWhereUniqueInput[]
  }

  export type transactionCreateNestedManyWithoutUserInput = {
    create?: XOR<transactionCreateWithoutUserInput, transactionUncheckedCreateWithoutUserInput> | transactionCreateWithoutUserInput[] | transactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutUserInput | transactionCreateOrConnectWithoutUserInput[]
    createMany?: transactionCreateManyUserInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type streamUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<streamCreateWithoutUserInput, streamUncheckedCreateWithoutUserInput> | streamCreateWithoutUserInput[] | streamUncheckedCreateWithoutUserInput[]
    connectOrCreate?: streamCreateOrConnectWithoutUserInput | streamCreateOrConnectWithoutUserInput[]
    createMany?: streamCreateManyUserInputEnvelope
    connect?: streamWhereUniqueInput | streamWhereUniqueInput[]
  }

  export type scheduleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<scheduleCreateWithoutUserInput, scheduleUncheckedCreateWithoutUserInput> | scheduleCreateWithoutUserInput[] | scheduleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: scheduleCreateOrConnectWithoutUserInput | scheduleCreateOrConnectWithoutUserInput[]
    createMany?: scheduleCreateManyUserInputEnvelope
    connect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
  }

  export type walletUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<walletCreateWithoutUserInput, walletUncheckedCreateWithoutUserInput> | walletCreateWithoutUserInput[] | walletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: walletCreateOrConnectWithoutUserInput | walletCreateOrConnectWithoutUserInput[]
    createMany?: walletCreateManyUserInputEnvelope
    connect?: walletWhereUniqueInput | walletWhereUniqueInput[]
  }

  export type transactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<transactionCreateWithoutUserInput, transactionUncheckedCreateWithoutUserInput> | transactionCreateWithoutUserInput[] | transactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutUserInput | transactionCreateOrConnectWithoutUserInput[]
    createMany?: transactionCreateManyUserInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type streamUpdateManyWithoutUserNestedInput = {
    create?: XOR<streamCreateWithoutUserInput, streamUncheckedCreateWithoutUserInput> | streamCreateWithoutUserInput[] | streamUncheckedCreateWithoutUserInput[]
    connectOrCreate?: streamCreateOrConnectWithoutUserInput | streamCreateOrConnectWithoutUserInput[]
    upsert?: streamUpsertWithWhereUniqueWithoutUserInput | streamUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: streamCreateManyUserInputEnvelope
    set?: streamWhereUniqueInput | streamWhereUniqueInput[]
    disconnect?: streamWhereUniqueInput | streamWhereUniqueInput[]
    delete?: streamWhereUniqueInput | streamWhereUniqueInput[]
    connect?: streamWhereUniqueInput | streamWhereUniqueInput[]
    update?: streamUpdateWithWhereUniqueWithoutUserInput | streamUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: streamUpdateManyWithWhereWithoutUserInput | streamUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: streamScalarWhereInput | streamScalarWhereInput[]
  }

  export type scheduleUpdateManyWithoutUserNestedInput = {
    create?: XOR<scheduleCreateWithoutUserInput, scheduleUncheckedCreateWithoutUserInput> | scheduleCreateWithoutUserInput[] | scheduleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: scheduleCreateOrConnectWithoutUserInput | scheduleCreateOrConnectWithoutUserInput[]
    upsert?: scheduleUpsertWithWhereUniqueWithoutUserInput | scheduleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: scheduleCreateManyUserInputEnvelope
    set?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
    disconnect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
    delete?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
    connect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
    update?: scheduleUpdateWithWhereUniqueWithoutUserInput | scheduleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: scheduleUpdateManyWithWhereWithoutUserInput | scheduleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: scheduleScalarWhereInput | scheduleScalarWhereInput[]
  }

  export type walletUpdateManyWithoutUserNestedInput = {
    create?: XOR<walletCreateWithoutUserInput, walletUncheckedCreateWithoutUserInput> | walletCreateWithoutUserInput[] | walletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: walletCreateOrConnectWithoutUserInput | walletCreateOrConnectWithoutUserInput[]
    upsert?: walletUpsertWithWhereUniqueWithoutUserInput | walletUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: walletCreateManyUserInputEnvelope
    set?: walletWhereUniqueInput | walletWhereUniqueInput[]
    disconnect?: walletWhereUniqueInput | walletWhereUniqueInput[]
    delete?: walletWhereUniqueInput | walletWhereUniqueInput[]
    connect?: walletWhereUniqueInput | walletWhereUniqueInput[]
    update?: walletUpdateWithWhereUniqueWithoutUserInput | walletUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: walletUpdateManyWithWhereWithoutUserInput | walletUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: walletScalarWhereInput | walletScalarWhereInput[]
  }

  export type transactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<transactionCreateWithoutUserInput, transactionUncheckedCreateWithoutUserInput> | transactionCreateWithoutUserInput[] | transactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutUserInput | transactionCreateOrConnectWithoutUserInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutUserInput | transactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: transactionCreateManyUserInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutUserInput | transactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutUserInput | transactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type streamUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<streamCreateWithoutUserInput, streamUncheckedCreateWithoutUserInput> | streamCreateWithoutUserInput[] | streamUncheckedCreateWithoutUserInput[]
    connectOrCreate?: streamCreateOrConnectWithoutUserInput | streamCreateOrConnectWithoutUserInput[]
    upsert?: streamUpsertWithWhereUniqueWithoutUserInput | streamUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: streamCreateManyUserInputEnvelope
    set?: streamWhereUniqueInput | streamWhereUniqueInput[]
    disconnect?: streamWhereUniqueInput | streamWhereUniqueInput[]
    delete?: streamWhereUniqueInput | streamWhereUniqueInput[]
    connect?: streamWhereUniqueInput | streamWhereUniqueInput[]
    update?: streamUpdateWithWhereUniqueWithoutUserInput | streamUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: streamUpdateManyWithWhereWithoutUserInput | streamUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: streamScalarWhereInput | streamScalarWhereInput[]
  }

  export type scheduleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<scheduleCreateWithoutUserInput, scheduleUncheckedCreateWithoutUserInput> | scheduleCreateWithoutUserInput[] | scheduleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: scheduleCreateOrConnectWithoutUserInput | scheduleCreateOrConnectWithoutUserInput[]
    upsert?: scheduleUpsertWithWhereUniqueWithoutUserInput | scheduleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: scheduleCreateManyUserInputEnvelope
    set?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
    disconnect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
    delete?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
    connect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[]
    update?: scheduleUpdateWithWhereUniqueWithoutUserInput | scheduleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: scheduleUpdateManyWithWhereWithoutUserInput | scheduleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: scheduleScalarWhereInput | scheduleScalarWhereInput[]
  }

  export type walletUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<walletCreateWithoutUserInput, walletUncheckedCreateWithoutUserInput> | walletCreateWithoutUserInput[] | walletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: walletCreateOrConnectWithoutUserInput | walletCreateOrConnectWithoutUserInput[]
    upsert?: walletUpsertWithWhereUniqueWithoutUserInput | walletUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: walletCreateManyUserInputEnvelope
    set?: walletWhereUniqueInput | walletWhereUniqueInput[]
    disconnect?: walletWhereUniqueInput | walletWhereUniqueInput[]
    delete?: walletWhereUniqueInput | walletWhereUniqueInput[]
    connect?: walletWhereUniqueInput | walletWhereUniqueInput[]
    update?: walletUpdateWithWhereUniqueWithoutUserInput | walletUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: walletUpdateManyWithWhereWithoutUserInput | walletUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: walletScalarWhereInput | walletScalarWhereInput[]
  }

  export type transactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<transactionCreateWithoutUserInput, transactionUncheckedCreateWithoutUserInput> | transactionCreateWithoutUserInput[] | transactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutUserInput | transactionCreateOrConnectWithoutUserInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutUserInput | transactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: transactionCreateManyUserInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutUserInput | transactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutUserInput | transactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutWalletsInput = {
    create?: XOR<userCreateWithoutWalletsInput, userUncheckedCreateWithoutWalletsInput>
    connectOrCreate?: userCreateOrConnectWithoutWalletsInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutWalletsNestedInput = {
    create?: XOR<userCreateWithoutWalletsInput, userUncheckedCreateWithoutWalletsInput>
    connectOrCreate?: userCreateOrConnectWithoutWalletsInput
    upsert?: userUpsertWithoutWalletsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutWalletsInput, userUpdateWithoutWalletsInput>, userUncheckedUpdateWithoutWalletsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumnetwork_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.network_type | Enumnetwork_typeFieldRefInput<$PrismaModel>
    in?: $Enums.network_type[] | ListEnumnetwork_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.network_type[] | ListEnumnetwork_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumnetwork_typeFilter<$PrismaModel> | $Enums.network_type
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumnetwork_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.network_type | Enumnetwork_typeFieldRefInput<$PrismaModel>
    in?: $Enums.network_type[] | ListEnumnetwork_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.network_type[] | ListEnumnetwork_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumnetwork_typeWithAggregatesFilter<$PrismaModel> | $Enums.network_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumnetwork_typeFilter<$PrismaModel>
    _max?: NestedEnumnetwork_typeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumtokenFilter<$PrismaModel = never> = {
    equals?: $Enums.token | EnumtokenFieldRefInput<$PrismaModel>
    in?: $Enums.token[] | ListEnumtokenFieldRefInput<$PrismaModel>
    notIn?: $Enums.token[] | ListEnumtokenFieldRefInput<$PrismaModel>
    not?: NestedEnumtokenFilter<$PrismaModel> | $Enums.token
  }

  export type NestedEnuminterval_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.interval_type | Enuminterval_typeFieldRefInput<$PrismaModel>
    in?: $Enums.interval_type[] | ListEnuminterval_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.interval_type[] | ListEnuminterval_typeFieldRefInput<$PrismaModel>
    not?: NestedEnuminterval_typeFilter<$PrismaModel> | $Enums.interval_type
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumtokenWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.token | EnumtokenFieldRefInput<$PrismaModel>
    in?: $Enums.token[] | ListEnumtokenFieldRefInput<$PrismaModel>
    notIn?: $Enums.token[] | ListEnumtokenFieldRefInput<$PrismaModel>
    not?: NestedEnumtokenWithAggregatesFilter<$PrismaModel> | $Enums.token
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtokenFilter<$PrismaModel>
    _max?: NestedEnumtokenFilter<$PrismaModel>
  }

  export type NestedEnuminterval_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.interval_type | Enuminterval_typeFieldRefInput<$PrismaModel>
    in?: $Enums.interval_type[] | ListEnuminterval_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.interval_type[] | ListEnuminterval_typeFieldRefInput<$PrismaModel>
    not?: NestedEnuminterval_typeWithAggregatesFilter<$PrismaModel> | $Enums.interval_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnuminterval_typeFilter<$PrismaModel>
    _max?: NestedEnuminterval_typeFilter<$PrismaModel>
  }

  export type NestedEnumstream_stateFilter<$PrismaModel = never> = {
    equals?: $Enums.stream_state | Enumstream_stateFieldRefInput<$PrismaModel>
    in?: $Enums.stream_state[] | ListEnumstream_stateFieldRefInput<$PrismaModel>
    notIn?: $Enums.stream_state[] | ListEnumstream_stateFieldRefInput<$PrismaModel>
    not?: NestedEnumstream_stateFilter<$PrismaModel> | $Enums.stream_state
  }

  export type NestedEnumstream_stateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.stream_state | Enumstream_stateFieldRefInput<$PrismaModel>
    in?: $Enums.stream_state[] | ListEnumstream_stateFieldRefInput<$PrismaModel>
    notIn?: $Enums.stream_state[] | ListEnumstream_stateFieldRefInput<$PrismaModel>
    not?: NestedEnumstream_stateWithAggregatesFilter<$PrismaModel> | $Enums.stream_state
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstream_stateFilter<$PrismaModel>
    _max?: NestedEnumstream_stateFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type streamCreateWithoutOrgInput = {
    amount: Decimal | DecimalJsLike | number | string
    lastPayout?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    network: $Enums.network_type
    asset: $Enums.token
    id: string
    payout?: Decimal | DecimalJsLike | number | string
    role: string
    title: string
    state?: $Enums.stream_state
    active?: boolean
    interval: $Enums.interval_type
    user: userCreateNestedOneWithoutStreamsInput
    txns?: transactionCreateNestedManyWithoutStreamInput
  }

  export type streamUncheckedCreateWithoutOrgInput = {
    username: string
    amount: Decimal | DecimalJsLike | number | string
    lastPayout?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    network: $Enums.network_type
    asset: $Enums.token
    id: string
    payout?: Decimal | DecimalJsLike | number | string
    role: string
    title: string
    state?: $Enums.stream_state
    active?: boolean
    interval: $Enums.interval_type
    txns?: transactionUncheckedCreateNestedManyWithoutStreamInput
  }

  export type streamCreateOrConnectWithoutOrgInput = {
    where: streamWhereUniqueInput
    create: XOR<streamCreateWithoutOrgInput, streamUncheckedCreateWithoutOrgInput>
  }

  export type streamCreateManyOrgInputEnvelope = {
    data: streamCreateManyOrgInput | streamCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type scheduleCreateWithoutOrgInput = {
    amount: Decimal | DecimalJsLike | number | string
    isOneTime?: boolean
    nextPayout: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    network: $Enums.network_type
    asset: $Enums.token
    id: string
    role: string
    title: string
    active?: boolean
    interval: $Enums.interval_type
    payout?: Decimal | DecimalJsLike | number | string
    user: userCreateNestedOneWithoutSchedulesInput
    txns?: transactionCreateNestedManyWithoutScheduleInput
  }

  export type scheduleUncheckedCreateWithoutOrgInput = {
    username: string
    amount: Decimal | DecimalJsLike | number | string
    isOneTime?: boolean
    nextPayout: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    network: $Enums.network_type
    asset: $Enums.token
    id: string
    role: string
    title: string
    active?: boolean
    interval: $Enums.interval_type
    payout?: Decimal | DecimalJsLike | number | string
    txns?: transactionUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type scheduleCreateOrConnectWithoutOrgInput = {
    where: scheduleWhereUniqueInput
    create: XOR<scheduleCreateWithoutOrgInput, scheduleUncheckedCreateWithoutOrgInput>
  }

  export type scheduleCreateManyOrgInputEnvelope = {
    data: scheduleCreateManyOrgInput | scheduleCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type transactionCreateWithoutOrgInput = {
    tx_id: string
    amount: Decimal | DecimalJsLike | number | string
    asset: $Enums.token
    network: $Enums.network_type
    created_at?: Date | string
    recipient: string
    user: userCreateNestedOneWithoutTxnsInput
    schedule?: scheduleCreateNestedOneWithoutTxnsInput
    stream?: streamCreateNestedOneWithoutTxnsInput
  }

  export type transactionUncheckedCreateWithoutOrgInput = {
    tx_id: string
    amount: Decimal | DecimalJsLike | number | string
    asset: $Enums.token
    network: $Enums.network_type
    created_at?: Date | string
    recipient: string
    username: string
    schedule_id?: string | null
    stream_id?: string | null
  }

  export type transactionCreateOrConnectWithoutOrgInput = {
    where: transactionWhereUniqueInput
    create: XOR<transactionCreateWithoutOrgInput, transactionUncheckedCreateWithoutOrgInput>
  }

  export type transactionCreateManyOrgInputEnvelope = {
    data: transactionCreateManyOrgInput | transactionCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type streamUpsertWithWhereUniqueWithoutOrgInput = {
    where: streamWhereUniqueInput
    update: XOR<streamUpdateWithoutOrgInput, streamUncheckedUpdateWithoutOrgInput>
    create: XOR<streamCreateWithoutOrgInput, streamUncheckedCreateWithoutOrgInput>
  }

  export type streamUpdateWithWhereUniqueWithoutOrgInput = {
    where: streamWhereUniqueInput
    data: XOR<streamUpdateWithoutOrgInput, streamUncheckedUpdateWithoutOrgInput>
  }

  export type streamUpdateManyWithWhereWithoutOrgInput = {
    where: streamScalarWhereInput
    data: XOR<streamUpdateManyMutationInput, streamUncheckedUpdateManyWithoutOrgInput>
  }

  export type streamScalarWhereInput = {
    AND?: streamScalarWhereInput | streamScalarWhereInput[]
    OR?: streamScalarWhereInput[]
    NOT?: streamScalarWhereInput | streamScalarWhereInput[]
    username?: StringFilter<"stream"> | string
    amount?: DecimalFilter<"stream"> | Decimal | DecimalJsLike | number | string
    org_id?: StringFilter<"stream"> | string
    lastPayout?: BigIntFilter<"stream"> | bigint | number
    created_at?: DateTimeFilter<"stream"> | Date | string
    updated_at?: DateTimeFilter<"stream"> | Date | string
    network?: Enumnetwork_typeFilter<"stream"> | $Enums.network_type
    asset?: EnumtokenFilter<"stream"> | $Enums.token
    id?: StringFilter<"stream"> | string
    payout?: DecimalFilter<"stream"> | Decimal | DecimalJsLike | number | string
    role?: StringFilter<"stream"> | string
    title?: StringFilter<"stream"> | string
    state?: Enumstream_stateFilter<"stream"> | $Enums.stream_state
    active?: BoolFilter<"stream"> | boolean
    interval?: Enuminterval_typeFilter<"stream"> | $Enums.interval_type
  }

  export type scheduleUpsertWithWhereUniqueWithoutOrgInput = {
    where: scheduleWhereUniqueInput
    update: XOR<scheduleUpdateWithoutOrgInput, scheduleUncheckedUpdateWithoutOrgInput>
    create: XOR<scheduleCreateWithoutOrgInput, scheduleUncheckedCreateWithoutOrgInput>
  }

  export type scheduleUpdateWithWhereUniqueWithoutOrgInput = {
    where: scheduleWhereUniqueInput
    data: XOR<scheduleUpdateWithoutOrgInput, scheduleUncheckedUpdateWithoutOrgInput>
  }

  export type scheduleUpdateManyWithWhereWithoutOrgInput = {
    where: scheduleScalarWhereInput
    data: XOR<scheduleUpdateManyMutationInput, scheduleUncheckedUpdateManyWithoutOrgInput>
  }

  export type scheduleScalarWhereInput = {
    AND?: scheduleScalarWhereInput | scheduleScalarWhereInput[]
    OR?: scheduleScalarWhereInput[]
    NOT?: scheduleScalarWhereInput | scheduleScalarWhereInput[]
    username?: StringFilter<"schedule"> | string
    amount?: DecimalFilter<"schedule"> | Decimal | DecimalJsLike | number | string
    isOneTime?: BoolFilter<"schedule"> | boolean
    org_id?: StringFilter<"schedule"> | string
    nextPayout?: BigIntFilter<"schedule"> | bigint | number
    created_at?: DateTimeFilter<"schedule"> | Date | string
    updated_at?: DateTimeFilter<"schedule"> | Date | string
    network?: Enumnetwork_typeFilter<"schedule"> | $Enums.network_type
    asset?: EnumtokenFilter<"schedule"> | $Enums.token
    id?: StringFilter<"schedule"> | string
    role?: StringFilter<"schedule"> | string
    title?: StringFilter<"schedule"> | string
    active?: BoolFilter<"schedule"> | boolean
    interval?: Enuminterval_typeFilter<"schedule"> | $Enums.interval_type
    payout?: DecimalFilter<"schedule"> | Decimal | DecimalJsLike | number | string
  }

  export type transactionUpsertWithWhereUniqueWithoutOrgInput = {
    where: transactionWhereUniqueInput
    update: XOR<transactionUpdateWithoutOrgInput, transactionUncheckedUpdateWithoutOrgInput>
    create: XOR<transactionCreateWithoutOrgInput, transactionUncheckedCreateWithoutOrgInput>
  }

  export type transactionUpdateWithWhereUniqueWithoutOrgInput = {
    where: transactionWhereUniqueInput
    data: XOR<transactionUpdateWithoutOrgInput, transactionUncheckedUpdateWithoutOrgInput>
  }

  export type transactionUpdateManyWithWhereWithoutOrgInput = {
    where: transactionScalarWhereInput
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyWithoutOrgInput>
  }

  export type transactionScalarWhereInput = {
    AND?: transactionScalarWhereInput | transactionScalarWhereInput[]
    OR?: transactionScalarWhereInput[]
    NOT?: transactionScalarWhereInput | transactionScalarWhereInput[]
    tx_id?: StringFilter<"transaction"> | string
    amount?: DecimalFilter<"transaction"> | Decimal | DecimalJsLike | number | string
    asset?: EnumtokenFilter<"transaction"> | $Enums.token
    network?: Enumnetwork_typeFilter<"transaction"> | $Enums.network_type
    created_at?: DateTimeFilter<"transaction"> | Date | string
    recipient?: StringFilter<"transaction"> | string
    org_id?: StringFilter<"transaction"> | string
    username?: StringFilter<"transaction"> | string
    schedule_id?: StringNullableFilter<"transaction"> | string | null
    stream_id?: StringNullableFilter<"transaction"> | string | null
  }

  export type userCreateWithoutSchedulesInput = {
    username?: string | null
    image?: string | null
    name?: string | null
    total_payout?: Decimal | DecimalJsLike | number | string
    uid: string
    email?: string | null
    streams?: streamCreateNestedManyWithoutUserInput
    wallets?: walletCreateNestedManyWithoutUserInput
    txns?: transactionCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutSchedulesInput = {
    username?: string | null
    image?: string | null
    name?: string | null
    total_payout?: Decimal | DecimalJsLike | number | string
    uid: string
    email?: string | null
    streams?: streamUncheckedCreateNestedManyWithoutUserInput
    wallets?: walletUncheckedCreateNestedManyWithoutUserInput
    txns?: transactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutSchedulesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutSchedulesInput, userUncheckedCreateWithoutSchedulesInput>
  }

  export type organizationCreateWithoutSchedulesInput = {
    id: string
    owner: string
    wallet: string
    plugin: string
    admin: string
    logo: string
    name: string
    info: string
    network: $Enums.network_type
    streams?: streamCreateNestedManyWithoutOrgInput
    transactions?: transactionCreateNestedManyWithoutOrgInput
  }

  export type organizationUncheckedCreateWithoutSchedulesInput = {
    id: string
    owner: string
    wallet: string
    plugin: string
    admin: string
    logo: string
    name: string
    info: string
    network: $Enums.network_type
    streams?: streamUncheckedCreateNestedManyWithoutOrgInput
    transactions?: transactionUncheckedCreateNestedManyWithoutOrgInput
  }

  export type organizationCreateOrConnectWithoutSchedulesInput = {
    where: organizationWhereUniqueInput
    create: XOR<organizationCreateWithoutSchedulesInput, organizationUncheckedCreateWithoutSchedulesInput>
  }

  export type transactionCreateWithoutScheduleInput = {
    tx_id: string
    amount: Decimal | DecimalJsLike | number | string
    asset: $Enums.token
    network: $Enums.network_type
    created_at?: Date | string
    recipient: string
    org: organizationCreateNestedOneWithoutTransactionsInput
    user: userCreateNestedOneWithoutTxnsInput
    stream?: streamCreateNestedOneWithoutTxnsInput
  }

  export type transactionUncheckedCreateWithoutScheduleInput = {
    tx_id: string
    amount: Decimal | DecimalJsLike | number | string
    asset: $Enums.token
    network: $Enums.network_type
    created_at?: Date | string
    recipient: string
    org_id: string
    username: string
    stream_id?: string | null
  }

  export type transactionCreateOrConnectWithoutScheduleInput = {
    where: transactionWhereUniqueInput
    create: XOR<transactionCreateWithoutScheduleInput, transactionUncheckedCreateWithoutScheduleInput>
  }

  export type transactionCreateManyScheduleInputEnvelope = {
    data: transactionCreateManyScheduleInput | transactionCreateManyScheduleInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutSchedulesInput = {
    update: XOR<userUpdateWithoutSchedulesInput, userUncheckedUpdateWithoutSchedulesInput>
    create: XOR<userCreateWithoutSchedulesInput, userUncheckedCreateWithoutSchedulesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutSchedulesInput, userUncheckedUpdateWithoutSchedulesInput>
  }

  export type userUpdateWithoutSchedulesInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    total_payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    uid?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    streams?: streamUpdateManyWithoutUserNestedInput
    wallets?: walletUpdateManyWithoutUserNestedInput
    txns?: transactionUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutSchedulesInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    total_payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    uid?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    streams?: streamUncheckedUpdateManyWithoutUserNestedInput
    wallets?: walletUncheckedUpdateManyWithoutUserNestedInput
    txns?: transactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type organizationUpsertWithoutSchedulesInput = {
    update: XOR<organizationUpdateWithoutSchedulesInput, organizationUncheckedUpdateWithoutSchedulesInput>
    create: XOR<organizationCreateWithoutSchedulesInput, organizationUncheckedCreateWithoutSchedulesInput>
    where?: organizationWhereInput
  }

  export type organizationUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: organizationWhereInput
    data: XOR<organizationUpdateWithoutSchedulesInput, organizationUncheckedUpdateWithoutSchedulesInput>
  }

  export type organizationUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
    plugin?: StringFieldUpdateOperationsInput | string
    admin?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    info?: StringFieldUpdateOperationsInput | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    streams?: streamUpdateManyWithoutOrgNestedInput
    transactions?: transactionUpdateManyWithoutOrgNestedInput
  }

  export type organizationUncheckedUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
    plugin?: StringFieldUpdateOperationsInput | string
    admin?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    info?: StringFieldUpdateOperationsInput | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    streams?: streamUncheckedUpdateManyWithoutOrgNestedInput
    transactions?: transactionUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type transactionUpsertWithWhereUniqueWithoutScheduleInput = {
    where: transactionWhereUniqueInput
    update: XOR<transactionUpdateWithoutScheduleInput, transactionUncheckedUpdateWithoutScheduleInput>
    create: XOR<transactionCreateWithoutScheduleInput, transactionUncheckedCreateWithoutScheduleInput>
  }

  export type transactionUpdateWithWhereUniqueWithoutScheduleInput = {
    where: transactionWhereUniqueInput
    data: XOR<transactionUpdateWithoutScheduleInput, transactionUncheckedUpdateWithoutScheduleInput>
  }

  export type transactionUpdateManyWithWhereWithoutScheduleInput = {
    where: transactionScalarWhereInput
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyWithoutScheduleInput>
  }

  export type userCreateWithoutStreamsInput = {
    username?: string | null
    image?: string | null
    name?: string | null
    total_payout?: Decimal | DecimalJsLike | number | string
    uid: string
    email?: string | null
    schedules?: scheduleCreateNestedManyWithoutUserInput
    wallets?: walletCreateNestedManyWithoutUserInput
    txns?: transactionCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutStreamsInput = {
    username?: string | null
    image?: string | null
    name?: string | null
    total_payout?: Decimal | DecimalJsLike | number | string
    uid: string
    email?: string | null
    schedules?: scheduleUncheckedCreateNestedManyWithoutUserInput
    wallets?: walletUncheckedCreateNestedManyWithoutUserInput
    txns?: transactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutStreamsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutStreamsInput, userUncheckedCreateWithoutStreamsInput>
  }

  export type organizationCreateWithoutStreamsInput = {
    id: string
    owner: string
    wallet: string
    plugin: string
    admin: string
    logo: string
    name: string
    info: string
    network: $Enums.network_type
    schedules?: scheduleCreateNestedManyWithoutOrgInput
    transactions?: transactionCreateNestedManyWithoutOrgInput
  }

  export type organizationUncheckedCreateWithoutStreamsInput = {
    id: string
    owner: string
    wallet: string
    plugin: string
    admin: string
    logo: string
    name: string
    info: string
    network: $Enums.network_type
    schedules?: scheduleUncheckedCreateNestedManyWithoutOrgInput
    transactions?: transactionUncheckedCreateNestedManyWithoutOrgInput
  }

  export type organizationCreateOrConnectWithoutStreamsInput = {
    where: organizationWhereUniqueInput
    create: XOR<organizationCreateWithoutStreamsInput, organizationUncheckedCreateWithoutStreamsInput>
  }

  export type transactionCreateWithoutStreamInput = {
    tx_id: string
    amount: Decimal | DecimalJsLike | number | string
    asset: $Enums.token
    network: $Enums.network_type
    created_at?: Date | string
    recipient: string
    org: organizationCreateNestedOneWithoutTransactionsInput
    user: userCreateNestedOneWithoutTxnsInput
    schedule?: scheduleCreateNestedOneWithoutTxnsInput
  }

  export type transactionUncheckedCreateWithoutStreamInput = {
    tx_id: string
    amount: Decimal | DecimalJsLike | number | string
    asset: $Enums.token
    network: $Enums.network_type
    created_at?: Date | string
    recipient: string
    org_id: string
    username: string
    schedule_id?: string | null
  }

  export type transactionCreateOrConnectWithoutStreamInput = {
    where: transactionWhereUniqueInput
    create: XOR<transactionCreateWithoutStreamInput, transactionUncheckedCreateWithoutStreamInput>
  }

  export type transactionCreateManyStreamInputEnvelope = {
    data: transactionCreateManyStreamInput | transactionCreateManyStreamInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutStreamsInput = {
    update: XOR<userUpdateWithoutStreamsInput, userUncheckedUpdateWithoutStreamsInput>
    create: XOR<userCreateWithoutStreamsInput, userUncheckedCreateWithoutStreamsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutStreamsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutStreamsInput, userUncheckedUpdateWithoutStreamsInput>
  }

  export type userUpdateWithoutStreamsInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    total_payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    uid?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    schedules?: scheduleUpdateManyWithoutUserNestedInput
    wallets?: walletUpdateManyWithoutUserNestedInput
    txns?: transactionUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutStreamsInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    total_payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    uid?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    schedules?: scheduleUncheckedUpdateManyWithoutUserNestedInput
    wallets?: walletUncheckedUpdateManyWithoutUserNestedInput
    txns?: transactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type organizationUpsertWithoutStreamsInput = {
    update: XOR<organizationUpdateWithoutStreamsInput, organizationUncheckedUpdateWithoutStreamsInput>
    create: XOR<organizationCreateWithoutStreamsInput, organizationUncheckedCreateWithoutStreamsInput>
    where?: organizationWhereInput
  }

  export type organizationUpdateToOneWithWhereWithoutStreamsInput = {
    where?: organizationWhereInput
    data: XOR<organizationUpdateWithoutStreamsInput, organizationUncheckedUpdateWithoutStreamsInput>
  }

  export type organizationUpdateWithoutStreamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
    plugin?: StringFieldUpdateOperationsInput | string
    admin?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    info?: StringFieldUpdateOperationsInput | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    schedules?: scheduleUpdateManyWithoutOrgNestedInput
    transactions?: transactionUpdateManyWithoutOrgNestedInput
  }

  export type organizationUncheckedUpdateWithoutStreamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
    plugin?: StringFieldUpdateOperationsInput | string
    admin?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    info?: StringFieldUpdateOperationsInput | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    schedules?: scheduleUncheckedUpdateManyWithoutOrgNestedInput
    transactions?: transactionUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type transactionUpsertWithWhereUniqueWithoutStreamInput = {
    where: transactionWhereUniqueInput
    update: XOR<transactionUpdateWithoutStreamInput, transactionUncheckedUpdateWithoutStreamInput>
    create: XOR<transactionCreateWithoutStreamInput, transactionUncheckedCreateWithoutStreamInput>
  }

  export type transactionUpdateWithWhereUniqueWithoutStreamInput = {
    where: transactionWhereUniqueInput
    data: XOR<transactionUpdateWithoutStreamInput, transactionUncheckedUpdateWithoutStreamInput>
  }

  export type transactionUpdateManyWithWhereWithoutStreamInput = {
    where: transactionScalarWhereInput
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyWithoutStreamInput>
  }

  export type organizationCreateWithoutTransactionsInput = {
    id: string
    owner: string
    wallet: string
    plugin: string
    admin: string
    logo: string
    name: string
    info: string
    network: $Enums.network_type
    streams?: streamCreateNestedManyWithoutOrgInput
    schedules?: scheduleCreateNestedManyWithoutOrgInput
  }

  export type organizationUncheckedCreateWithoutTransactionsInput = {
    id: string
    owner: string
    wallet: string
    plugin: string
    admin: string
    logo: string
    name: string
    info: string
    network: $Enums.network_type
    streams?: streamUncheckedCreateNestedManyWithoutOrgInput
    schedules?: scheduleUncheckedCreateNestedManyWithoutOrgInput
  }

  export type organizationCreateOrConnectWithoutTransactionsInput = {
    where: organizationWhereUniqueInput
    create: XOR<organizationCreateWithoutTransactionsInput, organizationUncheckedCreateWithoutTransactionsInput>
  }

  export type userCreateWithoutTxnsInput = {
    username?: string | null
    image?: string | null
    name?: string | null
    total_payout?: Decimal | DecimalJsLike | number | string
    uid: string
    email?: string | null
    streams?: streamCreateNestedManyWithoutUserInput
    schedules?: scheduleCreateNestedManyWithoutUserInput
    wallets?: walletCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutTxnsInput = {
    username?: string | null
    image?: string | null
    name?: string | null
    total_payout?: Decimal | DecimalJsLike | number | string
    uid: string
    email?: string | null
    streams?: streamUncheckedCreateNestedManyWithoutUserInput
    schedules?: scheduleUncheckedCreateNestedManyWithoutUserInput
    wallets?: walletUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutTxnsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutTxnsInput, userUncheckedCreateWithoutTxnsInput>
  }

  export type scheduleCreateWithoutTxnsInput = {
    amount: Decimal | DecimalJsLike | number | string
    isOneTime?: boolean
    nextPayout: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    network: $Enums.network_type
    asset: $Enums.token
    id: string
    role: string
    title: string
    active?: boolean
    interval: $Enums.interval_type
    payout?: Decimal | DecimalJsLike | number | string
    user: userCreateNestedOneWithoutSchedulesInput
    org: organizationCreateNestedOneWithoutSchedulesInput
  }

  export type scheduleUncheckedCreateWithoutTxnsInput = {
    username: string
    amount: Decimal | DecimalJsLike | number | string
    isOneTime?: boolean
    org_id: string
    nextPayout: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    network: $Enums.network_type
    asset: $Enums.token
    id: string
    role: string
    title: string
    active?: boolean
    interval: $Enums.interval_type
    payout?: Decimal | DecimalJsLike | number | string
  }

  export type scheduleCreateOrConnectWithoutTxnsInput = {
    where: scheduleWhereUniqueInput
    create: XOR<scheduleCreateWithoutTxnsInput, scheduleUncheckedCreateWithoutTxnsInput>
  }

  export type streamCreateWithoutTxnsInput = {
    amount: Decimal | DecimalJsLike | number | string
    lastPayout?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    network: $Enums.network_type
    asset: $Enums.token
    id: string
    payout?: Decimal | DecimalJsLike | number | string
    role: string
    title: string
    state?: $Enums.stream_state
    active?: boolean
    interval: $Enums.interval_type
    user: userCreateNestedOneWithoutStreamsInput
    org: organizationCreateNestedOneWithoutStreamsInput
  }

  export type streamUncheckedCreateWithoutTxnsInput = {
    username: string
    amount: Decimal | DecimalJsLike | number | string
    org_id: string
    lastPayout?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    network: $Enums.network_type
    asset: $Enums.token
    id: string
    payout?: Decimal | DecimalJsLike | number | string
    role: string
    title: string
    state?: $Enums.stream_state
    active?: boolean
    interval: $Enums.interval_type
  }

  export type streamCreateOrConnectWithoutTxnsInput = {
    where: streamWhereUniqueInput
    create: XOR<streamCreateWithoutTxnsInput, streamUncheckedCreateWithoutTxnsInput>
  }

  export type organizationUpsertWithoutTransactionsInput = {
    update: XOR<organizationUpdateWithoutTransactionsInput, organizationUncheckedUpdateWithoutTransactionsInput>
    create: XOR<organizationCreateWithoutTransactionsInput, organizationUncheckedCreateWithoutTransactionsInput>
    where?: organizationWhereInput
  }

  export type organizationUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: organizationWhereInput
    data: XOR<organizationUpdateWithoutTransactionsInput, organizationUncheckedUpdateWithoutTransactionsInput>
  }

  export type organizationUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
    plugin?: StringFieldUpdateOperationsInput | string
    admin?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    info?: StringFieldUpdateOperationsInput | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    streams?: streamUpdateManyWithoutOrgNestedInput
    schedules?: scheduleUpdateManyWithoutOrgNestedInput
  }

  export type organizationUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
    plugin?: StringFieldUpdateOperationsInput | string
    admin?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    info?: StringFieldUpdateOperationsInput | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    streams?: streamUncheckedUpdateManyWithoutOrgNestedInput
    schedules?: scheduleUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type userUpsertWithoutTxnsInput = {
    update: XOR<userUpdateWithoutTxnsInput, userUncheckedUpdateWithoutTxnsInput>
    create: XOR<userCreateWithoutTxnsInput, userUncheckedCreateWithoutTxnsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutTxnsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutTxnsInput, userUncheckedUpdateWithoutTxnsInput>
  }

  export type userUpdateWithoutTxnsInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    total_payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    uid?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    streams?: streamUpdateManyWithoutUserNestedInput
    schedules?: scheduleUpdateManyWithoutUserNestedInput
    wallets?: walletUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutTxnsInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    total_payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    uid?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    streams?: streamUncheckedUpdateManyWithoutUserNestedInput
    schedules?: scheduleUncheckedUpdateManyWithoutUserNestedInput
    wallets?: walletUncheckedUpdateManyWithoutUserNestedInput
  }

  export type scheduleUpsertWithoutTxnsInput = {
    update: XOR<scheduleUpdateWithoutTxnsInput, scheduleUncheckedUpdateWithoutTxnsInput>
    create: XOR<scheduleCreateWithoutTxnsInput, scheduleUncheckedCreateWithoutTxnsInput>
    where?: scheduleWhereInput
  }

  export type scheduleUpdateToOneWithWhereWithoutTxnsInput = {
    where?: scheduleWhereInput
    data: XOR<scheduleUpdateWithoutTxnsInput, scheduleUncheckedUpdateWithoutTxnsInput>
  }

  export type scheduleUpdateWithoutTxnsInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isOneTime?: BoolFieldUpdateOperationsInput | boolean
    nextPayout?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    interval?: Enuminterval_typeFieldUpdateOperationsInput | $Enums.interval_type
    payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: userUpdateOneRequiredWithoutSchedulesNestedInput
    org?: organizationUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type scheduleUncheckedUpdateWithoutTxnsInput = {
    username?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isOneTime?: BoolFieldUpdateOperationsInput | boolean
    org_id?: StringFieldUpdateOperationsInput | string
    nextPayout?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    interval?: Enuminterval_typeFieldUpdateOperationsInput | $Enums.interval_type
    payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type streamUpsertWithoutTxnsInput = {
    update: XOR<streamUpdateWithoutTxnsInput, streamUncheckedUpdateWithoutTxnsInput>
    create: XOR<streamCreateWithoutTxnsInput, streamUncheckedCreateWithoutTxnsInput>
    where?: streamWhereInput
  }

  export type streamUpdateToOneWithWhereWithoutTxnsInput = {
    where?: streamWhereInput
    data: XOR<streamUpdateWithoutTxnsInput, streamUncheckedUpdateWithoutTxnsInput>
  }

  export type streamUpdateWithoutTxnsInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastPayout?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    id?: StringFieldUpdateOperationsInput | string
    payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    role?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    state?: Enumstream_stateFieldUpdateOperationsInput | $Enums.stream_state
    active?: BoolFieldUpdateOperationsInput | boolean
    interval?: Enuminterval_typeFieldUpdateOperationsInput | $Enums.interval_type
    user?: userUpdateOneRequiredWithoutStreamsNestedInput
    org?: organizationUpdateOneRequiredWithoutStreamsNestedInput
  }

  export type streamUncheckedUpdateWithoutTxnsInput = {
    username?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    org_id?: StringFieldUpdateOperationsInput | string
    lastPayout?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    id?: StringFieldUpdateOperationsInput | string
    payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    role?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    state?: Enumstream_stateFieldUpdateOperationsInput | $Enums.stream_state
    active?: BoolFieldUpdateOperationsInput | boolean
    interval?: Enuminterval_typeFieldUpdateOperationsInput | $Enums.interval_type
  }

  export type streamCreateWithoutUserInput = {
    amount: Decimal | DecimalJsLike | number | string
    lastPayout?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    network: $Enums.network_type
    asset: $Enums.token
    id: string
    payout?: Decimal | DecimalJsLike | number | string
    role: string
    title: string
    state?: $Enums.stream_state
    active?: boolean
    interval: $Enums.interval_type
    org: organizationCreateNestedOneWithoutStreamsInput
    txns?: transactionCreateNestedManyWithoutStreamInput
  }

  export type streamUncheckedCreateWithoutUserInput = {
    amount: Decimal | DecimalJsLike | number | string
    org_id: string
    lastPayout?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    network: $Enums.network_type
    asset: $Enums.token
    id: string
    payout?: Decimal | DecimalJsLike | number | string
    role: string
    title: string
    state?: $Enums.stream_state
    active?: boolean
    interval: $Enums.interval_type
    txns?: transactionUncheckedCreateNestedManyWithoutStreamInput
  }

  export type streamCreateOrConnectWithoutUserInput = {
    where: streamWhereUniqueInput
    create: XOR<streamCreateWithoutUserInput, streamUncheckedCreateWithoutUserInput>
  }

  export type streamCreateManyUserInputEnvelope = {
    data: streamCreateManyUserInput | streamCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type scheduleCreateWithoutUserInput = {
    amount: Decimal | DecimalJsLike | number | string
    isOneTime?: boolean
    nextPayout: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    network: $Enums.network_type
    asset: $Enums.token
    id: string
    role: string
    title: string
    active?: boolean
    interval: $Enums.interval_type
    payout?: Decimal | DecimalJsLike | number | string
    org: organizationCreateNestedOneWithoutSchedulesInput
    txns?: transactionCreateNestedManyWithoutScheduleInput
  }

  export type scheduleUncheckedCreateWithoutUserInput = {
    amount: Decimal | DecimalJsLike | number | string
    isOneTime?: boolean
    org_id: string
    nextPayout: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    network: $Enums.network_type
    asset: $Enums.token
    id: string
    role: string
    title: string
    active?: boolean
    interval: $Enums.interval_type
    payout?: Decimal | DecimalJsLike | number | string
    txns?: transactionUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type scheduleCreateOrConnectWithoutUserInput = {
    where: scheduleWhereUniqueInput
    create: XOR<scheduleCreateWithoutUserInput, scheduleUncheckedCreateWithoutUserInput>
  }

  export type scheduleCreateManyUserInputEnvelope = {
    data: scheduleCreateManyUserInput | scheduleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type walletCreateWithoutUserInput = {
    network: $Enums.network_type
    address: string
  }

  export type walletUncheckedCreateWithoutUserInput = {
    network: $Enums.network_type
    address: string
    id?: number
  }

  export type walletCreateOrConnectWithoutUserInput = {
    where: walletWhereUniqueInput
    create: XOR<walletCreateWithoutUserInput, walletUncheckedCreateWithoutUserInput>
  }

  export type walletCreateManyUserInputEnvelope = {
    data: walletCreateManyUserInput | walletCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type transactionCreateWithoutUserInput = {
    tx_id: string
    amount: Decimal | DecimalJsLike | number | string
    asset: $Enums.token
    network: $Enums.network_type
    created_at?: Date | string
    recipient: string
    org: organizationCreateNestedOneWithoutTransactionsInput
    schedule?: scheduleCreateNestedOneWithoutTxnsInput
    stream?: streamCreateNestedOneWithoutTxnsInput
  }

  export type transactionUncheckedCreateWithoutUserInput = {
    tx_id: string
    amount: Decimal | DecimalJsLike | number | string
    asset: $Enums.token
    network: $Enums.network_type
    created_at?: Date | string
    recipient: string
    org_id: string
    schedule_id?: string | null
    stream_id?: string | null
  }

  export type transactionCreateOrConnectWithoutUserInput = {
    where: transactionWhereUniqueInput
    create: XOR<transactionCreateWithoutUserInput, transactionUncheckedCreateWithoutUserInput>
  }

  export type transactionCreateManyUserInputEnvelope = {
    data: transactionCreateManyUserInput | transactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type streamUpsertWithWhereUniqueWithoutUserInput = {
    where: streamWhereUniqueInput
    update: XOR<streamUpdateWithoutUserInput, streamUncheckedUpdateWithoutUserInput>
    create: XOR<streamCreateWithoutUserInput, streamUncheckedCreateWithoutUserInput>
  }

  export type streamUpdateWithWhereUniqueWithoutUserInput = {
    where: streamWhereUniqueInput
    data: XOR<streamUpdateWithoutUserInput, streamUncheckedUpdateWithoutUserInput>
  }

  export type streamUpdateManyWithWhereWithoutUserInput = {
    where: streamScalarWhereInput
    data: XOR<streamUpdateManyMutationInput, streamUncheckedUpdateManyWithoutUserInput>
  }

  export type scheduleUpsertWithWhereUniqueWithoutUserInput = {
    where: scheduleWhereUniqueInput
    update: XOR<scheduleUpdateWithoutUserInput, scheduleUncheckedUpdateWithoutUserInput>
    create: XOR<scheduleCreateWithoutUserInput, scheduleUncheckedCreateWithoutUserInput>
  }

  export type scheduleUpdateWithWhereUniqueWithoutUserInput = {
    where: scheduleWhereUniqueInput
    data: XOR<scheduleUpdateWithoutUserInput, scheduleUncheckedUpdateWithoutUserInput>
  }

  export type scheduleUpdateManyWithWhereWithoutUserInput = {
    where: scheduleScalarWhereInput
    data: XOR<scheduleUpdateManyMutationInput, scheduleUncheckedUpdateManyWithoutUserInput>
  }

  export type walletUpsertWithWhereUniqueWithoutUserInput = {
    where: walletWhereUniqueInput
    update: XOR<walletUpdateWithoutUserInput, walletUncheckedUpdateWithoutUserInput>
    create: XOR<walletCreateWithoutUserInput, walletUncheckedCreateWithoutUserInput>
  }

  export type walletUpdateWithWhereUniqueWithoutUserInput = {
    where: walletWhereUniqueInput
    data: XOR<walletUpdateWithoutUserInput, walletUncheckedUpdateWithoutUserInput>
  }

  export type walletUpdateManyWithWhereWithoutUserInput = {
    where: walletScalarWhereInput
    data: XOR<walletUpdateManyMutationInput, walletUncheckedUpdateManyWithoutUserInput>
  }

  export type walletScalarWhereInput = {
    AND?: walletScalarWhereInput | walletScalarWhereInput[]
    OR?: walletScalarWhereInput[]
    NOT?: walletScalarWhereInput | walletScalarWhereInput[]
    username?: StringFilter<"wallet"> | string
    network?: Enumnetwork_typeFilter<"wallet"> | $Enums.network_type
    address?: StringFilter<"wallet"> | string
    id?: IntFilter<"wallet"> | number
  }

  export type transactionUpsertWithWhereUniqueWithoutUserInput = {
    where: transactionWhereUniqueInput
    update: XOR<transactionUpdateWithoutUserInput, transactionUncheckedUpdateWithoutUserInput>
    create: XOR<transactionCreateWithoutUserInput, transactionUncheckedCreateWithoutUserInput>
  }

  export type transactionUpdateWithWhereUniqueWithoutUserInput = {
    where: transactionWhereUniqueInput
    data: XOR<transactionUpdateWithoutUserInput, transactionUncheckedUpdateWithoutUserInput>
  }

  export type transactionUpdateManyWithWhereWithoutUserInput = {
    where: transactionScalarWhereInput
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyWithoutUserInput>
  }

  export type userCreateWithoutWalletsInput = {
    username?: string | null
    image?: string | null
    name?: string | null
    total_payout?: Decimal | DecimalJsLike | number | string
    uid: string
    email?: string | null
    streams?: streamCreateNestedManyWithoutUserInput
    schedules?: scheduleCreateNestedManyWithoutUserInput
    txns?: transactionCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutWalletsInput = {
    username?: string | null
    image?: string | null
    name?: string | null
    total_payout?: Decimal | DecimalJsLike | number | string
    uid: string
    email?: string | null
    streams?: streamUncheckedCreateNestedManyWithoutUserInput
    schedules?: scheduleUncheckedCreateNestedManyWithoutUserInput
    txns?: transactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutWalletsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutWalletsInput, userUncheckedCreateWithoutWalletsInput>
  }

  export type userUpsertWithoutWalletsInput = {
    update: XOR<userUpdateWithoutWalletsInput, userUncheckedUpdateWithoutWalletsInput>
    create: XOR<userCreateWithoutWalletsInput, userUncheckedCreateWithoutWalletsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutWalletsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutWalletsInput, userUncheckedUpdateWithoutWalletsInput>
  }

  export type userUpdateWithoutWalletsInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    total_payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    uid?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    streams?: streamUpdateManyWithoutUserNestedInput
    schedules?: scheduleUpdateManyWithoutUserNestedInput
    txns?: transactionUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutWalletsInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    total_payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    uid?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    streams?: streamUncheckedUpdateManyWithoutUserNestedInput
    schedules?: scheduleUncheckedUpdateManyWithoutUserNestedInput
    txns?: transactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type streamCreateManyOrgInput = {
    username: string
    amount: Decimal | DecimalJsLike | number | string
    lastPayout?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    network: $Enums.network_type
    asset: $Enums.token
    id: string
    payout?: Decimal | DecimalJsLike | number | string
    role: string
    title: string
    state?: $Enums.stream_state
    active?: boolean
    interval: $Enums.interval_type
  }

  export type scheduleCreateManyOrgInput = {
    username: string
    amount: Decimal | DecimalJsLike | number | string
    isOneTime?: boolean
    nextPayout: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    network: $Enums.network_type
    asset: $Enums.token
    id: string
    role: string
    title: string
    active?: boolean
    interval: $Enums.interval_type
    payout?: Decimal | DecimalJsLike | number | string
  }

  export type transactionCreateManyOrgInput = {
    tx_id: string
    amount: Decimal | DecimalJsLike | number | string
    asset: $Enums.token
    network: $Enums.network_type
    created_at?: Date | string
    recipient: string
    username: string
    schedule_id?: string | null
    stream_id?: string | null
  }

  export type streamUpdateWithoutOrgInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastPayout?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    id?: StringFieldUpdateOperationsInput | string
    payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    role?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    state?: Enumstream_stateFieldUpdateOperationsInput | $Enums.stream_state
    active?: BoolFieldUpdateOperationsInput | boolean
    interval?: Enuminterval_typeFieldUpdateOperationsInput | $Enums.interval_type
    user?: userUpdateOneRequiredWithoutStreamsNestedInput
    txns?: transactionUpdateManyWithoutStreamNestedInput
  }

  export type streamUncheckedUpdateWithoutOrgInput = {
    username?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastPayout?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    id?: StringFieldUpdateOperationsInput | string
    payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    role?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    state?: Enumstream_stateFieldUpdateOperationsInput | $Enums.stream_state
    active?: BoolFieldUpdateOperationsInput | boolean
    interval?: Enuminterval_typeFieldUpdateOperationsInput | $Enums.interval_type
    txns?: transactionUncheckedUpdateManyWithoutStreamNestedInput
  }

  export type streamUncheckedUpdateManyWithoutOrgInput = {
    username?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastPayout?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    id?: StringFieldUpdateOperationsInput | string
    payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    role?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    state?: Enumstream_stateFieldUpdateOperationsInput | $Enums.stream_state
    active?: BoolFieldUpdateOperationsInput | boolean
    interval?: Enuminterval_typeFieldUpdateOperationsInput | $Enums.interval_type
  }

  export type scheduleUpdateWithoutOrgInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isOneTime?: BoolFieldUpdateOperationsInput | boolean
    nextPayout?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    interval?: Enuminterval_typeFieldUpdateOperationsInput | $Enums.interval_type
    payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: userUpdateOneRequiredWithoutSchedulesNestedInput
    txns?: transactionUpdateManyWithoutScheduleNestedInput
  }

  export type scheduleUncheckedUpdateWithoutOrgInput = {
    username?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isOneTime?: BoolFieldUpdateOperationsInput | boolean
    nextPayout?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    interval?: Enuminterval_typeFieldUpdateOperationsInput | $Enums.interval_type
    payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    txns?: transactionUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type scheduleUncheckedUpdateManyWithoutOrgInput = {
    username?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isOneTime?: BoolFieldUpdateOperationsInput | boolean
    nextPayout?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    interval?: Enuminterval_typeFieldUpdateOperationsInput | $Enums.interval_type
    payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type transactionUpdateWithoutOrgInput = {
    tx_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recipient?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutTxnsNestedInput
    schedule?: scheduleUpdateOneWithoutTxnsNestedInput
    stream?: streamUpdateOneWithoutTxnsNestedInput
  }

  export type transactionUncheckedUpdateWithoutOrgInput = {
    tx_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recipient?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    schedule_id?: NullableStringFieldUpdateOperationsInput | string | null
    stream_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transactionUncheckedUpdateManyWithoutOrgInput = {
    tx_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recipient?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    schedule_id?: NullableStringFieldUpdateOperationsInput | string | null
    stream_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transactionCreateManyScheduleInput = {
    tx_id: string
    amount: Decimal | DecimalJsLike | number | string
    asset: $Enums.token
    network: $Enums.network_type
    created_at?: Date | string
    recipient: string
    org_id: string
    username: string
    stream_id?: string | null
  }

  export type transactionUpdateWithoutScheduleInput = {
    tx_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recipient?: StringFieldUpdateOperationsInput | string
    org?: organizationUpdateOneRequiredWithoutTransactionsNestedInput
    user?: userUpdateOneRequiredWithoutTxnsNestedInput
    stream?: streamUpdateOneWithoutTxnsNestedInput
  }

  export type transactionUncheckedUpdateWithoutScheduleInput = {
    tx_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recipient?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    stream_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transactionUncheckedUpdateManyWithoutScheduleInput = {
    tx_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recipient?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    stream_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transactionCreateManyStreamInput = {
    tx_id: string
    amount: Decimal | DecimalJsLike | number | string
    asset: $Enums.token
    network: $Enums.network_type
    created_at?: Date | string
    recipient: string
    org_id: string
    username: string
    schedule_id?: string | null
  }

  export type transactionUpdateWithoutStreamInput = {
    tx_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recipient?: StringFieldUpdateOperationsInput | string
    org?: organizationUpdateOneRequiredWithoutTransactionsNestedInput
    user?: userUpdateOneRequiredWithoutTxnsNestedInput
    schedule?: scheduleUpdateOneWithoutTxnsNestedInput
  }

  export type transactionUncheckedUpdateWithoutStreamInput = {
    tx_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recipient?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    schedule_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transactionUncheckedUpdateManyWithoutStreamInput = {
    tx_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recipient?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    schedule_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type streamCreateManyUserInput = {
    amount: Decimal | DecimalJsLike | number | string
    org_id: string
    lastPayout?: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    network: $Enums.network_type
    asset: $Enums.token
    id: string
    payout?: Decimal | DecimalJsLike | number | string
    role: string
    title: string
    state?: $Enums.stream_state
    active?: boolean
    interval: $Enums.interval_type
  }

  export type scheduleCreateManyUserInput = {
    amount: Decimal | DecimalJsLike | number | string
    isOneTime?: boolean
    org_id: string
    nextPayout: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    network: $Enums.network_type
    asset: $Enums.token
    id: string
    role: string
    title: string
    active?: boolean
    interval: $Enums.interval_type
    payout?: Decimal | DecimalJsLike | number | string
  }

  export type walletCreateManyUserInput = {
    network: $Enums.network_type
    address: string
    id?: number
  }

  export type transactionCreateManyUserInput = {
    tx_id: string
    amount: Decimal | DecimalJsLike | number | string
    asset: $Enums.token
    network: $Enums.network_type
    created_at?: Date | string
    recipient: string
    org_id: string
    schedule_id?: string | null
    stream_id?: string | null
  }

  export type streamUpdateWithoutUserInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastPayout?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    id?: StringFieldUpdateOperationsInput | string
    payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    role?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    state?: Enumstream_stateFieldUpdateOperationsInput | $Enums.stream_state
    active?: BoolFieldUpdateOperationsInput | boolean
    interval?: Enuminterval_typeFieldUpdateOperationsInput | $Enums.interval_type
    org?: organizationUpdateOneRequiredWithoutStreamsNestedInput
    txns?: transactionUpdateManyWithoutStreamNestedInput
  }

  export type streamUncheckedUpdateWithoutUserInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    org_id?: StringFieldUpdateOperationsInput | string
    lastPayout?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    id?: StringFieldUpdateOperationsInput | string
    payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    role?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    state?: Enumstream_stateFieldUpdateOperationsInput | $Enums.stream_state
    active?: BoolFieldUpdateOperationsInput | boolean
    interval?: Enuminterval_typeFieldUpdateOperationsInput | $Enums.interval_type
    txns?: transactionUncheckedUpdateManyWithoutStreamNestedInput
  }

  export type streamUncheckedUpdateManyWithoutUserInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    org_id?: StringFieldUpdateOperationsInput | string
    lastPayout?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    id?: StringFieldUpdateOperationsInput | string
    payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    role?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    state?: Enumstream_stateFieldUpdateOperationsInput | $Enums.stream_state
    active?: BoolFieldUpdateOperationsInput | boolean
    interval?: Enuminterval_typeFieldUpdateOperationsInput | $Enums.interval_type
  }

  export type scheduleUpdateWithoutUserInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isOneTime?: BoolFieldUpdateOperationsInput | boolean
    nextPayout?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    interval?: Enuminterval_typeFieldUpdateOperationsInput | $Enums.interval_type
    payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    org?: organizationUpdateOneRequiredWithoutSchedulesNestedInput
    txns?: transactionUpdateManyWithoutScheduleNestedInput
  }

  export type scheduleUncheckedUpdateWithoutUserInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isOneTime?: BoolFieldUpdateOperationsInput | boolean
    org_id?: StringFieldUpdateOperationsInput | string
    nextPayout?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    interval?: Enuminterval_typeFieldUpdateOperationsInput | $Enums.interval_type
    payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    txns?: transactionUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type scheduleUncheckedUpdateManyWithoutUserInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isOneTime?: BoolFieldUpdateOperationsInput | boolean
    org_id?: StringFieldUpdateOperationsInput | string
    nextPayout?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    interval?: Enuminterval_typeFieldUpdateOperationsInput | $Enums.interval_type
    payout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type walletUpdateWithoutUserInput = {
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    address?: StringFieldUpdateOperationsInput | string
  }

  export type walletUncheckedUpdateWithoutUserInput = {
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    address?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
  }

  export type walletUncheckedUpdateManyWithoutUserInput = {
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    address?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
  }

  export type transactionUpdateWithoutUserInput = {
    tx_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recipient?: StringFieldUpdateOperationsInput | string
    org?: organizationUpdateOneRequiredWithoutTransactionsNestedInput
    schedule?: scheduleUpdateOneWithoutTxnsNestedInput
    stream?: streamUpdateOneWithoutTxnsNestedInput
  }

  export type transactionUncheckedUpdateWithoutUserInput = {
    tx_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recipient?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    schedule_id?: NullableStringFieldUpdateOperationsInput | string | null
    stream_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transactionUncheckedUpdateManyWithoutUserInput = {
    tx_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    asset?: EnumtokenFieldUpdateOperationsInput | $Enums.token
    network?: Enumnetwork_typeFieldUpdateOperationsInput | $Enums.network_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recipient?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    schedule_id?: NullableStringFieldUpdateOperationsInput | string | null
    stream_id?: NullableStringFieldUpdateOperationsInput | string | null
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