"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[4265],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return p}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),h=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=h(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=h(a),p=o,m=u["".concat(s,".").concat(p)]||u[p]||d[p]||l;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var h=2;h<l;h++)r[h]=a[h];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2360:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294),o=a(6010),l="tabItem_OmH5";function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,r),hidden:a},t)}},3029:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7462),o=a(7294),l=a(2389),r=a(7392),i=a(7094),s=a(2466),h=a(6010),c="tabList_uSqn",d="tabItem_LplD";function u(e){var t,a,l,u=e.lazy,p=e.block,m=e.defaultValue,f=e.values,w=e.groupId,k=e.className,y=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,r.l)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(t=null!=m?m:null==(a=y.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=y[0])?void 0:l.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var C=(0,i.U)(),T=C.tabGroupChoices,A=C.setTabGroupChoices,I=(0,o.useState)(g),N=I[0],x=I[1],W=[],D=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=w){var O=T[w];null!=O&&O!==N&&b.some((function(e){return e.value===O}))&&x(O)}var H=function(e){var t=e.currentTarget,a=W.indexOf(t),n=b[a].value;n!==N&&(D(t),x(n),null!=w&&A(w,n))},E=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=W.indexOf(e.currentTarget)+1;a=W[n]||W[0];break;case"ArrowLeft":var o=W.indexOf(e.currentTarget)-1;a=W[o]||W[W.length-1]}null==(t=a)||t.focus()};return o.createElement("div",{className:(0,h.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,h.Z)("tabs",{"tabs--block":p},k)},b.map((function(e){var t=e.value,a=e.label,l=e.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return W.push(e)},onKeyDown:E,onFocus:H,onClick:H},l,{className:(0,h.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=a?a:t)}))),u?(0,o.cloneElement)(y.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function p(e){var t=(0,l.Z)();return o.createElement(u,(0,n.Z)({key:String(t)},e))}},5857:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return i},metadata:function(){return h},toc:function(){return d}});var n=a(7462),o=a(3366),l=(a(7294),a(3905)),r=(a(3029),a(2360),["components"]),i={id:"cat2-intro",title:"CAT2 Intro & FAQ",sidebar_label:"1. Intro & FAQ",sidebar_position:1},s=void 0,h={unversionedId:"cat2/cat2-intro",id:"cat2/cat2-intro",title:"CAT2 Intro & FAQ",description:"CAT1 will reach its end of life at block 2,311,760, which will occur on July 26, 2022 at around 17:00 UTC. This is the final block where CAT1 will be valid. At this block height, a snapshot will be taken of all CAT1 tokens, along with the addresses of where they are being held. CAT1 issuers will then be able to issue new CAT2 tokens and airdrop them to the same addresses where the CAT1 tokens were held.",source:"@site/docs/cat2/cat2-intro.mdx",sourceDirName:"cat2",slug:"/cat2/cat2-intro",permalink:"/docs/cat2/cat2-intro",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/cat2/cat2-intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"cat2-intro",title:"CAT2 Intro & FAQ",sidebar_label:"1. Intro & FAQ",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"2. Snapshot Generation",permalink:"/docs/cat2/cat2-snapshot"}},c={},d=[{value:"FAQ",id:"faq",level:2},{value:"General",id:"general",level:3},{value:"What is a CAT?",id:"what-is-a-cat",level:4},{value:"Why is this change happening with CATs?",id:"why-cat2",level:4},{value:"Does this change impact Chia Network&#39;s security?",id:"security-impact",level:4},{value:"When does the end of life of CAT1 happen?",id:"when-eol",level:4},{value:"How can I check my CAT1 balance at the time of the snapshot?",id:"check-snapshot",level:4},{value:"Does everyone have to upgrade?",id:"everyone-upgrade",level:4},{value:"Do I need to upgrade my harvesters?",id:"upgrade-harvesters",level:4},{value:"Are my NFTs or XCH at risk?",id:"nft-xch-risk",level:4},{value:"Is there any risk that I&#39;ll lose money or my balance will be incorrect during the transition? If so, what do I do?",id:"risk-lose-balance",level:4},{value:"Between the announcement and the end-of-life block height, what should I be doing as a user?",id:"what-to-do",level:4},{value:"How can I be sure that I&#39;ve canceled all my open offers?",id:"ensure-offers-canceled",level:4},{value:"I lost money by transacting, what do I do now?",id:"lost-money",level:4},{value:"Do I need to cancel my XCH-for-NFT offers?",id:"xch-nft-offers",level:4},{value:"How can I trust that all of my currency will be transferred appropriately?",id:"ensure-cats-transferred",level:4},{value:"What happens to my CAT1s?",id:"what-happens-cat1",level:4},{value:"How long will it take for me to get all my tokens airdropped to me?",id:"airdrop-how-long",level:4},{value:"What happens if I have a transaction with a CAT1 token after the block height snapshot?",id:"cat1-after-block-height",level:4},{value:"How can I trust that all of my currency will be transferred appropriately? Is there any risk that I&#39;ll lose money or my balance will be incorrect during the transition? If so, what do I do?",id:"cat1-transfer-correctly",level:4},{value:"CAT Issuers",id:"cat-issuers",level:3},{value:"I am the issuer of a CAT1 token. What should I do?",id:"cat1-issuer-what-do",level:4},{value:"Chia App",id:"chia-app",level:3},{value:"I upgraded to 1.5, but I don&#39;t see any of my tokens yet. Did I do something wrong?",id:"no-tokens-yet",level:4},{value:"The balance of my airdrop in my wallet doesn&#39;t match the balance that the website shows me, what should I do?",id:"balance-airdrop-match",level:4},{value:"I&#39;ve tried all the recommendations, but the reissuer didn&#39;t get my wallet balance correct. What should I do?",id:"no-reissuance",level:4},{value:"How do I cancel my open offers to exchange CATs?",id:"cancel-open-offers",level:4},{value:"After upgrading to 1.5, I&#39;ve lost all of my wallet transaction history. How do I access my previous transaction history with CATs or XCH?",id:"lost-transaction-history",level:4},{value:"How do I know when the updated tokens have been airdropped to my wallet?",id:"airdrop-know-when",level:4},{value:"Why doesn&#39;t the balance in my wallet match the balance reported on the website?",id:"balance-match-website",level:4},{value:"What is a \u201cDerivation Index\u201d?",id:"what-is-derivation-index",level:4},{value:"Why do I see multiple tokens with the same value in my 1.5 wallet?",id:"multiple-tokens-same-value",level:4},{value:"Who can I contact if I have any problems or questions?",id:"who-to-contact",level:4},{value:"CAT1 Balance Website",id:"cat1-balance-website",level:3},{value:"How do I find the pubkey to enter into the website?",id:"find-pubkey-for-website",level:4},{value:"I checked the website (cat1.chia.net) and I don&#39;t see any tokens for my wallet, but there should be. What can I do?",id:"no-tokens-on-website",level:4},{value:"The balance that the website is reporting doesn&#39;t match what I expect. What should I do?",id:"website-balance-doesnt-match",level:4},{value:"My CH21 balance is reported incorrectly on the website. What should I do?",id:"ch21-balance-incorrect",level:4},{value:"I am running 1.5 and when I view an offer, instead of the CAT token, I see XCH. What&#39;s going on?",id:"see-xch-instead-of-cat",level:4},{value:"Wallet Developers",id:"wallet-developers",level:3},{value:"I am developing a Chia wallet. What changes do I need to make to my code?",id:"wallet-changes-needed",level:4}],u={toc:d};function p(e){var t=e.components,a=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://chialisp.com/docs/puzzles/cats"},"CAT1")," will reach its end of life at block 2,311,760, which will occur on July 26, 2022 at around 17:00 UTC. This is the final block where CAT1 will be valid. At this block height, a snapshot will be taken of all CAT1 tokens, along with the addresses of where they are being held. CAT1 issuers will then be able to issue new CAT2 tokens and airdrop them to the same addresses where the CAT1 tokens were held."),(0,l.kt)("p",null,"Chia version 1.5.0 will be released on July 26, 2022. This version will not show any CAT1 tokens in the wallet. Users will only see the newly-issued CAT2 tokens, which will be identical in value to their CAT1 equivalents."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Are you a CAT issuer?")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Check out ",(0,l.kt)("a",{parentName:"p",href:"/docs/cat2/cat2-snapshot"},"the developer docs")," to get started with issuing your CAT2 tokens."))),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("h3",{id:"general"},"General"),(0,l.kt)("h4",{id:"what-is-a-cat"},"What is a CAT?"),(0,l.kt)("p",null,"A CAT is a Chia Asset Token. CATs are fungible tokens that are issued on the chia blockchain. The CAT1 standard was finalized in January 2022. The standard ",(0,l.kt)("a",{parentName:"p",href:"https://chialisp.com/docs/puzzles/cats/"},"can be found here"),". Some examples of CATs include Stably USD (USDS), Spacebucks (SBX), and Marmot (MRMT)."),(0,l.kt)("h4",{id:"why-cat2"},"Why is this change happening with CATs?"),(0,l.kt)("p",null,"The CAT standard was upgraded to CAT2 based on a security vulnerability found by an outside security audit. This resulted in an upgrade to the latest Chia wallet app as well as updates that will require all original issuers of CAT1 tokens to reissue their tokens on the CAT2 standard and end-of-life support for CAT1. Chia is working with community members to make this process as seamless as possible."),(0,l.kt)("h4",{id:"security-impact"},"Does this change impact Chia Network's security?"),(0,l.kt)("p",null,"No. There is no threat to the security of Chia Network technology or the Chia Blockchain. The update patched the vulnerability to CAT1. "),(0,l.kt)("h4",{id:"when-eol"},"When does the end of life of CAT1 happen?"),(0,l.kt)("p",null,"The end-of-life block height is ",(0,l.kt)("inlineCode",{parentName:"p"},"2,311,760")," which is on July 26, 2022 at approximately 17:00 UTC. This is when the snapshot is taken."),(0,l.kt)("h4",{id:"check-snapshot"},"How can I check my CAT1 balance at the time of the snapshot?"),(0,l.kt)("p",null,"Go to ",(0,l.kt)("a",{parentName:"p",href:"https://cat1.chia.net"},"cat1.chia.net")," and provide your pubkey to see the CAT balances that will be airdropped to you when they get re-issued."),(0,l.kt)("h4",{id:"everyone-upgrade"},"Does everyone have to upgrade?"),(0,l.kt)("p",null,"We recommend that all CAT (including USDS) holders upgrade to 1.5 as soon as is convenient. The CAT1s that are visible on 1.4 and earlier versions will no longer be supported after the end-of-life block (2,311,760). If you do not own any CATs (for example, if you are a farmer who does not exchange XCH for USDS or any other CAT), then you don't need to upgrade."),(0,l.kt)("h4",{id:"upgrade-harvesters"},"Do I need to upgrade my harvesters?"),(0,l.kt)("p",null,"This update only affects the wallet software, so you don't need to update your harvesters."),(0,l.kt)("h4",{id:"nft-xch-risk"},"Are my NFTs or XCH at risk?"),(0,l.kt)("p",null,"No. NFTs and XCH are not affected by the vulnerability, so no changes are required for them."),(0,l.kt)("h4",{id:"risk-lose-balance"},"Is there any risk that I'll lose money or my balance will be incorrect during the transition? If so, what do I do?"),(0,l.kt)("p",null,"If you have any CATs in your wallet, you will want to upgrade to 1.5 as soon as convenient and be sure not to transact with any CATs after the end-of-life block height (2,311,760) has been reached and until you have upgraded to 1.5. This will help ensure that the balance you are expecting is what will be airdropped to you when the CATs are reissued. The ",(0,l.kt)("a",{parentName:"p",href:"https://cat1.chia.net/"},"CAT1 website")," accurately reflects the CAT1 balance of your wallet as of the end-of-life announcement. It will not dynamically update, but we expect the reissuance process to take approximately a week to fully complete, so the CAT2 balance in your wallet may differ from the CAT1 website balance until the process is complete."),(0,l.kt)("h4",{id:"what-to-do"},"Between the announcement and the end-of-life block height, what should I be doing as a user?"),(0,l.kt)("p",null,"It is recommended that you:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Cancel any open CAT offers on-chain in your wallet"),(0,l.kt)("li",{parentName:"ol"},"Do not accept any CAT offers in your 1.4 or lower wallet"),(0,l.kt)("li",{parentName:"ol"},"Make note of your current CAT1 balances"),(0,l.kt)("li",{parentName:"ol"},"Upgrade to the latest Chia wallet app (1.5.0 or higher) when it becomes available")),(0,l.kt)("h4",{id:"ensure-offers-canceled"},"How can I be sure that I've canceled all my open offers?"),(0,l.kt)("p",null,"Most importantly, you will want to make sure there are no outstanding offers to trade your XCH for someone else's CATs. In addition to canceling the offers in your wallet, you can also send your total balance of XCH to yourself. Due to the Chia coinset model, this will ensure that all XCH coins will no longer be available should a rogue or forgotten offer be accepted."),(0,l.kt)("h4",{id:"lost-money"},"I lost money by transacting, what do I do now?"),(0,l.kt)("p",null,"Unfortunately, any CAT1 transactions that happen after the end of life block height won't be recoverable. For further confirmation, please contact our support team so they can help with checking when the transactions occurred and can help determine if the money is lost or not."),(0,l.kt)("h4",{id:"xch-nft-offers"},"Do I need to cancel my XCH-for-NFT offers?"),(0,l.kt)("p",null,"No. Only CAT1 tokens are affected. No changes are being made to NFTs. However, if you have an open CAT-for-NFT offer, then you should cancel it."),(0,l.kt)("h4",{id:"ensure-cats-transferred"},"How can I trust that all of my currency will be transferred appropriately?"),(0,l.kt)("p",null,"You can check your CAT1 balance as of the snapshot through our website using your public key.\nWe are providing tools and support to the community developers to help ensure that they can reissue the new CATs in a timely manner. All CAT reissuers will be going by token balances at the same end-of-life blockheight."),(0,l.kt)("h4",{id:"what-happens-cat1"},"What happens to my CAT1s?"),(0,l.kt)("p",null,"Your existing CAT1 tokens still exist on the blockchain, but they are no longer of use as everyone upgrades to CAT2. You will be airdropped CAT2 to replace your CAT1 based on your balance as of block height of 2,311,760. Once you upgrade to 1.5, you will no longer see any balances for your original CATs."),(0,l.kt)("h4",{id:"airdrop-how-long"},"How long will it take for me to get all my tokens airdropped to me?"),(0,l.kt)("p",null,"This will depend on when the original issuers re-issue their tokens based on the new CAT2 standard. We hope that it is soon after the CAT1 EOL date. It is recommended to follow social media or Discord for CAT projects so you can hear firsthand when to expect the airdrops."),(0,l.kt)("h4",{id:"cat1-after-block-height"},"What happens if I have a transaction with a CAT1 token after the block height snapshot?"),(0,l.kt)("p",null,"You will only be airdropped the balance of the tokens at the time the snapshot is taken. Any transactions that occur after the snapshot will not be accounted for in the airdrop provided to you."),(0,l.kt)("h4",{id:"cat1-transfer-correctly"},"How can I trust that all of my currency will be transferred appropriately? Is there any risk that I'll lose money or my balance will be incorrect during the transition? If so, what do I do?"),(0,l.kt)("p",null,"Your CAT1 tokens won't be transferred. Instead, you will be given an identical (in value) set of CAT2 tokens. The blockchain already contains a complete record of all coins in the coinset. We have developed a tool that will use the blockchain to calculate a complete snapshot of CAT1 tokens. This snapshot will be accurate as of CAT1's end-of-life block."),(0,l.kt)("p",null,"However, the CAT1 issuers do need to perform a complete airdrop of CAT2 tokens. If the airdrop is not completed, or even started, then there is a risk that you will not receive your upgraded CAT2 tokens. In this case, you should ask the issuer to make the upgrade."),(0,l.kt)("h3",{id:"cat-issuers"},"CAT Issuers"),(0,l.kt)("h4",{id:"cat1-issuer-what-do"},"I am the issuer of a CAT1 token. What should I do?"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/cat2/cat2-snapshot"},"Follow this document"),", which will guide you through the process of reissuing your token as a CAT2."),(0,l.kt)("h3",{id:"chia-app"},"Chia App"),(0,l.kt)("h4",{id:"no-tokens-yet"},"I upgraded to 1.5, but I don't see any of my tokens yet. Did I do something wrong?"),(0,l.kt)("p",null,"No, you didn't do anything wrong. The Chia Wallet app, as of 1.5, only shows you your XCH, and CAT2 balances. As not all CATs will be re-issued immediately, when your CAT2s show up in your wallet is dependent on when original issuers issue their updated CAT2s."),(0,l.kt)("h4",{id:"balance-airdrop-match"},"The balance of my airdrop in my wallet doesn't match the balance that the website shows me, what should I do?"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"First, please consult the ",(0,l.kt)("a",{parentName:"p",href:"https://cat1.chia.net"},"CAT1 balance website")," to view your historical CAT1 balances. We expect the full reissuance process to take approximately a week to complete.  ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"If your CAT2 balances in the 1.5.0 wallet do not match the CAT1 historical reference, then check what your wallet derivation index is at and compare it to the derivation index shown in the balance on the Tokens screen."),(0,l.kt)("img",{src:"/img/cat2/wallet-derivation-index.png",alt:"Derivation Index in the wallet"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"If the derivation index in your wallet is less than the highest derivation index found on the website, you will want to update the derivation index in the wallet. To do so, go to Settings -> Derivation index and type in the number that you get from the ",(0,l.kt)("a",{parentName:"p",href:"https://cat1.chia.net"},"cat1.chia.net")," website."),(0,l.kt)("img",{src:"/img/cat2/settings-derivation-index.png",alt:"Derivation Index in the settings"}))),(0,l.kt)("h4",{id:"no-reissuance"},"I've tried all the recommendations, but the reissuer didn't get my wallet balance correct. What should I do?"),(0,l.kt)("p",null,"After trying all the above steps and at least a week has passed since the announcement and your CAT2 airdropped balance still doesn't match, then we recommend reaching out directly to the reissuer of the relevant CAT1 token. "),(0,l.kt)("h4",{id:"cancel-open-offers"},"How do I cancel my open offers to exchange CATs?"),(0,l.kt)("p",null,"From the Chia Wallet GUI:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Go to the ",(0,l.kt)("em",{parentName:"li"},"Offers")," tab in the left hand navigation"),(0,l.kt)("li",{parentName:"ol"},"Find all Offers you created that show a status of ",(0,l.kt)("em",{parentName:"li"},"Pending Accept")),(0,l.kt)("li",{parentName:"ol"},"Click on the three dots under ",(0,l.kt)("em",{parentName:"li"},"Actions")),(0,l.kt)("li",{parentName:"ol"},"Click on ",(0,l.kt)("em",{parentName:"li"},"Cancel Offer")),(0,l.kt)("li",{parentName:"ol"},"Ensure the ",(0,l.kt)("em",{parentName:"li"},"Cancel on blockchain")," option is selected"),(0,l.kt)("li",{parentName:"ol"},"Enter a fee (optional, but recommended)"),(0,l.kt)("li",{parentName:"ol"},"Click on ",(0,l.kt)("em",{parentName:"li"},"Cancel Offer"))),(0,l.kt)("p",null,"From the Chia Wallet command line:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Run ",(0,l.kt)("inlineCode",{parentName:"li"},"chia wallet cancel_offer")," along with the parameters needed to cancel any open offers. Run ",(0,l.kt)("inlineCode",{parentName:"li"},"chia wallet cancel_offer -h")," to see the relevant help output.")),(0,l.kt)("h4",{id:"lost-transaction-history"},"After upgrading to 1.5, I've lost all of my wallet transaction history. How do I access my previous transaction history with CATs or XCH?"),(0,l.kt)("p",null,"After upgrading to 1.5, a new wallet database is created to preserve any previous copies of wallet DBs. You can install a previous version of the Chia wallet app, and that older client will look for your previous wallet db and display the transaction history for XCH, CATs, and NFTs that occurred in that wallet before upgrading to 1.5"),(0,l.kt)("h4",{id:"airdrop-know-when"},"How do I know when the updated tokens have been airdropped to my wallet?"),(0,l.kt)("p",null,"You should follow the projects for the tokens that you own so you can be notified when they have begun running the airdrops. You can also monitor your Chia wallet app, and look under the ",(0,l.kt)("em",{parentName:"p"},"\u201cManage token list\u201d")," to see if a new CAT2 has been airdropped to you."),(0,l.kt)("h4",{id:"balance-match-website"},"Why doesn't the balance in my wallet match the balance reported on the website?"),(0,l.kt)("p",null,"Get the ",(0,l.kt)("em",{parentName:"p"},"Derivation Index")," from the website and update the derivation index in the Chia wallet app. This will ensure the balance reported on the website matches up with the balance in your wallet."),(0,l.kt)("h4",{id:"what-is-derivation-index"},"What is a \u201cDerivation Index\u201d?"),(0,l.kt)("p",null,"The derivation index is a numeric value that is used to track how many wallet addresses have been used based on the most recent transaction. This helps establish a window for which wallet addresses to scan for on the blockchain to find all possible coins owned by a specific wallet."),(0,l.kt)("h4",{id:"multiple-tokens-same-value"},"Why do I see multiple tokens with the same value in my 1.5 wallet?"),(0,l.kt)("p",null,"It is possible that you have received multiple identical airdrops from different parties. Only one of them will be the real CAT2 token. To determine which one is real, click ",(0,l.kt)("em",{parentName:"p"},"\u201cMANAGE TOKEN LIST\u201d")," and click ",(0,l.kt)("em",{parentName:"p"},"\u201cSearch on Tail Database\u201d"),". Only the original CAT1 issuer will be allowed to register their CAT2 equivalent on Tail Database, so you should use it as the source of truth for naming your CAT2 tokens."),(0,l.kt)("h4",{id:"who-to-contact"},"Who can I contact if I have any problems or questions?"),(0,l.kt)("p",null,"The Chia Network Support Team is available to answer questions and provide assistance through this process in the official Support ",(0,l.kt)("a",{parentName:"p",href:"https://keybase.io/team/chia_network.public"},"Keybase channel"),"."),(0,l.kt)("h3",{id:"cat1-balance-website"},"CAT1 Balance Website"),(0,l.kt)("h4",{id:"find-pubkey-for-website"},"How do I find the pubkey to enter into the website?"),(0,l.kt)("p",null,"From the Chia Wallet GUI:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Go to the ",(0,l.kt)("em",{parentName:"p"},"\u201cSelect Key\u201d")," screen and click on ",(0,l.kt)("em",{parentName:"p"},"\u201cSee private key\u201d")),(0,l.kt)("img",{src:"/img/cat2/key-selection.png",alt:"Key selection screen"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Copy the ",(0,l.kt)("em",{parentName:"p"},"public key")," from the list of keys available"))),(0,l.kt)("p",null,"From the Chia Wallet command line:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Run ",(0,l.kt)("inlineCode",{parentName:"li"},"chia keys show")),(0,l.kt)("li",{parentName:"ol"},"Copy the ",(0,l.kt)("em",{parentName:"li"},"master public key")," from the list of keys available")),(0,l.kt)("h4",{id:"no-tokens-on-website"},"I checked the website (cat1.chia.net) and I don't see any tokens for my wallet, but there should be. What can I do?"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Confirm the pubkey you entered into the website is correct and had a CAT1 token balance, and is for an unhardened key"),(0,l.kt)("li",{parentName:"ol"},"Click on the ",(0,l.kt)("em",{parentName:"li"},"\u201cSearch next 1000\u201d")," to see if your balance has been updated")),(0,l.kt)("h4",{id:"website-balance-doesnt-match"},"The balance that the website is reporting doesn't match what I expect. What should I do?"),(0,l.kt)("p",null,"The website scans the first 1000 wallet receive addresses, and if the balance doesn't reflect what you expect, then you should hit the \u201csearch next 1000\u201d for the website to scan and update the balance found. We expect most users to get their correct balance from the initial search, but some users might need an expanded search."),(0,l.kt)("h4",{id:"ch21-balance-incorrect"},"My CH21 balance is reported incorrectly on the website. What should I do?"),(0,l.kt)("p",null,"CH21 tokens were issued to non-observer keys, so they won't show up in the website unless they've been transferred at some point using a wallet without forcing the non-observer key support. The CAT standard was released at the same time as support for observer keys, so generally most CATs and wallets will be supported by the website. Even if your CH21 tokens are not displayed on the website, a CAT2 version will still be airdropped into your 1.5 wallet."),(0,l.kt)("h4",{id:"see-xch-instead-of-cat"},"I am running 1.5 and when I view an offer, instead of the CAT token, I see XCH. What's going on?"),(0,l.kt)("p",null,"You are likely viewing an offer for a CAT1 which will be an invalid offer starting with version 1.5. The reason for this is because tail IDs for CAT1s are no longer recognized by the wallet."),(0,l.kt)("img",{src:"/img/cat2/offer-summary.png",alt:"Offer summary screen"}),(0,l.kt)("h3",{id:"wallet-developers"},"Wallet Developers"),(0,l.kt)("h4",{id:"wallet-changes-needed"},"I am developing a Chia wallet. What changes do I need to make to my code?"),(0,l.kt)("p",null,"CAT2 inner puzzles do not enforce prepended announcements. If you preprend a coin announcement with ",(0,l.kt)("inlineCode",{parentName:"p"},"0xca")," (which was a requirement for CAT1), then the announcement will fail with ",(0,l.kt)("inlineCode",{parentName:"p"},"ANNOUNCE_CONSUMED_FAILED"),". Instead, do not prepend inner puzzle announcements with anything."),(0,l.kt)("p",null,"Note that announcements coming from the CAT layer still need to be prepended with ",(0,l.kt)("inlineCode",{parentName:"p"},"0xcb"),". This has not changed in CAT2."))}p.isMDXComponent=!0}}]);