package keeper

import (
	"context"

	"cosmossdk.io/store/prefix"
	storetypes "cosmossdk.io/store/types"
	"dastchain/x/dex/types"
	"github.com/cosmos/cosmos-sdk/runtime"
)

// SetSellOrderBook set a specific sellOrderBook in the store from its index
func (k Keeper) SetSellOrderBook(ctx context.Context, sellOrderBook types.SellOrderBook) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.SellOrderBookKeyPrefix))
	b := k.cdc.MustMarshal(&sellOrderBook)
	store.Set(types.SellOrderBookKey(
		sellOrderBook.Index,
	), b)
}

// GetSellOrderBook returns a sellOrderBook from its index
func (k Keeper) GetSellOrderBook(
	ctx context.Context,
	index string,

) (val types.SellOrderBook, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.SellOrderBookKeyPrefix))

	b := store.Get(types.SellOrderBookKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveSellOrderBook removes a sellOrderBook from the store
func (k Keeper) RemoveSellOrderBook(
	ctx context.Context,
	index string,

) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.SellOrderBookKeyPrefix))
	store.Delete(types.SellOrderBookKey(
		index,
	))
}

// GetAllSellOrderBook returns all sellOrderBook
func (k Keeper) GetAllSellOrderBook(ctx context.Context) (list []types.SellOrderBook) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.SellOrderBookKeyPrefix))
	iterator := storetypes.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.SellOrderBook
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
