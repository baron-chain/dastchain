import _m0 from "protobufjs/minimal";
import { Params } from "./params";
export declare const protobufPackage = "dastchain.tokenfactory";
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
export interface MsgCreateDenom {
    owner: string;
    denom: string;
    description: string;
    ticker: string;
    precision: number;
    url: string;
    maxSupply: number;
    canChangeMaxSupply: boolean;
}
export interface MsgCreateDenomResponse {
}
export interface MsgUpdateDenom {
    owner: string;
    denom: string;
    description: string;
    url: string;
    maxSupply: number;
    canChangeMaxSupply: boolean;
}
export interface MsgUpdateDenomResponse {
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
export declare const MsgCreateDenom: {
    encode(message: MsgCreateDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenom;
    fromJSON(object: any): MsgCreateDenom;
    toJSON(message: MsgCreateDenom): unknown;
    create<I extends {
        owner?: string;
        denom?: string;
        description?: string;
        ticker?: string;
        precision?: number;
        url?: string;
        maxSupply?: number;
        canChangeMaxSupply?: boolean;
    } & {
        owner?: string;
        denom?: string;
        description?: string;
        ticker?: string;
        precision?: number;
        url?: string;
        maxSupply?: number;
        canChangeMaxSupply?: boolean;
    } & { [K in Exclude<keyof I, keyof MsgCreateDenom>]: never; }>(base?: I): MsgCreateDenom;
    fromPartial<I_1 extends {
        owner?: string;
        denom?: string;
        description?: string;
        ticker?: string;
        precision?: number;
        url?: string;
        maxSupply?: number;
        canChangeMaxSupply?: boolean;
    } & {
        owner?: string;
        denom?: string;
        description?: string;
        ticker?: string;
        precision?: number;
        url?: string;
        maxSupply?: number;
        canChangeMaxSupply?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgCreateDenom>]: never; }>(object: I_1): MsgCreateDenom;
};
export declare const MsgCreateDenomResponse: {
    encode(_: MsgCreateDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenomResponse;
    fromJSON(_: any): MsgCreateDenomResponse;
    toJSON(_: MsgCreateDenomResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgCreateDenomResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgCreateDenomResponse;
};
export declare const MsgUpdateDenom: {
    encode(message: MsgUpdateDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDenom;
    fromJSON(object: any): MsgUpdateDenom;
    toJSON(message: MsgUpdateDenom): unknown;
    create<I extends {
        owner?: string;
        denom?: string;
        description?: string;
        url?: string;
        maxSupply?: number;
        canChangeMaxSupply?: boolean;
    } & {
        owner?: string;
        denom?: string;
        description?: string;
        url?: string;
        maxSupply?: number;
        canChangeMaxSupply?: boolean;
    } & { [K in Exclude<keyof I, keyof MsgUpdateDenom>]: never; }>(base?: I): MsgUpdateDenom;
    fromPartial<I_1 extends {
        owner?: string;
        denom?: string;
        description?: string;
        url?: string;
        maxSupply?: number;
        canChangeMaxSupply?: boolean;
    } & {
        owner?: string;
        denom?: string;
        description?: string;
        url?: string;
        maxSupply?: number;
        canChangeMaxSupply?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgUpdateDenom>]: never; }>(object: I_1): MsgUpdateDenom;
};
export declare const MsgUpdateDenomResponse: {
    encode(_: MsgUpdateDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDenomResponse;
    fromJSON(_: any): MsgUpdateDenomResponse;
    toJSON(_: MsgUpdateDenomResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgUpdateDenomResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgUpdateDenomResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /**
     * UpdateParams defines a (governance) operation for updating the module
     * parameters. The authority defaults to the x/gov module account.
     */
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    CreateDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
    UpdateDenom(request: MsgUpdateDenom): Promise<MsgUpdateDenomResponse>;
}
export declare const MsgServiceName = "dastchain.tokenfactory.Msg";
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    CreateDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
    UpdateDenom(request: MsgUpdateDenom): Promise<MsgUpdateDenomResponse>;
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
