/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "dastchain.dex";

export interface BuyOrderBook {
  index: string;
  amountDenom: string;
  priceDenom: string;
}

function createBaseBuyOrderBook(): BuyOrderBook {
  return { index: "", amountDenom: "", priceDenom: "" };
}

export const BuyOrderBook = {
  encode(message: BuyOrderBook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.amountDenom !== "") {
      writer.uint32(18).string(message.amountDenom);
    }
    if (message.priceDenom !== "") {
      writer.uint32(26).string(message.priceDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BuyOrderBook {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuyOrderBook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.index = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amountDenom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.priceDenom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BuyOrderBook {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      amountDenom: isSet(object.amountDenom) ? String(object.amountDenom) : "",
      priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
    };
  },

  toJSON(message: BuyOrderBook): unknown {
    const obj: any = {};
    if (message.index !== "") {
      obj.index = message.index;
    }
    if (message.amountDenom !== "") {
      obj.amountDenom = message.amountDenom;
    }
    if (message.priceDenom !== "") {
      obj.priceDenom = message.priceDenom;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BuyOrderBook>, I>>(base?: I): BuyOrderBook {
    return BuyOrderBook.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BuyOrderBook>, I>>(object: I): BuyOrderBook {
    const message = createBaseBuyOrderBook();
    message.index = object.index ?? "";
    message.amountDenom = object.amountDenom ?? "";
    message.priceDenom = object.priceDenom ?? "";
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
