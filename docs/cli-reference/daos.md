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

Start with a wallet with some XCH or TXCH:

```bash
chia wallet show
```

Response:

```
Wallet height: 3140931
Sync status: Synced
Balances, fingerprint: 1520259463

Chia Wallet:
   -Total Balance:         1.0 txch (1000000000000 mojo)
   -Pending Total Balance: 1.0 txch (1000000000000 mojo)
   -Spendable:             1.0 txch (1000000000000 mojo)
   -Type:                  STANDARD_WALLET
   -Wallet ID:             1
```

Next, join a DAO by passing in its Treasury ID:

```bash
chia dao add -n "Test DAO Wallet" -t 0x95aab47ccaf4d3a3a3b03e08d2625c919edc0208360a33a58012cacfea7497a7
```

At first, the response will indicate that the transaction is in process (you will need to choose your wallet fingerprint if more than one exists):

```bash
Adding wallet for DAO: 0x95aab47ccaf4d3a3a3b03e08d2625c919edc0208360a33a58012cacfea7497a7
This may take awhile.
```

Eventually, you will receive a message indicating the Treasury ID and the three relevant wallets that have been created:

```bash
Successfully created DAO Wallet
DAO Treasury ID: 0x95aab47ccaf4d3a3a3b03e08d2625c919edc0208360a33a58012cacfea7497a7
DAO Wallet ID: 2
CAT Wallet ID: 3
DAOCAT Wallet ID: 4
```

At this point, you can show each of these wallets by running `chia wallet show`:

```bash
chia wallet show
```

```bash
Wallet height: 3140950
Sync status: Synced
Balances, fingerprint: 1520259463

Chia Wallet:
   -Total Balance:         1.0 txch (1000000000000 mojo)
   -Pending Total Balance: 1.0 txch (1000000000000 mojo)
   -Spendable:             1.0 txch (1000000000000 mojo)
   -Type:                  STANDARD_WALLET
   -Wallet ID:             1

Test DAO Wallet:
   -Total Balance:         2.0
   -Pending Total Balance: 4000000000002.0
   -Spendable:             4000000000002.0
   -Type:                  DAO
   -Asset ID:              {"treasury_id": "0x95aab47ccaf4d3a3a3b03e08d2625c919edc0208360a3
   -Wallet ID:             2

CAT 3c992efe31910882...:
   -Total Balance:         0.0  (0 mojo)
   -Pending Total Balance: 0.0  (0 mojo)
   -Spendable:             0.0  (0 mojo)
   -Type:                  CAT
   -Asset ID:              3c992efe31910882f35a6e0017b6a7ceb0e2f6f7b96a36285d5d11ea015c05a7
   -Wallet ID:             3

CAT 3c992efe31910882...:
   -Total Balance:         0.0
   -Pending Total Balance: 0.0
   -Spendable:             0.0
   -Type:                  DAO_CAT
   -Asset ID:              000000000000000200000000000000033c992efe31910882f35a6e0017b6a7ce
   -Wallet ID:             4
```

From here, you can add funds, create proposals, vote on proposals, etc.

</details>

---

## `add_funds`

Functionality: Send funds to a DAO treasury

Usage: chia dao add_funds [OPTIONS]

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
   -Total Balance:         7.999967047233 txch (7999967047233 mojo)
   -Pending Total Balance: 7.999967047233 txch (7999967047233 mojo)
   -Spendable:             7.999967047233 txch (7999967047233 mojo)
   -Type:                  STANDARD_WALLET
   -Wallet ID:             1

