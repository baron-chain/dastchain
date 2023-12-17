package dex

import (
	"math/rand"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"

	"dastchain/testutil/sample"
	dexsimulation "dastchain/x/dex/simulation"
	"dastchain/x/dex/types"
)

// avoid unused import issue
var (
	_ = dexsimulation.FindAccount
	_ = rand.Rand{}
	_ = sample.AccAddress
	_ = sdk.AccAddress{}
	_ = simulation.MsgEntryKind
)

const (
	opWeightMsgCancelSellOrder = "op_weight_msg_cancel_sell_order"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCancelSellOrder int = 100

	opWeightMsgCancelBuyOrder = "op_weight_msg_cancel_buy_order"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCancelBuyOrder int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module.
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	dexGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&dexGenesis)
}

// RegisterStoreDecoder registers a decoder.
func (am AppModule) RegisterStoreDecoder(_ simtypes.StoreDecoderRegistry) {}

// ProposalContents doesn't return any content functions for governance proposals.
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCancelSellOrder int
	simState.AppParams.GetOrGenerate(opWeightMsgCancelSellOrder, &weightMsgCancelSellOrder, nil,
		func(_ *rand.Rand) {
			weightMsgCancelSellOrder = defaultWeightMsgCancelSellOrder
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCancelSellOrder,
		dexsimulation.SimulateMsgCancelSellOrder(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCancelBuyOrder int
	simState.AppParams.GetOrGenerate(opWeightMsgCancelBuyOrder, &weightMsgCancelBuyOrder, nil,
		func(_ *rand.Rand) {
			weightMsgCancelBuyOrder = defaultWeightMsgCancelBuyOrder
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCancelBuyOrder,
		dexsimulation.SimulateMsgCancelBuyOrder(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}

// ProposalMsgs returns msgs used for governance proposals for simulations.
func (am AppModule) ProposalMsgs(simState module.SimulationState) []simtypes.WeightedProposalMsg {
	return []simtypes.WeightedProposalMsg{
		simulation.NewWeightedProposalMsg(
			opWeightMsgCancelSellOrder,
			defaultWeightMsgCancelSellOrder,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				dexsimulation.SimulateMsgCancelSellOrder(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgCancelBuyOrder,
			defaultWeightMsgCancelBuyOrder,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				dexsimulation.SimulateMsgCancelBuyOrder(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		// this line is used by starport scaffolding # simapp/module/OpMsg
	}
}
