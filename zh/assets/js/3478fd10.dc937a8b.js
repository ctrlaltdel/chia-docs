"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[9227],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>f});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),r=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):d(d({},a),e)),t},c=function(e){var a=r(e.components);return n.createElement(s.Provider,{value:a},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=r(t),u=l,f=p["".concat(s,".").concat(u)]||p[u]||h[u]||i;return t?n.createElement(f,d(d({ref:a},c),{},{components:t})):n.createElement(f,d({ref:a},c))}));function f(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=t.length,d=new Array(i);d[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[p]="string"==typeof e?e:l,d[1]=o;for(var r=2;r<i;r++)d[r]=t[r];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9937:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>r});var n=t(7462),l=(t(7294),t(3905));const i={slug:"/guides/nft-cli",title:"Minting NFTs With CLI"},d=void 0,o={unversionedId:"guides/nft/nft-cli",id:"guides/nft/nft-cli",title:"Minting NFTs With CLI",description:"The next section of this tutorial will demonstrate how to create and use DIDs and NFTs on the CLI. If you wish to use RPCs instead, you can skip ahead to the RPC version.",source:"@site/docs/guides/nft/nft-cli.md",sourceDirName:"guides/nft",slug:"/guides/nft-cli",permalink:"/zh/guides/nft-cli",draft:!1,editUrl:"https://github.com/Chia-Network/{{ REPOSITORY_NAME }}/blob/main/docs/guides/nft/nft-cli.md",tags:[],version:"current",frontMatter:{slug:"/guides/nft-cli",title:"Minting NFTs With CLI"},sidebar:"guides",previous:{title:"NFT Introduction",permalink:"/zh/guides/nft-intro"},next:{title:"Minting NFTs With RPC",permalink:"/zh/guides/nft-rpc"}},s={},r=[{value:"Create a DID Wallet",id:"create-a-did-wallet",level:2},{value:"Create an NFT Wallet",id:"create-an-nft-wallet",level:2},{value:"Mint an NFT (With DID)",id:"mint-an-nft-with-did",level:2},{value:"List Your NFTs",id:"list-your-nfts",level:2},{value:"Add a URI to Your NFTs",id:"add-a-uri-to-your-nfts",level:2},{value:"Set the DID for an NFT",id:"set-the-did-for-an-nft",level:2},{value:"Transfer Your NFTs",id:"transfer-your-nfts",level:2},{value:"Mainnet Usage",id:"mainnet-usage",level:2}],c={toc:r},p="wrapper";function h(e){let{components:a,...t}=e;return(0,l.kt)(p,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The next section of this tutorial will demonstrate how to create and use DIDs and NFTs on the CLI. If you wish to use RPCs instead, you can skip ahead to the ",(0,l.kt)("a",{parentName:"p",href:"/guides/nft-rpc"},"RPC version"),"."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"It is very important that you replace any DID, id, name, or other value in the following commands with your own."),(0,l.kt)("p",{parentName:"admonition"},"This is just an example, we do not know the specific values your commands will need in order to work."),(0,l.kt)("p",{parentName:"admonition"},"Also, make sure to use a wallet fingerprint that has enough XCH to pay for transaction fees.")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"It is important that you format your NFTs' metadata properly, as this cannot be changed after minting."),(0,l.kt)("p",{parentName:"admonition"},"See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chips/blob/main/assets/chip-0007/schema.json"},"CHIP-7")," for the first (and so far only) standardized JSON metadata schema for Chia NFTs. Usage of this CHIP is recommended in order to give marketplaces the best opportunity to parse your NFTs' metadata properly."),(0,l.kt)("p",{parentName:"admonition"},"Note that additional NFT metadata CHIPs are likely to be released in the future. However, there are no plans to deprecate CHIP-7 when this happens.")),(0,l.kt)("h2",{id:"create-a-did-wallet"},"Create a DID Wallet"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"You are recommended to associate all NFTs with DIDs. This helps to establish the NFT's provenance, among other benefits. This guide will only discuss how to create NFTs in the recommended way, with DIDs.")),(0,l.kt)("p",null,"In this section, we'll create a new DID. Later we'll create an NFT wallet that is associated with the new DID."),(0,l.kt)("p",null,"To create a new DID using Chia's CLI:"),(0,l.kt)("p",null,"Run these commands to create a DID wallet with a custom name and 1 mojo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'chia wallet did create -n "Test DID" -a 1 -m 0.00001\n')),(0,l.kt)("p",null,"That should produce an output similar to this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Successfully created a DID wallet with name Test DID and id 2 on key 2527948602\nSuccessfully created a DID did:chia:13p5fdxgm8e2pngdwp8m088t0etp7rgzx9ye2ju8v5ackcyg7t9nqx2um83 in the newly created DID wallet\n")),(0,l.kt)("p",null,"It will take a few minutes for your new wallet to be confirmed on the blockchain. Once the new wallet shows up, take note of the ",(0,l.kt)("inlineCode",{parentName:"p"},"Wallet ID"),", which is ",(0,l.kt)("inlineCode",{parentName:"p"},"2")," in this example."),(0,l.kt)("p",null,"Run the following command to see if it's there yet:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet show\n")),(0,l.kt)("p",null,"That should produce an output similar to this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Wallet height: 1141612\nSync status: Synced\nBalances, fingerprint: 2527948602\n\nChia Wallet:\n   -Total Balance:         1.00005999999 txch (1000059999990 mojo)\n   -Pending Total Balance: 1.00005999999 txch (1000059999990 mojo)\n   -Spendable:             1.00005999999 txch (1000059999990 mojo)\n   -Type:                  STANDARD_WALLET\n   -Wallet ID:             1\n\nTest DID:\n   -Total Balance:         1.0\n   -Pending Total Balance: 1.0\n   -Spendable:             1.0\n   -Type:                  DECENTRALIZED_ID\n   -DID ID:                did:chia:13p5fdxgm8e2pngdwp8m088t0etp7rgzx9ye2ju8v5ackcyg7t9nqx2um83\n   -Wallet ID:             2\n")),(0,l.kt)("h2",{id:"create-an-nft-wallet"},"Create an NFT Wallet"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Each NFT wallet can be anchored to a DID. Likewise, each DID can contain a single NFT wallet.")),(0,l.kt)("p",null,"Create an NFT wallet that is associated with the DID you already created:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'chia wallet nft create -di did:chia:13p5fdxgm8e2pngdwp8m088t0etp7rgzx9ye2ju8v5ackcyg7t9nqx2um83 -n "DID-Linked NFT Wallet"\n')),(0,l.kt)("p",null,"That should produce an output similar to this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Successfully created an NFT wallet with id 4 on key 2527948602\n")),(0,l.kt)("p",null,"It will take a few minutes for your new wallet to be confirmed on the blockchain. Once the new wallet shows up, take note of the ",(0,l.kt)("inlineCode",{parentName:"p"},"Wallet ID")," (",(0,l.kt)("inlineCode",{parentName:"p"},"4")," in this example)."),(0,l.kt)("p",null,"Run the following command to see if the wallet is there yet:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet show\n")),(0,l.kt)("p",null,"That should produce an output similar to this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Wallet height: 1141703\nSync status: Synced\nBalances, fingerprint: 2527948602\n\nChia Wallet:\n   -Total Balance:         1.00005999999 txch (1000059999990 mojo)\n   -Pending Total Balance: 1.00005999999 txch (1000059999990 mojo)\n   -Spendable:             1.00005999999 txch (1000059999990 mojo)\n   -Type:                  STANDARD_WALLET\n   -Wallet ID:             1\n\nTest DID:\n   -Total Balance:         1.0\n   -Pending Total Balance: 1.0\n   -Spendable:             1.0\n   -Type:                  DECENTRALIZED_ID\n   -DID ID:                did:chia:13p5fdxgm8e2pngdwp8m088t0etp7rgzx9ye2ju8v5ackcyg7t9nqx2um83\n   -Wallet ID:             2\n\nDID-Linked NFT Wallet:\n   -Total Balance:         0.0\n   -Pending Total Balance: 0.0\n   -Spendable:             0.0\n   -Type:                  NFT\n   -DID ID:                did:chia:13p5fdxgm8e2pngdwp8m088t0etp7rgzx9ye2ju8v5ackcyg7t9nqx2um83\n   -Wallet ID:             4\n")),(0,l.kt)("h2",{id:"mint-an-nft-with-did"},"Mint an NFT (With DID)"),(0,l.kt)("admonition",{title:"important",type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"The values used in these commands are specific to this guide. Change any values that are different when you are following this guide such as the wallet id.")),(0,l.kt)("p",null,"Next we'll mint an NFT that is associated with a DID. For this example, we'll use most of the available options:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'chia wallet nft mint -f 2086972020 -i 4 -ra txch10e2hg2xkd7n2rfyh0frg6ls3q9v27ty0rfawxuvergrfyl0502vsx5se2t -ta txch1rhrkwf9a53v89r5ghn2du4e5vadt68crdfjuxcuq8zpykejw7vzq2t85nx -u https://images.pexels.com/photos/11053072/pexels-photo-11053072.jpeg -nh 14836b86a48e1b2b5e857213af97534704475b4c155d34b2cb83ed4b7cba2bb0 -mu "https://pastebin.com/raw/PnaQGQiH, https://pastebin.com/raw/KTwUQ8hM" -mh e9e9366f050e90ceb04a4778f2adfa02dfb565327d225eb35101f0de553ac20b -lu https://raw.githubusercontent.com/Chia-Network/chia-blockchain/main/LICENSE -lh 30a358857da6b49f57cfe819c1ca43bfe007f528eb784df5da5cb64577e0ffc6 -en 1 -et 5 -rp 300 -m 0.000615\n')),(0,l.kt)("p",null,"That should produce an output similar to this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"NFT minted Successfully with spend bundle:\n{\n  'aggregated_signature': '0x88123f66d0f6265e5bb96e668bfcc68c360566c98985b54aa4cff81627899941c4e14d7da96fda92af4b61ce110f6c221775dadb07c18a816d5e5d8d05987a854d8d5c42d2ab5802abd0f01d8da6b9fe28870a4c424cb7b46f55e8894d484ed1',\n  'coin_solutions': [{\n    'coin': {\n      'amount': 69999995,\n      'parent_coin_info': '0x7df44ef7a08a497b6bc31fc090fa3e57f6630142f8f123951e2d3b18685e9bd0',\n      'puzzle_hash': '0x827d2f77303929db5f3c26fd21b65901a342e36b9d912ac4440d6185f80d17a8'\n    },\n    'puzzle_reveal': ...,\n    'solution': ...\n  }, {\n    'coin': {\n      'amount': 1,\n      'parent_coin_info': '0xb4ddbcd646ed8e1ed9472898436ddab442f4640dc88199efa8db6ba22bb5dc31',\n      'puzzle_hash': '0xeff07522495060c066f66f32acc2a77e3a3e737aca8baea4d1a64ea4cdc13da9'\n    }, 'puzzle_reveal': ...,\n    'solution': ...\n  }, {\n    'coin': {\n      'amount': 1,\n      'parent_coin_info': '0xa3133d216499f2ff85bbd1928352a04b5612c8325eeaa0daa6cd964b9ba0e8a0',\n      'puzzle_hash': '0xa6d7c1fe01ed965d3f4fc08a89d9187831fceba98abf191dd6f388ba753ec9b3'\n    },\n    'puzzle_reveal': ...,\n    'solution': ...\n  }, {\n    'coin': {\n      'amount': 1,\n      'parent_coin_info': '0xcf052aa79755eba9b68d0ef4cbab1b05993ba84e7044d2fdfd71aa5d0877cbc3',\n      'puzzle_hash': '0xcb3cdbfcefdef0bd98bc8bc52cf46f49fd40a577713e86173e5cdf9585e299c9'\n    },\n    'puzzle_reveal': ...,\n    'solution': ...\n  }\n]}\n")),(0,l.kt)("p",null,"Here is a description of the options used:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-i")),(0,l.kt)("td",{parentName:"tr",align:null},"The id of your NFT wallet.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-u")),(0,l.kt)("td",{parentName:"tr",align:null},"A comma-separated list of URIs where this image may be found.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-nh")),(0,l.kt)("td",{parentName:"tr",align:null},"The NFT's data hash. Must match to be viewable in the wallet.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-f")),(0,l.kt)("td",{parentName:"tr",align:null},"The fingerprint of the wallet.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-ra")),(0,l.kt)("td",{parentName:"tr",align:null},"The wallet or smart coin address that will receive royalties.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-ta")),(0,l.kt)("td",{parentName:"tr",align:null},"The wallet or smart coin address where the NFT will be sent.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-mu")),(0,l.kt)("td",{parentName:"tr",align:null},"A comma-separated list of URIs where the image's metadata may be found.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-mh")),(0,l.kt)("td",{parentName:"tr",align:null},"The hash of the NFT's metadata.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-lu")),(0,l.kt)("td",{parentName:"tr",align:null},"A comma-separated list of URIs where the image's license may be found.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-lh")),(0,l.kt)("td",{parentName:"tr",align:null},"The hash of the NFT's license.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-en"),(0,l.kt)("td",{parentName:"tr",align:null},"The edition number. Specify if this NFT has multiple editions (multiple identical copies of an NFT).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-et"),(0,l.kt)("td",{parentName:"tr",align:null},"The edition total number. Specify if this NFT has multiple editions.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-rp")),(0,l.kt)("td",{parentName:"tr",align:null},"The royalty percentage expressed as tens of thousandths of a percent.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--no-did-ownership")),(0,l.kt)("td",{parentName:"tr",align:null},"Disables DID ownership.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-m")),(0,l.kt)("td",{parentName:"tr",align:null},"The fee for this transaction in XCH.")))),(0,l.kt)("p",null,"If successful, you will receive a JSON output, including the coin additions and removals involved in minting the NFT, as well as the spend bundle that was used."),(0,l.kt)("p",null,"Wait a few minutes for your NFT to be confirmed on the blockchain. Eventually, the NFT will show up."),(0,l.kt)("h2",{id:"list-your-nfts"},"List Your NFTs"),(0,l.kt)("p",null,"We'll list the NFTs from the wallet that was created with the CLI."),(0,l.kt)("p",null,"Run the following command to show the list of wallets:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet show\n")),(0,l.kt)("p",null,"That should produce an output similar to this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Wallet height: 1145640\nSync status: Synced\nBalances, fingerprint: 2527948602\n\nChia Wallet:\n   -Total Balance:         1.000049999988 txch (1000049999988 mojo)\n   -Pending Total Balance: 1.000049999988 txch (1000049999988 mojo)\n   -Spendable:             1.000049999988 txch (1000049999988 mojo)\n   -Type:                  STANDARD_WALLET\n   -Wallet ID:             1\n\nTest DID:\n   -Total Balance:         1.0\n   -Pending Total Balance: 1.0\n   -Spendable:             1.0\n   -Type:                  DISTRIBUTED_ID\n   -DID ID:                did:chia:13p5fdxgm8e2pngdwp8m088t0etp7rgzx9ye2ju8v5ackcyg7t9nqx2um83\n   -Wallet ID:             2\n\nDID-Linked NFT Wallet:\n   -Total Balance:         0.0\n   -Pending Total Balance: 0.0\n   -Spendable:             0.0\n   -Type:                  NFT\n   -DID ID:                did:chia:13p5fdxgm8e2pngdwp8m088t0etp7rgzx9ye2ju8v5ackcyg7t9nqx2um83\n   -Wallet ID:             4\n")),(0,l.kt)("p",null,"Show the NFT from this tutorial:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet nft list -i 4\n")),(0,l.kt)("p",null,"That should produce an output similar to this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'NFT identifier:            nft1euzj4fuh2h46nd5dpm6vh2cmqkvnh2zwwpzd9l0awx496zrhe0psfmklxm\nLauncher coin ID:          cf052aa79755eba9b68d0ef4cbab1b05993ba84e7044d2fdfd71aa5d0877cbc3\nLauncher puzhash:          eff07522495060c066f66f32acc2a77e3a3e737aca8baea4d1a64ea4cdc13da9\nCurrent NFT coin ID:       5cdfe3eb4429ad5cb12ab549b6d2f0f7d919fa9f4389d187ad7414f747a86bd4\nOn-chain data/info:        ((117 "https://images.pexels.com/photos/11053072/pexels-photo-11053072.jpeg") (104 . 0x14836b86a48e1b2b5e857213af97534704475b4c155d34b2cb83ed4b7cba2bb0) (28021 "https://metadata_example.com") (27765 "https://license_example.com") (29550 . 1) (29556 . 5) (28008 . 0x868463c2ae6f8a9585156c9ad9f4b9b01eeacc56fec82aa629c97135ff21823e) (27752 . 0x358d4eb4aedefbec22824036299eff24216d213a95c8f986f862f0a89a250a82))\nOwner DID:                 did:chia:13p5fdxgm8e2pngdwp8m088t0etp7rgzx9ye2ju8v5ackcyg7t9nqx2um83\nRoyalty percentage:        300\nRoyalty puzhash:           827d2f77303929db5f3c26fd21b65901a342e36b9d912ac4440d6185f80d17a8\nNFT content hash:          14836b86a48e1b2b5e857213af97534704475b4c155d34b2cb83ed4b7cba2bb0\nMetadata hash:             868463c2ae6f8a9585156c9ad9f4b9b01eeacc56fec82aa629c97135ff21823e\nLicense hash:              358d4eb4aedefbec22824036299eff24216d213a95c8f986f862f0a89a250a82\nNFT series total:          5\nCurrent NFT number in the series: 1\nMetadata updater puzhash:  fe8a4b4e27a2e29a4d3fc7ce9d527adbcaccbab6ada3903ccf3ba9a769d2d78b\nNFT minting block height:  1145481\nInner puzzle supports DID: True\nNFT is pending for a transaction: False\n\nURIs:\n   https://images.pexels.com/photos/11053072/pexels-photo-11053072.jpeg\n\nMetadata URIs:\n   https://metadata_example.com\n\nLicense URIs:\n   https://license_example.com\n')),(0,l.kt)("p",null,"Note that you can obtain the same info with the ",(0,l.kt)("inlineCode",{parentName:"p"},"get_info")," command. You'll need to pass in the identifier of the NFT you want to list:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet nft get_info -ni nft1euzj4fuh2h46nd5dpm6vh2cmqkvnh2zwwpzd9l0awx496zrhe0psfmklxm\n")),(0,l.kt)("p",null,"That should produce an output similar to this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'NFT identifier: nft1euzj4fuh2h46nd5dpm6vh2cmqkvnh2zwwpzd9l0awx496zrhe0psfmklxm\nLauncher coin ID: cf052aa79755eba9b68d0ef4cbab1b05993ba84e7044d2fdfd71aa5d0877cbc3\nLauncher puzhash: eff07522495060c066f66f32acc2a77e3a3e737aca8baea4d1a64ea4cdc13da9\nCurrent NFT coin ID: 5cdfe3eb4429ad5cb12ab549b6d2f0f7d919fa9f4389d187ad7414f747a86bd4\nOn-chain data/info: ((117 "https://images.pexels.com/photos/11053072/pexels-photo-11053072.jpeg") (104 . 0x14836b86a48e1b2b5e857213af97534704475b4c155d34b2cb83ed4b7cba2bb0) (28021 "https://metadata_example.com") (27765 "https://license_example.com") (29550 . 1) (29556 . 5) (28008 . 0x868463c2ae6f8a9585156c9ad9f4b9b01eeacc56fec82aa629c97135ff21823e) (27752 . 0x358d4eb4aedefbec22824036299eff24216d213a95c8f986f862f0a89a250a82))\nOwner DID: did:chia:13p5fdxgm8e2pngdwp8m088t0etp7rgzx9ye2ju8v5ackcyg7t9nqx2um83\nRoyalty percentage: 300\nRoyalty puzhash: 827d2f77303929db5f3c26fd21b65901a342e36b9d912ac4440d6185f80d17a8\nNFT content hash: 14836b86a48e1b2b5e857213af97534704475b4c155d34b2cb83ed4b7cba2bb0\nMetadata hash: 868463c2ae6f8a9585156c9ad9f4b9b01eeacc56fec82aa629c97135ff21823e\nLicense hash: 358d4eb4aedefbec22824036299eff24216d213a95c8f986f862f0a89a250a82\nNFT series total: 5\nCurrent NFT number in the series: 1\nMetadata updater puzhash: fe8a4b4e27a2e29a4d3fc7ce9d527adbcaccbab6ada3903ccf3ba9a769d2d78b\nNFT minting block height: 1145481\nInner puzzle supports DID: True\nNFT is pending for a transaction: False\n\nURIs:\nhttps://images.pexels.com/photos/11053072/pexels-photo-11053072.jpeg\n\nMetadata URIs:\nhttps://metadata_example.com\n\nLicense URIs:\nhttps://license_example.com\n\n')),(0,l.kt)("h2",{id:"add-a-uri-to-your-nfts"},"Add a URI to Your NFTs"),(0,l.kt)("admonition",{title:"important",type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"The values used in these commands are specific to this guide. Change any values that are different when you are following this guide such as the wallet id.")),(0,l.kt)("p",null,"Each NFT has three URI lists:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Data URIs (also simply called "URIs")'),(0,l.kt)("li",{parentName:"ul"},"Metadata URIs"),(0,l.kt)("li",{parentName:"ul"},"License URIs")),(0,l.kt)("p",null,"It is ",(0,l.kt)("em",{parentName:"p"},"not")," possible to delete these lists or to remove any of their items. However, it is possible to ",(0,l.kt)("em",{parentName:"p"},"prepend")," new items to any of these lists. One reason to do this is if a link is broken. But keep in mind that if an invalid item is added, wallets and block explorers may read the invalid new item and not examine subsequent, valid items."),(0,l.kt)("p",null,"It is only possible to add one URI per spend. Exactly one of ",(0,l.kt)("inlineCode",{parentName:"p"},"-u")," ",(0,l.kt)("inlineCode",{parentName:"p"},"-mu"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"-lu")," is required. For this example, we'll add one of each of these items, which requires three separate spends."),(0,l.kt)("p",null,"For simplicity, we'll just duplicate the URIs that already existed. The current NFT coin id (",(0,l.kt)("inlineCode",{parentName:"p"},"-ni"),") will change with each spend."),(0,l.kt)("p",null,"We'll add them to the DID-linked NFT:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet nft add_uri -i 4 -ni 5cdfe3eb4429ad5cb12ab549b6d2f0f7d919fa9f4389d187ad7414f747a86bd4 -u https://images.pexels.com/photos/11053072/pexels-photo-11053072.jpeg -m 0.00001\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet nft add_uri -i 4 -ni 4e1e452bf3612ddd654fe1e3684a635c1d2495cbfde338ef875c8f292e21adb8 -mu https://metadata_example.com -m 0.00001\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet nft add_uri -i 4 -ni 33ae5afc65ec4404aba16bd9a0b17cfa23ddca9ac9bb49a03548167e286762ba -lu https://license_example.com -m 0.00001\n")),(0,l.kt)("p",null,"Now that the URIs have been added successfully, rerun the same ",(0,l.kt)("inlineCode",{parentName:"p"},"get_info")," command to see the updates."),(0,l.kt)("p",null,"Each URI list now has two copies of the URI:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet nft get_info -ni nft1euzj4fuh2h46nd5dpm6vh2cmqkvnh2zwwpzd9l0awx496zrhe0psfmklxm\n")),(0,l.kt)("p",null,"That should produce an output similar to this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'NFT identifier:            nft1euzj4fuh2h46nd5dpm6vh2cmqkvnh2zwwpzd9l0awx496zrhe0psfmklxm\nLauncher coin ID:          cf052aa79755eba9b68d0ef4cbab1b05993ba84e7044d2fdfd71aa5d0877cbc3\nLauncher puzhash:          eff07522495060c066f66f32acc2a77e3a3e737aca8baea4d1a64ea4cdc13da9\nCurrent NFT coin ID:       d7eed252af2055353a0ecbf734094345b3ffd793631a36b79ac80638a579b873\nOn-chain data/info:        ((117 "https://images.pexels.com/photos/11053072/pexels-photo-11053072.jpeg" "https://images.pexels.com/photos/11053072/pexels-photo-11053072.jpeg") (104 . 0x14836b86a48e1b2b5e857213af97534704475b4c155d34b2cb83ed4b7cba2bb0) (28021 "https://license_example.com" "https://metadata_example.com" "https://metadata_example.com") (27765 "https://license_example.com") (29550 . 1) (29556 . 5) (28008 . 0x868463c2ae6f8a9585156c9ad9f4b9b01eeacc56fec82aa629c97135ff21823e) (27752 . 0x358d4eb4aedefbec22824036299eff24216d213a95c8f986f862f0a89a250a82))\nOwner DID:                 did:chia:13p5fdxgm8e2pngdwp8m088t0etp7rgzx9ye2ju8v5ackcyg7t9nqx2um83\nRoyalty percentage:        300\nRoyalty puzhash:           827d2f77303929db5f3c26fd21b65901a342e36b9d912ac4440d6185f80d17a8\nNFT content hash:          14836b86a48e1b2b5e857213af97534704475b4c155d34b2cb83ed4b7cba2bb0\nMetadata hash:             868463c2ae6f8a9585156c9ad9f4b9b01eeacc56fec82aa629c97135ff21823e\nLicense hash:              358d4eb4aedefbec22824036299eff24216d213a95c8f986f862f0a89a250a82\nNFT series total:          5\nCurrent NFT number in the series: 1\nMetadata updater puzhash:  fe8a4b4e27a2e29a4d3fc7ce9d527adbcaccbab6ada3903ccf3ba9a769d2d78b\nNFT minting block height:  1145481\nInner puzzle supports DID: True\nNFT is pending for a transaction: False\n\nURIs:\n   https://images.pexels.com/photos/11053072/pexels-photo-11053072.jpeg\n   https://images.pexels.com/photos/11053072/pexels-photo-11053072.jpeg\n\nMetadata URIs:\n   https://metadata_example.com\n   https://metadata_example.com\n\nLicense URIs:\n   https://license_example.com\n   https://license_example.com\n')),(0,l.kt)("h2",{id:"set-the-did-for-an-nft"},"Set the DID for an NFT"),(0,l.kt)("admonition",{title:"important",type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"The values used in these commands are specific to this guide. Change any values that are different when you are following this guide such as the wallet id.")),(0,l.kt)("p",null,"Next we'll set the DID for an existing NFT. But first we'll need to create the new DID."),(0,l.kt)("p",null,"Run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet did create -n New_DID\n")),(0,l.kt)("p",null,"That should produce an output similar to this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Successfully created a DID wallet with name New_DID and id 5 on key 2527948602\nSuccessfully created a DID did:chia:1yxezm4nl4lhr4f7yr7yw0w4t9v6p32n2zt0skk0gumn4krfy8uxq8hhg9w in the newly created DID wallet\n")),(0,l.kt)("p",null,"Next, update the DID from previous example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet nft set_did -i 4 -di did:chia:1yxezm4nl4lhr4f7yr7yw0w4t9v6p32n2zt0skk0gumn4krfy8uxq8hhg9w -ni d7eed252af2055353a0ecbf734094345b3ffd793631a36b79ac80638a579b873\n")),(0,l.kt)("p",null,"That should produce an output similar to this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hs"},"Transaction to set DID on NFT has been initiated with:\n{\n  'aggregated_signature': '0xb0721860a9aba71a6e5bd2b55ea71c9019bf6e2e5018a34fef85df9b57b31abd8ea17b9604181050af8567ad54786a910bd83081075e7cef40b2f9826086730aa65a7dac8b27e76ec90ddfd865a9e3ec15847567d0f15b7a87c0c0a7e92464ea',\n  'coin_solutions': [{\n    'coin': {\n      'amount': 1,\n      'parent_coin_info': '0x33ae5afc65ec4404aba16bd9a0b17cfa23ddca9ac9bb49a03548167e286762ba',\n      'puzzle_hash': '0x8dd052a6c2af1d209d1217a33a8ed89fc41b95e2d1682fe914a36a7ef41dc94c'\n    },\n    'puzzle_reveal': ...,\n    'solution': ...\n  }, {\n    'coin': {\n      'amount': 1,\n      'parent_coin_info': '0xc8315a120525dd5cd658b9635cd0a5ab4bc2e878deaa57f6d295eb2dd7ed8ece',\n      'puzzle_hash': '0x20fa98c4a333ac84429cfe29b05d75782eb96e4dcd28e9ffb276309a2a8481d8'\n    },\n    'puzzle_reveal': ...,\n    'solution': ...\n  }\n]}\n")),(0,l.kt)("p",null,"This command will create a new NFT wallet (",(0,l.kt)("inlineCode",{parentName:"p"},"6")," in this case), which is associated with the new DID. It will also set the NFT's DID to the newly created DID."),(0,l.kt)("p",null,"To verify this, run the ",(0,l.kt)("inlineCode",{parentName:"p"},"list")," command to show that the new DID has been applied:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet nft list -i 6\n")),(0,l.kt)("p",null,"That should produce an output similar to this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Wallet keys:\n\n1.  455254876\n2.  - 2527948602 (Synced)\n      Choose a wallet key [1-2] (\'q\' to quit, or Enter to use 2527948602):\n\nNFT identifier: nft1euzj4fuh2h46nd5dpm6vh2cmqkvnh2zwwpzd9l0awx496zrhe0psfmklxm\nLauncher coin ID: cf052aa79755eba9b68d0ef4cbab1b05993ba84e7044d2fdfd71aa5d0877cbc3\nLauncher puzhash: eff07522495060c066f66f32acc2a77e3a3e737aca8baea4d1a64ea4cdc13da9\nCurrent NFT coin ID: 3d77d58164db748ff874551af7ee7e5930b53ae63453efd451213e8bac1acb35\nOn-chain data/info: ((117 "https://images.pexels.com/photos/11053072/pexels-photo-11053072.jpeg" "https://images.pexels.com/photos/11053072/pexels-photo-11053072.jpeg") (104 . 0x14836b86a48e1b2b5e857213af97534704475b4c155d34b2cb83ed4b7cba2bb0) (28021 "https://license_example.com" "https://metadata_example.com" "https://metadata_example.com") (27765 "https://license_example.com" "https://license_example.com") (29550 . 1) (29556 . 5) (28008 . 0x868463c2ae6f8a9585156c9ad9f4b9b01eeacc56fec82aa629c97135ff21823e) (27752 . 0x358d4eb4aedefbec22824036299eff24216d213a95c8f986f862f0a89a250a82))\nOwner DID: did:chia:1yxezm4nl4lhr4f7yr7yw0w4t9v6p32n2zt0skk0gumn4krfy8uxq8hhg9w\nRoyalty percentage: 300\nRoyalty puzhash: 827d2f77303929db5f3c26fd21b65901a342e36b9d912ac4440d6185f80d17a8\nNFT content hash: 14836b86a48e1b2b5e857213af97534704475b4c155d34b2cb83ed4b7cba2bb0\nMetadata hash: 868463c2ae6f8a9585156c9ad9f4b9b01eeacc56fec82aa629c97135ff21823e\nLicense hash: 358d4eb4aedefbec22824036299eff24216d213a95c8f986f862f0a89a250a82\nNFT series total: 5\nCurrent NFT number in the series: 1\nMetadata updater puzhash: fe8a4b4e27a2e29a4d3fc7ce9d527adbcaccbab6ada3903ccf3ba9a769d2d78b\nNFT minting block height: 1145481\nInner puzzle supports DID: True\nNFT is pending for a transaction: False\n\nURIs:\nhttps://images.pexels.com/photos/11053072/pexels-photo-11053072.jpeg\nhttps://images.pexels.com/photos/11053072/pexels-photo-11053072.jpeg\n\nMetadata URIs:\nhttps://metadata_example.com\nhttps://metadata_example.com\n\nLicense URIs:\nhttps://license_example.com\nhttps://license_example.com\n\n')),(0,l.kt)("h2",{id:"transfer-your-nfts"},"Transfer Your NFTs"),(0,l.kt)("admonition",{title:"important",type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"The values used in these commands are specific to this guide. Change any values that are different when you are following this guide such as the wallet id.")),(0,l.kt)("p",null,"The final step for the CLI portion of this tutorial is to transfer your NFTs to another address. This can be any XCH or TXCH address. If the recipient does not have an NFT wallet, then one will be created automatically."),(0,l.kt)("p",null,"For this tutorial, we'll send the NFTs to a commonly-used burn address."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The original puzzle hash of the burn address is ",(0,l.kt)("inlineCode",{parentName:"li"},"0x000000000000000000000000000000000000000000000000000000000000dead")),(0,l.kt)("li",{parentName:"ul"},"For testnet, the corresponding address is ",(0,l.kt)("inlineCode",{parentName:"li"},"txch1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqm6ksh7qddh")),(0,l.kt)("li",{parentName:"ul"},"For mainnet, the corresponding address is ",(0,l.kt)("inlineCode",{parentName:"li"},"xch1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqm6ks6e8mvy"))),(0,l.kt)("p",null,"The reason these work as a burn address is that there is no known puzzle that matches this puzzle hash. Even if there were, it would have to be spendable. That is an ",(0,l.kt)("strong",{parentName:"p"},"extremely")," unlikely set of conditions to ever occur."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet nft transfer -i 6 -ni 3d77d58164db748ff874551af7ee7e5930b53ae63453efd451213e8bac1acb35 -ta txch1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqm6ksh7qddh\n")),(0,l.kt)("p",null,"Which should also produce an output similar to this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"NFT transferred successfully with spend bundle:\n{\n  'aggregated_signature': '0x83439590ef82effdfcb3eeafdb9ec0c0266b36d14dd21ad09a24d534d27cfb8f273c15e850cb332688b65b584197c39213cd05abe4616fb1df7525fff228d45d919d34a7a6ed70758003e086c3cf92800ec70ab60f9fd86b1537e9383790db54',\n  'coin_solutions': [{\n    'coin': {\n      'amount': 1,\n      'parent_coin_info': '0xd7eed252af2055353a0ecbf734094345b3ffd793631a36b79ac80638a579b873',\n      'puzzle_hash': '0x98c029490670291a1fbdbfc09bc4942a36a633f0b14e00e7670ee6413b5ddc4e'\n    },\n    'puzzle_reveal': ...,\n    'solution': ...\n  }]\n}\n")),(0,l.kt)("h2",{id:"mainnet-usage"},"Mainnet Usage"),(0,l.kt)("p",null,"After you are comfortable with creating and using DIDs and NFTs on the testnet, you may wish to move to mainnet. Please keep in mind that there are extra risks inherent to publishing code on a public blockchain. For example, an NFT's data, metadata and license hashes are not allowed to change after minting. Proceed with caution."),(0,l.kt)("p",null,"That said, the process is the same for both testnet and mainnet usage."),(0,l.kt)("p",null,"When you are ready to move to mainnet, the first step is to run ",(0,l.kt)("inlineCode",{parentName:"p"},"chia configure -t false"),", which will instruct Chia to switch your configuration to mainnet."),(0,l.kt)("p",null,"You should also generate a new set of keys and be extra careful to protect your seed phrase."),(0,l.kt)("p",null,"Happy minting!"))}h.isMDXComponent=!0}}]);