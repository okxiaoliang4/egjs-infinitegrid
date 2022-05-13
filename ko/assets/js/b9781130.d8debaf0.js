"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1366],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=r.createContext({}),s=function(t){var e=r.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=s(t.components);return r.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},o=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),o=s(n),c=a,g=o["".concat(d,".").concat(c)]||o[c]||k[c]||l;return n?r.createElement(g,i(i({ref:e},m),{},{components:n})):r.createElement(g,i({ref:e},m))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=o;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}o.displayName="MDXCreateElement"},1937:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return k}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],p={custom_edit_url:null},d=void 0,s={unversionedId:"api/Grid",id:"version-4.1.1/api/Grid",title:"Grid",description:"PropertiesMethodsEvents",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-4.1.1/api/Grid.mdx",sourceDirName:"api",slug:"/api/Grid",permalink:"/egjs-infinitegrid/ko/docs/4.1.1/api/Grid",draft:!1,editUrl:null,tags:[],version:"4.1.1",frontMatter:{custom_edit_url:null},sidebar:"version-4.1.1/api",previous:{title:"PackingInfiniteGrid",permalink:"/egjs-infinitegrid/ko/docs/4.1.1/api/PackingInfiniteGrid"},next:{title:"Component",permalink:"/egjs-infinitegrid/ko/docs/4.1.1/api/Component"}},m={},k=[{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"gap",id:"gap",level:3},{value:"defaultDirection",id:"defaultDirection",level:3},{value:"useFit",id:"useFit",level:3},{value:"preserveUIOnDestroy",id:"preserveUIOnDestroy",level:3},{value:"Methods",id:"methods",level:2},{value:"applyGrid",id:"applyGrid",level:3},{value:"getContainerElement",id:"getContainerElement",level:3},{value:"getItems",id:"getItems",level:3},{value:"getChildren",id:"getChildren",level:3},{value:"setItems",id:"setItems",level:3},{value:"getContainerInlineSize",id:"getContainerInlineSize",level:3},{value:"getOutlines",id:"getOutlines",level:3},{value:"setOutlines",id:"setOutlines",level:3},{value:"syncElements",id:"syncElements",level:3},{value:"updateItems",id:"updateItems",level:3},{value:"renderItems",id:"renderItems",level:3},{value:"getStatus",id:"getStatus",level:3},{value:"setStatus",id:"setStatus",level:3},{value:"destroy",id:"destroy",level:3},{value:"Events",id:"events",level:2},{value:"contentError",id:"event-contentError",level:3},{value:"renderComplete",id:"event-renderComplete",level:3}],o={toc:k};function c(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"class Grid extends eg.Component\n")),(0,l.kt)("div",{className:"container"},(0,l.kt)("div",{className:"row mb-2"},(0,l.kt)("div",{className:"col col--4"},(0,l.kt)("strong",null,"Properties")),(0,l.kt)("div",{className:"col col--4"},(0,l.kt)("strong",null,"Methods")),(0,l.kt)("div",{className:"col col--4"},(0,l.kt)("strong",null,"Events"))),(0,l.kt)("div",{className:"row"},(0,l.kt)("div",{className:"col col--4"},(0,l.kt)("a",{href:"#gap"},"gap"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#defaultDirection"},"defaultDirection"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#useFit"},"useFit"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#preserveUIOnDestroy"},"preserveUIOnDestroy")),(0,l.kt)("div",{className:"col col--4"},(0,l.kt)("a",{href:"#applyGrid"},"applyGrid"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#getContainerElement"},"getContainerElement"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#getItems"},"getItems"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#getChildren"},"getChildren"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#setItems"},"setItems"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#getContainerInlineSize"},"getContainerInlineSize"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#getOutlines"},"getOutlines"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#setOutlines"},"setOutlines"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#syncElements"},"syncElements"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#updateItems"},"updateItems"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#renderItems"},"renderItems"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#getStatus"},"getStatus"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#setStatus"},"setStatus"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#destroy"},"destroy")),(0,l.kt)("div",{className:"col col--4"},(0,l.kt)("a",{href:"#event-contentError"},"contentError"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#event-renderComplete"},"renderComplete")))),(0,l.kt)("h2",{id:"constructor"},"Constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"new Grid(containerElement, options)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"containerElement"),(0,l.kt)("td",{parentName:"tr",align:"center"},"HTMLElement ","|"," string"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ubaa8\ub4c8\uc744 \uc801\uc6a9\ud560 \uae30\uc900 \uc5d8\ub9ac\uba3c\ud2b8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"options"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Partial","<","Options",">"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Grid \ubaa8\ub4c8\uc758 \uc635\uc158 \uac1d\uccb4")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"gap"},"gap"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\uc544\uc774\ud15c\ub4e4 \uc0ac\uc774\uc758 \uacf5\uac04."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": $ts:Grid.GridOptions",'["gap"]'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import { MasonryGrid } from "@egjs/grid";\n\nconst grid = new MasonryGrid(container, {\n  gap: 0,\n});\n\ngrid.gap = 5;\n')),(0,l.kt)("h3",{id:"defaultDirection"},"defaultDirection"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"render\uc635\uc158\uc5d0\uc11c direction\uc744 \ubbf8\uc124\uc815\uc2dc\uc758 \uae30\ubcf8 \ubc29\ud5a5\uac12."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": $ts:Grid.GridOptions",'["defaultDirection"]'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import { MasonryGrid } from "@egjs/grid";\n\nconst grid = new MasonryGrid(container, {\n  defaultDirection: "end",\n});\n\ngrid.defaultDirection = "start";\n')),(0,l.kt)("h3",{id:"useFit"},"useFit"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\ub80c\ub354\ub9c1\uc2dc \uc0c1\ub2e8\uc774 \ube44\uc5b4\uc788\uc744 \ub54c \uc544\uc6c3\ub77c\uc778\uc744 0\uc73c\ub85c \uc774\ub3d9\uc2dc\ud0ac\uc9c0 \uc5ec\ubd80. \ud558\uc9c0\ub9cc \uc0c1\ub2e8\ubcf4\ub2e4 \ub118\uce58\ub294 \uacbd\uc6b0 \uc544\uc6c3\ub77c\uc778\uc744 0\uc73c\ub85c \uac15\uc81c \uc774\ub3d9\ud55c\ub2e4. (default: true)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": $ts:Grid.GridOptions",'["useFit"]'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import { MasonryGrid } from "@egjs/grid";\n\nconst grid = new MasonryGrid(container, {\n  useFit: true,\n});\n\ngrid.useFit = false;\n')),(0,l.kt)("h3",{id:"preserveUIOnDestroy"},"preserveUIOnDestroy"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"destroy \uc2dc \uae30\uc874 \ucee8\ud14c\uc774\ub108, \uc544\uc774\ud15c\uc758 UI\ub97c \ubcf4\uc874\ud560\uc9c0 \uc5ec\ubd80."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": $ts:Grid.GridOptions",'["preserveUIOnDestroy"]'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import { MasonryGrid } from "@egjs/grid";\n\nconst grid = new MasonryGrid(container, {\n  preserveUIOnDestroy: false,\n});\n\ngrid.preserveUIOnDestroy = true;\n')),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"applyGrid"},"applyGrid"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"Grid\uc5d0 \ub9de\uac8c \uc544\uc774\ud15c\ub4e4\uc758 CSS rect\ub97c \uc801\uc6a9\ud558\uace0 outline\uc744 \uacc4\uc0b0\ud55c\ub2e4."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"direcion"),(0,l.kt)("td",{parentName:"tr",align:"center"},'"start" ',"|",' "end"'),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Grid\ub97c \uc801\uc6a9\ud560 \ubc29\ud5a5. (",'"',"end",'"',": \uc2dc\uc791\uc5d0\uc11c \ub05d \ubc29\ud5a5, ",'"',"start",'"',": \ub05d\uc5d0\uc11c \uc2dc\uc791 \ubc29\ud5a5)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"outline"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Array","<","number",">"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Grid\ub97c \uc801\uc6a9\ud560 \uc2dc\uc791 outline.")))),(0,l.kt)("h3",{id:"getContainerElement"},"getContainerElement"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\ucee8\ud14c\uc774\ub108 \uc5d8\ub9ac\uba3c\ud2b8\ub97c \ubc18\ud658\ud55c\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": HTMLElement"),(0,l.kt)("h3",{id:"getItems"},"getItems"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\uc544\uc774\ud15c\ub4e4\uc744 \ubc18\ud658\ud55c\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": GridItem[]"),(0,l.kt)("h3",{id:"getChildren"},"getChildren"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\ucee8\ud14c\uc774\ub108 \uc5d8\ub9ac\uba3c\ud2b8\uc758 children\uc744 \ubc18\ud658\ud55c\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": HTMLElement[]"),(0,l.kt)("h3",{id:"setItems"},"setItems"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\uc544\uc774\ud15c\ub4e4\uc744 \uc124\uc815\ud55c\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"items"),(0,l.kt)("td",{parentName:"tr",align:"center"},"GridItem[]"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc124\uc815\ud560 \uc544\uc774\ud15c\ub4e4")))),(0,l.kt)("h3",{id:"getContainerInlineSize"},"getContainerInlineSize"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,'container\uc758 inline \uc0ac\uc774\uc988\ub97c \uac00\uc838\uc628\ub2e4. (horizontal\uc774 false\uba74 "width", \uc544\ub2c8\uba74 "height")'),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": number"),(0,l.kt)("h3",{id:"getOutlines"},"getOutlines"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"Grid\uc758 \ucc98\uc74c\uacfc \ub05d\uc758 outline\uc744 \ubc18\ud658\ud55c\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": GridOutlines"),(0,l.kt)("h3",{id:"setOutlines"},"setOutlines"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\uc544\uc6c3\ub77c\uc778\uc744 \uc124\uc815\ud55c\ub2e4."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"outlines"),(0,l.kt)("td",{parentName:"tr",align:"center"},"GridOutlines"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc124\uc815\ud560 \uc544\uc6c3\ub77c\uc778.")))),(0,l.kt)("h3",{id:"syncElements"},"syncElements"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"elements\uac00 \ubc14\ub010 \uacbd\uc6b0 \ub3d9\uae30\ud654\ub97c \ud558\uace0 \ub80c\ub354\ub9c1\uc744 \ud55c\ub2e4."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"options"),(0,l.kt)("td",{parentName:"tr",align:"center"},"RenderOptions"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ub80c\ub354\ub9c1\uc744 \ud558\uae30 \uc704\ud55c \uc635\uc158.")))),(0,l.kt)("h3",{id:"updateItems"},"updateItems"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\uc544\uc774\ud15c\ub4e4\uc758 \uc0ac\uc774\uc988\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\uace0 \ub80c\ub354\ub9c1\uc744 \ud55c\ub2e4."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"items"),(0,l.kt)("td",{parentName:"tr",align:"center"},"GridItem[]"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"this.items"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc5c5\ub370\uc774\ud2b8\ud560 \uc544\uc774\ud15c\ub4e4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"options"),(0,l.kt)("td",{parentName:"tr",align:"center"},"RenderOptions"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ub80c\ub354\ub9c1\uc744 \ud558\uae30 \uc704\ud55c \uc635\uc158.")))),(0,l.kt)("h3",{id:"renderItems"},"renderItems"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"grid\uc5d0 \ub9de\uac8c \uc544\uc774\ud15c\uc744 \uc7ac\ubc30\uce58\ud558\uace0 \ub80c\ub354\ub9c1\uc744 \ud55c\ub2e4. \ubc30\uce58\uac00 \uc644\ub8cc\ub418\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"renderComplete")," \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud55c\ub2e4."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"options"),(0,l.kt)("td",{parentName:"tr",align:"center"},"RenderOptions"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ub80c\ub354\ub9c1\uc744 \ud558\uae30 \uc704\ud55c \uc635\uc158.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import { MasonryGrid } from "@egjs/grid";\nconst grid = new MasonryGrid();\n\ngrid.on("renderComplete", e => {\n  console.log(e);\n});\ngrid.renderItems();\n')),(0,l.kt)("h3",{id:"getStatus"},"getStatus"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\uc544\uc774\ud15c\uc758 \uc704\uce58, \uc0ac\uc774\uc988 \ub4f1 \ud604\uc7ac \uc0c1\ud0dc\ub97c \ubc18\ud658\ud55c\ub2e4. \ubc18\ud658\ud55c \uc0c1\ud0dc\ub294 setStatus() \uba54\uc11c\ub4dc\ub85c \ubcf5\uc6d0\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": GridStatus"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"minimize"),(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"item\uc758 status\ub97c \ucd5c\uc18c\ud654\ud560\uc9c0 \uc5ec\ubd80. (default: false)")))),(0,l.kt)("h3",{id:"setStatus"},"setStatus"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"getStatus() \uba54\uc11c\ub4dc\uc5d0 \ub300\ud55c \ud638\ucd9c\uc744 \ud1b5\ud574 \ubc18\ud658\ub41c \uc0c1\ud0dc\ub85c Grid \ubaa8\ub4c8\uc758 \uc0c1\ud0dc\ub97c \uc124\uc815\ud55c\ub2e4."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"status"),(0,l.kt)("td",{parentName:"tr",align:"center"},"GridStatus"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("h3",{id:"destroy"},"destroy"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\uc778\uc2a4\ud134\uc2a4\uc640 \uc774\ubca4\ud2b8\ub97c \ud574\uc81c\ud558\uace0 \ucee8\ud14c\uc774\ub108\uc640 \uc5d8\ub9ac\uba3c\ud2b8\ub4e4\uc758 CSS\ub97c \ub418\ub3cc\ub9b0\ub2e4."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Options"),(0,l.kt)("td",{parentName:"tr",align:"center"},"DestroyOptions"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"destory()\ub97c \uc704\ud55c \uc635\uc158")))),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("h3",{id:"event-contentError"},"contentError"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\ucf58\ud150\uce20 \ub85c\ub4dc\uc5d0 \uc5d0\ub7ec\uac00 \ub0a0 \ub54c \ubc1c\uc0dd\ud558\ub294 \uc774\ubca4\ud2b8."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"e"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Grid:OnContentError"},"Grid.OnContentError")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc774\ubca4\ud2b8\uc5d0 \uc804\ub2ec\ub418\ub294 \ub370\uc774\ud130 \uac1d\uccb4")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'grid.on("contentError", e => {\n  e.update();\n});\n')),(0,l.kt)("h3",{id:"event-renderComplete"},"renderComplete"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"Grid\uac00 \ub80c\ub354\ub9c1\uc774 \uc644\ub8cc\ub410\uc744 \ub54c  \ubc1c\uc0dd\ud558\ub294 \uc774\ubca4\ud2b8\uc774\ub2e4."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"e"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Grid:OnRenderComplete"},"Grid.OnRenderComplete")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc774\ubca4\ud2b8\uc5d0 \uc804\ub2ec\ub418\ub294 \ub370\uc774\ud130 \uac1d\uccb4")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'grid.on("renderComplete", e => {\n  console.log(e.mounted, e.updated, e.useResize);\n});\n')))}c.isMDXComponent=!0}}]);