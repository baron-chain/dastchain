/* eslint-disable */
import _m0 from "protobufjs/minimal";
export const protobufPackage = "dastchain.dex";
function createBaseSellOrderBook() {
    return { index: "", amountDenom: "", priceDenom: "" };
}
export const SellOrderBook = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSellOrderBook();
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
    fromJSON(object) {
        return {
            index: isSet(object.index) ? String(object.index) : "",
            amountDenom: isSet(object.amountDenom) ? String(object.amountDenom) : "",
            priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
        };
    },
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return SellOrderBook.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSellOrderBook();
        message.index = object.index ?? "";
        message.amountDenom = object.amountDenom ?? "";
        message.priceDenom = object.priceDenom ?? "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
