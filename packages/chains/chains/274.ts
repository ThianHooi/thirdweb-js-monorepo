import type { Chain } from "../src/types";
export default {
  "name": "LaChain",
  "chain": "LaChain",
  "rpc": [
    "https://lachain-lachain.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc1.mainnet.lachain.network",
    "https://rpc2.mainnet.lachain.network"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "LaCoin",
    "symbol": "LAC",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "",
  "shortName": "lachain",
  "chainId": 274,
  "networkId": 274,
  "explorers": [
    {
      "name": "LaChain Explorer",
      "url": "https://explorer.lachain.network",
      "standard": "EIP3091"
    }
  ],
  "testnet": false,
  "slug": "lachain-lachain"
} as const satisfies Chain;