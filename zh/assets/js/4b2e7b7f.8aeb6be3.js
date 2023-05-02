"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[1603],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,u=d["".concat(c,".").concat(h)]||d[h]||m[h]||a;return n?o.createElement(u,i(i({ref:t},p),{},{components:n})):o.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={title:"Moving Plots",slug:"/moving-plots"},i=void 0,l={unversionedId:"plotting/moving-plots",id:"plotting/moving-plots",title:"Moving Plots",description:"Plots are stored in files. They can be moved from one directory to another, and even to another machine (the operating system doesn't matter). It may also be mounted from an external USB drive or over the network.",source:"@site/docs/plotting/moving-plots.md",sourceDirName:"plotting",slug:"/moving-plots",permalink:"/zh/moving-plots",draft:!1,editUrl:"https://github.com/Chia-Network/{{ REPOSITORY_NAME }}/blob/main/docs/plotting/moving-plots.md",tags:[],version:"current",frontMatter:{title:"Moving Plots",slug:"/moving-plots"},sidebar:"tutorialSidebar",previous:{title:"SSD Endurance",permalink:"/zh/ssd-endurance"},next:{title:"Plotting FAQ",permalink:"/zh/plotting-faq"}},c={},s=[{value:"New Directory",id:"new-directory",level:2},{value:"New Machine",id:"new-machine",level:2},{value:"Checking Plots",id:"checking-plots",level:2}],p={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Plots are stored in files. They can be moved from one directory to another, and even to another machine (the operating system doesn't matter). It may also be mounted from an external USB drive or over the network."),(0,r.kt)("h2",{id:"new-directory"},"New Directory"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To prevent the harvester seeing a large plot as incomplete while it is being moved, append ",(0,r.kt)("inlineCode",{parentName:"p"},"-mv")," to the file extension before moving the file. After it has been moved, rename it back to the original file extension.")),(0,r.kt)("p",null,"Once a plot is moved to a new directory, it will have to be added to the config."),(0,r.kt)("p",null,"If you are using the command line, run the following command to add the directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chia plots add -d '/path/to/directory'\n")),(0,r.kt)("p",null,"On the GUI, you can do this by going to the ",(0,r.kt)("strong",{parentName:"p"},"Farmer")," tab and clicking ",(0,r.kt)("strong",{parentName:"p"},"Add Plots"),". Select the new directory to add it."),(0,r.kt)("p",null,"After following these steps, and restarting your farmer, the new plots should be visible."),(0,r.kt)("h2",{id:"new-machine"},"New Machine"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This will not work unless the farmer on the new machine has access to the same keys.")),(0,r.kt)("p",null,"Once Chia is installed on the new machine, you will need to import the same keys used by the previous farmer."),(0,r.kt)("p",null,"If you are using the command line, run the following command to get the mnemonic phrase:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chia keys show --show-mnemonic-seed\n")),(0,r.kt)("p",null,"On the GUI, you can do this by logging out and clicking the options button on your wallet. Click ",(0,r.kt)("strong",{parentName:"p"},"Details")," and reveal the seed phrase."),(0,r.kt)("p",null,"Next, import the mnemonic phrase on the new machine through the GUI or by using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chia keys add 'mnemonic'\n")),(0,r.kt)("p",null,"Finally, you will need to move the plot file to the new machine and add the directory to the config."),(0,r.kt)("p",null,"If you are using the command line, run the following command to add the directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chia plots add -d '/path/to/directory'\n")),(0,r.kt)("p",null,"On the GUI, you can do this by going to the ",(0,r.kt)("strong",{parentName:"p"},"Farmer")," tab and clicking ",(0,r.kt)("strong",{parentName:"p"},"Add Plots"),". Select the new directory to add it."),(0,r.kt)("p",null,"After following these steps, and restarting your farmer, the new plots should be visible."),(0,r.kt)("h2",{id:"checking-plots"},"Checking Plots"),(0,r.kt)("p",null,"It's a good idea to periodically check plots to ensure that they are not corrupted."),(0,r.kt)("p",null,"You can check if they are working by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chia plots check\n")),(0,r.kt)("p",null,"This can also be done in the GUI by checking if the plots are visible in the list."))}m.isMDXComponent=!0}}]);