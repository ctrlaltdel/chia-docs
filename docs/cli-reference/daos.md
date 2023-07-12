---
sidebar_label: DAOs
title: DAO CLI
slug: /dao-cli
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

This document contains a comprehensive reference of Chia DAO CLI commands and options.

## Reference

## `add`

Functionality: Create a wallet for an existing DAO

Usage: chia dao add [OPTIONS]

Options:

| Short Command | Long Command      | Type    | Required | Description                                                                                              |
| :------------ | :---------------- | :------ | :------- | :------------------------------------------------------------------------------------------------------- |
| -wp           | --wallet-rpc-port | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml |
| -f            | --fingerprint     | INTEGER | False    | Set the fingerprint to specify which key to use                                                          |
| -n            | --name            | TEXT    | False    | Set the DAO wallet name                                                                                  |
| -t            | --treasury-id     | TEXT    | True     | The Treasury ID of the DAO you want to track                                                             |
| -fa           | --filter-amount   | INTEGER | False    | The minimum number of votes a proposal needs before the wallet will recognise it [default: 1]            |
| -h            | --help            | None    | False    | Show a help message and exit                                                                             |

<details>
   <summary>Example</summary>

```bash

```

Response:

```

```

</details>

---

## `add-funds`

Functionality: Send funds to a DAO treasury

Usage: chia dao add-funds [OPTIONS]

Options:

| Short Command | Long Command        | Type    | Required | Description                                                                                              |
| :------------ | :------------------ | :------ | :------- | :------------------------------------------------------------------------------------------------------- |
| -wp           | --wallet-rpc-port   | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml |
| -f            | --fingerprint       | INTEGER | False    | Set the fingerprint to specify which key to use                                                          |
| -i            | --wallet-id         | INTEGER | True     | ID of the wallet to use                                                                                  |
| -f            | --funding-wallet-id | INTEGER | True     | The ID of the wallet to send funds from                                                                  |
| -a            | --amount            | TEXT    | True     | The amount of funds to send                                                                              |
| -m            | --fee               | TEXT    | False    | Set the fees per transaction, in XCH [default: 0]                                                        |
|               | --reuse             | None    | False    | Set this flag to reuse the existing address for the change [default: not set]                            |
| -h            | --help              | None    | False    | Show a help message and exit                                                                             |

<details>
   <summary>Example</summary>

```bash

```

Response:

```

```

</details>

---

## `close-proposal`

Functionality: Close a DAO proposal

Usage: chia dao close-proposal [OPTIONS]

Options:

| Short Command | Long Command      | Type    | Required | Description                                                                                                        |
| :------------ | :---------------- | :------ | :------- | :----------------------------------------------------------------------------------------------------------------- |
| -wp           | --wallet-rpc-port | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml           |
| -f            | --fingerprint     | INTEGER | False    | Set the fingerprint to specify which key to use                                                                    |
| -i            | --wallet-id       | INTEGER | True     | ID of the wallet to use                                                                                            |
| -p            | --proposal-id     | TEXT    | True     | The ID of the proposal you are voting on                                                                           |
| -d            | --self-destruct   | None    | False    | If this flag is set, it will self-destruct a broken proposal, thus forcing to force it to close [default: not set] |
| -m            | --fee             | TEXT    | False    | Set the fees per transaction, in XCH [default: 0]                                                                  |
|               | --reuse           | None    | False    | Set this flag to reuse the existing address for the change [default: not set]                                      |
| -h            | --help            | None    | False    | Show a help message and exit                                                                                       |

<details>
   <summary>Example</summary>

```bash

```

Response:

```

```

</details>

---

## `create`

Functionality: Create a new DAO wallet and treasury

Usage: chia dao create [OPTIONS]

Options:

