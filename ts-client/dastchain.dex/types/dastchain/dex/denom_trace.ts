/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "dastchain.dex";

export interface DenomTrace {
  index: string;
  port: string;
  channel: string;
  origin: string;
}

function createBaseDenomTrace(): DenomTrace {
  return { index: "", port: "", channel: "", origin: "" };
}

export const DenomTrace = {
  encode(message: DenomTrace, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channel !== "") {
      writer.uint32(26).string(message.channel);
    }
    if (message.origin !== "") {
      writer.uint32(34).string(message.origin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DenomTrace {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomTrace();
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

          message.port = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.channel = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.origin = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DenomTrace {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      port: isSet(object.port) ? String(object.port) : "",
      channel: isSet(object.channel) ? String(object.channel) : "",
      origin: isSet(object.origin) ? String(object.origin) : "",
    };
  },

  toJSON(message: DenomTrace): unknown {
    const obj: any = {};
    if (message.index !== "") {
      obj.index = message.index;
    }
    if (message.port !== "") {
      obj.port = message.port;
    }
    if (message.channel !== "") {
      obj.channel = message.channel;
    }
    if (message.origin !== "") {
      obj.origin = message.origin;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DenomTrace>, I>>(base?: I): DenomTrace {
    return DenomTrace.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DenomTrace>, I>>(object: I): DenomTrace {
    const message = createBaseDenomTrace();
    message.index = object.index ?? "";
    message.port = object.port ?? "";
    message.channel = object.channel ?? "";
    message.origin = object.origin ?? "";
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
