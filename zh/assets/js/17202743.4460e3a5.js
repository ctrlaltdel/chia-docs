"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[1735],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,u=m["".concat(l,".").concat(d)]||m[d]||p[d]||r;return n?o.createElement(u,i(i({ref:t},h),{},{components:n})):o.createElement(u,i({ref:t},h))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={title:"Mempool",slug:"/mempool"},i=void 0,s={unversionedId:"architecture/mempool",id:"architecture/mempool",title:"Mempool",description:"The mempool (or memory pool) is a collection of transactions stored by full nodes, usually in memory, before they are confirmed on the blockchain. The mempool is not dictated by the consensus rules; a farmer can change how their mempool functions and customize the rules without permission from other full nodes.",source:"@site/docs/architecture/mempool.md",sourceDirName:"architecture",slug:"/mempool",permalink:"/zh/mempool",draft:!1,editUrl:"https://github.com/Chia-Network/{{ REPOSITORY_NAME }}/blob/main/docs/architecture/mempool.md",tags:[],version:"current",frontMatter:{title:"Mempool",slug:"/mempool"},sidebar:"tutorialSidebar",previous:{title:"Wallets",permalink:"/zh/wallet-architecture"},next:{title:"Consensus Introduction",permalink:"/zh/consensus-intro"}},l={},c=[{value:"Validation",id:"validation",level:2},{value:"Fee Required for Inclusion",id:"fee-required-for-inclusion",level:2},{value:"Replace by Fee",id:"replace-by-fee",level:2},{value:"Block Creation",id:"block-creation",level:2},{value:"Updating the Mempool",id:"updating-the-mempool",level:2}],h={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The mempool (or memory pool) is a collection of transactions stored by full nodes, usually in memory, before they are confirmed on the blockchain. The mempool is not dictated by the consensus rules; a farmer can change how their mempool functions and customize the rules without permission from other full nodes."),(0,a.kt)("p",null,"The mempool is a required facet of Chia due to the decentralized nature of the blockchain. Transaction blocks occur approximately every 52 seconds, and it's impossible to predict who will win a block. Therefore, all transactions must be broadcast to the whole network and stored locally until they are confirmed. Additionally, it is normal to have more pending transactions than can fit in a single block, so the mempool also acts as a queue for inclusion into the blockchain."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},'How many transactions can fit into a block? Due to the varying size of transactions, and the different definitions of what even counts as a "transaction," there is not an exact number. But just for a bit of rough guidance, approximately 1000 transactions with two inputs and two outputs, or 2000 transactions with one input and one output can fit into a single block.')),(0,a.kt)("p",null,"When a user makes a transaction, it gets sent to a full node, which then verifies it, adds it to the mempool, and broadcasts it to all of its peers. Therefore, transactions get propagated to the whole network in a very short period of time."),(0,a.kt)("h2",{id:"validation"},"Validation"),(0,a.kt)("p",null,"Only valid transactions are allowed to enter the mempool. The process of validating transactions is similar to the process of validating blocks. This includes running CLVM, checking conditions, validating signatures, and checking that the coins to be spent are currently unspent and valid."),(0,a.kt)("p",null,"The transaction is also checked against other transactions in the mempool, to ensure there are no conflicts."),(0,a.kt)("h2",{id:"fee-required-for-inclusion"},"Fee Required for Inclusion"),(0,a.kt)("p",null,"If the mempool is not full, all transactions regardless of fee are accepted into the mempool. The maximum mempool size can vary by version, and transactions have a large variance in size, but it is generally 10-100 blocks."),(0,a.kt)("p",null,"Transactions with 0 fee are accepted into the mempool as of chia-blockchain version 1.2.12. Fees that are very close to zero are considered equivalent to zero. The threshold is set at 5 mojo per cost, but this can vary by implementation, version, and settings, so it's not guaranteed by the protocol."),(0,a.kt)("p",null,"When the mempool gets full, nodes will start rejecting transactions that don't meet a minimum fee. The full node sorts the transactions by fee-per-cost, and kicks out the least valuable transactions first, when including new ones."),(0,a.kt)("h2",{id:"replace-by-fee"},"Replace by Fee"),(0,a.kt)("p",null,"A transaction can replace another transaction in the mempool if it spends at least the same coins as the original one."),(0,a.kt)("p",null,"For example, if the original transaction spent coins A and B, then another transaction that spends A, B, and C can replace it. However, a transaction that spends B and C cannot. This prevents denial-of-service (DOS) attacks, as well as censorship of transactions. There is also a minimum fee bump which might depend on mempool software being used. In ",(0,a.kt)("inlineCode",{parentName:"p"},"chia-blockchain"),", this is set to 5 fee-per-cost. This prevents spam replacement transactions."),(0,a.kt)("h2",{id:"block-creation"},"Block Creation"),(0,a.kt)("p",null,"When the farmer makes a block, they will select the highest fee-per-cost transactions from the mempool until they reach the maximum block size. These spend bundles are combined into one large spend bundle, which is guaranteed to be valid,\nsince all spend bundles in the mempool must spend disjointed coins."),(0,a.kt)("p",null,"Coin spends cannot impact other coin spends, which is a very nice property of UTXO systems, and allows parallelization of validation and block creation. The aggregate\nspend bundle also has one aggregate signature, which is a combination of every signature from every transaction in that block."),(0,a.kt)("p",null,'For performance reasons, the chia-blockchain codebase currently creates only smaller blocks (less than 50% of the maximum size) in order to keep the blockchain smaller and easier to run. This "throttle" is likely to be removed in future versions, after additional optimizations have been performed.'),(0,a.kt)("h2",{id:"updating-the-mempool"},"Updating the Mempool"),(0,a.kt)("p",null,"After a new block is added to the blockchain, all full nodes must look at the coins that were spent in that new block, and remove them from the mempool. The full node does not need to reapply every transaction again, since Chia coin spends are deterministic and sandboxed (see the ",(0,a.kt)("a",{parentName:"p",href:"/coin-set-intro"},"Coin Set Intro page")," for more information). The full node only needs to look at the spent coins in the new block, and if there are any transactions that spend one of those coins, they are removed from the mempool. This means the mempool can be very large, the codebase can be simple, and high performance can be achieved."))}p.isMDXComponent=!0}}]);