| Short Command | Long Command          | Type    | Required | Description                                                                                                        |
| :------------ | :-------------------- | :------ | :------- | :----------------------------------------------------------------------------------------------------------------- |
| -wp           | --wallet-rpc-port     | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml           |
| -f            | --fingerprint         | INTEGER | False    | Set the fingerprint to specify which key to use                                                                    |
| -n            | --name                | TEXT    | False    | Set the DAO wallet name                                                                                            |
| -pt           | --proposal-timelock   | INTEGER | False    | The minimum number of blocks before a proposal can close [default: 1000]                                           |
| -sc           | --soft-close          | INTEGER | False    | The number of blocks a proposal must remain unspent before closing [default: 20]                                   |
| -ar           | --attendance-required | INTEGER | True     | The minimum number of votes a proposal must receive to be accepted                                                 |
| -pp           | --pass-percentage     | INTEGER | False    | The percentage of 'yes' votes in basis points a proposal must receive to be accepted. 100% = 10000 [default: 5000] |
| -sd           | --self-destruct       | INTEGER | False    | The number of blocks required before a proposal can be automatically removed [default: 10000]                      |
| -od           | --oracle-delay        | INTEGER | False    | The number of blocks required between oracle spends of the treasury  [default: 50]                                 |
| -pm           | --proposal-minimum    | INTEGER | False    | The minimum amount (in mojos) that a proposal must use to be created [default: 1]                                  |
| -fa           | --filter-amount       | INTEGER | False    | The minimum number of votes a proposal needs before the wallet will recognise it [default: 1]                      |
| -ca           | --cat-amount          | INTEGER | True     | The number of DAO CATs (in mojos) to create when initializing the DAO                                              |
| -m            | --fee                 | TEXT    | False    | Set the fees per transaction, in XCH [default: 0]                                                                  |
|               | --reuse               | None    | False    | Set this flag to reuse the existing address for the change [default: not set]                                      |
| -h            | --help                | None    | False    | Show a help message and exit                                                                                       |

:::warning

This command requires that you have at least two coins in your wallet: one to create the DAO and pay the blockchain fee, and one to mint the DAO CATs.

If you only have one coin, an error similar to the following will be shown:

```ValueError: {'error': 'Transaction for 100000 is greater than spendable balance of 0. There may be other transactions pending or our minimum coin amount is too high.', 'success': False}```

