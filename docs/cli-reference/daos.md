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
| -i            | --wallet-id         | INTEGER | True     | ID of the DAO Treasury Wallet                                                                            |
| -f            | --funding-wallet-id | INTEGER | True     | The ID of the wallet to send funds from (must be of type `STANDARD_WALLET`)                              |
| -a            | --amount            | TEXT    | True     | The amount of funds to send                                                                              |
| -m            | --fee               | TEXT    | False    | Set the fees per transaction, in XCH [default: 0]                                                        |
|               | --reuse             | None    | False    | Set this flag to reuse the existing address for the change [default: not set]                            |
| -h            | --help              | None    | False    | Show a help message and exit                                                                             |

<details>
   <summary>Example</summary>

Start by showing the current wallet status:

```bash
chia wallet show
```

Response:

```bash
Chia Wallet:
   -Total Balance:         4.999989898999 txch (4999989898999 mojo)
   -Pending Total Balance: 4.999989898999 txch (4999989898999 mojo)
   -Spendable:             4.999989898999 txch (4999989898999 mojo)
   -Type:                  STANDARD_WALLET
   -Wallet ID:             1

Profile 1:
   -Total Balance:         1.0
   -Pending Total Balance: 1.0
   -Spendable:             1.0
   -Type:                  DAO
   -Asset ID:              {"treasury_id": "0x69dbd335763f5db8dac52b607d8077ff8ee798d127c8a
   -Wallet ID:             6

CAT a62a729da3c90a22...:
   -Total Balance:         100.0  (100000 mojo)
   -Pending Total Balance: 100.0  (100000 mojo)
   -Spendable:             100.0  (100000 mojo)
   -Type:                  CAT
   -Asset ID:              a62a729da3c90a22aeb648f64a7499680eceef7c4d98a5dd9e7fa5d14fc3c99e
   -Wallet ID:             7

CAT a62a729da3c90a22...:
   -Total Balance:         0.0
   -Pending Total Balance: 0.0
   -Spendable:             0.0
   -Type:                  DAO_CAT
   -Asset ID:              00000000000000060000000000000007a62a729da3c90a22aeb648f64a749968
   -Wallet ID:             8
```

Add funds from the main Chia Wallet (ID `1`) to the DAO Wallet (ID `6`):

```bash
chia dao add-funds -i 6 --funding-wallet-id 1 -a 4 -m 0.00001
```

Response:

```bash
Transaction submitted to nodes: [{'peer_id': 'b3d9de85d29931c10050b56c7afb91c99141943fc81ff2d1a8425e52be0d08ab', 'inclusion_status': 'SUCCESS', 'error_msg': None}]
Run 'chia wallet get_transaction -f 3588571699 -tx 0xbcb4ac4664977d58a1fa2ecdd264b1653e167c564bea16f641837c9d53a9da80' to get status
```

After a few minutes, verify that the transaction was processed successfully:

```bash
chia wallet get_transaction -f 3588571699 -tx 0xbcb4ac4664977d58a1fa2ecdd264b1653e167c564bea16f641837c9d53a9da80
```

Response:

```bash
Transaction bcb4ac4664977d58a1fa2ecdd264b1653e167c564bea16f641837c9d53a9da80
Status: Confirmed
Amount sent: 4 TXCH
To address: txch1czw54246e0qmjhha28787cc67lquzxuntkl774ppalpzm8j2whcsxp9nyd
Created at: 2023-07-13 07:59:32
```

At this point, 4 TXCH has been removed from wallet `1` and added to wallet `6`, which can be verified by running `get-balance`:

```bash
 chia dao get-balance -i 6
```

Response:

```bash
XCH: 4.0
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

```bash
Successfully created DAO Wallet
DAO Treasury ID: 0x69dbd335763f5db8dac52b607d8077ff8ee798d127c8a2a98bf5611016504088
DAO Wallet ID: 6
CAT Wallet ID: 7
DAOCAT Wallet ID: 8
```

Verify that the creation was successful by showing the wallet:

```bash
chia wallet show
```

Response:

```bash
Wallet height: 2904254
Sync status: Synced
Balances, fingerprint: 3588571699

Chia Wallet:
   -Total Balance:         4.999989898999 txch (4999989898999 mojo)
   -Pending Total Balance: 4.999989898999 txch (4999989898999 mojo)
   -Spendable:             4.999989898999 txch (4999989898999 mojo)
   -Type:                  STANDARD_WALLET
   -Wallet ID:             1

