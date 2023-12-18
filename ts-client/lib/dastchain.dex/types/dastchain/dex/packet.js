/* eslint-disable */
import _m0 from "protobufjs/minimal";
export const protobufPackage = "dastchain.dex";
function createBaseDexPacketData() {
    return { noData: undefined, createPairPacket: undefined, sellOrderPacket: undefined, buyOrderPacket: undefined };
}
export const DexPacketData = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            noData: isSet(object.noData) ? NoData.fromJSON(object.noData) : undefined,
            createPairPacket: isSet(object.createPairPacket)
                ? CreatePairPacketData.fromJSON(object.createPairPacket)
                : undefined,
            sellOrderPacket: isSet(object.sellOrderPacket) ? SellOrderPacketData.fromJSON(object.sellOrderPacket) : undefined,
            buyOrderPacket: isSet(object.buyOrderPacket) ? BuyOrderPacketData.fromJSON(object.buyOrderPacket) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return DexPacketData.fromPartial(base ?? {});
    },
    fromPartial(object) {
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
function createBaseNoData() {
    return {};
}
export const NoData = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return NoData.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseNoData();
        return message;
    },
};
function createBaseCreatePairPacketData() {
    return { sourceDenom: "", targetDenom: "" };
}
export const CreatePairPacketData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sourceDenom !== "") {
            writer.uint32(10).string(message.sourceDenom);
        }
        if (message.targetDenom !== "") {
            writer.uint32(18).string(message.targetDenom);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            sourceDenom: isSet(object.sourceDenom) ? String(object.sourceDenom) : "",
            targetDenom: isSet(object.targetDenom) ? String(object.targetDenom) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sourceDenom !== "") {
            obj.sourceDenom = message.sourceDenom;
        }
        if (message.targetDenom !== "") {
            obj.targetDenom = message.targetDenom;
        }
        return obj;
    },
    create(base) {
        return CreatePairPacketData.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreatePairPacketData();
        message.sourceDenom = object.sourceDenom ?? "";
        message.targetDenom = object.targetDenom ?? "";
        return message;
    },
};
function createBaseCreatePairPacketAck() {
    return {};
}
export const CreatePairPacketAck = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return CreatePairPacketAck.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseCreatePairPacketAck();
        return message;
    },
};
function createBaseSellOrderPacketData() {
    return { amountDenom: "", amount: 0, priceDenom: "", price: 0 };
}
export const SellOrderPacketData = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            amountDenom: isSet(object.amountDenom) ? String(object.amountDenom) : "",
            amount: isSet(object.amount) ? Number(object.amount) : 0,
            priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
            price: isSet(object.price) ? Number(object.price) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return SellOrderPacketData.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSellOrderPacketData();
        message.amountDenom = object.amountDenom ?? "";
        message.amount = object.amount ?? 0;
        message.priceDenom = object.priceDenom ?? "";
        message.price = object.price ?? 0;
        return message;
    },
};
function createBaseSellOrderPacketAck() {
    return { remainingAmount: 0, gain: 0 };
}
export const SellOrderPacketAck = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.remainingAmount !== 0) {
            writer.uint32(8).int32(message.remainingAmount);
        }
        if (message.gain !== 0) {
            writer.uint32(16).int32(message.gain);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            remainingAmount: isSet(object.remainingAmount) ? Number(object.remainingAmount) : 0,
            gain: isSet(object.gain) ? Number(object.gain) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.remainingAmount !== 0) {
            obj.remainingAmount = Math.round(message.remainingAmount);
        }
        if (message.gain !== 0) {
            obj.gain = Math.round(message.gain);
        }
        return obj;
    },
    create(base) {
        return SellOrderPacketAck.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSellOrderPacketAck();
        message.remainingAmount = object.remainingAmount ?? 0;
        message.gain = object.gain ?? 0;
        return message;
    },
};
function createBaseBuyOrderPacketData() {
    return { amountDenom: "", amount: 0, priceDenom: "", price: 0 };
}
export const BuyOrderPacketData = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            amountDenom: isSet(object.amountDenom) ? String(object.amountDenom) : "",
            amount: isSet(object.amount) ? Number(object.amount) : 0,
            priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
            price: isSet(object.price) ? Number(object.price) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return BuyOrderPacketData.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseBuyOrderPacketData();
        message.amountDenom = object.amountDenom ?? "";
        message.amount = object.amount ?? 0;
        message.priceDenom = object.priceDenom ?? "";
        message.price = object.price ?? 0;
        return message;
    },
};
function createBaseBuyOrderPacketAck() {
    return { remainingAmount: 0, purchase: 0 };
}
export const BuyOrderPacketAck = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.remainingAmount !== 0) {
            writer.uint32(8).int32(message.remainingAmount);
        }
        if (message.purchase !== 0) {
            writer.uint32(16).int32(message.purchase);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            remainingAmount: isSet(object.remainingAmount) ? Number(object.remainingAmount) : 0,
            purchase: isSet(object.purchase) ? Number(object.purchase) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.remainingAmount !== 0) {
            obj.remainingAmount = Math.round(message.remainingAmount);
        }
        if (message.purchase !== 0) {
            obj.purchase = Math.round(message.purchase);
        }
        return obj;
    },
    create(base) {
        return BuyOrderPacketAck.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseBuyOrderPacketAck();
        message.remainingAmount = object.remainingAmount ?? 0;
        message.purchase = object.purchase ?? 0;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
