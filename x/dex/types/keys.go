package types

const (
	// ModuleName defines the module name
	ModuleName = "dex"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_dex"

	// Version defines the current version the IBC module supports
	Version = "dex-1"

	// PortID is the default port id that module binds to
	PortID = "dex"
)

var (
	ParamsKey = []byte("p_dex")
)

var (
	// PortKey defines the key to store the port ID in store
	PortKey = KeyPrefix("dex-port-")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
