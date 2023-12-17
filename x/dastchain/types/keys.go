package types

const (
	// ModuleName defines the module name
	ModuleName = "dastchain"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_dastchain"
)

var (
	ParamsKey = []byte("p_dastchain")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
