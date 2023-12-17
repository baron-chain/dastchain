package keeper

import (
	"dastchain/x/tokenfactory/types"
)

var _ types.QueryServer = Keeper{}
