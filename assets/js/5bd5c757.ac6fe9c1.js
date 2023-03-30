"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[7616],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(a),s=l,f=m["".concat(p,".").concat(s)]||m[s]||k[s]||r;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},3262:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(7462),l=(a(7294),a(3905));const r={slug:"/clawback_cli",title:"Clawback"},i=void 0,o={unversionedId:"cli-reference/clawback",id:"cli-reference/clawback",title:"Clawback",description:"Intro",source:"@site/docs/cli-reference/clawback.md",sourceDirName:"cli-reference",slug:"/clawback_cli",permalink:"/clawback_cli",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/cli-reference/clawback.md",tags:[],version:"current",frontMatter:{slug:"/clawback_cli",title:"Clawback"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/cli"},next:{title:"Custody Tool",permalink:"/custody-tool"}},p={},c=[{value:"Intro",id:"intro",level:2},{value:"Reference",id:"reference",level:2},{value:"<code>clawback</code>",id:"clawback",level:2},{value:"<code>claim</code>",id:"claim",level:3},{value:"<code>claw</code>",id:"claw",level:3},{value:"<code>create</code>",id:"create",level:3},{value:"<code>show</code>",id:"show",level:3}],d={toc:c},m="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"intro"},"Intro"),(0,l.kt)("p",null,"This page includes a comprehensive list of Chia's Command Line Interface commands for using the clawback primitive."),(0,l.kt)("p",null,"For more info, see the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/guides/clawback-primitive-guide"},"Clawback primitive guide")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=_pC38ulU2js"},"Youtube video explaining clawback"))),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("h2",{id:"clawback"},(0,l.kt)("inlineCode",{parentName:"h2"},"clawback")),(0,l.kt)("p",null,"Functionality: Get info about the ",(0,l.kt)("inlineCode",{parentName:"p"},"clawback")," command"),(0,l.kt)("p",null,"Usage: ",(0,l.kt)("inlineCode",{parentName:"p"},"clawback [OPTIONS] COMMAND [ARGS]")),(0,l.kt)("p",null,"Options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"--version"),(0,l.kt)("td",{parentName:"tr",align:"left"},"None"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show the version and exit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-h"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,l.kt)("td",{parentName:"tr",align:"left"},"None"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,l.kt)("p",null,"Commands:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"claim"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Claim a clawback coin after the timelock has passed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"claw"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Clawback an unclaimed coin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"create"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Send xch to a clawback coin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"show"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show details of all clawback coins")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"claim"},(0,l.kt)("inlineCode",{parentName:"h3"},"claim")),(0,l.kt)("p",null,"Functionality: Claim a clawback coin after the timelock has passed"),(0,l.kt)("p",null,"Usage: ",(0,l.kt)("inlineCode",{parentName:"p"},"clawback claim [OPTIONS]")),(0,l.kt)("p",null,"Options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-c"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--coin-id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"True"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The coin ID you want to claim")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-m"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--fee"),(0,l.kt)("td",{parentName:"tr",align:"left"},"FLOAT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The fee in XCH for this transaction")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-w"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--wallet-id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The wallet id for fees. If no target address given the clawback will go to this wallet id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-t"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--target-address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The address you want to send the coin to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-np"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--node-rpc-port"),(0,l.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the port where the Node is hosting the RPC interface")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--fingerprint"),(0,l.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the fingerprint to specify which wallet to use")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-wp"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--wallet-rpc-port"),(0,l.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-db"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--db-path"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the path for the database")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-h"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,l.kt)("td",{parentName:"tr",align:"left"},"None"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"In most cases, if the output of the ",(0,l.kt)("inlineCode",{parentName:"p"},"clawback show")," command contains ",(0,l.kt)("inlineCode",{parentName:"p"},"Time left: 0 seconds"),", this indicates that the Recipient can proceed with the ",(0,l.kt)("inlineCode",{parentName:"p"},"claim")," call."),(0,l.kt)("p",{parentName:"admonition"},"However, there is a small window of time where the timer has expired, but a block still hasn't been farmed with a timestamp after the expiry. If the Recipient attempts to make the ",(0,l.kt)("inlineCode",{parentName:"p"},"claim")," call during this window, they will receive the following error:"),(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"You are trying to claim the coin too early")),(0,l.kt)("p",{parentName:"admonition"},"In this case, the Recipient needs to wait for one more block to be farmed before proceeding with the ",(0,l.kt)("inlineCode",{parentName:"p"},"claim")," call. As a reminder, a new block is farmed every 18.75 seconds, on average.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example"),(0,l.kt)("p",null,"First, the Sender creates a new clawback coin with a 60-second timelock:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"clawback create -t txch1czxl4c42kwem8jllm4xp78jt7t0j0pu9uh9xw5jddegcu703xnpsqaaxxx -a 0.1 -l 60 -m 0.000275\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Created Coin with ID: ef4b69e65e99261d6e30c8d2d331a8ed84995f3452b95aaa944f76a0f9af74c5\nCoin { parent_coin_info: f5e408a15299df27a00d0403ea50ed29a06f87a31b638cff1b63ef3e6060b45a, puzzle_hash: 2e91566d9549cb909109d147c79b457d15ced2d8a24dea5a125b1e5c05cdd1ec, amount: 100000000000 }\n")),(0,l.kt)("p",null,"The Sender can run the ",(0,l.kt)("inlineCode",{parentName:"p"},"clawback show")," command to show the details of each of their clawback coins:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"clawback show\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Updating coin records...\n\n\nCoin ID: ef4b69e65e99261d6e30c8d2d331a8ed84995f3452b95aaa944f76a0f9af74c5\nAmount: 0.1 XCH (100000000000 mojos)\nTimelock: 60 seconds\nTime left: 23 seconds\n")),(0,l.kt)("p",null,"The timelock expires when the ",(0,l.kt)("inlineCode",{parentName:"p"},"Time left:")," value reaches ",(0,l.kt)("inlineCode",{parentName:"p"},"0 seconds"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"clawback show\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Updating coin records...\n\n\nCoin ID: ef4b69e65e99261d6e30c8d2d331a8ed84995f3452b95aaa944f76a0f9af74c5\nAmount: 0.1 XCH (100000000000 mojos)\nTimelock: 60 seconds\nTime left: 0 seconds\n")),(0,l.kt)("p",null,"For your reference, the Recipient wallet currently has a balance of 0 XCH:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet show -f 1231588123\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Wallet height: 2405060\nSync status: Synced\nBalances, fingerprint: 1231588123\n\nChia Wallet:\n   -Total Balance:         0.0 txch (0 mojo)\n   -Pending Total Balance: 0.0 txch (0 mojo)\n   -Spendable:             0.0 txch (0 mojo)\n   -Type:                  STANDARD_WALLET\n   -Wallet ID:             1\n")),(0,l.kt)("p",null,"The Recipient (or anyone else) can view the status of the clawback coin if they know the coin ID:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"clawback show -c ef4b69e65e99261d6e30c8d2d331a8ed84995f3452b95aaa944f76a0f9af74c5\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Updating coin records...\n\n\nCoin ID: ef4b69e65e99261d6e30c8d2d331a8ed84995f3452b95aaa944f76a0f9af74c5\nAmount: 0.1 XCH (100000000000 mojos)\nTimelock: 60 seconds\nTime left: 0 seconds\n")),(0,l.kt)("p",null,"The value of ",(0,l.kt)("inlineCode",{parentName:"p"},"Time left:")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"0 seconds"),", which indicates that the Recipient can now run the ",(0,l.kt)("inlineCode",{parentName:"p"},"clawback claim")," command to claim the coin:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"clawback claim -c ef4b69e65e99261d6e30c8d2d331a8ed84995f3452b95aaa944f76a0f9af74c5\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Submitted spend to claim coin: ef4b69e65e99261d6e30c8d2d331a8ed84995f3452b95aaa944f76a0f9af74c5\n")),(0,l.kt)("p",null,"While the ",(0,l.kt)("inlineCode",{parentName:"p"},"claim")," transaction is being processed, it will show in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Pending Total Balance:")," of the Recipient's wallet:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet show -f 1231588123\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Wallet height: 2405100\nSync status: Synced\nBalances, fingerprint: 1231588123\n\nChia Wallet:\n   -Total Balance:         0.0 txch (0 mojo)\n   -Pending Total Balance: 0.1 txch (100000000000 mojo)\n   -Spendable:             0.0 txch (0 mojo)\n   -Type:                  STANDARD_WALLET\n   -Wallet ID:             1\n")),(0,l.kt)("p",null,"Finally, the Recipient can view the additional balance in their wallet:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet show -f 1231588123\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Wallet height: 2405465\nSync status: Synced\nBalances, fingerprint: 1231588123\n\nChia Wallet:\n   -Total Balance:         0.1 txch (100000000000 mojo)\n   -Pending Total Balance: 0.1 txch (100000000000 mojo)\n   -Spendable:             0.1 txch (100000000000 mojo)\n   -Type:                  STANDARD_WALLET\n   -Wallet ID:             1\n")),(0,l.kt)("p",null,"The spend is now complete and can no longer be clawed back. The funds are stored as a standard Chia coin in the Recipient's wallet.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"claw"},(0,l.kt)("inlineCode",{parentName:"h3"},"claw")),(0,l.kt)("p",null,"Functionality: "),(0,l.kt)("p",null,"Usage: ",(0,l.kt)("inlineCode",{parentName:"p"},"clawback claw [OPTIONS]")),(0,l.kt)("p",null,"Options: Clawback an unclaimed coin"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-c"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--coin-id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"True"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The coin ID you want to claw back")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-m"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--fee"),(0,l.kt)("td",{parentName:"tr",align:"left"},"FLOAT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The fee in XCH for this transaction")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-w"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--wallet-id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The wallet id for fees. If no target address given the clawback will go to this wallet id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-t"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--target-address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The address you want to sent the clawed back coin to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-np"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--node-rpc-port"),(0,l.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the port where the Node is hosting the RPC interface")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--fingerprint"),(0,l.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the fingerprint to specify which wallet to use")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-wp"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--wallet-rpc-port"),(0,l.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-db"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--db-path"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the path for the database")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-h"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,l.kt)("td",{parentName:"tr",align:"left"},"None"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example"),(0,l.kt)("p",null,"Let's say the following clawback coin exists:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"clawback show\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Updating coin records...\n\n\nCoin ID: 29056b320b380c0fc4834578ca30318ae9c1d1cddbe39a91197870c4dc474532\nAmount: 0.1 XCH (100000000000 mojos)\nTimelock: 600 seconds\nTime left: 518 seconds\n")),(0,l.kt)("p",null,"The same public/private key pair that created this coin must be used to claw it back."),(0,l.kt)("p",null,"The Sender will use the clawback claw command, passing in the ID of the coin to claw back:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"clawback claw -c 29056b320b380c0fc4834578ca30318ae9c1d1cddbe39a91197870c4dc474532 -m 0.000275\n")),(0,l.kt)("p",null,"As a result, the clawback coin will be spent, and a new coin will be created in the Sender's wallet:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Submitted spend to claw back coin: 29056b320b380c0fc4834578ca30318ae9c1d1cddbe39a91197870c4dc474532\n")),(0,l.kt)("p",null,"To show the status of the clawback, run the ",(0,l.kt)("inlineCode",{parentName:"p"},"clawback show")," command once again:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"clawback show\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Updating coin records...\nNo coins found\n"))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"create"},(0,l.kt)("inlineCode",{parentName:"h3"},"create")),(0,l.kt)("p",null,"Functionality: Make a transaction to create a clawback coin"),(0,l.kt)("p",null,"Usage: ",(0,l.kt)("inlineCode",{parentName:"p"},"clawback create [OPTIONS]")),(0,l.kt)("p",null,"Options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-t"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--to"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"True"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The recipient's address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-l"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--timelock"),(0,l.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The timelock to use for the clawback coin you're creating, in seconds. Default is two weeks")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-a"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--amount"),(0,l.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:"left"},"True"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The amount to fund (in XCH)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-w"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--wallet-id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The wallet id to send from")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-m"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--fee"),(0,l.kt)("td",{parentName:"tr",align:"left"},"FLOAT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The fee in XCH for the funding transaction")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-np"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--node-rpc-port"),(0,l.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the port where the Node is hosting the RPC interface")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--fingerprint"),(0,l.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the fingerprint to specify which wallet to use")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-wp"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--wallet-rpc-port"),(0,l.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-db"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--db-path"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the path for the database")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-h"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,l.kt)("td",{parentName:"tr",align:"left"},"None"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example"),(0,l.kt)("p",null,"For this example, we will use two wallets: a Sender and a Recipient. The Sender has a balance of 10 TXCH and the Recipient has 0 TXCH."),(0,l.kt)("p",null,"For your reference, here is the Sender wallet's info:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet show -f 3807629793\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Wallet height: 2391281\nSync status: Synced\nBalances, fingerprint: 3807629793\n\nChia Wallet:\n   -Total Balance:         8.0 txch (8000000000000 mojo)\n   -Pending Total Balance: 8.0 txch (8000000000000 mojo)\n   -Spendable:             8.0 txch (8000000000000 mojo)\n   -Type:                  STANDARD_WALLET\n   -Wallet ID:             1\n")),(0,l.kt)("p",null,"To create the clawback coin from the Sender's wallet, run the ",(0,l.kt)("inlineCode",{parentName:"p"},"clawback create")," command. The ",(0,l.kt)("inlineCode",{parentName:"p"},"-t")," (Recipient's address) and ",(0,l.kt)("inlineCode",{parentName:"p"},"-a")," (amount in XCH/TXCH) flags are required. By default, the clawback coin will be locked for two weeks. For this example, we will override the default by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"-t")," flag to specify a timelock period of 600 seconds. We will also use the ",(0,l.kt)("inlineCode",{parentName:"p"},"-m")," flag to include a fee of 0.000275 TXCH."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The testnet is constantly being dusted (filled with small transactions) in order to simulate a busy network. Because of this you are always recommended to include a fee with testnet transactions. The 275-million mojo fee from this demo should be sufficient to push your transactions through in the next transaction block."),(0,l.kt)("p",{parentName:"admonition"},"If you are running on mainnet, a fee of 275 million mojos is likely higher than the recommended amount. The reference wallet GUI will suggest an appropriate fee to be included with all transactions.")),(0,l.kt)("p",null,"The Sender will run the following command in this example (these are only example settings; replace the values as needed):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"clawback create -t txch1czxl4c42kwem8jllm4xp78jt7t0j0pu9uh9xw5jddegcu703xnpsqaaxxx -a 0.1 -l 600 -m 0.000275\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Created Coin with ID: 29056b320b380c0fc4834578ca30318ae9c1d1cddbe39a91197870c4dc474532\nCoin { parent_coin_info: dcedd4d573679302ee3f2a54fb51c437b8156e8cd5b1c3c08d25cadf83292c3d, puzzle_hash: 13cb7ce11775a5b42754fb382eb94c846e4be677e6d55bf665b23c075a54e930, amount: 100000000000 }\n")),(0,l.kt)("p",null,"As a result of running this command, a new clawback coin has been created on the blockchain, the details of which are shown above. To view this coin, along with other clawback coins created by this wallet, run the ",(0,l.kt)("inlineCode",{parentName:"p"},"clawback show")," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"clawback show\n")),(0,l.kt)("p",null,"The basic details of the clawback coin are given:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"clawback show\nUpdating coin records...\n\n\nCoin ID: 29056b320b380c0fc4834578ca30318ae9c1d1cddbe39a91197870c4dc474532\nAmount: 0.1 XCH (100000000000 mojos)\nTimelock: 600 seconds\nTime left: 518 seconds\n"))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"show"},(0,l.kt)("inlineCode",{parentName:"h3"},"show")),(0,l.kt)("p",null,"Functionality: Get details for all clawback coins"),(0,l.kt)("p",null,"Usage: ",(0,l.kt)("inlineCode",{parentName:"p"},"clawback show [OPTIONS]")),(0,l.kt)("p",null,"Options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-c"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--coin-id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The coin ID you want to claw back")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-np"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--node-rpc-port"),(0,l.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the port where the Node is hosting the RPC interface")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--fingerprint"),(0,l.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the fingerprint to specify which wallet to use")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-wp"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--wallet-rpc-port"),(0,l.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-db"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--db-path"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the path for the database")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"-h"),(0,l.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,l.kt)("td",{parentName:"tr",align:"left"},"None"),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example 1"),(0,l.kt)("p",null,"The Sender can show a Clawback coin without passing in the Coin ID:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"clawback show\n")),(0,l.kt)("p",null,"The basic details of the clawback coin are given:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"clawback show\nUpdating coin records...\n\n\nCoin ID: 29056b320b380c0fc4834578ca30318ae9c1d1cddbe39a91197870c4dc474532\nAmount: 0.1 XCH (100000000000 mojos)\nTimelock: 600 seconds\nTime left: 518 seconds\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example 2"),(0,l.kt)("p",null,"Anyone other than the sender needs to pass in the Coin ID in order to show a Clawback coin:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"clawback show -c ef4b69e65e99261d6e30c8d2d331a8ed84995f3452b95aaa944f76a0f9af74c5\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Updating coin records...\n\n\nCoin ID: ef4b69e65e99261d6e30c8d2d331a8ed84995f3452b95aaa944f76a0f9af74c5\nAmount: 0.1 XCH (100000000000 mojos)\nTimelock: 60 seconds\nTime left: 0 seconds\n"))))}k.isMDXComponent=!0}}]);