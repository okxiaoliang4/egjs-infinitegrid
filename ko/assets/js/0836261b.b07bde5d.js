"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9281],{3217:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6277);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:n},t)}},3873:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(7896),a=n(7294),i=n(6277),l=n(8864),o=n(3171),s=n(9e3),u=n(1347);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n;const{lazy:l,block:m,defaultValue:d,values:f,groupId:g,className:h}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,o.l)(b,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===d?d:null!=(t=null!=d?d:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==k&&!b.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:I,setTabGroupChoices:N}=(0,s.U)(),[w,T]=(0,a.useState)(k),j=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=g){const e=I[g];null!=e&&e!==w&&b.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,n=j.indexOf(t),r=b[n].value;r!==w&&(x(t),T(r),null!=g&&N(g,String(r)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=j.indexOf(e.currentTarget)+1;n=null!=(r=j[t])?r:j[0];break}case"ArrowLeft":{var a;const t=j.indexOf(e.currentTarget)-1;n=null!=(a=j[t])?a:j[j.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},h)},b.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>j.push(e),onKeyDown:E,onFocus:O,onClick:O},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,l.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},8169:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>g,frontMatter:()=>u,metadata:()=>p,toc:()=>d});var r=n(7896),a=(n(7294),n(3905)),i=n(3095),l=n(756),o=n(3873),s=n(3217);const u={title:"Using the Methods",id:"using-the-methods",slug:"/using-the-methods",custom_edit_url:null},c=void 0,p={unversionedId:"using-the-methods",id:"version-4.0.0/using-the-methods",title:"Using the Methods",description:"<Tabs",source:"@site/versioned_docs/version-4.0.0/using-the-methods.mdx",sourceDirName:".",slug:"/using-the-methods",permalink:"/egjs-infinitegrid/ko/docs/4.0.0/using-the-methods",draft:!1,editUrl:null,tags:[],version:"4.0.0",frontMatter:{title:"Using the Methods",id:"using-the-methods",slug:"/using-the-methods",custom_edit_url:null},sidebar:"version-4.0.0/started",previous:{title:"Quick Start",permalink:"/egjs-infinitegrid/ko/docs/4.0.0/quick-start"},next:{title:"Listening to Events",permalink:"/egjs-infinitegrid/ko/docs/4.0.0/listening-to-events"}},m={},d=[],f={toc:d};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("p",null,"You can call methods directly from the InfiniteGrid instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const ig = new MasonryInfiniteGrid("#el", options);\n\nig.getItems();\n'))),(0,a.kt)(s.Z,{value:"react",mdxType:"TabItem"},(0,a.kt)("p",null,"You can call methods of InfiniteGrid by getting a ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," of InfiniteGrid"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import * as React from "react";\nimport { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";\n\nexport default () => {\n  const igRef = React.useRef();\n\n  React.useEffect(() => {\n    console.log(igRef.current.getItems());\n  }, []);\n  return <MasonryInfiniteGrid ref={igRef}>\n  </MasonryInfiniteGrid>\n};\n')),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"React Refs and the DOM")," for more info.")),(0,a.kt)(s.Z,{value:"vue",mdxType:"TabItem"},(0,a.kt)("p",null,"You can access instance of InfiniteGrid component with the ",(0,a.kt)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements"},"ref")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<masonry-infinite-grid ref="igRef"></masonry-infinite-grid>\n')),(0,a.kt)("p",null,"Then call methods of it like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"this.$refs.igRef.getItems();\n"))),(0,a.kt)(s.Z,{value:"vue3",mdxType:"TabItem"},(0,a.kt)("p",null,"You can access instance of InfiniteGrid component with the ",(0,a.kt)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements"},"ref")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<masonry-infinite-grid ref="igRef"></masonry-infinite-grid>\n')),(0,a.kt)("p",null,"Then call methods of it like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"this.$refs.igRef.getItems();\n"))),(0,a.kt)(s.Z,{value:"angular",mdxType:"TabItem"},(0,a.kt)("p",null,"There're few ways to interact with child component in Angular.",(0,a.kt)("br",{parentName:"p"}),"\n","See ",(0,a.kt)("a",{parentName:"p",href:"https://angular.io/guide/component-interaction#parent-interacts-with-child-via-local-variable"},"Component Interaction")," page from Angular official document, and use that to interact with InfiniteGrid."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="app.component.html"',title:'"app.component.html"'},"<div NgxMasonryInfiniteGrid\n  #ig\n  >\n</div>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app.component.ts"',title:'"app.component.ts"'},"import { Component, Input, AfterViewInit } from '@angular/core';\n\nimport { NgxInfiniteGridComponent } from '@egjs/ngx-infinitegrid';\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent implements AfterViewInit {\n  @ViewChild(\"ig\") ig!: NgxInfiniteGridComponent;\n  ngAfterViewInit() {\n    console.log(this.ig.getItems());\n  }\n}\n}\n"))),(0,a.kt)(s.Z,{value:"svelte",mdxType:"TabItem"},(0,a.kt)("p",null,"You can use ",(0,a.kt)("a",{parentName:"p",href:"https://svelte.dev/tutorial/bind-this"},"bind:this")," syntax of svelte to get the reference of InfiniteGrid."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<script lang="ts">\n  import { onMount } from "svelte";\n  import { MasonryInfiniteGrid } from "@egjs/svelte-infinitegrid";\n\n  let ig;\n\n  onMount(() => {\n    console.log(ig.getItems());\n  });\n<\/script>\n<MasonryInfiniteGrid\n  bind:this={ig}\n>\n</MasonryInfiniteGrid>\n')))),(0,a.kt)("p",null,"See all available methods at our ",(0,a.kt)(i.Z,{to:(0,l.Z)("docs/api/InfiniteGrid#methods"),mdxType:"Link"},"API")," page."))}g.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);