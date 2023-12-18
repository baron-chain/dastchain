import _m0 from "protobufjs/minimal";
import { Params } from "./params";
export declare const protobufPackage = "dastchain.dex";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /** NOTE: All parameters must be supplied. */
    params: Params | undefined;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}
export interface MsgSendCreatePair {
    sourceDenom: string;
    targetDenom: string;
    creator: string;
    port: string;
    channelID: string;
    timeoutTimestamp: number;
}
export interface MsgSendCreatePairResponse {
}
export interface MsgSendSellOrder {
    amountDenom: string;
    amount: number;
    priceDenom: string;
    price: number;
    creator: string;
    port: string;
    channelID: string;
    timeoutTimestamp: number;
}
export interface MsgSendSellOrderResponse {
}
export interface MsgSendBuyOrder {
    amountDenom: string;
    amount: number;
    priceDenom: string;
    price: number;
    creator: string;
    port: string;
    channelID: string;
    timeoutTimestamp: number;
}
export interface MsgSendBuyOrderResponse {
}
export interface MsgCancelSellOrder {
    creator: string;
    port: string;
    channel: string;
    amountDenom: string;
    priceDenom: string;
    orderId: number;
}
export interface MsgCancelSellOrderResponse {
}
export interface MsgCancelBuyOrder {
    creator: string;
    port: string;
    channel: string;
    amountDenom: string;
    priceDenom: string;
    orderId: number;
}
export interface MsgCancelBuyOrderResponse {
}
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): unknown;
    create<I extends {
        authority?: string;
        params?: {};
    } & {
        authority?: string;
        params?: {} & {} & { [K in Exclude<keyof I["params"], never>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof MsgUpdateParams>]: never; }>(base?: I): MsgUpdateParams;
    fromPartial<I_1 extends {
        authority?: string;
        params?: {};
    } & {
        authority?: string;
        params?: {} & {} & { [K_2 in Exclude<keyof I_1["params"], never>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof MsgUpdateParams>]: never; }>(object: I_1): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgUpdateParamsResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgUpdateParamsResponse;
};
export declare const MsgSendCreatePair: {
    encode(message: MsgSendCreatePair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendCreatePair;
    fromJSON(object: any): MsgSendCreatePair;
    toJSON(message: MsgSendCreatePair): unknown;
    create<I extends {
        sourceDenom?: string;
        targetDenom?: string;
        creator?: string;
        port?: string;
        channelID?: string;
        timeoutTimestamp?: number;
    } & {
        sourceDenom?: string;
        targetDenom?: string;
        creator?: string;
        port?: string;
        channelID?: string;
        timeoutTimestamp?: number;
    } & { [K in Exclude<keyof I, keyof MsgSendCreatePair>]: never; }>(base?: I): MsgSendCreatePair;
    fromPartial<I_1 extends {
        sourceDenom?: string;
        targetDenom?: string;
        creator?: string;
        port?: string;
        channelID?: string;
        timeoutTimestamp?: number;
    } & {
        sourceDenom?: string;
        targetDenom?: string;
        creator?: string;
        port?: string;
        channelID?: string;
        timeoutTimestamp?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgSendCreatePair>]: never; }>(object: I_1): MsgSendCreatePair;
};
export declare const MsgSendCreatePairResponse: {
    encode(_: MsgSendCreatePairResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendCreatePairResponse;
    fromJSON(_: any): MsgSendCreatePairResponse;
    toJSON(_: MsgSendCreatePairResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgSendCreatePairResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgSendCreatePairResponse;
};
export declare const MsgSendSellOrder: {
    encode(message: MsgSendSellOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendSellOrder;
    fromJSON(object: any): MsgSendSellOrder;
    toJSON(message: MsgSendSellOrder): unknown;
    create<I extends {
        amountDenom?: string;
        amount?: number;
        priceDenom?: string;
        price?: number;
        creator?: string;
        port?: string;
        channelID?: string;
        timeoutTimestamp?: number;
    } & {
        amountDenom?: string;
        amount?: number;
        priceDenom?: string;
        price?: number;
        creator?: string;
        port?: string;
        channelID?: string;
        timeoutTimestamp?: number;
    } & { [K in Exclude<keyof I, keyof MsgSendSellOrder>]: never; }>(base?: I): MsgSendSellOrder;
    fromPartial<I_1 extends {
        amountDenom?: string;
        amount?: number;
        priceDenom?: string;
        price?: number;
        creator?: string;
        port?: string;
        channelID?: string;
        timeoutTimestamp?: number;
    } & {
        amountDenom?: string;
        amount?: number;
        priceDenom?: string;
        price?: number;
        creator?: string;
        port?: string;
        channelID?: string;
        timeoutTimestamp?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgSendSellOrder>]: never; }>(object: I_1): MsgSendSellOrder;
};
export declare const MsgSendSellOrderResponse: {
    encode(_: MsgSendSellOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendSellOrderResponse;
    fromJSON(_: any): MsgSendSellOrderResponse;
    toJSON(_: MsgSendSellOrderResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgSendSellOrderResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgSendSellOrderResponse;
};
export declare const MsgSendBuyOrder: {
    encode(message: MsgSendBuyOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendBuyOrder;
    fromJSON(object: any): MsgSendBuyOrder;
    toJSON(message: MsgSendBuyOrder): unknown;
    create<I extends {
        amountDenom?: string;
        amount?: number;
        priceDenom?: string;
        price?: number;
        creator?: string;
        port?: string;
        channelID?: string;
        timeoutTimestamp?: number;
    } & {
        amountDenom?: string;
        amount?: number;
        priceDenom?: string;
        price?: number;
        creator?: string;
        port?: string;
        channelID?: string;
        timeoutTimestamp?: number;
    } & { [K in Exclude<keyof I, keyof MsgSendBuyOrder>]: never; }>(base?: I): MsgSendBuyOrder;
    fromPartial<I_1 extends {
        amountDenom?: string;
        amount?: number;
        priceDenom?: string;
        price?: number;
        creator?: string;
        port?: string;
        channelID?: string;
        timeoutTimestamp?: number;
    } & {
        amountDenom?: string;
        amount?: number;
        priceDenom?: string;
        price?: number;
        creator?: string;
        port?: string;
        channelID?: string;
        timeoutTimestamp?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgSendBuyOrder>]: never; }>(object: I_1): MsgSendBuyOrder;
};
export declare const MsgSendBuyOrderResponse: {
    encode(_: MsgSendBuyOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendBuyOrderResponse;
    fromJSON(_: any): MsgSendBuyOrderResponse;
    toJSON(_: MsgSendBuyOrderResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgSendBuyOrderResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgSendBuyOrderResponse;
};
export declare const MsgCancelSellOrder: {
    encode(message: MsgCancelSellOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSellOrder;
    fromJSON(object: any): MsgCancelSellOrder;
    toJSON(message: MsgCancelSellOrder): unknown;
    create<I extends {
        creator?: string;
        port?: string;
        channel?: string;
        amountDenom?: string;
        priceDenom?: string;
        orderId?: number;
    } & {
        creator?: string;
        port?: string;
        channel?: string;
        amountDenom?: string;
        priceDenom?: string;
        orderId?: number;
    } & { [K in Exclude<keyof I, keyof MsgCancelSellOrder>]: never; }>(base?: I): MsgCancelSellOrder;
    fromPartial<I_1 extends {
        creator?: string;
        port?: string;
        channel?: string;
        amountDenom?: string;
        priceDenom?: string;
        orderId?: number;
    } & {
        creator?: string;
        port?: string;
        channel?: string;
        amountDenom?: string;
        priceDenom?: string;
        orderId?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgCancelSellOrder>]: never; }>(object: I_1): MsgCancelSellOrder;
};
export declare const MsgCancelSellOrderResponse: {
    encode(_: MsgCancelSellOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSellOrderResponse;
    fromJSON(_: any): MsgCancelSellOrderResponse;
    toJSON(_: MsgCancelSellOrderResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgCancelSellOrderResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgCancelSellOrderResponse;
};
export declare const MsgCancelBuyOrder: {
    encode(message: MsgCancelBuyOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelBuyOrder;
    fromJSON(object: any): MsgCancelBuyOrder;
    toJSON(message: MsgCancelBuyOrder): unknown;
    create<I extends {
        creator?: string;
        port?: string;
        channel?: string;
        amountDenom?: string;
        priceDenom?: string;
        orderId?: number;
    } & {
        creator?: string;
        port?: string;
        channel?: string;
        amountDenom?: string;
        priceDenom?: string;
        orderId?: number;
    } & { [K in Exclude<keyof I, keyof MsgCancelBuyOrder>]: never; }>(base?: I): MsgCancelBuyOrder;
    fromPartial<I_1 extends {
        creator?: string;
        port?: string;
        channel?: string;
        amountDenom?: string;
        priceDenom?: string;
        orderId?: number;
    } & {
        creator?: string;
        port?: string;
        channel?: string;
        amountDenom?: string;
        priceDenom?: string;
        orderId?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgCancelBuyOrder>]: never; }>(object: I_1): MsgCancelBuyOrder;
};
export declare const MsgCancelBuyOrderResponse: {
    encode(_: MsgCancelBuyOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelBuyOrderResponse;
    fromJSON(_: any): MsgCancelBuyOrderResponse;
    toJSON(_: MsgCancelBuyOrderResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgCancelBuyOrderResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgCancelBuyOrderResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /**
     * UpdateParams defines a (governance) operation for updating the module
     * parameters. The authority defaults to the x/gov module account.
     */
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    SendCreatePair(request: MsgSendCreatePair): Promise<MsgSendCreatePairResponse>;
    SendSellOrder(request: MsgSendSellOrder): Promise<MsgSendSellOrderResponse>;
    SendBuyOrder(request: MsgSendBuyOrder): Promise<MsgSendBuyOrderResponse>;
    CancelSellOrder(request: MsgCancelSellOrder): Promise<MsgCancelSellOrderResponse>;
    CancelBuyOrder(request: MsgCancelBuyOrder): Promise<MsgCancelBuyOrderResponse>;
}
export declare const MsgServiceName = "dastchain.dex.Msg";
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    SendCreatePair(request: MsgSendCreatePair): Promise<MsgSendCreatePairResponse>;
    SendSellOrder(request: MsgSendSellOrder): Promise<MsgSendSellOrderResponse>;
    SendBuyOrder(request: MsgSendBuyOrder): Promise<MsgSendBuyOrderResponse>;
    CancelSellOrder(request: MsgCancelSellOrder): Promise<MsgCancelSellOrderResponse>;
    CancelBuyOrder(request: MsgCancelBuyOrder): Promise<MsgCancelBuyOrderResponse>;
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
