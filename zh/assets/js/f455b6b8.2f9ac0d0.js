"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[6229],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),r=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=r(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=r(n),m=o,p=d["".concat(c,".").concat(m)]||d[m]||h[m]||i;return n?a.createElement(p,s(s({ref:t},u),{},{components:n})):a.createElement(p,s({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var r=2;r<i;r++)s[r]=n[r];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>r});var a=n(7462),o=(n(7294),n(3905));const i={title:"Coin Set vs Account Model",slug:"/coin-set-vs-account"},s=void 0,l={unversionedId:"coin-set-model/coin-set-vs-account",id:"coin-set-model/coin-set-vs-account",title:"Coin Set vs Account Model",description:"In the account model used in many blockchains such as Ethereum, Solana and Algorand, balances are kept in accounts. These are permanent data structures which do not get destroyed when they send funds.",source:"@site/docs/coin-set-model/coin-set-vs-account.md",sourceDirName:"coin-set-model",slug:"/coin-set-vs-account",permalink:"/zh/coin-set-vs-account",draft:!1,editUrl:"https://github.com/Chia-Network/{{ REPOSITORY_NAME }}/blob/main/docs/coin-set-model/coin-set-vs-account.md",tags:[],version:"current",frontMatter:{title:"Coin Set vs Account Model",slug:"/coin-set-vs-account"},sidebar:"tutorialSidebar",previous:{title:"Coin Set vs UTXO Model",permalink:"/zh/coin-set-vs-utxo"},next:{title:"CLVM vs EVM",permalink:"/zh/clvm-vs-evm"}},c={},r=[{value:"Ethereum&#39;s account model",id:"ethereums-account-model",level:2},{value:"Chia&#39;s coin set model",id:"chias-coin-set-model",level:2},{value:"Advantages of the account model",id:"advantages-of-the-account-model",level:2},{value:"Monetary fungibility",id:"monetary-fungibility",level:3},{value:"Account",id:"account",level:4},{value:"Coin set",id:"coin-set",level:4},{value:"Ease of programming",id:"ease-of-programming",level:3},{value:"Account",id:"account-1",level:4},{value:"Coin set",id:"coin-set-1",level:4},{value:"Advantages of the coin set model",id:"advantages-of-the-coin-set-model",level:2},{value:"Scalability",id:"scalability",level:3},{value:"Coin set",id:"coin-set-2",level:4},{value:"Account",id:"account-2",level:4},{value:"Privacy",id:"privacy",level:3},{value:"Coin set",id:"coin-set-3",level:4},{value:"Account",id:"account-3",level:4},{value:"Determinism",id:"determinism",level:3},{value:"Coin set",id:"coin-set-4",level:4},{value:"Account",id:"account-4",level:4},{value:"Sandboxing",id:"sandboxing",level:3},{value:"Coin set",id:"coin-set-5",level:4},{value:"Account",id:"account-5",level:4},{value:"Database size",id:"database-size",level:3},{value:"Coin set",id:"coin-set-6",level:4},{value:"Account",id:"account-6",level:4}],u={toc:r},d="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the account model used in many blockchains such as Ethereum, Solana and Algorand, balances are kept in accounts. These are permanent data structures which do not get destroyed when they send funds."),(0,o.kt)("p",null,"In this section, we'll focus on Ethereum and how its account model compares with Chia's coin set model."),(0,o.kt)("h2",{id:"ethereums-account-model"},"Ethereum's account model"),(0,o.kt)("p",null,"In terms of keeping track of state, Ethereum's account model functions similarly to legacy banks. Accounts, balances and smart contracts are persisted on the blockchain."),(0,o.kt)("p",null,"Accounts and contracts have money associated with them. The source code governing how money may be spent is a first class object."),(0,o.kt)("p",null,"A typical Ethereum transaction would look like the following:"),(0,o.kt)("p",null,"Alice wants to send 1 eth to Bob. To complete this transaction, 1 eth is subtracted from Alice's balance, and 1 eth is added to Bob's balance. There is no need to calculate the history of how Alice acquired 1 eth prior to this transaction. In order for the transaction to be processed, the system only needs to know that Alice's balance was at least 1 eth."),(0,o.kt)("h2",{id:"chias-coin-set-model"},"Chia's coin set model"),(0,o.kt)("p",null,"There are no accounts or balances, but rather only coins (see the ",(0,o.kt)("a",{parentName:"p",href:"/coin-set-intro"},"Coin Set Intro page")," for more info). Coins are first class objects; they are the only data that is persisted on the blockchain. Each coin has a parent, allowing for its history to be tracked to its coinbase."),(0,o.kt)("p",null,"A typical Chia transaction would look like the following:"),(0,o.kt)("p",null,"Alice wants to send 1 XCH to Bob. Alice has five coins in her wallet: four worth 0.2 XCH apiece, and one worth 0.7 XCH. Her wallet automatically selects two of the coins worth 0.2 XCH and the 0.7 XCH coin to be spent. All three coin spends happen simultaneously, along with two new coin creations: one worth 1 XCH which goes to Bob's wallet, and one worth 0.1 XCH which goes to Alice's wallet as \"change.\" Alice now has two coins worth 0.2 XCH and one worth 0.1 XCH. Bob has one coin worth 1 XCH. The total value owned by Alice and Bob has not changed -- it was 1.5 XCH both before and after the transaction was processed."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Owner"),(0,o.kt)("th",{parentName:"tr",align:null},"Before"),(0,o.kt)("th",{parentName:"tr",align:null},"After"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Alice"),(0,o.kt)("td",{parentName:"tr",align:null},"1.5 XCH (5 coins)"),(0,o.kt)("td",{parentName:"tr",align:null},"0.5 XCH (3 coin)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Bob"),(0,o.kt)("td",{parentName:"tr",align:null},"0 XCH"),(0,o.kt)("td",{parentName:"tr",align:null},"1.0 XCH (1 coin)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Total"),(0,o.kt)("td",{parentName:"tr",align:null},"1.5 XCH"),(0,o.kt)("td",{parentName:"tr",align:null},"1.5 XCH")))),(0,o.kt)("h2",{id:"advantages-of-the-account-model"},"Advantages of the account model"),(0,o.kt)("h3",{id:"monetary-fungibility"},"Monetary fungibility"),(0,o.kt)("h4",{id:"account"},"Account"),(0,o.kt)("p",null,'An account only has a balance, so it\'s difficult to make a logical case that some money should be treated differently than other money. Money is "mixed" by default.'),(0,o.kt)("h4",{id:"coin-set"},"Coin set"),(0,o.kt)("p",null,'Coins can be combined by spending them, but they cannot be "mixed" by adding a balance to an account. This means that some coins might be viewed differently than others, even if they have the same value.'),(0,o.kt)("p",null,"This has already happened with Bitcoin. Due to its high energy consumption, some people have refused to buy bitcoins that can be traced to mining with fossil fuels. This affects Bitcoin's fungibility because not all coins are viewed equally."),(0,o.kt)("h3",{id:"ease-of-programming"},"Ease of programming"),(0,o.kt)("h4",{id:"account-1"},"Account"),(0,o.kt)("p",null,"Solidity shares similar paradigms in programming to web development, so there is a large pool of programmers who can learn it fairly quickly. When programming a smart contract, the programmer can simply store all balances in an array. Transactions involve little more than adding to, and subtracting from, balances. All other logic is contained within the same program. It's simple to combine multiple transactions that affect the same program in the same block."),(0,o.kt)("h4",{id:"coin-set-1"},"Coin set"),(0,o.kt)("p",null,"Transactions might involve spending and creating many coins, so a programmer must think about the rules governing how coins may be spent, and how coins will interact with each other. This makes programming in Chia more difficult than in Ethereum. However, auditing is much easier in Chia (see the ",(0,o.kt)("a",{parentName:"p",href:"/clvm-vs-evm"},"CLVM vs EVM page")," for more info)."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"advantages-of-the-coin-set-model"},"Advantages of the coin set model"),(0,o.kt)("h3",{id:"scalability"},"Scalability"),(0,o.kt)("h4",{id:"coin-set-2"},"Coin set"),(0,o.kt)("p",null,'Because verification is built into the coin set model, so is scaling. If a coin\'s "owner" loses the private key required to spend the coin, the coin becomes unspendable. However, the overall system is unaffected, so scaling does not become more difficult.'),(0,o.kt)("p",null,"Additionally, because each coin spend is independent, the system is very parallelizable."),(0,o.kt)("h4",{id:"account-2"},"Account"),(0,o.kt)("p",null,"If an account's owner loses their private key, then any code or messages referring to that account cannot be processed. This can be propagated across the entire system, making solutions such as sharding more difficult."),(0,o.kt)("h3",{id:"privacy"},"Privacy"),(0,o.kt)("h4",{id:"coin-set-3"},"Coin set"),(0,o.kt)("p",null,"With a click of a button, a user can add a new address for each transaction; each new coin can be stored in a different address. This makes blacklisting difficult."),(0,o.kt)("h4",{id:"account-3"},"Account"),(0,o.kt)("p",null,"Each user typically has just one account. It's possible to create additional accounts in order to use more than one address. However, high fees typically discourage users from doing this. Also, it's easy to blacklist an ETH address."),(0,o.kt)("h3",{id:"determinism"},"Determinism"),(0,o.kt)("h4",{id:"coin-set-4"},"Coin set"),(0,o.kt)("p",null,"Coins can only be spent once, making the results deterministic (if you run the same program multiple times, you'll get the same result each time). Because of this, re-applying mempool transactions after a new block is not necessary."),(0,o.kt)("p",null,"Note, however, that smart coins ",(0,o.kt)("em",{parentName:"p"},"could")," be designed such that multiple people could spend the same coin, which would potentially reduce determinism for those coins."),(0,o.kt)("h4",{id:"account-4"},"Account"),(0,o.kt)("p",null,"Multiple people can execute the same code within a smart contract. The order of execution could affect the results, which therefore reduces determinism."),(0,o.kt)("h3",{id:"sandboxing"},"Sandboxing"),(0,o.kt)("h4",{id:"coin-set-5"},"Coin set"),(0,o.kt)("p",null,"Coin value is split between many coins, increasing sandboxing, and therefore security. One program cannot call or affect another. If a coin is hacked, only that coin's owner can have money stolen."),(0,o.kt)("h4",{id:"account-5"},"Account"),(0,o.kt)("p",null,"Value is stored within a single account or contract. Multiple people can execute the same smart contract code. If a contract is hacked, everyone who participates could have money stolen."),(0,o.kt)("h3",{id:"database-size"},"Database size"),(0,o.kt)("h4",{id:"coin-set-6"},"Coin set"),(0,o.kt)("p",null,"Programmable features are not stored directly on chain. Instead, coins use hashing to allow for later verification of their contents."),(0,o.kt)("p",null,"Chia's database is expected to grow by around 30 GB annually, which is roughly the same rate as Bitcoin's. Kryder's Law dictates that storage capacity will grow exponentially in the short-to-medium term, whereas the database will grow linearly. In early 2022, an SSD capable of storing Chia's database cost less than $50. This should hold true for the foreseeable future, even as Chia's database continues to expand."),(0,o.kt)("h4",{id:"account-6"},"Account"),(0,o.kt)("p",null,"User account information, as well as transaction data, is small. However, smart contracts are stored on chain. Because of this, Ethereum's database will likely grow more rapidly than Bitcoin's or Chia's."))}h.isMDXComponent=!0}}]);