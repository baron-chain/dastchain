package dastchain_test

import (
	"testing"

	keepertest "dastchain/testutil/keeper"
	"dastchain/testutil/nullify"
	"dastchain/x/dastchain/module"
	"dastchain/x/dastchain/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.DastchainKeeper(t)
	dastchain.InitGenesis(ctx, k, genesisState)
	got := dastchain.ExportGenesis(ctx, k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
