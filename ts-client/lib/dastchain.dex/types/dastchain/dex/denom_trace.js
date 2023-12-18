/* eslint-disable */
import _m0 from "protobufjs/minimal";
export const protobufPackage = "dastchain.dex";
function createBaseDenomTrace() {
    return { index: "", port: "", channel: "", origin: "" };
}
export const DenomTrace = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            index: isSet(object.index) ? String(object.index) : "",
            port: isSet(object.port) ? String(object.port) : "",
            channel: isSet(object.channel) ? String(object.channel) : "",
            origin: isSet(object.origin) ? String(object.origin) : "",
        };
    },
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return DenomTrace.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDenomTrace();
        message.index = object.index ?? "";
        message.port = object.port ?? "";
        message.channel = object.channel ?? "";
        message.origin = object.origin ?? "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
