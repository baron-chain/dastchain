import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "dastchain.dex";
export interface DexPacketData {
    noData?: NoData | undefined;
    createPairPacket?: CreatePairPacketData | undefined;
    sellOrderPacket?: SellOrderPacketData | undefined;
    buyOrderPacket?: BuyOrderPacketData | undefined;
}
export interface NoData {
}
/** CreatePairPacketData defines a struct for the packet payload */
export interface CreatePairPacketData {
    sourceDenom: string;
    targetDenom: string;
}
/** CreatePairPacketAck defines a struct for the packet acknowledgment */
export interface CreatePairPacketAck {
}
/** SellOrderPacketData defines a struct for the packet payload */
export interface SellOrderPacketData {
    amountDenom: string;
    amount: number;
    priceDenom: string;
    price: number;
}
/** SellOrderPacketAck defines a struct for the packet acknowledgment */
export interface SellOrderPacketAck {
    remainingAmount: number;
    gain: number;
}
/** BuyOrderPacketData defines a struct for the packet payload */
export interface BuyOrderPacketData {
    amountDenom: string;
    amount: number;
    priceDenom: string;
    price: number;
}
/** BuyOrderPacketAck defines a struct for the packet acknowledgment */
export interface BuyOrderPacketAck {
    remainingAmount: number;
    purchase: number;
}
export declare const DexPacketData: {
    encode(message: DexPacketData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DexPacketData;
    fromJSON(object: any): DexPacketData;
    toJSON(message: DexPacketData): unknown;
    create<I extends {
        noData?: {};
        createPairPacket?: {
            sourceDenom?: string;
            targetDenom?: string;
        };
        sellOrderPacket?: {
            amountDenom?: string;
            amount?: number;
            priceDenom?: string;
            price?: number;
        };
        buyOrderPacket?: {
            amountDenom?: string;
            amount?: number;
            priceDenom?: string;
            price?: number;
        };
    } & {
        noData?: {} & {} & { [K in Exclude<keyof I["noData"], never>]: never; };
        createPairPacket?: {
            sourceDenom?: string;
            targetDenom?: string;
        } & {
            sourceDenom?: string;
            targetDenom?: string;
        } & { [K_1 in Exclude<keyof I["createPairPacket"], keyof CreatePairPacketData>]: never; };
        sellOrderPacket?: {
            amountDenom?: string;
            amount?: number;
            priceDenom?: string;
            price?: number;
        } & {
            amountDenom?: string;
            amount?: number;
            priceDenom?: string;
            price?: number;
        } & { [K_2 in Exclude<keyof I["sellOrderPacket"], keyof SellOrderPacketData>]: never; };
        buyOrderPacket?: {
            amountDenom?: string;
            amount?: number;
            priceDenom?: string;
            price?: number;
        } & {
            amountDenom?: string;
            amount?: number;
            priceDenom?: string;
            price?: number;
        } & { [K_3 in Exclude<keyof I["buyOrderPacket"], keyof BuyOrderPacketData>]: never; };
    } & { [K_4 in Exclude<keyof I, keyof DexPacketData>]: never; }>(base?: I): DexPacketData;
    fromPartial<I_1 extends {
        noData?: {};
        createPairPacket?: {
            sourceDenom?: string;
            targetDenom?: string;
        };
        sellOrderPacket?: {
            amountDenom?: string;
            amount?: number;
            priceDenom?: string;
            price?: number;
        };
        buyOrderPacket?: {
            amountDenom?: string;
            amount?: number;
            priceDenom?: string;
            price?: number;
        };
    } & {
        noData?: {} & {} & { [K_5 in Exclude<keyof I_1["noData"], never>]: never; };
        createPairPacket?: {
            sourceDenom?: string;
            targetDenom?: string;
        } & {
            sourceDenom?: string;
            targetDenom?: string;
        } & { [K_6 in Exclude<keyof I_1["createPairPacket"], keyof CreatePairPacketData>]: never; };
        sellOrderPacket?: {
            amountDenom?: string;
            amount?: number;
            priceDenom?: string;
            price?: number;
        } & {
            amountDenom?: string;
            amount?: number;
            priceDenom?: string;
            price?: number;
        } & { [K_7 in Exclude<keyof I_1["sellOrderPacket"], keyof SellOrderPacketData>]: never; };
        buyOrderPacket?: {
            amountDenom?: string;
            amount?: number;
            priceDenom?: string;
            price?: number;
        } & {
            amountDenom?: string;
            amount?: number;
            priceDenom?: string;
            price?: number;
        } & { [K_8 in Exclude<keyof I_1["buyOrderPacket"], keyof BuyOrderPacketData>]: never; };
    } & { [K_9 in Exclude<keyof I_1, keyof DexPacketData>]: never; }>(object: I_1): DexPacketData;
};
export declare const NoData: {
    encode(_: NoData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NoData;
    fromJSON(_: any): NoData;
    toJSON(_: NoData): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): NoData;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): NoData;
};
export declare const CreatePairPacketData: {
    encode(message: CreatePairPacketData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreatePairPacketData;
    fromJSON(object: any): CreatePairPacketData;
    toJSON(message: CreatePairPacketData): unknown;
    create<I extends {
        sourceDenom?: string;
        targetDenom?: string;
    } & {
        sourceDenom?: string;
        targetDenom?: string;
    } & { [K in Exclude<keyof I, keyof CreatePairPacketData>]: never; }>(base?: I): CreatePairPacketData;
    fromPartial<I_1 extends {
        sourceDenom?: string;
        targetDenom?: string;
    } & {
        sourceDenom?: string;
        targetDenom?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CreatePairPacketData>]: never; }>(object: I_1): CreatePairPacketData;
};
export declare const CreatePairPacketAck: {
    encode(_: CreatePairPacketAck, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreatePairPacketAck;
    fromJSON(_: any): CreatePairPacketAck;
    toJSON(_: CreatePairPacketAck): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): CreatePairPacketAck;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CreatePairPacketAck;
};
export declare const SellOrderPacketData: {
    encode(message: SellOrderPacketData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SellOrderPacketData;
    fromJSON(object: any): SellOrderPacketData;
    toJSON(message: SellOrderPacketData): unknown;
    create<I extends {
        amountDenom?: string;
        amount?: number;
        priceDenom?: string;
        price?: number;
    } & {
        amountDenom?: string;
        amount?: number;
        priceDenom?: string;
        price?: number;
    } & { [K in Exclude<keyof I, keyof SellOrderPacketData>]: never; }>(base?: I): SellOrderPacketData;
    fromPartial<I_1 extends {
        amountDenom?: string;
        amount?: number;
        priceDenom?: string;
        price?: number;
    } & {
        amountDenom?: string;
        amount?: number;
        priceDenom?: string;
        price?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof SellOrderPacketData>]: never; }>(object: I_1): SellOrderPacketData;
};
export declare const SellOrderPacketAck: {
    encode(message: SellOrderPacketAck, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SellOrderPacketAck;
    fromJSON(object: any): SellOrderPacketAck;
    toJSON(message: SellOrderPacketAck): unknown;
    create<I extends {
        remainingAmount?: number;
        gain?: number;
    } & {
        remainingAmount?: number;
        gain?: number;
    } & { [K in Exclude<keyof I, keyof SellOrderPacketAck>]: never; }>(base?: I): SellOrderPacketAck;
    fromPartial<I_1 extends {
        remainingAmount?: number;
        gain?: number;
    } & {
        remainingAmount?: number;
        gain?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof SellOrderPacketAck>]: never; }>(object: I_1): SellOrderPacketAck;
};
export declare const BuyOrderPacketData: {
    encode(message: BuyOrderPacketData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BuyOrderPacketData;
    fromJSON(object: any): BuyOrderPacketData;
    toJSON(message: BuyOrderPacketData): unknown;
    create<I extends {
        amountDenom?: string;
        amount?: number;
        priceDenom?: string;
        price?: number;
    } & {
        amountDenom?: string;
        amount?: number;
        priceDenom?: string;
        price?: number;
    } & { [K in Exclude<keyof I, keyof BuyOrderPacketData>]: never; }>(base?: I): BuyOrderPacketData;
    fromPartial<I_1 extends {
        amountDenom?: string;
        amount?: number;
        priceDenom?: string;
        price?: number;
    } & {
        amountDenom?: string;
        amount?: number;
        priceDenom?: string;
        price?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof BuyOrderPacketData>]: never; }>(object: I_1): BuyOrderPacketData;
};
export declare const BuyOrderPacketAck: {
    encode(message: BuyOrderPacketAck, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BuyOrderPacketAck;
    fromJSON(object: any): BuyOrderPacketAck;
    toJSON(message: BuyOrderPacketAck): unknown;
    create<I extends {
        remainingAmount?: number;
        purchase?: number;
    } & {
        remainingAmount?: number;
        purchase?: number;
    } & { [K in Exclude<keyof I, keyof BuyOrderPacketAck>]: never; }>(base?: I): BuyOrderPacketAck;
    fromPartial<I_1 extends {
        remainingAmount?: number;
        purchase?: number;
    } & {
        remainingAmount?: number;
        purchase?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof BuyOrderPacketAck>]: never; }>(object: I_1): BuyOrderPacketAck;
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
