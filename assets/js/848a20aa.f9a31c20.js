"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7194],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,v=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return t?r.createElement(v,l(l({ref:n},p),{},{components:t})):r.createElement(v,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2360:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(7294),a=t(6010),i="tabItem_OmH5";function l(e){var n=e.children,t=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:t},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(7462),a=t(7294),i=t(2389),l=t(7392),o=t(7094),u=t(2466),s=t(6010),p="tabList_uSqn",c="tabItem_LplD";function d(e){var n,t,i,d=e.lazy,m=e.block,v=e.defaultValue,f=e.values,g=e.groupId,b=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:y.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,l.l)(h,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===v?v:null!=(n=null!=v?v:null==(t=y.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=y[0])?void 0:i.props.value;if(null!==N&&!h.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,o.U)(),I=T.tabGroupChoices,O=T.setTabGroupChoices,j=(0,a.useState)(N),w=j[0],x=j[1],E=[],Z=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var A=I[g];null!=A&&A!==w&&h.some((function(e){return e.value===A}))&&x(A)}var C=function(e){var n=e.currentTarget,t=E.indexOf(n),r=h[t].value;r!==w&&(Z(n),x(r),null!=g&&O(g,r))},G=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;t=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;t=E[a]||E[E.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},b)},h.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:function(e){return E.push(e)},onKeyDown:G,onFocus:C,onClick:C},i,{className:(0,s.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),d?(0,a.cloneElement)(y.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function m(e){var n=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(n)},e))}},3631:function(e,n,t){t.r(n),t.d(n,{assets:function(){return v},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return f}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),l=t(9960),o=t(4996),u=t(9877),s=t(2360),p=["components"],c={title:"Listening to Events",id:"listening-to-events",slug:"/listening-to-events",custom_edit_url:null},d=void 0,m={unversionedId:"listening-to-events",id:"version-4.4.0/listening-to-events",title:"Listening to Events",description:"<Tabs",source:"@site/versioned_docs/version-4.4.0/listening-to-events.mdx",sourceDirName:".",slug:"/listening-to-events",permalink:"/egjs-infinitegrid/docs/listening-to-events",draft:!1,editUrl:null,tags:[],version:"4.4.0",frontMatter:{title:"Listening to Events",id:"listening-to-events",slug:"/listening-to-events",custom_edit_url:null},sidebar:"started",previous:{title:"Using the Methods",permalink:"/egjs-infinitegrid/docs/using-the-methods"},next:{title:"Migration Guide from v3 to v4",permalink:"/egjs-infinitegrid/docs/migration-from-v3"}},v={},f=[],g={toc:f};function b(e){var n=e.components,t=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(u.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("p",null,"You can listen to InfiniteGrid's events with ",(0,i.kt)("a",{parentName:"p",href:"api/InfiniteGrid#on"},"InfiniteGrid#on")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// If you\'re using a package manager\n\nig.on("requestAppend", evt => {\n  console.log(evt);\n});\n'))),(0,i.kt)(s.Z,{value:"react",mdxType:"TabItem"},(0,i.kt)("p",null,"All events are prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"on-"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"camelCase"),"d."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";\nimport { OnRequestAppend } from "@egjs/infinitegrid";\n\n<MasonryInfiniteGrid\n  onRequestAppend={(e: OnRequestAppend) => {\n    console.log(e);\n  }}\n>\n  {...}\n</MasonryInfiniteGrid>\n'))),(0,i.kt)(s.Z,{value:"vue",mdxType:"TabItem"},(0,i.kt)("p",null,"All event names are renamed to ",(0,i.kt)("inlineCode",{parentName:"p"},"kebab-case"),", following the ",(0,i.kt)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components-custom-events.html#Event-Names"},"Vue event naming convention"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<MasonryInfiniteGrid\n  @request-append="onRequestAppend"\n>\n</MasonryInfiniteGrid>\n'))),(0,i.kt)(s.Z,{value:"vue3",mdxType:"TabItem"},(0,i.kt)("p",null,"All event names are renamed to ",(0,i.kt)("inlineCode",{parentName:"p"},"kebab-case"),", following the ",(0,i.kt)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components-custom-events.html#Event-Names"},"Vue 2 event naming convention"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<MasonryInfiniteGrid\n  @request-append="onRequestAppend"\n>\n</MasonryInfiniteGrid>\n'))),(0,i.kt)(s.Z,{value:"angular",mdxType:"TabItem"},(0,i.kt)("p",null,"You can listen events of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ngx-infinitegrid")," using Angular's ",(0,i.kt)("a",{parentName:"p",href:"https://angular.io/guide/event-binding"},"event binding"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ngx-masonry-infinite-grid\n  (requestAppend)="onRequestAppend($event)">\n  {{ ... }}\n</ngx-masonry-infinite-grid>\n'))),(0,i.kt)(s.Z,{value:"svelte",mdxType:"TabItem"},(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"on:eventName")," syntax to listen InfiniteGrid events.",(0,i.kt)("br",{parentName:"p"}),"\n","All event properties are available in the event's ",(0,i.kt)("inlineCode",{parentName:"p"},"detail")," property."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<script lang="ts">\n  import { MasonryInfiniteGrid } from "@egjs/svelte-infinitegrid";\n<\/script>\n\n<MasonryInfiniteGrid\n  on:requestAppend={({ detail: e }) => {\n  console.log(e);\n  }}>\n</MasonryInfiniteGrid>\n')))),(0,i.kt)("p",null,"See all available events at ",(0,i.kt)(l.Z,{to:(0,o.Z)("docs/api/InfiniteGrid#events"),mdxType:"Link"},"InfiniteGrid#events"),"."))}b.isMDXComponent=!0}}]);