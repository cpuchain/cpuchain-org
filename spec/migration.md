# Migration

::: warning
Mining rewards on BTC-fork chain (classic chain) are permanently disabled and will resume on EVM-chain
:::

::: warning
New EVM mainnet is on active development and when migration portal is ready we will update the current page and make announcements
:::

To mitigate inflationary bug from 6 years old Bitcoin-fork based network ([CPUchain Core](https://github.com/cpuchain/cpuchain), or classic chain) and to support Smart Contracts for DeFi use, we decided to migrate Yespower mining and current user balance to an EVM-compatible network which is based on a [go-ethereum](https://geth.ethereum.org/) forked node [Core-Geth](https://github.com/etclabscore/core-geth) ( Which has maintained PoW mining support, maintained by Ethereum Classic devs ).

New [Full Node](https://github.com/cpuchain/go-cpuchain), new [mining pool software](https://github.com/cpuchain/open-cpuchain-pool), and new [reference miner](https://github.com/cpuchain/yesminer-js) have necessary features fully implemented and are currently in testing phase for production use.

User Migration Portal to migrate balance from BTC-fork chain to EVM chain is on development with the full BTC-EVM bridge implementation that could verify BTC-like UTXO transactions on-chain via Solidity Library.

When every necessary component is thoroughly tested for production use, we will schedule mainnet launch of EVM chain and open migration portal to help migrate CPU balance from old chain to new one.