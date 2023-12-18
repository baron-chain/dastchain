/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "dastchain.dex";

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

function createBaseDexPacketData(): DexPacketData {
  return { noData: undefined, createPairPacket: undefined, sellOrderPacket: undefined, buyOrderPacket: undefined };
}

export const DexPacketData = {
  encode(message: DexPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    if (message.createPairPacket !== undefined) {
      CreatePairPacketData.encode(message.createPairPacket, writer.uint32(18).fork()).ldelim();
    }
    if (message.sellOrderPacket !== undefined) {
      SellOrderPacketData.encode(message.sellOrderPacket, writer.uint32(26).fork()).ldelim();
    }
    if (message.buyOrderPacket !== undefined) {
      BuyOrderPacketData.encode(message.buyOrderPacket, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DexPacketData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDexPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.noData = NoData.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.createPairPacket = CreatePairPacketData.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sellOrderPacket = SellOrderPacketData.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.buyOrderPacket = BuyOrderPacketData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DexPacketData {
    return {
      noData: isSet(object.noData) ? NoData.fromJSON(object.noData) : undefined,
      createPairPacket: isSet(object.createPairPacket)
        ? CreatePairPacketData.fromJSON(object.createPairPacket)
        : undefined,
      sellOrderPacket: isSet(object.sellOrderPacket) ? SellOrderPacketData.fromJSON(object.sellOrderPacket) : undefined,
      buyOrderPacket: isSet(object.buyOrderPacket) ? BuyOrderPacketData.fromJSON(object.buyOrderPacket) : undefined,
    };
  },

  toJSON(message: DexPacketData): unknown {
    const obj: any = {};
    if (message.noData !== undefined) {
      obj.noData = NoData.toJSON(message.noData);
    }
    if (message.createPairPacket !== undefined) {
      obj.createPairPacket = CreatePairPacketData.toJSON(message.createPairPacket);
    }
    if (message.sellOrderPacket !== undefined) {
      obj.sellOrderPacket = SellOrderPacketData.toJSON(message.sellOrderPacket);
    }
    if (message.buyOrderPacket !== undefined) {
      obj.buyOrderPacket = BuyOrderPacketData.toJSON(message.buyOrderPacket);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DexPacketData>, I>>(base?: I): DexPacketData {
    return DexPacketData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DexPacketData>, I>>(object: I): DexPacketData {
    const message = createBaseDexPacketData();
    message.noData = (object.noData !== undefined && object.noData !== null)
      ? NoData.fromPartial(object.noData)
      : undefined;
    message.createPairPacket = (object.createPairPacket !== undefined && object.createPairPacket !== null)
      ? CreatePairPacketData.fromPartial(object.createPairPacket)
      : undefined;
    message.sellOrderPacket = (object.sellOrderPacket !== undefined && object.sellOrderPacket !== null)
      ? SellOrderPacketData.fromPartial(object.sellOrderPacket)
      : undefined;
    message.buyOrderPacket = (object.buyOrderPacket !== undefined && object.buyOrderPacket !== null)
      ? BuyOrderPacketData.fromPartial(object.buyOrderPacket)
      : undefined;
    return message;
  },
};

function createBaseNoData(): NoData {
  return {};
}

export const NoData = {
  encode(_: NoData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NoData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNoData();
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

  fromJSON(_: any): NoData {
    return {};
  },

  toJSON(_: NoData): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<NoData>, I>>(base?: I): NoData {
    return NoData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NoData>, I>>(_: I): NoData {
    const message = createBaseNoData();
    return message;
  },
};

function createBaseCreatePairPacketData(): CreatePairPacketData {
  return { sourceDenom: "", targetDenom: "" };
}

export const CreatePairPacketData = {
  encode(message: CreatePairPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceDenom !== "") {
      writer.uint32(10).string(message.sourceDenom);
    }
    if (message.targetDenom !== "") {
      writer.uint32(18).string(message.targetDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePairPacketData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePairPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sourceDenom = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.targetDenom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreatePairPacketData {
    return {
      sourceDenom: isSet(object.sourceDenom) ? String(object.sourceDenom) : "",
      targetDenom: isSet(object.targetDenom) ? String(object.targetDenom) : "",
    };
  },

  toJSON(message: CreatePairPacketData): unknown {
    const obj: any = {};
    if (message.sourceDenom !== "") {
      obj.sourceDenom = message.sourceDenom;
    }
    if (message.targetDenom !== "") {
      obj.targetDenom = message.targetDenom;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreatePairPacketData>, I>>(base?: I): CreatePairPacketData {
    return CreatePairPacketData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreatePairPacketData>, I>>(object: I): CreatePairPacketData {
    const message = createBaseCreatePairPacketData();
    message.sourceDenom = object.sourceDenom ?? "";
    message.targetDenom = object.targetDenom ?? "";
    return message;
  },
};

function createBaseCreatePairPacketAck(): CreatePairPacketAck {
  return {};
}

export const CreatePairPacketAck = {
  encode(_: CreatePairPacketAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePairPacketAck {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePairPacketAck();
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

  fromJSON(_: any): CreatePairPacketAck {
    return {};
  },

  toJSON(_: CreatePairPacketAck): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CreatePairPacketAck>, I>>(base?: I): CreatePairPacketAck {
    return CreatePairPacketAck.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreatePairPacketAck>, I>>(_: I): CreatePairPacketAck {
    const message = createBaseCreatePairPacketAck();
    return message;
  },
};

function createBaseSellOrderPacketData(): SellOrderPacketData {
  return { amountDenom: "", amount: 0, priceDenom: "", price: 0 };
}

export const SellOrderPacketData = {
  encode(message: SellOrderPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amountDenom !== "") {
      writer.uint32(10).string(message.amountDenom);
    }
    if (message.amount !== 0) {
      writer.uint32(16).int32(message.amount);
    }
    if (message.priceDenom !== "") {
      writer.uint32(26).string(message.priceDenom);
    }
    if (message.price !== 0) {
      writer.uint32(32).int32(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SellOrderPacketData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSellOrderPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.amountDenom = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.amount = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.priceDenom = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.price = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SellOrderPacketData {
    return {
      amountDenom: isSet(object.amountDenom) ? String(object.amountDenom) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
      price: isSet(object.price) ? Number(object.price) : 0,
    };
  },

  toJSON(message: SellOrderPacketData): unknown {
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
    return obj;
  },

  create<I extends Exact<DeepPartial<SellOrderPacketData>, I>>(base?: I): SellOrderPacketData {
    return SellOrderPacketData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SellOrderPacketData>, I>>(object: I): SellOrderPacketData {
    const message = createBaseSellOrderPacketData();
    message.amountDenom = object.amountDenom ?? "";
    message.amount = object.amount ?? 0;
    message.priceDenom = object.priceDenom ?? "";
    message.price = object.price ?? 0;
    return message;
  },
};

function createBaseSellOrderPacketAck(): SellOrderPacketAck {
  return { remainingAmount: 0, gain: 0 };
}

export const SellOrderPacketAck = {
  encode(message: SellOrderPacketAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.remainingAmount !== 0) {
      writer.uint32(8).int32(message.remainingAmount);
    }
    if (message.gain !== 0) {
      writer.uint32(16).int32(message.gain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SellOrderPacketAck {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSellOrderPacketAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.remainingAmount = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.gain = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SellOrderPacketAck {
    return {
      remainingAmount: isSet(object.remainingAmount) ? Number(object.remainingAmount) : 0,
      gain: isSet(object.gain) ? Number(object.gain) : 0,
    };
  },

  toJSON(message: SellOrderPacketAck): unknown {
    const obj: any = {};
    if (message.remainingAmount !== 0) {
      obj.remainingAmount = Math.round(message.remainingAmount);
    }
    if (message.gain !== 0) {
      obj.gain = Math.round(message.gain);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SellOrderPacketAck>, I>>(base?: I): SellOrderPacketAck {
    return SellOrderPacketAck.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SellOrderPacketAck>, I>>(object: I): SellOrderPacketAck {
    const message = createBaseSellOrderPacketAck();
    message.remainingAmount = object.remainingAmount ?? 0;
    message.gain = object.gain ?? 0;
    return message;
  },
};

function createBaseBuyOrderPacketData(): BuyOrderPacketData {
  return { amountDenom: "", amount: 0, priceDenom: "", price: 0 };
}

export const BuyOrderPacketData = {
  encode(message: BuyOrderPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amountDenom !== "") {
      writer.uint32(10).string(message.amountDenom);
    }
    if (message.amount !== 0) {
      writer.uint32(16).int32(message.amount);
    }
    if (message.priceDenom !== "") {
      writer.uint32(26).string(message.priceDenom);
    }
    if (message.price !== 0) {
      writer.uint32(32).int32(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BuyOrderPacketData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuyOrderPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.amountDenom = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.amount = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.priceDenom = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.price = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BuyOrderPacketData {
    return {
      amountDenom: isSet(object.amountDenom) ? String(object.amountDenom) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
      price: isSet(object.price) ? Number(object.price) : 0,
    };
  },

  toJSON(message: BuyOrderPacketData): unknown {
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
    return obj;
  },

  create<I extends Exact<DeepPartial<BuyOrderPacketData>, I>>(base?: I): BuyOrderPacketData {
    return BuyOrderPacketData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BuyOrderPacketData>, I>>(object: I): BuyOrderPacketData {
    const message = createBaseBuyOrderPacketData();
    message.amountDenom = object.amountDenom ?? "";
    message.amount = object.amount ?? 0;
    message.priceDenom = object.priceDenom ?? "";
    message.price = object.price ?? 0;
    return message;
  },
};

function createBaseBuyOrderPacketAck(): BuyOrderPacketAck {
  return { remainingAmount: 0, purchase: 0 };
}

export const BuyOrderPacketAck = {
  encode(message: BuyOrderPacketAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.remainingAmount !== 0) {
      writer.uint32(8).int32(message.remainingAmount);
    }
    if (message.purchase !== 0) {
      writer.uint32(16).int32(message.purchase);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BuyOrderPacketAck {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuyOrderPacketAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.remainingAmount = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.purchase = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BuyOrderPacketAck {
    return {
      remainingAmount: isSet(object.remainingAmount) ? Number(object.remainingAmount) : 0,
      purchase: isSet(object.purchase) ? Number(object.purchase) : 0,
    };
  },

  toJSON(message: BuyOrderPacketAck): unknown {
    const obj: any = {};
    if (message.remainingAmount !== 0) {
      obj.remainingAmount = Math.round(message.remainingAmount);
    }
    if (message.purchase !== 0) {
      obj.purchase = Math.round(message.purchase);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BuyOrderPacketAck>, I>>(base?: I): BuyOrderPacketAck {
    return BuyOrderPacketAck.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BuyOrderPacketAck>, I>>(object: I): BuyOrderPacketAck {
    const message = createBaseBuyOrderPacketAck();
    message.remainingAmount = object.remainingAmount ?? 0;
    message.purchase = object.purchase ?? 0;
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
