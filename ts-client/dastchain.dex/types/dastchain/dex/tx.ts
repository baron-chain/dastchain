/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";

export const protobufPackage = "dastchain.dex";

/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: Params | undefined;
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}

export interface MsgSendCreatePair {
  sourceDenom: string;
  targetDenom: string;
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
}

export interface MsgSendCreatePairResponse {
}

export interface MsgSendSellOrder {
  amountDenom: string;
  amount: number;
  priceDenom: string;
  price: number;
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
}

export interface MsgSendSellOrderResponse {
}

export interface MsgSendBuyOrder {
  amountDenom: string;
  amount: number;
  priceDenom: string;
  price: number;
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
}

export interface MsgSendBuyOrderResponse {
}

export interface MsgCancelSellOrder {
  creator: string;
  port: string;
  channel: string;
  amountDenom: string;
  priceDenom: string;
  orderId: number;
}

export interface MsgCancelSellOrderResponse {
}

export interface MsgCancelBuyOrder {
  creator: string;
  port: string;
  channel: string;
  amountDenom: string;
  priceDenom: string;
  orderId: number;
}

export interface MsgCancelBuyOrderResponse {
}

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(base?: I): MsgUpdateParams {
    return MsgUpdateParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(base?: I): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

function createBaseMsgSendCreatePair(): MsgSendCreatePair {
  return { sourceDenom: "", targetDenom: "", creator: "", port: "", channelID: "", timeoutTimestamp: 0 };
}

export const MsgSendCreatePair = {
  encode(message: MsgSendCreatePair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceDenom !== "") {
      writer.uint32(42).string(message.sourceDenom);
    }
    if (message.targetDenom !== "") {
      writer.uint32(50).string(message.targetDenom);
    }
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendCreatePair {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendCreatePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          if (tag !== 42) {
            break;
          }

          message.sourceDenom = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.targetDenom = reader.string();
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
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

          message.channelID = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSendCreatePair {
    return {
      sourceDenom: isSet(object.sourceDenom) ? String(object.sourceDenom) : "",
      targetDenom: isSet(object.targetDenom) ? String(object.targetDenom) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      port: isSet(object.port) ? String(object.port) : "",
      channelID: isSet(object.channelID) ? String(object.channelID) : "",
      timeoutTimestamp: isSet(object.timeoutTimestamp) ? Number(object.timeoutTimestamp) : 0,
    };
  },

  toJSON(message: MsgSendCreatePair): unknown {
    const obj: any = {};
    if (message.sourceDenom !== "") {
      obj.sourceDenom = message.sourceDenom;
    }
    if (message.targetDenom !== "") {
      obj.targetDenom = message.targetDenom;
    }
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.port !== "") {
      obj.port = message.port;
    }
    if (message.channelID !== "") {
      obj.channelID = message.channelID;
    }
    if (message.timeoutTimestamp !== 0) {
      obj.timeoutTimestamp = Math.round(message.timeoutTimestamp);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSendCreatePair>, I>>(base?: I): MsgSendCreatePair {
    return MsgSendCreatePair.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSendCreatePair>, I>>(object: I): MsgSendCreatePair {
    const message = createBaseMsgSendCreatePair();
    message.sourceDenom = object.sourceDenom ?? "";
    message.targetDenom = object.targetDenom ?? "";
    message.creator = object.creator ?? "";
    message.port = object.port ?? "";
    message.channelID = object.channelID ?? "";
    message.timeoutTimestamp = object.timeoutTimestamp ?? 0;
    return message;
  },
};

function createBaseMsgSendCreatePairResponse(): MsgSendCreatePairResponse {
  return {};
}

export const MsgSendCreatePairResponse = {
  encode(_: MsgSendCreatePairResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendCreatePairResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendCreatePairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSendCreatePairResponse {
    return {};
  },

  toJSON(_: MsgSendCreatePairResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSendCreatePairResponse>, I>>(base?: I): MsgSendCreatePairResponse {
    return MsgSendCreatePairResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSendCreatePairResponse>, I>>(_: I): MsgSendCreatePairResponse {
    const message = createBaseMsgSendCreatePairResponse();
    return message;
  },
};

function createBaseMsgSendSellOrder(): MsgSendSellOrder {
  return {
    amountDenom: "",
    amount: 0,
    priceDenom: "",
    price: 0,
    creator: "",
    port: "",
    channelID: "",
    timeoutTimestamp: 0,
  };
}

export const MsgSendSellOrder = {
  encode(message: MsgSendSellOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amountDenom !== "") {
      writer.uint32(42).string(message.amountDenom);
    }
    if (message.amount !== 0) {
      writer.uint32(48).int32(message.amount);
    }
    if (message.priceDenom !== "") {
      writer.uint32(58).string(message.priceDenom);
    }
    if (message.price !== 0) {
      writer.uint32(64).int32(message.price);
    }
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendSellOrder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendSellOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          if (tag !== 42) {
            break;
          }

          message.amountDenom = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.amount = reader.int32();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.priceDenom = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.price = reader.int32();
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
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

          message.channelID = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSendSellOrder {
    return {
      amountDenom: isSet(object.amountDenom) ? String(object.amountDenom) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
      price: isSet(object.price) ? Number(object.price) : 0,
      creator: isSet(object.creator) ? String(object.creator) : "",
      port: isSet(object.port) ? String(object.port) : "",
      channelID: isSet(object.channelID) ? String(object.channelID) : "",
      timeoutTimestamp: isSet(object.timeoutTimestamp) ? Number(object.timeoutTimestamp) : 0,
    };
  },

  toJSON(message: MsgSendSellOrder): unknown {
    const obj: any = {};
    if (message.amountDenom !== "") {
      obj.amountDenom = message.amountDenom;
    }
    if (message.amount !== 0) {
      obj.amount = Math.round(message.amount);
    }
    if (message.priceDenom !== "") {
      obj.priceDenom = message.priceDenom;
    }
    if (message.price !== 0) {
      obj.price = Math.round(message.price);
    }
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.port !== "") {
      obj.port = message.port;
    }
    if (message.channelID !== "") {
      obj.channelID = message.channelID;
    }
    if (message.timeoutTimestamp !== 0) {
      obj.timeoutTimestamp = Math.round(message.timeoutTimestamp);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSendSellOrder>, I>>(base?: I): MsgSendSellOrder {
    return MsgSendSellOrder.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSendSellOrder>, I>>(object: I): MsgSendSellOrder {
    const message = createBaseMsgSendSellOrder();
    message.amountDenom = object.amountDenom ?? "";
    message.amount = object.amount ?? 0;
    message.priceDenom = object.priceDenom ?? "";
    message.price = object.price ?? 0;
    message.creator = object.creator ?? "";
    message.port = object.port ?? "";
    message.channelID = object.channelID ?? "";
    message.timeoutTimestamp = object.timeoutTimestamp ?? 0;
    return message;
  },
};

function createBaseMsgSendSellOrderResponse(): MsgSendSellOrderResponse {
  return {};
}

export const MsgSendSellOrderResponse = {
  encode(_: MsgSendSellOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendSellOrderResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendSellOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSendSellOrderResponse {
    return {};
  },

  toJSON(_: MsgSendSellOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSendSellOrderResponse>, I>>(base?: I): MsgSendSellOrderResponse {
    return MsgSendSellOrderResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSendSellOrderResponse>, I>>(_: I): MsgSendSellOrderResponse {
    const message = createBaseMsgSendSellOrderResponse();
    return message;
  },
};

function createBaseMsgSendBuyOrder(): MsgSendBuyOrder {
  return {
    amountDenom: "",
    amount: 0,
    priceDenom: "",
    price: 0,
    creator: "",
    port: "",
    channelID: "",
    timeoutTimestamp: 0,
  };
}

export const MsgSendBuyOrder = {
  encode(message: MsgSendBuyOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amountDenom !== "") {
      writer.uint32(42).string(message.amountDenom);
    }
    if (message.amount !== 0) {
      writer.uint32(48).int32(message.amount);
    }
    if (message.priceDenom !== "") {
      writer.uint32(58).string(message.priceDenom);
    }
    if (message.price !== 0) {
      writer.uint32(64).int32(message.price);
    }
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendBuyOrder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendBuyOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          if (tag !== 42) {
            break;
          }

          message.amountDenom = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.amount = reader.int32();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.priceDenom = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.price = reader.int32();
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
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

          message.channelID = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSendBuyOrder {
    return {
      amountDenom: isSet(object.amountDenom) ? String(object.amountDenom) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
      price: isSet(object.price) ? Number(object.price) : 0,
      creator: isSet(object.creator) ? String(object.creator) : "",
      port: isSet(object.port) ? String(object.port) : "",
      channelID: isSet(object.channelID) ? String(object.channelID) : "",
      timeoutTimestamp: isSet(object.timeoutTimestamp) ? Number(object.timeoutTimestamp) : 0,
    };
  },

  toJSON(message: MsgSendBuyOrder): unknown {
    const obj: any = {};
    if (message.amountDenom !== "") {
      obj.amountDenom = message.amountDenom;
    }
    if (message.amount !== 0) {
      obj.amount = Math.round(message.amount);
    }
    if (message.priceDenom !== "") {
      obj.priceDenom = message.priceDenom;
    }
    if (message.price !== 0) {
      obj.price = Math.round(message.price);
    }
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.port !== "") {
      obj.port = message.port;
    }
    if (message.channelID !== "") {
      obj.channelID = message.channelID;
    }
    if (message.timeoutTimestamp !== 0) {
      obj.timeoutTimestamp = Math.round(message.timeoutTimestamp);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSendBuyOrder>, I>>(base?: I): MsgSendBuyOrder {
    return MsgSendBuyOrder.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSendBuyOrder>, I>>(object: I): MsgSendBuyOrder {
    const message = createBaseMsgSendBuyOrder();
    message.amountDenom = object.amountDenom ?? "";
    message.amount = object.amount ?? 0;
    message.priceDenom = object.priceDenom ?? "";
    message.price = object.price ?? 0;
    message.creator = object.creator ?? "";
    message.port = object.port ?? "";
    message.channelID = object.channelID ?? "";
    message.timeoutTimestamp = object.timeoutTimestamp ?? 0;
    return message;
  },
};

function createBaseMsgSendBuyOrderResponse(): MsgSendBuyOrderResponse {
  return {};
}

export const MsgSendBuyOrderResponse = {
  encode(_: MsgSendBuyOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendBuyOrderResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendBuyOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSendBuyOrderResponse {
    return {};
  },

  toJSON(_: MsgSendBuyOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSendBuyOrderResponse>, I>>(base?: I): MsgSendBuyOrderResponse {
    return MsgSendBuyOrderResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSendBuyOrderResponse>, I>>(_: I): MsgSendBuyOrderResponse {
    const message = createBaseMsgSendBuyOrderResponse();
    return message;
  },
};

function createBaseMsgCancelSellOrder(): MsgCancelSellOrder {
  return { creator: "", port: "", channel: "", amountDenom: "", priceDenom: "", orderId: 0 };
}

export const MsgCancelSellOrder = {
  encode(message: MsgCancelSellOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channel !== "") {
      writer.uint32(26).string(message.channel);
    }
    if (message.amountDenom !== "") {
      writer.uint32(34).string(message.amountDenom);
    }
    if (message.priceDenom !== "") {
      writer.uint32(42).string(message.priceDenom);
    }
    if (message.orderId !== 0) {
      writer.uint32(48).int32(message.orderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSellOrder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSellOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
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

          message.amountDenom = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.priceDenom = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.orderId = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCancelSellOrder {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      port: isSet(object.port) ? String(object.port) : "",
      channel: isSet(object.channel) ? String(object.channel) : "",
      amountDenom: isSet(object.amountDenom) ? String(object.amountDenom) : "",
      priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
      orderId: isSet(object.orderId) ? Number(object.orderId) : 0,
    };
  },

  toJSON(message: MsgCancelSellOrder): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.port !== "") {
      obj.port = message.port;
    }
    if (message.channel !== "") {
      obj.channel = message.channel;
    }
    if (message.amountDenom !== "") {
      obj.amountDenom = message.amountDenom;
    }
    if (message.priceDenom !== "") {
      obj.priceDenom = message.priceDenom;
    }
    if (message.orderId !== 0) {
      obj.orderId = Math.round(message.orderId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCancelSellOrder>, I>>(base?: I): MsgCancelSellOrder {
    return MsgCancelSellOrder.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelSellOrder>, I>>(object: I): MsgCancelSellOrder {
    const message = createBaseMsgCancelSellOrder();
    message.creator = object.creator ?? "";
    message.port = object.port ?? "";
    message.channel = object.channel ?? "";
    message.amountDenom = object.amountDenom ?? "";
    message.priceDenom = object.priceDenom ?? "";
    message.orderId = object.orderId ?? 0;
    return message;
  },
};

function createBaseMsgCancelSellOrderResponse(): MsgCancelSellOrderResponse {
  return {};
}

export const MsgCancelSellOrderResponse = {
  encode(_: MsgCancelSellOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSellOrderResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSellOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgCancelSellOrderResponse {
    return {};
  },

  toJSON(_: MsgCancelSellOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCancelSellOrderResponse>, I>>(base?: I): MsgCancelSellOrderResponse {
    return MsgCancelSellOrderResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelSellOrderResponse>, I>>(_: I): MsgCancelSellOrderResponse {
    const message = createBaseMsgCancelSellOrderResponse();
    return message;
  },
};

function createBaseMsgCancelBuyOrder(): MsgCancelBuyOrder {
  return { creator: "", port: "", channel: "", amountDenom: "", priceDenom: "", orderId: 0 };
}

export const MsgCancelBuyOrder = {
  encode(message: MsgCancelBuyOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channel !== "") {
      writer.uint32(26).string(message.channel);
    }
    if (message.amountDenom !== "") {
      writer.uint32(34).string(message.amountDenom);
    }
    if (message.priceDenom !== "") {
      writer.uint32(42).string(message.priceDenom);
    }
    if (message.orderId !== 0) {
      writer.uint32(48).int32(message.orderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelBuyOrder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelBuyOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
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

          message.amountDenom = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.priceDenom = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.orderId = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCancelBuyOrder {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      port: isSet(object.port) ? String(object.port) : "",
      channel: isSet(object.channel) ? String(object.channel) : "",
      amountDenom: isSet(object.amountDenom) ? String(object.amountDenom) : "",
      priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
      orderId: isSet(object.orderId) ? Number(object.orderId) : 0,
    };
  },

  toJSON(message: MsgCancelBuyOrder): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.port !== "") {
      obj.port = message.port;
    }
    if (message.channel !== "") {
      obj.channel = message.channel;
    }
    if (message.amountDenom !== "") {
      obj.amountDenom = message.amountDenom;
    }
    if (message.priceDenom !== "") {
      obj.priceDenom = message.priceDenom;
    }
    if (message.orderId !== 0) {
      obj.orderId = Math.round(message.orderId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCancelBuyOrder>, I>>(base?: I): MsgCancelBuyOrder {
    return MsgCancelBuyOrder.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelBuyOrder>, I>>(object: I): MsgCancelBuyOrder {
    const message = createBaseMsgCancelBuyOrder();
    message.creator = object.creator ?? "";
    message.port = object.port ?? "";
    message.channel = object.channel ?? "";
    message.amountDenom = object.amountDenom ?? "";
    message.priceDenom = object.priceDenom ?? "";
    message.orderId = object.orderId ?? 0;
    return message;
  },
};

function createBaseMsgCancelBuyOrderResponse(): MsgCancelBuyOrderResponse {
  return {};
}

export const MsgCancelBuyOrderResponse = {
  encode(_: MsgCancelBuyOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelBuyOrderResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelBuyOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgCancelBuyOrderResponse {
    return {};
  },

  toJSON(_: MsgCancelBuyOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCancelBuyOrderResponse>, I>>(base?: I): MsgCancelBuyOrderResponse {
    return MsgCancelBuyOrderResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelBuyOrderResponse>, I>>(_: I): MsgCancelBuyOrderResponse {
    const message = createBaseMsgCancelBuyOrderResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  SendCreatePair(request: MsgSendCreatePair): Promise<MsgSendCreatePairResponse>;
  SendSellOrder(request: MsgSendSellOrder): Promise<MsgSendSellOrderResponse>;
  SendBuyOrder(request: MsgSendBuyOrder): Promise<MsgSendBuyOrderResponse>;
  CancelSellOrder(request: MsgCancelSellOrder): Promise<MsgCancelSellOrderResponse>;
  CancelBuyOrder(request: MsgCancelBuyOrder): Promise<MsgCancelBuyOrderResponse>;
}

export const MsgServiceName = "dastchain.dex.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.SendCreatePair = this.SendCreatePair.bind(this);
    this.SendSellOrder = this.SendSellOrder.bind(this);
    this.SendBuyOrder = this.SendBuyOrder.bind(this);
    this.CancelSellOrder = this.CancelSellOrder.bind(this);
    this.CancelBuyOrder = this.CancelBuyOrder.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
  }

  SendCreatePair(request: MsgSendCreatePair): Promise<MsgSendCreatePairResponse> {
    const data = MsgSendCreatePair.encode(request).finish();
    const promise = this.rpc.request(this.service, "SendCreatePair", data);
    return promise.then((data) => MsgSendCreatePairResponse.decode(_m0.Reader.create(data)));
  }

  SendSellOrder(request: MsgSendSellOrder): Promise<MsgSendSellOrderResponse> {
    const data = MsgSendSellOrder.encode(request).finish();
    const promise = this.rpc.request(this.service, "SendSellOrder", data);
    return promise.then((data) => MsgSendSellOrderResponse.decode(_m0.Reader.create(data)));
  }

  SendBuyOrder(request: MsgSendBuyOrder): Promise<MsgSendBuyOrderResponse> {
    const data = MsgSendBuyOrder.encode(request).finish();
    const promise = this.rpc.request(this.service, "SendBuyOrder", data);
    return promise.then((data) => MsgSendBuyOrderResponse.decode(_m0.Reader.create(data)));
  }

  CancelSellOrder(request: MsgCancelSellOrder): Promise<MsgCancelSellOrderResponse> {
    const data = MsgCancelSellOrder.encode(request).finish();
    const promise = this.rpc.request(this.service, "CancelSellOrder", data);
    return promise.then((data) => MsgCancelSellOrderResponse.decode(_m0.Reader.create(data)));
  }

  CancelBuyOrder(request: MsgCancelBuyOrder): Promise<MsgCancelBuyOrderResponse> {
    const data = MsgCancelBuyOrder.encode(request).finish();
    const promise = this.rpc.request(this.service, "CancelBuyOrder", data);
    return promise.then((data) => MsgCancelBuyOrderResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
