/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { BuyOrderBook } from "./buy_order_book";
import { DenomTrace } from "./denom_trace";
import { Params } from "./params";
import { SellOrderBook } from "./sell_order_book";
export const protobufPackage = "dastchain.dex";
function createBaseGenesisState() {
    return { params: undefined, portId: "", sellOrderBookList: [], buyOrderBookList: [], denomTraceList: [] };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.portId !== "") {
            writer.uint32(18).string(message.portId);
        }
        for (const v of message.sellOrderBookList) {
            SellOrderBook.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.buyOrderBookList) {
            BuyOrderBook.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.denomTraceList) {
            DenomTrace.encode(v, writer.uint32(42).fork()).ldelim();
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
                    message.params = Params.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.portId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.sellOrderBookList.push(SellOrderBook.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.buyOrderBookList.push(BuyOrderBook.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.denomTraceList.push(DenomTrace.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            portId: isSet(object.portId) ? String(object.portId) : "",
            sellOrderBookList: Array.isArray(object?.sellOrderBookList)
                ? object.sellOrderBookList.map((e) => SellOrderBook.fromJSON(e))
                : [],
            buyOrderBookList: Array.isArray(object?.buyOrderBookList)
                ? object.buyOrderBookList.map((e) => BuyOrderBook.fromJSON(e))
                : [],
            denomTraceList: Array.isArray(object?.denomTraceList)
                ? object.denomTraceList.map((e) => DenomTrace.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.params !== undefined) {
            obj.params = Params.toJSON(message.params);
        }
        if (message.portId !== "") {
            obj.portId = message.portId;
        }
        if (message.sellOrderBookList?.length) {
            obj.sellOrderBookList = message.sellOrderBookList.map((e) => SellOrderBook.toJSON(e));
        }
        if (message.buyOrderBookList?.length) {
            obj.buyOrderBookList = message.buyOrderBookList.map((e) => BuyOrderBook.toJSON(e));
        }
        if (message.denomTraceList?.length) {
            obj.denomTraceList = message.denomTraceList.map((e) => DenomTrace.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return GenesisState.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        message.portId = object.portId ?? "";
        message.sellOrderBookList = object.sellOrderBookList?.map((e) => SellOrderBook.fromPartial(e)) || [];
        message.buyOrderBookList = object.buyOrderBookList?.map((e) => BuyOrderBook.fromPartial(e)) || [];
        message.denomTraceList = object.denomTraceList?.map((e) => DenomTrace.fromPartial(e)) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
