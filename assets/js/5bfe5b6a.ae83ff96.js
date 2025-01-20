"use strict";(self.webpackChunkdcv_2_wiki=self.webpackChunkdcv_2_wiki||[]).push([[6303],{752:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=i(4848),s=i(8453);const r={sidebar_position:5},d="(vor) Velo-Verkaufs-Event",l={id:"doc-events/SellDetectedEvent",title:"(vor) Velo-Verkaufs-Event",description:"Hinweis: Dieses Event ist sehr m\xe4chtig und sollte mit Vorsicht verwendet werden. Wenn du dir nicht sicher bist, frage bitte im DCV2 Discord nach, ob du alles richtig gemacht hast, bevor du es verwendest.",source:"@site/docs/doc-events/SellDetectedEvent.md",sourceDirName:"doc-events",slug:"/doc-events/SellDetectedEvent",permalink:"/docs/doc-events/SellDetectedEvent",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Scheduler Event",permalink:"/docs/doc-events/SchedulerEvent"},next:{title:"Aktionen",permalink:"/docs/category/aktionen-1"}},a={},c=[{value:"Aufbau",id:"aufbau",level:2},{value:"Systemname &amp; Displayname",id:"systemname--displayname",level:4},{value:"Conditions / Bedingungen f\xfcr Events",id:"conditions--bedingungen-f\xfcr-events",level:4},{value:"Minimale Ben\xf6tigte Version",id:"minimale-ben\xf6tigte-version",level:4},{value:"Kommentar",id:"kommentar",level:4},{value:"Zeit",id:"zeit",level:4},{value:"Actions",id:"actions",level:4},{value:"Beispiel",id:"beispiel",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"vor-velo-verkaufs-event",children:"(vor) Velo-Verkaufs-Event"})}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"Hinweis: Dieses Event ist sehr m\xe4chtig und sollte mit Vorsicht verwendet werden. Wenn du dir nicht sicher bist, frage bitte im DCV2 Discord nach, ob du alles richtig gemacht hast, bevor du es verwendest.\nFehlerhafte Configs k\xf6nnen zu fehlerhaften Verk\xe4ufen und Funktionsproblemen bei Velo f\xfchren."})}),"\n",(0,t.jsx)(n.h2,{id:"aufbau",children:"Aufbau"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Spezial"}),(0,t.jsx)(n.th,{children:"System-Name"}),(0,t.jsx)(n.th,{children:"Art"}),(0,t.jsx)(n.th,{children:"Validierung"}),(0,t.jsx)(n.th,{children:"Data-Typ"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uniqe"}),(0,t.jsx)(n.td,{children:"systemname"}),(0,t.jsx)(n.td,{children:"F"}),(0,t.jsx)(n.td,{children:"a-z_"}),(0,t.jsx)(n.td,{children:"String"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"displayname"}),(0,t.jsx)(n.td,{children:"F"}),(0,t.jsx)(n.td,{children:"A-Za-z0-9"}),(0,t.jsx)(n.td,{children:"String"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"conditions"}),(0,t.jsx)(n.td,{children:"F"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"JsonArray"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"minimalReqVersion"}),(0,t.jsx)(n.td,{children:"S"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Float"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"comment"}),(0,t.jsx)(n.td,{children:"O"}),(0,t.jsx)(n.td,{children:"A-Za-z0-9 !#&<>.,-_"}),(0,t.jsx)(n.td,{children:"String"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"payAmount"}),(0,t.jsx)(n.td,{children:"F"}),(0,t.jsx)(n.td,{children:'"123.56" (float im String)'}),(0,t.jsx)(n.td,{children:"String"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"actions"}),(0,t.jsx)(n.td,{children:"F"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"JsonArray"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"systemname--displayname",children:"Systemname & Displayname"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"systemname": "angezeigtername",\n"displayname": "Angezeigter Name",\n'})}),"\n",(0,t.jsx)(n.p,{children:'Jede Action besteht aus einem "systemname"\xb4n dieser wird aus dem Anzeigenamen "displayname" generiert. (nur a-z)'}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"conditions--bedingungen-f\xfcr-events",children:"Conditions / Bedingungen f\xfcr Events"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"conditions": [],\n'})}),"\n",(0,t.jsx)(n.admonition,{title:"Anleitung",type:"tip",children:(0,t.jsxs)(n.p,{children:["Wie man Event-Bedinungen/Conditions nutzt findest du ",(0,t.jsx)(n.a,{href:"/docs/doc-conditions/ConditionOverview",children:"\xdcbersicht der Conditions"})]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"minimale-ben\xf6tigte-version",children:"Minimale Ben\xf6tigte Version"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"minimalReqVersion": 1,\n'})}),"\n",(0,t.jsx)(n.p,{children:'Jedes Event kann nach Updates eine h\xf6here Version ben\xf6tigen. In der Regel muss hier "1" gesetzt werden.\nDer Editor setzt standardm\xe4\xdfig "1".'}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"kommentar",children:"Kommentar"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"comment": "Ein optimaler Kommentar der die Funktion beschreibt.",\n'})}),"\n",(0,t.jsx)(n.p,{children:"Du kannst einen Kommentar zu jedem Event erstellen um dir zus\xe4tzliche Informationen zu einem Event zu speichern."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"zeit",children:"Zeit"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"payAmount": "123.56",\n'})}),"\n",(0,t.jsx)(n.p,{children:"Der Preis sollte als Float mit einer Nachkomma-Stelle angegeben werden. Das Trennzecihnen ist ein Punkt. (100.0)"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"actions",children:"Actions"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:' "actions": []\n'})}),"\n",(0,t.jsx)(n.p,{children:'Im JsonArray "actions" werden die Aktionen hinterlegt.'}),"\n",(0,t.jsxs)(n.p,{children:["Das Event besitzt eine Sonder Action, die es erm\xf6glicht das Event abzubrechen!.\n",(0,t.jsx)(n.code,{children:"CancelVeloEventAction"})," weitere Informationen findest du ",(0,t.jsx)(n.a,{href:"/docs/doc-actions/special-actions/CancelVeloEventAction",children:"hier"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"beispiel",children:"Beispiel"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "systemname": "angezeigtername",\n  "displayname": "Angezeigter Name",\n  "minimalReqVersion": 1,\n  "conditions": [],\n  "comment": "Ein optimaler Kommentar der die Funktion beschreibt.",\n  "payAmount": "100.0",\n  "actions": []\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>l});var t=i(6540);const s={},r=t.createContext(s);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);