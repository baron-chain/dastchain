import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgGrant } from "./types/cosmos/authz/v1beta1/tx";
import { MsgGrantResponse } from "./types/cosmos/authz/v1beta1/tx";
import { QueryGrantsResponse } from "./types/cosmos/authz/v1beta1/query";
import { QueryGranteeGrantsRequest } from "./types/cosmos/authz/v1beta1/query";
import { GrantAuthorization } from "./types/cosmos/authz/v1beta1/authz";
import { EventRevoke } from "./types/cosmos/authz/v1beta1/event";
import { MsgRevokeResponse } from "./types/cosmos/authz/v1beta1/tx";
import { Grant } from "./types/cosmos/authz/v1beta1/authz";
import { QueryGrantsRequest } from "./types/cosmos/authz/v1beta1/query";
import { QueryGranteeGrantsResponse } from "./types/cosmos/authz/v1beta1/query";
import { GrantQueueItem } from "./types/cosmos/authz/v1beta1/authz";
import { EventGrant } from "./types/cosmos/authz/v1beta1/event";
import { MsgExec } from "./types/cosmos/authz/v1beta1/tx";
import { QueryGranterGrantsRequest } from "./types/cosmos/authz/v1beta1/query";
import { QueryGranterGrantsResponse } from "./types/cosmos/authz/v1beta1/query";
import { GenesisState } from "./types/cosmos/authz/v1beta1/genesis";
import { GenericAuthorization } from "./types/cosmos/authz/v1beta1/authz";
import { MsgExecResponse } from "./types/cosmos/authz/v1beta1/tx";
import { MsgRevoke } from "./types/cosmos/authz/v1beta1/tx";
export { MsgGrant, MsgGrantResponse, QueryGrantsResponse, QueryGranteeGrantsRequest, GrantAuthorization, EventRevoke, MsgRevokeResponse, Grant, QueryGrantsRequest, QueryGranteeGrantsResponse, GrantQueueItem, EventGrant, MsgExec, QueryGranterGrantsRequest, QueryGranterGrantsResponse, GenesisState, GenericAuthorization, MsgExecResponse, MsgRevoke };
type sendMsgGrantParams = {
    value: MsgGrant;
    fee?: StdFee;
    memo?: string;
};
type sendMsgGrantResponseParams = {
    value: MsgGrantResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGrantsResponseParams = {
    value: QueryGrantsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGranteeGrantsRequestParams = {
    value: QueryGranteeGrantsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendGrantAuthorizationParams = {
    value: GrantAuthorization;
    fee?: StdFee;
    memo?: string;
};
type sendEventRevokeParams = {
    value: EventRevoke;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRevokeResponseParams = {
    value: MsgRevokeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGrantParams = {
    value: Grant;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGrantsRequestParams = {
    value: QueryGrantsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGranteeGrantsResponseParams = {
    value: QueryGranteeGrantsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGrantQueueItemParams = {
    value: GrantQueueItem;
    fee?: StdFee;
    memo?: string;
};
type sendEventGrantParams = {
    value: EventGrant;
    fee?: StdFee;
    memo?: string;
};
type sendMsgExecParams = {
    value: MsgExec;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGranterGrantsRequestParams = {
    value: QueryGranterGrantsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGranterGrantsResponseParams = {
    value: QueryGranterGrantsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendGenericAuthorizationParams = {
    value: GenericAuthorization;
    fee?: StdFee;
    memo?: string;
};
type sendMsgExecResponseParams = {
    value: MsgExecResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRevokeParams = {
    value: MsgRevoke;
    fee?: StdFee;
    memo?: string;
};
type msgGrantParams = {
    value: MsgGrant;
};
type msgGrantResponseParams = {
    value: MsgGrantResponse;
};
type queryGrantsResponseParams = {
    value: QueryGrantsResponse;
};
type queryGranteeGrantsRequestParams = {
    value: QueryGranteeGrantsRequest;
};
type grantAuthorizationParams = {
    value: GrantAuthorization;
};
type eventRevokeParams = {
    value: EventRevoke;
};
type msgRevokeResponseParams = {
    value: MsgRevokeResponse;
};
type grantParams = {
    value: Grant;
};
type queryGrantsRequestParams = {
    value: QueryGrantsRequest;
};
type queryGranteeGrantsResponseParams = {
    value: QueryGranteeGrantsResponse;
};
type grantQueueItemParams = {
    value: GrantQueueItem;
};
type eventGrantParams = {
    value: EventGrant;
};
type msgExecParams = {
    value: MsgExec;
};
type queryGranterGrantsRequestParams = {
    value: QueryGranterGrantsRequest;
};
type queryGranterGrantsResponseParams = {
    value: QueryGranterGrantsResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type genericAuthorizationParams = {
    value: GenericAuthorization;
};
type msgExecResponseParams = {
    value: MsgExecResponse;
};
type msgRevokeParams = {
    value: MsgRevoke;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgGrant({ value, fee, memo }: sendMsgGrantParams): Promise<DeliverTxResponse>;
    sendMsgGrantResponse({ value, fee, memo }: sendMsgGrantResponseParams): Promise<DeliverTxResponse>;
    sendQueryGrantsResponse({ value, fee, memo }: sendQueryGrantsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGranteeGrantsRequest({ value, fee, memo }: sendQueryGranteeGrantsRequestParams): Promise<DeliverTxResponse>;
    sendGrantAuthorization({ value, fee, memo }: sendGrantAuthorizationParams): Promise<DeliverTxResponse>;
    sendEventRevoke({ value, fee, memo }: sendEventRevokeParams): Promise<DeliverTxResponse>;
    sendMsgRevokeResponse({ value, fee, memo }: sendMsgRevokeResponseParams): Promise<DeliverTxResponse>;
    sendGrant({ value, fee, memo }: sendGrantParams): Promise<DeliverTxResponse>;
    sendQueryGrantsRequest({ value, fee, memo }: sendQueryGrantsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGranteeGrantsResponse({ value, fee, memo }: sendQueryGranteeGrantsResponseParams): Promise<DeliverTxResponse>;
    sendGrantQueueItem({ value, fee, memo }: sendGrantQueueItemParams): Promise<DeliverTxResponse>;
    sendEventGrant({ value, fee, memo }: sendEventGrantParams): Promise<DeliverTxResponse>;
    sendMsgExec({ value, fee, memo }: sendMsgExecParams): Promise<DeliverTxResponse>;
    sendQueryGranterGrantsRequest({ value, fee, memo }: sendQueryGranterGrantsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGranterGrantsResponse({ value, fee, memo }: sendQueryGranterGrantsResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendGenericAuthorization({ value, fee, memo }: sendGenericAuthorizationParams): Promise<DeliverTxResponse>;
    sendMsgExecResponse({ value, fee, memo }: sendMsgExecResponseParams): Promise<DeliverTxResponse>;
    sendMsgRevoke({ value, fee, memo }: sendMsgRevokeParams): Promise<DeliverTxResponse>;
    msgGrant({ value }: msgGrantParams): EncodeObject;
    msgGrantResponse({ value }: msgGrantResponseParams): EncodeObject;
    queryGrantsResponse({ value }: queryGrantsResponseParams): EncodeObject;
    queryGranteeGrantsRequest({ value }: queryGranteeGrantsRequestParams): EncodeObject;
    grantAuthorization({ value }: grantAuthorizationParams): EncodeObject;
    eventRevoke({ value }: eventRevokeParams): EncodeObject;
    msgRevokeResponse({ value }: msgRevokeResponseParams): EncodeObject;
    grant({ value }: grantParams): EncodeObject;
    queryGrantsRequest({ value }: queryGrantsRequestParams): EncodeObject;
    queryGranteeGrantsResponse({ value }: queryGranteeGrantsResponseParams): EncodeObject;
    grantQueueItem({ value }: grantQueueItemParams): EncodeObject;
    eventGrant({ value }: eventGrantParams): EncodeObject;
    msgExec({ value }: msgExecParams): EncodeObject;
    queryGranterGrantsRequest({ value }: queryGranterGrantsRequestParams): EncodeObject;
    queryGranterGrantsResponse({ value }: queryGranterGrantsResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    genericAuthorization({ value }: genericAuthorizationParams): EncodeObject;
    msgExecResponse({ value }: msgExecResponseParams): EncodeObject;
    msgRevoke({ value }: msgRevokeParams): EncodeObject;
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
        CosmosAuthzV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
