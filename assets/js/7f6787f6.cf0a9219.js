"use strict";(self.webpackChunk_pdfme_website=self.webpackChunk_pdfme_website||[]).push([[552],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},m=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=u(r),c=l,k=s["".concat(o,".").concat(c)]||s[c]||d[c]||n;return r?a.createElement(k,p(p({ref:t},m),{},{components:r})):a.createElement(k,p({ref:t},m))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,p=new Array(n);p[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[s]="string"==typeof e?e:l,p[1]=i;for(var u=2;u<n;u++)p[u]=r[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},59484:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var a=r(87462),l=(r(67294),r(3905));const n={},p="Supported Features",i={unversionedId:"supported-features",id:"supported-features",title:"Supported Features",description:"In pdfme, the following elements can be rendered.",source:"@site/docs/supported-features.md",sourceDirName:".",slug:"/supported-features",permalink:"/docs/supported-features",draft:!1,editUrl:"https://github.com/pdfme/pdfme/tree/main/website/docs/supported-features.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Custom Fonts",permalink:"/docs/custom-fonts"}},o={},u=[{value:"Currently Supported",id:"currently-supported",level:2},{value:"Text",id:"text",level:3},{value:"Shape",id:"shape",level:3},{value:"Graphics",id:"graphics",level:3},{value:"Barcodes",id:"barcodes",level:3},{value:"Planned Support",id:"planned-support",level:2}],m={toc:u},s="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(s,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"supported-features"},"Supported Features"),(0,l.kt)("p",null,"In pdfme, the following elements can be rendered.",(0,l.kt)("br",{parentName:"p"}),"\n","For elements that are not supported, you can add your own rendering process using the ",(0,l.kt)("a",{parentName:"p",href:"/docs/custom-schemas"},"plugin mechanism"),"."),(0,l.kt)("h2",{id:"currently-supported"},"Currently Supported"),(0,l.kt)("p",null,"For using schemas other than the Text schema, please refer to the following documentation.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"/docs/custom-schemas#using-schemas-from-pdfmeschemas"},"Using Schemas from @pdfme/schemas")),(0,l.kt)("h3",{id:"text"},"Text"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Style-related",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Font Size"),(0,l.kt)("li",{parentName:"ul"},"Letter Spacing"),(0,l.kt)("li",{parentName:"ul"},"Text Align"),(0,l.kt)("li",{parentName:"ul"},"Vertical Align"),(0,l.kt)("li",{parentName:"ul"},"Line Height"),(0,l.kt)("li",{parentName:"ul"},"Text Color"),(0,l.kt)("li",{parentName:"ul"},"Background Color"))),(0,l.kt)("li",{parentName:"ul"},"Font-related",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"TrueType fonts (TTF & TTC)"),(0,l.kt)("li",{parentName:"ul"},"OpenType fonts with PostScript or TrueType outlines (TTF, OTF, & OTC)"),(0,l.kt)("li",{parentName:"ul"},"Support for CJK (Chinese, Japanese, Korean) fonts"),(0,l.kt)("li",{parentName:"ul"},"Embedding and subsetting of fonts"),(0,l.kt)("li",{parentName:"ul"},"Support for multiple fonts and fallback fonts"),(0,l.kt)("li",{parentName:"ul"},"Dynamic Font Sizing",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Detailed options for Min, Max, Fit"))))),(0,l.kt)("li",{parentName:"ul"},"Support Read only")),(0,l.kt)("h3",{id:"shape"},"Shape"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Line",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Style-related",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Color"))))),(0,l.kt)("li",{parentName:"ul"},"Rectangle",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Style-related",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Border Width"),(0,l.kt)("li",{parentName:"ul"},"Border Color"),(0,l.kt)("li",{parentName:"ul"},"Color"))))),(0,l.kt)("li",{parentName:"ul"},"Ellipse",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Style-related",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Border Width"),(0,l.kt)("li",{parentName:"ul"},"Border Color"),(0,l.kt)("li",{parentName:"ul"},"Color")))))),(0,l.kt)("h3",{id:"graphics"},"Graphics"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Image",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Formats",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"JPEG"),(0,l.kt)("li",{parentName:"ul"},"PNG"))),(0,l.kt)("li",{parentName:"ul"},"Support Read only"))),(0,l.kt)("li",{parentName:"ul"},"SVG",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Support Read only")))),(0,l.kt)("h3",{id:"barcodes"},"Barcodes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Various types",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"qrcode"),(0,l.kt)("li",{parentName:"ul"},"japanpost"),(0,l.kt)("li",{parentName:"ul"},"ean13"),(0,l.kt)("li",{parentName:"ul"},"ean8"),(0,l.kt)("li",{parentName:"ul"},"code39"),(0,l.kt)("li",{parentName:"ul"},"code128"),(0,l.kt)("li",{parentName:"ul"},"nw7"),(0,l.kt)("li",{parentName:"ul"},"itf14"),(0,l.kt)("li",{parentName:"ul"},"upca"),(0,l.kt)("li",{parentName:"ul"},"upce"),(0,l.kt)("li",{parentName:"ul"},"gs1datamatrix"))),(0,l.kt)("li",{parentName:"ul"},"Style-related",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Bar Color"),(0,l.kt)("li",{parentName:"ul"},"Background Color"),(0,l.kt)("li",{parentName:"ul"},"Text Color"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/pdfme/pdfme/issues/23"},"Include text option (planned support)"))))),(0,l.kt)("h2",{id:"planned-support"},"Planned Support"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/pdfme/pdfme/issues/319"},"HyperLink")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/tables"},"Table"))))}d.isMDXComponent=!0}}]);