You can split one coin into multiple coins by running the [chia wallet coins split](/wallet-cli/#split) command.

:::


<details>
   <summary>Example</summary>

This example will create a DAO with the following options:
* Proposals must exist for at least 10 blocks before being closed (`-pt 10`)
* Proposals must be unspent for at least 2 blocks before being closed (`-sc 2`)
* At least 1000 votes ('yes' and 'no' combined) must be received before a proposal can pass (`-ar 1000`)
* At least 50% of votes must be 'yes' in order for a proposal to pass (`-pp 5000`)
* At least 10 blocks must pass before a proposal can be removed (`-sd 10`)
* At least 5 blocks must pass between oracle spends of the treasury (`-od 5`)
* Proposals must be for at least 1 mojo (`-pm 1`)
* At least 1 vote must be made for a proposal before the wallet will recognise it (`-fa 1`)
* One hundred thousand DAO CATs will be created initially (`-ca 100000`)
* A blockchain fee of 0.00001 XCH will be paid (`-m 0.00001`)

```bash
chia dao create -pt 10 -sc 2 -ar 1000 -pp 5000 -sd 10 -od 5 -pm 1 -fa 1 -ca 100000 -m 0.00001
```

Response:

```
Successfully created DAO Wallet
DAO Treasury ID: 0x69dbd335763f5db8dac52b607d8077ff8ee798d127c8a2a98bf5611016504088
DAO Wallet ID: 6
CAT Wallet ID: 7
DAOCAT Wallet ID: 8
```

</details>

---

## create-proposal

Functionality: Create and add a proposal to a DAO

### `mint`

Functionality: Create a proposal to mint new DAO CATs

Usage: chia dao create-proposal [OPTIONS]

Options:

| Short Command | Long Command      | Type    | Required | Description                                                                                              |
| :------------ | :---------------- | :------ | :------- | :------------------------------------------------------------------------------------------------------- |
| -wp           | --wallet-rpc-port | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml |
| -f            | --fingerprint     | INTEGER | False    | Set the fingerprint to specify which key to use                                                          |
| -i            | --wallet-id       | INTEGER | True     | ID of the wallet to use                                                                                  |
| -a            | --amount          | INTEGER | True     | The amount of new cats the proposal will mint (in mojos)                                                 |
| -t            | --to-address      | TEXT    | True     | The address new cats will be minted to                                                                   |
| -v            | --vote-amount     | INTEGER | True     | The number of votes to add                                                                               |
| -m            | --fee             | TEXT    | False    | Set the fees per transaction, in XCH [default: 0]                                                        |
|               | --reuse           | None    | False    | Set this flag to reuse the existing address for the change [default: not set]                            |
| -h            | --help            | None    | False    | Show a help message and exit                                                                             |

<details>
   <summary>Example</summary>

```bash

```

Response:

```

```

</details>

### `spend`
  
Functionality: Create a proposal to spend DAO funds

Usage: chia dao create-proposal [OPTIONS]

Options:

| Short Command | Long Command      | Type    | Required | Description                                                                                              |
| :------------ | :---------------- | :------ | :------- | :------------------------------------------------------------------------------------------------------- |
| -wp           | --wallet-rpc-port | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml |
| -f            | --fingerprint     | INTEGER | False    | Set the fingerprint to specify which key to use                                                          |
| -i            | --wallet-id       | INTEGER | True     | ID of the wallet to use                                                                                  |
| -t            | --to-address      | TEXT    | False    | The address the proposal will send funds to                                                              |
| -a            | --amount          | FLOAT   | False    | The amount of funds the proposal will send (in mojos)                                                    |
| -v            | --vote-amount     | INTEGER | True     | The number of votes to add                                                                               |
| -id           | --asset-id        | TEXT    | False    | The asset id of the funds the proposal will send. Leave blank for xch                                    |
| -j            | --from-json       | TEXT    | False    | Path to a json file containing a list of additions, for use in proposals with multiple spends            |
| -m            | --fee             | TEXT    | False    | Set the fees per transaction, in XCH [default: 0]                                                        |
|               | --reuse           | None    | False    | Set this flag to reuse the existing address for the change [default: not set]                            |
| -h            | --help            | None    | False    | Show a help message and exit                                                                             |

<details>
   <summary>Example</summary>

```bash

```

Response:

```

```

</details>

### `update`
  
Functionality: Create a proposal to change the DAO rules

Usage: chia dao create-proposal [OPTIONS]

Options:

| Short Command | Long Command          | Type    | Required | Description                                                                                              |
| :------------ | :-------------------- | :------ | :------- | :------------------------------------------------------------------------------------------------------- |
| -wp           | --wallet-rpc-port     | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml |
| -f            | --fingerprint         | INTEGER | False    | Set the fingerprint to specify which key to use                                                          |
| -i            | --wallet-id           | INTEGER | True     | ID of the wallet to use                                                                                  |
| -v            | --vote-amount         | INTEGER | True     | The number of votes to add                                                                               |
| -pt           | --proposal-timelock   | INTEGER | False    | The new minimum number of blocks before a proposal can close                                             |
| -sc           | --soft-close          | INTEGER | False    | The number of blocks a proposal must remain unspent before closing                                       |
| -ar           | --attendance-required | INTEGER | False    | The minimum number of votes a proposal must receive to be accepted                                       |
| -pp           | --pass-percentage     | INTEGER | False    | The percentage of 'yes' votes in basis points a proposal must receive to be accepted. 100% = 10000       |
| -sd           | --self-destruct       | INTEGER | False    | The number of blocks required before a proposal can be automatically removed                             |
| -od           | --oracle-delay        | INTEGER | False    | The number of blocks required between oracle spends of the treasury                                      |
| -m            | --fee                 | TEXT    | False    | Set the fees per transaction, in XCH [default: 0]                                                        |
|               | --reuse               | None    | False    | Set this flag to reuse the existing address for the change [default: not set]                            |
| -h            | --help                | None    | False    | Show a help message and exit                                                                             |

<details>
   <summary>Example</summary>

```bash

```

Response:

```

```

</details>

---

## `exit-lockup`

Functionality: Release DAO CATs from voting mode

Usage: chia dao exit-lockup [OPTIONS]

Options:

| Short Command | Long Command                  | Type    | Required | Description                                                                                              |
| :------------ | :---------------------------- | :------ | :------- | :------------------------------------------------------------------------------------------------------- |
| -wp           | --wallet-rpc-port             | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml |
| -f            | --fingerprint                 | INTEGER | False    | Set the fingerprint to specify which key to use                                                          |
| -i            | --wallet-id                   | INTEGER | True     | ID of the wallet to use                                                                                  |
| -m            | --fee                         | TEXT    | False    | Set the fees per transaction, in XCH [default: 0]                                                        |
|               | --reuse                       | None    | False    | Set this flag to reuse the existing address for the change [default: not set]                            |
| -h            | --help                        | None    | False    | Show a help message and exit                                                                             |

<details>
   <summary>Example</summary>

```bash

```

Response:

```

```

</details>

---

## `get-balance`

Functionality: Get the asset balances for a DAO treasury

Usage: chia dao get-balance [OPTIONS]

Options:

| Short Command | Long Command                  | Type    | Required | Description                                                                                              |
| :------------ | :---------------------------- | :------ | :------- | :------------------------------------------------------------------------------------------------------- |
| -wp           | --wallet-rpc-port             | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml |
| -f            | --fingerprint                 | INTEGER | False    | Set the fingerprint to specify which key to use                                                          |
| -i            | --wallet-id                   | INTEGER | True     | ID of the wallet to use                                                                                  |
| -h            | --help                        | None    | False    | Show a help message and exit                                                                             |

<details>
   <summary>Example</summary>

```bash

```

Response:

```

```

</details>

---

## `get-id`

Functionality: Get the Treasury ID of a DAO

Usage: chia dao get-id [OPTIONS]

Options:

| Short Command | Long Command                  | Type    | Required | Description                                                                                              |
| :------------ | :---------------------------- | :------ | :------- | :------------------------------------------------------------------------------------------------------- |
| -wp           | --wallet-rpc-port             | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml |
| -f            | --fingerprint                 | INTEGER | False    | Set the fingerprint to specify which key to use                                                          |
| -i            | --wallet-id                   | INTEGER | True     | ID of the DAO wallet which will receive the funds                                                        |
| -h            | --help                        | None    | False    | Show a help message and exit                                                                             |

<details>
   <summary>Example</summary>

Get the ID of an existing treasury:

```bash
chia dao get-id -i 6
```

Response:

```
Treasury ID: 0x69dbd335763f5db8dac52b607d8077ff8ee798d127c8a2a98bf5611016504088
```

</details>

---

## `list-proposals`

Functionality: List proposals for the DAO

Usage: chia dao list-proposals [OPTIONS]

Options:

| Short Command | Long Command                  | Type    | Required | Description                                                                                              |
| :------------ | :---------------------------- | :------ | :------- | :------------------------------------------------------------------------------------------------------- |
| -wp           | --wallet-rpc-port             | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml |
| -f            | --fingerprint                 | INTEGER | False    | Set the fingerprint to specify which key to use                                                          |
| -i            | --wallet-id                   | INTEGER | True     | ID of the wallet to use                                                                                  |
| -c            | --include-closed              | None    | False    | Set to include previously closed proposals [Default: not set]                                            |
| -h            | --help                        | None    | False    | Show a help message and exit                                                                             |

<details>
   <summary>Example</summary>

```bash

```

Response:

```

```

</details>

---

## `lockup-coins`

Functionality: Lock DAO CATs for voting

Usage: chia dao lockup-coins [OPTIONS]

Options:

| Short Command | Long Command                  | Type    | Required | Description                                                                                              |
| :------------ | :---------------------------- | :------ | :------- | :------------------------------------------------------------------------------------------------------- |
| -wp           | --wallet-rpc-port             | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml |
| -f            | --fingerprint                 | INTEGER | False    | Set the fingerprint to specify which key to use                                                          |
| -i            | --wallet-id                   | INTEGER | True     | ID of the wallet to use                                                                                  |
| -a            | --amount                      | TEXT    | True     | The amount of new cats the proposal will mint                                                            |
| -m            | --fee                         | TEXT    | False    | Set the fees per transaction, in XCH [default: 0]                                                        |
|               | --reuse                       | None    | False    | Set this flag to reuse the existing address for the change [default: not set]                            |
| -h            | --help                        | None    | False    | Show a help message and exit                                                                             |

<details>
   <summary>Example</summary>

```bash

```

Response:

```

```

</details>

---

## `release-coins`

Functionality: Release closed proposals from DAO CATs

Usage: chia dao release-coins [OPTIONS]

Options:

| Short Command | Long Command                  | Type    | Required | Description                                                                                              |
| :------------ | :---------------------------- | :------ | :------- | :------------------------------------------------------------------------------------------------------- |
| -wp           | --wallet-rpc-port             | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml |
| -f            | --fingerprint                 | INTEGER | False    | Set the fingerprint to specify which key to use                                                          |
| -i            | --wallet-id                   | INTEGER | True     | ID of the wallet to use                                                                                  |
| -m            | --fee                         | TEXT    | False    | Set the fees per transaction, in XCH [default: 0]                                                        |
|               | --reuse                       | None    | False    | Set this flag to reuse the existing address for the change [default: not set]                            |
| -h            | --help                        | None    | False    | Show a help message and exit                                                                             |

<details>
   <summary>Example</summary>

```bash

```

Response:

```

```

</details>

---

## `show-proposal`

Functionality: Show the details of a specific proposal

Usage: chia dao show-proposal [OPTIONS]

Options:

| Short Command | Long Command                  | Type    | Required | Description                                                                                              |
| :------------ | :---------------------------- | :------ | :------- | :------------------------------------------------------------------------------------------------------- |
| -wp           | --wallet-rpc-port             | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml |
| -f            | --fingerprint                 | INTEGER | False    | Set the fingerprint to specify which key to use                                                          |
| -i            | --wallet-id                   | INTEGER | True     | ID of the wallet to use                                                                                  |
| -p            | --proposal_id                 | TEXT    | True     | The ID of the proposal to fetch                                                                          |
| -h            | --help                        | None    | False    | Show a help message and exit                                                                             |

<details>
   <summary>Example</summary>

```bash

```

Response:

```

```

</details>

---

## `vote`

Functionality: Vote on a DAO proposal

Usage: chia dao vote [OPTIONS]

Options:

| Short Command | Long Command                  | Type    | Required | Description                                                                                              |
| :------------ | :---------------------------- | :------ | :------- | :------------------------------------------------------------------------------------------------------- |
| -wp           | --wallet-rpc-port             | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml |
| -f            | --fingerprint                 | INTEGER | False    | Set the fingerprint to specify which key to use                                                          |
| -i            | --wallet-id                   | INTEGER | True     | ID of the wallet to use                                                                                  |
| -p            | --proposal-id                 | TEXT    | True     | The ID of the proposal you are voting on                                                                 |
| -a            | --vote-amount                 | INTEGER | True     | The number of votes you want to cast                                                                     |
| -n            | --vote-no                     | None    | False    | Use this option to vote against a proposal. If not present then the vote is for the proposal             |
| -m            | --fee                         | TEXT    | False    | Set the fees per transaction, in XCH [default: 0]                                                        |
|               | --reuse                       | None    | False    | Set this flag to reuse the existing address for the change [default: not set]                            |
| -h            | --help                        | None    | False    | Show a help message and exit                                                                             |

<details>
   <summary>Example</summary>

```bash

```

Response:

```

```

</details>

---
