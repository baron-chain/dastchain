package keeper

import (
	"context"

	"cosmossdk.io/store/prefix"
	storetypes "cosmossdk.io/store/types"
	"dastchain/x/dex/types"
	"github.com/cosmos/cosmos-sdk/runtime"
)

// SetDenomTrace set a specific denomTrace in the store from its index
func (k Keeper) SetDenomTrace(ctx context.Context, denomTrace types.DenomTrace) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.DenomTraceKeyPrefix))
	b := k.cdc.MustMarshal(&denomTrace)
	store.Set(types.DenomTraceKey(
		denomTrace.Index,
	), b)
}

// GetDenomTrace returns a denomTrace from its index
func (k Keeper) GetDenomTrace(
	ctx context.Context,
	index string,

) (val types.DenomTrace, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.DenomTraceKeyPrefix))

	b := store.Get(types.DenomTraceKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveDenomTrace removes a denomTrace from the store
func (k Keeper) RemoveDenomTrace(
	ctx context.Context,
	index string,

) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.DenomTraceKeyPrefix))
	store.Delete(types.DenomTraceKey(
		index,
	))
}

// GetAllDenomTrace returns all denomTrace
func (k Keeper) GetAllDenomTrace(ctx context.Context) (list []types.DenomTrace) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.DenomTraceKeyPrefix))
	iterator := storetypes.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.DenomTrace
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
