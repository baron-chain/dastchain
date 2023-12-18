import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgSendBuyOrderResponse } from "./types/dastchain/dex/tx";
import { GenesisState } from "./types/dastchain/dex/genesis";
import { QueryAllSellOrderBookResponse } from "./types/dastchain/dex/query";
import { DexPacketData } from "./types/dastchain/dex/packet";
import { Params } from "./types/dastchain/dex/params";
import { SellOrderPacketData } from "./types/dastchain/dex/packet";
import { QueryAllDenomTraceRequest } from "./types/dastchain/dex/query";
import { SellOrderPacketAck } from "./types/dastchain/dex/packet";
import { MsgSendCreatePair } from "./types/dastchain/dex/tx";
import { BuyOrderPacketData } from "./types/dastchain/dex/packet";
import { QueryAllSellOrderBookRequest } from "./types/dastchain/dex/query";
import { QueryGetBuyOrderBookRequest } from "./types/dastchain/dex/query";
import { QueryAllBuyOrderBookRequest } from "./types/dastchain/dex/query";
import { QueryGetDenomTraceResponse } from "./types/dastchain/dex/query";
import { MsgUpdateParamsResponse } from "./types/dastchain/dex/tx";
import { MsgSendSellOrderResponse } from "./types/dastchain/dex/tx";
import { QueryGetBuyOrderBookResponse } from "./types/dastchain/dex/query";
import { QueryAllDenomTraceResponse } from "./types/dastchain/dex/query";
import { MsgSendSellOrder } from "./types/dastchain/dex/tx";
import { QueryParamsResponse } from "./types/dastchain/dex/query";
import { MsgSendBuyOrder } from "./types/dastchain/dex/tx";
import { MsgCancelSellOrder } from "./types/dastchain/dex/tx";
import { MsgCancelBuyOrderResponse } from "./types/dastchain/dex/tx";
import { DenomTrace } from "./types/dastchain/dex/denom_trace";
import { QueryGetSellOrderBookRequest } from "./types/dastchain/dex/query";
import { BuyOrderBook } from "./types/dastchain/dex/buy_order_book";
import { MsgUpdateParams } from "./types/dastchain/dex/tx";
import { QueryGetDenomTraceRequest } from "./types/dastchain/dex/query";
import { MsgCancelBuyOrder } from "./types/dastchain/dex/tx";
import { SellOrderBook } from "./types/dastchain/dex/sell_order_book";
import { CreatePairPacketData } from "./types/dastchain/dex/packet";
import { QueryParamsRequest } from "./types/dastchain/dex/query";
import { QueryGetSellOrderBookResponse } from "./types/dastchain/dex/query";
import { QueryAllBuyOrderBookResponse } from "./types/dastchain/dex/query";
import { MsgSendCreatePairResponse } from "./types/dastchain/dex/tx";
import { MsgCancelSellOrderResponse } from "./types/dastchain/dex/tx";
import { BuyOrderPacketAck } from "./types/dastchain/dex/packet";
import { NoData } from "./types/dastchain/dex/packet";
import { CreatePairPacketAck } from "./types/dastchain/dex/packet";
export { MsgSendBuyOrderResponse, GenesisState, QueryAllSellOrderBookResponse, DexPacketData, Params, SellOrderPacketData, QueryAllDenomTraceRequest, SellOrderPacketAck, MsgSendCreatePair, BuyOrderPacketData, QueryAllSellOrderBookRequest, QueryGetBuyOrderBookRequest, QueryAllBuyOrderBookRequest, QueryGetDenomTraceResponse, MsgUpdateParamsResponse, MsgSendSellOrderResponse, QueryGetBuyOrderBookResponse, QueryAllDenomTraceResponse, MsgSendSellOrder, QueryParamsResponse, MsgSendBuyOrder, MsgCancelSellOrder, MsgCancelBuyOrderResponse, DenomTrace, QueryGetSellOrderBookRequest, BuyOrderBook, MsgUpdateParams, QueryGetDenomTraceRequest, MsgCancelBuyOrder, SellOrderBook, CreatePairPacketData, QueryParamsRequest, QueryGetSellOrderBookResponse, QueryAllBuyOrderBookResponse, MsgSendCreatePairResponse, MsgCancelSellOrderResponse, BuyOrderPacketAck, NoData, CreatePairPacketAck };
type sendMsgSendBuyOrderResponseParams = {
    value: MsgSendBuyOrderResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllSellOrderBookResponseParams = {
    value: QueryAllSellOrderBookResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDexPacketDataParams = {
    value: DexPacketData;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendSellOrderPacketDataParams = {
    value: SellOrderPacketData;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllDenomTraceRequestParams = {
    value: QueryAllDenomTraceRequest;
    fee?: StdFee;
    memo?: string;
};
type sendSellOrderPacketAckParams = {
    value: SellOrderPacketAck;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSendCreatePairParams = {
    value: MsgSendCreatePair;
    fee?: StdFee;
    memo?: string;
};
type sendBuyOrderPacketDataParams = {
    value: BuyOrderPacketData;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllSellOrderBookRequestParams = {
    value: QueryAllSellOrderBookRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetBuyOrderBookRequestParams = {
    value: QueryGetBuyOrderBookRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllBuyOrderBookRequestParams = {
    value: QueryAllBuyOrderBookRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetDenomTraceResponseParams = {
    value: QueryGetDenomTraceResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSendSellOrderResponseParams = {
    value: MsgSendSellOrderResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetBuyOrderBookResponseParams = {
    value: QueryGetBuyOrderBookResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllDenomTraceResponseParams = {
    value: QueryAllDenomTraceResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSendSellOrderParams = {
    value: MsgSendSellOrder;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSendBuyOrderParams = {
    value: MsgSendBuyOrder;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCancelSellOrderParams = {
    value: MsgCancelSellOrder;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCancelBuyOrderResponseParams = {
    value: MsgCancelBuyOrderResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDenomTraceParams = {
    value: DenomTrace;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSellOrderBookRequestParams = {
    value: QueryGetSellOrderBookRequest;
    fee?: StdFee;
    memo?: string;
};
type sendBuyOrderBookParams = {
    value: BuyOrderBook;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetDenomTraceRequestParams = {
    value: QueryGetDenomTraceRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCancelBuyOrderParams = {
    value: MsgCancelBuyOrder;
    fee?: StdFee;
    memo?: string;
};
type sendSellOrderBookParams = {
    value: SellOrderBook;
    fee?: StdFee;
    memo?: string;
};
type sendCreatePairPacketDataParams = {
    value: CreatePairPacketData;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSellOrderBookResponseParams = {
    value: QueryGetSellOrderBookResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllBuyOrderBookResponseParams = {
    value: QueryAllBuyOrderBookResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSendCreatePairResponseParams = {
    value: MsgSendCreatePairResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCancelSellOrderResponseParams = {
    value: MsgCancelSellOrderResponse;
    fee?: StdFee;
    memo?: string;
};
type sendBuyOrderPacketAckParams = {
    value: BuyOrderPacketAck;
    fee?: StdFee;
    memo?: string;
};
type sendNoDataParams = {
    value: NoData;
    fee?: StdFee;
    memo?: string;
};
type sendCreatePairPacketAckParams = {
    value: CreatePairPacketAck;
    fee?: StdFee;
    memo?: string;
};
type msgSendBuyOrderResponseParams = {
    value: MsgSendBuyOrderResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryAllSellOrderBookResponseParams = {
    value: QueryAllSellOrderBookResponse;
};
type dexPacketDataParams = {
    value: DexPacketData;
};
type paramsParams = {
    value: Params;
};
type sellOrderPacketDataParams = {
    value: SellOrderPacketData;
};
type queryAllDenomTraceRequestParams = {
    value: QueryAllDenomTraceRequest;
};
type sellOrderPacketAckParams = {
    value: SellOrderPacketAck;
};
type msgSendCreatePairParams = {
    value: MsgSendCreatePair;
};
type buyOrderPacketDataParams = {
    value: BuyOrderPacketData;
};
type queryAllSellOrderBookRequestParams = {
    value: QueryAllSellOrderBookRequest;
};
type queryGetBuyOrderBookRequestParams = {
    value: QueryGetBuyOrderBookRequest;
};
type queryAllBuyOrderBookRequestParams = {
    value: QueryAllBuyOrderBookRequest;
};
type queryGetDenomTraceResponseParams = {
    value: QueryGetDenomTraceResponse;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type msgSendSellOrderResponseParams = {
    value: MsgSendSellOrderResponse;
};
type queryGetBuyOrderBookResponseParams = {
    value: QueryGetBuyOrderBookResponse;
};
type queryAllDenomTraceResponseParams = {
    value: QueryAllDenomTraceResponse;
};
type msgSendSellOrderParams = {
    value: MsgSendSellOrder;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type msgSendBuyOrderParams = {
    value: MsgSendBuyOrder;
};
type msgCancelSellOrderParams = {
    value: MsgCancelSellOrder;
};
type msgCancelBuyOrderResponseParams = {
    value: MsgCancelBuyOrderResponse;
};
type denomTraceParams = {
    value: DenomTrace;
};
type queryGetSellOrderBookRequestParams = {
    value: QueryGetSellOrderBookRequest;
};
type buyOrderBookParams = {
    value: BuyOrderBook;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryGetDenomTraceRequestParams = {
    value: QueryGetDenomTraceRequest;
};
type msgCancelBuyOrderParams = {
    value: MsgCancelBuyOrder;
};
type sellOrderBookParams = {
    value: SellOrderBook;
};
type createPairPacketDataParams = {
    value: CreatePairPacketData;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryGetSellOrderBookResponseParams = {
    value: QueryGetSellOrderBookResponse;
};
type queryAllBuyOrderBookResponseParams = {
    value: QueryAllBuyOrderBookResponse;
};
type msgSendCreatePairResponseParams = {
    value: MsgSendCreatePairResponse;
};
type msgCancelSellOrderResponseParams = {
    value: MsgCancelSellOrderResponse;
};
type buyOrderPacketAckParams = {
    value: BuyOrderPacketAck;
};
type noDataParams = {
    value: NoData;
};
type createPairPacketAckParams = {
    value: CreatePairPacketAck;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgSendBuyOrderResponse({ value, fee, memo }: sendMsgSendBuyOrderResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryAllSellOrderBookResponse({ value, fee, memo }: sendQueryAllSellOrderBookResponseParams): Promise<DeliverTxResponse>;
    sendDexPacketData({ value, fee, memo }: sendDexPacketDataParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendSellOrderPacketData({ value, fee, memo }: sendSellOrderPacketDataParams): Promise<DeliverTxResponse>;
    sendQueryAllDenomTraceRequest({ value, fee, memo }: sendQueryAllDenomTraceRequestParams): Promise<DeliverTxResponse>;
    sendSellOrderPacketAck({ value, fee, memo }: sendSellOrderPacketAckParams): Promise<DeliverTxResponse>;
    sendMsgSendCreatePair({ value, fee, memo }: sendMsgSendCreatePairParams): Promise<DeliverTxResponse>;
    sendBuyOrderPacketData({ value, fee, memo }: sendBuyOrderPacketDataParams): Promise<DeliverTxResponse>;
    sendQueryAllSellOrderBookRequest({ value, fee, memo }: sendQueryAllSellOrderBookRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetBuyOrderBookRequest({ value, fee, memo }: sendQueryGetBuyOrderBookRequestParams): Promise<DeliverTxResponse>;
    sendQueryAllBuyOrderBookRequest({ value, fee, memo }: sendQueryAllBuyOrderBookRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetDenomTraceResponse({ value, fee, memo }: sendQueryGetDenomTraceResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgSendSellOrderResponse({ value, fee, memo }: sendMsgSendSellOrderResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetBuyOrderBookResponse({ value, fee, memo }: sendQueryGetBuyOrderBookResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllDenomTraceResponse({ value, fee, memo }: sendQueryAllDenomTraceResponseParams): Promise<DeliverTxResponse>;
    sendMsgSendSellOrder({ value, fee, memo }: sendMsgSendSellOrderParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgSendBuyOrder({ value, fee, memo }: sendMsgSendBuyOrderParams): Promise<DeliverTxResponse>;
    sendMsgCancelSellOrder({ value, fee, memo }: sendMsgCancelSellOrderParams): Promise<DeliverTxResponse>;
    sendMsgCancelBuyOrderResponse({ value, fee, memo }: sendMsgCancelBuyOrderResponseParams): Promise<DeliverTxResponse>;
    sendDenomTrace({ value, fee, memo }: sendDenomTraceParams): Promise<DeliverTxResponse>;
    sendQueryGetSellOrderBookRequest({ value, fee, memo }: sendQueryGetSellOrderBookRequestParams): Promise<DeliverTxResponse>;
    sendBuyOrderBook({ value, fee, memo }: sendBuyOrderBookParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryGetDenomTraceRequest({ value, fee, memo }: sendQueryGetDenomTraceRequestParams): Promise<DeliverTxResponse>;
    sendMsgCancelBuyOrder({ value, fee, memo }: sendMsgCancelBuyOrderParams): Promise<DeliverTxResponse>;
    sendSellOrderBook({ value, fee, memo }: sendSellOrderBookParams): Promise<DeliverTxResponse>;
    sendCreatePairPacketData({ value, fee, memo }: sendCreatePairPacketDataParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetSellOrderBookResponse({ value, fee, memo }: sendQueryGetSellOrderBookResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllBuyOrderBookResponse({ value, fee, memo }: sendQueryAllBuyOrderBookResponseParams): Promise<DeliverTxResponse>;
    sendMsgSendCreatePairResponse({ value, fee, memo }: sendMsgSendCreatePairResponseParams): Promise<DeliverTxResponse>;
    sendMsgCancelSellOrderResponse({ value, fee, memo }: sendMsgCancelSellOrderResponseParams): Promise<DeliverTxResponse>;
    sendBuyOrderPacketAck({ value, fee, memo }: sendBuyOrderPacketAckParams): Promise<DeliverTxResponse>;
    sendNoData({ value, fee, memo }: sendNoDataParams): Promise<DeliverTxResponse>;
    sendCreatePairPacketAck({ value, fee, memo }: sendCreatePairPacketAckParams): Promise<DeliverTxResponse>;
    msgSendBuyOrderResponse({ value }: msgSendBuyOrderResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryAllSellOrderBookResponse({ value }: queryAllSellOrderBookResponseParams): EncodeObject;
    dexPacketData({ value }: dexPacketDataParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    sellOrderPacketData({ value }: sellOrderPacketDataParams): EncodeObject;
    queryAllDenomTraceRequest({ value }: queryAllDenomTraceRequestParams): EncodeObject;
    sellOrderPacketAck({ value }: sellOrderPacketAckParams): EncodeObject;
    msgSendCreatePair({ value }: msgSendCreatePairParams): EncodeObject;
    buyOrderPacketData({ value }: buyOrderPacketDataParams): EncodeObject;
    queryAllSellOrderBookRequest({ value }: queryAllSellOrderBookRequestParams): EncodeObject;
    queryGetBuyOrderBookRequest({ value }: queryGetBuyOrderBookRequestParams): EncodeObject;
    queryAllBuyOrderBookRequest({ value }: queryAllBuyOrderBookRequestParams): EncodeObject;
    queryGetDenomTraceResponse({ value }: queryGetDenomTraceResponseParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    msgSendSellOrderResponse({ value }: msgSendSellOrderResponseParams): EncodeObject;
    queryGetBuyOrderBookResponse({ value }: queryGetBuyOrderBookResponseParams): EncodeObject;
    queryAllDenomTraceResponse({ value }: queryAllDenomTraceResponseParams): EncodeObject;
    msgSendSellOrder({ value }: msgSendSellOrderParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    msgSendBuyOrder({ value }: msgSendBuyOrderParams): EncodeObject;
    msgCancelSellOrder({ value }: msgCancelSellOrderParams): EncodeObject;
    msgCancelBuyOrderResponse({ value }: msgCancelBuyOrderResponseParams): EncodeObject;
    denomTrace({ value }: denomTraceParams): EncodeObject;
    queryGetSellOrderBookRequest({ value }: queryGetSellOrderBookRequestParams): EncodeObject;
    buyOrderBook({ value }: buyOrderBookParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryGetDenomTraceRequest({ value }: queryGetDenomTraceRequestParams): EncodeObject;
    msgCancelBuyOrder({ value }: msgCancelBuyOrderParams): EncodeObject;
    sellOrderBook({ value }: sellOrderBookParams): EncodeObject;
    createPairPacketData({ value }: createPairPacketDataParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryGetSellOrderBookResponse({ value }: queryGetSellOrderBookResponseParams): EncodeObject;
    queryAllBuyOrderBookResponse({ value }: queryAllBuyOrderBookResponseParams): EncodeObject;
    msgSendCreatePairResponse({ value }: msgSendCreatePairResponseParams): EncodeObject;
    msgCancelSellOrderResponse({ value }: msgCancelSellOrderResponseParams): EncodeObject;
    buyOrderPacketAck({ value }: buyOrderPacketAckParams): EncodeObject;
    noData({ value }: noDataParams): EncodeObject;
    createPairPacketAck({ value }: createPairPacketAckParams): EncodeObject;
};
interface QueryClientOptions {
    addr: string;
}
export declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Api<unknown>;
declare class SDKModule {
    query: ReturnType<typeof queryClient>;
    tx: ReturnType<typeof txClient>;
    structure: Record<string, unknown>;
    registry: Array<[string, GeneratedType]>;
    constructor(client: IgniteClient);
    updateTX(client: IgniteClient): void;
}
declare const IgntModule: (test: IgniteClient) => {
    module: {
        DastchainDex: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
