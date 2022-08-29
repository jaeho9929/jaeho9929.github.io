"use strict";(self.webpackChunkjaeho_9929_github_io=self.webpackChunkjaeho_9929_github_io||[]).push([[1601],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(r),k=n,N=s["".concat(o,".").concat(k)]||s[k]||m[k]||l;return r?a.createElement(N,p(p({ref:t},c),{},{components:r})):a.createElement(N,p({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,p=new Array(l);p[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var u=2;u<l;u++)p[u]=r[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3585:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const l={slug:"gcp-9",title:"Cloud SQL",authors:["jay"],tags:["cloud","gcp"]},p=void 0,i={permalink:"/gcp-9",source:"@site/blog/2022-08-25-gcp-9-10/2022-08-25-gcp-9.md",title:"Cloud SQL",description:"Cloud SQL",date:"2022-08-25T00:00:00.000Z",formattedDate:"2022\ub144 8\uc6d4 25\uc77c",tags:[{label:"cloud",permalink:"/tags/cloud"},{label:"gcp",permalink:"/tags/gcp"}],readingTime:1.175,hasTruncateMarker:!1,authors:[{name:"jay.prog",title:"\ud558\ub8e8\ud0a4 \ud504\ub85c\uc81d\ud2b8 \uad00\ub9ac\uc790",url:"https://github.com/jaeho9929",imageURL:"https://github.com/jaeho9929.png",key:"jay"}],frontMatter:{slug:"gcp-9",title:"Cloud SQL",authors:["jay"],tags:["cloud","gcp"]},prevItem:{title:"BigQuery",permalink:"/gcp-10"},nextItem:{title:"Cloud Load Balancing, Auto Scaling",permalink:"/gcp-7"}},o={authorsImageUrls:[void 0]},u=[{value:"Cloud SQL",id:"cloud-sql",level:2}],c={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"cloud-sql"},"Cloud SQL"),(0,n.kt)("p",null,"GCP \uc5d0\uc11c \uc720\uc9c0 \ubc0f \uad00\ub9ac\ub97c \ud574\uc8fc\ub294 \uc644\uc804 \uad00\ub9ac\ud615 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc11c\ube44\uc2a4"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"MySQL"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uc9c0\uc6d0\ub418\uc9c0 \uc54a\ub294 \uae30\ub2a5",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790 \uc815\uc758 \ud568\uc218"),(0,n.kt)("li",{parentName:"ul"},"InnoDB memcached \ud50c\ub7ec\uadf8\uc778"),(0,n.kt)("li",{parentName:"ul"},"Federated Engine"),(0,n.kt)("li",{parentName:"ul"},"SUPER \uad8c\ud55c"))),(0,n.kt)("li",{parentName:"ul"},"\uc9c0\uc6d0\ub418\uc9c0 \uc54a\ub294 \uba85\ub839\ubb38",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"LOAD DATA INFILE"),(0,n.kt)("li",{parentName:"ul"},"SELECT .. INTO OUTFILE"),(0,n.kt)("li",{parentName:"ul"},"INSTALL PLUGIN ..."),(0,n.kt)("li",{parentName:"ul"},"UNINSTALL PLUGIN ..."),(0,n.kt)("li",{parentName:"ul"},"CREATE FUNCTION ... SONAME ..."),(0,n.kt)("li",{parentName:"ul"},"CREATE TABLE ... SELECT"),(0,n.kt)("li",{parentName:"ul"},"CREATE TEMPORARY TABLE"),(0,n.kt)("li",{parentName:"ul"},"\ud2b8\ub79c\uc7ac\uc158 \ubc0f \ube44\ud2b8\ub79c\uc7ad\uc158 \ud14c\uc774\ube14\uc744 \ubaa8\ub450 \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \ud2b8\ub79c\uc7ad\uc158\uc774\ub098 \uba85\ub839\ubb38"))),(0,n.kt)("li",{parentName:"ul"},"\uc9c0\uc6d0\ub418\uc9c0 \uc54a\ub294 \ud568\uc218",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"LOAD_FILE()"))),(0,n.kt)("li",{parentName:"ul"},"\uc9c0\uc6d0\ub418\uc9c0 \uc54a\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8 \ud504\ub85c\uadf8\ub7a8",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"mysqlimport"),(0,n.kt)("li",{parentName:"ul"},"mysqldump with--tab option"),(0,n.kt)("li",{parentName:"ul"},"Only InnoDB support"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"PostgreSQL"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\uc544\uc9c1 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 \uae30\ub2a5 --\x3e \ud655\uc778 \ud544\uc694"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ud2b9\uc815 \uc2dc\uc810 \ubcf5\uad6c (PITR)"),(0,n.kt)("li",{parentName:"ul"},"CSV \ud615\uc2dd\uc73c\ub85c \uac00\uc838\uc624\uae30 \ubc0f \ub0b4\ubcf4\ub0b4\uae30"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\uc9c0\uc6d0\ub418\uc9c0 \uc54a\ub294 \uae30\ub2a5"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"SUPERUER \uad8c\ud55c\uc774 \ud544\uc694\ud55c \uae30\ub2a5 (except, CREATE EXTENSION)"),(0,n.kt)("li",{parentName:"ul"},"\ucee4\uc2a4\ud140 \ubc31\uadf8\ub77c\uc6b4\ub4dc \uc791\uc5c5\uc790")))))))}m.isMDXComponent=!0}}]);