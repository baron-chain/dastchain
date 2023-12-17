package keeper

import (
	"dastchain/x/dex/types"
)

var _ types.QueryServer = Keeper{}
