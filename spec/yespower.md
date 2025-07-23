# Yespower

We use two different [Yespower](https://www.openwall.com/yespower/) variant algorithm (CPUpower, YespowerEVM) for two different chains

### CPUpower

CPUpower is named after the Yespower algorithm with custom params used for CPUchain Core (BTC-fork) network

See paramaters section on [cpuminer-opt repo](https://github.com/JayDDee/cpuminer-opt?tab=readme-ov-file#supported-algorithms) as well.

Params Key             | Value
---------------------- | ----------------
**Algo:**              | Yespower
**RPC method:**        | [getblocktemplate](https://en.bitcoin.it/wiki/Getblocktemplate)
**Param Key (Pers):**  | "CPUpower: The number of CPU working or available for proof-of-work mining"
**Param N:**           | 2048 (Default)
**Param R:**           | 32   (Default)

### YespowerEVM

Unlike CPUpower, we don't use custom Pers, N, r Yespower Params for YespowerEVM.

However, you should keep in mind the block hash algorithm (that hashes EVM block header bytes), and the RPC method that is also used for [Ethash](https://bitcoinwiki.org/wiki/ethash) mining.

Also, to prevent DDOS against pools and to support Cloudflare, we encourage pools/mining software to support [Ethereum Stratum](https://github.com/sammy007/open-ethereum-pool/blob/master/docs/STRATUM.md) over WebSocket (Port, Endpoint doesn't matter).

By supporting Stratum over Websocket, it is possible to support Browser Miners or mining on a sandboxed environment where raw TCP connection isn't available, which further enhances decentralization.

Refer to our [reference pool implementation](https://github.com/cpuchain/open-cpuchain-pool/blob/master/proxy/websocket.go) and [reference miner implementation](https://github.com/cpuchain/yesminer-js/blob/main/src/websocket.ts) of how Stratum over WebSocket works.

Params Key                        | Value
--------------------------------- | ----------------
**Algo:**                         | Yespower
**Block hash algo:**              | [keccak256](https://github.com/ethereum/eth-hash) (same as ethash or solidity api)
**Stratum (to connect miners):**  | HTTP ETH RPC (8545) / WS ETH RPC (8545, 8546) / [Stratum](https://github.com/sammy007/open-ethereum-pool/blob/master/docs/STRATUM.md) over WebSocket / Stratum over TCP (Unmaintained, discouraged) 
**RPC method:**                   | [eth_getWork](https://openethereum.github.io/JSONRPC-eth-module#eth_getwork)
**RPC params:**                   | block header hash (used), dag seed hash (replaced with block target for mining softwares to check if block is found, not strictly necessary but recommended for pools), block target (used), block number (used)
**Param Key (Pers):**             | "" ( N/A )
**Param N:**                      | 2048 (Default)
**Param R:**                      | 32   (Default)