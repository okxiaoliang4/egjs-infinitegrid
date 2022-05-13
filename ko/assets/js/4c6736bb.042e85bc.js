"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9164],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2360:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(6010),i="tabItem_OmH5";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7462),a=n(7294),i=n(2389),o=n(7392),l=n(7094),s=n(2466),u=n(6010),c="tabList_uSqn",p="tabItem_LplD";function m(e){var t,n,i,m=e.lazy,d=e.block,f=e.defaultValue,g=e.values,h=e.groupId,v=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=g?g:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,o.l)(y,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var I=null===f?f:null!=(t=null!=f?f:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=b[0])?void 0:i.props.value;if(null!==I&&!y.some((function(e){return e.value===I})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+I+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.U)(),w=N.tabGroupChoices,T=N.setTabGroupChoices,j=(0,a.useState)(I),x=j[0],O=j[1],E=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var Z=w[h];null!=Z&&Z!==x&&y.some((function(e){return e.value===Z}))&&O(Z)}var G=function(e){var t=e.currentTarget,n=E.indexOf(t),r=y[n].value;r!==x&&(C(t),O(r),null!=h&&T(h,r))},M=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;n=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;n=E[a]||E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,u.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},v)},y.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return E.push(e)},onKeyDown:M,onFocus:G,onClick:G},i,{className:(0,u.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),m?(0,a.cloneElement)(b.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,i.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},6537:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return g}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(9960),l=n(4996),s=n(9877),u=n(2360),c=["components"],p={title:"Using the Methods",id:"using-the-methods",slug:"/using-the-methods",custom_edit_url:null},m=void 0,d={unversionedId:"using-the-methods",id:"version-4.2.1/using-the-methods",title:"Using the Methods",description:"<Tabs",source:"@site/versioned_docs/version-4.2.1/using-the-methods.mdx",sourceDirName:".",slug:"/using-the-methods",permalink:"/egjs-infinitegrid/ko/docs/4.2.1/using-the-methods",draft:!1,editUrl:null,tags:[],version:"4.2.1",frontMatter:{title:"Using the Methods",id:"using-the-methods",slug:"/using-the-methods",custom_edit_url:null},sidebar:"started",previous:{title:"Quick Start",permalink:"/egjs-infinitegrid/ko/docs/4.2.1/quick-start"},next:{title:"Listening to Events",permalink:"/egjs-infinitegrid/ko/docs/4.2.1/listening-to-events"}},f={},g=[],h={toc:g};function v(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("p",null,"You can call methods directly from the InfiniteGrid instance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const ig = new MasonryInfiniteGrid("#el", options);\n\nig.getItems();\n'))),(0,i.kt)(u.Z,{value:"react",mdxType:"TabItem"},(0,i.kt)("p",null,"You can call methods of InfiniteGrid by getting a ",(0,i.kt)("inlineCode",{parentName:"p"},"ref")," of InfiniteGrid"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import * as React from "react";\nimport { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";\n\nexport default () => {\n  const igRef = React.useRef();\n\n  React.useEffect(() => {\n    console.log(igRef.current.getItems());\n  }, []);\n  return <MasonryInfiniteGrid ref={igRef}>\n  </MasonryInfiniteGrid>\n};\n')),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"React Refs and the DOM")," for more info.")),(0,i.kt)(u.Z,{value:"vue",mdxType:"TabItem"},(0,i.kt)("p",null,"You can access instance of InfiniteGrid component with the ",(0,i.kt)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements"},"ref")," property."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'<masonry-infinite-grid ref="igRef"></masonry-infinite-grid>\n')),(0,i.kt)("p",null,"Then call methods of it like"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"this.$refs.igRef.getItems();\n"))),(0,i.kt)(u.Z,{value:"vue3",mdxType:"TabItem"},(0,i.kt)("p",null,"You can access instance of InfiniteGrid component with the ",(0,i.kt)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements"},"ref")," property."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'<masonry-infinite-grid ref="igRef"></masonry-infinite-grid>\n')),(0,i.kt)("p",null,"Then call methods of it like"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"this.$refs.igRef.getItems();\n"))),(0,i.kt)(u.Z,{value:"angular",mdxType:"TabItem"},(0,i.kt)("p",null,"There're few ways to interact with child component in Angular.",(0,i.kt)("br",{parentName:"p"}),"\n","See ",(0,i.kt)("a",{parentName:"p",href:"https://angular.io/guide/component-interaction#parent-interacts-with-child-via-local-variable"},"Component Interaction")," page from Angular official document, and use that to interact with InfiniteGrid."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="app.component.html"',title:'"app.component.html"'},"<div NgxMasonryInfiniteGrid\n  #ig\n  >\n</div>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app.component.ts"',title:'"app.component.ts"'},"import { Component, Input, AfterViewInit } from '@angular/core';\n\nimport { NgxInfiniteGridComponent } from '@egjs/ngx-infinitegrid';\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent implements AfterViewInit {\n  @ViewChild(\"ig\") ig!: NgxInfiniteGridComponent;\n  ngAfterViewInit() {\n    console.log(this.ig.getItems());\n  }\n}\n}\n"))),(0,i.kt)(u.Z,{value:"svelte",mdxType:"TabItem"},(0,i.kt)("p",null,"You can use ",(0,i.kt)("a",{parentName:"p",href:"https://svelte.dev/tutorial/bind-this"},"bind:this")," syntax of svelte to get the reference of InfiniteGrid."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<script lang="ts">\n  import { onMount } from "svelte";\n  import { MasonryInfiniteGrid } from "@egjs/svelte-infinitegrid";\n\n  let ig;\n\n  onMount(() => {\n    console.log(ig.getItems());\n  });\n<\/script>\n<MasonryInfiniteGrid\n  bind:this={ig}\n>\n</MasonryInfiniteGrid>\n')))),(0,i.kt)("p",null,"See all available methods at our ",(0,i.kt)(o.Z,{to:(0,l.Z)("docs/api/InfiniteGrid#methods"),mdxType:"Link"},"API")," page."))}v.isMDXComponent=!0}}]);