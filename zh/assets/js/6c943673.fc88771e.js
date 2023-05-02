"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[6338],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>h});var n=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=p(a),m=i,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(h,l(l({ref:e},d),{},{components:a})):n.createElement(h,l({ref:e},d))}));function h(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[c]="string"==typeof t?t:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5516:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={title:"Plotting Software",slug:"/plotting-software"},l=void 0,o={unversionedId:"plotting/plotting-software",id:"plotting/plotting-software",title:"Plotting Software",description:"Software",source:"@site/docs/plotting/plotting-software.md",sourceDirName:"plotting",slug:"/plotting-software",permalink:"/zh/plotting-software",draft:!1,editUrl:"https://github.com/Chia-Network/{{ REPOSITORY_NAME }}/blob/main/docs/plotting/plotting-software.md",tags:[],version:"current",frontMatter:{title:"Plotting Software",slug:"/plotting-software"},sidebar:"tutorialSidebar",previous:{title:"Plotting Basics",permalink:"/zh/plotting-basics"},next:{title:"K Sizes",permalink:"/zh/k-sizes"}},s={},p=[{value:"Software",id:"software",level:2},{value:"Bladebit cudaplot",id:"bladebit-cudaplot",level:3},{value:"Bladebit diskplot",id:"bladebit-diskplot",level:3},{value:"Bladebit ramplot",id:"bladebit-ramplot",level:3},{value:"Additional 3rd party plotters",id:"additional-3rd-party-plotters",level:3},{value:"How to use in Chia",id:"how-to-use-in-chia",level:2},{value:"Installation",id:"installation",level:2}],d={toc:p},c="wrapper";function u(t){let{components:e,...a}=t;return(0,i.kt)(c,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"software"},"Software"),(0,i.kt)("p",null,"We are introducing the ability to choose alternative plotters when creating plots both in the Chia GUI and the CLI."),(0,i.kt)("p",null,"Chia develops the Bladebit suite of plotters, which includes Bladebit cudaplot, ramplot, and diskplot. The reference implementation from mainnet launch is Chiapos, which isn\u2019t used anymore but still exists for reference."),(0,i.kt)("h3",{id:"bladebit-cudaplot"},"Bladebit cudaplot"),(0,i.kt)("p",null,"Status: alpha"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://downloads.chia.net/bladebit"},"https://downloads.chia.net/bladebit")," "),(0,i.kt)("p",null,"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"OS: Windows and Linux"),(0,i.kt)("li",{parentName:"ul"},"Memory: 256GB of DRAM"),(0,i.kt)("li",{parentName:"ul"},"GPUs: CUDA capability 5.2 (NVIDIA 10 series GPU or higher) with 8GB of GPU VRAM")),(0,i.kt)("p",null,"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"bladebit_cuda -f <farmer key> -c <contract address> -n 1 cudaplot /mnt/ssd")),(0,i.kt)("h3",{id:"bladebit-diskplot"},"Bladebit ",(0,i.kt)("a",{parentName:"h3",href:"https://www.chia.net/2022/08/08/announcing-bladebit-2-0/"},"diskplot")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Still uses temporary storage to create plots, accessible to the majority of farmers"),(0,i.kt)("li",{parentName:"ul"},"Very low minimum memory requirements (2-4G) for low resource plotting in embedded or entry-level systems"),(0,i.kt)("li",{parentName:"ul"},"Cross-platform and OS compatibility"),(0,i.kt)("li",{parentName:"ul"},"Sequential writes can better take advantage of SSD burst performance and reduce SSD wear by reducing write amplification factor."),(0,i.kt)("li",{parentName:"ul"},"Can use DRAM write cache to significantly reduce SSD writes and can take advantage of any extra increments (no minimum required)"),(0,i.kt)("li",{parentName:"ul"},"Takes full advantage of increased disk bandwidth from PCIe 4.0"),(0,i.kt)("li",{parentName:"ul"},"Pipelined performance to max out CPU")),(0,i.kt)("p",null,"Usage"),(0,i.kt)("p",null,"Example with temporary SSD mounted to /mnt/ssd1 and destination drive as /mnt/ssd2, and using 100GB of DRAM cache to reduce temporary disk writes\n",(0,i.kt)("inlineCode",{parentName:"p"},"bladebit -t <system threads - 1> -f <farmer key> -c <contract address> -n 1 diskplot -t1 /mnt/ssd1/ -b 64 --cache 100G -a /mnt/ssd2")),(0,i.kt)("h3",{id:"bladebit-ramplot"},"Bladebit ramplot"),(0,i.kt)("p",null,"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"bladebit -t <system threads - 1> -f <farmer key> -c <contract address> -n 1 ramplot /mnt/ssd")),(0,i.kt)("h3",{id:"additional-3rd-party-plotters"},"Additional 3rd party plotters"),(0,i.kt)("p",null,"You can find additional 3rd party plotters on a list at ",(0,i.kt)("a",{parentName:"p",href:"https://xch.farm/plotting/"},"https://xch.farm/plotting/")," such as madMAx Gigahorse and chia-plotter."),(0,i.kt)("h2",{id:"how-to-use-in-chia"},"How to use in Chia"),(0,i.kt)("p",null,"There is a new ",(0,i.kt)("inlineCode",{parentName:"p"},"chia")," command for creating plots called ",(0,i.kt)("inlineCode",{parentName:"p"},"plotters"),". For compatibility, the original command for creating plots ",(0,i.kt)("inlineCode",{parentName:"p"},"chia plots create")," remains in place, however, this will always use the reference chiapos plotter. In order to use the other plotters, you must use the new ",(0,i.kt)("inlineCode",{parentName:"p"},"chia plotters")," command. Command line options differ with each plotter, so be sure to check the available options using ",(0,i.kt)("inlineCode",{parentName:"p"},"chia plotters <plotter> -h"),'. Available plotter values include "chiapos", "bladebit", and "madmax".'),(0,i.kt)("p",null,"The UI also has new functionality to support selecting a plotter."),(0,i.kt)("p",null,"Note: Not all features are available for every plotter."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"The bladebit and madMAx plotters will come packaged together with the installers on each platform. Using the install package (deb, rpm, dmg, exe) is the easiest way to get properly configured for using Chia with the alternative plotters. This is the supported method for installing and using Chia with the alternative plotters."),(0,i.kt)("p",null,"When running Chia by cloning the chia-blockchain git repository, it's possible to have the Chia CLI build and install BladeBit and madmax plotters from source. To install a plotter, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"chia plotters install <plotter>")," command, where ",(0,i.kt)("inlineCode",{parentName:"p"},"<plotter>"),' is either "bladebit" or "madmax". Chia will attempt to configure and build the specified plotter, but variations in OS environments may yield build failures. When using the ',(0,i.kt)("inlineCode",{parentName:"p"},"chia plotters install")," command, the source and built plotters will reside in the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.chia/mainnet/plotters")," directory on macOS and Linux, or the ",(0,i.kt)("inlineCode",{parentName:"p"},"%HOMEDRIVE%%HOMEPATH%\\.chia\\mainnet\\plotters")," directory on Windows."))}u.isMDXComponent=!0}}]);