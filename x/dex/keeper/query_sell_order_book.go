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

func (k Keeper) SellOrderBookAll(ctx context.Context, req *types.QueryAllSellOrderBookRequest) (*types.QueryAllSellOrderBookResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var sellOrderBooks []types.SellOrderBook

	store := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	sellOrderBookStore := prefix.NewStore(store, types.KeyPrefix(types.SellOrderBookKeyPrefix))

	pageRes, err := query.Paginate(sellOrderBookStore, req.Pagination, func(key []byte, value []byte) error {
		var sellOrderBook types.SellOrderBook
		if err := k.cdc.Unmarshal(value, &sellOrderBook); err != nil {
			return err
		}

		sellOrderBooks = append(sellOrderBooks, sellOrderBook)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllSellOrderBookResponse{SellOrderBook: sellOrderBooks, Pagination: pageRes}, nil
}

func (k Keeper) SellOrderBook(ctx context.Context, req *types.QueryGetSellOrderBookRequest) (*types.QueryGetSellOrderBookResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	val, found := k.GetSellOrderBook(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetSellOrderBookResponse{SellOrderBook: val}, nil
}
