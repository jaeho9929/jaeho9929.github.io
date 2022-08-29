"use strict";(self.webpackChunkjaeho_9929_github_io=self.webpackChunkjaeho_9929_github_io||[]).push([[704],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var l=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=l.createContext({}),p=function(e){var t=l.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,d=s["".concat(u,".").concat(m)]||s[m]||g[m]||n;return r?l.createElement(d,o(o({ref:t},c),{},{components:r})):l.createElement(d,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<n;p++)o[p]=r[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4075:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>g,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var l=r(7462),a=(r(7294),r(3905));const n={slug:"gcp-8",title:"Google Cloud Storage",authors:["jay"],tags:["cloud","gcp"]},o=void 0,i={permalink:"/gcp-8",source:"@site/blog/2022-08-24-gcp-7-8/2022-08-24-gcp-8.md",title:"Google Cloud Storage",description:"Google Cloud Storage (GCS)",date:"2022-08-24T00:00:00.000Z",formattedDate:"2022\ub144 8\uc6d4 24\uc77c",tags:[{label:"cloud",permalink:"/tags/cloud"},{label:"gcp",permalink:"/tags/gcp"}],readingTime:.715,hasTruncateMarker:!1,authors:[{name:"jay.prog",title:"\ud558\ub8e8\ud0a4 \ud504\ub85c\uc81d\ud2b8 \uad00\ub9ac\uc790",url:"https://github.com/jaeho9929",imageURL:"https://github.com/jaeho9929.png",key:"jay"}],frontMatter:{slug:"gcp-8",title:"Google Cloud Storage",authors:["jay"],tags:["cloud","gcp"]},prevItem:{title:"Cloud Load Balancing, Auto Scaling",permalink:"/gcp-7"},nextItem:{title:"\ub85c\uadf8\uc778 \uc2dc\uc5d0 \uad6c\ud604\ud574\uc57c \ud560 \uc0ac\ud56d",permalink:"/login-impl"}},u={authorsImageUrls:[void 0]},p=[{value:"Google Cloud Storage (GCS)",id:"google-cloud-storage-gcs",level:2},{value:"Glossary",id:"glossary",level:2},{value:"Repository \ub4f1\uae09",id:"repository-\ub4f1\uae09",level:2},{value:"gsutil",id:"gsutil",level:2}],c={toc:p};function g(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,l.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"google-cloud-storage-gcs"},"Google Cloud Storage (GCS)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GCP\uc758 \ub300\ud45c\uc801\uc778 \uac1d\uccb4 Repository -> AWS S3")),(0,a.kt)("h2",{id:"glossary"},"Glossary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud504\ub85c\uc81d\ud2b8"),(0,a.kt)("li",{parentName:"ul"},"\ubc84\ud0b7 "),(0,a.kt)("li",{parentName:"ul"},"Repository \ub4f1\uae09"),(0,a.kt)("li",{parentName:"ul"},"\uac1d\uccb4"),(0,a.kt)("li",{parentName:"ul"},"\uc9c0\ub9ac\uc801 \uc911\ubcf5"),(0,a.kt)("li",{parentName:"ul"},"\uac1d\uccb4 \ubd88\ubcc0\uc131")),(0,a.kt)("h2",{id:"repository-\ub4f1\uae09"},"Repository \ub4f1\uae09"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Multi-Regional Storage : \ub192\uc740 \uac00\uc6a9\uc131, \uc9c0\ub9ac\uc801 \uc911\ubcf5 \uc81c\uacf5"),(0,a.kt)("li",{parentName:"ul"},"Regional Storage"),(0,a.kt)("li",{parentName:"ul"},"Nearline Storage"),(0,a.kt)("li",{parentName:"ul"},"Coldline Storage : \ub0ae\uc740 \uac00\uc6a9\uc131")),(0,a.kt)("h2",{id:"gsutil"},"gsutil"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CLI \ud658\uacbd\uc5d0\uc11c GCS\uc5d0 \uc811\uadfc \ud560 \uc218 \uc788\ub294 \uba85\ub839\uc5b4"),(0,a.kt)("li",{parentName:"ul"},"\uae30\ub2a5",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ubc84\ud0b7 \uc0dd\uc131 \ubc0f \uc0ad\uc81c"),(0,a.kt)("li",{parentName:"ul"},"\uac1d\uccb4 \uc5c5\ub85c\ub4dc, \ub2e4\uc6b4\ub85c\ub4dc, \uc0ad\uc81c"),(0,a.kt)("li",{parentName:"ul"},"\ubc84\ud0b7 \ubc0f \uac1d\uccb4 \ub098\uc5f4"),(0,a.kt)("li",{parentName:"ul"},"\uac1d\uccb4 \uc774\ub3d9, \ubcf5\uc0ac \ubc0f \uc774\ub984 \ubc14\uafb8\uae30"),(0,a.kt)("li",{parentName:"ul"},"\uac1d\uccb4 \ubc0f \ubc84\ud0b7\uc758 ACL \uc218\uc815"))),(0,a.kt)("li",{parentName:"ul"},"gs://",(0,a.kt)("em",{parentName:"li"},"bucket name"),"/",(0,a.kt)("em",{parentName:"li"},"object name"))))}g.isMDXComponent=!0}}]);