# Hardforks

Currently EVM network for CPUchain supports up to [London](https://eips.ethereum.org/EIPS/eip-7568#london-el) hardfork as known as EIP-1559 without any modifications.

You could also refer the fork configuration for CPUchain node

https://github.com/cpuchain/go-cpuchain/blob/wip-yespower/params/config_cpuchain.go

### Solidity Version

Recommendation for solidity compiler configuration would be

* Solidity Version: `0.8.30`

* EVM Version: `london` or `paris`

* Optimization: `enabled`

* Optimization runs: `200`

Size limit per contract deployment (24KB or 24576 bytes) applies, also transaction gas limit is supported up to 16.77M