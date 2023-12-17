package dex

import (
	autocliv1 "cosmossdk.io/api/cosmos/autocli/v1"

	modulev1 "dastchain/api/dastchain/dex"
)

// AutoCLIOptions implements the autocli.HasAutoCLIConfig interface.
func (am AppModule) AutoCLIOptions() *autocliv1.ModuleOptions {
	return &autocliv1.ModuleOptions{
		Query: &autocliv1.ServiceCommandDescriptor{
			Service: modulev1.Query_ServiceDesc.ServiceName,
			RpcCommandOptions: []*autocliv1.RpcCommandOptions{
				{
					RpcMethod: "Params",
					Use:       "params",
					Short:     "Shows the parameters of the module",
				},
				{
					RpcMethod: "SellOrderBookAll",
					Use:       "list-sell-order-book",
					Short:     "List all sell-order-book",
				},
				{
					RpcMethod:      "SellOrderBook",
					Use:            "show-sell-order-book [id]",
					Short:          "Shows a sell-order-book",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "index"}},
				},
				{
					RpcMethod: "BuyOrderBookAll",
					Use:       "list-buy-order-book",
					Short:     "List all buy-order-book",
				},
				{
					RpcMethod:      "BuyOrderBook",
					Use:            "show-buy-order-book [id]",
					Short:          "Shows a buy-order-book",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "index"}},
				},
				{
					RpcMethod: "DenomTraceAll",
					Use:       "list-denom-trace",
					Short:     "List all denom-trace",
				},
				{
					RpcMethod:      "DenomTrace",
					Use:            "show-denom-trace [id]",
					Short:          "Shows a denom-trace",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "index"}},
				},
				// this line is used by ignite scaffolding # autocli/query
			},
		},
		Tx: &autocliv1.ServiceCommandDescriptor{
			Service:              modulev1.Msg_ServiceDesc.ServiceName,
			EnhanceCustomCommand: true, // only required if you want to use the custom command
			RpcCommandOptions: []*autocliv1.RpcCommandOptions{
				{
					RpcMethod: "UpdateParams",
					Skip:      true, // skipped because authority gated
				},
				{
					RpcMethod:      "CancelSellOrder",
					Use:            "cancel-sell-order [port] [channel] [amount-denom] [price-denom] [order-id]",
					Short:          "Send a cancel-sell-order tx",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "port"}, {ProtoField: "channel"}, {ProtoField: "amountDenom"}, {ProtoField: "priceDenom"}, {ProtoField: "orderId"}},
				},
				{
					RpcMethod:      "CancelBuyOrder",
					Use:            "cancel-buy-order [port] [channel] [amount-denom] [price-denom] [order-id]",
					Short:          "Send a cancel-buy-order tx",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "port"}, {ProtoField: "channel"}, {ProtoField: "amountDenom"}, {ProtoField: "priceDenom"}, {ProtoField: "orderId"}},
				},
				// this line is used by ignite scaffolding # autocli/tx
			},
		},
	}
}
