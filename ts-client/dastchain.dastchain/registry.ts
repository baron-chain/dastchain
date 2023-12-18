import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateParamsResponse } from "./types/dastchain/dastchain/tx";
import { GenesisState } from "./types/dastchain/dastchain/genesis";
import { QueryParamsRequest } from "./types/dastchain/dastchain/query";
import { QueryParamsResponse } from "./types/dastchain/dastchain/query";
import { MsgUpdateParams } from "./types/dastchain/dastchain/tx";
import { Params } from "./types/dastchain/dastchain/params";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/dastchain.dastchain.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/dastchain.dastchain.GenesisState", GenesisState],
    ["/dastchain.dastchain.QueryParamsRequest", QueryParamsRequest],
    ["/dastchain.dastchain.QueryParamsResponse", QueryParamsResponse],
    ["/dastchain.dastchain.MsgUpdateParams", MsgUpdateParams],
    ["/dastchain.dastchain.Params", Params],
    
];

export { msgTypes }