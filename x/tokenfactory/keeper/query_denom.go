package keeper

import (
	"context"

	"cosmossdk.io/store/prefix"
	"dastchain/x/tokenfactory/types"
	"github.com/cosmos/cosmos-sdk/runtime"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) DenomAll(ctx context.Context, req *types.QueryAllDenomRequest) (*types.QueryAllDenomResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var denoms []types.Denom

	store := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	denomStore := prefix.NewStore(store, types.KeyPrefix(types.DenomKeyPrefix))

	pageRes, err := query.Paginate(denomStore, req.Pagination, func(key []byte, value []byte) error {
		var denom types.Denom
		if err := k.cdc.Unmarshal(value, &denom); err != nil {
			return err
		}

		denoms = append(denoms, denom)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllDenomResponse{Denom: denoms, Pagination: pageRes}, nil
}

func (k Keeper) Denom(ctx context.Context, req *types.QueryGetDenomRequest) (*types.QueryGetDenomResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	val, found := k.GetDenom(
		ctx,
		req.Denom,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetDenomResponse{Denom: val}, nil
}
