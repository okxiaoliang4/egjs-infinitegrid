"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6762],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=i,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return t?r.createElement(g,o(o({ref:n},p),{},{components:t})):r.createElement(g,o({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2360:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(7294),i=t(6010),a="tabItem_OmH5";function o(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(a,o),hidden:t},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(7462),i=t(7294),a=t(2389),o=t(7392),l=t(7094),s=t(2466),u=t(6010),p="tabList_uSqn",c="tabItem_LplD";function m(e){var n,t,a,m=e.lazy,d=e.block,g=e.defaultValue,f=e.values,y=e.groupId,v=e.className,k=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,o.l)(h,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===g?g:null!=(n=null!=g?g:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=k[0])?void 0:a.props.value;if(null!==x&&!h.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.U)(),I=N.tabGroupChoices,j=N.setTabGroupChoices,G=(0,i.useState)(x),K=G[0],w=G[1],T=[],O=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var M=I[y];null!=M&&M!==K&&h.some((function(e){return e.value===M}))&&w(M)}var C=function(e){var n=e.currentTarget,t=T.indexOf(n),r=h[t].value;r!==K&&(O(n),w(r),null!=y&&j(y,r))},A=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;t=T[r]||T[0];break;case"ArrowLeft":var i=T.indexOf(e.currentTarget)-1;t=T[i]||T[T.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:(0,u.Z)("tabs-container",p)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},v)},h.map((function(e){var n=e.value,t=e.label,a=e.attributes;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:K===n?0:-1,"aria-selected":K===n,key:n,ref:function(e){return T.push(e)},onKeyDown:A,onFocus:C,onClick:C},a,{className:(0,u.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":K===n})}),null!=t?t:n)}))),m?(0,i.cloneElement)(k.filter((function(e){return e.props.value===K}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},k.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==K})}))))}function d(e){var n=(0,a.Z)();return i.createElement(m,(0,r.Z)({key:String(n)},e))}},6832:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=t(9877),l=t(2360),s=["components"],u={title:"Quick Start",id:"quick-start",slug:"/quick-start",custom_edit_url:null},p=void 0,c={unversionedId:"quick-start",id:"version-4.2.1/quick-start",title:"Quick Start",description:"If you don't want to use Infinite's features, use @egjs/grid.",source:"@site/versioned_docs/version-4.2.1/quick-start.mdx",sourceDirName:".",slug:"/quick-start",permalink:"/egjs-infinitegrid/ko/docs/4.2.1/quick-start",draft:!1,editUrl:null,tags:[],version:"4.2.1",frontMatter:{title:"Quick Start",id:"quick-start",slug:"/quick-start",custom_edit_url:null},sidebar:"started",previous:{title:"Installation",permalink:"/egjs-infinitegrid/ko/docs/4.2.1/"},next:{title:"Using the Methods",permalink:"/egjs-infinitegrid/ko/docs/4.2.1/using-the-methods"}},m={},d=[],g={toc:d};function f(e){var n=e.components,t=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you don't want to use Infinite's features, use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/naver/egjs-grid"},(0,a.kt)("inlineCode",{parentName:"a"},"@egjs/grid")),"."),(0,a.kt)(o.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("p",null,"Add the script/CSS to the page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- https://naver.github.io/egjs-infinitegrid/release/latest/dist/infinitegrid.min.js --\x3e\n<script src="https://unpkg.com/@egjs/infinitegrid/dist/infinitegrid.min.js" crossorigin="anonymous"><\/script>\n')),(0,a.kt)("p",null,"Or, you can rather import them if you're using a bundler like ",(0,a.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack")," or ",(0,a.kt)("a",{parentName:"p",href:"https://rollupjs.org/guide/en/"},"rollup"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { MasonryInfiniteGrid } from "@egjs/infinitegrid";\n')),(0,a.kt)("p",null,"Then, add some basic HTML layout of InfiniteGrid to your page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="wrapper">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n</div>\n')),(0,a.kt)("p",null,"Then initialize InfiniteGrid instance with JavaScript after."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { MasonryInfiniteGrid } from "@egjs/infinitegrid";\n\nconst ig = new MasonryInfiniteGrid(".wrapper", {\n  align: "center",\n  gap: 5,\n});\n\nig.on("requestAppend", e => {\n  const nextGroupKey = (e.groupKey || 0) + 1;\n  const length = items.length;\n\n  ig.append([\n    `<div class="item">${length}</div>`,\n    `<div class="item">${length + 1}</div>`,\n    `<div class="item">${length + 2}</div>`,\n  ], nextGroupKey);\n});\nig.renderItems();\n'))),(0,a.kt)(l.Z,{value:"react",mdxType:"TabItem"},(0,a.kt)("p",null,"You can import & use InfiniteGrid as a React Component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="SomeComponent.jsx"',title:'"SomeComponent.jsx"'},'import * as React from "react";\nimport { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";\n\nexport default () => {\n  const [items, setItems] = React.useState([]);\n\n  return <MasonryInfiniteGrid\n    align="center"\n    gap={5}\n    onRequestAppend={e => {\n      const nextGroupKey = (e.groupKey || 0) + 1;\n      const length = items.length;\n\n      setItems([\n        ...items,\n        { groupKey: nextGroupKey, key: length },\n        { groupKey: nextGroupKey, key: length + 1 },\n        { groupKey: nextGroupKey, key: length + 2 },\n      ]);\n    }}>\n    {items.map((item) => {\n      return <div className="item" data-grid-groupkey={item.groupKey} key={item.key}>{item.key}</div>\n    })}\n  </MasonryInfiniteGrid>;\n}\n'))),(0,a.kt)(l.Z,{value:"vue",mdxType:"TabItem"},"You can import & use InfiniteGrid as a Vue Component.",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="<template>"',title:'"<template>"'},'<masonry-infinite-grid\n  class="container"\n  v-bind:gap="5"\n  v-on:requestAppend="onRequestAppend"\n>\n  <div\n    class="item"\n    v-for="item in items"\n    :key="item.key"\n    :data-grid-groupkey="item.groupKey"\n  >{{ item.key }}</div>\n</masonry-infinite-grid>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<script>"',title:'"<script>"'},'import { MasonryInfiniteGrid } from "@egjs/vue-infinitegrid";\n\nexport default {\n  components: {\n    MasonryInfiniteGrid,\n  },\n  data() {\n    return {\n      items: [],\n    };\n  },\n  methods: {\n    onRequestAppend(e) {\n      const nextGroupKey = (e.groupKey || 0) + 1;\n      const length = this.items.length;\n\n      this.items = [\n        ...this.items,\n        { groupKey: nextGroupKey, key: length },\n        { groupKey: nextGroupKey, key: length + 1 },\n        { groupKey: nextGroupKey, key: length + 2 },\n      ];\n    },\n  },\n};\n\n'))),(0,a.kt)(l.Z,{value:"vue3",mdxType:"TabItem"},"You can import & use InfiniteGrid as a Vue Component.",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="<template>"',title:'"<template>"'},'<masonry-infinite-grid\n  class="container"\n  v-bind:gap="5"\n  v-on:requestAppend="onRequestAppend"\n>\n  <div\n    class="item"\n    v-for="item in items"\n    :key="item.key"\n    :data-grid-groupkey="item.groupKey"\n  >{{ item.key }}</div>\n</masonry-infinite-grid>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<script>"',title:'"<script>"'},'import { MasonryInfiniteGrid } from "@egjs/vue3-infinitegrid";\n\nexport default {\n  components: {\n    MasonryInfiniteGrid,\n  },\n  data() {\n    return {\n      items: [],\n    };\n  },\n  methods: {\n    onRequestAppend(e) {\n      const nextGroupKey = (e.groupKey || 0) + 1;\n      const length = this.items.length;\n\n      this.items = [\n        ...this.items,\n        { groupKey: nextGroupKey, key: length },\n        { groupKey: nextGroupKey, key: length + 1 },\n        { groupKey: nextGroupKey, key: length + 2 },\n      ];\n    },\n  },\n};\n\n'))),(0,a.kt)(l.Z,{value:"angular",mdxType:"TabItem"},(0,a.kt)("p",null,"You can add ",(0,a.kt)("inlineCode",{parentName:"p"},"NgxInfiniteGridModule")," at ",(0,a.kt)("inlineCode",{parentName:"p"},"imports")," of your app module to use InfiniteGrid."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app.module.ts"',title:'"app.module.ts"'},"import { NgxInfiniteGridModule } from '@egjs/ngx-infinitegrid';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { NgModule } from '@angular/core';\n\n@NgModule({\n  declarations: [\n    AppComponent\n  ],\n  imports: [\n    BrowserModule,\n    NgxInfiniteGridModule /* Add in imports */\n  ],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule { } /* Your app */\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="app.component.html"',title:'"app.component.html"'},'<div NgxMasonryInfiniteGrid\n  [items]="items"\n  [trackBy]="trackBy"\n  [groupBy]="groupBy"\n  [gap]="5"\n  (requestAppend)="onRequestAppend($event)"\n  #ig\n  >\n  <div class="item" *ngFor ="let item of ig.visibleItems; trackBy: trackBy;">\n    {{item.data.key}}\n  </div>\n</div>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app.component.ts"',title:'"app.component.ts"'},"import { Component, Input } from '@angular/core';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  items = [];\n  groupBy(_: any, item: any) {\n    return item.groupKey;\n  }\n  trackBy(_: any, item: any) {\n    return item.key;\n  }\n  onRequestAppend(e) {\n    const nextGroupKey = (e.groupKey || 0) + 1;\n    const length = this.items.length;\n\n    this.items = [\n      ...this.items,\n      { groupKey: nextGroupKey, key: length },\n      { groupKey: nextGroupKey, key: length + 1 },\n      { groupKey: nextGroupKey, key: length + 2 },\n    ];\n  }\n}\n"))),(0,a.kt)(l.Z,{value:"svelte",mdxType:"TabItem"},(0,a.kt)("p",null,"You can import ",(0,a.kt)("inlineCode",{parentName:"p"},"InfiniteGrid"),' from the "@egjs/svelte-infinitegrid" package.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.svelte"',title:'"App.svelte"'},'<script lang="ts">\n  import { MasonryInfiniteGrid } from "@egjs/svelte-infinitegrid";\n\n  let items = [];\n<\/script>\n<MasonryInfiniteGrid\n  class="container"\n  gap={5}\n  {items}\n  on:requestAppend={({ detail: e }) => {\n    const nextGroupKey = (e.groupKey || 0) + 1;\n    const length = items.length;\n\n    items = [\n      ...items,\n      { groupKey: nextGroupKey, key: length },\n      { groupKey: nextGroupKey, key: length + 1 },\n      { groupKey: nextGroupKey, key: length + 2 },\n    ];\n  }}\n  let:visibleItems\n>\n   {#each visibleItems as item (item.key)}\n    <div class="item">\n     {item.data.key}\n    </div>\n  {/each}\n</MasonryInfiniteGrid>\n')))))}f.isMDXComponent=!0}}]);