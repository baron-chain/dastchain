import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { BuyOrderBook } from "./buy_order_book";
import { DenomTrace } from "./denom_trace";
import { Params } from "./params";
import { SellOrderBook } from "./sell_order_book";
export declare const protobufPackage = "dastchain.dex";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetSellOrderBookRequest {
    index: string;
}
export interface QueryGetSellOrderBookResponse {
    sellOrderBook: SellOrderBook | undefined;
}
export interface QueryAllSellOrderBookRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllSellOrderBookResponse {
    sellOrderBook: SellOrderBook[];
    pagination: PageResponse | undefined;
}
export interface QueryGetBuyOrderBookRequest {
    index: string;
}
export interface QueryGetBuyOrderBookResponse {
    buyOrderBook: BuyOrderBook | undefined;
}
export interface QueryAllBuyOrderBookRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllBuyOrderBookResponse {
    buyOrderBook: BuyOrderBook[];
    pagination: PageResponse | undefined;
}
export interface QueryGetDenomTraceRequest {
    index: string;
}
export interface QueryGetDenomTraceResponse {
    denomTrace: DenomTrace | undefined;
}
export interface QueryAllDenomTraceRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllDenomTraceResponse {
    denomTrace: DenomTrace[];
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
export declare const QueryGetSellOrderBookRequest: {
    encode(message: QueryGetSellOrderBookRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSellOrderBookRequest;
    fromJSON(object: any): QueryGetSellOrderBookRequest;
    toJSON(message: QueryGetSellOrderBookRequest): unknown;
    create<I extends {
        index?: string;
    } & {
        index?: string;
    } & { [K in Exclude<keyof I, "index">]: never; }>(base?: I): QueryGetSellOrderBookRequest;
    fromPartial<I_1 extends {
        index?: string;
    } & {
        index?: string;
    } & { [K_1 in Exclude<keyof I_1, "index">]: never; }>(object: I_1): QueryGetSellOrderBookRequest;
};
export declare const QueryGetSellOrderBookResponse: {
    encode(message: QueryGetSellOrderBookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSellOrderBookResponse;
    fromJSON(object: any): QueryGetSellOrderBookResponse;
    toJSON(message: QueryGetSellOrderBookResponse): unknown;
    create<I extends {
        sellOrderBook?: {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        };
    } & {
        sellOrderBook?: {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        } & {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        } & { [K in Exclude<keyof I["sellOrderBook"], keyof SellOrderBook>]: never; };
    } & { [K_1 in Exclude<keyof I, "sellOrderBook">]: never; }>(base?: I): QueryGetSellOrderBookResponse;
    fromPartial<I_1 extends {
        sellOrderBook?: {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        };
    } & {
        sellOrderBook?: {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        } & {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        } & { [K_2 in Exclude<keyof I_1["sellOrderBook"], keyof SellOrderBook>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "sellOrderBook">]: never; }>(object: I_1): QueryGetSellOrderBookResponse;
};
export declare const QueryAllSellOrderBookRequest: {
    encode(message: QueryAllSellOrderBookRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllSellOrderBookRequest;
    fromJSON(object: any): QueryAllSellOrderBookRequest;
    toJSON(message: QueryAllSellOrderBookRequest): unknown;
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
    } & { [K_1 in Exclude<keyof I, "pagination">]: never; }>(base?: I): QueryAllSellOrderBookRequest;
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
    } & { [K_3 in Exclude<keyof I_1, "pagination">]: never; }>(object: I_1): QueryAllSellOrderBookRequest;
};
export declare const QueryAllSellOrderBookResponse: {
    encode(message: QueryAllSellOrderBookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllSellOrderBookResponse;
    fromJSON(object: any): QueryAllSellOrderBookResponse;
    toJSON(message: QueryAllSellOrderBookResponse): unknown;
    create<I extends {
        sellOrderBook?: {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        };
    } & {
        sellOrderBook?: {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        }[] & ({
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        } & {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        } & { [K in Exclude<keyof I["sellOrderBook"][number], keyof SellOrderBook>]: never; })[] & { [K_1 in Exclude<keyof I["sellOrderBook"], keyof {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        }[]>]: never; };
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        } & {
            nextKey?: Uint8Array;
            total?: number;
        } & { [K_2 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof QueryAllSellOrderBookResponse>]: never; }>(base?: I): QueryAllSellOrderBookResponse;
    fromPartial<I_1 extends {
        sellOrderBook?: {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        };
    } & {
        sellOrderBook?: {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        }[] & ({
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        } & {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        } & { [K_4 in Exclude<keyof I_1["sellOrderBook"][number], keyof SellOrderBook>]: never; })[] & { [K_5 in Exclude<keyof I_1["sellOrderBook"], keyof {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        }[]>]: never; };
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        } & {
            nextKey?: Uint8Array;
            total?: number;
        } & { [K_6 in Exclude<keyof I_1["pagination"], keyof PageResponse>]: never; };
    } & { [K_7 in Exclude<keyof I_1, keyof QueryAllSellOrderBookResponse>]: never; }>(object: I_1): QueryAllSellOrderBookResponse;
};
export declare const QueryGetBuyOrderBookRequest: {
    encode(message: QueryGetBuyOrderBookRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBuyOrderBookRequest;
    fromJSON(object: any): QueryGetBuyOrderBookRequest;
    toJSON(message: QueryGetBuyOrderBookRequest): unknown;
    create<I extends {
        index?: string;
    } & {
        index?: string;
    } & { [K in Exclude<keyof I, "index">]: never; }>(base?: I): QueryGetBuyOrderBookRequest;
    fromPartial<I_1 extends {
        index?: string;
    } & {
        index?: string;
    } & { [K_1 in Exclude<keyof I_1, "index">]: never; }>(object: I_1): QueryGetBuyOrderBookRequest;
};
export declare const QueryGetBuyOrderBookResponse: {
    encode(message: QueryGetBuyOrderBookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBuyOrderBookResponse;
    fromJSON(object: any): QueryGetBuyOrderBookResponse;
    toJSON(message: QueryGetBuyOrderBookResponse): unknown;
    create<I extends {
        buyOrderBook?: {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        };
    } & {
        buyOrderBook?: {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        } & {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        } & { [K in Exclude<keyof I["buyOrderBook"], keyof BuyOrderBook>]: never; };
    } & { [K_1 in Exclude<keyof I, "buyOrderBook">]: never; }>(base?: I): QueryGetBuyOrderBookResponse;
    fromPartial<I_1 extends {
        buyOrderBook?: {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        };
    } & {
        buyOrderBook?: {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        } & {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        } & { [K_2 in Exclude<keyof I_1["buyOrderBook"], keyof BuyOrderBook>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "buyOrderBook">]: never; }>(object: I_1): QueryGetBuyOrderBookResponse;
};
export declare const QueryAllBuyOrderBookRequest: {
    encode(message: QueryAllBuyOrderBookRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBuyOrderBookRequest;
    fromJSON(object: any): QueryAllBuyOrderBookRequest;
    toJSON(message: QueryAllBuyOrderBookRequest): unknown;
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
    } & { [K_1 in Exclude<keyof I, "pagination">]: never; }>(base?: I): QueryAllBuyOrderBookRequest;
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
    } & { [K_3 in Exclude<keyof I_1, "pagination">]: never; }>(object: I_1): QueryAllBuyOrderBookRequest;
};
export declare const QueryAllBuyOrderBookResponse: {
    encode(message: QueryAllBuyOrderBookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBuyOrderBookResponse;
    fromJSON(object: any): QueryAllBuyOrderBookResponse;
    toJSON(message: QueryAllBuyOrderBookResponse): unknown;
    create<I extends {
        buyOrderBook?: {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        };
    } & {
        buyOrderBook?: {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        }[] & ({
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        } & {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        } & { [K in Exclude<keyof I["buyOrderBook"][number], keyof BuyOrderBook>]: never; })[] & { [K_1 in Exclude<keyof I["buyOrderBook"], keyof {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        }[]>]: never; };
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        } & {
            nextKey?: Uint8Array;
            total?: number;
        } & { [K_2 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof QueryAllBuyOrderBookResponse>]: never; }>(base?: I): QueryAllBuyOrderBookResponse;
    fromPartial<I_1 extends {
        buyOrderBook?: {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        };
    } & {
        buyOrderBook?: {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        }[] & ({
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        } & {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        } & { [K_4 in Exclude<keyof I_1["buyOrderBook"][number], keyof BuyOrderBook>]: never; })[] & { [K_5 in Exclude<keyof I_1["buyOrderBook"], keyof {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        }[]>]: never; };
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        } & {
            nextKey?: Uint8Array;
            total?: number;
        } & { [K_6 in Exclude<keyof I_1["pagination"], keyof PageResponse>]: never; };
    } & { [K_7 in Exclude<keyof I_1, keyof QueryAllBuyOrderBookResponse>]: never; }>(object: I_1): QueryAllBuyOrderBookResponse;
};
export declare const QueryGetDenomTraceRequest: {
    encode(message: QueryGetDenomTraceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDenomTraceRequest;
    fromJSON(object: any): QueryGetDenomTraceRequest;
    toJSON(message: QueryGetDenomTraceRequest): unknown;
    create<I extends {
        index?: string;
    } & {
        index?: string;
    } & { [K in Exclude<keyof I, "index">]: never; }>(base?: I): QueryGetDenomTraceRequest;
    fromPartial<I_1 extends {
        index?: string;
    } & {
        index?: string;
    } & { [K_1 in Exclude<keyof I_1, "index">]: never; }>(object: I_1): QueryGetDenomTraceRequest;
};
export declare const QueryGetDenomTraceResponse: {
    encode(message: QueryGetDenomTraceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDenomTraceResponse;
    fromJSON(object: any): QueryGetDenomTraceResponse;
    toJSON(message: QueryGetDenomTraceResponse): unknown;
    create<I extends {
        denomTrace?: {
            index?: string;
            port?: string;
            channel?: string;
            origin?: string;
        };
    } & {
        denomTrace?: {
            index?: string;
            port?: string;
            channel?: string;
            origin?: string;
        } & {
            index?: string;
            port?: string;
            channel?: string;
            origin?: string;
        } & { [K in Exclude<keyof I["denomTrace"], keyof DenomTrace>]: never; };
    } & { [K_1 in Exclude<keyof I, "denomTrace">]: never; }>(base?: I): QueryGetDenomTraceResponse;
    fromPartial<I_1 extends {
        denomTrace?: {
            index?: string;
            port?: string;
            channel?: string;
            origin?: string;
        };
    } & {
        denomTrace?: {
            index?: string;
            port?: string;
            channel?: string;
            origin?: string;
        } & {
            index?: string;
            port?: string;
            channel?: string;
            origin?: string;
        } & { [K_2 in Exclude<keyof I_1["denomTrace"], keyof DenomTrace>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "denomTrace">]: never; }>(object: I_1): QueryGetDenomTraceResponse;
};
export declare const QueryAllDenomTraceRequest: {
    encode(message: QueryAllDenomTraceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDenomTraceRequest;
    fromJSON(object: any): QueryAllDenomTraceRequest;
    toJSON(message: QueryAllDenomTraceRequest): unknown;
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
    } & { [K_1 in Exclude<keyof I, "pagination">]: never; }>(base?: I): QueryAllDenomTraceRequest;
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
    } & { [K_3 in Exclude<keyof I_1, "pagination">]: never; }>(object: I_1): QueryAllDenomTraceRequest;
};
export declare const QueryAllDenomTraceResponse: {
    encode(message: QueryAllDenomTraceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDenomTraceResponse;
    fromJSON(object: any): QueryAllDenomTraceResponse;
    toJSON(message: QueryAllDenomTraceResponse): unknown;
    create<I extends {
        denomTrace?: {
            index?: string;
            port?: string;
            channel?: string;
            origin?: string;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        };
    } & {
        denomTrace?: {
            index?: string;
            port?: string;
            channel?: string;
            origin?: string;
        }[] & ({
            index?: string;
            port?: string;
            channel?: string;
            origin?: string;
        } & {
            index?: string;
            port?: string;
            channel?: string;
            origin?: string;
        } & { [K in Exclude<keyof I["denomTrace"][number], keyof DenomTrace>]: never; })[] & { [K_1 in Exclude<keyof I["denomTrace"], keyof {
            index?: string;
            port?: string;
            channel?: string;
            origin?: string;
        }[]>]: never; };
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        } & {
            nextKey?: Uint8Array;
            total?: number;
        } & { [K_2 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof QueryAllDenomTraceResponse>]: never; }>(base?: I): QueryAllDenomTraceResponse;
    fromPartial<I_1 extends {
        denomTrace?: {
            index?: string;
            port?: string;
            channel?: string;
            origin?: string;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        };
    } & {
        denomTrace?: {
            index?: string;
            port?: string;
            channel?: string;
            origin?: string;
        }[] & ({
            index?: string;
            port?: string;
            channel?: string;
            origin?: string;
        } & {
            index?: string;
            port?: string;
            channel?: string;
            origin?: string;
        } & { [K_4 in Exclude<keyof I_1["denomTrace"][number], keyof DenomTrace>]: never; })[] & { [K_5 in Exclude<keyof I_1["denomTrace"], keyof {
            index?: string;
            port?: string;
            channel?: string;
            origin?: string;
        }[]>]: never; };
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        } & {
            nextKey?: Uint8Array;
            total?: number;
        } & { [K_6 in Exclude<keyof I_1["pagination"], keyof PageResponse>]: never; };
    } & { [K_7 in Exclude<keyof I_1, keyof QueryAllDenomTraceResponse>]: never; }>(object: I_1): QueryAllDenomTraceResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a list of SellOrderBook items. */
    SellOrderBook(request: QueryGetSellOrderBookRequest): Promise<QueryGetSellOrderBookResponse>;
    SellOrderBookAll(request: QueryAllSellOrderBookRequest): Promise<QueryAllSellOrderBookResponse>;
    /** Queries a list of BuyOrderBook items. */
    BuyOrderBook(request: QueryGetBuyOrderBookRequest): Promise<QueryGetBuyOrderBookResponse>;
    BuyOrderBookAll(request: QueryAllBuyOrderBookRequest): Promise<QueryAllBuyOrderBookResponse>;
    /** Queries a list of DenomTrace items. */
    DenomTrace(request: QueryGetDenomTraceRequest): Promise<QueryGetDenomTraceResponse>;
    DenomTraceAll(request: QueryAllDenomTraceRequest): Promise<QueryAllDenomTraceResponse>;
}
export declare const QueryServiceName = "dastchain.dex.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    SellOrderBook(request: QueryGetSellOrderBookRequest): Promise<QueryGetSellOrderBookResponse>;
    SellOrderBookAll(request: QueryAllSellOrderBookRequest): Promise<QueryAllSellOrderBookResponse>;
    BuyOrderBook(request: QueryGetBuyOrderBookRequest): Promise<QueryGetBuyOrderBookResponse>;
    BuyOrderBookAll(request: QueryAllBuyOrderBookRequest): Promise<QueryAllBuyOrderBookResponse>;
    DenomTrace(request: QueryGetDenomTraceRequest): Promise<QueryGetDenomTraceResponse>;
    DenomTraceAll(request: QueryAllDenomTraceRequest): Promise<QueryAllDenomTraceResponse>;
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
