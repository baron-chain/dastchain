/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { BuyOrderBook } from "./buy_order_book";
import { DenomTrace } from "./denom_trace";
import { Params } from "./params";
import { SellOrderBook } from "./sell_order_book";
export const protobufPackage = "dastchain.dex";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        return QueryParamsRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return { params: undefined };
}
export const QueryParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.params !== undefined) {
            obj.params = Params.toJSON(message.params);
        }
        return obj;
    },
    create(base) {
        return QueryParamsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseQueryGetSellOrderBookRequest() {
    return { index: "" };
}
export const QueryGetSellOrderBookRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetSellOrderBookRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.index = reader.string();
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
        return { index: isSet(object.index) ? String(object.index) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.index !== "") {
            obj.index = message.index;
        }
        return obj;
    },
    create(base) {
        return QueryGetSellOrderBookRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetSellOrderBookRequest();
        message.index = object.index ?? "";
        return message;
    },
};
function createBaseQueryGetSellOrderBookResponse() {
    return { sellOrderBook: undefined };
}
export const QueryGetSellOrderBookResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sellOrderBook !== undefined) {
            SellOrderBook.encode(message.sellOrderBook, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetSellOrderBookResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sellOrderBook = SellOrderBook.decode(reader, reader.uint32());
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
        return { sellOrderBook: isSet(object.sellOrderBook) ? SellOrderBook.fromJSON(object.sellOrderBook) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.sellOrderBook !== undefined) {
            obj.sellOrderBook = SellOrderBook.toJSON(message.sellOrderBook);
        }
        return obj;
    },
    create(base) {
        return QueryGetSellOrderBookResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetSellOrderBookResponse();
        message.sellOrderBook = (object.sellOrderBook !== undefined && object.sellOrderBook !== null)
            ? SellOrderBook.fromPartial(object.sellOrderBook)
            : undefined;
        return message;
    },
};
function createBaseQueryAllSellOrderBookRequest() {
    return { pagination: undefined };
}
export const QueryAllSellOrderBookRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllSellOrderBookRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.pagination !== undefined) {
            obj.pagination = PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return QueryAllSellOrderBookRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAllSellOrderBookRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryAllSellOrderBookResponse() {
    return { sellOrderBook: [], pagination: undefined };
}
export const QueryAllSellOrderBookResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.sellOrderBook) {
            SellOrderBook.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllSellOrderBookResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sellOrderBook.push(SellOrderBook.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            sellOrderBook: Array.isArray(object?.sellOrderBook)
                ? object.sellOrderBook.map((e) => SellOrderBook.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sellOrderBook?.length) {
            obj.sellOrderBook = message.sellOrderBook.map((e) => SellOrderBook.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return QueryAllSellOrderBookResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAllSellOrderBookResponse();
        message.sellOrderBook = object.sellOrderBook?.map((e) => SellOrderBook.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGetBuyOrderBookRequest() {
    return { index: "" };
}
export const QueryGetBuyOrderBookRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetBuyOrderBookRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.index = reader.string();
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
        return { index: isSet(object.index) ? String(object.index) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.index !== "") {
            obj.index = message.index;
        }
        return obj;
    },
    create(base) {
        return QueryGetBuyOrderBookRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetBuyOrderBookRequest();
        message.index = object.index ?? "";
        return message;
    },
};
function createBaseQueryGetBuyOrderBookResponse() {
    return { buyOrderBook: undefined };
}
export const QueryGetBuyOrderBookResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.buyOrderBook !== undefined) {
            BuyOrderBook.encode(message.buyOrderBook, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetBuyOrderBookResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.buyOrderBook = BuyOrderBook.decode(reader, reader.uint32());
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
        return { buyOrderBook: isSet(object.buyOrderBook) ? BuyOrderBook.fromJSON(object.buyOrderBook) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.buyOrderBook !== undefined) {
            obj.buyOrderBook = BuyOrderBook.toJSON(message.buyOrderBook);
        }
        return obj;
    },
    create(base) {
        return QueryGetBuyOrderBookResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetBuyOrderBookResponse();
        message.buyOrderBook = (object.buyOrderBook !== undefined && object.buyOrderBook !== null)
            ? BuyOrderBook.fromPartial(object.buyOrderBook)
            : undefined;
        return message;
    },
};
function createBaseQueryAllBuyOrderBookRequest() {
    return { pagination: undefined };
}
export const QueryAllBuyOrderBookRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllBuyOrderBookRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.pagination !== undefined) {
            obj.pagination = PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return QueryAllBuyOrderBookRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAllBuyOrderBookRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryAllBuyOrderBookResponse() {
    return { buyOrderBook: [], pagination: undefined };
}
export const QueryAllBuyOrderBookResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.buyOrderBook) {
            BuyOrderBook.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllBuyOrderBookResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.buyOrderBook.push(BuyOrderBook.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            buyOrderBook: Array.isArray(object?.buyOrderBook)
                ? object.buyOrderBook.map((e) => BuyOrderBook.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.buyOrderBook?.length) {
            obj.buyOrderBook = message.buyOrderBook.map((e) => BuyOrderBook.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return QueryAllBuyOrderBookResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAllBuyOrderBookResponse();
        message.buyOrderBook = object.buyOrderBook?.map((e) => BuyOrderBook.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGetDenomTraceRequest() {
    return { index: "" };
}
export const QueryGetDenomTraceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetDenomTraceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.index = reader.string();
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
        return { index: isSet(object.index) ? String(object.index) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.index !== "") {
            obj.index = message.index;
        }
        return obj;
    },
    create(base) {
        return QueryGetDenomTraceRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetDenomTraceRequest();
        message.index = object.index ?? "";
        return message;
    },
};
function createBaseQueryGetDenomTraceResponse() {
    return { denomTrace: undefined };
}
export const QueryGetDenomTraceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denomTrace !== undefined) {
            DenomTrace.encode(message.denomTrace, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetDenomTraceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.denomTrace = DenomTrace.decode(reader, reader.uint32());
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
        return { denomTrace: isSet(object.denomTrace) ? DenomTrace.fromJSON(object.denomTrace) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.denomTrace !== undefined) {
            obj.denomTrace = DenomTrace.toJSON(message.denomTrace);
        }
        return obj;
    },
    create(base) {
        return QueryGetDenomTraceResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetDenomTraceResponse();
        message.denomTrace = (object.denomTrace !== undefined && object.denomTrace !== null)
            ? DenomTrace.fromPartial(object.denomTrace)
            : undefined;
        return message;
    },
};
function createBaseQueryAllDenomTraceRequest() {
    return { pagination: undefined };
}
export const QueryAllDenomTraceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllDenomTraceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.pagination !== undefined) {
            obj.pagination = PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return QueryAllDenomTraceRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAllDenomTraceRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryAllDenomTraceResponse() {
    return { denomTrace: [], pagination: undefined };
}
export const QueryAllDenomTraceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.denomTrace) {
            DenomTrace.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllDenomTraceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.denomTrace.push(DenomTrace.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            denomTrace: Array.isArray(object?.denomTrace) ? object.denomTrace.map((e) => DenomTrace.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.denomTrace?.length) {
            obj.denomTrace = message.denomTrace.map((e) => DenomTrace.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return QueryAllDenomTraceResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAllDenomTraceResponse();
        message.denomTrace = object.denomTrace?.map((e) => DenomTrace.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
export const QueryServiceName = "dastchain.dex.Query";
export class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || QueryServiceName;
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.SellOrderBook = this.SellOrderBook.bind(this);
        this.SellOrderBookAll = this.SellOrderBookAll.bind(this);
        this.BuyOrderBook = this.BuyOrderBook.bind(this);
        this.BuyOrderBookAll = this.BuyOrderBookAll.bind(this);
        this.DenomTrace = this.DenomTrace.bind(this);
        this.DenomTraceAll = this.DenomTraceAll.bind(this);
    }
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
    }
    SellOrderBook(request) {
        const data = QueryGetSellOrderBookRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "SellOrderBook", data);
        return promise.then((data) => QueryGetSellOrderBookResponse.decode(_m0.Reader.create(data)));
    }
    SellOrderBookAll(request) {
        const data = QueryAllSellOrderBookRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "SellOrderBookAll", data);
        return promise.then((data) => QueryAllSellOrderBookResponse.decode(_m0.Reader.create(data)));
    }
    BuyOrderBook(request) {
        const data = QueryGetBuyOrderBookRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "BuyOrderBook", data);
        return promise.then((data) => QueryGetBuyOrderBookResponse.decode(_m0.Reader.create(data)));
    }
    BuyOrderBookAll(request) {
        const data = QueryAllBuyOrderBookRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "BuyOrderBookAll", data);
        return promise.then((data) => QueryAllBuyOrderBookResponse.decode(_m0.Reader.create(data)));
    }
    DenomTrace(request) {
        const data = QueryGetDenomTraceRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DenomTrace", data);
        return promise.then((data) => QueryGetDenomTraceResponse.decode(_m0.Reader.create(data)));
    }
    DenomTraceAll(request) {
        const data = QueryAllDenomTraceRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DenomTraceAll", data);
        return promise.then((data) => QueryAllDenomTraceResponse.decode(_m0.Reader.create(data)));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
