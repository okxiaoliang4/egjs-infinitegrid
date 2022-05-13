"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5062],{9649:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(7462),a=t(3366),l=t(7294),i=t(6010),c=t(5999),o=t(6668),s="anchorWithStickyNavbar_mojV",u="anchorWithHideOnScrollNavbar_R0VQ",m=["as","id"];function d(e){var n=e.as,t=e.id,d=(0,a.Z)(e,m),f=(0,o.L)().navbar.hideOnScroll;return"h1"!==n&&t?l.createElement(n,(0,r.Z)({},d,{className:(0,i.Z)("anchor",f?u:s),id:t}),d.children,l.createElement("a",{className:"hash-link",href:"#"+t,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(n,(0,r.Z)({},d,{id:void 0}))}},6810:function(e,n,t){t.d(n,{Z:function(){return x}});var r=t(7294),a=t(3905),l=t(7462),i=t(3366),c=t(5742),o=["mdxType","originalType"];var s=t(7646);var u=t(9960);var m=t(6010),d=t(2389),f=t(6043),v="details_lb9f",h="isBrowser_bmU9",p="collapsibleContent_i85q",g=["summary","children"];function E(e){return!!e&&("SUMMARY"===e.tagName||E(e.parentElement))}function N(e,n){return!!e&&(e===n||N(e.parentElement,n))}function Z(e){var n=e.summary,t=e.children,a=(0,i.Z)(e,g),l=(0,d.Z)(),c=(0,r.useRef)(null),o=(0,f.u)({initialState:!a.open}),s=o.collapsed,u=o.setCollapsed,Z=(0,r.useState)(a.open),L=Z[0],b=Z[1];return r.createElement("details",Object.assign({},a,{ref:c,open:L,"data-collapsed":s,className:(0,m.Z)(v,l&&h,a.className),onMouseDown:function(e){E(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;E(n)&&N(n,c.current)&&(e.preventDefault(),s?(u(!1),b(!0)):u(!0))}}),n||r.createElement("summary",null,"Details"),r.createElement(f.z,{lazy:!1,collapsed:s,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){u(e),b(!e)}},r.createElement("div",{className:p},t)))}var L="details_BAp3";function b(e){var n=Object.assign({},e);return r.createElement(Z,(0,l.Z)({},n,{className:(0,m.Z)("alert alert--info",L,n.className)}))}var y=t(9649);function C(e){return r.createElement(y.Z,e)}var k="img_E7b_";var H={head:function(e){var n=r.Children.map(e.children,(function(e){return function(e){var n,t;if(null!=e&&null!=(n=e.props)&&n.mdxType&&null!=e&&null!=(t=e.props)&&t.originalType){var a=e.props,l=(a.mdxType,a.originalType,(0,i.Z)(a,o));return r.createElement(e.props.originalType,l)}return e}(e)}));return r.createElement(c.Z,e,n)},code:function(e){var n=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&n.includes(e.props.mdxType)}))?r.createElement("code",e):r.createElement(s.Z,e)},a:function(e){return r.createElement(u.Z,e)},pre:function(e){var n;return r.createElement(s.Z,(0,r.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(n=e.children)?void 0:n.props:Object.assign({},e))},details:function(e){var n=r.Children.toArray(e.children),t=n.find((function(e){var n;return"summary"===(null==e||null==(n=e.props)?void 0:n.mdxType)})),a=r.createElement(r.Fragment,null,n.filter((function(e){return e!==t})));return r.createElement(b,(0,l.Z)({},e,{summary:t}),a)},ul:function(e){return r.createElement("ul",(0,l.Z)({},e,{className:(n=e.className,(0,m.Z)(n,(null==n?void 0:n.includes("contains-task-list"))&&"clean-list"))}));var n},img:function(e){return r.createElement("img",(0,l.Z)({loading:"lazy"},e,{className:(n=e.className,(0,m.Z)(n,k))}));var n},h1:function(e){return r.createElement(C,(0,l.Z)({as:"h1"},e))},h2:function(e){return r.createElement(C,(0,l.Z)({as:"h2"},e))},h3:function(e){return r.createElement(C,(0,l.Z)({as:"h3"},e))},h4:function(e){return r.createElement(C,(0,l.Z)({as:"h4"},e))},h5:function(e){return r.createElement(C,(0,l.Z)({as:"h5"},e))},h6:function(e){return r.createElement(C,(0,l.Z)({as:"h6"},e))}};function x(e){var n=e.children;return r.createElement(a.Zo,{components:H},n)}},1575:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(7462),a=t(3366),l=t(7294),i=t(6010),c=t(721),o="tableOfContents_cNA8",s=["className"];function u(e){var n=e.className,t=(0,a.Z)(e,s);return l.createElement("div",{className:(0,i.Z)(o,"thin-scrollbar",n)},l.createElement(c.Z,(0,r.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},721:function(e,n,t){t.d(n,{Z:function(){return g}});var r=t(7462),a=t(3366),l=t(7294);function i(e){var n=e.toc,t=e.className,r=e.linkClassName,a=e.isChild;return n.length?l.createElement("ul",{className:a?void 0:t},n.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(i,{isChild:!0,toc:e.children,className:t,linkClassName:r}))}))):null}var c=l.memo(i),o=["parentIndex"];function s(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var r=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,r),t[e.level]=n}));var r=[];return n.forEach((function(e){var t=e.parentIndex,l=(0,a.Z)(e,o);t>=0?n[t].children.push(l):r.push(l)})),r}function u(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return n.flatMap((function(e){var n=u({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[Object.assign({},e,{children:n})]:n}))}var m=t(6668);function d(e){var n=e.getBoundingClientRect();return n.top===n.bottom?d(e.parentNode):n}function f(e,n){var t,r,a=n.anchorTopOffset,l=e.find((function(e){return d(e).top>=a}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(l))?l:null!=(r=e[e.indexOf(l)-1])?r:null:null!=(t=e[e.length-1])?t:null}function v(){var e=(0,l.useRef)(0),n=(0,m.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function h(e){var n=(0,l.useRef)(void 0),t=v();(0,l.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,a=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),c=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,r=[],a=n;a<=t;a+=1)r.push("h"+a+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),o=f(c,{anchorTopOffset:t.current}),s=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){if(t){var r;n.current&&n.current!==e&&(null==(r=n.current)||r.classList.remove(a)),e.classList.add(a),n.current=e}else e.classList.remove(a)}(e,e===s)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])}var p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function g(e){var n=e.toc,t=e.className,i=void 0===t?"table-of-contents table-of-contents__left-border":t,o=e.linkClassName,d=void 0===o?"table-of-contents__link":o,f=e.linkActiveClassName,v=void 0===f?void 0:f,g=e.minHeadingLevel,E=e.maxHeadingLevel,N=(0,a.Z)(e,p),Z=(0,m.L)(),L=null!=g?g:Z.tableOfContents.minHeadingLevel,b=null!=E?E:Z.tableOfContents.maxHeadingLevel,y=function(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,l.useMemo)((function(){return u({toc:s(n),minHeadingLevel:t,maxHeadingLevel:r})}),[n,t,r])}({toc:n,minHeadingLevel:L,maxHeadingLevel:b});return h((0,l.useMemo)((function(){if(d&&v)return{linkClassName:d,linkActiveClassName:v,minHeadingLevel:L,maxHeadingLevel:b}}),[d,v,L,b])),l.createElement(c,(0,r.Z)({toc:y,className:i,linkClassName:d},N))}}}]);