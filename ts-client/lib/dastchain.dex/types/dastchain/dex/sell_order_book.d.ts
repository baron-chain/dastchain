import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "dastchain.dex";
export interface SellOrderBook {
    index: string;
    amountDenom: string;
    priceDenom: string;
}
export declare const SellOrderBook: {
    encode(message: SellOrderBook, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SellOrderBook;
    fromJSON(object: any): SellOrderBook;
    toJSON(message: SellOrderBook): unknown;
    create<I extends {
        index?: string;
        amountDenom?: string;
        priceDenom?: string;
    } & {
        index?: string;
        amountDenom?: string;
        priceDenom?: string;
    } & { [K in Exclude<keyof I, keyof SellOrderBook>]: never; }>(base?: I): SellOrderBook;
    fromPartial<I_1 extends {
        index?: string;
        amountDenom?: string;
        priceDenom?: string;
    } & {
        index?: string;
        amountDenom?: string;
        priceDenom?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof SellOrderBook>]: never; }>(object: I_1): SellOrderBook;
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
