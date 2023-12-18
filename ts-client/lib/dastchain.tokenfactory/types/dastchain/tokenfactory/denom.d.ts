import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "dastchain.tokenfactory";
export interface Denom {
    denom: string;
    description: string;
    ticker: string;
    precision: number;
    url: string;
    maxSupply: number;
    supply: number;
    canChangeMaxSupply: boolean;
    owner: string;
}
export declare const Denom: {
    encode(message: Denom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Denom;
    fromJSON(object: any): Denom;
    toJSON(message: Denom): unknown;
    create<I extends {
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
    } & { [K in Exclude<keyof I, keyof Denom>]: never; }>(base?: I): Denom;
    fromPartial<I_1 extends {
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
    } & { [K_1 in Exclude<keyof I_1, keyof Denom>]: never; }>(object: I_1): Denom;
};
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
