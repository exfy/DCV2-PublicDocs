"use strict";(self.webpackChunkdcv_2_wiki=self.webpackChunkdcv_2_wiki||[]).push([[1308],{5343:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=i(4848),t=i(8453);const r={sidebar_position:1},d="\ud83d\udec8 \xdcbersicht",o={id:"doc-conditions/ConditionOverview",title:"\ud83d\udec8 \xdcbersicht",description:"| Condition - Bedingungen                   | Event wird ausgef\xfchrt, wenn...                           |",source:"@site/docs/doc-conditions/ConditionOverview.md",sourceDirName:"doc-conditions",slug:"/doc-conditions/ConditionOverview",permalink:"/docs/doc-conditions/ConditionOverview",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Conditions",permalink:"/docs/category/conditions"},next:{title:"isUserDCVerified",permalink:"/docs/doc-conditions/isUserDCVerified"}},c={},l=[];function a(e){const n={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"-\xfcbersicht",children:"\ud83d\udec8 \xdcbersicht"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Condition - Bedingungen"}),(0,s.jsx)(n.th,{children:"Event wird ausgef\xfchrt, wenn..."})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/doc-conditions/isOnline",children:"isOnline"})}),(0,s.jsx)(n.td,{children:"..der Bot auf dem Server ist."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/doc-conditions/isOffline",children:"isOffline"})}),(0,s.jsx)(n.td,{children:"..der Bot nicht auf dem Server ist."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/doc-conditions/isOnBotPos",children:"isOnBotPos"})}),(0,s.jsx)(n.td,{children:"..der Bot auf Bot-Position ist."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/doc-conditions/isNotOnBotPos",children:"isNotOnBotPos"})}),(0,s.jsx)(n.td,{children:"..der Bot nicht auf Bot-Position ist."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"./isOnServer.md",children:"isOnServer"})}),(0,s.jsx)(n.td,{children:"..der Bot auf dem Server ist."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/doc-conditions/isStringVarXVar",children:"isStringVarXVar"})}),(0,s.jsx)(n.td,{children:"..zwei String-Variablen gleich sind."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/doc-conditions/isVariableOnList",children:"iVariableOnList"})}),(0,s.jsx)(n.td,{children:"..eine Variable in einer Liste ist."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/doc-conditions/isBooleanVarX",children:"isBooleanVarX"})}),(0,s.jsx)(n.td,{children:"..eine Boolean-Variable auf true/false ist."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/doc-conditions/isIntVarXVar",children:"isIntVarXVar"})}),(0,s.jsx)(n.td,{children:"..zwei Integer-Variablen gleich - ungleich - < - > sind."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/doc-conditions/isLongXLong",children:"isLongXLong"})}),(0,s.jsx)(n.td,{children:"..zwei Long-Variablen gleich - ungleich - < - > sind."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/doc-conditions/isUserDCVerified",children:"isUserDCVerified"})}),(0,s.jsx)(n.td,{children:"..eine UUID verifiziert ist im Verifizierungs-System."})]})]})]}),"\n",(0,s.jsx)(n.h1,{id:"wo-nutze-ich-die-condition-im-event",children:"Wo nutze ich die Condition im Event?"}),"\n",(0,s.jsx)(n.p,{children:"Am Beispiel eines Zeit-Events (ohne Aktionen), welches nur ausgef\xfchrt werden soll, wenn der Bot auf dem Server ist."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "systemname": "eventname",\n  "displayname": "Event Display",\n  "minimalReqVersion": 1,\n  "conditions": [\n    {\n      "systemname": "isOnline",\n      "displayname": "isOnline",\n      "minimalReqVersion": 1,\n      "data": "none"\n    }\n  ],\n  "comment": "",\n  "time": "11:11",\n  "actions": []\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>o});var s=i(6540);const t={},r=s.createContext(t);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);