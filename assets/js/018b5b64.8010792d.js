"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[7164],{3905:(X,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>u});var n=t(7294);function a(X,e,t){return e in X?Object.defineProperty(X,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):X[e]=t,X}function r(X,e){var t=Object.keys(X);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(X);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(X,e).enumerable}))),t.push.apply(t,n)}return t}function s(X){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(X,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(X,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(X,e,Object.getOwnPropertyDescriptor(t,e))}))}return X}function o(X,e){if(null==X)return{};var t,n,a=function(X,e){if(null==X)return{};var t,n,a={},r=Object.keys(X);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(a[t]=X[t]);return a}(X,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(X);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(X,t)&&(a[t]=X[t])}return a}var i=n.createContext({}),c=function(X){var e=n.useContext(i),t=e;return X&&(t="function"==typeof X?X(e):s(s({},e),X)),t},l=function(X){var e=c(X.components);return n.createElement(i.Provider,{value:e},X.children)},p="mdxType",m={inlineCode:"code",wrapper:function(X){var e=X.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(X,e){var t=X.components,a=X.mdxType,r=X.originalType,i=X.parentName,l=o(X,["components","mdxType","originalType","parentName"]),p=c(t),d=a,u=p["".concat(i,".").concat(d)]||p[d]||m[d]||r;return t?n.createElement(u,s(s({ref:e},l),{},{components:t})):n.createElement(u,s({ref:e},l))}));function u(X,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof X||a){var r=t.length,s=new Array(r);s[0]=d;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=X,o[p]="string"==typeof X?X:a,s[1]=o;for(var c=2;c<r;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3413:(X,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const r={sidebar_label:"Overview",title:"RPC Overview",slug:"/rpc"},s=void 0,o={unversionedId:"rpc-reference/rpc",id:"rpc-reference/rpc",title:"RPC Overview",description:"The Chia node and services come with a JSON RPC API server that allows you to access information and control the services.",source:"@site/docs/rpc-reference/rpc.md",sourceDirName:"rpc-reference",slug:"/rpc",permalink:"/rpc",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/rpc-reference/rpc.md",tags:[],version:"current",frontMatter:{sidebar_label:"Overview",title:"RPC Overview",slug:"/rpc"},sidebar:"tutorialSidebar",previous:{title:"Farming FAQ",permalink:"/farming-faq"},next:{title:"DataLayer",permalink:"/datalayer-rpc"}},i={},c=[{value:"Default Ports:",id:"default-ports",level:3},{value:"HTTP/JSON",id:"httpjson",level:3},{value:"WebSockets",id:"websockets",level:3},{value:"WebSockets Example (courtesy of baerrs)",id:"websockets-example-courtesy-of-baerrs",level:4},{value:"WebSockets Example Output",id:"websockets-example-output",level:4},{value:"Python",id:"python",level:3},{value:"Python Example (courtesy of baerrs)",id:"python-example-courtesy-of-baerrs",level:4},{value:"Javascript",id:"javascript",level:3},{value:"Services",id:"services",level:2}],l={toc:c},p="wrapper";function m(X){let{components:e,...t}=X;return(0,a.kt)(p,(0,n.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Chia node and services come with a JSON RPC API server that allows you to access information and control the services.\nThese are accessible via HTTP, WebSockets, or via client SDKs.\nThe ports can be configured in ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.chia/mainnet/config/config.yaml"),".\nThe RPC ports should not be exposed to the internet.\nTLS certificates are used to secure the communication."),(0,a.kt)("h3",{id:"default-ports"},"Default Ports:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Daemon: 55400"),(0,a.kt)("li",{parentName:"ul"},"Full Node: 8555"),(0,a.kt)("li",{parentName:"ul"},"Farmer: 8559"),(0,a.kt)("li",{parentName:"ul"},"Harvester: 8560"),(0,a.kt)("li",{parentName:"ul"},"Wallet: 9256"),(0,a.kt)("li",{parentName:"ul"},"DataLayer: 8562")),(0,a.kt)("h3",{id:"httpjson"},"HTTP/JSON"),(0,a.kt)("p",null,"The certificates must be used when calling the RPCs from the command line, make sure to use the correct certificates for the services you are calling.\nAll endpoints are made with POST with JSON data. The response is a JSON dictionary with a success field, which can be true or false."),(0,a.kt)("h3",{id:"websockets"},"WebSockets"),(0,a.kt)("p",null,"If you are using the Websockets API, you can go directly through the daemon, which routes requests. Each WebSocket message contains the following fields:\nSome examples can be found here: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Chia-Mine/chia-agent"},"https://github.com/Chia-Mine/chia-agent"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "command": "get_blockchain_state",\n  "ack": false,\n  "data": {},\n  "request_id": "123456",\n  "destination": "wallet",\n  "origin": "ui"\n}\n')),(0,a.kt)("h4",{id:"websockets-example-courtesy-of-baerrs"},"WebSockets Example (courtesy of ",(0,a.kt)("a",{parentName:"h4",href:"https://github.com/baerrs"},"baerrs"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'import json\nfrom datetime import datetime\nimport websocket\nimport ssl\n\n\n# websocket.enableTrace(True)\ndef on_message(ws, message):\n    print(\'{0}: Got message: {1}\'.format(datetime.now(), message))\n\n\ndef on_error(self, error):\n    print(\'Error in websocket: {0}\'.format(error))\n\n\ndef on_close(self, ws, e):\n    print("{0]: Websocket closed: {1}".format(datetime.now(), e))\n\n\ndef on_open(self):\n    print(\'{0}: Connected to Websocket\'.format(datetime.now()))\n    message = {"destination": "daemon", "command": "register_service", "request_id": "123456ca", "origin": "", "data": { "service": \'chia_agent\'}}\n    on_send_message(self, message)\n    message = {"destination": "daemon", "command": "register_service", "request_id": "123456w", "origin": "", "data": { "service": \'wallet_ui\'}}\n    on_send_message(self, message)\n\ndef on_send_message(ws, message):\n    print(\'{0}: Sent Message: {1}\'.format(datetime.now(), message))\n    wsapp.send(json.dumps(message))\n\n\ndef on_ping(ws, data):\n    print(\'{0}: Got ping: {1}\'.format(datetime.now(), data))\n\n\nprint("Starting Something")\nwsapp = websocket.WebSocketApp("wss://localhost:55400",\n                               on_open=on_open,\n                               on_message=on_message,\n                               on_error=on_error,\n                               on_ping=on_ping)\n\nwsapp.run_forever(sslopt={"cert_reqs": ssl.CERT_NONE, "certfile": "ssl/daemon/private_daemon.crt",\n                          "keyfile": "ssl/daemon/private_daemon.key", "ssl_context.check_hostname": False})\nwsapp.close()\n')),(0,a.kt)("h4",{id:"websockets-example-output"},"WebSockets Example Output"),(0,a.kt)("p",null,"(Long strings have been replace with ",(0,a.kt)("inlineCode",{parentName:"p"},"XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"),".)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'Starting Something\n2022-01-24 21:20:39.782297: Connected to Websocket\n2022-01-24 21:20:39.782297: Sent Message: {\'destination\': \'daemon\', \'command\': \'register_service\', \'request_id\': \'123456ca\', \'origin\': \'\', \'data\': {\'service\': \'chia_agent\'}}\n2022-01-24 21:20:39.782297: Sent Message: {\'destination\': \'daemon\', \'command\': \'register_service\', \'request_id\': \'123456w\', \'origin\': \'\', \'data\': {\'service\': \'wallet_ui\'}}\n2022-01-24 21:20:39.782297: Got message: {"ack": true, "command": "register_service", "data": {"success": true}, "destination": "", "origin": "daemon", "request_id": "123456ca"}\n2022-01-24 21:20:39.782297: Got message: {"ack": true, "command": "register_service", "data": {"success": true}, "destination": "", "origin": "daemon", "request_id": "123456w"}\n2022-01-24 21:20:45.053029: Got message: {"ack": false, "command": "get_connections", "data": {"connections": [{"bytes_read": 3094726, "bytes_written": 1545670, "creation_time": 1642488338.7817655, "last_message_time": 1643077239.4690468, "local_port": 8447, "node_id": "XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "peer_host": "127.0.0.1", "peer_port": 3445, "peer_server_port": 8448, "type": 2}, {"bytes_read": 870298, "bytes_written": 51, "creation_time": 1642743064.406306, "last_message_time": 1643077239.4690468, "local_port": 8447, "node_id": "XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "peer_host": "127.0.0.1", "peer_port": 8444, "peer_server_port": 8444, "type": 1}], "success": true}, "destination": "wallet_ui", "origin": "chia_farmer", "request_id": "XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"}\n2022-01-24 21:20:48.417804: Got message: {"ack": false, "command": "new_signage_point", "data": {"proofs": [], "signage_point": {"challenge_chain_sp": "XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "challenge_hash": "XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "difficulty": 2672, "reward_chain_sp": "XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "signage_point_index": 8, "sub_slot_iters": 135266304}, "success": true}, "destination": "wallet_ui", "origin": "chia_farmer", "request_id": "XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"}\n2022-01-24 21:20:48.417804: Got message: {"ack": false, "command": "new_farming_info", "data": {"farming_info": {"challenge_hash": "XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "passed_filter": 0, "proofs": 0, "signage_point": "0x35e9aaf13ebca31660f9720f97cf2c127a01a24440a6a253b5953196da715162", "timestamp": 1643077248, "total_plots": 3}, "success": true}, "destination": "wallet_ui", "origin": "chia_farmer", "request_id": "XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"}\n2022-01-24 21:20:57.402740: Got message: {"ack": false, "command": "new_signage_point", "data": {"proofs": [], "signage_point": {"challenge_chain_sp": "XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "challenge_hash": "XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "difficulty": 2672, "reward_chain_sp": "XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "signage_point_index": 9, "sub_slot_iters": 135266304}, "success": true}, "destination": "wallet_ui", "origin": "chia_farmer", "request_id": "XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"}\n2022-01-24 21:20:57.402740: Got message: {"ack": false, "command": "new_farming_info", "data": {"farming_info": {"challenge_hash": "XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "passed_filter": 0, "proofs": 0, "signage_point": "XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "timestamp": 1643077257, "total_plots": 3}, "success": true}, "destination": "wallet_ui", "origin": "chia_farmer", "request_id": "XxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"}\n')),(0,a.kt)("h3",{id:"python"},"Python"),(0,a.kt)("p",null,"Most of the rpc methods are accessible through the different client objects in ",(0,a.kt)("inlineCode",{parentName:"p"},"chia-blockchain/chia/rpc"),".\nFor examples of usage, see the command line implementation (chia wallet, chia show, etc)."),(0,a.kt)("h4",{id:"python-example-courtesy-of-baerrs"},"Python Example (courtesy of ",(0,a.kt)("a",{parentName:"h4",href:"https://github.com/baerrs"},"baerrs"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import requests\nimport urllib3\nimport json\nurllib3.disable_warnings()\n\nheaders = {'Content-Type': 'application/json'}\nurl = \"https://localhost:8555/get_blockchain_state\"\ndata = '{}'\ncert = ('ssl/full_node/private_full_node.crt', 'ssl/full_node/private_full_node.key')\nresponse = json.loads(requests.post(url, data=data, headers=headers, cert=cert, verify=False).text)\nprint(json.dumps(response, indent=4, sort_keys=True))\n")),(0,a.kt)("h3",{id:"javascript"},"Javascript"),(0,a.kt)("p",null,"A javascript client can be found here: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Chia-Mine/chia-agent"},"https://github.com/Chia-Mine/chia-agent"),".\nThere is also another client here: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/freddiecoleman/chia-client"},"https://github.com/freddiecoleman/chia-client"),"."),(0,a.kt)("h2",{id:"services"},"Services"),(0,a.kt)("p",null,"The service RPC APIs are documented in the following sections:\nTODO: add links here and create the other sections"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Shared: RPCs that all services share"),(0,a.kt)("li",{parentName:"ul"},"Full Node"),(0,a.kt)("li",{parentName:"ul"},"Farmer"),(0,a.kt)("li",{parentName:"ul"},"Harvester"),(0,a.kt)("li",{parentName:"ul"},"Timelord"),(0,a.kt)("li",{parentName:"ul"},"Wallet (This API is still a WIP and likely to change soon)")))}m.isMDXComponent=!0}}]);