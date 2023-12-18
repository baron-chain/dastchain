/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "dastchain.tokenfactory";

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

function createBaseDenom(): Denom {
  return {
    denom: "",
    description: "",
    ticker: "",
    precision: 0,
    url: "",
    maxSupply: 0,
    supply: 0,
    canChangeMaxSupply: false,
    owner: "",
  };
}

export const Denom = {
  encode(message: Denom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.ticker !== "") {
      writer.uint32(26).string(message.ticker);
    }
    if (message.precision !== 0) {
      writer.uint32(32).int32(message.precision);
    }
    if (message.url !== "") {
      writer.uint32(42).string(message.url);
    }
    if (message.maxSupply !== 0) {
      writer.uint32(48).int32(message.maxSupply);
    }
    if (message.supply !== 0) {
      writer.uint32(56).int32(message.supply);
    }
    if (message.canChangeMaxSupply === true) {
      writer.uint32(64).bool(message.canChangeMaxSupply);
    }
    if (message.owner !== "") {
      writer.uint32(74).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Denom {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.ticker = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.precision = reader.int32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.url = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.maxSupply = reader.int32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.supply = reader.int32();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.canChangeMaxSupply = reader.bool();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.owner = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Denom {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      description: isSet(object.description) ? String(object.description) : "",
      ticker: isSet(object.ticker) ? String(object.ticker) : "",
      precision: isSet(object.precision) ? Number(object.precision) : 0,
      url: isSet(object.url) ? String(object.url) : "",
      maxSupply: isSet(object.maxSupply) ? Number(object.maxSupply) : 0,
      supply: isSet(object.supply) ? Number(object.supply) : 0,
      canChangeMaxSupply: isSet(object.canChangeMaxSupply) ? Boolean(object.canChangeMaxSupply) : false,
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: Denom): unknown {
    const obj: any = {};
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.ticker !== "") {
      obj.ticker = message.ticker;
    }
    if (message.precision !== 0) {
      obj.precision = Math.round(message.precision);
    }
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.maxSupply !== 0) {
      obj.maxSupply = Math.round(message.maxSupply);
    }
    if (message.supply !== 0) {
      obj.supply = Math.round(message.supply);
    }
    if (message.canChangeMaxSupply === true) {
      obj.canChangeMaxSupply = message.canChangeMaxSupply;
    }
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Denom>, I>>(base?: I): Denom {
    return Denom.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Denom>, I>>(object: I): Denom {
    const message = createBaseDenom();
    message.denom = object.denom ?? "";
    message.description = object.description ?? "";
    message.ticker = object.ticker ?? "";
    message.precision = object.precision ?? 0;
    message.url = object.url ?? "";
    message.maxSupply = object.maxSupply ?? 0;
    message.supply = object.supply ?? 0;
    message.canChangeMaxSupply = object.canChangeMaxSupply ?? false;
    message.owner = object.owner ?? "";
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
