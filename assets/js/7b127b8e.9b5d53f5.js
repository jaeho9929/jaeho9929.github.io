"use strict";(self.webpackChunkjaeho_9929_github_io=self.webpackChunkjaeho_9929_github_io||[]).push([[9014],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>d});var l=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,l,n=function(t,e){if(null==t)return{};var a,l,n={},r=Object.keys(t);for(l=0;l<r.length;l++)a=r[l],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)a=r[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=l.createContext({}),k=function(t){var e=l.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=k(t.components);return l.createElement(p.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},N=l.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,p=t.parentName,m=u(t,["components","mdxType","originalType","parentName"]),N=k(a),d=n,g=N["".concat(p,".").concat(d)]||N[d]||o[d]||r;return a?l.createElement(g,i(i({ref:e},m),{},{components:a})):l.createElement(g,i({ref:e},m))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,i=new Array(r);i[0]=N;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u.mdxType="string"==typeof t?t:n,i[1]=u;for(var k=2;k<r;k++)i[k]=a[k];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}N.displayName="MDXCreateElement"},2728:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>u,toc:()=>k});var l=a(7462),n=(a(7294),a(3905));const r={slug:"gcp-6",title:"Virtual Private Cloud",authors:["jay"],tags:["cloud","gcp"]},i=void 0,u={permalink:"/gcp-6",source:"@site/blog/2022-08-21-gcp-5-6/2022-08-21-gcp-6.md",title:"Virtual Private Cloud",description:"VPC",date:"2022-08-21T00:00:00.000Z",formattedDate:"2022\ub144 8\uc6d4 21\uc77c",tags:[{label:"cloud",permalink:"/tags/cloud"},{label:"gcp",permalink:"/tags/gcp"}],readingTime:8.44,hasTruncateMarker:!1,authors:[{name:"jay.prog",title:"\ud558\ub8e8\ud0a4 \ud504\ub85c\uc81d\ud2b8 \uad00\ub9ac\uc790",url:"https://github.com/jaeho9929",imageURL:"https://github.com/jaeho9929.png",key:"jay"}],frontMatter:{slug:"gcp-6",title:"Virtual Private Cloud",authors:["jay"],tags:["cloud","gcp"]},prevItem:{title:"Compute Engine",permalink:"/gcp-5"},nextItem:{title:"Google Cloud SDK",permalink:"/gcp-3"}},p={authorsImageUrls:[void 0]},k=[{value:"VPC",id:"vpc",level:2},{value:"VPC \ub124\ud2b8\uc6cc\ud06c",id:"vpc-\ub124\ud2b8\uc6cc\ud06c",level:2},{value:"Network and Subnet",id:"network-and-subnet",level:2},{value:"\uc608\uc57d\ub41c IP",id:"\uc608\uc57d\ub41c-ip",level:2},{value:"\uc790\ub3d9 \ubaa8\ub4dc IP \ubc94\uc704 -&gt; \ud604\uc7ac \ubc84\uc804 \uac80\uc99d \ud544\uc694",id:"\uc790\ub3d9-\ubaa8\ub4dc-ip-\ubc94\uc704---\ud604\uc7ac-\ubc84\uc804-\uac80\uc99d-\ud544\uc694",level:2},{value:"Firewall",id:"firewall",level:2},{value:"Routing",id:"routing",level:2},{value:"Routing - \uae30\ubcf8 \uacbd\ub85c",id:"routing---\uae30\ubcf8-\uacbd\ub85c",level:2},{value:"Routing - \uc11c\ube0c\ub137 \uacbd\ub85c",id:"routing---\uc11c\ube0c\ub137-\uacbd\ub85c",level:2},{value:"Routing - \ucee4\uc2a4\ud140 \uc815\uc801 \uacbd\ub85c",id:"routing---\ucee4\uc2a4\ud140-\uc815\uc801-\uacbd\ub85c",level:2},{value:"Routing - \ucee4\uc2a4\ud140 \ub3d9\uc801 \uacbd\ub85c",id:"routing---\ucee4\uc2a4\ud140-\ub3d9\uc801-\uacbd\ub85c",level:2},{value:"Forwarding Rule",id:"forwarding-rule",level:2},{value:"IP \uc8fc\uc18c",id:"ip-\uc8fc\uc18c",level:2},{value:"\ubcc4\uce6d (alias) IP \ubc94\uc704",id:"\ubcc4\uce6d-alias-ip-\ubc94\uc704",level:2},{value:"\ub2e4\uc911 \ub124\ud2b8\uc6cc\ud06c \uc778\ud130\ud398\uc774\uc2a4",id:"\ub2e4\uc911-\ub124\ud2b8\uc6cc\ud06c-\uc778\ud130\ud398\uc774\uc2a4",level:2},{value:"\uacf5\uc720 VPC",id:"\uacf5\uc720-vpc",level:2},{value:"VPC \ub124\ud2b8\uc6cc\ud06c \ud53c\uc5b4\ub9c1",id:"vpc-\ub124\ud2b8\uc6cc\ud06c-\ud53c\uc5b4\ub9c1",level:2},{value:"Cloud VPN",id:"cloud-vpn",level:2},{value:"Cloud Interconnect (Interconnect)",id:"cloud-interconnect-interconnect",level:2}],m={toc:k};function o(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,l.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"vpc"},"VPC"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GCP \ub9ac\uc18c\uc2a4\ub97c \uc704\ud55c \uad00\ub9ac\ud615 \ub124\ud2b8\uc6cc\ud0b9 \uae30\ub2a5 \uc81c\uacf5",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ub124\ud2b8\uc6cc\ud06c"),(0,n.kt)("li",{parentName:"ul"},"\uc778\ud130\ud398\uc774\uc2a4 \ubc0f IP \uc8fc\uc18c"),(0,n.kt)("li",{parentName:"ul"},"VPC \uacf5\uc720 \ubc0f \ud53c\uc5b4\ub9c1"),(0,n.kt)("li",{parentName:"ul"},"\ud558\uc774\ube0c\ub9ac\ub4dc \ud074\ub77c\uc6b0\ub4dc"),(0,n.kt)("li",{parentName:"ul"},"\ubd80\ud558\ubd84\uc0b0")))),(0,n.kt)("h2",{id:"vpc-\ub124\ud2b8\uc6cc\ud06c"},"VPC \ub124\ud2b8\uc6cc\ud06c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc5f0\uacb0\ub41c \ub77c\uc6b0\ud130\uc640 \ubc29\ud654\ubcbd \uaddc\uce59\uc744 \ud3ec\ud568\ud55c \uc804\uc5ed \ub9ac\uc18c\uc2a4"),(0,n.kt)("li",{parentName:"ul"},"\uc11c\ube0c\ub137\uc740 \uc9c0\uc5ed(Zone) \ub9ac\uc18c\uc2a4, CIDR\uc744 \uc774\uc6a9\ud558\uc5ec IP \uc8fc\uc18c\ubc94\uc704\ub97c \uc815\uc758"),(0,n.kt)("li",{parentName:"ul"},"\ubc29\ud654\ubcbd\uc744 \ud1b5\ud55c \ud2b8\ub798\ud53d \uc81c\uc5b4 \uac00\ub2a5"),(0,n.kt)("li",{parentName:"ul"},"Google API \uc11c\ube44\uc2a4\ub97c \ub0b4\ubd80 IP \uc8fc\uc18c\ub85c \uc811\uadfc \uac00\ub2a5"),(0,n.kt)("li",{parentName:"ul"},"IAM \uc744 \ud1b5\ud55c \uad00\ub9ac"),(0,n.kt)("li",{parentName:"ul"},"\uacf5\uc720 VPC"),(0,n.kt)("li",{parentName:"ul"},"VPC \ub124\ud2b8\uc6cc\ud06c \ud53c\uc5b4\ub9c1 (\ub2e4\ub978 \ud504\ub85c\uc81d\ud2b8, \ub2e4\ub978 \uc870\uc9c1\uc758 VPC \ub124\ud2b8\uc6cc\ud06c \uc5f0\uacb0 \uac00\ub2a5)"),(0,n.kt)("li",{parentName:"ul"},"Cloud VPN/Cloud interconnect \ub97c \ud1b5\ud55c \ud558\uc774\ube0c\ub9ac\ub4dc \ud074\ub77c\uc6b0\ub4dc \ud658\uacbd \uc9c0\uc6d0"),(0,n.kt)("li",{parentName:"ul"},"IPv4 \uc720\ub2c8\uce90\uc2a4\ud2b8 \ud2b8\ub798\ud53d\ub9cc \uc9c0\uc6d0"),(0,n.kt)("li",{parentName:"ul"},"\ud504\ub85c\uc81d\ud2b8\ub294 predefied default \ub124\ud2b8\uc6cc\ud06c\ub85c \uc2dc\uc791\ud558\uba70, \ucee4\uc2a4\ud140\uc744 \ud1b5\ud55c \ub124\ud2b8\uc6cc\ud06c \uc120\ud0dd \uac00\ub2a5")),(0,n.kt)("h2",{id:"network-and-subnet"},"Network and Subnet"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Region \uac1d\uccb4 \uc774\ubbc0\ub85c, \uc120\ud0dd\ud55c Region\uc5d0 \ub530\ub77c \uc0ac\uc6a9\uac00\ub2a5\ud55c \uc11c\ube0c\ub137\uc774 \uacb0\uc815\ub428"),(0,n.kt)("li",{parentName:"ul"},"\uc0dd\uc131 \ubaa8\ub4dc",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uc790\ub3d9 \ubaa8\ub4dc : Zone \ub9c8\ub2e4 \uc11c\ube0c\ub137\uc774 \ud558\ub098\uc529 \uc790\ub3d9 \uc0dd\uc131"),(0,n.kt)("li",{parentName:"ul"},"\ucee4\uc2a4\ud140 \ubaa8\ub4dc : \uac1c\ubc1c\uc790\uac00 \uc9c1\uc811 \uc11c\ube0c\ub137, IP \ubc94\uc704 \uc124\uc815"))),(0,n.kt)("li",{parentName:"ul"},"\uc11c\ube0c\ub137 \uae30\ubcf8 IP \uc8fc\uc18c \ubc94\uc704 \ucd5c\ub300 5\uac1c \uae4c\uc9c0 \uc815\uc758 \uac00\ub2a5 -> \ud604\uc7ac \uae30\uc900 \ud655\uc778 \ud544\uc694"),(0,n.kt)("li",{parentName:"ul"},"\uae30\ubcf8 IP \uc8fc\uc18c \ubc94\uc704",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"RFC 1918 CIDR"),(0,n.kt)("li",{parentName:"ul"},"VM \ub0b4\ubd80 IP \uc8fc\uc18c"),(0,n.kt)("li",{parentName:"ul"},"VM \ubcc4\uce6d IP \uc8fc\uc18c"),(0,n.kt)("li",{parentName:"ul"},"\ub0b4\ubd80 \ubd80\ud558 \ubd84\uc0b0\uae30\ub2a5\uc758 IP \uc8fc\uc18c\uc5d0 \uc0ac\uc6a9"))),(0,n.kt)("li",{parentName:"ul"},"\ubcf4\uc870 IP \uc8fc\uc18c \ubc94\uc704",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"RFC 1918 CIDR\uc5d0 \uadfc\uac70\ud558\uc5ec \ucd5c\ub300 5\uac1c\uae4c\uc9c0 \uc815\uc758 \uac00\ub2a5"),(0,n.kt)("li",{parentName:"ul"},"\ubcc4\uce6d IP \uc8fc\uc18c\uc5d0\ub9cc \uc0ac\uc6a9\ub428")))),(0,n.kt)("h2",{id:"\uc608\uc57d\ub41c-ip"},"\uc608\uc57d\ub41c IP"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Network : 10.1.2.0/24")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\uc5d0\uc57d\ub41c \uc8fc\uc18c"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\uc608\uc2dc"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\ub124\ud2b8\uc6cc\ud06c"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10.1.2.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\uae30\ubcf8 GW"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10.1.2.1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\ub05d\uc5d0\uc11c \ub450\ubc88\uc9f8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10.1.2.254")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\ube0c\ub85c\ub4dc\uce90\uc2a4\ud2b8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10.1.2.255")))),(0,n.kt)("h2",{id:"\uc790\ub3d9-\ubaa8\ub4dc-ip-\ubc94\uc704---\ud604\uc7ac-\ubc84\uc804-\uac80\uc99d-\ud544\uc694"},"\uc790\ub3d9 \ubaa8\ub4dc IP \ubc94\uc704 -> \ud604\uc7ac \ubc84\uc804 \uac80\uc99d \ud544\uc694"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc0dd\uc131 \uc2dc\uc810\uc5d0 Zone\ub2f9 \ud558\ub098\uc758 Subnet\uc73c\ub85c \uad6c\ucd95 \ub428"),(0,n.kt)("li",{parentName:"ul"},"\uc0c8 \uc9c0\uc5ed\uc5d0\uc11c \uc790\ub3d9\uc73c\ub85c \uc0c8 \uc11c\ube0c\ub137\uc744 \ubc1b\uc74c")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Zone"),(0,n.kt)("th",{parentName:"tr",align:"left"},"CIDR"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default GW"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"asia-east1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10.140.0.0/20"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10.140.0.1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"asia-east2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10.170.0.0/20"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10.170.0.1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"asia-northeast1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10.146.0.0/20"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10.146.0.1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"asia-south1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10.160.0.0/20"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10.160.0.1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"asia-southeast1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10.148.0.0/20"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10.148.0.1")))),(0,n.kt)("h2",{id:"firewall"},"Firewall"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"VPC Network Level\uc5d0\uc11c \uc815\uc758\ub428, \uaddc\uce59 \uc790\uccb4\ub294 \ub124\ud2b8\uc6cc\ud06c \uac04\uc5d0 \uacf5\uc720 \ub420 \uc218 \uc5c6\uc74c"),(0,n.kt)("li",{parentName:"ul"},"IPv4 \ud2b8\ub798\ud53d\ub9cc \uc9c0\uc6d0, CIDR \ud45c\uae30\ubc95 \uc0ac\uc6a9"),(0,n.kt)("li",{parentName:"ul"},"Allow or Deny"),(0,n.kt)("li",{parentName:"ul"},"Ingress or Egress \ud2b8\ub798\ud53d \ubaa8\ub450\uc5d0 \uc801\uc6a9\ub418\ub3c4\ub85d \uc815\uc758"),(0,n.kt)("li",{parentName:"ul"},"\uad6c\uc131 \uc694\uc18c",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uc6b0\uc120\uc21c\uc704 : 0 ~ 65535, Integer (default : 1000, \ub0ae\uc744 \uc218\ub85d \uc6b0\uc120\uc21c\uc704\uac00 \ub192\uc74c)"),(0,n.kt)("li",{parentName:"ul"},"Traffic Direction : Egress / Ingress"),(0,n.kt)("li",{parentName:"ul"},"Action : Allow / Deny"),(0,n.kt)("li",{parentName:"ul"},"Enable / Disable"),(0,n.kt)("li",{parentName:"ul"},"target : \ub124\ud2b8\uc6cc\ud06c\uc758 \ubaa8\ub4e0 \uc778\uc2a4\ud134\uc2a4, \ub300\uc0c1 \ud0dc\uadf8\ubcc4 \uc778\uc2a4\ud134\uc2a4, \ub300\uc0c1 \uc11c\ube44\uc2a4 \uacc4\uc815\ubcc4 \uc778\uc2a4\ud134\uc2a4"),(0,n.kt)("li",{parentName:"ul"},"source : ingress \uc5d0\ub9cc \uc801\uc6a9 (default : 0.0.0.0/0)"),(0,n.kt)("li",{parentName:"ul"},"destination : egress \uc5d0\ub9cc \uc801\uc6a9 (default : 0.0.0.0/0)"),(0,n.kt)("li",{parentName:"ul"},"protocol : \ud2b9\uc815 \ud504\ub85c\ud1a0\ucf5c / \ud3ec\ud2b8 (e.g. tcp, udp, icmp, tcp:3000 ...)"))),(0,n.kt)("li",{parentName:"ul"},"\ubc29\ud654\ubcbd \uaddc\uce59 e.g.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\uc6b0\uc120\uc21c\uc704"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\ubc29\ud5a5"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\uc791\uc5c5"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\uc801\uc6a9"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\ub300\uc0c1"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\uc18c\uc2a4"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\ub300\uc0c1"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\ud504\ub85c\ud1a0\ucf5c/\ud3ec\ud2b8"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ingress"),(0,n.kt)("td",{parentName:"tr",align:"left"},"allow"),(0,n.kt)("td",{parentName:"tr",align:"left"},"enabled"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\ud2b8\ub798\ud53d\uc744 \uc218\uc2e0\ud558\ub294 \uc778\uc2a4\ud134\uc2a4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.0.0.0/0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,n.kt)("td",{parentName:"tr",align:"left"},"tcp:80")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"egress"),(0,n.kt)("td",{parentName:"tr",align:"left"},"allow"),(0,n.kt)("td",{parentName:"tr",align:"left"},"enabled"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\ud2b8\ub798\ud53d\uc744 \uc1a1\uc2e0\ud558\ub294 \uc778\uc2a4\ud134\uc2a4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.0.0.0/0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"icmp")))),(0,n.kt)("h2",{id:"routing"},"Routing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc790\ub3d9\uc0dd\uc131 \uacbd\ub85c : \ub124\ud2b8\uc6cc\ud06c \uc0dd\uc131 / \uc11c\ube0c\ub137 \ucd94\uac00 / \uc11c\ube0c\ub137 \ubcf4\uc870 IP \uc218\uc815\uc758 \uacbd\uc6b0, \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uc790\ub3d9\uc73c\ub85c \uc0dd\uc131\ub418\ub294 \uacbd\ub85c"),(0,n.kt)("li",{parentName:"ul"},"\ucee4\uc2a4\ud140 \uacbd\ub85c : \uc0ac\uc6a9\uc790\uac00 \uc9c1\uc811 \ub610\ub294 Cloud Route\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub9cc\ub4e4\uace0 \uc720\uc9c0 \ubc0f \uad00\ub9ac\ud558\ub294 \uacbd\ub85c"),(0,n.kt)("li",{parentName:"ul"},"\uc720\ud615",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uc2dc\uc2a4\ud15c \uc0dd\uc131",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uae30\ubcf8 \uacbd\ub85c"),(0,n.kt)("li",{parentName:"ul"},"\uc11c\ube0c\ub137 \uacbd\ub85c"))),(0,n.kt)("li",{parentName:"ul"},"\ucee4\uc2a4\ud140 \uc0dd\uc131",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uc815\uc801 \uacbd\ub85c"),(0,n.kt)("li",{parentName:"ul"},"\ub3d9\uc801 \uacbd\ub85c")))))),(0,n.kt)("h2",{id:"routing---\uae30\ubcf8-\uacbd\ub85c"},"Routing - \uae30\ubcf8 \uacbd\ub85c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"VPC \ub124\ud2b8\uc6cc\ud06c \uc0dd\uc131\uc758 \uacbd\uc6b0, GCP \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uc790\ub3d9\uc73c\ub85c \uae30\ubcf8 \uacbd\ub85c\ub97c \ub9cc\ub4e4\uc5b4 \uc90c"),(0,n.kt)("li",{parentName:"ul"},"VPC \ub124\ud2b8\uc6cc\ud06c\uc5d0\uc11c \ub098\uac00\ub294 \uacbd\ub85c"),(0,n.kt)("li",{parentName:"ul"},"\uae30\ubcf8 \uc6b4\uc120\uc21c\uc704 : 1000")),(0,n.kt)("h2",{id:"routing---\uc11c\ube0c\ub137-\uacbd\ub85c"},"Routing - \uc11c\ube0c\ub137 \uacbd\ub85c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"VPC \ub124\ud2b8\uc6cc\ud06c \uc11c\ube0c\ub137\uc73c\ub85c \uac00\ub294 \uacbd\ub85c"),(0,n.kt)("li",{parentName:"ul"},"\uac01 \uc11c\ube0c\ub137\uc740 \ub300\uc0c1 \uc704\uce58\uac00 \uc11c\ube10\ub137 \ub0b4\uc758 IP\ub97c \ud558\ub098 \uc774\uc0c1 \uac00\uc9c0\uac8c \ub428"),(0,n.kt)("li",{parentName:"ul"},"\uc11c\ube0c\ub137\uc758 \ubcf4\uc870 IP \ubc94\uc704\uac00 \uc788\ub294 \uacbd\uc6b0, GCP\ub294 \uac01 \ubcf4\uc870 \ubc94\uc704\uc5d0 \ub300\ud574 \ud574\ub2f9\ud558\ub294 \uc704\uce58\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc11c\ube0c\ub137 \uacbd\ub85c\ub97c \ub9cc\ub4e6")),(0,n.kt)("h2",{id:"routing---\ucee4\uc2a4\ud140-\uc815\uc801-\uacbd\ub85c"},"Routing - \ucee4\uc2a4\ud140 \uc815\uc801 \uacbd\ub85c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc774\ub984"),(0,n.kt)("li",{parentName:"ul"},"\ub124\ud2b8\uc6cc\ud06c"),(0,n.kt)("li",{parentName:"ul"},"\ub300\uc0c1 \ubc94\uc704"),(0,n.kt)("li",{parentName:"ul"},"\uc6b0\uc120 \uc21c\uc758"),(0,n.kt)("li",{parentName:"ul"},"\ub2e4\uc74c \ud649"),(0,n.kt)("li",{parentName:"ul"},"\ud0dc\uadf8")),(0,n.kt)("h2",{id:"routing---\ucee4\uc2a4\ud140-\ub3d9\uc801-\uacbd\ub85c"},"Routing - \ucee4\uc2a4\ud140 \ub3d9\uc801 \uacbd\ub85c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ub300\uc0c1 \uc704\uce58\ub294 \ud56d\uc0c1 VPC \ub124\ud2b8\uc6cc\ud06c \uc678\ubd80\uc758 IP \ubc94\uc704\ub97c \ub098\ud0c0\ub0b4\uba70, \ub2e4\uc74c \ud649\uc740 \ud56d\uc0c1 BGP \ud53c\uc5b4 \uc8fc\uc18c")),(0,n.kt)("h2",{id:"forwarding-rule"},"Forwarding Rule"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ubd80\ud558 \ubd84\uc0b0 / \ud504\ub85c\ud1a0\ucf5c \uc804\ub2ec \uae30\ub2a5 \uc9c0\uc6d0"),(0,n.kt)("li",{parentName:"ul"},"\ub300\uc0c1",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ub85c\ub4dc \ubc38\ub7f0\uc2f1 \ud480"),(0,n.kt)("li",{parentName:"ul"},"\ub300\uc0c1 \uc778\uc2a4\ud134\uc2a4"))),(0,n.kt)("li",{parentName:"ul"},"\ud504\ub85c\uc81d\ud2b8 \ubcc4, \ucd5c\ub300 50\uac1c \uae4c\uc9c0 \uc0dd\uc131 \uac00\ub2a5"),(0,n.kt)("li",{parentName:"ul"},"\uae30\ubcf8 TCP"),(0,n.kt)("li",{parentName:"ul"},"\ud3ec\ud2b8 \ubc94\uc704\uc758 \uc0ac\uc6a9\uc740 TCP, UDP, SCTP \ud504\ub85c\ud1a0\ucf5c \uc5d0\uc11c\ub9cc \uc9c0\uc815\ud560 \uc218 \uc788\uc74c")),(0,n.kt)("h2",{id:"ip-\uc8fc\uc18c"},"IP \uc8fc\uc18c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uace0\uc815 \uc678\ubd80 IP \uc8fc\uc18c",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uc678\ubd80 IP \uc8fc\uc18c\ub97c \uc774\uc6a9\ud560 \uacbd\uc6b0, \ubc1c\uc2e0\uc790\uac00 \ub3d9\uc77c\ud55c VPC \ub124\ud2b8\uc6cc\ud06c\uc5d0 \uc788\ub354\ub77c\ub3c4, \ucd94\uac00 \uccad\uad6c \uc694\uae08\uc774 \ubc1c\uc0dd \uac00\ub2a5"),(0,n.kt)("li",{parentName:"ul"},"\uace0\uc815 \uc678\ubd80 IP \uc8fc\uc18c : \uc804\uc5ed \ubd80\ud558 \ubd84\uc0b0\uc2dc\uc5d0\ub294 \uace0\uc815 \uc678\ubd80 IP \uc8fc\uc18c\ub9cc \uc0ac\uc6a9 \uac00\ub2a5"),(0,n.kt)("li",{parentName:"ul"},"\uc784\uc2dc \uc678\ubd80 IP \uc8fc\uc18c"))),(0,n.kt)("li",{parentName:"ul"},"\uc784\uc2dc \uc678\ubd80 IP \uc8fc\uc18c",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ub9ac\uc18c\uc2a4\uc758 \uc218\uba85 \ub3d9\uc548\ub9cc \uc9c0\uc18d\uc774 \ub418\ub294 IP"),(0,n.kt)("li",{parentName:"ul"},"\uc678\ubd80 IP \uad00\ub828\ud558\uc5ec \ubcc4 \ub2e4\ub978 \uc124\uc815\uc744 \ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0, \uc790\ub3d9\uc73c\ub85c \uc784\uc2dc \uc678\ubd80 IP \uc8fc\uc18c\ub85c \uc124\uc815 \ub428"))),(0,n.kt)("li",{parentName:"ul"},"\ub0b4\ubd80 IP \uc8fc\uc18c",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uace0\uc815 \ub0b4\ubd80 IP \uc8fc\uc18c"),(0,n.kt)("li",{parentName:"ul"},"\uc784\uc2dc \ub0b4\ubd80 IP \uc8fc\uc18c : \ub9ac\uc18c\uc2a4\uac00 \uc911\uc9c0\ub418\uc5c8\ub2e4\uac00 \uc7ac\uc2dc\uc791\ub420 \uacbd\uc6b0 \uc0c8\ub85c\uc6b4 \uc784\uc2dc IP \uc8fc\uc18c\ub85c \ubc14\ub01c")))),(0,n.kt)("h2",{id:"\ubcc4\uce6d-alias-ip-\ubc94\uc704"},"\ubcc4\uce6d (alias) IP \ubc94\uc704"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"e.g. my-team : 192.168.0.2 ~ 192.168.0.254"),(0,n.kt)("li",{parentName:"ul"},"\ud558\ub098\uc758 VM \uc5d0\uc11c \uc5ec\ub7ec \uc11c\ube44\uc2a4\ub97c \uc2e4\ud589\ud558\uace0 \uc788\uc5b4\uc11c \uac01 \uc11c\ube44\uc2a4\uc5d0 \uc11c\ub85c \ub2e4\ub978 IP \uc8fc\uc18c\ub97c \ud560\ub2f9 \ud558\uace0\uc790 \ud560 \uacbd\uc6b0 \uc720\uc6a9"),(0,n.kt)("li",{parentName:"ul"},"Google Kubernetes Engine Pods \uc5d0\uc11c\ub3c4 \ub3d9\uc791 \ud568")),(0,n.kt)("h2",{id:"\ub2e4\uc911-\ub124\ud2b8\uc6cc\ud06c-\uc778\ud130\ud398\uc774\uc2a4"},"\ub2e4\uc911 \ub124\ud2b8\uc6cc\ud06c \uc778\ud130\ud398\uc774\uc2a4"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec \ub124\ud2b8\uc6cc\ud06c \uc778\ud130\ud398\uc774\uc2a4\ub97c \ud1b5\ud574 \ub124\ud2b8\uc6cc\ud06c VM\uc774 \ub2e4\ub978 VPC \ub124\ud2b8\uc6cc\ud06c \uac04 \ub610\ub294 \uc778\ud130\ub137 \uac04 \ud2b8\ub798\ud53d\uc744 \ubcf4\ud638\ud558\ub294 \uac8c\uc774\ud2b8\uc6e8\uc774 \uc5ed\ud560")),(0,n.kt)("h2",{id:"\uacf5\uc720-vpc"},"\uacf5\uc720 VPC"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec \ud504\ub85c\uc81d\ud2b8\uc758 \ub9ac\uc18c\uc2a4\ub97c \uacf5\ud1b5 VPC\uc5d0 \uc5f0\uacb0 \uac00\ub2a5"),(0,n.kt)("li",{parentName:"ul"},"\ub124\ud2b8\uc6cc\ud06c\uc758 \ub0b4\ubd80 IP\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc11c\ub85c \uc548\uc804\ud558\uace0 \ud6a8\uc728\uc801\uc73c\ub85c \ud1b5\uc2e0 \uac00\ub2a5"),(0,n.kt)("li",{parentName:"ul"},"Host Project",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Host Project\uc758 VPC Network\ub97c \uacf5\uc720 VPC Network \ub77c\uace0 \ud558\uba70, \uc678\uc758 \ub2e4\ub978 \ud504\ub85c\uc81d\ud2b8\ub4e4\uc744 Service Project \ub77c\uace0 \ud568"))),(0,n.kt)("li",{parentName:"ul"},"\uc911\uc559 \uc9d1\uc911\uc2dd\uc73c\ub85c \uad00\ub9ac \ud560 \ub54c \uc720\uc6a9")),(0,n.kt)("h2",{id:"vpc-\ub124\ud2b8\uc6cc\ud06c-\ud53c\uc5b4\ub9c1"},"VPC \ub124\ud2b8\uc6cc\ud06c \ud53c\uc5b4\ub9c1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 \ud1b5\uc2e0\uc774 private RFC 1918 IP \uc8fc\uc18c\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc774\ub8e8\uc5b4 \uc9d0 (\uc678\ubd80 IP \uc8fc\uc18c\ub97c \uc774\uc6a9\ud558\uc9c0 \uc54a\uace0\ub3c4 \uc11c\ub85c \ud1b5\uc2e0 \uac00\ub2a5)"),(0,n.kt)("li",{parentName:"ul"},"\uc800 \uc9c0\uc5f0"),(0,n.kt)("li",{parentName:"ul"},"\uc11c\ube44\uc2a4 \uacf5\uac1c \uc704\ud5d8\uc131 \uc800\ud558 "),(0,n.kt)("li",{parentName:"ul"},"\ub124\ud2b8\uc6cc\ud06c \ucd94\uac00 \ube44\uc6a9 \uc808\uc57d")),(0,n.kt)("h2",{id:"cloud-vpn"},"Cloud VPN"),(0,n.kt)("p",null,"\uac00\uc0c1\uc758 \uc0ac\uc124 \ub124\ud2b8\uc6cc\ud06c\ub97c \ud1b5\ud574 \ubb3c\ub9ac\uc801 \uc628\ud504\ub808\ubbf8\uc2a4 \ub124\ud2b8\uc6cc\ud06c \ub610\ub294 \ub2e4\ub978 \ubca4\ub354\uc758 \ud074\ub77c\uc6b0\ub4dc \uc11c\ube44\uc2a4\uc640 \uc5f0\uacb0 \uac00\ub2a5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"IPSec \uc774\uc6a9 (Tunneling)"),(0,n.kt)("li",{parentName:"ul"},"Onpremise <-> VPC Network")),(0,n.kt)("h2",{id:"cloud-interconnect-interconnect"},"Cloud Interconnect (Interconnect)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uace0\uc18d\uc758 \ubb3c\ub9ac\uc801 \uc5f0\uacb0"),(0,n.kt)("li",{parentName:"ul"},"Private Network <-> Google Network"),(0,n.kt)("li",{parentName:"ul"},"Private Network <-> ISP <-> Google Network")))}o.isMDXComponent=!0}}]);