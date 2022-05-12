"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[425],{3905:function(e,t,o){o.d(t,{Zo:function(){return m},kt:function(){return d}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),h=c(o),d=a,u=h["".concat(l,".").concat(d)]||h[d]||p[d]||r;return o?n.createElement(u,i(i({ref:t},m),{},{components:o})):n.createElement(u,i({ref:t},m))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},8826:function(e,t,o){o.r(t),o.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=o(7462),a=o(3366),r=(o(7294),o(3905)),i=["components"],s={sidebar_position:1},l="6.1 Mempool",c={unversionedId:"06mempool/mempool",id:"06mempool/mempool",title:"6.1 Mempool",description:"The mempool (or memory pool) is a collection of transactions stored by full nodes, usually in memory, before they are confirmed on the blockchain. The mempool is not dictated by the consensus rules; a farmer can change how their mempool functions and customize the rules without permission from other full nodes.",source:"@site/docs/06mempool/mempool.md",sourceDirName:"06mempool",slug:"/06mempool/mempool",permalink:"/docs/06mempool/mempool",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/06mempool/mempool.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"5.3 Block rewards",permalink:"/docs/05block-validation/block_rewards"},next:{title:"7.1 Networking",permalink:"/docs/07networking/networking"}},m={},p=[{value:"Validation",id:"validation",level:2},{value:"Fee Required for Inclusion",id:"fee-required-for-inclusion",level:2},{value:"Replace by Fee",id:"replace-by-fee",level:2},{value:"Block Creation",id:"block-creation",level:2},{value:"Updating the Mempool",id:"updating-the-mempool",level:2}],h={toc:p};function d(e){var t=e.components,o=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"61-mempool"},"6.1 Mempool"),(0,r.kt)("p",null,"The mempool (or memory pool) is a collection of transactions stored by full nodes, usually in memory, before they are confirmed on the blockchain. The mempool is not dictated by the consensus rules; a farmer can change how their mempool functions and customize the rules without permission from other full nodes."),(0,r.kt)("p",null,"The mempool is a required facet of Chia due to the decentralized nature of the blockchain. Transaction blocks occur approximately every 52 seconds, and it's impossible to predict who will win a block. Therefore, all transactions must be broadcast to the whole network and stored locally until they are confirmed. Additionally, it is normal to have more pending transactions than can fit in a single block, so the mempool also acts as a queue for inclusion into the blockchain."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'How many transactions can fit into a block? Due to the varying size of transactions, and the different definitions of what even counts as a "transaction," there is not an exact number. But just for a bit of rough guidance, approximately 1000 transactions with two inputs and two outputs, or 2000 transactions with one input and one output can fit into a single block.')),(0,r.kt)("p",null,"When a user makes a transaction, it gets sent to a full node, which then verifies it, adds it to the mempool, and broadcasts it to all of its peers. Therefore, transactions get propagated to the whole network in a very short period of time."),(0,r.kt)("h2",{id:"validation"},"Validation"),(0,r.kt)("p",null,"Only valid transactions are allowed to enter the mempool. The process of validating transactions is similar to the process of validating blocks. This includes running CLVM, checking conditions, validating signatures, and checking that the coins to be spent are currently unspent and valid."),(0,r.kt)("p",null,"The transaction is also checked against other transactions in the mempool, to ensure there are no conflicts."),(0,r.kt)("h2",{id:"fee-required-for-inclusion"},"Fee Required for Inclusion"),(0,r.kt)("p",null,"If the mempool is not full, all transactions regardless of fee are accepted into the mempool. The maximum mempool size can vary by version, and transactions have a large variance in size, but it is generally 10-100 blocks."),(0,r.kt)("p",null,"Transactions with 0 fee are accepted into the mempool as of chia-blockchain version 1.2.12. Fees that are very close to zero are considered equivalent to zero. The threshold is set at 5 mojo per cost, but this can vary by implementation, version, and settings, so it's not guaranteed by the protocol."),(0,r.kt)("p",null,"When the mempool gets full, nodes will start rejecting transactions that don't meet a minimum fee. The full node sorts the transactions by fee-per-cost, and kicks out the least valuable transactions first, when including new ones."),(0,r.kt)("h2",{id:"replace-by-fee"},"Replace by Fee"),(0,r.kt)("p",null,"A transaction can replace another transaction in the mempool if it spends at least the same coins as the original one."),(0,r.kt)("p",null,"For example, if the original transaction spent coins A and B, then another transaction that spends A, B, and C can replace it. However, a transaction that spends B and C cannot. This prevents denial-of-service (DOS) attacks, as well as censorship of transactions. There is also a minimum fee bump which might depend on mempool software being used. In ",(0,r.kt)("inlineCode",{parentName:"p"},"chia-blockchain"),", this is set to 5 fee-per-cost. This prevents spam replacement transactions."),(0,r.kt)("h2",{id:"block-creation"},"Block Creation"),(0,r.kt)("p",null,"When the farmer makes a block, they will select the highest fee-per-cost transactions from the mempool until they reach the maximum block size. These spend bundles are combined into one large spend bundle, which is guaranteed to be valid,\nsince all spend bundles in the mempool must spend disjointed coins."),(0,r.kt)("p",null,"Coin spends cannot impact other coin spends, which is a very nice property of UTXO systems, and allows parallelization of validation and block creation. The aggregate\nspend bundle also has one aggregate signature, which is a combination of every signature from every transaction in that block."),(0,r.kt)("p",null,'For performance reasons, the chia-blockchain codebase currently creates only smaller blocks (less than 50% of the maximum size) in order to keep the blockchain smaller and  easier to run. This "throttle" is likely to be removed in future versions, after additional optimizations have been performed.'),(0,r.kt)("h2",{id:"updating-the-mempool"},"Updating the Mempool"),(0,r.kt)("p",null,"After a new block is added to the blockchain, all full nodes must look at the coins that were spent in that new block, and remove them from the mempool. The full node does not need to re-apply every transaction again, since Chia coin spends are deterministic and sandboxed (see ",(0,r.kt)("a",{parentName:"p",href:"https://chialisp.com"},"chialisp.com")," for more info). The full node only needs to look at the spent coins in the new block, and if there are any transactions that spend one of those coins, they are removed from the mempool. This means the mempool can be very large, the codebase can be simple, and high performance can be achieved."))}d.isMDXComponent=!0}}]);