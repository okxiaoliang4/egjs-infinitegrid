"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5815],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(n),d=i,m=f["".concat(u,".").concat(d)]||f[d]||l[d]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1537:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={custom_edit_url:null},u=void 0,p={unversionedId:"api/withInfiniteGridMethods",id:"api/withInfiniteGridMethods",title:"withInfiniteGridMethods",description:"\ud504\ub808\uc784\uc6cc\ud06c\uc5d0\uc11c InfiniteGrid\uc758 \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ud558\ub294 \ub370\ucf54\ub808\uc774\ud130.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api/withInfiniteGridMethods.mdx",sourceDirName:"api",slug:"/api/withInfiniteGridMethods",permalink:"/egjs-infinitegrid/ko/docs/next/api/withInfiniteGridMethods",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"Component",permalink:"/egjs-infinitegrid/ko/docs/next/api/Component"},next:{title:"FrameInfiniteGridOptions",permalink:"/egjs-infinitegrid/ko/docs/next/api/FrameInfiniteGridOptions"}},s={},l=[],f={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const withInfiniteGridMethods\n")),(0,o.kt)("div",null),(0,o.kt)("p",null,"\ud504\ub808\uc784\uc6cc\ud06c\uc5d0\uc11c InfiniteGrid\uc758 \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ud558\ub294 \ub370\ucf54\ub808\uc774\ud130."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { withInfiniteGridMethods } from "@egjs/infinitegrid";\n\nclass Grid extends React.Component<Partial<InfiniteGridProps & InfiniteGridOptions>> {\n  &#64;withInfiniteGridMethods\n  private grid: NativeGrid;\n}\n')))}d.isMDXComponent=!0}}]);