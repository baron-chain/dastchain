/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { IdentifiedChannel, PacketState } from "./channel";
export const protobufPackage = "ibc.core.channel.v1";
function createBaseGenesisState() {
    return {
        channels: [],
        acknowledgements: [],
        commitments: [],
        receipts: [],
        sendSequences: [],
        recvSequences: [],
        ackSequences: [],
        nextChannelSequence: 0,
    };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.channels) {
            IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.acknowledgements) {
            PacketState.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.commitments) {
            PacketState.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.receipts) {
            PacketState.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.sendSequences) {
            PacketSequence.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.recvSequences) {
            PacketSequence.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.ackSequences) {
            PacketSequence.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.nextChannelSequence !== 0) {
            writer.uint32(64).uint64(message.nextChannelSequence);
        }
        return writer;
    },
    decode(input, length) {
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
                    message.channels.push(IdentifiedChannel.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.acknowledgements.push(PacketState.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.commitments.push(PacketState.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.receipts.push(PacketState.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.sendSequences.push(PacketSequence.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.recvSequences.push(PacketSequence.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.ackSequences.push(PacketSequence.decode(reader, reader.uint32()));
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.nextChannelSequence = longToNumber(reader.uint64());
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
            channels: Array.isArray(object?.channels) ? object.channels.map((e) => IdentifiedChannel.fromJSON(e)) : [],
            acknowledgements: Array.isArray(object?.acknowledgements)
                ? object.acknowledgements.map((e) => PacketState.fromJSON(e))
                : [],
            commitments: Array.isArray(object?.commitments)
                ? object.commitments.map((e) => PacketState.fromJSON(e))
                : [],
            receipts: Array.isArray(object?.receipts) ? object.receipts.map((e) => PacketState.fromJSON(e)) : [],
            sendSequences: Array.isArray(object?.sendSequences)
                ? object.sendSequences.map((e) => PacketSequence.fromJSON(e))
                : [],
            recvSequences: Array.isArray(object?.recvSequences)
                ? object.recvSequences.map((e) => PacketSequence.fromJSON(e))
                : [],
            ackSequences: Array.isArray(object?.ackSequences)
                ? object.ackSequences.map((e) => PacketSequence.fromJSON(e))
                : [],
            nextChannelSequence: isSet(object.nextChannelSequence) ? Number(object.nextChannelSequence) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.channels?.length) {
            obj.channels = message.channels.map((e) => IdentifiedChannel.toJSON(e));
        }
        if (message.acknowledgements?.length) {
            obj.acknowledgements = message.acknowledgements.map((e) => PacketState.toJSON(e));
        }
        if (message.commitments?.length) {
            obj.commitments = message.commitments.map((e) => PacketState.toJSON(e));
        }
        if (message.receipts?.length) {
            obj.receipts = message.receipts.map((e) => PacketState.toJSON(e));
        }
        if (message.sendSequences?.length) {
            obj.sendSequences = message.sendSequences.map((e) => PacketSequence.toJSON(e));
        }
        if (message.recvSequences?.length) {
            obj.recvSequences = message.recvSequences.map((e) => PacketSequence.toJSON(e));
        }
        if (message.ackSequences?.length) {
            obj.ackSequences = message.ackSequences.map((e) => PacketSequence.toJSON(e));
        }
        if (message.nextChannelSequence !== 0) {
            obj.nextChannelSequence = Math.round(message.nextChannelSequence);
        }
        return obj;
    },
    create(base) {
        return GenesisState.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.channels = object.channels?.map((e) => IdentifiedChannel.fromPartial(e)) || [];
        message.acknowledgements = object.acknowledgements?.map((e) => PacketState.fromPartial(e)) || [];
        message.commitments = object.commitments?.map((e) => PacketState.fromPartial(e)) || [];
        message.receipts = object.receipts?.map((e) => PacketState.fromPartial(e)) || [];
        message.sendSequences = object.sendSequences?.map((e) => PacketSequence.fromPartial(e)) || [];
        message.recvSequences = object.recvSequences?.map((e) => PacketSequence.fromPartial(e)) || [];
        message.ackSequences = object.ackSequences?.map((e) => PacketSequence.fromPartial(e)) || [];
        message.nextChannelSequence = object.nextChannelSequence ?? 0;
        return message;
    },
};
function createBasePacketSequence() {
    return { portId: "", channelId: "", sequence: 0 };
}
export const PacketSequence = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.sequence !== 0) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketSequence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.portId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.channelId = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.sequence = longToNumber(reader.uint64());
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
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            sequence: isSet(object.sequence) ? Number(object.sequence) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.portId !== "") {
            obj.portId = message.portId;
        }
        if (message.channelId !== "") {
            obj.channelId = message.channelId;
        }
        if (message.sequence !== 0) {
            obj.sequence = Math.round(message.sequence);
        }
        return obj;
    },
    create(base) {
        return PacketSequence.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePacketSequence();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.sequence = object.sequence ?? 0;
        return message;
    },
};
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
