/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
export const protobufPackage = "dastchain.tokenfactory";
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
function createBaseMsgCreateDenom() {
    return {
        owner: "",
        denom: "",
        description: "",
        ticker: "",
        precision: 0,
        url: "",
        maxSupply: 0,
        canChangeMaxSupply: false,
    };
}
export const MsgCreateDenom = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.ticker !== "") {
            writer.uint32(34).string(message.ticker);
        }
        if (message.precision !== 0) {
            writer.uint32(40).int32(message.precision);
        }
        if (message.url !== "") {
            writer.uint32(50).string(message.url);
        }
        if (message.maxSupply !== 0) {
            writer.uint32(56).int32(message.maxSupply);
        }
        if (message.canChangeMaxSupply === true) {
            writer.uint32(64).bool(message.canChangeMaxSupply);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.owner = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.denom = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.ticker = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.precision = reader.int32();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.url = reader.string();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.maxSupply = reader.int32();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.canChangeMaxSupply = reader.bool();
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
            description: isSet(object.description) ? String(object.description) : "",
            ticker: isSet(object.ticker) ? String(object.ticker) : "",
            precision: isSet(object.precision) ? Number(object.precision) : 0,
            url: isSet(object.url) ? String(object.url) : "",
            maxSupply: isSet(object.maxSupply) ? Number(object.maxSupply) : 0,
            canChangeMaxSupply: isSet(object.canChangeMaxSupply) ? Boolean(object.canChangeMaxSupply) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
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
        if (message.canChangeMaxSupply === true) {
            obj.canChangeMaxSupply = message.canChangeMaxSupply;
        }
        return obj;
    },
    create(base) {
        return MsgCreateDenom.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgCreateDenom();
        message.owner = object.owner ?? "";
        message.denom = object.denom ?? "";
        message.description = object.description ?? "";
        message.ticker = object.ticker ?? "";
        message.precision = object.precision ?? 0;
        message.url = object.url ?? "";
        message.maxSupply = object.maxSupply ?? 0;
        message.canChangeMaxSupply = object.canChangeMaxSupply ?? false;
        return message;
    },
};
function createBaseMsgCreateDenomResponse() {
    return {};
}
export const MsgCreateDenomResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDenomResponse();
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
        return MsgCreateDenomResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgCreateDenomResponse();
        return message;
    },
};
function createBaseMsgUpdateDenom() {
    return { owner: "", denom: "", description: "", url: "", maxSupply: 0, canChangeMaxSupply: false };
}
export const MsgUpdateDenom = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.url !== "") {
            writer.uint32(34).string(message.url);
        }
        if (message.maxSupply !== 0) {
            writer.uint32(40).int32(message.maxSupply);
        }
        if (message.canChangeMaxSupply === true) {
            writer.uint32(48).bool(message.canChangeMaxSupply);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.owner = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.denom = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.url = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.maxSupply = reader.int32();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.canChangeMaxSupply = reader.bool();
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
            description: isSet(object.description) ? String(object.description) : "",
            url: isSet(object.url) ? String(object.url) : "",
            maxSupply: isSet(object.maxSupply) ? Number(object.maxSupply) : 0,
            canChangeMaxSupply: isSet(object.canChangeMaxSupply) ? Boolean(object.canChangeMaxSupply) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
        if (message.denom !== "") {
            obj.denom = message.denom;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.url !== "") {
            obj.url = message.url;
        }
        if (message.maxSupply !== 0) {
            obj.maxSupply = Math.round(message.maxSupply);
        }
        if (message.canChangeMaxSupply === true) {
            obj.canChangeMaxSupply = message.canChangeMaxSupply;
        }
        return obj;
    },
    create(base) {
        return MsgUpdateDenom.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateDenom();
        message.owner = object.owner ?? "";
        message.denom = object.denom ?? "";
        message.description = object.description ?? "";
        message.url = object.url ?? "";
        message.maxSupply = object.maxSupply ?? 0;
        message.canChangeMaxSupply = object.canChangeMaxSupply ?? false;
        return message;
    },
};
function createBaseMsgUpdateDenomResponse() {
    return {};
}
export const MsgUpdateDenomResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateDenomResponse();
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
        return MsgUpdateDenomResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateDenomResponse();
        return message;
    },
};
export const MsgServiceName = "dastchain.tokenfactory.Msg";
export class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || MsgServiceName;
        this.rpc = rpc;
        this.UpdateParams = this.UpdateParams.bind(this);
        this.CreateDenom = this.CreateDenom.bind(this);
        this.UpdateDenom = this.UpdateDenom.bind(this);
    }
    UpdateParams(request) {
        const data = MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateParams", data);
        return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
    }
    CreateDenom(request) {
        const data = MsgCreateDenom.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateDenom", data);
        return promise.then((data) => MsgCreateDenomResponse.decode(_m0.Reader.create(data)));
    }
    UpdateDenom(request) {
        const data = MsgUpdateDenom.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateDenom", data);
        return promise.then((data) => MsgUpdateDenomResponse.decode(_m0.Reader.create(data)));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
