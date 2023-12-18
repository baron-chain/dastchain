export interface Any {
    "@type"?: string;
}
export interface Status {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: {
        "@type"?: string;
    }[];
}
export interface BuyOrderBook {
    index?: string;
    amountDenom?: string;
    priceDenom?: string;
}
export interface DenomTrace {
    index?: string;
    port?: string;
    channel?: string;
    origin?: string;
}
export interface PageRequest {
    /** @format byte */
    key?: string;
    /** @format uint64 */
    offset?: string;
    /** @format uint64 */
    limit?: string;
    count_total?: boolean;
    reverse?: boolean;
}
export interface PageResponse {
    /** @format byte */
    next_key?: string;
    /** @format uint64 */
    total?: string;
}
export type Params = object;
export interface QueryAllBuyOrderBookResponse {
    buyOrderBook?: {
        index?: string;
        amountDenom?: string;
        priceDenom?: string;
    }[];
    pagination?: {
        next_key?: string;
        total?: string;
    };
}
export interface QueryAllDenomTraceResponse {
    denomTrace?: {
        index?: string;
        port?: string;
        channel?: string;
        origin?: string;
    }[];
    pagination?: {
        next_key?: string;
        total?: string;
    };
}
export interface QueryAllSellOrderBookResponse {
    sellOrderBook?: {
        index?: string;
        amountDenom?: string;
        priceDenom?: string;
    }[];
    pagination?: {
        next_key?: string;
        total?: string;
    };
}
export interface QueryGetBuyOrderBookResponse {
    buyOrderBook?: {
        index?: string;
        amountDenom?: string;
        priceDenom?: string;
    };
}
export interface QueryGetDenomTraceResponse {
    denomTrace?: {
        index?: string;
        port?: string;
        channel?: string;
        origin?: string;
    };
}
export interface QueryGetSellOrderBookResponse {
    sellOrderBook?: {
        index?: string;
        amountDenom?: string;
        priceDenom?: string;
    };
}
export interface QueryParamsResponse {
    params?: object;
}
export interface SellOrderBook {
    index?: string;
    amountDenom?: string;
    priceDenom?: string;
}
export type MsgCancelBuyOrderResponse = object;
export type MsgCancelSellOrderResponse = object;
export type MsgSendBuyOrderResponse = object;
export type MsgSendCreatePairResponse = object;
export type MsgSendSellOrderResponse = object;
export type MsgUpdateParamsResponse = object;
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";
export type QueryParamsType = Record<string | number, any>;
export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseType;
    /** request body */
    body?: unknown;
}
export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
    securityWorker?: (securityData: SecurityDataType | null) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
    secure?: boolean;
    format?: ResponseType;
}
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    instance: AxiosInstance;
    private securityData;
    private securityWorker?;
    private secure?;
    private format?;
    constructor({ securityWorker, secure, format, ...axiosConfig }?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType | null) => void;
    private mergeRequestParams;
    private createFormData;
    request: <T = any, _E = any>({ secure, path, type, query, format, body, ...params }: FullRequestParams) => Promise<AxiosResponse<T>>;
}
/**
 * @title HTTP API Console dastchain.dex
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryBuyOrderBookAll
     * @request GET:/dastchain/dex/buy_order_book
     */
    queryBuyOrderBookAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<AxiosResponse<{
        buyOrderBook?: {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        }[];
        pagination?: {
            next_key?: string;
            total?: string;
        };
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryBuyOrderBook
     * @request GET:/dastchain/dex/buy_order_book/{index}
     */
    queryBuyOrderBook: (index: string, params?: RequestParams) => Promise<AxiosResponse<{
        buyOrderBook?: {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        };
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryDenomTraceAll
     * @request GET:/dastchain/dex/denom_trace
     */
    queryDenomTraceAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<AxiosResponse<{
        denomTrace?: {
            index?: string;
            port?: string;
            channel?: string;
            origin?: string;
        }[];
        pagination?: {
            next_key?: string;
            total?: string;
        };
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryDenomTrace
     * @request GET:/dastchain/dex/denom_trace/{index}
     */
    queryDenomTrace: (index: string, params?: RequestParams) => Promise<AxiosResponse<{
        denomTrace?: {
            index?: string;
            port?: string;
            channel?: string;
            origin?: string;
        };
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryParams
     * @request GET:/dastchain/dex/params
     */
    queryParams: (params?: RequestParams) => Promise<AxiosResponse<{
        params?: object;
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySellOrderBookAll
     * @request GET:/dastchain/dex/sell_order_book
     */
    querySellOrderBookAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<AxiosResponse<{
        sellOrderBook?: {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        }[];
        pagination?: {
            next_key?: string;
            total?: string;
        };
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySellOrderBook
     * @request GET:/dastchain/dex/sell_order_book/{index}
     */
    querySellOrderBook: (index: string, params?: RequestParams) => Promise<AxiosResponse<{
        sellOrderBook?: {
            index?: string;
            amountDenom?: string;
            priceDenom?: string;
        };
    }>>;
}
