"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[1164],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(o),f=a,m=p["".concat(l,".").concat(f)]||p[f]||h[f]||n;return o?r.createElement(m,i(i({ref:t},c),{},{components:o})):r.createElement(m,i({ref:t},c))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<n;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},3472:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var r=o(7462),a=(o(7294),o(3905));const n={title:"Proof of Time (VDFs)",sidebar_label:"Proof of Time",slug:"/proof-of-time"},i=void 0,s={unversionedId:"consensus/proof-of-time",id:"consensus/proof-of-time",title:"Proof of Time (VDFs)",description:"A Verifiable Delay Function, also referred to as a Proof of Time or VDF, is a proof that a sequential function was executed a certain number of times.",source:"@site/docs/consensus/proof-of-time.md",sourceDirName:"consensus",slug:"/proof-of-time",permalink:"/zh/proof-of-time",draft:!1,editUrl:"https://github.com/Chia-Network/{{ REPOSITORY_NAME }}/blob/main/docs/consensus/proof-of-time.md",tags:[],version:"current",frontMatter:{title:"Proof of Time (VDFs)",sidebar_label:"Proof of Time",slug:"/proof-of-time"},sidebar:"tutorialSidebar",previous:{title:"Proof of Space",permalink:"/zh/proof-of-space"},next:{title:"Challenges",permalink:"/zh/consensus-challenges"}},l={},u=[{value:"Infusion",id:"infusion",level:3}],c={toc:u},p="wrapper";function h(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A Verifiable Delay Function, also referred to as a Proof of Time or VDF, is a proof that a sequential function was executed a certain number of times."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Verifiable"),": This means that after performing the computation (which takes time), the Prover can create a very small proof in a very short time, and the Verifier can verify this proof without having to redo the whole computation."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Delay"),": This means that the Prover actually spent a real amount of time (although we don't know exactly how much) to compute the function."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Function"),": This means it's deterministic: computing a VDF on an input x ",(0,a.kt)("em",{parentName:"p"},"always")," yields the same result y."),(0,a.kt)("p",null,'The key word here is "sequential", like hashing a number many times: hash(hash(hash(a))), etc. This means the prover cannot just add more machines to make the function execute faster. Therefore we can assume that computing a VDF requires real (wall-clock) time. The construction that we use is repeated squaring. The Prover must square a challenge x T times. This requires time \u03f4(T). The Prover also must create a proof that this was performed properly.'),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/vdf.png",alt:"drawing"}),(0,a.kt)("figcaption",null,"Figure 3: The Verifier (blockchain) sends a challenge to the Prover (timelord) and the Prover computes the output and proof.")),(0,a.kt)("p",null,"Although the following details are not very important for understanding the consensus algorithm, the choice of what VDF to use is relevant, because if an attacker succeeds in obtaining a much faster machine, some ",(0,a.kt)("a",{parentName:"p",href:"/consensus-attacks"},"attacks")," become possible."),(0,a.kt)("p",null,"The VDF used by Chia is repeated squaring in a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/vdf-competition/blob/main/classgroups.pdf"},"class group of unknown order"),". There are two main ways to generate a large group that has an unknown order:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Use an RSA modulus, and use the integers mod N as a group. The order of the group is unknown if you can generate your modulus with many participating parties using an MPC ceremony."),(0,a.kt)("li",{parentName:"ol"},"An easier approach is to use classgroups with a large prime discriminant, which are groups of unknown order. This does not require any complex or trusted setup, so we chose this option for Chia.")),(0,a.kt)("p",null,"To create one of these groups, one just needs a large, random, prime number. The drawbacks are that classgroup code is less tested in real life, and optimizations are less well-known than in RSA groups. We use the same initial element for the squaring (a=2, b=1 classgroup element), and instead use the challenge to generate a new random prime number for each VDF, which is used as the discriminant. The discriminant has a size of 1024 bits, which means the proof sizes are around 1024 bits. We use the ",(0,a.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2018/623"},"Wesolowski scheme")," split into n (1<=n<=64) phases so that creating the proofs is very fast. Since the n-wesolowski proofs can be large, we replace them with 1-wesolowski proofs as soon as they are available. These are smaller, but require more time to make. The proofs themselves are not committed to on-chain, so they are replaceable."),(0,a.kt)("h3",{id:"infusion"},"Infusion"),(0,a.kt)("p",null,"As a recap, VDFs take in an input, called a ",(0,a.kt)("em",{parentName:"p"},"challenge"),", and produce an output, together with a proof that certifies that the function was evaluated correctly."),(0,a.kt)("p",null,"A ",(0,a.kt)("em",{parentName:"p"},"value"),", in this context, can be thought of as a block with a proof of space. The value is combined with an output of a VDF, to generate a new value, which is used as the input/challenge for the next VDF. This is known as an ",(0,a.kt)("em",{parentName:"p"},"infusion")," of a value into a VDF."),(0,a.kt)("p",null,"Therefore, we are chaining VDFs, but committing to a new value in between. This is used so that we have a linear progression of blocks, alternating proofs of space with proofs of time."))}h.isMDXComponent=!0}}]);