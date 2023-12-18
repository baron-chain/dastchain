/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { BuyOrderBook } from "./buy_order_book";
import { DenomTrace } from "./denom_trace";
import { Params } from "./params";
import { SellOrderBook } from "./sell_order_book";

export const protobufPackage = "dastchain.dex";

/** GenesisState defines the dex module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params | undefined;
  portId: string;
  sellOrderBookList: SellOrderBook[];
  buyOrderBookList: BuyOrderBook[];
  denomTraceList: DenomTrace[];
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, portId: "", sellOrderBookList: [], buyOrderBookList: [], denomTraceList: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    for (const v of message.sellOrderBookList) {
      SellOrderBook.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.buyOrderBookList) {
      BuyOrderBook.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.denomTraceList) {
      DenomTrace.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.portId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sellOrderBookList.push(SellOrderBook.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.buyOrderBookList.push(BuyOrderBook.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.denomTraceList.push(DenomTrace.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      portId: isSet(object.portId) ? String(object.portId) : "",
      sellOrderBookList: Array.isArray(object?.sellOrderBookList)
        ? object.sellOrderBookList.map((e: any) => SellOrderBook.fromJSON(e))
        : [],
      buyOrderBookList: Array.isArray(object?.buyOrderBookList)
        ? object.buyOrderBookList.map((e: any) => BuyOrderBook.fromJSON(e))
        : [],
      denomTraceList: Array.isArray(object?.denomTraceList)
        ? object.denomTraceList.map((e: any) => DenomTrace.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    if (message.portId !== "") {
      obj.portId = message.portId;
    }
    if (message.sellOrderBookList?.length) {
      obj.sellOrderBookList = message.sellOrderBookList.map((e) => SellOrderBook.toJSON(e));
    }
    if (message.buyOrderBookList?.length) {
      obj.buyOrderBookList = message.buyOrderBookList.map((e) => BuyOrderBook.toJSON(e));
    }
    if (message.denomTraceList?.length) {
      obj.denomTraceList = message.denomTraceList.map((e) => DenomTrace.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.portId = object.portId ?? "";
    message.sellOrderBookList = object.sellOrderBookList?.map((e) => SellOrderBook.fromPartial(e)) || [];
    message.buyOrderBookList = object.buyOrderBookList?.map((e) => BuyOrderBook.fromPartial(e)) || [];
    message.denomTraceList = object.denomTraceList?.map((e) => DenomTrace.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
