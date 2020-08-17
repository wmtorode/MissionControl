(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(220)),i={id:"release-0.4.4",title:"Release v0.4.4",author:"Richard 'CWolf' Griffiths",author_title:"Developer",author_url:"https://github.com/cwolfs",author_image_url:"https://avatars0.githubusercontent.com/u/7622361",tags:["changelog","release","v0.4.4"]},l=[{value:"Upgrade Instructions",id:"upgrade-instructions",children:[]},{value:"Bugs Fixed",id:"bugs-fixed",children:[]}],s={permalink:"/blog/release-0.4.4",source:"@site/blog\\2020-01-19-release-0.4.4.md",description:"This release focuses on fixing critical bugs introduced by `v0.4.3`. Mainly fixing the broken campaign, flashpoints and skirmish.",date:"2020-01-19T00:00:00.000Z",tags:[{label:"changelog",permalink:"/blog/tags/changelog"},{label:"release",permalink:"/blog/tags/release"},{label:"v0.4.4",permalink:"/blog/tags/v-0-4-4"}],title:"Release v0.4.4",prevItem:{title:"Release v0.4.5",permalink:"/blog/release-0.4.5"},nextItem:{title:"Release v0.4.3",permalink:"/blog/release-0.4.3"}},c={rightToc:l,metadata:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This release focuses on fixing critical bugs introduced by ",Object(o.b)("inlineCode",{parentName:"p"},"v0.4.3"),". Mainly fixing the broken campaign, flashpoints and skirmish."),Object(o.b)("p",null,"Tracked by ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/CWolfs/MissionControl/milestone/13?closed=1"}),"Milestone - v0.4.4")),Object(o.b)("p",null,"For detailed documentation, visit the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.missioncontrolmod.com"}),"Mission Control Website"),"."),Object(o.b)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If you're using MC without a modpack and none of your own changes, just delete the MC folder and move the new one into your mods folder"),Object(o.b)("li",{parentName:"ul"},"If you're using MC without a modpack but you've made some of your own changes to the configs:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Just copy the new ",Object(o.b)("inlineCode",{parentName:"li"},"MissionControl.dll"),", ",Object(o.b)("inlineCode",{parentName:"li"},"cast/Portraits.json")," and ",Object(o.b)("inlineCode",{parentName:"li"},"mod.json")," into your ",Object(o.b)("inlineCode",{parentName:"li"},"Mods/MissionControl")," folder"))),Object(o.b)("li",{parentName:"ul"},"If you're using MC as part of a modpack, let the modpack authors update MC for you")),Object(o.b)("h2",{id:"bugs-fixed"},"Bugs Fixed"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Campaign / Flashpoints: MC breaks regions logic in campaign and flashpoints. This resulted in completely broken logic in the contracts."),Object(o.b)("li",{parentName:"ul"},"Skirmish: MC completely broke the loading of Skirmish"),Object(o.b)("li",{parentName:"ul"},"Additional Lances: Portrait config was not set to use the new portraits introduced in ",Object(o.b)("inlineCode",{parentName:"li"},"v0.4.3"))))}u.isMDXComponent=!0},220:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a),o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},c=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),u=i(n),p=a,b=u[l+"."+p]||u[p]||s[p]||o;return n?r.a.createElement(b,Object.assign({},{ref:t},c,{components:n})):r.a.createElement(b,Object.assign({},{ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);