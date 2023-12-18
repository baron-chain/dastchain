/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
export const protobufPackage = "dastchain.dex";
function createBaseMsgUpdateParams() {
    return { authority: "", params: undefined };
}
export const MsgUpdateParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            authority: isSet(object.authority) ? String(object.authority) : "",
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.authority !== "") {
            obj.authority = message.authority;
        }
        if (message.params !== undefined) {
            obj.params = Params.toJSON(message.params);
        }
        return obj;
    },
    create(base) {
        return MsgUpdateParams.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? "";
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
export const MsgUpdateParamsResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return MsgUpdateParamsResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
};
function createBaseMsgSendCreatePair() {
    return { sourceDenom: "", targetDenom: "", creator: "", port: "", channelID: "", timeoutTimestamp: 0 };
}
export const MsgSendCreatePair = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                    message.timeoutTimestamp = longToNumber(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            port: isSet(object.port) ? String(object.port) : "",
            channelID: isSet(object.channelID) ? String(object.channelID) : "",
            timeoutTimestamp: isSet(object.timeoutTimestamp) ? Number(object.timeoutTimestamp) : 0,
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
    create(base) {
        return MsgSendCreatePair.fromPartial(base ?? {});
    },
    fromPartial(object) {
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
function createBaseMsgSendCreatePairResponse() {
    return {};
}
export const MsgSendCreatePairResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return MsgSendCreatePairResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgSendCreatePairResponse();
        return message;
    },
};
function createBaseMsgSendSellOrder() {
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
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                    message.timeoutTimestamp = longToNumber(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            port: isSet(object.port) ? String(object.port) : "",
            channelID: isSet(object.channelID) ? String(object.channelID) : "",
            timeoutTimestamp: isSet(object.timeoutTimestamp) ? Number(object.timeoutTimestamp) : 0,
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
    create(base) {
        return MsgSendSellOrder.fromPartial(base ?? {});
    },
    fromPartial(object) {
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
function createBaseMsgSendSellOrderResponse() {
    return {};
}
export const MsgSendSellOrderResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return MsgSendSellOrderResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgSendSellOrderResponse();
        return message;
    },
};
function createBaseMsgSendBuyOrder() {
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
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                    message.timeoutTimestamp = longToNumber(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            port: isSet(object.port) ? String(object.port) : "",
            channelID: isSet(object.channelID) ? String(object.channelID) : "",
            timeoutTimestamp: isSet(object.timeoutTimestamp) ? Number(object.timeoutTimestamp) : 0,
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
    create(base) {
        return MsgSendBuyOrder.fromPartial(base ?? {});
    },
    fromPartial(object) {
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
function createBaseMsgSendBuyOrderResponse() {
    return {};
}
export const MsgSendBuyOrderResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return MsgSendBuyOrderResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgSendBuyOrderResponse();
        return message;
    },
};
function createBaseMsgCancelSellOrder() {
    return { creator: "", port: "", channel: "", amountDenom: "", priceDenom: "", orderId: 0 };
}
export const MsgCancelSellOrder = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            creator: isSet(object.creator) ? String(object.creator) : "",
            port: isSet(object.port) ? String(object.port) : "",
            channel: isSet(object.channel) ? String(object.channel) : "",
            amountDenom: isSet(object.amountDenom) ? String(object.amountDenom) : "",
            priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
            orderId: isSet(object.orderId) ? Number(object.orderId) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return MsgCancelSellOrder.fromPartial(base ?? {});
    },
    fromPartial(object) {
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
function createBaseMsgCancelSellOrderResponse() {
    return {};
}
export const MsgCancelSellOrderResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return MsgCancelSellOrderResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgCancelSellOrderResponse();
        return message;
    },
};
function createBaseMsgCancelBuyOrder() {
    return { creator: "", port: "", channel: "", amountDenom: "", priceDenom: "", orderId: 0 };
}
export const MsgCancelBuyOrder = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            creator: isSet(object.creator) ? String(object.creator) : "",
            port: isSet(object.port) ? String(object.port) : "",
            channel: isSet(object.channel) ? String(object.channel) : "",
            amountDenom: isSet(object.amountDenom) ? String(object.amountDenom) : "",
            priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
            orderId: isSet(object.orderId) ? Number(object.orderId) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return MsgCancelBuyOrder.fromPartial(base ?? {});
    },
    fromPartial(object) {
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
function createBaseMsgCancelBuyOrderResponse() {
    return {};
}
export const MsgCancelBuyOrderResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return MsgCancelBuyOrderResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgCancelBuyOrderResponse();
        return message;
    },
};
export const MsgServiceName = "dastchain.dex.Msg";
export class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || MsgServiceName;
        this.rpc = rpc;
        this.UpdateParams = this.UpdateParams.bind(this);
        this.SendCreatePair = this.SendCreatePair.bind(this);
        this.SendSellOrder = this.SendSellOrder.bind(this);
        this.SendBuyOrder = this.SendBuyOrder.bind(this);
        this.CancelSellOrder = this.CancelSellOrder.bind(this);
        this.CancelBuyOrder = this.CancelBuyOrder.bind(this);
    }
    UpdateParams(request) {
        const data = MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateParams", data);
        return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
    }
    SendCreatePair(request) {
        const data = MsgSendCreatePair.encode(request).finish();
        const promise = this.rpc.request(this.service, "SendCreatePair", data);
        return promise.then((data) => MsgSendCreatePairResponse.decode(_m0.Reader.create(data)));
    }
    SendSellOrder(request) {
        const data = MsgSendSellOrder.encode(request).finish();
        const promise = this.rpc.request(this.service, "SendSellOrder", data);
        return promise.then((data) => MsgSendSellOrderResponse.decode(_m0.Reader.create(data)));
    }
    SendBuyOrder(request) {
        const data = MsgSendBuyOrder.encode(request).finish();
        const promise = this.rpc.request(this.service, "SendBuyOrder", data);
        return promise.then((data) => MsgSendBuyOrderResponse.decode(_m0.Reader.create(data)));
    }
    CancelSellOrder(request) {
        const data = MsgCancelSellOrder.encode(request).finish();
        const promise = this.rpc.request(this.service, "CancelSellOrder", data);
        return promise.then((data) => MsgCancelSellOrderResponse.decode(_m0.Reader.create(data)));
    }
    CancelBuyOrder(request) {
        const data = MsgCancelBuyOrder.encode(request).finish();
        const promise = this.rpc.request(this.service, "CancelBuyOrder", data);
        return promise.then((data) => MsgCancelBuyOrderResponse.decode(_m0.Reader.create(data)));
    }
}
const tsProtoGlobalThis = (() => {
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
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