Profile 1:
   -Total Balance:         1.0
   -Pending Total Balance: 1.0
   -Spendable:             1.0
   -Type:                  DAO
   -Asset ID:              {"treasury_id": "0x69dbd335763f5db8dac52b607d8077ff8ee798d127c8a
   -Wallet ID:             6

CAT a62a729da3c90a22...:
   -Total Balance:         100.0  (100000 mojo)
   -Pending Total Balance: 100.0  (100000 mojo)
   -Spendable:             100.0  (100000 mojo)
   -Type:                  CAT
   -Asset ID:              a62a729da3c90a22aeb648f64a7499680eceef7c4d98a5dd9e7fa5d14fc3c99e
   -Wallet ID:             7

CAT a62a729da3c90a22...:
   -Total Balance:         0.0
   -Pending Total Balance: 0.0
   -Spendable:             0.0
   -Type:                  DAO_CAT
   -Asset ID:              00000000000000060000000000000007a62a729da3c90a22aeb648f64a749968
   -Wallet ID:             8
```

Recall from the DAO's creation response message that the primary DAO wallet's ID is `6`, the CAT wallet's ID is `7`, and the DAO CAT wallet's ID is `8`.

It is also possible to obtain the DAO's Treasury ID by calling `get-id` and supplying the DAO wallet's ID:

```bash
chia dao get-id -i 6
```

Response:

```bash
Treasury ID: 0x69dbd335763f5db8dac52b607d8077ff8ee798d127c8a2a98bf5611016504088
```

</details>

---

## create-proposal

Functionality: Create and add a proposal to a DAO

There are currently three supported proposal types: spend some of the treasury, update the DAO rules, and mint more of the DAO's CAT.

### `mint`

Functionality: Create a proposal to mint new DAO CATs

Usage: chia dao create-proposal [OPTIONS]

Options:

| Short Command | Long Command      | Type    | Required | Description                                                                                              |
| :------------ | :---------------- | :------ | :------- | :------------------------------------------------------------------------------------------------------- |
| -wp           | --wallet-rpc-port | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml |
| -f            | --fingerprint     | INTEGER | False    | Set the fingerprint to specify which key to use                                                          |
| -i            | --wallet-id       | INTEGER | True     | ID of the DAO wallet to use                                                                                  |
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
| -i            | --wallet-id                   | INTEGER | True     | ID of the DAO wallet from which to exit the lockup                                                       |
| -m            | --fee                         | TEXT    | False    | Set the fees per transaction, in XCH [default: 0]                                                        |
|               | --reuse                       | None    | False    | Set this flag to reuse the existing address for the change [default: not set]                            |
| -h            | --help                        | None    | False    | Show a help message and exit                                                                             |

This command will unlock tokens that have been locked for voting, provided that there are no active proposals that these CATs have voted on. This command will automatically determine which CATs are available to be unlocked.

<details>
   <summary>Example</summary>

First, obtain the current state of the DAO tokens:

```bash
chia wallet show
```

This truncated response shows that 26 tokens are unlocked, and 74 tokens are locked:

```bash
CAT a62a729da3c90a22...:
   -Total Balance:         26.0  (26000 mojo)
   -Pending Total Balance: 26.0  (26000 mojo)
   -Spendable:             26.0  (26000 mojo)
   -Type:                  CAT
   -Asset ID:              a62a729da3c90a22aeb648f64a7499680eceef7c4d98a5dd9e7fa5d14fc3c99e
   -Wallet ID:             7

CAT a62a729da3c90a22...:
   -Total Balance:         74000.0
   -Pending Total Balance: 0.0
   -Spendable:             0.0
   -Type:                  DAO_CAT
   -Asset ID:              00000000000000060000000000000007a62a729da3c90a22aeb648f64a749968
   -Wallet ID:             8
```

Next, unlock all tokens that are available to be unlocked (they cannot have been used to vote on any active proposals):

```bash
chia dao exit-lockup -i 6 -m 0.00001
```

Response:

```
Transaction submitted.
```

After the transaction has been confirmed, verify that the tokens have been unlocked:

```bash
chia wallet show
```

Response (truncated):

```bash
CAT a62a729da3c90a22...:
   -Total Balance:         100.0  (100000 mojo)
   -Pending Total Balance: 100.0  (100000 mojo)
   -Spendable:             100.0  (100000 mojo)
   -Type:                  CAT
   -Asset ID:              a62a729da3c90a22aeb648f64a7499680eceef7c4d98a5dd9e7fa5d14fc3c99e
   -Wallet ID:             7

CAT a62a729da3c90a22...:
   -Total Balance:         0.0
   -Pending Total Balance: 0.0
   -Spendable:             0.0
   -Type:                  DAO_CAT
   -Asset ID:              00000000000000060000000000000007a62a729da3c90a22aeb648f64a749968
   -Wallet ID:             8
```

There are now 100 unlocked tokens and 0 locked tokens.

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
chia dao get-balance -i 6
```

Response:

```bash
XCH: 4.0
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

```bash
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
| -i            | --wallet-id                   | INTEGER | True     | ID of the DAO wallet to use                                                                              |
| -a            | --amount                      | TEXT    | True     | The amount of new cats the proposal will mint                                                            |
| -m            | --fee                         | TEXT    | False    | Set the fees per transaction, in XCH [default: 0]                                                        |
|               | --reuse                       | None    | False    | Set this flag to reuse the existing address for the change [default: not set]                            |
| -h            | --help                        | None    | False    | Show a help message and exit                                                                             |

This command will lock the specified number of tokens, thereby making them available for voting.

<details>
   <summary>Example</summary>

Before locking the tokens, show the current status of the DAO's wallets:

```bash
chia wallet show
```

Response:

```bash
Chia Wallet:
   -Total Balance:         0.999979898999 txch (999979898999 mojo)
   -Pending Total Balance: 0.999979898999 txch (999979898999 mojo)
   -Spendable:             0.999979898999 txch (999979898999 mojo)
   -Type:                  STANDARD_WALLET
   -Wallet ID:             1

Profile 1:
   -Total Balance:         1.0
   -Pending Total Balance: 4000000000001.0
   -Spendable:             4000000000001.0
   -Type:                  DAO
   -Asset ID:              {"treasury_id": "0x69dbd335763f5db8dac52b607d8077ff8ee798d127c8a
   -Wallet ID:             6

CAT a62a729da3c90a22...:
   -Total Balance:         100.0  (100000 mojo)
   -Pending Total Balance: 100.0  (100000 mojo)
   -Spendable:             100.0  (100000 mojo)
   -Type:                  CAT
   -Asset ID:              a62a729da3c90a22aeb648f64a7499680eceef7c4d98a5dd9e7fa5d14fc3c99e
   -Wallet ID:             7

CAT a62a729da3c90a22...:
   -Total Balance:         0.0
   -Pending Total Balance: 0.0
   -Spendable:             0.0
   -Type:                  DAO_CAT
   -Asset ID:              00000000000000060000000000000007a62a729da3c90a22aeb648f64a749968
   -Wallet ID:             8
```

In this example, there are 100 tokens in the `CAT` wallet with ID `7`, and 0 tokens in the `DAO_CAT` wallet with ID `8`.

Next, run the `lockup-coins` command to lock some of the CATs:

```bash
chia dao lockup-coins -i 6 -a 74 -m 0.00001
```

After the transaction has been finalized, view the wallet's balance again:

```bash
chia wallet show
```

The response will show that the `CAT` wallet's balance has decreased and the `DAO_CAT` wallet's balance has increased:

```bash
CAT a62a729da3c90a22...:
   -Total Balance:         26.0  (26000 mojo)
   -Pending Total Balance: 26.0  (26000 mojo)
   -Spendable:             26.0  (26000 mojo)
   -Type:                  CAT
   -Asset ID:              a62a729da3c90a22aeb648f64a7499680eceef7c4d98a5dd9e7fa5d14fc3c99e
   -Wallet ID:             7

CAT a62a729da3c90a22...:
   -Total Balance:         74000.0
   -Pending Total Balance: 0.0
   -Spendable:             0.0
   -Type:                  DAO_CAT
   -Asset ID:              00000000000000060000000000000007a62a729da3c90a22aeb648f64a749968
   -Wallet ID:             8
```

The 74 tokens in the `DAO_CAT` wallet can now be used for voting on proposals.

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