Profile 1:
   -Total Balance:         1.0
   -Pending Total Balance: 1.0
   -Spendable:             1.0
   -Type:                  DAO
   -Asset ID:              {"treasury_id": "0x95aab47ccaf4d3a3a3b03e08d2625c919edc0208360a3
   -Wallet ID:             2

CAT 3c992efe31910882...:
   -Total Balance:         100.0  (100000 mojo)
   -Pending Total Balance: 100.0  (100000 mojo)
   -Spendable:             100.0  (100000 mojo)
   -Type:                  CAT
   -Asset ID:              3c992efe31910882f35a6e0017b6a7ceb0e2f6f7b96a36285d5d11ea015c05a7
   -Wallet ID:             3

CAT 3c992efe31910882...:
   -Total Balance:         0.0
   -Pending Total Balance: 0.0
   -Spendable:             0.0
   -Type:                  DAO_CAT
   -Asset ID:              000000000000000200000000000000033c992efe31910882f35a6e0017b6a7ce
   -Wallet ID:             4
```

Add funds from the main Chia Wallet (ID `1`) to the DAO Wallet (ID `2`).

Note that the `Wallet IDs` shown here are only examples; yours may differ.

```bash
chia dao add_funds -i 2 --funding-wallet-id 1 -a 4 -m 0.00001
```

Response:

```bash
To get status, use command: chia wallet get_transaction -f 4274545844 -tx 0x0xa70b80291312e444e04ca9017a92b4998b05030e1428097760b4e33dbf25becb
Transaction submitted to nodes: [{'peer_id': 'b3d9de85d29931c10050b56c7afb91c99141943fc81ff2d1a8425e52be0d08ab', 'inclusion_status': 'SUCCESS', 'error_msg': None}]
Run 'chia wallet get_transaction -f 4274545844 -tx 0x0xa70b80291312e444e04ca9017a92b4998b05030e1428097760b4e33dbf25becb' to get status
```

After a few minutes, verify that the transaction was processed successfully:

```bash
chia wallet get_transaction -f 4274545844 -tx 0xa70b80291312e444e04ca9017a92b4998b05030e1428097760b4e33dbf25becb
```

Response:

```bash
Transaction a70b80291312e444e04ca9017a92b4998b05030e1428097760b4e33dbf25becb
Status: Confirmed
Amount sent: 4 TXCH
To address: txch1cvm70qkt9fepp8jl8xdqklpe5trhaqj2ruca25vhmyeh3xd7tdwsk9n0vk
Created at: 2023-09-01 16:21:36
```

At this point, 4 TXCH has been removed from wallet `1` and added to wallet `2`, which can be verified by running `get_balance`:

```bash
chia dao get_balance -i 2
```

Response:

```bash
XCH: 4.0
```

</details>

---

## `close_proposal`

Functionality: Close a DAO proposal

Usage: chia dao close_proposal [OPTIONS]

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

First, show the status of a proposal:

```bash
chia dao show_proposal -i 2 -p 0xacbc7be5de1f76807965200033d2ab821368838db6577384dfea87ec8fc25990
```

Response:

```bash
Details of Proposal: 0xacbc7be5de1f76807965200033d2ab821368838db6577384dfea87ec8fc25990
---------------------------

Type: SPEND
Status: OPEN
Passed: True
Closable: True

Proposal XCH Conditions
0x1ee13b2f73a111dd4a9236a9304fe71bb1b4a2b70b5726daa25b94a8e9ab5465 1000000000000
```

This proposal's status for `Closable` is `True`, so it can be closed. To do this, run the `close_proposal` command:

```bash
chia dao close_proposal -i 2 -p 0xacbc7be5de1f76807965200033d2ab821368838db6577384dfea87ec8fc25990 -m 0.0006
```

Response:

```bash
Submitted proposal close transaction with name: 0x4a7a299233a630d75e83e1766e2e61aae7bbdadc96abbc38b86bfaf9657cf0c6
```

After the transaction has been confirmed on-chain, view the status of the proposal once again:

```bash
chia dao show_proposal -i 2 -p 0xacbc7be5de1f76807965200033d2ab821368838db6577384dfea87ec8fc25990
```

Response:

```bash
Details of Proposal: 0xacbc7be5de1f76807965200033d2ab821368838db6577384dfea87ec8fc25990
---------------------------

Type: SPEND
Status: CLOSED
Passed: True

Proposal XCH Conditions
0x1ee13b2f73a111dd4a9236a9304fe71bb1b4a2b70b5726daa25b94a8e9ab5465 1000000000000
```

This proposal is now closed. The treasury's balance prior to the proposal being created was 4.9 XCH. 
Verify that 1 XCH was deducted by showing the current balance:

```bash
chia dao get_balance -i 2
```

Response:

```bash
XCH: 3.9
```

Another way to verify that the correct amount of XCH was spend from treasury is to show the recipient's wallet:

```bash
chia wallet show -f 2456044523
```

Response:

```bash
Wallet height: 3141611
Sync status: Synced
Balances, fingerprint: 2456044523

Chia Wallet:
   -Total Balance:         1.0 txch (1000000000000 mojo)
   -Pending Total Balance: 1.0 txch (1000000000000 mojo)
   -Spendable:             1.0 txch (1000000000000 mojo)
   -Type:                  STANDARD_WALLET
   -Wallet ID:             1
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
DAO Treasury ID: 0x95aab47ccaf4d3a3a3b03e08d2625c919edc0208360a33a58012cacfea7497a7
DAO Wallet ID: 2
CAT Wallet ID: 3
DAOCAT Wallet ID: 4
```

Multiple on-chain transactions will be performed. This will take a few minutes.

To verify that the creation was successful, show your wallet:

```bash
chia wallet show
```

Response:

```bash
Chia Wallet:
   -Total Balance:         7.999967047233 txch (7999967047233 mojo)
   -Pending Total Balance: 7.999967047233 txch (7999967047233 mojo)
   -Spendable:             7.999967047233 txch (7999967047233 mojo)
   -Type:                  STANDARD_WALLET
   -Wallet ID:             1

Profile 1:
   -Total Balance:         1.0
   -Pending Total Balance: 1.0
   -Spendable:             1.0
   -Type:                  DAO
   -Asset ID:              {"treasury_id": "0x95aab47ccaf4d3a3a3b03e08d2625c919edc0208360a3
   -Wallet ID:             2

CAT 3c992efe31910882...:
   -Total Balance:         100.0  (100000 mojo)
   -Pending Total Balance: 100.0  (100000 mojo)
   -Spendable:             100.0  (100000 mojo)
   -Type:                  CAT
   -Asset ID:              3c992efe31910882f35a6e0017b6a7ceb0e2f6f7b96a36285d5d11ea015c05a7
   -Wallet ID:             3

CAT 3c992efe31910882...:
   -Total Balance:         0.0
   -Pending Total Balance: 0.0
   -Spendable:             0.0
   -Type:                  DAO_CAT
   -Asset ID:              000000000000000200000000000000033c992efe31910882f35a6e0017b6a7ce
   -Wallet ID:             4
```

Recall from the DAO's creation response message that the primary DAO wallet's ID is `6`, the CAT wallet's ID is `7`, and the DAO CAT wallet's ID is `8`.

It is also possible to obtain the DAO's Treasury ID by calling `get_id` and supplying the DAO wallet's ID:

```bash
chia dao get_id -i 6
```

Response:

```bash
Treasury ID: 0x69dbd335763f5db8dac52b607d8077ff8ee798d127c8a2a98bf5611016504088
```

</details>

---

## create_proposal

Functionality: Create and add a proposal to a DAO

There are currently three supported proposal types: spend some of the treasury, update the DAO rules, and mint more of the DAO's CAT.

### `mint`

Functionality: Create a proposal to mint new DAO CATs

Usage: chia dao create_proposal [OPTIONS]

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

Usage: chia dao create_proposal [OPTIONS]

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

Be sure to have some CATs locked up for voting. To view the number of CATs that have been locked, run `chia wallet show`:

```bash
chia wallet show
```

Response:

```
Chia Wallet:
   -Total Balance:         3.999927047233 txch (3999927047233 mojo)
   -Pending Total Balance: 3.999927047233 txch (3999927047233 mojo)
   -Spendable:             3.999927047233 txch (3999927047233 mojo)
   -Type:                  STANDARD_WALLET
   -Wallet ID:             1

Profile 1:
   -Total Balance:         1.0
   -Pending Total Balance: 4000000000001.0
   -Spendable:             4000000000001.0
   -Type:                  DAO
   -Asset ID:              {"treasury_id": "0x95aab47ccaf4d3a3a3b03e08d2625c919edc0208360a3
   -Wallet ID:             2

CAT 3c992efe31910882...:
   -Total Balance:         0.0  (0 mojo)
   -Pending Total Balance: 0.0  (0 mojo)
   -Spendable:             0.0  (0 mojo)
   -Type:                  CAT
   -Asset ID:              3c992efe31910882f35a6e0017b6a7ceb0e2f6f7b96a36285d5d11ea015c05a7
   -Wallet ID:             3

CAT 3c992efe31910882...:
   -Total Balance:         100000.0
   -Pending Total Balance: 0.0
   -Spendable:             0.0
   -Type:                  DAO_CAT
   -Asset ID:              000000000000000200000000000000033c992efe31910882f35a6e0017b6a7ce
   -Wallet ID:             4
```

In this case, 100 `DAO_CAT` have been locked (100,000 mojos). To learn how to lock up these CATs, see the [lockup_coins](#lockup_coins) command.

Next, create the proposal. In this case, we will propose to send 1 XCH (`-a`) to a new wallet address (`-t`) and use 50 of our votes to vote "yes" (`-v`) while adding a 100-million-mojo fee (`-m`)

```bash
chia dao create_proposal spend -i 2 -t txch1rmsnktmn5yga6j5jx65nqnl8rwcmfg4hpdtjdk4ztw2236dt23jsanqhey -a 1 -v 50 -m 0.0001
```

Response:

```bash
Created spend proposal for asset: None
Successfully created proposal.
Proposal ID: 0xacbc7be5de1f76807965200033d2ab821368838db6577384dfea87ec8fc25990
```

After the proposal has been confirmed on-chain, you can view the details by running `list_proposals` and passing in your DAO treasury wallet (`2` in this example):

```bash
chia dao list_proposals -i 2
```

Response:

```bash
############################
Proposal ID: 0xacbc7be5de1f76807965200033d2ab821368838db6577384dfea87ec8fc25990
Status: OPEN
Votes for: 50
Votes against: 0
------------------------
Proposals have 2 blocks of soft close time.
############################
```

You can also obtain more details about the proposal from the `show_proposal` command:

```bash
chia dao show_proposal -i 2 -p 0xacbc7be5de1f76807965200033d2ab821368838db6577384dfea87ec8fc25990
```

Response:

```bash
Details of Proposal: 0xacbc7be5de1f76807965200033d2ab821368838db6577384dfea87ec8fc25990
---------------------------

Type: SPEND
Status: OPEN
Passed: False
Yes votes needed: 450
Closable: False
Total votes needed: 950
Blocks remaining: 8

Proposal XCH Conditions
0x1ee13b2f73a111dd4a9236a9304fe71bb1b4a2b70b5726daa25b94a8e9ab5465 1000000000000
```

</details>

### `update`
  
Functionality: Create a proposal to change the DAO rules

Usage: chia dao create_proposal [OPTIONS]

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

## `exit_lockup`

Functionality: Release DAO CATs from voting mode

Usage: chia dao exit_lockup [OPTIONS]

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
CAT 3c992efe31910882...:
   -Total Balance:         26.0  (26000 mojo)
   -Pending Total Balance: 26.0  (26000 mojo)
   -Spendable:             26.0  (26000 mojo)
   -Type:                  CAT
   -Asset ID:              3c992efe31910882f35a6e0017b6a7ceb0e2f6f7b96a36285d5d11ea015c05a7
   -Wallet ID:             3

CAT 3c992efe31910882...:
   -Total Balance:         74000.0
   -Pending Total Balance: 0.0
   -Spendable:             0.0
   -Type:                  DAO_CAT
   -Asset ID:              000000000000000200000000000000033c992efe31910882f35a6e0017b6a7ce
   -Wallet ID:             4
```

Next, unlock all tokens that are available to be unlocked (they cannot have been used to vote on any active proposals):

```bash
chia dao exit_lockup -i 2 -m 0.00001
```

Response:

```
Transaction submitted with spend bundle ID: 0xbe3da7977dd5674ef58a7d8dbd975a990ab52afea11312a06f9edfe0b8f33aff.
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

## `get_balance`

Functionality: Get the asset balances for a DAO treasury

Usage: chia dao get_balance [OPTIONS]

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
chia dao get_balance -i 2
```

Response:

```bash
XCH: 4.0
```

</details>

---

## `get_id`

Functionality: Get the Treasury ID of a DAO

Usage: chia dao get_id [OPTIONS]

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
chia dao get_id -i 2
```

Response:

```bash
Treasury ID: 0x95aab47ccaf4d3a3a3b03e08d2625c919edc0208360a33a58012cacfea7497a7
```

</details>

---

## `list_proposals`

Functionality: List proposals for the DAO

Usage: chia dao list_proposals [OPTIONS]

Options:

| Short Command | Long Command                  | Type    | Required | Description                                                                                              |
| :------------ | :---------------------------- | :------ | :------- | :------------------------------------------------------------------------------------------------------- |
| -wp           | --wallet-rpc-port             | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml |
| -f            | --fingerprint                 | INTEGER | False    | Set the fingerprint to specify which key to use                                                          |
| -i            | --wallet-id                   | INTEGER | True     | ID of the wallet to use                                                                                  |
| -c            | --include-closed              | None    | False    | Set to include previously closed proposals [Default: not set]                                            |
| -h            | --help                        | None    | False    | Show a help message and exit                                                                             |

This command will list all open proposals by default. 
If the `-c` flag is included, then all open _and_ closed proposals will be listed. 
To show the details of a specific proposal, use the [show_proposal](#show_proposal) command.

<details>
   <summary>Example</summary>

```bash
chia dao list_proposals -i 2
```

Response:

```bash
############################
Proposal ID: 0xacbc7be5de1f76807965200033d2ab821368838db6577384dfea87ec8fc25990
Status: OPEN
Votes for: 50
Votes against: 0
------------------------
Proposals have 2 blocks of soft close time.
############################
```

</details>

---

## `lockup_coins`

Functionality: Lock DAO CATs for voting

Usage: chia dao lockup_coins [OPTIONS]

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
   -Total Balance:         3.999957047233 txch (3999957047233 mojo)
   -Pending Total Balance: 3.999957047233 txch (3999957047233 mojo)
   -Spendable:             3.999957047233 txch (3999957047233 mojo)
   -Type:                  STANDARD_WALLET
   -Wallet ID:             1

Profile 1:
   -Total Balance:         1.0
   -Pending Total Balance: 4000000000001.0
   -Spendable:             4000000000001.0
   -Type:                  DAO
   -Asset ID:              {"treasury_id": "0x95aab47ccaf4d3a3a3b03e08d2625c919edc0208360a3
   -Wallet ID:             2

CAT 3c992efe31910882...:
   -Total Balance:         100.0  (100000 mojo)
   -Pending Total Balance: 100.0  (100000 mojo)
   -Spendable:             100.0  (100000 mojo)
   -Type:                  CAT
   -Asset ID:              3c992efe31910882f35a6e0017b6a7ceb0e2f6f7b96a36285d5d11ea015c05a7
   -Wallet ID:             3

CAT 3c992efe31910882...:
   -Total Balance:         0.0
   -Pending Total Balance: 0.0
   -Spendable:             0.0
   -Type:                  DAO_CAT
   -Asset ID:              000000000000000200000000000000033c992efe31910882f35a6e0017b6a7ce
   -Wallet ID:             4
```

In this example, there are 100 tokens in the `CAT` wallet with ID `3`, and 0 tokens in the `DAO_CAT` wallet with ID `4`.

Next, run the `lockup_coins` command to lock some of the CATs:

```bash
chia dao lockup_coins -i 2 -a 74 -m 0.00001
```

The response will show the transaction ID:

```bash
Transaction submitted to nodes: [{'peer_id': 'b3d9de85d29931c10050b56c7afb91c99141943fc81ff2d1a8425e52be0d08ab', 'inclusion_status': 'SUCCESS', 'error_msg': None}]
Run 'chia wallet get_transaction -f 4274545844 -tx 0x0x75614b073fe8b2c585e4fa5e4e72c64abbadcb138a196eea619957e9b64681dd' to get status
```

To see the status of the transaction run the command shown in the output of the `lockup_coins` command. For example:

```bash
chia wallet get_transaction -f 4274545844 -tx 0x75614b073fe8b2c585e4fa5e4e72c64abbadcb138a196eea619957e9b64681dd
```

Response:

```bash
Transaction 75614b073fe8b2c585e4fa5e4e72c64abbadcb138a196eea619957e9b64681dd
Status: Confirmed
Amount sent: 74 CAT 3c992efe31910882...
To address: txch18l0hptmmf74t226gjd58y5tt6x0g88acwk6lenx8cn696q4cs8xsv5vhta
Created at: 2023-09-04 09:06:58
```

After the transaction has been finalized, view the wallet's balance again:

```bash
chia wallet show
```

The response will show that the `CAT` wallet's balance has decreased and the `DAO_CAT` wallet's balance has increased:

```bash
CAT 3c992efe31910882...:
   -Total Balance:         26.0  (26000 mojo)
   -Pending Total Balance: 26.0  (26000 mojo)
   -Spendable:             26.0  (26000 mojo)
   -Type:                  CAT
   -Asset ID:              3c992efe31910882f35a6e0017b6a7ceb0e2f6f7b96a36285d5d11ea015c05a7
   -Wallet ID:             3

CAT 3c992efe31910882...:
   -Total Balance:         74000.0
   -Pending Total Balance: 0.0
   -Spendable:             0.0
   -Type:                  DAO_CAT
   -Asset ID:              000000000000000200000000000000033c992efe31910882f35a6e0017b6a7ce
   -Wallet ID:             4
```

The 74 tokens in the `DAO_CAT` wallet can now be used for voting on proposals.

</details>

---

## `release_coins`

Functionality: Release closed proposals from DAO CATs

Usage: chia dao release_coins [OPTIONS]

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

## `show_proposal`

Functionality: Show the details of a specific proposal

Usage: chia dao show_proposal [OPTIONS]

Options:

| Short Command | Long Command                  | Type    | Required | Description                                                                                              |
| :------------ | :---------------------------- | :------ | :------- | :------------------------------------------------------------------------------------------------------- |
| -wp           | --wallet-rpc-port             | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml |
| -f            | --fingerprint                 | INTEGER | False    | Set the fingerprint to specify which key to use                                                          |
| -i            | --wallet-id                   | INTEGER | True     | ID of the wallet to use                                                                                  |
| -p            | --proposal_id                 | TEXT    | True     | The ID of the proposal to fetch, obtainable by running the [list_proposals](#list_proposals) command     |
| -h            | --help                        | None    | False    | Show a help message and exit                                                                             |

<details>
   <summary>Example</summary>

```bash
chia dao show_proposal -i 2 -p 0xacbc7be5de1f76807965200033d2ab821368838db6577384dfea87ec8fc25990
```

Response:

```
Details of Proposal: 0xacbc7be5de1f76807965200033d2ab821368838db6577384dfea87ec8fc25990
---------------------------

Type: SPEND
Status: OPEN
Passed: False
Yes votes needed: 450
Closable: False
Total votes needed: 950
Blocks remaining: 8

Proposal XCH Conditions
0x1ee13b2f73a111dd4a9236a9304fe71bb1b4a2b70b5726daa25b94a8e9ab5465 1000000000000
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

Start by showing the status of a proposal:

```bash
chia dao show_proposal -i 2 -p 0xacbc7be5de1f76807965200033d2ab821368838db6577384dfea87ec8fc25990
```

Response:

```bash
Details of Proposal: 0xacbc7be5de1f76807965200033d2ab821368838db6577384dfea87ec8fc25990
---------------------------

Type: SPEND
Status: OPEN
Passed: False
Yes votes needed: 450
Closable: False
Total votes needed: 950
Blocks remaining: 0

Proposal XCH Conditions
0x1ee13b2f73a111dd4a9236a9304fe71bb1b4a2b70b5726daa25b94a8e9ab5465 1000000000000
```

In this example, 450 "Yes" votes are still needed, along with 950 total votes. Next we'll add 100 "yes" votes:

```bash
chia dao vote -i 2 -p 0xacbc7be5de1f76807965200033d2ab821368838db6577384dfea87ec8fc25990 -a 100 -m 0.0001
```

Response:

```
Submitted spend bundle with name: 0x5975b2e846cbd75335d3ed98a72af1edb4bdaaaf0817307b185d94ff9ad3c2ed
```

After the transaction has been confirmed on-chain, show the proposal again:

```bash
 chia dao show_proposal -i 2 -p 0xacbc7be5de1f76807965200033d2ab821368838db6577384dfea87ec8fc25990
```

The response shows that the 100 "Yes" votes have been counted:

```bash
Details of Proposal: 0xacbc7be5de1f76807965200033d2ab821368838db6577384dfea87ec8fc25990
---------------------------

Type: SPEND
Status: OPEN
Passed: False
Yes votes needed: 350
Closable: False
Total votes needed: 850
Blocks remaining: 0

Proposal XCH Conditions
0x1ee13b2f73a111dd4a9236a9304fe71bb1b4a2b70b5726daa25b94a8e9ab5465 1000000000000
```

</details>

---
