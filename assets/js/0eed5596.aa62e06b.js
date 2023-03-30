"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[2161],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(a),u=l,f=c["".concat(p,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(f,i(i({ref:t},s),{},{components:a})):n.createElement(f,i({ref:t},s))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(6010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),l=a(7294),r=a(6010),i=a(2466),o=a(6550),p=a(1980),d=a(7392),s=a(12);function c(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function m(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function u(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,p._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=m(e),[i,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[p,d]=f({queryString:a,groupId:n}),[c,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,s.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),g=(()=>{const e=p??c;return u({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!u({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),k(e)}),[d,k,r]),tabValues:r}}var g=a(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:t,block:a,selectedValue:o,selectValue:p,tabValues:d}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=s.indexOf(t),n=d[a].value;n!==o&&(c(t),p(n))},u=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;t=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;t=s[a]??s[s.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>s.push(e),onKeyDown:u,onClick:m},i,{className:(0,r.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=k(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",h.tabList)},l.createElement(N,(0,n.Z)({},e,t)),l.createElement(b,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return l.createElement(y,(0,n.Z)({key:String(t)},e))}},6392:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(7462),l=(a(7294),a(3905));a(4866),a(5162);const r={sidebar_label:"DIDs",title:"DID CLI",slug:"/did-cli"},i=void 0,o={unversionedId:"cli-reference/dids",id:"cli-reference/dids",title:"DID CLI",description:"Note about Windows command escaping",source:"@site/docs/cli-reference/dids.md",sourceDirName:"cli-reference",slug:"/did-cli",permalink:"/did-cli",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/cli-reference/dids.md",tags:[],version:"current",frontMatter:{sidebar_label:"DIDs",title:"DID CLI",slug:"/did-cli"},sidebar:"tutorialSidebar",previous:{title:"DataLayer",permalink:"/datalayer-cli"},next:{title:"NFTs",permalink:"/nft-cli"}},p={},d=[{value:"Reference",id:"reference",level:2},{value:"<code>create</code>",id:"create",level:3},{value:"<code>get_did</code>",id:"get_did",level:3},{value:"<code>set_name</code>",id:"set_name",level:3},{value:"<code>sign_message</code>",id:"sign_message",level:3}],s={toc:d},c="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(c,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Note about Windows command escaping"),(0,l.kt)("p",null,"This document will use Linux/MacOS RPC syntax. When running rpc commands on Windows, you'll need to escape all quotes with backslashes."),(0,l.kt)("p",null,"For example, here is a typical RPC command on Linux and MacOS:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'chia rpc wallet create_new_wallet \'{"wallet_type": "nft_wallet"}\'\n')),(0,l.kt)("p",null,"To run the same command on Windows, you need to escape the quotes, so it looks like this (the braces have been removed to support the formatting for this page. You still need to use them in your actual commands.):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'chia rpc wallet create_new_wallet \'\\"wallet_type\\": \\"nft_wallet\\"\'\n'))),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("h3",{id:"create"},(0,l.kt)("inlineCode",{parentName:"h3"},"create")),(0,l.kt)("p",null,"Functionality: Create a DID wallet"),(0,l.kt)("p",null,"Usage: chia wallet did create ","[OPTIONS]"),(0,l.kt)("p",null,"Options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-wp"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--wallet-rpc-port"),(0,l.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--fingerprint"),(0,l.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the fingerprint to specify which wallet to use")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-n"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--name"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the DID wallet name ","[default: None]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-a"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--amount"),(0,l.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the DID amount in mojos. Value must be an odd number. ","[default: 1]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-m"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--fee"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the fees per transaction, in XCH. ","[default: 0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-h"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,l.kt)("td",{parentName:"tr",align:"left"},"None"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example"),(0,l.kt)("p",null,"Create a new DID:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet did create -n My_DID\n")),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Successfully created a DID wallet with name My_DID and id 2 on key 4288332900\nSuccessfully created a DID did:chia:17jvhl9z8zj6jma2uxk4mqj22p90hfpf29svlvlyalu8ksyefsvpql7f403 in the newly created DID wallet\n")),(0,l.kt)("p",null,"View your wallet and DID:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet show\n")),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Wallet height: 1117451\nSync status: Synced\nBalances, fingerprint: 4288332900\n\nChia Wallet:\n   -Total Balance:         0.999989999992 txch (999989999992 mojo)\n   -Pending Total Balance: 0.999989999991 txch (999989999991 mojo)\n   -Spendable:             0.0 txch (0 mojo)\n   -Type:                  STANDARD_WALLET\n   -Wallet ID:             1\n\nMy_DID:\n   -Total Balance:         0.0\n   -Pending Total Balance: 1.0\n   -Spendable:             0.0\n   -Type:                  DECENTRALIZED_ID\n   -DID ID:                did:chia:17jvhl9z8zj6jma2uxk4mqj22p90hfpf29svlvlyalu8ksyefsvpql7f403\n   -Wallet ID:             2\n"))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"get_did"},(0,l.kt)("inlineCode",{parentName:"h3"},"get_did")),(0,l.kt)("p",null,"Functionality: Get the DID and Coin ID for a DID wallet"),(0,l.kt)("p",null,"Usage: chia wallet did get_did ","[OPTIONS]"),(0,l.kt)("p",null,"Options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-wp"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--wallet-rpc-port"),(0,l.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--fingerprint"),(0,l.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the fingerprint to specify which wallet to use")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-i"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:"left"},"True"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ID of the wallet to use")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-h"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,l.kt)("td",{parentName:"tr",align:"left"},"None"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example"),(0,l.kt)("p",null,"Get info for DID with ID 2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet did get_did -i 2\n")),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"DID:                    did:chia:17jvhl9z8zj6jma2uxk4mqj22p90hfpf29svlvlyalu8ksyefsvpql7f403\nCoin ID:                0xe6c28c30c7dd2801a4cbfdb0e61186315ae9695dde0a75a6901c1394c3300db8\n"))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"set_name"},(0,l.kt)("inlineCode",{parentName:"h3"},"set_name")),(0,l.kt)("p",null,"Functionality: Get the DID and Coin ID for a DID wallet"),(0,l.kt)("p",null,"Usage: chia wallet did get_did ","[OPTIONS]"),(0,l.kt)("p",null,"Options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-wp"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--wallet-rpc-port"),(0,l.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--fingerprint"),(0,l.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the fingerprint to specify which wallet to use")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-i"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:"left"},"True"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ID of the wallet to use")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-n"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--name"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"True"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the DID wallet name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-h"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,l.kt)("td",{parentName:"tr",align:"left"},"None"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example"),(0,l.kt)("p",null,"Set the name for Wallet ID 2 to ",(0,l.kt)("inlineCode",{parentName:"p"},"New Name"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'chia wallet did set_name -i 2 -n "New Name"\n')),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Successfully set a new name for DID wallet with id 2: New Name\n")),(0,l.kt)("p",null,"Confirm changes:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"chia wallet show\n")),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Wallet height: 1117563\nSync status: Synced\nBalances, fingerprint: 4288332900\n\nChia Wallet:\n   -Total Balance:         0.999989999991 txch (999989999991 mojo)\n   -Pending Total Balance: 0.999989999991 txch (999989999991 mojo)\n   -Spendable:             0.999989999991 txch (999989999991 mojo)\n   -Type:                  STANDARD_WALLET\n   -Wallet ID:             1\n\nNew Name:\n   -Total Balance:         1.0\n   -Pending Total Balance: 1.0\n   -Spendable:             1.0\n   -Type:                  DECENTRALIZED_ID\n   -DID ID:                did:chia:17jvhl9z8zj6jma2uxk4mqj22p90hfpf29svlvlyalu8ksyefsvpql7f403\n   -Wallet ID:             2\n\nConnections:\nType      IP                                     Ports       NodeID      Last Connect      MiB Up|Dwn\nFULL_NODE 127.0.0.1                              58444/58444 f40100b8... Jun 15 12:22:02      0.0|1.7\n                                                 -Height: No Info    -Hash: No Info    -Trusted: True\n"))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"sign_message"},(0,l.kt)("inlineCode",{parentName:"h3"},"sign_message")),(0,l.kt)("p",null,"Functionality: Sign a message using a specified DID ID. This command does not modify the blockchain."),(0,l.kt)("p",null,"Usage: chia wallet nft sign_message ","[OPTIONS]"),(0,l.kt)("p",null,"Options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-wp"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--wallet-rpc-port"),(0,l.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--fingerprint"),(0,l.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the fingerprint to specify which wallet to use")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-i"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--did_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"True"),(0,l.kt)("td",{parentName:"tr",align:"left"},"DID ID you want to use for signing")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-m"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--hex_message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"True"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The message you want to sign")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-h"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,l.kt)("td",{parentName:"tr",align:"left"},"None"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'chia wallet did sign_message -f 590161281 -i did:chia:1cxw5dqug4gavvgylx88zfkmqv235ryr6j9tvyjwwuga0pa52wjvqavdyar --hex_message "This is a test message."\n')),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Message: This is a test message.\nPublic Key: b478c6a0ef7410679831d616d06e9fca856f6e08b8a6f13f344cc9aa20981ab7fe287663584e2fc53e2ac14edab883ca\nSignature: 981ed9b983440c06ae5d9f2f2a0f45c0a00015939d30f512364f44597dc381007ee6911d9320d3c991d5a795823e429f06f35117b1e51c4c30454af19c69f2399e30bff5ea109bc5b95f869f48f2e32d0beccfcbbe72b384903536d3aeed848d\n"))))}m.isMDXComponent=!0}}]);