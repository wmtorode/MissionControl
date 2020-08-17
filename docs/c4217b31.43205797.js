(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{199:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),o=(n(0),n(220)),l={id:"release-1.0.3",title:"Release v1.0.3",author:"Richard 'CWolf' Griffiths",author_title:"Developer",author_url:"https://github.com/cwolfs",author_image_url:"https://avatars0.githubusercontent.com/u/7622361",tags:["changelog","release","v1.0.3"]},i=[{value:"Bug Fixes",id:"bug-fixes",children:[]},{value:"Upgrade Instructions",id:"upgrade-instructions",children:[]}],c={permalink:"/blog/release-1.0.3",source:"@site/blog\\2020-05-21-release-1.0.3.md",description:"This release fixes a small but important bug in one Blackout contract.",date:"2020-05-21T00:00:00.000Z",tags:[{label:"changelog",permalink:"/blog/tags/changelog"},{label:"release",permalink:"/blog/tags/release"},{label:"v1.0.3",permalink:"/blog/tags/v-1-0-3"}],title:"Release v1.0.3",prevItem:{title:"Release v1.0.4",permalink:"/blog/release-1.0.4"},nextItem:{title:"Release v1.0.2",permalink:"/blog/release-1.0.2"}},u={rightToc:i,metadata:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This release fixes a small but important bug in one Blackout contract."),Object(o.b)("p",null,"For upgrade instructions, see below the changelog."),Object(o.b)("p",null,"Tracked by ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/CWolfs/MissionControl/milestone/23?closed=1"}),"Milestone - v1.0.3")),Object(o.b)("h2",{id:"bug-fixes"},"Bug Fixes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Blackout: ",Object(o.b)("inlineCode",{parentName:"li"},"Unknown Cause")," didn't spawn an occupying lance in one of the second event phase events")),Object(o.b)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If you're using MC without a modpack and none of your own changes, just delete the MC folder and move the new one into your mods folder"),Object(o.b)("li",{parentName:"ul"},"If you're using MC as part of a modpack, let the modpack authors update MC for you (using the below guide)"),Object(o.b)("li",{parentName:"ul"},"If you're using MC without a modpack but you've made some of your own changes to the configs, or you're a modpack author:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Copy into your ",Object(o.b)("inlineCode",{parentName:"li"},"Mods/MissionControl")," folder",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"mod.json")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"overrides/contracts/blackout/Blackout_UnknownCause.json"))))))))}s.isMDXComponent=!0},220:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a),o=r.a.createContext({}),l=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=l(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),s=l(n),p=a,b=s[i+"."+p]||s[p]||c[p]||o;return n?r.a.createElement(b,Object.assign({},{ref:t},u,{components:n})):r.a.createElement(b,Object.assign({},{ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);