"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[8799],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var o=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(t),h=s,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return t?o.createElement(m,a(a({ref:n},u),{},{components:t})):o.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,a=new Array(i);a[0]=h;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r[d]="string"==typeof e?e:s,a[1]=r;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},3128:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=t(7462),s=(t(7294),t(3905));const i={slug:"/guides/crash-course/state",title:"State"},a=void 0,r={unversionedId:"guides/crash-course/state",id:"guides/crash-course/state",title:"State",description:"Coin Set Refresher",source:"@site/docs/guides/crash-course/state.md",sourceDirName:"guides/crash-course",slug:"/guides/crash-course/state",permalink:"/guides/crash-course/state",draft:!1,editUrl:"https://github.com/Chia-Network/{{ REPOSITORY_NAME }}/blob/main/docs/guides/crash-course/state.md",tags:[],version:"current",frontMatter:{slug:"/guides/crash-course/state",title:"State"},sidebar:"guides",previous:{title:"Signatures",permalink:"/guides/crash-course/signatures"},next:{title:"Inner Puzzles",permalink:"/guides/crash-course/inner-puzzles"}},l={},c=[{value:"Coin Set Refresher",id:"coin-set-refresher",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2},{value:"State in Chialisp",id:"state-in-chialisp",level:2},{value:"Initial Setup",id:"initial-setup",level:2},{value:"Initializing the Coin",id:"initializing-the-coin",level:2},{value:"Retrieving the Message",id:"retrieving-the-message",level:2},{value:"Updating the Message",id:"updating-the-message",level:2},{value:"Breakdown",id:"breakdown",level:3},{value:"Updated Message",id:"updated-message",level:3},{value:"Shared Messages",id:"shared-messages",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,s.kt)(d,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"coin-set-refresher"},"Coin Set Refresher"),(0,s.kt)("p",null,"Before we jump in to the bulk of this lesson I wanted to remind you of how the Chia blockchain works. Chia uses a ",(0,s.kt)("strong",{parentName:"p"},"coin set")," model very similar to that of Bitcoin's UTXO model. This is very different than the account model used in other major chains. Instead of having an account with a ",(0,s.kt)("em",{parentName:"p"},"balance"),", you just have a collection of unspent coins that you are able to spend."),(0,s.kt)("p",null,"For example:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Coin 1: 0.25 XCH"),(0,s.kt)("li",{parentName:"ul"},"Coin 2: 1.75 XCH"),(0,s.kt)("li",{parentName:"ul"},"Coin 3: 0.25 XCH"),(0,s.kt)("li",{parentName:"ul"},"Coin 4: 1.75 XCH")),(0,s.kt)("p",null,"Balance: 4 XCH"),(0,s.kt)("p",null,'You will often hear "everything is a coin" being said. This is true!'),(0,s.kt)("p",null,"This introduces some unique approaches to creating software on the Chia blockchain."),(0,s.kt)("p",null,"To use Chialisp on the Chia blockchain, we must create a coin. As part of the coin set model, spending a coin results in a collection of removals and additions. The removals are your existing coins used for the spend being destroyed, and the additions are new coins (including any change) being created."),(0,s.kt)("p",null,"Here is an example"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Say you have 1.75 XCH"),(0,s.kt)("li",{parentName:"ol"},"You send .75 XCH to some address (remember, an address is an encoded form of puzzle hash)"),(0,s.kt)("li",{parentName:"ol"},"This results in all 1.75 of your XCH being spent"),(0,s.kt)("li",{parentName:"ol"},"a new coin worth 1 XCH is created to be returned back to you (this is called change)"),(0,s.kt)("li",{parentName:"ol"},"a new coin worth .75 XCH is created for the destination puzzle hash")),(0,s.kt)("p",null,"Another example:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Say you have 2 XCH made up of multiple small coins"),(0,s.kt)("li",{parentName:"ol"},"You send 1 XCH to some address"),(0,s.kt)("li",{parentName:"ol"},"Coins of .1 XCH, .5 XCH, and .45 XCH are being spent to sum up to 1.05 XCH (greater than or equal to 1 XCH spend)"),(0,s.kt)("li",{parentName:"ol"},"a new coin worth .05 XCH is created to be returned back to you"),(0,s.kt)("li",{parentName:"ol"},"a new coin worth 1 XCH is created for the destination puzzle hash")),(0,s.kt)("h2",{id:"whats-next"},"What's Next?"),(0,s.kt)("p",null,"We will be building a simple example of a coin that stores a message that anyone can change by spending the coin. This will be built using the previous lesson's project setup, but you can find all of ",(0,s.kt)("inlineCode",{parentName:"p"},"index.ts")," here:"),(0,s.kt)("details",null,(0,s.kt)("summary",null,"index.ts"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { mnemonicToSeedSync } from 'bip39';\nimport { fromHex, PrivateKey, toHex } from 'chia-bls';\nimport { Coin, formatHex, FullNode, sanitizeHex, toCoinId } from 'chia-rpc';\nimport { KeyStore, StandardWallet } from 'chia-wallet-lib';\nimport { Program } from 'clvm-lib';\nimport dotenv from 'dotenv';\nimport fs from 'fs';\nimport os from 'os';\nimport path from 'path';\n\ndotenv.config();\n\nconst mnemonic = process.env.MNEMONIC!;\nconst privateKey = PrivateKey.fromSeed(mnemonicToSeedSync(mnemonic));\n\nconst dir = path.join(__dirname, '..');\n\nconst messagePuzzle = Program.deserializeHex(\n    fs.readFileSync(path.join(dir, 'message.clsp.hex'), 'utf-8')\n);\n\nconst node = new FullNode(os.homedir() + '/.chia/mainnet');\nconst keyStore = new KeyStore(privateKey);\n\nconst wallet = new StandardWallet(node, keyStore);\nconst genesis = fromHex(process.env.GENESIS!);\n\nconst amount = 1;\nconst fee = 0.00005e12;\n\nasync function newInstance(initialMessage: Program) {\n    await wallet.sync();\n\n    const spend = wallet.createSpend();\n\n    // Curry the puzzle\n    const puzzle = messagePuzzle.curry([\n        // Mod hash\n        Program.fromBytes(messagePuzzle.hash()),\n\n        // Message is empty until the eve is spent\n        Program.nil,\n    ]);\n\n    // Create the eve coin\n    const send = await wallet.send(puzzle.hash(), amount, fee);\n    spend.coin_spends.push(...send);\n\n    // Calculate the root coin id\n    const eveCoin: Coin = {\n        parent_coin_info: formatHex(toHex(toCoinId(send[0].coin))),\n        puzzle_hash: formatHex(puzzle.hashHex()),\n        amount,\n    };\n\n    // Create the eve solution\n    const solution = Program.fromList([\n        // Message\n        initialMessage,\n\n        // Amount\n        Program.fromInt(amount),\n    ]);\n\n    // Spend the eve coin\n    spend.coin_spends.push({\n        coin: eveCoin,\n        puzzle_reveal: puzzle.serializeHex(),\n        solution: solution.serializeHex(),\n    });\n\n    // Sign the wallet spend\n    wallet.signSpend(spend, genesis);\n\n    // Complete the transaction\n    console.log('Eve coin id:', toHex(toCoinId(eveCoin)));\n    console.log(await node.pushTx(spend));\n}\n\ninterface SyncInfo {\n    parent: string;\n    current: string;\n}\n\nasync function sync(): Promise<SyncInfo> {\n    const eveCoinId = process.env.EVE_COIN_ID!;\n\n    let current = eveCoinId;\n    let parent = current;\n\n    while (true) {\n        // Fetch coins created by the current coin\n        const coinRecords = await node.getCoinRecordsByParentIds(\n            [current],\n            undefined,\n            undefined,\n            true\n        );\n        if (!coinRecords.success) throw new Error(coinRecords.error);\n\n        // If there are none, we are already synced\n        if (!coinRecords.coin_records.length) break;\n\n        // Update the parent\n        parent = current;\n\n        // Continue with the child coin as the new singleton\n        const coinRecord = coinRecords.coin_records[0];\n        current = toHex(toCoinId(coinRecord.coin));\n    }\n\n    return {\n        parent,\n        current,\n    };\n}\n\nasync function getMessage(syncInfo: SyncInfo): Promise<Program> {\n    const coinRecord = await node.getCoinRecordByName(syncInfo.parent);\n    if (!coinRecord.success) throw new Error(coinRecord.error);\n\n    const puzzleAndSolution = await node.getPuzzleAndSolution(\n        syncInfo.parent,\n        coinRecord.coin_record.spent_block_index\n    );\n    if (!puzzleAndSolution.success) throw new Error(puzzleAndSolution.error);\n\n    const spend = puzzleAndSolution.coin_solution;\n\n    const solution = Program.deserializeHex(\n        sanitizeHex(spend.solution)\n    ).toList();\n\n    return solution[0];\n}\n\nasync function printMessage() {\n    const syncInfo = await sync();\n    const message = await getMessage(syncInfo);\n    console.log('Message:', message.toString());\n}\n\nasync function setMessage(newMessage: Program) {\n    await wallet.sync();\n\n    const syncInfo = await sync();\n    const message = await getMessage(syncInfo);\n\n    // Fetch the coin record\n    const coinRecord = await node.getCoinRecordByName(syncInfo.current);\n    if (!coinRecord.success) throw new Error(coinRecord.error);\n\n    const coin = coinRecord.coin_record.coin;\n\n    const spend = wallet.createSpend();\n\n    // Create the current puzzle\n    const puzzle = messagePuzzle.curry([\n        Program.fromBytes(messagePuzzle.hash()),\n        message,\n    ]);\n\n    // Create the solution\n    const solution = Program.fromList([\n        newMessage,\n        Program.fromInt(coin.amount),\n    ]);\n\n    spend.coin_spends.push({\n        // Spend the current singleton\n        coin,\n\n        // The puzzle reveal contains the old message\n        puzzle_reveal: puzzle.serializeHex(),\n\n        // Spend it with the new message\n        solution: solution.serializeHex(),\n    });\n\n    const send = await wallet.sendFee(fee);\n\n    spend.coin_spends.push(...send);\n\n    wallet.signSpend(spend, genesis);\n\n    console.log(await node.pushTx(spend));\n}\n\n// newInstance(Program.fromText('Hello, world!'));\n// printMessage();\n// setMessage(Program.fromText('Goodbye, world!'));\n"))),(0,s.kt)("h2",{id:"state-in-chialisp"},"State in Chialisp"),(0,s.kt)("p",null,"We are now going to be discussing the idea of state. State is used to maintain some value on-chain. This can be done with a coin that recreates itself currying in a new value."),(0,s.kt)("p",null,"The example we will be using today stores a message that can be changed by anyone. Essentially, the first coin we create will store the initial state, which is the message. Then, every time the coin is spent, we will create a new coin that stores the new message inside of it."),(0,s.kt)("p",null,"The first coin is called the ",(0,s.kt)("strong",{parentName:"p"},"eve"),", and every coin that follows it forms a complete lineage of the history."),(0,s.kt)("p",null,"First, we will install the needed Chialisp dependencies:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cdv clsp retrieve condition_codes curry_and_treehash\n")),(0,s.kt)("p",null,"Here is the puzzle we will be using:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-chialisp",metastring:"title=message.clsp",title:"message.clsp"},"(mod (MOD_HASH MESSAGE new_message amount)\n    (include condition_codes.clib)\n    (include curry_and_treehash.clib)\n\n    (defun-inline new_puzzle_hash (MOD_HASH new_message)\n        (puzzle-hash-of-curried-function MOD_HASH\n            (sha256 1 new_message)\n            (sha256 1 MOD_HASH)\n        )\n    )\n\n    (list\n        (list CREATE_COIN (new_puzzle_hash MOD_HASH new_message) amount)\n    )\n)\n")),(0,s.kt)("p",null,"Specifically, this will create a new coin using ",(0,s.kt)("inlineCode",{parentName:"p"},"CREATE_COIN"),". The puzzle hash is calculated by passing ",(0,s.kt)("inlineCode",{parentName:"p"},"MOD_HASH")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"new_message")," to the ",(0,s.kt)("inlineCode",{parentName:"p"},"new_puzzle_hash")," function. This effectively recreates the coin with the same puzzle. The only difference is that is uses the new message."),(0,s.kt)("p",null,"We will compile this Chialisp code with this command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"cdv clsp build message.clsp\n")),(0,s.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,s.kt)("p",null,"Install the needed dependencies:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install bip39 chia-bls chia-rpc chia-wallet-lib clvm-lib dotenv\n")),(0,s.kt)("p",null,"This is the code to set everything up and prepare for building this example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { mnemonicToSeedSync } from 'bip39';\nimport { fromHex, PrivateKey, toHex } from 'chia-bls';\nimport { Coin, formatHex, FullNode, sanitizeHex, toCoinId } from 'chia-rpc';\nimport { KeyStore, StandardWallet } from 'chia-wallet-lib';\nimport { Program } from 'clvm-lib';\nimport dotenv from 'dotenv';\nimport fs from 'fs';\nimport os from 'os';\nimport path from 'path';\n\ndotenv.config();\n\nconst mnemonic = process.env.MNEMONIC!;\nconst privateKey = PrivateKey.fromSeed(mnemonicToSeedSync(mnemonic));\n\nconst dir = path.join(\\_\\_dirname, '..');\n\nconst messagePuzzle = Program.deserializeHex(\nfs.readFileSync(path.join(dir, 'message.clsp.hex'), 'utf-8')\n);\n\nconst node = new FullNode(os.homedir() + '/.chia/mainnet');\nconst keyStore = new KeyStore(privateKey);\n\nconst wallet = new StandardWallet(node, keyStore);\nconst genesis = fromHex(process.env.GENESIS!);\n\nconst amount = 1;\nconst fee = 0.00005e12;\n")),(0,s.kt)("h2",{id:"initializing-the-coin"},"Initializing the Coin"),(0,s.kt)("p",null,"The first thing that we need to do is create the eve coin. However, that is not enough to be able to fetch the message that is stored on-chain. This is because the puzzle that a coin uses is not revealed until that coin is spent."),(0,s.kt)("p",null,"The solution to this problem is to instantly spend the eve coin when it is created. This way, the solution will contain the message that the next coin uses. This allows the current state to be inferred and the coin to be spent later by someone else."),(0,s.kt)("p",null,"Here is the code that initializes the eve coin and its descendant:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"async function newInstance(initialMessage: Program) {\n    await wallet.sync();\n\n    const spend = wallet.createSpend();\n\n    // Curry the puzzle\n    const puzzle = messagePuzzle.curry([\n        // Mod hash\n        Program.fromBytes(messagePuzzle.hash()),\n\n        // Message is empty until the eve is spent\n        Program.nil,\n    ]);\n\n    // Create the eve coin\n    const send = await wallet.send(puzzle.hash(), amount, fee);\n    spend.coin_spends.push(...send);\n\n    // Calculate the root coin id\n    const eveCoin: Coin = {\n        parent_coin_info: formatHex(toHex(toCoinId(send[0].coin))),\n        puzzle_hash: formatHex(puzzle.hashHex()),\n        amount,\n    };\n\n    // Create the eve solution\n    const solution = Program.fromList([\n        // Message\n        initialMessage,\n\n        // Amount\n        Program.fromInt(amount),\n    ]);\n\n    // Spend the eve coin\n    spend.coin_spends.push({\n        coin: eveCoin,\n        puzzle_reveal: puzzle.serializeHex(),\n        solution: solution.serializeHex(),\n    });\n\n    // Sign the wallet spend\n    wallet.signSpend(spend, genesis);\n\n    // Complete the transaction\n    console.log('Eve coin id:', toHex(toCoinId(eveCoin)));\n    console.log(await node.pushTx(spend));\n}\n\nnewInstance(Program.fromText('Hello, world!'));\n")),(0,s.kt)("p",null,"Running this, you will get a response similar to:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Eve coin id: a6c5a4d12456ae6dee553b1b17544799f561a62f678d7948df12f28d17bfa96e\n{ status: 'SUCCESS', success: true }\n")),(0,s.kt)("p",null,"Where the eve coin ID is the ID of the first coin."),(0,s.kt)("p",null,"We have successfully created the eve coin, spent it to reveal the current state (the message), and logged the eve coin ID."),(0,s.kt)("h2",{id:"retrieving-the-message"},"Retrieving the Message"),(0,s.kt)("p",null,"We can retrieve the message by getting the eve coin and following its children to the latest (referred to as syncing). The most recent message is provided in the solution of the spend of the previous coin."),(0,s.kt)("p",null,"For this to work, we read the ",(0,s.kt)("inlineCode",{parentName:"p"},"EVE_COIN_ID")," from the ",(0,s.kt)("inlineCode",{parentName:"p"},".env")," file, which should now look something like:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-env",metastring:"title=.env",title:".env"},"MNEMONIC=nasty sunny kingdom popular turn core rifle river twenty edit sort pill rice claw hollow please wash inform cannon empower emotion caught salt close\nGENESIS=d25b25b897564035695996922aa0f9ff9d611bd38cd2ecd0d2383a99a70dfc15\nEVE_COIN_ID=5fe284bfa91c32fd274179769f5b808c916e5135e603cb292a90e04e5867bd1a\n")),(0,s.kt)("p",null,"Write the following code to sync the state:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=index.ts",title:"index.ts"},"interface SyncInfo {\n    parent: string;\n    current: string;\n}\n\nasync function sync(): Promise<SyncInfo> {\n    const eveCoinId = process.env.EVE_COIN_ID!;\n\n    let current = eveCoinId;\n    let parent = current;\n\n    while (true) {\n        // Fetch coins created by the current coin\n        const coinRecords = await node.getCoinRecordsByParentIds(\n            [current],\n            undefined,\n            undefined,\n            true\n        );\n        if (!coinRecords.success) throw new Error(coinRecords.error);\n\n        // If there are none, we are already synced\n        if (!coinRecords.coin_records.length) break;\n\n        // Update the parent\n        parent = current;\n\n        // Continue with the child coin as the new singleton\n        const coinRecord = coinRecords.coin_records[0];\n        current = toHex(toCoinId(coinRecord.coin));\n    }\n\n    return {\n        parent,\n        current,\n    };\n}\n")),(0,s.kt)("p",null,"Now that we have the current coin and its parent, we can fetch the solution of the parent's spend to find the message:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"async function getMessage(syncInfo: SyncInfo): Promise<Program> {\n    const coinRecord = await node.getCoinRecordByName(syncInfo.parent);\n    if (!coinRecord.success) throw new Error(coinRecord.error);\n\n    const puzzleAndSolution = await node.getPuzzleAndSolution(\n        syncInfo.parent,\n        coinRecord.coin_record.spent_block_index\n    );\n    if (!puzzleAndSolution.success) throw new Error(puzzleAndSolution.error);\n\n    const spend = puzzleAndSolution.coin_solution;\n\n    const solution = Program.deserializeHex(\n        sanitizeHex(spend.solution)\n    ).toList();\n\n    return solution[0];\n}\n\nasync function printMessage() {\n    const syncInfo = await sync();\n    const message = await getMessage(syncInfo);\n    console.log('Message:', message.toString());\n}\n\nprintMessage();\n")),(0,s.kt)("p",null,"Running this with ",(0,s.kt)("inlineCode",{parentName:"p"},"npm run start")," should output the initial message:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Message: "Hello, world!"\n')),(0,s.kt)("h2",{id:"updating-the-message"},"Updating the Message"),(0,s.kt)("p",null,"Finally, we can create a new coin by spending the existing coin and providing a new message in the solution."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"async function setMessage(newMessage: Program) {\n    await wallet.sync();\n\n    const syncInfo = await sync();\n    const message = await getMessage(syncInfo);\n\n    // Fetch the coin record\n    const coinRecord = await node.getCoinRecordByName(syncInfo.current);\n    if (!coinRecord.success) throw new Error(coinRecord.error);\n\n    const coin = coinRecord.coin_record.coin;\n\n    const spend = wallet.createSpend();\n\n    // Create the current puzzle\n    const puzzle = messagePuzzle.curry([\n        Program.fromBytes(messagePuzzle.hash()),\n        message,\n    ]);\n\n    // Create the solution\n    const solution = Program.fromList([\n        newMessage,\n        Program.fromInt(coin.amount),\n    ]);\n\n    spend.coin_spends.push({\n        // Spend the current singleton\n        coin,\n\n        // The puzzle reveal contains the old message\n        puzzle_reveal: puzzle.serializeHex(),\n\n        // Spend it with the new message\n        solution: solution.serializeHex(),\n    });\n\n    const send = await wallet.sendFee(fee);\n\n    spend.coin_spends.push(...send);\n\n    wallet.signSpend(spend, genesis);\n\n    console.log(await node.pushTx(spend));\n}\n\nsetMessage(Program.fromText('Goodbye, world!'));\n")),(0,s.kt)("p",null,"Run the following command to set the new message:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start\n")),(0,s.kt)("h3",{id:"breakdown"},"Breakdown"),(0,s.kt)("p",null,"This will first find the latest coin from the eve coin ID:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"await wallet.sync();\n\nconst syncInfo = await sync();\nconst message = await getMessage(syncInfo);\n\n// Fetch the coin record\nconst coinRecord = await node.getCoinRecordByName(syncInfo.current);\nif (!coinRecord.success) throw new Error(coinRecord.error);\n\nconst coin = coinRecord.coin_record.coin;\n")),(0,s.kt)("p",null,"which is then spent using a solution with our new message:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// Create the solution\nconst solution = Program.fromList([newMessage, Program.fromInt(coin.amount)]);\n\nspend.coin_spends.push({\n    // Spend the current singleton\n    coin,\n\n    // The puzzle reveal contains the old message\n    puzzle_reveal: puzzle.serializeHex(),\n\n    // Spend it with the new message\n    solution: solution.serializeHex(),\n});\n")),(0,s.kt)("h3",{id:"updated-message"},"Updated Message"),(0,s.kt)("p",null,"Now, we should be able to retrieve the new message with:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"printMessage();\n")),(0,s.kt)("p",null,"Run the following command to see the new message:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start\n")),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"As a reminder, each step can take some time as the message is updated on chain. Because of this, you'll want to issue each function call separately.")),(0,s.kt)("h2",{id:"shared-messages"},"Shared Messages"),(0,s.kt)("p",null,"Because this puzzle does not require a signature, anyone can spend the coin providing a new message.\nSay your eve coin ID is ",(0,s.kt)("inlineCode",{parentName:"p"},"5fe284bfa91c32fd274179769f5b808c916e5135e603cb292a90e04e5867bd1a"),", you can share this value with anyone to update this message."),(0,s.kt)("h2",{id:"conclusion"},"Conclusion"),(0,s.kt)("p",null,"This has been an introduction to managing to state on the Chia blockchain. We've seen how you can write a puzzle that recreates itself with new values in order to maintain a complete linear history of updates on-chain. You can find the current value by looking at the solution of the last coin's parent."),(0,s.kt)("p",null,"In the world of Chia, this concept is used heavily to store various information. For example, NFTs maintain a list of URIs that point to the data, metadata, and license."),(0,s.kt)("details",null,(0,s.kt)("summary",null,"More Info: Singletons"),(0,s.kt)("p",null,'A singleton is a common application of the "recreate self" functionality we used in this lesson. Essentially, a singleton can be used to wrap an inner puzzle and add additional rules to it. In particular, it ensures that only one output is created (with an odd amount). Every time the coin is spent, the output of the inner puzzle is wrapped to maintain the singleton\'s lineage. This restriction can only be broken by melting the singleton.'),(0,s.kt)("p",null,"Anyone can create a coin with any puzzle. This means there is a good chance there will be multiple coins with the same puzzle hash. This can lead to confusion as to which coin is which, and may lead to confusion or mistakes. A singleton allows for something to exist on chain that is provably unique. This helps us be sure that we are working with the correct coin."),(0,s.kt)("p",null,"The idea is that you can reuse the singleton behavior without having to write everything in a special way. You can ",(0,s.kt)("a",{parentName:"p",href:"https://chialisp.com/singletons"},"read more about singletons")," if you want to, but we will not be covering them in this course due to the additional complexities involved in launching and spending them."),(0,s.kt)("p",null,"Often times, puzzles that manage state will be wrapped in the singleton to ensure that there is only one instance of the state at a given time. It would be as simple as using the puzzle we wrote in this lesson as the inner puzzle to a singleton. The only additional restriction is that the coin's amount must be odd."),(0,s.kt)("p",null,"Because the singleton will be a series of spent coins and new coins created over time, we need a different way than the coin ID to identify a singleton. A singleton is instead identified by its ",(0,s.kt)("strong",{parentName:"p"},"launcher ID"),", which is the coin ID of the singleton's parent coin (think of this as similar to the eve coin ID we created in this lesson). This parent coin is the coin used to create the initial coin of the singleton.")))}p.isMDXComponent=!0}}]);