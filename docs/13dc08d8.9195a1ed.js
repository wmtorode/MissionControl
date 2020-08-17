(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{220:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return d}));var a=n(0),l=n.n(a),i=l.a.createContext({}),o=function(e){var t=l.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},r=function(e){var t=o(e.components);return l.a.createElement(i.Provider,{value:t},e.children)};var b={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},c=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),d=o(n),s=a,p=d[r+"."+s]||d[s]||b[s]||i;return n?l.a.createElement(p,Object.assign({},{ref:t},c,{components:n})):l.a.createElement(p,Object.assign({},{ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var r={};for(var b in t)hasOwnProperty.call(t,b)&&(r[b]=t[b]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var d=2;d<i;d++)o[d]=n[d];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return r})),n.d(t,"metadata",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(2),l=n(6),i=(n(0),n(220)),o={id:"release-1.0.0",title:"Release v1.0.0",author:"Richard 'CWolf' Griffiths",author_title:"Developer",author_url:"https://github.com/cwolfs",author_image_url:"https://avatars0.githubusercontent.com/u/7622361",tags:["changelog","release","v1.0.0"]},r=[{value:"Major Features",id:"major-features",children:[]},{value:"Minor Features",id:"minor-features",children:[]},{value:"Changes",id:"changes",children:[]},{value:"Bug Fixes",id:"bug-fixes",children:[]},{value:"Upgrade Instructions",id:"upgrade-instructions",children:[]}],b={permalink:"/blog/release-1.0.0",source:"@site/blog\\2020-05-17-release-1.0.0.md",description:"This release adds a new custom contract type, 9 new contracts, expands duel contract type biome support and lots of quality of life features and bug fixes.",date:"2020-05-17T00:00:00.000Z",tags:[{label:"changelog",permalink:"/blog/tags/changelog"},{label:"release",permalink:"/blog/tags/release"},{label:"v1.0.0",permalink:"/blog/tags/v-1-0-0"}],title:"Release v1.0.0",prevItem:{title:"Release v1.0.1",permalink:"/blog/release-1.0.1"},nextItem:{title:"Release v0.4.6",permalink:"/blog/release-0.4.6"}},c={rightToc:r,metadata:b};function d(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This release adds a new custom contract type, 9 new contracts, expands duel contract type biome support and lots of quality of life features and bug fixes."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"1.0.0")," has been a big release for me. I feel with the maturity of Mission Control it warrants the ",Object(i.b)("inlineCode",{parentName:"p"},"1.0.0")," versioning. This release contained over ",Object(i.b)("inlineCode",{parentName:"p"},"24%")," of the commits in the entire mod and you'll see why below in the changelog. A huge amount of effort has been put into opening up the contract type system to allow other modders to create new and interesting contract types for the whole community to enjoy. Hopefully people will take advantage of this."),Object(i.b)("p",null,"Thanks for staying with me on this journey over the years (first release was on the 18th November 2018 with the first code saved on the 11th September 2018). I know there's still issues with the spawner but I feel, as whole, Mission Control has greatly improved the BattleTech experience. I hope you all feel the same way."),Object(i.b)("p",null,"Enjoy and please let me know what you think of ",Object(i.b)("inlineCode",{parentName:"p"},"Blackout"),", the new contract type."),Object(i.b)("p",null,"For upgrade instructions, see below the changelog."),Object(i.b)("h2",{id:"major-features"},"Major Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Heavily expanded the custom contract type builder (check API docs on MC's website)"),Object(i.b)("li",{parentName:"ul"},"Contract Types: Added new custom contract type",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Blackout")," - A point of interest of your employer has gone dark and they're sending ",Object(i.b)("em",{parentName:"li"},"you")," in to investigate. A low intel situation with different situations each time you play.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Contains new non-vanilla map logic."),Object(i.b)("li",{parentName:"ul"},"Includes new ally chatter specific to Blackout"))))),Object(i.b)("li",{parentName:"ul"},"Contracts: Added 3 contracts for ",Object(i.b)("inlineCode",{parentName:"li"},"Blackout"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Dug in Deep"),Object(i.b)("li",{parentName:"ul"},"Heavy Static"),Object(i.b)("li",{parentName:"ul"},"Unknown Cause"))),Object(i.b)("li",{parentName:"ul"},"Contracts: Added 3 contracts for ",Object(i.b)("inlineCode",{parentName:"li"},"Solo Duel"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"All Eyes On"),Object(i.b)("li",{parentName:"ul"},"Challenge Accepted"),Object(i.b)("li",{parentName:"ul"},"Cornered Revenge"))),Object(i.b)("li",{parentName:"ul"},"Contracts: Added 3 contracts for ",Object(i.b)("inlineCode",{parentName:"li"},"Duo Duel"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"At High Noon"),Object(i.b)("li",{parentName:"ul"},"Last Minute Replacements"),Object(i.b)("li",{parentName:"ul"},"Yearly Tussle"))),Object(i.b)("li",{parentName:"ul"},"Maps: Added 4 maps/biomes to ",Object(i.b)("inlineCode",{parentName:"li"},"Blackout"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"frostyslopes")," map on ",Object(i.b)("inlineCode",{parentName:"li"},"tundra")," biome"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mountainhold")," map on ",Object(i.b)("inlineCode",{parentName:"li"},"lunar")," biome"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"story2")," map on ",Object(i.b)("inlineCode",{parentName:"li"},"badlands")," biome"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"story7")," map on ",Object(i.b)("inlineCode",{parentName:"li"},"lowlands")," biome"))),Object(i.b)("li",{parentName:"ul"},"Maps: Added 3 more maps/biomes to ",Object(i.b)("inlineCode",{parentName:"li"},"Solo Duel")," and ",Object(i.b)("inlineCode",{parentName:"li"},"Duo Duel"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"deathvalley")," map on ",Object(i.b)("inlineCode",{parentName:"li"},"desert")," biome"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"story3")," map on ",Object(i.b)("inlineCode",{parentName:"li"},"lunar craters")," biome"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"story6")," map on ",Object(i.b)("inlineCode",{parentName:"li"},"frozen poles")," biome"))),Object(i.b)("li",{parentName:"ul"},"AI: Follow AI - Added alternative pathfinding for 'Follow Player' AI",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Configurable in ",Object(i.b)("inlineCode",{parentName:"li"},"settings.json")," with the new ",Object(i.b)("inlineCode",{parentName:"li"},"Alternative")," being the new default with ",Object(i.b)("inlineCode",{parentName:"li"},"Original")," being the ",Object(i.b)("inlineCode",{parentName:"li"},"v0.4.6")," version"))),Object(i.b)("li",{parentName:"ul"},"Additional Lances: Alternative spawn calculation system",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Off by default")),Object(i.b)("li",{parentName:"ul"},"Variable enemy/ally lance drops based on player drop skulls/difficulty level"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"settings.json")," under ",Object(i.b)("inlineCode",{parentName:"li"},"DropWeightInfluence"))))),Object(i.b)("h2",{id:"minor-features"},"Minor Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Additional Lances: Option to indepedently disable allies and/or enemy lances",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"settings.json")," as ",Object(i.b)("inlineCode",{parentName:"li"},"DisableAllies")," and ",Object(i.b)("inlineCode",{parentName:"li"},"DisableEnemies")))),Object(i.b)("li",{parentName:"ul"},"Additional Lances: Option to disabe/enable objective markers under certain conditions.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This allows the AL objective to be hidden to make the contract more unpredicable."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"settings.json")," as ",Object(i.b)("inlineCode",{parentName:"li"},"HideObjective")," and ",Object(i.b)("inlineCode",{parentName:"li"},"ForceDisplayOfHiddenObjectiveIfPrimary")))),Object(i.b)("li",{parentName:"ul"},"Additional Lances: Added a MRB influence for lance selection",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"For example, ",Object(i.b)("inlineCode",{parentName:"li"},"MRB_Level:4")," to spawn specific lances for MRB level 4"),Object(i.b)("li",{parentName:"ul"},"Or, ",Object(i.b)("inlineCode",{parentName:"li"},"MRB_Rating:200:300"),", to spawn when MRB rating is between 200 and 300"))),Object(i.b)("li",{parentName:"ul"},"AI: Follow AI - Fixed broken vanilla method call.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"NeutralToAll")," units (and maybe others) were being identified as enemies for 'Follow AI' pathfinding. This might have caused some situations where the allies stopped following the player."))),Object(i.b)("li",{parentName:"ul"},"Random Spawns: Exposed the boundary 'buffer' zone",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This is where a lance is allowed to spawn (beyond X and within Y distance) when using the ",Object(i.b)("inlineCode",{parentName:"li"},"SpawnLanceAtEdgeBounadry")," spawner profile."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"settings.json")," under the ",Object(i.b)("inlineCode",{parentName:"li"},"SpawnLanceAtEdgeBoundary")," section"))),Object(i.b)("li",{parentName:"ul"},"Extended Lances: Added a system to skip extending a lance by exclude tags",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Skip if they have a set tag under their lance ",Object(i.b)("inlineCode",{parentName:"li"},"lanceExcludedTagSet")," in the contract override JSON"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"settings.json")," as ",Object(i.b)("inlineCode",{parentName:"li"},"SkipWhenExcludeTagsContain")))),Object(i.b)("li",{parentName:"ul"},"Extended Lances: Added a system to skip extending a lance by tags",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Skip if they have a set tag under their lance ",Object(i.b)("inlineCode",{parentName:"li"},"lanceTagSet")," in the contract override JSON"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"settings.json")," as ",Object(i.b)("inlineCode",{parentName:"li"},"SkipWhenTaggedWithAny")," and ",Object(i.b)("inlineCode",{parentName:"li"},"SkipWhenTaggedWithAll")))),Object(i.b)("li",{parentName:"ul"},"Extended Boundaries: Increased the boundary size for ",Object(i.b)("inlineCode",{parentName:"li"},"SimpleBattle")," and ",Object(i.b)("inlineCode",{parentName:"li"},"mapGeneral_desertDam_aDes")," map")),Object(i.b)("h2",{id:"changes"},"Changes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Solo/Duo Duels: Enforced weight limits on all contracts lower than difficulty 8"),Object(i.b)("li",{parentName:"ul"},"Solo/Duo Duels: Prevented vehicles from spawning")),Object(i.b)("h2",{id:"bug-fixes"},"Bug Fixes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Additional Lances: ",Object(i.b)("inlineCode",{parentName:"li"},"ExcludeContractTypes")," didn't work correctly and was using the wrong setting. It was picking up the ",Object(i.b)("inlineCode",{parentName:"li"},"ExtendedLances")," one instead."),Object(i.b)("li",{parentName:"ul"},"Additional Lances: Comma based decimal locales caused rewards to be much higher than intended"),Object(i.b)("li",{parentName:"ul"},"Random Spawns: Fixed one cause of ",Object(i.b)("inlineCode",{parentName:"li"},"Defend Base")," and ",Object(i.b)("inlineCode",{parentName:"li"},"Destroy Base")," sometimes spawning you in the wrong location, or in the enemy base"),Object(i.b)("li",{parentName:"ul"},"Random Spawns: Added a set distance the player must spawn beyond on ",Object(i.b)("inlineCode",{parentName:"li"},"Destroy Base")," (roughly 16 hexes away)"),Object(i.b)("li",{parentName:"ul"},"Contract Types: Custom contract types weren't being picked up for ",Object(i.b)("inlineCode",{parentName:"li"},"ExcludeContractTypes")," or ",Object(i.b)("inlineCode",{parentName:"li"},"IncludeContractTypes")," settings"),Object(i.b)("li",{parentName:"ul"},"Droppods: Fixed a vanilla bug where droppod animations and effects sometimes weren't synced up in position to the actual drop pod and landing mech/vehicle")),Object(i.b)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If you're using MC without a modpack and none of your own changes, just delete the MC folder and move the new one into your mods folder"),Object(i.b)("li",{parentName:"ul"},"If you're using MC as part of a modpack, let the modpack authors update MC for you (using the below guide)"),Object(i.b)("li",{parentName:"ul"},"If you're using MC without a modpack but you've made some of your own changes to the configs, or you're a modpack author:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Delete from your ",Object(i.b)("inlineCode",{parentName:"li"},"MissionControl")," folder",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"contractTypeBuilds")," folder"))),Object(i.b)("li",{parentName:"ul"},"Copy into your ",Object(i.b)("inlineCode",{parentName:"li"},"Mods/MissionControl")," folder:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"MissionControl.dll")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mod.json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"contractTypeBuilds")," folder"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dialogue/AllyDrop.json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"overrides/cast")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"overrides/contracts/blackout")," folder"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"overrides/contracts/soloduel")," folder"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"overrides/contracts/duoduel")," folder"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"overrides/enums")," folder"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"overrides/encounterLayers")," folder"))),Object(i.b)("li",{parentName:"ul"},"Edit ",Object(i.b)("inlineCode",{parentName:"li"},"settings.json")," with the following:")))),Object(i.b)("h4",{id:"add-to-additionallances-section"},"Add to ",Object(i.b)("inlineCode",{parentName:"h4"},"AdditionalLances")," section"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"HideObjective": true,\n"ShowObjectiveOnLanceDetected": true,\n"AlwaysDisplayHiddenObjectiveIfPrimary": false,\n"MatchAllyLanceCountToEnemy": false,\n"DropWeightInfluence": {\n  "Enable": false,\n  "GlobalEnemyChanceToSpawn": 0.05,\n  "GlobalAllyChanceToSpawn": 0.8,\n  "EnemySpawnInfluencePerHalfSkull": 0.1,\n  "AllySpawnInfluencePerHalfSkull": -0.1\n},\n"DisableAllies": false,\n"DisableEnemies": false\n')),Object(i.b)("h4",{id:"add-to-extendedlances-section"},"Add to ",Object(i.b)("inlineCode",{parentName:"h4"},"ExtendedLances")," section"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"SkipWhenTaggedWithAny": ["lance_type_solo"],\n"SkipWhenTaggedWithAll": [],\n"SkipWhenExcludeTagsContain": ["no_extended_lance"],\n')),Object(i.b)("h4",{id:"add-to-extendedboundariesoverrides-section"},"Add to ",Object(i.b)("inlineCode",{parentName:"h4"},"ExtendedBoundaries/Overrides")," section"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "MapId": "mapGeneral_desertDam_aDes",\n  "ContractTypeName": "SimpleBattle",\n  "IncreaseBoundarySizeByPercentage": 0.55\n}\n')),Object(i.b)("h4",{id:"add-to-aifollowplayer-section"},"Add to ",Object(i.b)("inlineCode",{parentName:"h4"},"AI/FollowPlayer")," section"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"Pathfinding": "Alternative",\n')),Object(i.b)("h4",{id:"add-to-the-top-level"},"Add to the top level"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"Spawners": {\n  "SpawnLanceAtEdgeBoundary": {\n    "MinBuffer": 100,\n    "MaxBuffer": 200\n  }\n}\n')))}d.isMDXComponent=!0}}]);