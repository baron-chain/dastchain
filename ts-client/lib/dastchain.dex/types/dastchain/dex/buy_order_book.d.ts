import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "dastchain.dex";
export interface BuyOrderBook {
    index: string;
    amountDenom: string;
    priceDenom: string;
}
export declare const BuyOrderBook: {
    encode(message: BuyOrderBook, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BuyOrderBook;
    fromJSON(object: any): BuyOrderBook;
    toJSON(message: BuyOrderBook): unknown;
    create<I extends {
        index?: string;
        amountDenom?: string;
        priceDenom?: string;
    } & {
        index?: string;
        amountDenom?: string;
        priceDenom?: string;
    } & { [K in Exclude<keyof I, keyof BuyOrderBook>]: never; }>(base?: I): BuyOrderBook;
    fromPartial<I_1 extends {
        index?: string;
        amountDenom?: string;
        priceDenom?: string;
    } & {
        index?: string;
        amountDenom?: string;
        priceDenom?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof BuyOrderBook>]: never; }>(object: I_1): BuyOrderBook;
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
