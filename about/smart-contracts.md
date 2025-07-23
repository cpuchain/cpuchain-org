# Smart Contracts

::: info
Learn more about Smart Contracts from [the Wikipedia Article](https://en.wikipedia.org/wiki/Smart_contract) and [Ethereum Homepage](https://ethereum.org/en/developers/docs/smart-contracts/)
:::

CPUchain supports General Smart Contracts that could be deployed and executed by user transactions via embedded [EVM (Ethereum Virtual Machine) engine](https://ethereum.org/en/developers/docs/evm/) integrated on CPUchain nodes.

Every full node is required to import and execute smart contracts with function inputs embedded on the transaction input field. This guarantees that the Smart Contract is actually a "contract" that is valid and gains validity across the network.

Being said, Smart Contracts don't have exceptions, and every behavior can be executed deterministically. When executed, it stores data on account state and transaction receipts, which could be derived by user-facing read-only nodes. And it is what constructs core data for so-called [DApps ( Decentralized Applications )](https://en.wikipedia.org/wiki/Decentralized_application)

CPUchain supports Smart Contracts written on [Solidity Language](https://soliditylang.org/), a type-safe programming language with C-like syntax. You can code and deploy Smart Contracts on CPUchain via popular Solidity tools like [Remix Web IDE](https://remix.ethereum.org) or command-line tools like [Foundry](https://getfoundry.sh/) or [Hardhat](https://hardhat.org/).