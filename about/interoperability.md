# Interoperability

::: warning
This document is subject to update as EVM interoperability with different chains (EVM, BTC, Solana) is being developed across the crypto ecosystem.
:::

::: info
It is recommended to read [Interoperability explained by Optimism](https://docs.optimism.io/interop/explainer)
:::

Because CPUchain supports Solidity Smart Contract with feature-rich APIs that could be called to compose functions that could validate input data for different EVM-like chains with minimal proofs, it is possible to compose a bridging system that calls other EVM-compatible chains with any arbitrary messages in asynchronous/synchronous fashion.

Not only would we build a cross-chain messaging bridge that could connect with popular EVM chains (Base, BNB chain, Ethereum), but also we would onboard bridging partners that support [Cross-Chain Interoperability Protocol (CCIP)](https://docs.chain.link/ccip) calls.

For off-chain CPUchain supports [standard EVM RPC calls](https://ethereum.github.io/execution-apis), so any EVM Applications like Browser Wallets, Mobile Wallets, DApps would be supported if they support [adding custom EVM chains](https://support.metamask.io/more-web3/learn/user-guide-custom-networks-and-sidechains/)