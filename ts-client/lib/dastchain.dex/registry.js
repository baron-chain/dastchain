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
const msgTypes = [
    ["/dastchain.dex.MsgSendBuyOrderResponse", MsgSendBuyOrderResponse],
    ["/dastchain.dex.GenesisState", GenesisState],
    ["/dastchain.dex.QueryAllSellOrderBookResponse", QueryAllSellOrderBookResponse],
    ["/dastchain.dex.DexPacketData", DexPacketData],
    ["/dastchain.dex.Params", Params],
    ["/dastchain.dex.SellOrderPacketData", SellOrderPacketData],
    ["/dastchain.dex.QueryAllDenomTraceRequest", QueryAllDenomTraceRequest],
    ["/dastchain.dex.SellOrderPacketAck", SellOrderPacketAck],
    ["/dastchain.dex.MsgSendCreatePair", MsgSendCreatePair],
    ["/dastchain.dex.BuyOrderPacketData", BuyOrderPacketData],
    ["/dastchain.dex.QueryAllSellOrderBookRequest", QueryAllSellOrderBookRequest],
    ["/dastchain.dex.QueryGetBuyOrderBookRequest", QueryGetBuyOrderBookRequest],
    ["/dastchain.dex.QueryAllBuyOrderBookRequest", QueryAllBuyOrderBookRequest],
    ["/dastchain.dex.QueryGetDenomTraceResponse", QueryGetDenomTraceResponse],
    ["/dastchain.dex.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/dastchain.dex.MsgSendSellOrderResponse", MsgSendSellOrderResponse],
    ["/dastchain.dex.QueryGetBuyOrderBookResponse", QueryGetBuyOrderBookResponse],
    ["/dastchain.dex.QueryAllDenomTraceResponse", QueryAllDenomTraceResponse],
    ["/dastchain.dex.MsgSendSellOrder", MsgSendSellOrder],
    ["/dastchain.dex.QueryParamsResponse", QueryParamsResponse],
    ["/dastchain.dex.MsgSendBuyOrder", MsgSendBuyOrder],
    ["/dastchain.dex.MsgCancelSellOrder", MsgCancelSellOrder],
    ["/dastchain.dex.MsgCancelBuyOrderResponse", MsgCancelBuyOrderResponse],
    ["/dastchain.dex.DenomTrace", DenomTrace],
    ["/dastchain.dex.QueryGetSellOrderBookRequest", QueryGetSellOrderBookRequest],
    ["/dastchain.dex.BuyOrderBook", BuyOrderBook],
    ["/dastchain.dex.MsgUpdateParams", MsgUpdateParams],
    ["/dastchain.dex.QueryGetDenomTraceRequest", QueryGetDenomTraceRequest],
    ["/dastchain.dex.MsgCancelBuyOrder", MsgCancelBuyOrder],
    ["/dastchain.dex.SellOrderBook", SellOrderBook],
    ["/dastchain.dex.CreatePairPacketData", CreatePairPacketData],
    ["/dastchain.dex.QueryParamsRequest", QueryParamsRequest],
    ["/dastchain.dex.QueryGetSellOrderBookResponse", QueryGetSellOrderBookResponse],
    ["/dastchain.dex.QueryAllBuyOrderBookResponse", QueryAllBuyOrderBookResponse],
    ["/dastchain.dex.MsgSendCreatePairResponse", MsgSendCreatePairResponse],
    ["/dastchain.dex.MsgCancelSellOrderResponse", MsgCancelSellOrderResponse],
    ["/dastchain.dex.BuyOrderPacketAck", BuyOrderPacketAck],
    ["/dastchain.dex.NoData", NoData],
    ["/dastchain.dex.CreatePairPacketAck", CreatePairPacketAck],
];
export { msgTypes };
