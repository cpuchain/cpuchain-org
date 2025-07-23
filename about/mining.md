# Mining

::: warning
Mining rewards on BTC-fork chain (classic chain) are permanently disabled and will resume on EVM-chain
:::

::: info
For general explanation of how Blockchain Mining ( or Proof-of-Work scheme ) works kindly refer [the Wikipedia article](https://en.wikipedia.org/wiki/Proof_of_work) or [Bitcoin Wiki](https://en.bitcoin.it/wiki/Mining)
:::

Mining is a core of CPUchain network. We use Proof-of-Work scheme to select appropriate miners to include transactions onto the public ledger and compose block units to publish.

We have chosen [Yespower Proof-of-Work Scheme](https://www.openwall.com/yespower/) because we think keeping the promise of [One-CPU-One-Vote rule](https://bitcoin.stackexchange.com/questions/5638/what-is-the-motivation-behind-one-cpu-one-vote-rule) is what we could fairly build the public ledger without giving any weighted powers to the party with Large Stake or the party with Specialized Hardware ( like FPGAs or ASICs ).

### Rewarding block builders

Not only do miners build blocks, but they also gain transaction fees and block rewards defined by consensus. They play a crucial role in issuing new coins by hash rate competition and distribute them to the market, creating a fair value token economy.

Coins distributed by Proof-of-Work gain native value that miners have spent to find an appropriate nonce by growing difficulty value, which costs computation power and energy resources.

Bitcoin and CPUchain also advance this ecosystem by implementing halving, a crucial consensus function that limits the total supply of the coin that can be issued for lifetime and thus increases scarcity, which drives competition to gain supply when available on the market.