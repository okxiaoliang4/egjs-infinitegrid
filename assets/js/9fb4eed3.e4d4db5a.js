"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6461],{9116:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(7896),a=(r(7294),r(3905));const i={custom_edit_url:null},p=void 0,o={unversionedId:"api/OnRequestAppend",id:"version-4.3.1/api/OnRequestAppend",title:"OnRequestAppend",description:"Type: TSInterface",source:"@site/versioned_docs/version-4.3.1/api/OnRequestAppend.mdx",sourceDirName:"api",slug:"/api/OnRequestAppend",permalink:"/egjs-infinitegrid/docs/4.3.1/api/OnRequestAppend",draft:!1,editUrl:null,tags:[],version:"4.3.1",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"InsertedPlaceholdersResult",permalink:"/egjs-infinitegrid/docs/4.3.1/api/InsertedPlaceholdersResult"},next:{title:"OnRequestPrepend",permalink:"/egjs-infinitegrid/docs/4.3.1/api/OnRequestPrepend"}},l={},c=[],d={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": TSInterface"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"currentTarget"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"InfiniteGrid"},"InfiniteGrid")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("p",null,"An InfiniteGrid instance that triggered this event. "))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"groupKey"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string ","|"," number ","|"," undefined"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("p",null,"Last group key. "))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"nextGroupKey"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string ","|"," number ","|"," undefined"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("p",null,"The key of the next group that should replace placeholders. "))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"isVirtual"),(0,a.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("p",null,"Whether to request virtual groups corresponding to placeholders. "))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"wait"),(0,a.kt)("td",{parentName:"tr",align:"center"},"() =",">"," void"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("p",null,"Set to standby to request data. "))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ready"),(0,a.kt)("td",{parentName:"tr",align:"center"},"() =",">"," void"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("p",null,"When the data request is complete, it is set to ready state. "))))))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,f=s["".concat(l,".").concat(m)]||s[m]||u[m]||i;return r?n.createElement(f,p(p({ref:t},d),{},{components:r})):n.createElement(f,p({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var c=2;c<i;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);