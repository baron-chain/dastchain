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
export interface Denom {
    denom?: string;
    description?: string;
    ticker?: string;
    /** @format int32 */
    precision?: number;
    url?: string;
    /** @format int32 */
    maxSupply?: number;
    /** @format int32 */
    supply?: number;
    canChangeMaxSupply?: boolean;
    owner?: string;
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
export interface QueryAllDenomResponse {
    denom?: {
        denom?: string;
        description?: string;
        ticker?: string;
        precision?: number;
        url?: string;
        maxSupply?: number;
        supply?: number;
        canChangeMaxSupply?: boolean;
        owner?: string;
    }[];
    pagination?: {
        next_key?: string;
        total?: string;
    };
}
export interface QueryGetDenomResponse {
    denom?: {
        denom?: string;
        description?: string;
        ticker?: string;
        precision?: number;
        url?: string;
        maxSupply?: number;
        supply?: number;
        canChangeMaxSupply?: boolean;
        owner?: string;
    };
}
export interface QueryParamsResponse {
    params?: object;
}
export type MsgCreateDenomResponse = object;
export type MsgUpdateDenomResponse = object;
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
 * @title HTTP API Console dastchain.tokenfactory
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryDenomAll
     * @request GET:/dastchain/tokenfactory/denom
     */
    queryDenomAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<AxiosResponse<{
        denom?: {
            denom?: string;
            description?: string;
            ticker?: string;
            precision?: number;
            url?: string;
            maxSupply?: number;
            supply?: number;
            canChangeMaxSupply?: boolean;
            owner?: string;
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
     * @name QueryDenom
     * @request GET:/dastchain/tokenfactory/denom/{denom}
     */
    queryDenom: (denom: string, params?: RequestParams) => Promise<AxiosResponse<{
        denom?: {
            denom?: string;
            description?: string;
            ticker?: string;
            precision?: number;
            url?: string;
            maxSupply?: number;
            supply?: number;
            canChangeMaxSupply?: boolean;
            owner?: string;
        };
    }>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryParams
     * @request GET:/dastchain/tokenfactory/params
     */
    queryParams: (params?: RequestParams) => Promise<AxiosResponse<{
        params?: object;
    }>>;
}
