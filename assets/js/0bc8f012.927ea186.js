"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[4976],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"Plotting Basics",slug:"/plotting-basics"},i="Plotting Basics",l={unversionedId:"plotting/plotting-basics",id:"plotting/plotting-basics",title:"Plotting Basics",description:"The plotting process involves generating and storing unique cryptographic data, called plots, on a user's storage device. Plot files prove to the network that a user is storing data, and are used in the Chia consensus for Proof of Space and Time. Here's a high-level overview of the Chia plotting process",source:"@site/docs/plotting/plotting-basics.md",sourceDirName:"plotting",slug:"/plotting-basics",permalink:"/plotting-basics",draft:!1,editUrl:"https://github.com/Chia-Network/{{ REPOSITORY_NAME }}/blob/main/docs/plotting/plotting-basics.md",tags:[],version:"current",frontMatter:{title:"Plotting Basics",slug:"/plotting-basics"},sidebar:"tutorialSidebar",previous:{title:"Intro to Cryptocurrencies",permalink:"/cryptocurrency-intro"},next:{title:"Plotting Software",permalink:"/plotting-software"}},s={},p=[{value:"Requirements",id:"requirements",level:2},{value:"K value",id:"k-value",level:3},{value:"Keys",id:"keys",level:3},{value:"Hardware",id:"hardware",level:2},{value:"GUI Plotting",id:"gui-plotting",level:2},{value:"How to Get Help",id:"how-to-get-help",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"plotting-basics"},"Plotting Basics"),(0,r.kt)("p",null,"The plotting process involves generating and storing unique cryptographic data, called plots, on a user's storage device. Plot files prove to the network that a user is storing data, and are used in the Chia consensus for Proof of Space and Time. Here's a high-level overview of the Chia plotting process"),(0,r.kt)("p",null,"In practical terms, plotting is the initialization phase of Chia. The Chia plotting process is computationally intensive, but it must only be performed once per plot. During this process, the user's CPU, RAM, and storage devices (such as SSDs) are heavily utilized. However, once the plot is created and stored, the farming process is significantly less resource-intensive, with minimal impact on the user's hardware. Once a plot is created, farming only requires a small amount of disk io to check and submit proofs of space in response to network challenges."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("h3",{id:"k-value"},"K value"),(0,r.kt)("p",null,"The minimum K value for Chia is k=32 at 108.8GB. K=32 is the most common size on the network accounting for 98% of the Netspace. The sizes of uncompressed and compressed k values can be found ",(0,r.kt)("a",{parentName:"p",href:"/k-sizes"},"here")),(0,r.kt)("h3",{id:"keys"},"Keys"),(0,r.kt)("p",null,"To create plots a farmer must know their ",(0,r.kt)("strong",{parentName:"p"},"Farmer Public Key")," and either a ",(0,r.kt)("strong",{parentName:"p"},"Pool Public Key")," or ",(0,r.kt)("strong",{parentName:"p"},"Pool Contract Address"),". Most farmers will want the flexibility to solo farm or farm with a pool and will want to use a Pool Contract Address. A farmer must create a plotnft first to have a pool contract address."),(0,r.kt)("p",null,"These can be found with"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"chia keys show")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"chia plotnft show")),(0,r.kt)("h2",{id:"hardware"},"Hardware"),(0,r.kt)("p",null,"Plotting requires compute - the more compute, the faster the plot time. Chia farmers generally want to plot reasonably fast to get their storage space earning rewards faster. If you are using any of the disk methods, you will need an SSD with high endurance and sustained write performance, more details can be found in the endurance section."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Plotter Type"),(0,r.kt)("th",{parentName:"tr",align:null},"CPU"),(0,r.kt)("th",{parentName:"tr",align:null},"GPU"),(0,r.kt)("th",{parentName:"tr",align:null},"Temporary Storage"),(0,r.kt)("th",{parentName:"tr",align:null},"Memory"),(0,r.kt)("th",{parentName:"tr",align:null},"Plot times"),(0,r.kt)("th",{parentName:"tr",align:null},"Energy Efficiency"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GPU in-memory"),(0,r.kt)("td",{parentName:"tr",align:null},"low"),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"256GB"),(0,r.kt)("td",{parentName:"tr",align:null},"1-3 minutes"),(0,r.kt)("td",{parentName:"tr",align:null},"highest")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GPU / Disk plotting"),(0,r.kt)("td",{parentName:"tr",align:null},"low"),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"256GB"),(0,r.kt)("td",{parentName:"tr",align:null},"64-128GB"),(0,r.kt)("td",{parentName:"tr",align:null},"3-5 minutes"),(0,r.kt)("td",{parentName:"tr",align:null},"high")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CPU in-memory"),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"416GiB"),(0,r.kt)("td",{parentName:"tr",align:null},"2-5 minutes"),(0,r.kt)("td",{parentName:"tr",align:null},"high")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CPU disk"),(0,r.kt)("td",{parentName:"tr",align:null},"High"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"256-512GB"),(0,r.kt)("td",{parentName:"tr",align:null},"4GB"),(0,r.kt)("td",{parentName:"tr",align:null},"15-60 minutes"),(0,r.kt)("td",{parentName:"tr",align:null},"medium")))),(0,r.kt)("h2",{id:"gui-plotting"},"GUI Plotting"),(0,r.kt)("p",null,"Start the process by clicking the green button saying ",(0,r.kt)("strong",{parentName:"p"},"Add a Plot"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will choose a plotting software. Getting started plotting with Bladebit Disk is the easiest.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Starting size plot is k=32 (101 GiB)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Chose number of plots. If you're just learning, get started by creating just a single plot.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select a temporary directory. You need a temp storage location of at least 500GB. If you only have 256GB you can use madMAx chia-plotter. This is where the temp space is filled and a lot of writing will be done. For many plots it is not recommended to use the same SSD as your primary.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Input number of threads (recommended system threads - 1), bucket count (recommended 64), and optional amount of additional ram cache, and select the alternatating method"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Enterprise and data center SSDs offer higher endurnace and sustained write performance vs consumer drives, and can be found inexpensively second hand. Read more about recommendations at ",(0,r.kt)("a",{parentName:"p",href:"/ssd-endurance"},"SSD Endurance"),".")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Select a final directory. This is where the final plot file will be copied to. Once the plot is created it will go to this location to be farmed to earn XCH. Storage will fill quickly due to the size of plots. Storage can be internal or usb connected drives.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Network drives can work but could congest your local network or be too slow to respond for rewards (the max is 30 seconds, but under 5 is ideal). It is recommended that you set the first ",(0,r.kt)("inlineCode",{parentName:"p"},"log_level")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"INFO")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yaml")," which will allow you to see extra information in ",(0,r.kt)("inlineCode",{parentName:"p"},"debug.log"),".")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Join a pool - this will give you the option to select the plotnft you have already created.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"create")," to start process."))),(0,r.kt)("h2",{id:"how-to-get-help"},"How to Get Help"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Get support on the ",(0,r.kt)("a",{parentName:"p",href:"https://keybase.io/team/chia_network.public"},"Chia Keybase chat channels"),". ",(0,r.kt)("strong",{parentName:"p"},"#beginner")," and ",(0,r.kt)("strong",{parentName:"p"},"#support")," is where you can get help")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Get more questions answered in the ",(0,r.kt)("a",{parentName:"p",href:"/plotting-faq"},"plotting FAQ"),"."))))}m.isMDXComponent=!0}}]);