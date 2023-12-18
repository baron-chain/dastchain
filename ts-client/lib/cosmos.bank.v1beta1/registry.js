import { SendEnabled } from "./types/cosmos/bank/v1beta1/bank";
import { QueryParamsRequest } from "./types/cosmos/bank/v1beta1/query";
import { Supply } from "./types/cosmos/bank/v1beta1/bank";
import { QueryDenomMetadataRequest } from "./types/cosmos/bank/v1beta1/query";
import { QueryAllBalancesResponse } from "./types/cosmos/bank/v1beta1/query";
import { MsgMultiSendResponse } from "./types/cosmos/bank/v1beta1/tx";
import { Output } from "./types/cosmos/bank/v1beta1/bank";
import { QueryDenomMetadataByQueryStringRequest } from "./types/cosmos/bank/v1beta1/query";
import { Params } from "./types/cosmos/bank/v1beta1/bank";
import { MsgSetSendEnabledResponse } from "./types/cosmos/bank/v1beta1/tx";
import { QueryTotalSupplyResponse } from "./types/cosmos/bank/v1beta1/query";
import { QuerySupplyOfRequest } from "./types/cosmos/bank/v1beta1/query";
import { Metadata } from "./types/cosmos/bank/v1beta1/bank";
import { MsgSend } from "./types/cosmos/bank/v1beta1/tx";
import { MsgSetSendEnabled } from "./types/cosmos/bank/v1beta1/tx";
import { MsgMultiSend } from "./types/cosmos/bank/v1beta1/tx";
import { QueryDenomMetadataByQueryStringResponse } from "./types/cosmos/bank/v1beta1/query";
import { QuerySpendableBalancesRequest } from "./types/cosmos/bank/v1beta1/query";
import { QueryDenomsMetadataResponse } from "./types/cosmos/bank/v1beta1/query";
import { GenesisState } from "./types/cosmos/bank/v1beta1/genesis";
import { QuerySendEnabledRequest } from "./types/cosmos/bank/v1beta1/query";
import { QueryBalanceRequest } from "./types/cosmos/bank/v1beta1/query";
import { QuerySpendableBalanceByDenomRequest } from "./types/cosmos/bank/v1beta1/query";
import { QueryDenomsMetadataRequest } from "./types/cosmos/bank/v1beta1/query";
import { QuerySpendableBalanceByDenomResponse } from "./types/cosmos/bank/v1beta1/query";
import { QuerySupplyOfResponse } from "./types/cosmos/bank/v1beta1/query";
import { QueryDenomOwnersRequest } from "./types/cosmos/bank/v1beta1/query";
import { QueryDenomOwnersResponse } from "./types/cosmos/bank/v1beta1/query";
import { QuerySendEnabledResponse } from "./types/cosmos/bank/v1beta1/query";
import { MsgUpdateParams } from "./types/cosmos/bank/v1beta1/tx";
import { QueryParamsResponse } from "./types/cosmos/bank/v1beta1/query";
import { DenomUnit } from "./types/cosmos/bank/v1beta1/bank";
import { MsgSendResponse } from "./types/cosmos/bank/v1beta1/tx";
import { QueryTotalSupplyRequest } from "./types/cosmos/bank/v1beta1/query";
import { Input } from "./types/cosmos/bank/v1beta1/bank";
import { MsgUpdateParamsResponse } from "./types/cosmos/bank/v1beta1/tx";
import { Balance } from "./types/cosmos/bank/v1beta1/genesis";
import { SendAuthorization } from "./types/cosmos/bank/v1beta1/authz";
import { QueryDenomMetadataResponse } from "./types/cosmos/bank/v1beta1/query";
import { QueryBalanceResponse } from "./types/cosmos/bank/v1beta1/query";
import { QueryAllBalancesRequest } from "./types/cosmos/bank/v1beta1/query";
import { QuerySpendableBalancesResponse } from "./types/cosmos/bank/v1beta1/query";
import { DenomOwner } from "./types/cosmos/bank/v1beta1/query";
const msgTypes = [
    ["/cosmos.bank.v1beta1.SendEnabled", SendEnabled],
    ["/cosmos.bank.v1beta1.QueryParamsRequest", QueryParamsRequest],
    ["/cosmos.bank.v1beta1.Supply", Supply],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataRequest", QueryDenomMetadataRequest],
    ["/cosmos.bank.v1beta1.QueryAllBalancesResponse", QueryAllBalancesResponse],
    ["/cosmos.bank.v1beta1.MsgMultiSendResponse", MsgMultiSendResponse],
    ["/cosmos.bank.v1beta1.Output", Output],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringRequest", QueryDenomMetadataByQueryStringRequest],
    ["/cosmos.bank.v1beta1.Params", Params],
    ["/cosmos.bank.v1beta1.MsgSetSendEnabledResponse", MsgSetSendEnabledResponse],
    ["/cosmos.bank.v1beta1.QueryTotalSupplyResponse", QueryTotalSupplyResponse],
    ["/cosmos.bank.v1beta1.QuerySupplyOfRequest", QuerySupplyOfRequest],
    ["/cosmos.bank.v1beta1.Metadata", Metadata],
    ["/cosmos.bank.v1beta1.MsgSend", MsgSend],
    ["/cosmos.bank.v1beta1.MsgSetSendEnabled", MsgSetSendEnabled],
    ["/cosmos.bank.v1beta1.MsgMultiSend", MsgMultiSend],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringResponse", QueryDenomMetadataByQueryStringResponse],
    ["/cosmos.bank.v1beta1.QuerySpendableBalancesRequest", QuerySpendableBalancesRequest],
    ["/cosmos.bank.v1beta1.QueryDenomsMetadataResponse", QueryDenomsMetadataResponse],
    ["/cosmos.bank.v1beta1.GenesisState", GenesisState],
    ["/cosmos.bank.v1beta1.QuerySendEnabledRequest", QuerySendEnabledRequest],
    ["/cosmos.bank.v1beta1.QueryBalanceRequest", QueryBalanceRequest],
    ["/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest", QuerySpendableBalanceByDenomRequest],
    ["/cosmos.bank.v1beta1.QueryDenomsMetadataRequest", QueryDenomsMetadataRequest],
    ["/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse", QuerySpendableBalanceByDenomResponse],
    ["/cosmos.bank.v1beta1.QuerySupplyOfResponse", QuerySupplyOfResponse],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersRequest", QueryDenomOwnersRequest],
    ["/cosmos.bank.v1beta1.QueryDenomOwnersResponse", QueryDenomOwnersResponse],
    ["/cosmos.bank.v1beta1.QuerySendEnabledResponse", QuerySendEnabledResponse],
    ["/cosmos.bank.v1beta1.MsgUpdateParams", MsgUpdateParams],
    ["/cosmos.bank.v1beta1.QueryParamsResponse", QueryParamsResponse],
    ["/cosmos.bank.v1beta1.DenomUnit", DenomUnit],
    ["/cosmos.bank.v1beta1.MsgSendResponse", MsgSendResponse],
    ["/cosmos.bank.v1beta1.QueryTotalSupplyRequest", QueryTotalSupplyRequest],
    ["/cosmos.bank.v1beta1.Input", Input],
    ["/cosmos.bank.v1beta1.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/cosmos.bank.v1beta1.Balance", Balance],
    ["/cosmos.bank.v1beta1.SendAuthorization", SendAuthorization],
    ["/cosmos.bank.v1beta1.QueryDenomMetadataResponse", QueryDenomMetadataResponse],
    ["/cosmos.bank.v1beta1.QueryBalanceResponse", QueryBalanceResponse],
    ["/cosmos.bank.v1beta1.QueryAllBalancesRequest", QueryAllBalancesRequest],
    ["/cosmos.bank.v1beta1.QuerySpendableBalancesResponse", QuerySpendableBalancesResponse],
    ["/cosmos.bank.v1beta1.DenomOwner", DenomOwner],
];
export { msgTypes };
