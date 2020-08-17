(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),i=(n(0),n(220)),o={id:"release-1.0.5",title:"Release v1.0.5",author:"Richard 'CWolf' Griffiths",author_title:"Developer",author_url:"https://github.com/cwolfs",author_image_url:"https://avatars0.githubusercontent.com/u/7622361",tags:["changelog","release","v1.0.5"]},l=[{value:"Bug Fixes",id:"bug-fixes",children:[]},{value:"Upgrade Instructions",id:"upgrade-instructions",children:[]}],s={permalink:"/blog/release-1.0.5",source:"@site/blog\\2020-06-02-release-1.0.5.md",description:"This release fixes a vanilla infinite contracts screen issue relating to original HBS code and restrictive contracts involving lack of faction selection and system restrictions, and a quick skirmish bug.",date:"2020-06-02T00:00:00.000Z",tags:[{label:"changelog",permalink:"/blog/tags/changelog"},{label:"release",permalink:"/blog/tags/release"},{label:"v1.0.5",permalink:"/blog/tags/v-1-0-5"}],title:"Release v1.0.5",prevItem:{title:"Release v1.1.0",permalink:"/blog/release-1.1.0"},nextItem:{title:"Release v1.0.4",permalink:"/blog/release-1.0.4"}},c={rightToc:l,metadata:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This release fixes a vanilla infinite contracts screen issue relating to original HBS code and restrictive contracts involving lack of faction selection and system restrictions, and a quick skirmish bug."),Object(i.b)("p",null,"For upgrade instructions, see below the changelog."),Object(i.b)("p",null,"Tracked by ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/CWolfs/MissionControl/milestone/25?closed=1"}),"Milestone - v1.0.5")),Object(i.b)("h2",{id:"bug-fixes"},"Bug Fixes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Contracts: Fixed infinite loading screen when faction and system restrictions conflicted with some contract types and contracts (Thanks a lot for the help ",Object(i.b)("strong",{parentName:"li"},"Pode"),", ",Object(i.b)("strong",{parentName:"li"},"Granner")," and ",Object(i.b)("strong",{parentName:"li"},"Quiller")," with debugging this)"),Object(i.b)("li",{parentName:"ul"},"Skirmish: Fixed map loading exception when allies dropped with you")),Object(i.b)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If you're using MC without a modpack and none of your own changes, just delete the MC folder and move the new one into your mods folder"),Object(i.b)("li",{parentName:"ul"},"If you're using MC as part of a modpack, let the modpack authors update MC for you (using the below guide)"),Object(i.b)("li",{parentName:"ul"},"If you're using MC without a modpack but you've made some of your own changes to the configs, or you're a modpack author:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Copy into your ",Object(i.b)("inlineCode",{parentName:"li"},"Mods/MissionControl")," folder",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"MissionControl.dll")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mod.json"))))))))}u.isMDXComponent=!0},220:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a),i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},c=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),u=o(n),p=a,b=u[l+"."+p]||u[p]||s[p]||i;return n?r.a.createElement(b,Object.assign({},{ref:t},c,{components:n})):r.a.createElement(b,Object.assign({},{ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);