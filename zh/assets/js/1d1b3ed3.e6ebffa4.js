"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[5229],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},p="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),p=s(a),c=r,m=p["".concat(d,".").concat(c)]||p[c]||f[c]||l;return a?n.createElement(m,i(i({ref:e},u),{},{components:a})):n.createElement(m,i({ref:e},u))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[p]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function i(t){let{children:e,hidden:a,className:i}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},e)}},4866:(t,e,a)=>{a.d(e,{Z:()=>T});var n=a(7462),r=a(7294),l=a(6010),i=a(2466),o=a(6550),d=a(1980),s=a(7392),u=a(12);function p(t){return function(t){return r.Children.map(t,(t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:a,attributes:n,default:r}}=t;return{value:e,label:a,attributes:n,default:r}}))}function f(t){const{values:e,children:a}=t;return(0,r.useMemo)((()=>{const t=e??p(a);return function(t){const e=(0,s.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,a])}function c(t){let{value:e,tabValues:a}=t;return a.some((t=>t.value===e))}function m(t){let{queryString:e=!1,groupId:a}=t;const n=(0,o.k6)(),l=function(t){let{queryString:e=!1,groupId:a}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,d._X)(l),(0,r.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(n.location.search);e.set(l,t),n.replace({...n.location,search:e.toString()})}),[l,n])]}function g(t){const{defaultValue:e,queryString:a=!1,groupId:n}=t,l=f(t),[i,o]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:a}=t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!c({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=a.find((t=>t.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:l}))),[d,s]=m({queryString:a,groupId:n}),[p,g]=function(t){let{groupId:e}=t;const a=function(t){return t?`docusaurus.tab.${t}`:null}(e),[n,l]=(0,u.Nk)(a);return[n,(0,r.useCallback)((t=>{a&&l.set(t)}),[a,l])]}({groupId:n}),k=(()=>{const t=d??p;return c({value:t,tabValues:l})?t:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((t=>{if(!c({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);o(t),s(t),g(t)}),[s,g,l]),tabValues:l}}var k=a(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(t){let{className:e,block:a,selectedValue:o,selectValue:d,tabValues:s}=t;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),f=t=>{const e=t.currentTarget,a=u.indexOf(e),n=s[a].value;n!==o&&(p(e),d(n))},c=t=>{let e=null;switch(t.key){case"Enter":f(t);break;case"ArrowRight":{const a=u.indexOf(t.currentTarget)+1;e=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(t.currentTarget)-1;e=u[a]??u[u.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},e)},s.map((t=>{let{value:e,label:a,attributes:i}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===e?0:-1,"aria-selected":o===e,key:e,ref:t=>u.push(t),onKeyDown:c,onClick:f},i,{className:(0,l.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":o===e})}),a??e)})))}function b(t){let{lazy:e,children:a,selectedValue:n}=t;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(e){const t=l.find((t=>t.props.value===n));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function y(t){const e=g(t);return r.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},r.createElement(N,(0,n.Z)({},t,e)),r.createElement(b,(0,n.Z)({},t,e)))}function T(t){const e=(0,k.Z)();return r.createElement(y,(0,n.Z)({key:String(e)},t))}},9407:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));a(4866),a(5162);const l={sidebar_label:"CAT Admin",title:"CAT Admin CLI",slug:"/cat-admin-cli"},i=void 0,o={unversionedId:"cli-reference/cat-admin",id:"cli-reference/cat-admin",title:"CAT Admin CLI",description:"Intro",source:"@site/docs/cli-reference/cat-admin.md",sourceDirName:"cli-reference",slug:"/cat-admin-cli",permalink:"/zh/cat-admin-cli",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/cli-reference/cat-admin.md",tags:[],version:"current",frontMatter:{sidebar_label:"CAT Admin",title:"CAT Admin CLI",slug:"/cat-admin-cli"},sidebar:"tutorialSidebar",previous:{title:"Wallet",permalink:"/zh/wallet-rpc"},next:{title:"Overview",permalink:"/zh/cli"}},d={},s=[{value:"Intro",id:"intro",level:2},{value:"Reference",id:"reference",level:2},{value:"<code>cats</code>",id:"cats",level:3},{value:"<code>secure_the_bag</code>",id:"secure_the_bag",level:3},{value:"<code>unwind_the_bag</code>",id:"unwind_the_bag",level:3}],u={toc:s},p="wrapper";function f(t){let{components:e,...a}=t;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"This document is a reference guide for Chia's CAT Admin Tool, located in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/CAT-admin-tool"},"CAT-admin-tool")," repository."),(0,r.kt)("p",null,"To set up your environment (including installing this tool), follow our ",(0,r.kt)("a",{parentName:"p",href:"/guides/cat-creation-tutorial"},"CAT Creation Tutorial"),"."),(0,r.kt)("p",null,"If you want to use this tool to reissue CAT1, then follow our ",(0,r.kt)("a",{parentName:"p",href:"/guides/cat2-issuance"},"CAT2 Token Reissuance guide"),"."),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("h3",{id:"cats"},(0,r.kt)("inlineCode",{parentName:"h3"},"cats")),(0,r.kt)("p",null,"Functionality: Create and administer Chia Asset Tokens (CATs)"),(0,r.kt)("p",null,"Usage: cats ","[OPTIONS]"),(0,r.kt)("p",null,"Options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-l"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--tail"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The TAIL program to launch this CAT with")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-c"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--curry"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"An argument to curry into the TAIL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-s"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--solution"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The solution to the TAIL program ","[default: ()]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-t"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--send-to"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address these CATs will appear at once they are issued")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-a"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--amount"),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount to issue in mojos (regular XCH will be used to fund this)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-m"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--fee"),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The fees for the transaction, in mojos ","[default: 0]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--fingerprint"),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The wallet fingerprint to use as funds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-sig"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--signature"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A signature to aggregate with the transaction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-as"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--spend"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"An additional spend to aggregate with the transaction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--as-bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Output the spend bundle as a sequence of bytes instead of JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-sc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--select-coin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Stop the process once a coin from the wallet has been selected and return the coin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-q"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--quiet"),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Quiet mode will not ask to push transaction to the network")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-p"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--push"),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Automatically push transaction to the network in quiet mode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example 1 - select a coin from the wallet with a value of at least 1 XCH (1 trillion mojos)"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cats --tail ./reference_tails/genesis_by_coin_id.clsp.hex --send-to txch1jk4r06xsj0fnwqk57322yjqzkdyx7kh8h8kvxus3l68tjnkf05aqd9uevs --amount 1000000000000 --as-bytes --select-coin\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "amount": 1999731499999,\n    "parent_coin_info": "0x3179dd9b38f7c4e4de532e346cfefb33affda1f2860ed68aeb0e70c38a5c9f6e",\n    "puzzle_hash": "0x74fcdd0e27ead17559cf9eaf791c62a6517c0c4fcf5ac3a6f014857571fc7608"\n}\nName: 345dd430bcd7a413f8feed25c382d83855edd6ccceb41d1dbc293ca8e49e6b2d\n')),(0,r.kt)("p",null,'The "parent_coin_info", "puzzle_hash", and "amount" values are hashed together to create the coin\'s "Name".')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example 2 - Push a transaction to the network, currying an inner puzzle hash into the TAIL"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cats --tail ./reference_tails/genesis_by_coin_id.clsp.hex --send-to txch19k6cl5syzvxgkgulr7m49v2r57yh0aanm23hrffgd89j4nj3ywhqxadyqr --amount 1000000000000 --as-bytes --curry 0x8f4dbff8df3f6aa9303eb47625cf8f09d885f1ad6a2d440582cb6bd45f53d2e8\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"The transaction has been created, would you like to push it to the network? (Y/N)y\nSuccessfully pushed the transaction to the network\nAsset ID: 9c39398afb1d7ffa03a589f60e5e39f2ae4572ff7048e689fe3128c339581b2d\nEve Coin ID: 9fe3e95308949cb9c49333f829922dc7118cd3e2fdf365cde669b47852ce3a7b\n")),(0,r.kt)("p",null,"After pushing the transaction, the new ID and Eve Coin (singleton parent coin) will be shown.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"secure_the_bag"},(0,r.kt)("inlineCode",{parentName:"h3"},"secure_the_bag")),(0,r.kt)("p",null,"Functionality: Create a tree of coins from a .csv file contianing puzzlehash:amount pairs. Useful for setting up CAT airdrops."),(0,r.kt)("p",null,"Usage: secure_the_bag ","[OPTIONS]"),(0,r.kt)("p",null,"Options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-c"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--curry"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"An argument to curry into the TAIL"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-a"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--amount"),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount to issue in mojos (regular XCH will be used to fund this)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-stbtp"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--secure-the-bag-targets-path"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path to CSV file containing targets of secure the bag (inner puzzle hash + amount). The total value of the coins in this file must match the value of the ",(0,r.kt)("inlineCode",{parentName:"td"},"amount")," flag. If they don't match, an error will be thrown."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-lw"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--leaf-width"),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Secure the bag leaf width ","[default: 100]"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-pr"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--prefix"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Address prefix ","[default: xch]"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NONE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Create a coin tree from a CSV file, currying a coin ID that was obtained from the cats command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"secure_the_bag --tail .\\reference_tails\\genesis_by_coin_id.clsp.hex --amount 1000000000000 --secure-the-bag-targets-path C:\\Users\\User\\Downloads\\spacebucks.csv --prefix txch --curry 0x8f4dbff8df3f6aa9303eb47625cf8f09d885f1ad6a2d440582cb6bd45f53d2e8\n")),(0,r.kt)("p",null,"The response will be a list of coins created in the tree. The command's progress will also be displayed. The last two lines of the output will be the root puzzle hash and address of the tree:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"...\nSecure the bag root puzzle hash: 17060adf6856d2904c4fe90c9690b710cf758aee5968718e2fbfd12f7b9d817f\nSecure the bag root address: txch19k6cl5syzvxgkgulr7m49v2r57yh0aanm23hrffgd89j4nj3ywhqxadyqr\n"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"unwind_the_bag"},(0,r.kt)("inlineCode",{parentName:"h3"},"unwind_the_bag")),(0,r.kt)("p",null,"Functionality: Given a coin tree, airdrop CATs to a set of pre-committed puzzle hashes obtained from a .csv file. Requires a coin tree obtained as a result of running the ",(0,r.kt)("inlineCode",{parentName:"p"},"secure_the_bag")," command."),(0,r.kt)("p",null,"Usage: secure_the_bag ","[OPTIONS]"),(0,r.kt)("p",null,"Options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-ecid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--eve-coin-id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ID of coin that was spent to create secured bag")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-th"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--tail-hash"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TAIL hash / Asset ID of CAT to unwind from secured bag of CATs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-stbtp"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--secure-the-bag-targets-path"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path to CSV file containing targets of secure the bag (inner puzzle hash + amount)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-utph,"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--unwind-target-puzzle-hash"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Puzzle hash of target to unwind from secured bag. This is a useful option for testing a single unwind")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-wi"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--wallet-id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The wallet id to use (typically ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--fingerprint"),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The wallet fingerprint to use as funds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-uf"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--unwind-fee"),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fee paid for each unwind spend. Enough mojos must be available to cover all spends ","[default: 500000]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-lw"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--leaf-width"),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Secure the bag leaf width (number of tokens to unwind in one block) ","[default: 100]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NONE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Unwind a bag that has been secured with the above example, using a puzzle hash"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"unwind_the_bag --eve-coin-id 9fe3e95308949cb9c49333f829922dc7118cd3e2fdf365cde669b47852ce3a7b --tail-hash 9c39398afb1d7ffa03a589f60e5e39f2ae4572ff7048e689fe3128c339581b2d --secure-the-bag-targets-path C:\\Users\\User\\Downloads\\spacebucks.csv --unwind-fee 500000 --wallet-id 1 --unwind-target-puzzle-hash af85d83ff01ec4b6f37d85d038e68736adc6cc9bb2c48c9d0973605448f73f3f\n")),(0,r.kt)("p",null,"This example will airdrop the appropriate number of coins to the given puzzle hash. You will need to confirm each coin as it is dropped.")))}f.isMDXComponent=!0}}]);