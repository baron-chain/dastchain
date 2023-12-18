import _m0 from "protobufjs/minimal";
import { Denom } from "./denom";
import { Params } from "./params";
export declare const protobufPackage = "dastchain.tokenfactory";
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params: Params | undefined;
    denomList: Denom[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    create<I extends {
        params?: {};
        denomList?: {
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
    } & {
        params?: {} & {} & { [K in Exclude<keyof I["params"], never>]: never; };
        denomList?: {
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
        } & { [K_1 in Exclude<keyof I["denomList"][number], keyof Denom>]: never; })[] & { [K_2 in Exclude<keyof I["denomList"], keyof {
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
    } & { [K_3 in Exclude<keyof I, keyof GenesisState>]: never; }>(base?: I): GenesisState;
    fromPartial<I_1 extends {
        params?: {};
        denomList?: {
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
    } & {
        params?: {} & {} & { [K_4 in Exclude<keyof I_1["params"], never>]: never; };
        denomList?: {
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
        } & { [K_5 in Exclude<keyof I_1["denomList"][number], keyof Denom>]: never; })[] & { [K_6 in Exclude<keyof I_1["denomList"], keyof {
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
    } & { [K_7 in Exclude<keyof I_1, keyof GenesisState>]: never; }>(object: I_1): GenesisState;
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
