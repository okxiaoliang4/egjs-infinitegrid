"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7745],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=i,v=p["".concat(u,".").concat(d)]||p[d]||f[d]||a;return t?r.createElement(v,o(o({ref:n},c),{},{components:t})):r.createElement(v,o({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6742:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(3366),i=t(7294),a=t(3727),o=t(2263),l=t(3919),u=t(412),s=(0,i.createContext)({collectLink:function(){}}),c=t(4996),f=t(8780),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var d=function(e){var n,t,d=e.isNavLink,v=e.to,m=e.href,g=e.activeClassName,b=e.isActive,h=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,k=void 0===y||y,N=(0,r.Z)(e,p),w=(0,o.Z)().siteConfig,O=w.trailingSlash,x=w.baseUrl,j=(0,c.C)().withBaseUrl,I=(0,i.useContext)(s),C=v||m,T=(0,l.Z)(C),A=null==C?void 0:C.replace("pathname://",""),E=void 0!==A?(t=A,k&&function(e){return e.startsWith("/")}(t)?j(t):t):void 0;E&&T&&(E=(0,f.applyTrailingSlash)(E,{trailingSlash:O,baseUrl:x}));var Z,M=(0,i.useRef)(!1),P=d?a.OL:a.rU,_=u.Z.canUseIntersectionObserver;(0,i.useEffect)((function(){return!_&&T&&null!=E&&window.docusaurus.prefetch(E),function(){_&&Z&&Z.disconnect()}}),[E,_,T]);var G=null!==(n=null==E?void 0:E.startsWith("#"))&&void 0!==n&&n,L=!E||!T||G;return E&&T&&!G&&!h&&I.collectLink(E),L?i.createElement("a",Object.assign({href:E},C&&!T&&{target:"_blank",rel:"noopener noreferrer"},N)):i.createElement(P,Object.assign({},N,{onMouseEnter:function(){M.current||null==E||(window.docusaurus.preload(E),M.current=!0)},innerRef:function(e){var n,t;_&&e&&T&&(n=e,t=function(){null!=E&&window.docusaurus.prefetch(E)},(Z=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(Z.unobserve(n),Z.disconnect(),t())}))}))).observe(n))},to:E||""},d&&{isActive:b,activeClassName:g}))}},3919:function(e,n,t){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}t.d(n,{b:function(){return r},Z:function(){return i}})},4996:function(e,n,t){t.d(n,{C:function(){return a},Z:function(){return o}});var r=t(2263),i=t(3919);function a(){var e=(0,r.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,a=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,l=void 0!==o&&o,u=a.absolute,s=void 0!==u&&u;if(!t)return t;if(t.startsWith("#"))return t;if((0,i.b)(t))return t;if(l)return n+t;var c=t.startsWith(n)?t:n+t.replace(/^\//,"");return s?e+c:c}(a,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,a().withBaseUrl)(e,n)}},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},5064:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(7294),i=t(9443);var a=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=t(6010),l="tabItem_1uMI",u="tabItemActive_2DSg";var s=function(e){var n,t=e.lazy,i=e.block,s=e.defaultValue,c=e.values,f=e.groupId,p=e.className,d=r.Children.toArray(e.children),v=null!=c?c:d.map((function(e){return{value:e.props.value,label:e.props.label}})),m=null!=s?s:null==(n=d.find((function(e){return e.props.default})))?void 0:n.props.value,g=a(),b=g.tabGroupChoices,h=g.setTabGroupChoices,y=(0,r.useState)(m),k=y[0],N=y[1],w=[];if(null!=f){var O=b[f];null!=O&&O!==k&&v.some((function(e){return e.value===O}))&&N(O)}var x=function(e){var n=e.currentTarget,t=w.indexOf(n),r=v[t].value;N(r),null!=f&&(h(f,r),setTimeout((function(){var e,t,r,i,a,o,l,s;(e=n.getBoundingClientRect(),t=e.top,r=e.left,i=e.bottom,a=e.right,o=window,l=o.innerHeight,s=o.innerWidth,t>=0&&a<=s&&i<=l&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(u),setTimeout((function(){return n.classList.remove(u)}),2e3))}),150))},j=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=w.indexOf(e.target)+1;t=w[r]||w[0];break;case"ArrowLeft":var i=w.indexOf(e.target)-1;t=w[i]||w[w.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},p)},v.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:k===n?0:-1,"aria-selected":k===n,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":k===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:j,onFocus:x,onClick:x},null!=t?t:n)}))),t?(0,r.cloneElement)(d.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},d.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==k})}))))}},9443:function(e,n,t){var r=(0,t(7294).createContext)(void 0);n.Z=r},8802:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=n.trailingSlash,r=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===r?a:(i=a,t?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},8780:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var i=t(8802);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=t(9964);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return r(a).default}})},9964:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},1471:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return f},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return v},default:function(){return g}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=t(6742),l=t(4996),u=t(5064),s=t(8215),c=["components"],f={title:"Listening to Events",id:"listening-to-events",slug:"/listening-to-events",custom_edit_url:null},p=void 0,d={unversionedId:"listening-to-events",id:"listening-to-events",isDocsHomePage:!1,title:"Listening to Events",description:"<Tabs",source:"@site/docs/listening-to-events.mdx",sourceDirName:".",slug:"/listening-to-events",permalink:"/egjs-infinitegrid/ko/docs/next/listening-to-events",editUrl:null,tags:[],version:"current",frontMatter:{title:"Listening to Events",id:"listening-to-events",slug:"/listening-to-events",custom_edit_url:null},sidebar:"started",previous:{title:"Using the Methods",permalink:"/egjs-infinitegrid/ko/docs/next/using-the-methods"},next:{title:"Migration Guide from v3 to v4",permalink:"/egjs-infinitegrid/ko/docs/next/migration-from-v3"}},v=[],m={toc:v};function g(e){var n=e.components,t=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(u.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("p",null,"You can listen to InfiniteGrid's events with ",(0,a.kt)("a",{parentName:"p",href:"api/InfiniteGrid#on"},"InfiniteGrid#on")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// If you\'re using a package manager\n\nig.on("requestAppend", evt => {\n  console.log(evt);\n});\n'))),(0,a.kt)(s.Z,{value:"react",mdxType:"TabItem"},(0,a.kt)("p",null,"All events are prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"on-"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"camelCase"),"d."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";\nimport { OnRequestAppend } from "@egjs/infinitegrid";\n\n<MasonryInfiniteGrid\n  onRequestAppend={(e: OnRequestAppend) => {\n    console.log(e);\n  }}\n>\n  {...}\n</MasonryInfiniteGrid>\n'))),(0,a.kt)(s.Z,{value:"vue",mdxType:"TabItem"},(0,a.kt)("p",null,"All event names are renamed to ",(0,a.kt)("inlineCode",{parentName:"p"},"kebab-case"),", following the ",(0,a.kt)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components-custom-events.html#Event-Names"},"Vue event naming convention"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<MasonryInfiniteGrid\n  @request-append="onRequestAppend"\n>\n</MasonryInfiniteGrid>\n'))),(0,a.kt)(s.Z,{value:"vue3",mdxType:"TabItem"},(0,a.kt)("p",null,"All event names are renamed to ",(0,a.kt)("inlineCode",{parentName:"p"},"kebab-case"),", following the ",(0,a.kt)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components-custom-events.html#Event-Names"},"Vue 2 event naming convention"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<MasonryInfiniteGrid\n  @request-append="onRequestAppend"\n>\n</MasonryInfiniteGrid>\n'))),(0,a.kt)(s.Z,{value:"angular",mdxType:"TabItem"},(0,a.kt)("p",null,"You can listen events of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ngx-infinitegrid")," using Angular's ",(0,a.kt)("a",{parentName:"p",href:"https://angular.io/guide/event-binding"},"event binding"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ngx-masonry-infinite-grid\n  (requestAppend)="onRequestAppend($event)">\n  {{ ... }}\n</ngx-masonry-infinite-grid>\n'))),(0,a.kt)(s.Z,{value:"svelte",mdxType:"TabItem"},(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"on:eventName")," syntax to listen InfiniteGrid events.",(0,a.kt)("br",{parentName:"p"}),"\n","All event properties are available in the event's ",(0,a.kt)("inlineCode",{parentName:"p"},"detail")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<script lang="ts">\n  import { MasonryInfiniteGrid } from "@egjs/svelte-infinitegrid";\n<\/script>\n\n<MasonryInfiniteGrid\n  on:requestAppend={({ detail: e }) => {\n  console.log(e);\n  }}>\n</MasonryInfiniteGrid>\n')))),(0,a.kt)("p",null,"See all available events at ",(0,a.kt)(o.Z,{to:(0,l.Z)("docs/api/InfiniteGrid#events"),mdxType:"Link"},"InfiniteGrid#events"),"."))}g.isMDXComponent=!0},6010:function(e,n,t){function r(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}function i(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(i&&(i+=" "),i+=n);return i}t.d(n,{Z:function(){return i}})}}]);