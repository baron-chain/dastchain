import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryParamsRequest } from "./types/dastchain/tokenfactory/query";
import { MsgCreateDenom } from "./types/dastchain/tokenfactory/tx";
import { MsgUpdateDenomResponse } from "./types/dastchain/tokenfactory/tx";
import { MsgUpdateDenom } from "./types/dastchain/tokenfactory/tx";
import { QueryParamsResponse } from "./types/dastchain/tokenfactory/query";
import { QueryGetDenomResponse } from "./types/dastchain/tokenfactory/query";
import { Params } from "./types/dastchain/tokenfactory/params";
import { MsgUpdateParams } from "./types/dastchain/tokenfactory/tx";
import { GenesisState } from "./types/dastchain/tokenfactory/genesis";
import { MsgCreateDenomResponse } from "./types/dastchain/tokenfactory/tx";
import { QueryGetDenomRequest } from "./types/dastchain/tokenfactory/query";
import { QueryAllDenomRequest } from "./types/dastchain/tokenfactory/query";
import { QueryAllDenomResponse } from "./types/dastchain/tokenfactory/query";
import { Denom } from "./types/dastchain/tokenfactory/denom";
import { MsgUpdateParamsResponse } from "./types/dastchain/tokenfactory/tx";
export { QueryParamsRequest, MsgCreateDenom, MsgUpdateDenomResponse, MsgUpdateDenom, QueryParamsResponse, QueryGetDenomResponse, Params, MsgUpdateParams, GenesisState, MsgCreateDenomResponse, QueryGetDenomRequest, QueryAllDenomRequest, QueryAllDenomResponse, Denom, MsgUpdateParamsResponse };
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateDenomParams = {
    value: MsgCreateDenom;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateDenomResponseParams = {
    value: MsgUpdateDenomResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateDenomParams = {
    value: MsgUpdateDenom;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetDenomResponseParams = {
    value: QueryGetDenomResponse;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateDenomResponseParams = {
    value: MsgCreateDenomResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetDenomRequestParams = {
    value: QueryGetDenomRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllDenomRequestParams = {
    value: QueryAllDenomRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllDenomResponseParams = {
    value: QueryAllDenomResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDenomParams = {
    value: Denom;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type msgCreateDenomParams = {
    value: MsgCreateDenom;
};
type msgUpdateDenomResponseParams = {
    value: MsgUpdateDenomResponse;
};
type msgUpdateDenomParams = {
    value: MsgUpdateDenom;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryGetDenomResponseParams = {
    value: QueryGetDenomResponse;
};
type paramsParams = {
    value: Params;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgCreateDenomResponseParams = {
    value: MsgCreateDenomResponse;
};
type queryGetDenomRequestParams = {
    value: QueryGetDenomRequest;
};
type queryAllDenomRequestParams = {
    value: QueryAllDenomRequest;
};
type queryAllDenomResponseParams = {
    value: QueryAllDenomResponse;
};
type denomParams = {
    value: Denom;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendMsgCreateDenom({ value, fee, memo }: sendMsgCreateDenomParams): Promise<DeliverTxResponse>;
    sendMsgUpdateDenomResponse({ value, fee, memo }: sendMsgUpdateDenomResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateDenom({ value, fee, memo }: sendMsgUpdateDenomParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetDenomResponse({ value, fee, memo }: sendQueryGetDenomResponseParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgCreateDenomResponse({ value, fee, memo }: sendMsgCreateDenomResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetDenomRequest({ value, fee, memo }: sendQueryGetDenomRequestParams): Promise<DeliverTxResponse>;
    sendQueryAllDenomRequest({ value, fee, memo }: sendQueryAllDenomRequestParams): Promise<DeliverTxResponse>;
    sendQueryAllDenomResponse({ value, fee, memo }: sendQueryAllDenomResponseParams): Promise<DeliverTxResponse>;
    sendDenom({ value, fee, memo }: sendDenomParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    msgCreateDenom({ value }: msgCreateDenomParams): EncodeObject;
    msgUpdateDenomResponse({ value }: msgUpdateDenomResponseParams): EncodeObject;
    msgUpdateDenom({ value }: msgUpdateDenomParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryGetDenomResponse({ value }: queryGetDenomResponseParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgCreateDenomResponse({ value }: msgCreateDenomResponseParams): EncodeObject;
    queryGetDenomRequest({ value }: queryGetDenomRequestParams): EncodeObject;
    queryAllDenomRequest({ value }: queryAllDenomRequestParams): EncodeObject;
    queryAllDenomResponse({ value }: queryAllDenomResponseParams): EncodeObject;
    denom({ value }: denomParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
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
        DastchainTokenfactory: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
