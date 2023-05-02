"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[6869],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),d=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=d(e.components);return a.createElement(l.Provider,{value:r},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),p=n,f=u["".concat(l,".").concat(p)]||u[p]||h[p]||o;return t?a.createElement(f,i(i({ref:r},c),{},{components:t})):a.createElement(f,i({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3289:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=t(7462),n=(t(7294),t(3905));const o={title:"Reference Farming Hardware",slug:"/reference-farming-hardware"},i="Reference Farming Hardware - Farming at Any Level",s={unversionedId:"farming/reference-farming-hardware",id:"farming/reference-farming-hardware",title:"Reference Farming Hardware",description:"Curious",source:"@site/docs/farming/reference-farming-hardware.md",sourceDirName:"farming",slug:"/reference-farming-hardware",permalink:"/zh/reference-farming-hardware",draft:!1,editUrl:"https://github.com/Chia-Network/{{ REPOSITORY_NAME }}/blob/main/docs/farming/reference-farming-hardware.md",tags:[],version:"current",frontMatter:{title:"Reference Farming Hardware",slug:"/reference-farming-hardware"},sidebar:"tutorialSidebar",previous:{title:"Checking Farm Health",permalink:"/zh/checking-farm-health"},next:{title:"Farming Considerations",permalink:"/zh/farming-considerations"}},l={},d=[{value:"Curious",id:"curious",level:2},{value:"Hobbyist",id:"hobbyist",level:2},{value:"NAS",id:"nas",level:3},{value:"External Storage (USB) for multiple drives",id:"external-storage-usb-for-multiple-drives",level:3},{value:"Desktops with high amount of drive count",id:"desktops-with-high-amount-of-drive-count",level:3},{value:"Pro",id:"pro",level:2},{value:"Serious",id:"serious",level:2}],c={toc:d},u="wrapper";function h(e){let{components:r,...t}=e;return(0,n.kt)(u,(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"reference-farming-hardware---farming-at-any-level"},"Reference Farming Hardware - Farming at Any Level"),(0,n.kt)("h2",{id:"curious"},"Curious"),(0,n.kt)("p",null,"The easiest way to get started in Chia is by attaching a USB hard drive to a desktop computer, or installing a SATA hard drive. The minimum amount of storage needed to farm is only a single plot! Beginners should start with a few drives to make it worth running the farm, and earn a few dollars per month. You can you use your desktop computer to create the plots (see plotting). There are companies like Evergreen that make it one step easier and remove the plotting step by offering a pre-plotted drive and a mobile app. Plotting is going to be the limiting factor for curious farmers because their desktop or laptop may not have enough compute and temporary SSD storage that is suitable for plotting, but filling up a single drive with plots is fairly easy even for beginners."),(0,n.kt)("img",{src:"https://www.chia.net/wp-content/uploads/2023/04/Hard-Drive-Standard.webp",width:"300"}),(0,n.kt)("h2",{id:"hobbyist"},"Hobbyist"),(0,n.kt)("p",null,"Once you get to a few hundred terabytes, think about a dedicated desktop computer for Chia farming, a NAS, or an external storage enclosure. A general rule of thumb is to look at the cost per slot (per drive) attached so you don\u2019t end up spending more money to store the disks than the disks themselves!"),(0,n.kt)("img",{src:"https://www.chia.net/wp-content/uploads/2023/04/nas-glass.jpg",width:"300"}),(0,n.kt)("h3",{id:"nas"},"NAS"),(0,n.kt)("p",null,"A NAS, or networked attached storage, is a device dedicated to having hard drives included in a backplane and a lightweight CPU and DRAM. NAS serves storage through the network (as opposed to DAS, or direct-attached storage). NAS have a high number of drives in small space, and are extremely power efficient. The only downside is they tend to be more expensive than raw enclosures since they are made for consumer storage and applications."),(0,n.kt)("h3",{id:"external-storage-usb-for-multiple-drives"},"External Storage (USB) for multiple drives"),(0,n.kt)("p",null,"External storage bays that use USB can attach 5-8 drives with a single USB cable, and have integrated power and cooling (fans). These are great for a hobbyist to expand with their current computer hardware."),(0,n.kt)("h3",{id:"desktops-with-high-amount-of-drive-count"},"Desktops with high amount of drive count"),(0,n.kt)("p",null,"A standard full tower desktop can hold 8-12 3.5in HDDs. These cases are user friendly for anyone who has built a standard desktop PC, and installing HDDs with SATA cables and ATX power supplies doesn\u2019t require a ton of specialized computer experience."),(0,n.kt)("h2",{id:"pro"},"Pro"),(0,n.kt)("p",null,"Pros are shooting for over a petabyte of storage, where more advanced tactics come into play. These can include GPU plotting, HBAs (host bus adapters), and used enterprise storage servers. Used enterprise storage gear is a great place to start, since servers with high drive count can be found inexpensively on eBay and other used markets. Older JBODs that house 24-45 drives can be found for a few hundred dollars used. While these are cost-effective, they do require the farmer to learn about enterprise storage protocols and infrastructure like SAS. Pros generally mix consumer and enterprise gear to be ruthlessly cost-efficient with their purchases."),(0,n.kt)("img",{src:"https://www.chia.net/wp-content/uploads/2023/04/desktop-farmer.webp?",width:"300"}),(0,n.kt)("h2",{id:"serious"},"Serious"),(0,n.kt)("p",null,'Serious Chia farmers that are going for multiple petabytes will start having to enter the world of server racks. Thankfully, data centers around the world have already engineered the best way to store an extremely large amount of storage in server racks. A serious farmer will be using JBODs. A JBOD, or "Just a bunch of disks" is a device dedicated to housing a large number of hard disk drives, and does not contain any integrated compute resources. A JBOD is typically made up of an enclosure, enclosure slots that identify each drive individually, a SAS expander and backplane, fans, and power supplies. All the disks in a JBOD can be accessed by a single SAS cable connected to a host server or desktop through a HBA (host bus adapter) which converts a PCIe slot to SAS. Serious farmers will put many of these JBODs in a rack to get extremely dense storage, which can achieve over 10 petabytes in a single rack using modern JBODs and high-capacity HDDs.'),(0,n.kt)("img",{src:"https://www.chia.net/wp-content/uploads/2023/04/Rack-Scael-Edit-2.webp",width:"300"}))}h.isMDXComponent=!0}}]);