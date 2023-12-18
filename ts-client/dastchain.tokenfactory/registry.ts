import { GeneratedType } from "@cosmjs/proto-signing";
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

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/dastchain.tokenfactory.QueryParamsRequest", QueryParamsRequest],
    ["/dastchain.tokenfactory.MsgCreateDenom", MsgCreateDenom],
    ["/dastchain.tokenfactory.MsgUpdateDenomResponse", MsgUpdateDenomResponse],
    ["/dastchain.tokenfactory.MsgUpdateDenom", MsgUpdateDenom],
    ["/dastchain.tokenfactory.QueryParamsResponse", QueryParamsResponse],
    ["/dastchain.tokenfactory.QueryGetDenomResponse", QueryGetDenomResponse],
    ["/dastchain.tokenfactory.Params", Params],
    ["/dastchain.tokenfactory.MsgUpdateParams", MsgUpdateParams],
    ["/dastchain.tokenfactory.GenesisState", GenesisState],
    ["/dastchain.tokenfactory.MsgCreateDenomResponse", MsgCreateDenomResponse],
    ["/dastchain.tokenfactory.QueryGetDenomRequest", QueryGetDenomRequest],
    ["/dastchain.tokenfactory.QueryAllDenomRequest", QueryAllDenomRequest],
    ["/dastchain.tokenfactory.QueryAllDenomResponse", QueryAllDenomResponse],
    ["/dastchain.tokenfactory.Denom", Denom],
    ["/dastchain.tokenfactory.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    
];

export { msgTypes }