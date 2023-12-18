/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Any {
  "@type"?: string;
}

export interface Status {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: { "@type"?: string }[];
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
  buyOrderBook?: { index?: string; amountDenom?: string; priceDenom?: string }[];
  pagination?: { next_key?: string; total?: string };
}

export interface QueryAllDenomTraceResponse {
  denomTrace?: { index?: string; port?: string; channel?: string; origin?: string }[];
  pagination?: { next_key?: string; total?: string };
}

export interface QueryAllSellOrderBookResponse {
  sellOrderBook?: { index?: string; amountDenom?: string; priceDenom?: string }[];
  pagination?: { next_key?: string; total?: string };
}

export interface QueryGetBuyOrderBookResponse {
  buyOrderBook?: { index?: string; amountDenom?: string; priceDenom?: string };
}

export interface QueryGetDenomTraceResponse {
  denomTrace?: { index?: string; port?: string; channel?: string; origin?: string };
}

export interface QueryGetSellOrderBookResponse {
  sellOrderBook?: { index?: string; amountDenom?: string; priceDenom?: string };
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

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

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
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title HTTP API Console dastchain.dex
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryBuyOrderBookAll
   * @request GET:/dastchain/dex/buy_order_book
   */
  queryBuyOrderBookAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        buyOrderBook?: { index?: string; amountDenom?: string; priceDenom?: string }[];
        pagination?: { next_key?: string; total?: string };
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/dastchain/dex/buy_order_book`,
      method: "GET",
      query: query,
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBuyOrderBook
   * @request GET:/dastchain/dex/buy_order_book/{index}
   */
  queryBuyOrderBook = (index: string, params: RequestParams = {}) =>
    this.request<
      { buyOrderBook?: { index?: string; amountDenom?: string; priceDenom?: string } },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/dastchain/dex/buy_order_book/${index}`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDenomTraceAll
   * @request GET:/dastchain/dex/denom_trace
   */
  queryDenomTraceAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        denomTrace?: { index?: string; port?: string; channel?: string; origin?: string }[];
        pagination?: { next_key?: string; total?: string };
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/dastchain/dex/denom_trace`,
      method: "GET",
      query: query,
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDenomTrace
   * @request GET:/dastchain/dex/denom_trace/{index}
   */
  queryDenomTrace = (index: string, params: RequestParams = {}) =>
    this.request<
      { denomTrace?: { index?: string; port?: string; channel?: string; origin?: string } },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/dastchain/dex/denom_trace/${index}`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @request GET:/dastchain/dex/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<{ params?: object }, { code?: number; message?: string; details?: { "@type"?: string }[] }>({
      path: `/dastchain/dex/params`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySellOrderBookAll
   * @request GET:/dastchain/dex/sell_order_book
   */
  querySellOrderBookAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        sellOrderBook?: { index?: string; amountDenom?: string; priceDenom?: string }[];
        pagination?: { next_key?: string; total?: string };
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/dastchain/dex/sell_order_book`,
      method: "GET",
      query: query,
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySellOrderBook
   * @request GET:/dastchain/dex/sell_order_book/{index}
   */
  querySellOrderBook = (index: string, params: RequestParams = {}) =>
    this.request<
      { sellOrderBook?: { index?: string; amountDenom?: string; priceDenom?: string } },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/dastchain/dex/sell_order_book/${index}`,
      method: "GET",
      ...params,
    });
}
