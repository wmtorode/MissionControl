(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"rightToc",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"default",(function(){return O}));var n=a(2),l=a(6),b=(a(0),a(191)),r={id:"settings",title:"Settings"},c=[{value:"Settings Breakdown",id:"settings-breakdown",children:[]},{value:"Random Spawns",id:"random-spawns",children:[]},{value:"Hot Drop Protection",id:"hot-drop-protection",children:[]},{value:"Additional Lances",id:"additional-lances",children:[]},{value:"Additional Lances - Disable When Max Tonnage",id:"additional-lances---disable-when-max-tonnage",children:[]},{value:"Additional Lances - Drop Weight Influence",id:"additional-lances---drop-weight-influence",children:[]},{value:"Extended Lances",id:"extended-lances",children:[]},{value:"Extended Boundaries",id:"extended-boundaries",children:[]},{value:"Dynamic Withdraw",id:"dynamic-withdraw",children:[]},{value:"AI",id:"ai",children:[]},{value:"AI - Follow Player",id:"ai---follow-player",children:[]},{value:"Spawners - Spawn Lance At Edge Boundary",id:"spawners---spawn-lance-at-edge-boundary",children:[]}],i={id:"features/settings",title:"Settings",description:"Mission Control is designed from the very beginning to be entirely configurable for every feature. Due to this, there's a large level of control the player or modder has over the settings.",source:"@site/docs\\features\\settings.md",permalink:"/docs/features/settings",sidebar:"docs",previous:{title:"Media",permalink:"/docs/overview/media"},next:{title:"Custom Contract Types",permalink:"/docs/features/custom-contract-types"}},d={rightToc:c,metadata:i};function O(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Mission Control is designed from the very beginning to be entirely configurable for every feature. Due to this, there's a large level of control the player or modder has over the settings."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "DebugMode": true,\n  "VersionCheck": true,\n  "DebugSkirmishMode": true,\n  "DisableIfFlashpointContract": true,\n  "RandomSpawns": {\n    "Enable": true,\n    "ExcludeContractTypes": ["SoloDuel", "DuoDuel"]\n  },\n  "HotDrop": {\n    "Enable": true,\n    "ExcludeContractTypes": ["SoloDuel", "DuoDuel"],\n    "GuardOnHotDrop": false,\n    "EvasionPipsOnHotDrop": 6,\n    "IncludeEnemies": true,\n    "IncludeAllyTurrets": false,\n    "IncludeEnemyTurrets": false\n  },\n  "AdditionalLances": {\n    "Enable": true,\n    "ExcludeContractTypes": ["SoloDuel", "DuoDuel"],\n    "IsPrimaryObjectiveIn": ["SimpleBattle", "ThreeWayBattle"],\n    "HideObjective": true,\n    "ShowObjectiveOnLanceDetected": true,\n    "AlwaysDisplayHiddenObjectiveIfPrimary": false,\n    "UseElites": true,\n    "UseDialogue": true,\n    "SkullValueMatters": true,\n    "BasedOnVisibleSkullValue": true,\n    "UseGeneralProfileForSkirmish": true,\n    "DisableIfFlashpointContract": true,\n    "DisableWhenMaxTonnage": {\n      "Enable": true,\n      "Limited": false,\n      "LimitedToUnder": 300\n    },\n    "MatchAllyLanceCountToEnemy": false,\n    "DropWeightInfluence": {\n      "Enable": false,\n      "GlobalEnemyChanceToSpawn": 0.05,\n      "GlobalAllyChanceToSpawn": 0.8,\n      "EnemySpawnInfluencePerHalfSkull": 0.1,\n      "AllySpawnInfluencePerHalfSkull": -0.1\n    },\n    "DisableAllies": false,\n    "DisableEnemies": false\n  },\n  "ExtendedLances": {\n    "Enable": true,\n    "Autofill": true,\n    "ExcludeContractTypes": ["SoloDuel", "DuoDuel"],\n    "SkipWhenTaggedWithAny": ["lance_type_solo"],\n    "SkipWhenTaggedWithAll": [],\n    "SkipWhenExcludeTagsContain": ["no_extended_lance"],\n    "LanceSizes": {\n      "5": [],\n      "6": []\n    }\n  },\n  "ExtendedBoundaries": {\n    "Enable": true,\n    "ExcludeContractTypes": ["SoloDuel", "DuoDuel"],\n    "IncreaseBoundarySizeByPercentage": 0.3,\n    "Overrides": [\n      {\n        "MapId": "mapGeneral_frigidSteppes_iTnd",\n        "ContractTypeName": "CaptureBase",\n        "IncreaseBoundarySizeByPercentage": 0.75\n      },\n      {\n        "MapId": "mapGeneral_icyOutpost_iGlc",\n        "ContractTypeName": "CaptureBase",\n        "IncreaseBoundarySizeByPercentage": 0.75\n      },\n      {\n        "MapId": "mapGeneral_highPeak_iGlc",\n        "ContractTypeName": "SimpleBattle",\n        "IncreaseBoundarySizeByPercentage": 0.75\n      },\n      {\n        "ContractTypeName": "FireMission",\n        "IncreaseBoundarySizeByPercentage": 0.5\n      },\n      {\n        "MapId": "mapGeneral_desertDam_aDes",\n        "ContractTypeName": "SimpleBattle",\n        "IncreaseBoundarySizeByPercentage": 0.55\n      }\n    ]\n  },\n  "DynamicWithdraw": {\n    "Enable": true,\n    "ExcludeContractTypes": ["SoloDuel", "DuoDuel"],\n    "MinDistanceForZone": 50,\n    "MaxDistanceForZone": 400,\n    "DisorderlyWithdrawalCompatibility": false\n  },\n  "AI": {\n    "FollowPlayer": {\n      "Pathfinding": "Alternative",\n      "Target": "HeaviestMech",\n      "StopWhen": "OnEnemyDetected",\n      "MaxDistanceFromTargetBeforeSprinting": 120,\n      "TargetZoneRadius": 120\n    }\n  },\n  "Spawners": {\n    "SpawnLanceAtEdgeBoundary": {\n      "MinBuffer": 100,\n      "MaxBuffer": 200\n    }\n  }\n}\n')),Object(b.b)("h3",{id:"settings-breakdown"},"Settings Breakdown"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Path"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DebugMode"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable debug logging and debug skirmish mode, if it's enabled")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VersionCheck"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Controls if the MC version checker runs and displays a 'You should update' popup when github MC updates")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DebugSkirmishMode"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enables the 'Quick Skirmish' feature")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DisableIfFlashpointContract"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Disables MC for Flashpoints if ",Object(b.b)("inlineCode",{parentName:"td"},"true"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RandomSpawns"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/features/random-spawns"}),"Object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Random spawn settings")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"HotDrop"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#hot-drop-protection"}),"Object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hot drop protection protects you with extra evasion and brace/guard if dropped close to enemies")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AdditionalLances"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#additional-lances"}),"Object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Settings for dropping extra support lances into maps (allies and enemies)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ExtendedLances"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/features/extended-lances"}),"Object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Settings for controlled extra lance spawns for AI lances (e.g. clan stars)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ExtendedBoundaries"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/features/extended-boundaries"}),"Object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Settings for increasing the boundaries of the encounters / maps")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DynamicWithdraw"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/features/dynamic-withdraw"}),"Object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Settings for having a real withdraw. A extraction point appears and you must get there")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AI"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#ai"}),"Object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Settings for AI")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Spawners"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#spawners"}),"Object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Settings for the spawn system")))),Object(b.b)("h3",{id:"random-spawns"},"Random Spawns"),Object(b.b)("p",null,"See ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/features/random-spawns"}),"Random Spawn Docs"),"."),Object(b.b)("h3",{id:"hot-drop-protection"},"Hot Drop Protection"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"IMPORTANT - This controls the ",Object(b.b)("em",{parentName:"strong"},"PROTECTION")," when a hot drop happens and not like the property suggests - ",Object(b.b)("em",{parentName:"strong"},"hot drops"))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Path"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enables the feature of hot drop protection")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"ExcludeContractTypes")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No contract types"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'["Assasinate", "CaptureBase"]')," would remove these two contract types from the entire list of available contract types. ",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("inlineCode",{parentName:"td"},"[]")," would fallback to default")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GuardOnHotDrop"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enables guard/brace protection bonus in a hot drop")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"EvasionPipsOnHotDrop"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"6")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets evasion to 6 in a hot drop")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IncludeEnemies"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets if the enemy lances should also get the protection")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IncludeAllyTurrets"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets if ally turrets should get the protection")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IncludeEnemyTurrets"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets if enemy turrets should get the protection")))),Object(b.b)("h3",{id:"additional-lances"},"Additional Lances"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Path"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enables the feature of Additional Lances")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"ExcludeContractTypes")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No contract types"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'["Assasinate", "CaptureBase"]')," would remove these two contract types from the entire list of available contract types. ",Object(b.b)("br",null),Object(b.b)("br",null)," ",Object(b.b)("inlineCode",{parentName:"td"},"[]")," would fallback to default")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IsPrimaryObjectiveIn"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"[]")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'["SimpleBattle"]')),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets contract types where the additional lances are classed as primary objectives so they would need to be destroyed to end a mission")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"HideObjective"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hides the 'Destroy Support Lance' objective")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ShowObjectiveOnLanceDetected"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If ",Object(b.b)("inlineCode",{parentName:"td"},"HideObjective")," is ",Object(b.b)("inlineCode",{parentName:"td"},"true")," then once an Additional Lance is detected in the map the objective will appear")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AlwaysDisplayHiddenObjectiveIfPrimary"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If the Additional Lance is a primary objective, then always show the objective regardless of ",Object(b.b)("inlineCode",{parentName:"td"},"HideObjective")," and ",Object(b.b)("inlineCode",{parentName:"td"},"ShowObjectiveOnLanceDetected"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UseElites"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", then in the AL configs the ",Object(b.b)("inlineCode",{parentName:"td"},"EliteLances")," section of the ",Object(b.b)("inlineCode",{parentName:"td"},"DifficultyX.json")," files will be taken into account")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UseDialogue"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Controls if the ally dialogue appears when you get ally Additional Lances")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SkullValueMatters"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", then the skull value of the contract will determine which of the ",Object(b.b)("inlineCode",{parentName:"td"},"DifficultyX.json")," files are used for the AL drops in a contract. Otherwise if ",Object(b.b)("inlineCode",{parentName:"td"},"false"),", the ",Object(b.b)("inlineCode",{parentName:"td"},"General.json")," is used.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"BasedOnVisibleSkullValue"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Vanilla contract difficulty has a 'real' value and 'visible' to simulate bad intel conditions in contracts. If ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", this uses the ",Object(b.b)("inlineCode",{parentName:"td"},"DifficultyX.json")," file for the visible skull/difficulty of a contract while ",Object(b.b)("inlineCode",{parentName:"td"},"false")," uses the 'real' skull/difficulty value.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UseGeneralProfileForSkirmish"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Uses the ",Object(b.b)("inlineCode",{parentName:"td"},"General.json")," difficulty AL config for Skirmish. Otherwise, it uses tries to use a difficulty profile")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DisableIfFlashpointContract"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Disables Additional Lances for Flashpoints")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DisableWhenMaxTonnage"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#additional-lances---disable-when-max-tonnage"}),"Object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Settings for disabling AL if tonnage restrictions in contracts are active and set")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MatchAllyLanceCountToEnemy"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", whatever enemy lance count is selected for a contract, then the allies will have that same number of lances")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DropWeightInfluence"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#additional-lances---drop-weight-influence"}),"Object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Alternative lance drop calculation system.")," Drops lances based on the player's skull rating of mechs they take into combat. Higher rating means less chance of allies and more chance of enemies. Still uses the AL configs for everything else")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DisableAllies"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Disables AL allies from dropping regardless of other settings")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DisableEnemies"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Disables AL enemies from dropping regardless of other settings")))),Object(b.b)("h3",{id:"additional-lances---disable-when-max-tonnage"},"Additional Lances - Disable When Max Tonnage"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Path"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enables the feature of Disable When Max Tonnage")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Limited"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If ",Object(b.b)("inlineCode",{parentName:"td"},"true")," and if a contract is limiting / restricting the player lance at all (number of mechs or drop tonnage allowance) then AL will auto-disable for that contract")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"LimitedToUnder")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"300")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If the drop tonnage limit is restricted to under 300 tons, then AL will auto disable")))),Object(b.b)("h3",{id:"additional-lances---drop-weight-influence"},"Additional Lances - Drop Weight Influence"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Path"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enables the feature of Drop Weight Influence")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GlobalEnemyChanceToSpawn"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0.05")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The initial starting chance to spawn enemies before modifiers")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GlobalAllyChanceToSpawn"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0.8")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The initial starting chance to spawn allies before modifiers")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"EnemySpawnInfluencePerHalfSkull"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0.1")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The modifier to apply to ",Object(b.b)("inlineCode",{parentName:"td"},"GlobalEnemyChanceToSpawn")," for every 1/2 skull (1 difficulty) level")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AllySpawnInfluencePerHalfSkull"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"-0.1")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The modifier to apply to ",Object(b.b)("inlineCode",{parentName:"td"},"GlobalAllyChanceToSpawn")," for every 1/2 skull (1 difficulty) level")))),Object(b.b)("h3",{id:"extended-lances"},"Extended Lances"),Object(b.b)("p",null,"See ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/features/extended-lances"}),"Extended Lances Docs"),"."),Object(b.b)("h3",{id:"extended-boundaries"},"Extended Boundaries"),Object(b.b)("p",null,"See ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/features/extended-boundaries"}),"Extended Boundaries Docs"),"."),Object(b.b)("h3",{id:"dynamic-withdraw"},"Dynamic Withdraw"),Object(b.b)("p",null,"See ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/features/dynamic-withdraw"}),"Dynamic Withdraw Docs")),Object(b.b)("h3",{id:"ai"},"AI"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Path"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FollowPlayer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#ai---follow-player"}),"Object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Settings for the 'Follow Player' AI")))),Object(b.b)("h3",{id:"ai---follow-player"},"AI - Follow Player"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Path"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pathfinding"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"Alternative")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"Original")," or ",Object(b.b)("inlineCode",{parentName:"td"},"Alternative")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pathfinder algorithm to use. ",Object(b.b)("inlineCode",{parentName:"td"},"Original")," is MC ",Object(b.b)("inlineCode",{parentName:"td"},"v0.4.6")," version and earlier. ",Object(b.b)("inlineCode",{parentName:"td"},"Alternative")," might be better for longer range pathfinding")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Target"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"HeaviestMech")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"HeaviestMech")," or ",Object(b.b)("inlineCode",{parentName:"td"},"FirstLanceMember")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Which unit should be followed by the allies?")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"StopWhen"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"OnEnemyDetected")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"OnEnemyDetected"),", ",Object(b.b)("inlineCode",{parentName:"td"},"OnEnemyVisible")," or ",Object(b.b)("inlineCode",{parentName:"td"},"WhenNotNeeded")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The ",Object(b.b)("inlineCode",{parentName:"td"},"Follow AI")," reverts to the vanilla AI system on one of these conditions. ",Object(b.b)("inlineCode",{parentName:"td"},"WhenNotNeeded")," always follows the player unless the ally is within the target zone radius")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MaxDistanceFromTargetBeforeSprinting"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"200")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If an ally is beyond this distance the unit its following - it will sprint to catch up")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TargetZoneRadius"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"120")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A zone is created around the unit being followed of radius specified. This is used to determine if the following unit is 'close enough'. If close enough, it will do other actions instead of movement")))),Object(b.b)("h3",{id:"spawners---spawn-lance-at-edge-boundary"},"Spawners - Spawn Lance At Edge Boundary"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Path"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MinBuffer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"100")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The distance that a lance ",Object(b.b)("em",{parentName:"td"},"must")," spawn beyond / away from the encounter boundary")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MaxBuffer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"200")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The distance that a lance ",Object(b.b)("em",{parentName:"td"},"must")," spawn within / close to the encounter boundary")))))}O.isMDXComponent=!0},191:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return O}));var n=a(0),l=a.n(n),b=l.a.createContext({}),r=function(e){var t=l.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},c=function(e){var t=r(e.components);return l.a.createElement(b.Provider,{value:t},e.children)};var i={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,d=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),O=r(a),j=n,o=O[c+"."+j]||O[j]||i[j]||b;return a?l.a.createElement(o,Object.assign({},{ref:t},d,{components:a})):l.a.createElement(o,Object.assign({},{ref:t},d))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,r=new Array(b);r[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var O=2;O<b;O++)r[O]=a[O];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);