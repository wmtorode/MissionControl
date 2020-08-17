(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{220:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n),i=r.a.createContext({}),l=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},o=function(e){var t=l(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),u=l(a),d=n,m=u[o+"."+d]||u[d]||c[d]||i;return a?r.a.createElement(m,Object.assign({},{ref:t},s,{components:a})):r.a.createElement(m,Object.assign({},{ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},94:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(6),i=(a(0),a(220)),l={id:"release-0.3.0",title:"Release v0.3.0",author:"Richard 'CWolf' Griffiths",author_title:"Developer",author_url:"https://github.com/cwolfs",author_image_url:"https://avatars0.githubusercontent.com/u/7622361",tags:["changelog","release","v0.3.0"]},o=[{value:"Major Features",id:"major-features",children:[]},{value:"Minor Features",id:"minor-features",children:[]},{value:"Improvements",id:"improvements",children:[]},{value:"Bugs Fixed",id:"bugs-fixed",children:[]}],c={permalink:"/blog/release-0.3.0",source:"@site/blog\\2019-09-01-release-0.3.0.md",description:"This release adds major and minor features, improvements, and bug fixes.",date:"2019-09-01T00:00:00.000Z",tags:[{label:"changelog",permalink:"/blog/tags/changelog"},{label:"release",permalink:"/blog/tags/release"},{label:"v0.3.0",permalink:"/blog/tags/v-0-3-0"}],title:"Release v0.3.0",prevItem:{title:"Release v0.3.1",permalink:"/blog/release-0.3.1"},nextItem:{title:"Release v0.2.3",permalink:"/blog/release-0.2.3"}},s={rightToc:o,metadata:c};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This release adds major and minor features, improvements, and bug fixes."),Object(i.b)("h2",{id:"major-features"},"Major Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Extended Boundaries - Increases the map size to the maximum possible. Sometimes up to four times the size."),Object(i.b)("li",{parentName:"ul"},"Dynamic Withdraw - When withdrawing, a dynamic extraction zone is created that you must get your lance to before you can escape the mission"),Object(i.b)("li",{parentName:"ul"},"Added 'Attack Defend' contract type support"),Object(i.b)("li",{parentName:"ul"},"Added 'Fire Mission' contract type support")),Object(i.b)("h2",{id:"minor-features"},"Minor Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Extended Lances: Allowed for specifying a difficulty modifier to the faction to allow for individual lance selection tweaks"),Object(i.b)("li",{parentName:"ul"},"Extended Lances: Added Better Base Defence compatibility")),Object(i.b)("h2",{id:"improvements"},"Improvements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Map loading times are improved again"),Object(i.b)("li",{parentName:"ul"},"Prevented turret lances from being influenced by Extended Lances"),Object(i.b)("li",{parentName:"ul"},"Reduced the amount of bad lance spawns where you're stuck on a hill / mountain but can move a little bit")),Object(i.b)("h2",{id:"bugs-fixed"},"Bugs Fixed"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Fixed infinite load screen caused by Extended Lances"),Object(i.b)("li",{parentName:"ul"},"Fixed Extended Lances adding bad spawns for the additional lance units"),Object(i.b)("li",{parentName:"ul"},"Fixed a bug where Extended Lances couldn't handle a bad contract json usecase")))}u.isMDXComponent=!0}}]);