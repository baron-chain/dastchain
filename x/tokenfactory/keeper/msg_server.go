package keeper

import (
	"context"
	"dastchain/x/tokenfactory/types"
)

type msgServer struct {
	Keeper
}

// DeleteDenom implements types.MsgServer.
func (*msgServer) DeleteDenom(context.Context, *types.MsgDeleteDenom) (*types.MsgDeleteDenomResponse, error) {
	panic("unimplemented")
}

// NewMsgServerImpl returns an implementation of the MsgServer interface
// for the provided Keeper.
func NewMsgServerImpl(keeper Keeper) types.MsgServer {
	return &msgServer{Keeper: keeper}
}
