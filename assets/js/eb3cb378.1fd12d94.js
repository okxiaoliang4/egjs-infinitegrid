"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3102],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=c(n),s=a,f=m["".concat(l,".").concat(s)]||m[s]||u[s]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2688:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],p={custom_edit_url:null},l=void 0,c={unversionedId:"api/OnRenderComplete",id:"version-4.3.1/api/OnRenderComplete",title:"OnRenderComplete",description:"Type: TSInterface",source:"@site/versioned_docs/version-4.3.1/api/OnRenderComplete.mdx",sourceDirName:"api",slug:"/api/OnRenderComplete",permalink:"/egjs-infinitegrid/docs/api/OnRenderComplete",draft:!1,editUrl:null,tags:[],version:"4.3.1",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"OnRequestPrepend",permalink:"/egjs-infinitegrid/docs/api/OnRequestPrepend"},next:{title:"OnContentError",permalink:"/egjs-infinitegrid/docs/api/OnContentError"}},d={},u=[],m={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": TSInterface"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,i.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,i.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"currentTarget"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"InfiniteGrid"},"InfiniteGrid")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("p",null,"An InfiniteGrid instance that triggered this event. "))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"mounted"),(0,i.kt)("td",{parentName:"tr",align:"center"},"InfiniteGridItem[]"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("p",null,"The items rendered for the first time. "))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"updated"),(0,i.kt)("td",{parentName:"tr",align:"center"},"InfiniteGridItem[]"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("p",null,"The items updated in size. "))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"direction"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"start" ',"|",' "end"'),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("p",null,"The direction InfiniteGrid was rendered. "))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"isResize"),(0,i.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("p",null,"Whether rendering was done using the resize event or the useResize option. "))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"startCursor"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("p",null,"The key of the first group that has been rendered. "))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"endCursor"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("p",null,"The key of the last group that has been rendered. "))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"items"),(0,i.kt)("td",{parentName:"tr",align:"center"},"InfiniteGridItem[]"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("p",null,"Items that have been rendered. "))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"groups"),(0,i.kt)("td",{parentName:"tr",align:"center"},"InfiniteGridGroup[]"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("p",null,"Groups that have been rendered. "))))))}s.isMDXComponent=!0}}]);