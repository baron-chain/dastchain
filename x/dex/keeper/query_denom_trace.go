package keeper

import (
	"context"

	"cosmossdk.io/store/prefix"
	"dastchain/x/dex/types"
	"github.com/cosmos/cosmos-sdk/runtime"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) DenomTraceAll(ctx context.Context, req *types.QueryAllDenomTraceRequest) (*types.QueryAllDenomTraceResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var denomTraces []types.DenomTrace

	store := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	denomTraceStore := prefix.NewStore(store, types.KeyPrefix(types.DenomTraceKeyPrefix))

	pageRes, err := query.Paginate(denomTraceStore, req.Pagination, func(key []byte, value []byte) error {
		var denomTrace types.DenomTrace
		if err := k.cdc.Unmarshal(value, &denomTrace); err != nil {
			return err
		}

		denomTraces = append(denomTraces, denomTrace)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllDenomTraceResponse{DenomTrace: denomTraces, Pagination: pageRes}, nil
}

func (k Keeper) DenomTrace(ctx context.Context, req *types.QueryGetDenomTraceRequest) (*types.QueryGetDenomTraceResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	val, found := k.GetDenomTrace(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetDenomTraceResponse{DenomTrace: val}, nil
}
