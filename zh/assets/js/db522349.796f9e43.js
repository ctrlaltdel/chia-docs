"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[5866],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const r={slug:"/guides/chialisp-using-modules",title:"2. Using Modules"},o=void 0,l={unversionedId:"guides/chialisp-primer/using-modules",id:"guides/chialisp-primer/using-modules",title:"2. Using Modules",description:"Up to this point, you have written single expressions and evaluated them on the command-line. However, sometimes you want to split your code into multiple functions or include common libraries. In order to do things like that, you will need to understand what modules are.",source:"@site/docs/guides/chialisp-primer/using-modules.md",sourceDirName:"guides/chialisp-primer",slug:"/guides/chialisp-using-modules",permalink:"/zh/guides/chialisp-using-modules",draft:!1,editUrl:"https://github.com/Chia-Network/{{ REPOSITORY_NAME }}/blob/main/docs/guides/chialisp-primer/using-modules.md",tags:[],version:"current",frontMatter:{slug:"/guides/chialisp-using-modules",title:"2. Using Modules"},sidebar:"guides",previous:{title:"1. Intro to Chialisp",permalink:"/zh/guides"},next:{title:"3. Testnet Setup",permalink:"/zh/guides/chialisp-testnet-setup"}},s={},u=[{value:"Modules",id:"modules",level:2},{value:"Example",id:"example",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Up to this point, you have written single expressions and evaluated them on the command-line. However, sometimes you want to split your code into multiple functions or include common libraries. In order to do things like that, you will need to understand what modules are."),(0,i.kt)("h2",{id:"modules"},"Modules"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"mod")," operator creates a context for converting the usage of constants into a single expression."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Functions inside the module will not have direct access to the ",(0,i.kt)("a",{parentName:"p",href:"https://chialisp.com/docs/glossary#solution"},"solution"),", so values you need access to will need to be passed in as a function parameter manually."),(0,i.kt)("p",{parentName:"admonition"},"In other words, there is no concept of ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Scope_(computer_science)"},"scope"),".")),(0,i.kt)("p",null,"This module will add two arbitrary values together:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"(mod (first second)\n    (+ first second)\n)\n")),(0,i.kt)("p",null,"And this is an example of defining a constant and a function, followed by their usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},";;; Raises the number by one order of magnitude.\n\n(mod (value)\n    ; Defines a constant value with a name.\n    (defconstant ORDER_OF_MAGNITUDE 10)\n\n    ; Defines a function that can be called with a value.\n    (defun raise_magnitude (value)\n        (* value ORDER_OF_MAGNITUDE)\n    )\n\n    ; Calls the previously defined function.\n    (raise_magnitude value)\n)\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The module takes in a ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," parameter."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"ORDER_OF_MAGNITUDE")," is defined as 10."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"raise_magnitude")," function takes in a ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," parameter (this is different from the ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," defined as a module parameter)."),(0,i.kt)("li",{parentName:"ol"},"Returns the ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," function parameter multiplied by the ",(0,i.kt)("inlineCode",{parentName:"li"},"ORDER_OF_MAGNITUDE"),"."),(0,i.kt)("li",{parentName:"ol"},"Calls the function with the module parameter ",(0,i.kt)("inlineCode",{parentName:"li"},"value"),".")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"By now you have seen how some aspects of the language work, and we can use these concepts to write and run a simple Chialisp program. We will write a module that calculates the factorial of a number using ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Recursion"},"recursion"),"."),(0,i.kt)("p",null,"Put this in a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"factorial.clsp"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp",metastring:'title="factorial.clsp"',title:'"factorial.clsp"'},";;; Calculates a factorial recursively.\n;;; f(n) = n * f(n - 1)\n;;; f(n) = n if n <= 2\n\n(mod (number)\n    ; Defines the factorial function.\n    (defun factorial (number)\n        (if (> number 1)\n            (* number (factorial (- number 1)))\n            1\n        )\n    )\n\n    ; Calls the function with the number provided.\n    (factorial number)\n)\n")),(0,i.kt)("p",null,"Run this example with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'brun "$(run factorial.clsp)" "(5)"\n')),(0,i.kt)("p",null,"It will compile it and run the result with a solution where ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," is 5. The result of this should be the factorial of that number, which is 120. There were a few new operators used in these examples. For more information, you should refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://chialisp.com/operators"},"operator reference"),". Below is a detailed explanation of how this works."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The module takes in a ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," parameter."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"factorial")," function also takes in a ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," parameter."),(0,i.kt)("li",{parentName:"ol"},"If the number is greater than 2, returns the number times the previous factorial."),(0,i.kt)("li",{parentName:"ol"},"Otherwise, returns the number itself."),(0,i.kt)("li",{parentName:"ol"},"Call the recursive function with the ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," module parameter.")),(0,i.kt)("p",null,"We can visualize this function with the input 5 as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"(factorial 5)\n(* 5 (factorial 4))\n(* 5 (* 4 (factorial 3)))\n(* 5 (* 4 (* 3 (factorial 2))))\n(* 5 (* 4 (* 3 (* 2 (factorial 1)))))\n(* 5 (* 4 (* 3 (* 2 1))))\n")),(0,i.kt)("p",null,"Which then simplifies like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"(* 5 (* 4 (* 3 2)))\n(* 5 (* 4 6))\n(* 5 24)\n120\n")),(0,i.kt)("p",null,"Everything that would normally be written using iteration in an imperative language, for example array modification, is instead written using recursion in Chialisp. It can be hard to understand at first, but eventually it will make more and more sense."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Modules allow you to use functional programming in Chialisp, which makes writing it feel more natural. It also allows you to reuse your code and express it in a more clear way."),(0,i.kt)("p",null,"If you have any questions about modules, or anything else, remember to come ask questions on our ",(0,i.kt)("a",{parentName:"p",href:"https://keybase.io/team/chia_network.public"},"Keybase team"),"."))}m.isMDXComponent=!0}}]);