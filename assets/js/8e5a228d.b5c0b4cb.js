"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2961],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),o=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=o(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=o(t),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var o=2;o<l;o++)i[o]=t[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2360:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(7294),r=t(6010),l="tabItem_OmH5";function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:t},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(7462),r=t(7294),l=t(2389),i=t(7392),u=t(7094),s=t(2466),o=t(6010),c="tabList_uSqn",p="tabItem_LplD";function d(e){var n,t,l,d=e.lazy,m=e.block,g=e.defaultValue,v=e.values,f=e.groupId,b=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=v?v:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,i.l)(h,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var j=null===g?g:null!=(n=null!=g?g:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=k[0])?void 0:l.props.value;if(null!==j&&!h.some((function(e){return e.value===j})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+j+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,u.U)(),N=T.tabGroupChoices,x=T.setTabGroupChoices,w=(0,r.useState)(j),O=w[0],I=w[1],Z=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var D=N[f];null!=D&&D!==O&&h.some((function(e){return e.value===D}))&&I(D)}var P=function(e){var n=e.currentTarget,t=Z.indexOf(n),a=h[t].value;a!==O&&(E(n),I(a),null!=f&&x(f,a))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=Z.indexOf(e.currentTarget)+1;t=Z[a]||Z[0];break;case"ArrowLeft":var r=Z.indexOf(e.currentTarget)-1;t=Z[r]||Z[Z.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},b)},h.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return Z.push(e)},onKeyDown:C,onFocus:P,onClick:P},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),d?(0,r.cloneElement)(k.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function m(e){var n=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},2119:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),i=t(9877),u=t(2360),s=["components"],o={title:"Installation",id:"installation",slug:"/",custom_edit_url:null},c=void 0,p={unversionedId:"installation",id:"version-4.3.1/installation",title:"Installation",description:"Using the package managers (recommended)",source:"@site/versioned_docs/version-4.3.1/installation.mdx",sourceDirName:".",slug:"/",permalink:"/egjs-infinitegrid/docs/",draft:!1,editUrl:null,tags:[],version:"4.3.1",frontMatter:{title:"Installation",id:"installation",slug:"/",custom_edit_url:null},sidebar:"started",next:{title:"Quick Start",permalink:"/egjs-infinitegrid/docs/quick-start"}},d={},m=[{value:"Using the package managers (recommended)",id:"using-the-package-managers-recommended",level:2},{value:"npm",id:"npm",level:3},{value:"yarn",id:"yarn",level:3},{value:"CDN Links",id:"cdn-links",level:2},{value:"packaged(with dependencies)",id:"packagedwith-dependencies",level:3}],g={toc:m};function v(e){var n=e.components,t=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"using-the-package-managers-recommended"},"Using the package managers (recommended)"),(0,l.kt)("p",null,"You can easily install InfiniteGrid with package managers like ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm")," or ",(0,l.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/"},"yarn")),(0,l.kt)("h3",{id:"npm"},"npm"),(0,l.kt)(i.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/infinitegrid\n"))),(0,l.kt)(u.Z,{value:"react",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/react-infinitegrid\n"))),(0,l.kt)(u.Z,{value:"vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/vue-infinitegrid\n"))),(0,l.kt)(u.Z,{value:"vue3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/vue3-infinitegrid\n"))),(0,l.kt)(u.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/ngx-infinitegrid\n"))),(0,l.kt)(u.Z,{value:"svelte",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/svelte-infinitegrid\n")))),(0,l.kt)("h3",{id:"yarn"},"yarn"),(0,l.kt)(i.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/infinitegrid\n"))),(0,l.kt)(u.Z,{value:"react",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/react-infinitegrid\n"))),(0,l.kt)(u.Z,{value:"vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/vue-infinitegrid\n"))),(0,l.kt)(u.Z,{value:"vue3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/vue3-infinitegrid\n"))),(0,l.kt)(u.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/ngx-infinitegrid\n"))),(0,l.kt)(u.Z,{value:"svelte",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/svelte-infinitegrid\n")))),(0,l.kt)("h2",{id:"cdn-links"},"CDN Links"),(0,l.kt)("h3",{id:"packagedwith-dependencies"},"packaged(with dependencies)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- github --\x3e\n<script src="https://naver.github.io/egjs-infinitegrid/release/latest/dist/infinitegrid.min.js" crossorigin="anonymous"><\/script>\n\x3c!-- unpkg --\x3e\n<script src="https://unpkg.com/@egjs/infinitegrid/dist/infinitegrid.min.js" crossorigin="anonymous"><\/script>\n\x3c!-- cdnjs --\x3e\n<script src="https://cdnjs.cloudflare.com/ajax/libs/egjs-infinitegrid/4.x.x/infinitegrid.min.js" crossorigin="anonymous"><\/script>\n')))}v.isMDXComponent=!0}}]);