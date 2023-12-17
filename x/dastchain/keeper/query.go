package keeper

import (
	"dastchain/x/dastchain/types"
)

var _ types.QueryServer = Keeper{}
