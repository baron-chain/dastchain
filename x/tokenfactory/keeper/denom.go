package keeper

import (
	"context"

	"dastchain/x/tokenfactory/types"

	"cosmossdk.io/store/prefix"
	storetypes "cosmossdk.io/store/types"
	"github.com/cosmos/cosmos-sdk/runtime"
)

// SetDenom set a specific denom in the store from its index
func (k Keeper) SetDenom(ctx context.Context, denom types.Denom) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.DenomKeyPrefix))
	b := k.cdc.MustMarshal(&denom)
	store.Set(types.DenomKey(
		denom.Denom,
	), b)
}

// GetDenom returns a denom from its index
func (k Keeper) GetDenom(
	ctx context.Context,
	denom string,

) (val types.Denom, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.DenomKeyPrefix))

	b := store.Get(types.DenomKey(
		denom,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// GetAllDenom returns all denom
func (k Keeper) GetAllDenom(ctx context.Context) (list []types.Denom) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.DenomKeyPrefix))
	iterator := storetypes.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Denom
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
