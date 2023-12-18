import _m0 from "protobufjs/minimal";
import { BuyOrderBook } from "./buy_order_book";
import { DenomTrace } from "./denom_trace";
import { Params } from "./params";
import { SellOrderBook } from "./sell_order_book";
export declare const protobufPackage = "dastchain.dex";
/** GenesisState defines the dex module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params: Params | undefined;
    portId: string;
    sellOrderBookList: SellOrderBook[];
    buyOrderBookList: BuyOrderBook[];
    denomTraceList: DenomTrace[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    create<I extends {
        params?: {};
        portId?: string;
        sellOrderBookList?: {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        }[];
        buyOrderBookList?: {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        }[];
        denomTraceList?: {
            index?: string;
            port?: string;
            channel?: string;
            origin?: string;
        }[];
    } & {
        params?: {} & {} & { [K in Exclude<keyof I["params"], never>]: never; };
        portId?: string;
        sellOrderBookList?: {
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
        } & { [K_1 in Exclude<keyof I["sellOrderBookList"][number], keyof SellOrderBook>]: never; })[] & { [K_2 in Exclude<keyof I["sellOrderBookList"], keyof {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        }[]>]: never; };
        buyOrderBookList?: {
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
        } & { [K_3 in Exclude<keyof I["buyOrderBookList"][number], keyof BuyOrderBook>]: never; })[] & { [K_4 in Exclude<keyof I["buyOrderBookList"], keyof {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        }[]>]: never; };
        denomTraceList?: {
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
        } & { [K_5 in Exclude<keyof I["denomTraceList"][number], keyof DenomTrace>]: never; })[] & { [K_6 in Exclude<keyof I["denomTraceList"], keyof {
            index?: string;
            port?: string;
            channel?: string;
            origin?: string;
        }[]>]: never; };
    } & { [K_7 in Exclude<keyof I, keyof GenesisState>]: never; }>(base?: I): GenesisState;
    fromPartial<I_1 extends {
        params?: {};
        portId?: string;
        sellOrderBookList?: {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        }[];
        buyOrderBookList?: {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        }[];
        denomTraceList?: {
            index?: string;
            port?: string;
            channel?: string;
            origin?: string;
        }[];
    } & {
        params?: {} & {} & { [K_8 in Exclude<keyof I_1["params"], never>]: never; };
        portId?: string;
        sellOrderBookList?: {
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
        } & { [K_9 in Exclude<keyof I_1["sellOrderBookList"][number], keyof SellOrderBook>]: never; })[] & { [K_10 in Exclude<keyof I_1["sellOrderBookList"], keyof {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        }[]>]: never; };
        buyOrderBookList?: {
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
        } & { [K_11 in Exclude<keyof I_1["buyOrderBookList"][number], keyof BuyOrderBook>]: never; })[] & { [K_12 in Exclude<keyof I_1["buyOrderBookList"], keyof {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        }[]>]: never; };
        denomTraceList?: {
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
        } & { [K_13 in Exclude<keyof I_1["denomTraceList"][number], keyof DenomTrace>]: never; })[] & { [K_14 in Exclude<keyof I_1["denomTraceList"], keyof {
            index?: string;
            port?: string;
            channel?: string;
            origin?: string;
        }[]>]: never; };
    } & { [K_15 in Exclude<keyof I_1, keyof GenesisState>]: never; }>(object: I_1): GenesisState;
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
