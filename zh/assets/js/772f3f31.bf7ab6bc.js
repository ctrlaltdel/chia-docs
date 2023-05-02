"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[8576],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(r),f=o,d=h["".concat(l,".").concat(f)]||h[f]||u[f]||i;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2247:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={title:"Harvester Algorithm",slug:"/harvester-algorithm"},a=void 0,s={unversionedId:"consensus/harvester-algorithm",id:"consensus/harvester-algorithm",title:"Harvester Algorithm",description:"Approximately every 9.375 seconds, the full node sends a new signage point to the farmer, who sends it to each harvester.",source:"@site/docs/consensus/harvester-algorithm.md",sourceDirName:"consensus",slug:"/harvester-algorithm",permalink:"/zh/harvester-algorithm",draft:!1,editUrl:"https://github.com/Chia-Network/{{ REPOSITORY_NAME }}/blob/main/docs/consensus/harvester-algorithm.md",tags:[],version:"current",frontMatter:{title:"Harvester Algorithm",slug:"/harvester-algorithm"},sidebar:"tutorialSidebar",previous:{title:"Signage and Infusion Points",permalink:"/zh/signage-and-infusion-points"},next:{title:"Multiple Blocks",permalink:"/zh/consensus-multiple-blocks"}},l={},p=[],c={toc:p},h="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(h,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Approximately every 9.375 seconds, the full node sends a new signage point to the farmer, who sends it to each harvester."),(0,o.kt)("p",null,"The exact protocol message sent for each signage point is the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class PoolDifficulty:\n    difficulty: uint64\n    sub_slot_iters: uint64\n    pool_contract_puzzle_hash: bytes32\n\nclass NewSignagePointHarvester:\n    challenge_hash: bytes32\n    difficulty: uint64\n    sub_slot_iters: uint64\n    signage_point_index: uint8\n    sp_hash: bytes32\n    pool_difficulties: List[PoolDifficulty]\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The harvester receives a signage point, and computes the plot filter:")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"plot filter bits = sha256(plot_id + challenge_hash + sp_hash)"),"."),(0,o.kt)("p",null,"If the resulting bits start with 9 zeroes, then the plot passes the filter. This does not require disk access, since the plot_ids are stored in memory. 2. For each of the plots passing the filter, a new thread is started, which performs the quality lookups. Recall that this requires around 7-9 random reads into the plot, one for each table. This is where the majority of the disk activity will be. On average, 1 of every 512 plots will perform this step. 3. required_iterations is computed, as explained in the ",(0,o.kt)("a",{parentName:"p",href:"/signage-and-infusion-points"},"Signage and Infusion Points page"),". If the farmer is currently farming for a pool, then the pool will use custom values for both ",(0,o.kt)("inlineCode",{parentName:"p"},"difficulty")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"sub-slot_iterations"),". These values make it more likely that a proof will be found. The reason to use these values is to make it easier for the pool to determine the amount of storage a farmer currently has dedicated.\nIf required_iterations is less than the interval_iterations, this proof of space is good (it has won either a pool partial or a block). Most proofs will not pass this step. 5. For winning proofs, the whole proof is fetched on disk (approximately 64 random reads in the plot). 6. The proof is sent back to the farmer."))}u.isMDXComponent=!0}}]);