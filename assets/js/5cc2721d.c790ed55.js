"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8206],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(f,p(p({ref:t},u),{},{components:n})):r.createElement(f,p({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var c=2;c<i;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3648:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),p=["components"],o={custom_edit_url:null},l=void 0,c={unversionedId:"api/OnRequestAppend",id:"api/OnRequestAppend",isDocsHomePage:!1,title:"OnRequestAppend",description:"OnRequestAppend",source:"@site/docs/api/OnRequestAppend.mdx",sourceDirName:"api",slug:"/api/OnRequestAppend",permalink:"/egjs-infinitegrid/docs/next/api/OnRequestAppend",editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"InsertedPlaceholdersResult",permalink:"/egjs-infinitegrid/docs/next/api/InsertedPlaceholdersResult"},next:{title:"OnRequestPrepend",permalink:"/egjs-infinitegrid/docs/next/api/OnRequestPrepend"}},u=[{value:"OnRequestAppend",id:"OnRequestAppend",children:[]}],d={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"OnRequestAppend"},"OnRequestAppend"),(0,i.kt)("div",{className:"bulma-tags"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": TSInterface"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,i.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,i.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"currentTarget"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"InfiniteGrid"},"InfiniteGrid")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("p",null,"An InfiniteGrid instance that triggered this event. "))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"groupKey"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string ","|"," number ","|"," undefined"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("p",null,"Last group key. "))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"nextGroupKey"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string ","|"," number ","|"," undefined"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("p",null,"The key of the next group that should replace placeholders. "))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"isVirtual"),(0,i.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("p",null,"Whether to request virtual groups corresponding to placeholders. "))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"wait"),(0,i.kt)("td",{parentName:"tr",align:"center"},"() =",">"," void"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("p",null,"Set to standby to request data. "))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ready"),(0,i.kt)("td",{parentName:"tr",align:"center"},"() =",">"," void"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("p",null,"When the data request is complete, it is set to ready state. "))))))}s.isMDXComponent=!0}}]);