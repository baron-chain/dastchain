import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Denom } from "./denom";
import { Params } from "./params";
export declare const protobufPackage = "dastchain.tokenfactory";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetDenomRequest {
    denom: string;
}
export interface QueryGetDenomResponse {
    denom: Denom | undefined;
}
export interface QueryAllDenomRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllDenomResponse {
    denom: Denom[];
    pagination: PageResponse | undefined;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): QueryParamsRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    create<I extends {
        params?: {};
    } & {
        params?: {} & {} & { [K in Exclude<keyof I["params"], never>]: never; };
    } & { [K_1 in Exclude<keyof I, "params">]: never; }>(base?: I): QueryParamsResponse;
    fromPartial<I_1 extends {
        params?: {};
    } & {
        params?: {} & {} & { [K_2 in Exclude<keyof I_1["params"], never>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "params">]: never; }>(object: I_1): QueryParamsResponse;
};
export declare const QueryGetDenomRequest: {
    encode(message: QueryGetDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDenomRequest;
    fromJSON(object: any): QueryGetDenomRequest;
    toJSON(message: QueryGetDenomRequest): unknown;
    create<I extends {
        denom?: string;
    } & {
        denom?: string;
    } & { [K in Exclude<keyof I, "denom">]: never; }>(base?: I): QueryGetDenomRequest;
    fromPartial<I_1 extends {
        denom?: string;
    } & {
        denom?: string;
    } & { [K_1 in Exclude<keyof I_1, "denom">]: never; }>(object: I_1): QueryGetDenomRequest;
};
export declare const QueryGetDenomResponse: {
    encode(message: QueryGetDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDenomResponse;
    fromJSON(object: any): QueryGetDenomResponse;
    toJSON(message: QueryGetDenomResponse): unknown;
    create<I extends {
        denom?: {
            denom?: string;
            description?: string;
            ticker?: string;
            precision?: number;
            url?: string;
            maxSupply?: number;
            supply?: number;
            canChangeMaxSupply?: boolean;
            owner?: string;
        };
    } & {
        denom?: {
            denom?: string;
            description?: string;
            ticker?: string;
            precision?: number;
            url?: string;
            maxSupply?: number;
            supply?: number;
            canChangeMaxSupply?: boolean;
            owner?: string;
        } & {
            denom?: string;
            description?: string;
            ticker?: string;
            precision?: number;
            url?: string;
            maxSupply?: number;
            supply?: number;
            canChangeMaxSupply?: boolean;
            owner?: string;
        } & { [K in Exclude<keyof I["denom"], keyof Denom>]: never; };
    } & { [K_1 in Exclude<keyof I, "denom">]: never; }>(base?: I): QueryGetDenomResponse;
    fromPartial<I_1 extends {
        denom?: {
            denom?: string;
            description?: string;
            ticker?: string;
            precision?: number;
            url?: string;
            maxSupply?: number;
            supply?: number;
            canChangeMaxSupply?: boolean;
            owner?: string;
        };
    } & {
        denom?: {
            denom?: string;
            description?: string;
            ticker?: string;
            precision?: number;
            url?: string;
            maxSupply?: number;
            supply?: number;
            canChangeMaxSupply?: boolean;
            owner?: string;
        } & {
            denom?: string;
            description?: string;
            ticker?: string;
            precision?: number;
            url?: string;
            maxSupply?: number;
            supply?: number;
            canChangeMaxSupply?: boolean;
            owner?: string;
        } & { [K_2 in Exclude<keyof I_1["denom"], keyof Denom>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "denom">]: never; }>(object: I_1): QueryGetDenomResponse;
};
export declare const QueryAllDenomRequest: {
    encode(message: QueryAllDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDenomRequest;
    fromJSON(object: any): QueryAllDenomRequest;
    toJSON(message: QueryAllDenomRequest): unknown;
    create<I extends {
        pagination?: {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        pagination?: {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        } & { [K in Exclude<keyof I["pagination"], keyof PageRequest>]: never; };
    } & { [K_1 in Exclude<keyof I, "pagination">]: never; }>(base?: I): QueryAllDenomRequest;
    fromPartial<I_1 extends {
        pagination?: {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        pagination?: {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        } & { [K_2 in Exclude<keyof I_1["pagination"], keyof PageRequest>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "pagination">]: never; }>(object: I_1): QueryAllDenomRequest;
};
export declare const QueryAllDenomResponse: {
    encode(message: QueryAllDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDenomResponse;
    fromJSON(object: any): QueryAllDenomResponse;
    toJSON(message: QueryAllDenomResponse): unknown;
    create<I extends {
        denom?: {
            denom?: string;
            description?: string;
            ticker?: string;
            precision?: number;
            url?: string;
            maxSupply?: number;
            supply?: number;
            canChangeMaxSupply?: boolean;
            owner?: string;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        };
    } & {
        denom?: {
            denom?: string;
            description?: string;
            ticker?: string;
            precision?: number;
            url?: string;
            maxSupply?: number;
            supply?: number;
            canChangeMaxSupply?: boolean;
            owner?: string;
        }[] & ({
            denom?: string;
            description?: string;
            ticker?: string;
            precision?: number;
            url?: string;
            maxSupply?: number;
            supply?: number;
            canChangeMaxSupply?: boolean;
            owner?: string;
        } & {
            denom?: string;
            description?: string;
            ticker?: string;
            precision?: number;
            url?: string;
            maxSupply?: number;
            supply?: number;
            canChangeMaxSupply?: boolean;
            owner?: string;
        } & { [K in Exclude<keyof I["denom"][number], keyof Denom>]: never; })[] & { [K_1 in Exclude<keyof I["denom"], keyof {
            denom?: string;
            description?: string;
            ticker?: string;
            precision?: number;
            url?: string;
            maxSupply?: number;
            supply?: number;
            canChangeMaxSupply?: boolean;
            owner?: string;
        }[]>]: never; };
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        } & {
            nextKey?: Uint8Array;
            total?: number;
        } & { [K_2 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof QueryAllDenomResponse>]: never; }>(base?: I): QueryAllDenomResponse;
    fromPartial<I_1 extends {
        denom?: {
            denom?: string;
            description?: string;
            ticker?: string;
            precision?: number;
            url?: string;
            maxSupply?: number;
            supply?: number;
            canChangeMaxSupply?: boolean;
            owner?: string;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        };
    } & {
        denom?: {
            denom?: string;
            description?: string;
            ticker?: string;
            precision?: number;
            url?: string;
            maxSupply?: number;
            supply?: number;
            canChangeMaxSupply?: boolean;
            owner?: string;
        }[] & ({
            denom?: string;
            description?: string;
            ticker?: string;
            precision?: number;
            url?: string;
            maxSupply?: number;
            supply?: number;
            canChangeMaxSupply?: boolean;
            owner?: string;
        } & {
            denom?: string;
            description?: string;
            ticker?: string;
            precision?: number;
            url?: string;
            maxSupply?: number;
            supply?: number;
            canChangeMaxSupply?: boolean;
            owner?: string;
        } & { [K_4 in Exclude<keyof I_1["denom"][number], keyof Denom>]: never; })[] & { [K_5 in Exclude<keyof I_1["denom"], keyof {
            denom?: string;
            description?: string;
            ticker?: string;
            precision?: number;
            url?: string;
            maxSupply?: number;
            supply?: number;
            canChangeMaxSupply?: boolean;
            owner?: string;
        }[]>]: never; };
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        } & {
            nextKey?: Uint8Array;
            total?: number;
        } & { [K_6 in Exclude<keyof I_1["pagination"], keyof PageResponse>]: never; };
    } & { [K_7 in Exclude<keyof I_1, keyof QueryAllDenomResponse>]: never; }>(object: I_1): QueryAllDenomResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a list of Denom items. */
    Denom(request: QueryGetDenomRequest): Promise<QueryGetDenomResponse>;
    DenomAll(request: QueryAllDenomRequest): Promise<QueryAllDenomResponse>;
}
export declare const QueryServiceName = "dastchain.tokenfactory.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Denom(request: QueryGetDenomRequest): Promise<QueryGetDenomResponse>;
    DenomAll(request: QueryAllDenomRequest): Promise<QueryAllDenomResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
