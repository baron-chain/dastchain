const apiURL = import.meta.env.VITE_API_COSMOS ?? "http://3.70.46.121:1317";
const rpcURL = import.meta.env.VITE_WS_TENDERMINT ?? "http://3.70.46.121:26657";
const prefix = import.meta.env.VITE_ADDRESS_PREFIX ?? "dast";

export const env = {
  apiURL,
  rpcURL,
  prefix,
};
