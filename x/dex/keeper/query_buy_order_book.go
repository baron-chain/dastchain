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

func (k Keeper) BuyOrderBookAll(ctx context.Context, req *types.QueryAllBuyOrderBookRequest) (*types.QueryAllBuyOrderBookResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var buyOrderBooks []types.BuyOrderBook

	store := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	buyOrderBookStore := prefix.NewStore(store, types.KeyPrefix(types.BuyOrderBookKeyPrefix))

	pageRes, err := query.Paginate(buyOrderBookStore, req.Pagination, func(key []byte, value []byte) error {
		var buyOrderBook types.BuyOrderBook
		if err := k.cdc.Unmarshal(value, &buyOrderBook); err != nil {
			return err
		}

		buyOrderBooks = append(buyOrderBooks, buyOrderBook)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllBuyOrderBookResponse{BuyOrderBook: buyOrderBooks, Pagination: pageRes}, nil
}

func (k Keeper) BuyOrderBook(ctx context.Context, req *types.QueryGetBuyOrderBookRequest) (*types.QueryGetBuyOrderBookResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	val, found := k.GetBuyOrderBook(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetBuyOrderBookResponse{BuyOrderBook: val}, nil
}
