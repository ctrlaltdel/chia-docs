"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[6489],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>m});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),f=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=f(t.components);return r.createElement(d.Provider,{value:e},t.children)},c="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),c=f(a),u=n,m=c["".concat(d,".").concat(u)]||c[u]||p[u]||l;return a?r.createElement(m,i(i({ref:e},s),{},{components:a})):r.createElement(m,i({ref:e},s))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[c]="string"==typeof t?t:n,i[1]=o;for(var f=2;f<l;f++)i[f]=a[f];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5162:(t,e,a)=>{a.d(e,{Z:()=>i});var r=a(7294),n=a(6010);const l={tabItem:"tabItem_Ymn6"};function i(t){let{children:e,hidden:a,className:i}=t;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,i),hidden:a},e)}},4866:(t,e,a)=>{a.d(e,{Z:()=>y});var r=a(7462),n=a(7294),l=a(6010),i=a(2466),o=a(6550),d=a(1980),f=a(7392),s=a(12);function c(t){return function(t){return n.Children.map(t,(t=>{if((0,n.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(t).map((t=>{let{props:{value:e,label:a,attributes:r,default:n}}=t;return{value:e,label:a,attributes:r,default:n}}))}function p(t){const{values:e,children:a}=t;return(0,n.useMemo)((()=>{const t=e??c(a);return function(t){const e=(0,f.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,a])}function u(t){let{value:e,tabValues:a}=t;return a.some((t=>t.value===e))}function m(t){let{queryString:e=!1,groupId:a}=t;const r=(0,o.k6)(),l=function(t){let{queryString:e=!1,groupId:a}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,d._X)(l),(0,n.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(r.location.search);e.set(l,t),r.replace({...r.location,search:e.toString()})}),[l,r])]}function g(t){const{defaultValue:e,queryString:a=!1,groupId:r}=t,l=p(t),[i,o]=(0,n.useState)((()=>function(t){let{defaultValue:e,tabValues:a}=t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!u({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=a.find((t=>t.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:l}))),[d,f]=m({queryString:a,groupId:r}),[c,g]=function(t){let{groupId:e}=t;const a=function(t){return t?`docusaurus.tab.${t}`:null}(e),[r,l]=(0,s.Nk)(a);return[r,(0,n.useCallback)((t=>{a&&l.set(t)}),[a,l])]}({groupId:r}),k=(()=>{const t=d??c;return u({value:t,tabValues:l})?t:null})();(0,n.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,n.useCallback)((t=>{if(!u({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);o(t),f(t),g(t)}),[f,g,l]),tabValues:l}}var k=a(2389);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(t){let{className:e,block:a,selectedValue:o,selectValue:d,tabValues:f}=t;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),p=t=>{const e=t.currentTarget,a=s.indexOf(e),r=f[a].value;r!==o&&(c(e),d(r))},u=t=>{let e=null;switch(t.key){case"Enter":p(t);break;case"ArrowRight":{const a=s.indexOf(t.currentTarget)+1;e=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(t.currentTarget)-1;e=s[a]??s[s.length-1];break}}e?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},e)},f.map((t=>{let{value:e,label:a,attributes:i}=t;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===e?0:-1,"aria-selected":o===e,key:e,ref:t=>s.push(t),onKeyDown:u,onClick:p},i,{className:(0,l.Z)("tabs__item",N.tabItem,i?.className,{"tabs__item--active":o===e})}),a??e)})))}function b(t){let{lazy:e,children:a,selectedValue:r}=t;if(a=Array.isArray(a)?a:[a],e){const t=a.find((t=>t.props.value===r));return t?(0,n.cloneElement)(t,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((t,e)=>(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==r}))))}function w(t){const e=g(t);return n.createElement("div",{className:(0,l.Z)("tabs-container",N.tabList)},n.createElement(h,(0,r.Z)({},t,e)),n.createElement(b,(0,r.Z)({},t,e)))}function y(t){const e=(0,k.Z)();return n.createElement(w,(0,r.Z)({key:String(e)},t))}},3969:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>f});var r=a(7462),n=(a(7294),a(3905));a(4866),a(5162);const l={slug:"/walletconnect-developer-guide",title:"WalletConnect Developer Guide"},i=void 0,o={unversionedId:"guides/wallet_connect/walletconnect-developer-guide",id:"guides/wallet_connect/walletconnect-developer-guide",title:"WalletConnect Developer Guide",description:"Intro",source:"@site/docs/guides/wallet_connect/walletconnect-developer-guide.md",sourceDirName:"guides/wallet_connect",slug:"/walletconnect-developer-guide",permalink:"/walletconnect-developer-guide",draft:!1,editUrl:"https://github.com/Chia-Network/{{ REPOSITORY_NAME }}/blob/main/docs/guides/wallet_connect/walletconnect-developer-guide.md",tags:[],version:"current",frontMatter:{slug:"/walletconnect-developer-guide",title:"WalletConnect Developer Guide"},sidebar:"guides",previous:{title:"WalletConnect User Guide",permalink:"/walletconnect-user-guide"},next:{title:"DataLayer\u2122 User Guide",permalink:"/guides/datalayer-user-guide"}},d={},f=[{value:"Intro",id:"intro",level:2},{value:"RPC Calls",id:"rpc-calls",level:2}],s={toc:f},c="wrapper";function p(t){let{components:e,...a}=t;return(0,n.kt)(c,(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"intro"},"Intro"),(0,n.kt)("p",null,"This guide will help developers to create dApps on Chia's blockchain using ",(0,n.kt)("a",{parentName:"p",href:"https://walletconnect.com/"},"WalletConnect"),". It will be expanded upon as more tools are introduced."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"rpc-calls"},"RPC Calls"),(0,n.kt)("p",null,"The following table shows each RPC for Chia WalletConnect dApps, along with a description of what each RPC does, and a link to the equivalent Chia RPC:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"WalletConnect RPC"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Chia Wallet RPC"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"getTransaction"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/wallet-rpc#get_transaction"},"get_transaction")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Get a transaction's details from its ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"getWalletBalance"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/wallet-rpc#get_wallet_balance"},"get_wallet_balance")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Obtain the balance (and related info) from a wallet")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"getCATAssetId"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/wallet-rpc#cat_get_asset_id"},"cat_get_asset_id")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Retrieve a the asset ID from a CAT wallet")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"getNFTs"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/nft-rpc/#nft_get_nfts"},"nft_get_nfts")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Show all NFTs in a given wallet")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"getNFTInfo"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/nft-rpc/#nft_get_info"},"nft_get_info")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Get info about an NFT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"getNFTCount"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/nft-rpc/#nft_count_nfts"},"nft_count_nfts")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count the number of NFTs in a wallet")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LogIn"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/wallet-rpc#log_in"},"log_in")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Log into the wallet with the specified key")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SignMessageById"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/wallet-rpc#sign_message_by_id"},"sign_message_by_id")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sign a message using a DID or NFT ID without incurring an on-chain transaction")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SignMessageByAddress"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/wallet-rpc#sign_message_by_address"},"sign_message_by_address")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sign a message using an XCH address without incurring an on-chain transaction")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CreatNewCATWallet"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/wallet-rpc#create_new_wallet"},"create_new_wallet"),"*"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Create a new wallet for CATs (* for the Chia wallet RPC, you must specify a ",(0,n.kt)("inlineCode",{parentName:"td"},"wallet_type")," of ",(0,n.kt)("inlineCode",{parentName:"td"},"cat_wallet"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"addCattoken"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"VerifySignature"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"wallet-rpc#verify_signature"},"verify_signature")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Given a public key, message and signature, verify if it is valid")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"getAllOffers"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/wallet-rpc#get_all_offers"},"get_all_offers")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Show the details of all offers for this wallet")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"getOffersCount"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/wallet-rpc#get_offers_count"},"get_offers_count")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Obtain the number of offers from the current wallet")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"checkOfferValidity"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/wallet-rpc#check_offer_validity"},"check_offer_validity")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check if an offer is valid")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"getOfferSummary"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/wallet-rpc#get_offer_summary"},"get_offer_summary")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Show a summary of an offer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"getOfferData"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/wallet-rpc#get_offer"},"get_offer")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Show the details of one offer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"getOfferRecord"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/wallet-rpc#get_all_offers"},"get_all_offers")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Show the details of all offers for this wallet")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"transferNFT"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/nft-rpc#nft_transfer_nft"},"nft_transfer_nft")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Transfer an NFT to a new wallet address")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SendTransaction"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/wallet-rpc#send_transaction"},"send_transaction")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Send a transaction")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"waitForConfirmation"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CreateOfferForIDs"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/wallet-rpc#create_offer_for_ids"},"create_offer_for_ids")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Create a new offer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CancelOffer"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/wallet-rpc#cancel_offer"},"cancel_offer")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cancel an offer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CheckOfferValidity"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/wallet-rpc#check_offer_validity"},"check_offer_validity")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check if an offer is valid")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"takeOffer"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/wallet-rpc#take_offer"},"take_offer")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Take an offer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SpendCat"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/wallet-rpc#cat_spend"},"cat_spend")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Send CAT funds to another wallet")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"getWallets"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/wallet-rpc#get_wallets"},"get_wallets")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Show all wallets associated with the current fingerprint, including (by default) coin information")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"getCurrentAddress"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/wallet-rpc#get_next_address"},"get_next_address"),"*"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set ",(0,n.kt)("inlineCode",{parentName:"td"},"new_address")," to ",(0,n.kt)("inlineCode",{parentName:"td"},"false")," to use the current address")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"getNextAddress"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/wallet-rpc#get_next_address"},"get_next_address"),"*"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set ",(0,n.kt)("inlineCode",{parentName:"td"},"new_address")," to ",(0,n.kt)("inlineCode",{parentName:"td"},"true")," to create a new address")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"getSyncStatus"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/wallet-rpc#get_sync_status"},"get_sync_status")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Show whether the current wallet is syncing or synced")))))}p.isMDXComponent=!0}}]);