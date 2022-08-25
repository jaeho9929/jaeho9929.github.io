"use strict";(self.webpackChunkjaeho_9929_github_io=self.webpackChunkjaeho_9929_github_io||[]).push([[8100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(n),k=l,g=c["".concat(o,".").concat(k)]||c[k]||m[k]||r;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:l,i[1]=u;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>u,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const r={slug:"gcp-5",title:"Compute Engine",authors:["jay"],tags:["cloud","gcp"]},i=void 0,u={permalink:"/gcp-5",source:"@site/blog/2022-08-21-gcp-5-6/2022-08-21-gcp-5.md",title:"Compute Engine",description:"What is Compute Engine",date:"2022-08-21T00:00:00.000Z",formattedDate:"2022\ub144 8\uc6d4 21\uc77c",tags:[{label:"cloud",permalink:"/tags/cloud"},{label:"gcp",permalink:"/tags/gcp"}],readingTime:5.39,hasTruncateMarker:!1,authors:[{name:"jay.prog",title:"\ud558\ub8e8\ud0a4 \ud504\ub85c\uc81d\ud2b8 \uad00\ub9ac\uc790",url:"https://github.com/jaeho9929",imageURL:"https://github.com/jaeho9929.png",key:"jay"}],frontMatter:{slug:"gcp-5",title:"Compute Engine",authors:["jay"],tags:["cloud","gcp"]},prevItem:{title:"Oauth2 with Spring Security",permalink:"/oauth2"},nextItem:{title:"Virtual Private Cloud",permalink:"/gcp-6"}},o={authorsImageUrls:[void 0]},p=[{value:"What is Compute Engine",id:"what-is-compute-engine",level:2},{value:"VM Instance",id:"vm-instance",level:2},{value:"Machine \uc720\ud615",id:"machine-\uc720\ud615",level:2},{value:"Live Migration",id:"live-migration",level:2},{value:"Preemptive VM Instances",id:"preemptive-vm-instances",level:2},{value:"Instance Template",id:"instance-template",level:2},{value:"Instance Group",id:"instance-group",level:2},{value:"Managed Instance Group",id:"managed-instance-group",level:3},{value:"Unmanaged Instance Group",id:"unmanaged-instance-group",level:3},{value:"Global reousces (\uc804\uc5ed \ub9ac\uc18c\uc2a4)",id:"global-reousces-\uc804\uc5ed-\ub9ac\uc18c\uc2a4",level:2},{value:"Region resources (\uc9c0\uc5ed \ub9ac\uc18c\uc2a4)",id:"region-resources-\uc9c0\uc5ed-\ub9ac\uc18c\uc2a4",level:2},{value:"Zone resources (\uc601\uc5ed \ub9ac\uc18c\uc2a4)",id:"zone-resources-\uc601\uc5ed-\ub9ac\uc18c\uc2a4",level:2},{value:"\uc120\uc810\ud615 \uc778\uc2a4\ud134\uc2a4 \uc885\ub8cc \uc2a4\ud06c\ub9bd\ud2b8 \uc2e4\ud589 \uacfc\uc815",id:"\uc120\uc810\ud615-\uc778\uc2a4\ud134\uc2a4-\uc885\ub8cc-\uc2a4\ud06c\ub9bd\ud2b8-\uc2e4\ud589-\uacfc\uc815",level:2}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"what-is-compute-engine"},"What is Compute Engine"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"AWS\uc758 EC2\uc5d0 \ud574\ub2f9\ud558\ub294 \uc11c\ube44\uc2a4"),(0,l.kt)("li",{parentName:"ul"},"\ub124\ud2b8\uc6cc\ud06c\uc5d0 \uc5f0\uacb0\ub41c \uac00\uc0c1 \uc11c\ubc84\ub97c \uc81c\uacf5, \ubd80\ud558 \ubd84\uc0b0 \ud074\ub77c\uc6b0\ub4dc \ucef4\ud4e8\ud305\uc73c\ub85c \ud655\uc7a5 \uac00\ub2a5")),(0,l.kt)("h2",{id:"vm-instance"},"VM Instance"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uac01\uac01\uc758 Instance\ub294 GCP \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc18d\ud558\uba70, \ud558\ub098\uc758 \ud504\ub85c\uc81d\ud2b8\uc5d0\ub294 \uc5ec\ub7ec\uac1c\uc758 \uc778\uc2a4\ud134\uc2a4\ub97c \uac00\uc9c8 \uc218 \uc788\uc74c"),(0,l.kt)("li",{parentName:"ul"},"\ud504\ub85c\uc81d\ud2b8\ub97c \uc0ad\uc81c\ud558\uba74 \uc18d\ud55c \uc778\uc2a4\ud134\uc2a4\ub3c4 \ud568\uaed8 \uc0ad\uc81c \ub428"),(0,l.kt)("li",{parentName:"ul"},"\ud504\ub85c\uc81d\ud2b8\uc5d0\ub294 \ucd5c\ub300 5\uac1c\uc758 VPC \ub124\ud2b8\uc6cc\ud06c\ub97c \uac00\uc9c8 \uc218 \uc788\uc74c"),(0,l.kt)("li",{parentName:"ul"},"Compute Engine\uc740 \ud558\ub098\uc758 VPC \ub124\ud2b8\uc6cc\ud06c\uc5d0 \uc18d\ud558\uac8c \ub428"),(0,l.kt)("li",{parentName:"ul"},"\ucee8\ud130\uc774\ub108\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub9cc\ub4e4 \uc218 \uc788\ub294 \uc635\uc158 \uc9c0\uc6d0, \ub3c4\ucee4 \uc774\ubbf8\uc9c0\ub85c \uc2dc\uc791 \uac00\ub2a5"),(0,l.kt)("li",{parentName:"ul"},"Google Cloud Platform, gcloud CLI, REST API, Mobile application \ub4f1\uc744 \uc774\uc6a9\ud558\uc5ec \uad00\ub9ac \uac00\ub2a5")),(0,l.kt)("h2",{id:"machine-\uc720\ud615"},"Machine \uc720\ud615"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Predefined"),(0,l.kt)("li",{parentName:"ul"},"Custom")),(0,l.kt)("h2",{id:"live-migration"},"Live Migration"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc18c\ud504\ud2b8\uc6e8\uc5b4 \ub610\ub294 \ud558\ub4dc\uc6e8\uc5b4 \uc5c5\ub370\uc774\ud2b8\uc640 \uac19\uc740 \ud638\uc2a4\ud2b8 \uc2dc\uc2a4\ud15c \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd \ud558\ub354\ub77c\ub3c4 \uc778\uc2a4\ud134\uc2a4\ub97c \uc885\ub8cc \ubc0f \uc7ac\ubd80\ud305 \ud560 \ud544\uc694 \uc5c6\uc774 \uacc4\uc18d \uc2e4\ud589"),(0,l.kt)("li",{parentName:"ul"},"\ud558\ub4dc\uc6e8\uc5b4 \uace0\uc7a5 \ub4f1\uc73c\ub85c Live Migration\uc774 \ubd88\uac00\ub2a5\ud55c \uacbd\uc6b0, VM\uc774 \ub2e4\uc6b4 \ub418\uace0 hostError\uac00 \ub85c\uae45 \ub428")),(0,l.kt)("h2",{id:"preemptive-vm-instances"},"Preemptive VM Instances"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GCP \ub0b4\uc5d0\uc11c \uc544\ubb34\ub3c4 \uc0ac\uc6a9\ud558\uace0 \uc788\uc9c0 \uc54a\uc740 \ub9ac\uc18c\uc2a4\ub97c \uc0ac\uc6a9 -> \uc77c\ubc18 \uc778\uc2a4\ud134\uc2a4 \ubcf4\ub2e4 \ud6e8\uc52c \uc800\ub834\ud55c \uac00\uaca9\uc73c\ub85c \uc2e4\ud589 \uac00\ub2a5"),(0,l.kt)("li",{parentName:"ul"},"Compute Engine\uc740 24 \uc2dc\uac04 \ub3d9\uc548 \uc2e4\ud589\ud55c \ud6c4 \uc885\ub8cc"),(0,l.kt)("li",{parentName:"ul"},"Live Migration\uc744 \uc9c0\uc6d0\ud558\uc9c0 \ubabb \ud560 \uc218\ub3c4 \uc788\uc74c"),(0,l.kt)("li",{parentName:"ul"},"Google Compute Engine SLA \uc5d0\uc11c \uc81c\uc678 \ub428")),(0,l.kt)("h2",{id:"instance-template"},"Instance Template"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub3d9\uc77c\ud55c \uad6c\uc131\uc758 \uc778\uc2a4\ud134\uc2a4\ub97c \uc5ec\ub7ec\uac1c \ub9cc\ub4e4\uae30 \uc704\ud55c \ubaa9\uc801")),(0,l.kt)("h2",{id:"instance-group"},"Instance Group"),(0,l.kt)("h3",{id:"managed-instance-group"},"Managed Instance Group"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ubcc4 \ub2e4\ub978 \uc124\uc815 \uc5c6\uc774 \uc624\ud1a0 \uc2a4\ucf00\uc77c\ub9c1 \uc9c0\uc6d0"),(0,l.kt)("li",{parentName:"ul"},"\uc790\ub3d9 \ubcf5\uad6c \uc815\ucc45 \uc124\uc815 \uac00\ub2a5"),(0,l.kt)("li",{parentName:"ul"},"\ub85c\ub4dc \ubc38\ub7f0\uc11c\ub97c \ubd99\uc5ec\uc11c \uadf8\ub8f9\uc758 \ubaa8\ub4e0 \uc778\uc2a4\ud134\uc2a4\uc5d0 \ud2b8\ub798\ud53d \ubd84\uc0b0 \uac00\ub2a5"),(0,l.kt)("li",{parentName:"ul"},"\uce74\ub098\ub9ac\uc544 \uc5c5\ub370\uc774\ud2b8, \ub864\ub9c1 \uc5c5\ub370\uc774\ud2b8 \ub4f1\uc758 \uc720\uc5f0\ud55c \ub864\uc544\uc6c3 \uc2dc\ub098\ub9ac\uc624 \uc9c0\uc6d0"),(0,l.kt)("li",{parentName:"ul"},"\ubc30\ud3ec\uc18d\ub3c4, \ubc94\uc704, \uc11c\ube44\uc2a4 \uc911\ub2e8 \uc218\uc900 \uc81c\uc5b4 \uac00\ub2a5"),(0,l.kt)("li",{parentName:"ul"},"\uc601\uc5ed(Zone) \uad00\ub9ac\ud615 \uc778\uc2a4\ud134\uc2a4 \uadf8\ub8f9 : \ub2e8\uc77c \uc601\uc5ed\uc5d0 \uc778\uc2a4\ud134\uc2a4 \ubc30\ud3ec"),(0,l.kt)("li",{parentName:"ul"},"\ub9ac\uc804(Region) \uad00\ub9ac\ud615 \uc778\uc2a4\ud134\uc2a4 \uadf8\ub8f9 : \ub3d9\uc778 \ub9ac\uc804 \ub0b4 \uc5ec\ub7ec \uc601\uc5ed\uc5d0 \ubc30\ud3ec"),(0,l.kt)("li",{parentName:"ul"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ubd80\ud558\ub97c \uc5ec\ub7ec \uc601\uc5ed\uc5d0 \ubd84\uc0b0 \uc2dc\ucf1c \ubcf4\ub2e4 \ub192\uc740 \uac00\uc6a9\uc131\uc744 \uc81c\uacf5 (\uc790\uc5f0\uc7ac\ud574 \ubb38\uc81c \ud68c\ud53c \ubc29\uc548)"),(0,l.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uc801\uc73c\ub85c \ub514\ud3f4\ud2b8 \ub124\ud2b8\uc6cc\ud06c\uc5d0 \ubc30\uce58\uac00 \ub418\uba70, \ub9ac\uc804 \ubc94\uc704\uc758 IP \uc8fc\uc18c\uac00 \ud560\ub2f9 \ub428 -> \ub354 \uc791\uc740 IP \ubc94\uc704\ub97c \uc0ac\uc6a9\ud558\ub824\uba74, \ucee4\uc2a4\ud140 \ubaa8\ub4dc VPC \ub124\ud2b8\uc6cc\ud06c\uc640 \uc11c\ube0c\ub137\uc744 \ub9cc\ub4e0 \ub2e4\uc74c \uc778\uc2a4\ud134\uc2a4 \ud15c\ud50c\ub9bf\uc5d0 \uc9c0\uc815\ud558\uc5ec \uadf8\ub8f9\uc758 IP \ubc94\uc704\ub97c \uc81c\ud55c \ud574\uc57c \ud568"),(0,l.kt)("li",{parentName:"ul"},"\ucee8\ud14c\uc774\ub108\ub97c \uc774\uc6a9\ud558\uc5ec \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ubc30\ud3ec\ub97c \uac04\uc18c\ud654 \ud560 \uc218 \uc788\uc74c"),(0,l.kt)("li",{parentName:"ul"},"\uc18d\ub3c4\ubcf4\ub2e4 \ube44\uc6a9\uc774 \uc911\uc694\ud55c \uc791\uc5c5\uc758 \uacbd\uc6b0 -> \uc778\uc2a4\ud134\uc2a4 \uadf8\ub8f9\uc5d0\uc11c \uc120\uc810\ud615 VM \uc778\uc2a4\ud134\uc2a4\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc791\uc5c5 \ubd80\ud558 \ube44\uc6a9 \uc808\uac10 \uac00\ub2a5")),(0,l.kt)("h3",{id:"unmanaged-instance-group"},"Unmanaged Instance Group"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc784\uc758\ub85c \ub2e4\ub978 \uad6c\uc131\uc744 \uac00\uc9c4 \uc778\uc2a4\ud134\uc2a4\ub97c \ucd94\uac00\ud558\uac70\ub098 \uc81c\uac70 \uac00\ub2a5"),(0,l.kt)("li",{parentName:"ul"},"\uc624\ud1a0 \uc2a4\ucf00\uc77c\ub9c1, \uc790\ub3d9 \ubcf5\uad6c, \ub864\ub9c1 \uc5c5\ub370\uc774\ud2b8 \uc9c0\uc6d0, \uc778\uc2a4\ud134\uc2a4 \ud15c\ud50c\ub9bf \uc0ac\uc6a9\uc740 ",(0,l.kt)("strong",{parentName:"li"},"\uc81c\uacf5\ud558\uc9c0 \uc54a\uc74c")),(0,l.kt)("li",{parentName:"ul"},"\uac00\uc1a1\uc131\uc774 \ub192\uace0 \ud655\uc7a5 \uac00\ub2a5\ud55c \uc791\uc5c5 \ubd80\ud558\ub97c \ubc30\ud3ec\ud558\ub294 \ub370\uc5d0\ub294 \uc801\ud569\ud558\uc9c0 \uc54a\uc74c")),(0,l.kt)("h2",{id:"global-reousces-\uc804\uc5ed-\ub9ac\uc18c\uc2a4"},"Global reousces (\uc804\uc5ed \ub9ac\uc18c\uc2a4)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub3d9\uc77c \ud504\ub85c\uc81d\ud2b8 \ub0b4\uc758 \ubaa8\ub4e0 \uc601\uc5ed\uc5d0 \uc788\ub294 \ubaa8\ub4e0 \ub9ac\uc18c\uc2a4\uac00 \uc811\uadfc \uac00\ub2a5"),(0,l.kt)("li",{parentName:"ul"},"Resources",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Address"),(0,l.kt)("li",{parentName:"ul"},"Images"),(0,l.kt)("li",{parentName:"ul"},"Snapshots (Disk Snapshots)"),(0,l.kt)("li",{parentName:"ul"},"Instance templates"),(0,l.kt)("li",{parentName:"ul"},"VPC network"),(0,l.kt)("li",{parentName:"ul"},"Firewalls"),(0,l.kt)("li",{parentName:"ul"},"Routes"),(0,l.kt)("li",{parentName:"ul"},"Global operations")))),(0,l.kt)("h2",{id:"region-resources-\uc9c0\uc5ed-\ub9ac\uc18c\uc2a4"},"Region resources (\uc9c0\uc5ed \ub9ac\uc18c\uc2a4)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub3d9\uc77c\ud55c \uc9c0\uc5ed \ub0b4\uc758 \ubaa8\ub4e0 \ub9ac\uc18c\uc2a4\uac00 \uc561\uc138\uc2a4 \uac00\ub2a5"),(0,l.kt)("li",{parentName:"ul"},"Resources",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Address"),(0,l.kt)("li",{parentName:"ul"},"Subnets"),(0,l.kt)("li",{parentName:"ul"},"Regional managed instance group"),(0,l.kt)("li",{parentName:"ul"},"Regional persistent disks"),(0,l.kt)("li",{parentName:"ul"},"Regional operations")))),(0,l.kt)("h2",{id:"zone-resources-\uc601\uc5ed-\ub9ac\uc18c\uc2a4"},"Zone resources (\uc601\uc5ed \ub9ac\uc18c\uc2a4)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc601\uc5ed\uc5d0\uc11c \ud638\uc2a4\ud305 \ub418\ub294 \ub9ac\uc18c\uc2a4, \uc601\uc5ed\ubcc4 \ub9ac\uc18c\uc2a4\ub294 \ud574\ub2f9 \uc601\uc5ed\uc5d0\uc11c \uace0\uc720\ud558\uba70 \ub3d9\uc77c\ud55c \uc601\uc5ed\uc758 \ub2e4\ub978 \ub9ac\uc18c\uc2a4\uc5d0\uc11c\ub9cc \uc0ac\uc6a9 \uac00\ub2a5"),(0,l.kt)("li",{parentName:"ul"},"Resources",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Instance"),(0,l.kt)("li",{parentName:"ul"},"Persistent disks"),(0,l.kt)("li",{parentName:"ul"},"Machine types"),(0,l.kt)("li",{parentName:"ul"},"Zonal managed instance group"),(0,l.kt)("li",{parentName:"ul"},"Per-zone operations")))),(0,l.kt)("h2",{id:"\uc120\uc810\ud615-\uc778\uc2a4\ud134\uc2a4-\uc885\ub8cc-\uc2a4\ud06c\ub9bd\ud2b8-\uc2e4\ud589-\uacfc\uc815"},"\uc120\uc810\ud615 \uc778\uc2a4\ud134\uc2a4 \uc885\ub8cc \uc2a4\ud06c\ub9bd\ud2b8 \uc2e4\ud589 \uacfc\uc815"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\uc2a4\ud06c\ub9bd\ud2b8 \ud30c\uc77c\uc744 \uc778\uc2a4\ud134\uc2a4\ub85c \ubcf5\uc0ac"),(0,l.kt)("li",{parentName:"ol"},"\uc2a4\ud06c\ub9bd\ud2b8 \ud30c\uc77c\uc5d0 \uad00\ud55c\uc744 \uc124\uc815\ud558\uc5ec \uc2e4\ud589 \uac00\ub2a5\ud558\uac8c \ub9cc\ub4e6"),(0,l.kt)("li",{parentName:"ol"},"\uc778\uc2a4\ud134\uc2a4\uac00 \uc885\ub8cc\ub418\uba74 \uc2a4\ud06c\ub9bd\ud2b8 \ud30c\uc77c\uc744 \uc2e4\ud589")))}m.isMDXComponent=!0}}]);