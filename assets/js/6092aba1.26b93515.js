(self.webpackChunk=self.webpackChunk||[]).push([[792],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return f},kt:function(){return u}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},f=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,m=d["".concat(c,".").concat(u)]||d[u]||s[u]||i;return t?o.createElement(m,a(a({ref:n},f),{},{components:t})):o.createElement(m,a({ref:n},f))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7560:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var o=t(2122),r=t(9756),i=(t(7294),t(3905)),a=["components"],l={id:"load-config",title:"Loading Config",sidebar_label:"Loading Config"},c={unversionedId:"load-config",id:"load-config",isDocsHomePage:!1,title:"Loading Config",description:"loadConfig",source:"@site/docs/author-load-config.md",sourceDirName:".",slug:"/load-config",permalink:"/load-config",editUrl:"https://github.com/kamilkisiela/graphql-config/edit/master/website/docs/author-load-config.md",version:"current",sidebar_label:"Loading Config",frontMatter:{id:"load-config",title:"Loading Config",sidebar_label:"Loading Config"},sidebar:"docs",previous:{title:"Specifying documents",permalink:"/documents"},next:{title:"Writing and Consuming Extensions",permalink:"/extensions"}},p=[{value:"loadConfig",id:"loadconfig",children:[]},{value:"Options",id:"options",children:[{value:"<code>filepath</code>",id:"filepath",children:[]},{value:"<code>rootDir</code>",id:"rootdir",children:[]},{value:"<code>configName</code>",id:"configname",children:[]},{value:"<code>extensions</code>",id:"extensions",children:[]},{value:"<code>throwOnMissing</code>",id:"throwonmissing",children:[]},{value:"<code>throwOnEmpty</code>",id:"throwonempty",children:[]}]}],f={toc:p};function s(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"loadconfig"},"loadConfig"),(0,i.kt)("p",null,"This function is the starting point for using GraphQL Config. It looks for a config file in ",(0,i.kt)("a",{parentName:"p",href:"/usage#config-search-places"},"predefined search places")," in the currently working directory."),(0,i.kt)("p",null,"A basic usage example (async):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import {loadConfig} from 'graphql-config';\n\nasync function main() {\n  const config = await loadConfig({...}); // an instance of GraphQLConfig\n}\n")),(0,i.kt)("p",null,"Synchronous version:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import {loadConfigSync} from 'graphql-config';\n\nfunction main() {\n  const config = loadConfigSync({...}); // an instance of GraphQLConfig\n}\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"filepath"},(0,i.kt)("inlineCode",{parentName:"h3"},"filepath")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"type: ",(0,i.kt)("inlineCode",{parentName:"em"},"string"))),(0,i.kt)("p",null,"An exact path of a config file."),(0,i.kt)("h3",{id:"rootdir"},(0,i.kt)("inlineCode",{parentName:"h3"},"rootDir")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"type: ",(0,i.kt)("inlineCode",{parentName:"em"},"string"))),(0,i.kt)("p",null,"A path of a directory where GraphQL Config should look for a file ",(0,i.kt)("em",{parentName:"p"},"(uses process.cwd() by default)"),"."),(0,i.kt)("h3",{id:"configname"},(0,i.kt)("inlineCode",{parentName:"h3"},"configName")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"type: ",(0,i.kt)("inlineCode",{parentName:"em"},"string"))),(0,i.kt)("p",null,"A name of the config file. It's ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql")," by default. Using ",(0,i.kt)("inlineCode",{parentName:"p"},"relay")," as a config name instructs GraphQL Config to look for all the variations of possible config file names where one of them is ",(0,i.kt)("inlineCode",{parentName:"p"},"relay.config.js"),"."),(0,i.kt)("h3",{id:"extensions"},(0,i.kt)("inlineCode",{parentName:"h3"},"extensions")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"type: ",(0,i.kt)("inlineCode",{parentName:"em"},"GraphQLExtensionDeclaration[]"))),(0,i.kt)("p",null,"An array of ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphQLExtensionDeclaration")," objects, place to register extensions."),(0,i.kt)("h3",{id:"throwonmissing"},(0,i.kt)("inlineCode",{parentName:"h3"},"throwOnMissing")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"type: ",(0,i.kt)("inlineCode",{parentName:"em"},"boolean"))),(0,i.kt)("p",null,"GraphQL Config throws an error where there's no config file by default."),(0,i.kt)("h3",{id:"throwonempty"},(0,i.kt)("inlineCode",{parentName:"h3"},"throwOnEmpty")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"type: ",(0,i.kt)("inlineCode",{parentName:"em"},"boolean"))),(0,i.kt)("p",null,"GraphQL Config by default throws an error if there's a config file but the file is empty."))}s.isMDXComponent=!0}}]);