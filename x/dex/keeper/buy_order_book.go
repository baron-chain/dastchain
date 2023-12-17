package keeper

import (
	"context"

	"cosmossdk.io/store/prefix"
	storetypes "cosmossdk.io/store/types"
	"dastchain/x/dex/types"
	"github.com/cosmos/cosmos-sdk/runtime"
)

// SetBuyOrderBook set a specific buyOrderBook in the store from its index
func (k Keeper) SetBuyOrderBook(ctx context.Context, buyOrderBook types.BuyOrderBook) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.BuyOrderBookKeyPrefix))
	b := k.cdc.MustMarshal(&buyOrderBook)
	store.Set(types.BuyOrderBookKey(
		buyOrderBook.Index,
	), b)
}

// GetBuyOrderBook returns a buyOrderBook from its index
func (k Keeper) GetBuyOrderBook(
	ctx context.Context,
	index string,

) (val types.BuyOrderBook, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.BuyOrderBookKeyPrefix))

	b := store.Get(types.BuyOrderBookKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveBuyOrderBook removes a buyOrderBook from the store
func (k Keeper) RemoveBuyOrderBook(
	ctx context.Context,
	index string,

) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.BuyOrderBookKeyPrefix))
	store.Delete(types.BuyOrderBookKey(
		index,
	))
}

// GetAllBuyOrderBook returns all buyOrderBook
func (k Keeper) GetAllBuyOrderBook(ctx context.Context) (list []types.BuyOrderBook) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.BuyOrderBookKeyPrefix))
	iterator := storetypes.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.BuyOrderBook
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
