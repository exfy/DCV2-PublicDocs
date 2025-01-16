"use strict";(self.webpackChunkdcv_2_wiki=self.webpackChunkdcv_2_wiki||[]).push([[4481],{3411:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>o,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var t=i(4848),s=i(8453);const d={sidebar_position:4},r="(nach) Velo-Ankaufs-Event",l={id:"doc-events/AfterPurchaseEvent",title:"(nach) Velo-Ankaufs-Event",description:"Hinweis: Dieses Event ist sehr m\xe4chtig und sollte mit Vorsicht verwendet werden. Wenn du dir nicht sicher bist, frage bitte im DCV2 Discord nach, ob du alles richtig gemacht hast, bevor du es verwendest.",source:"@site/docs/doc-events/AfterPurchaseEvent.md",sourceDirName:"doc-events",slug:"/doc-events/AfterPurchaseEvent",permalink:"/docs/doc-events/AfterPurchaseEvent",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"DEV - DynamicButtonEvent",permalink:"/docs/doc-events/dyn-buttons/DynamicButtonEvent"},next:{title:"Scheduler Event",permalink:"/docs/doc-events/SchedulerEvent"}},a={},c=[{value:"Aufbau",id:"aufbau",level:2},{value:"Systemname &amp; Displayname",id:"systemname--displayname",level:4},{value:"Conditions / Bedingungen f\xfcr Events",id:"conditions--bedingungen-f\xfcr-events",level:4},{value:"Minimale Ben\xf6tigte Version",id:"minimale-ben\xf6tigte-version",level:4},{value:"Kommentar",id:"kommentar",level:4},{value:"Actions",id:"actions",level:4},{value:"Beispiel",id:"beispiel",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"nach-velo-ankaufs-event",children:"(nach) Velo-Ankaufs-Event"})}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"Hinweis: Dieses Event ist sehr m\xe4chtig und sollte mit Vorsicht verwendet werden. Wenn du dir nicht sicher bist, frage bitte im DCV2 Discord nach, ob du alles richtig gemacht hast, bevor du es verwendest.\nFehlerhafte Configs k\xf6nnen zu fehlerhaften Ank\xe4ufen und Funktionsproblemen bei Velo f\xfchren."})}),"\n",(0,t.jsx)(n.h2,{id:"aufbau",children:"Aufbau"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Spezial"}),(0,t.jsx)(n.th,{children:"System-Name"}),(0,t.jsx)(n.th,{children:"Art"}),(0,t.jsx)(n.th,{children:"Validierung"}),(0,t.jsx)(n.th,{children:"Data-Typ"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uniqe"}),(0,t.jsx)(n.td,{children:"systemname"}),(0,t.jsx)(n.td,{children:"F"}),(0,t.jsx)(n.td,{children:"a-z_"}),(0,t.jsx)(n.td,{children:"String"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"displayname"}),(0,t.jsx)(n.td,{children:"F"}),(0,t.jsx)(n.td,{children:"A-Za-z0-9"}),(0,t.jsx)(n.td,{children:"String"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"conditions"}),(0,t.jsx)(n.td,{children:"F"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"JsonArray"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"minimalReqVersion"}),(0,t.jsx)(n.td,{children:"S"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Float"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"comment"}),(0,t.jsx)(n.td,{children:"O"}),(0,t.jsx)(n.td,{children:"A-Za-z0-9 !#&<>.,-_"}),(0,t.jsx)(n.td,{children:"String"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"actions"}),(0,t.jsx)(n.td,{children:"F"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"JsonArray"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"enableItemDisplayName"}),(0,t.jsx)(n.td,{children:"P"}),(0,t.jsx)(n.td,{children:"true/false"}),(0,t.jsx)(n.td,{children:"Boolean"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"itemDisplayName"}),(0,t.jsx)(n.td,{children:"O"}),(0,t.jsx)(n.td,{children:"A-Za-z0-9*"}),(0,t.jsx)(n.td,{children:"String"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"loreLine1"}),(0,t.jsx)(n.td,{children:"O"}),(0,t.jsx)(n.td,{children:"true/false"}),(0,t.jsx)(n.td,{children:"Boolean"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"itemDisplayName"}),(0,t.jsx)(n.td,{children:"O"}),(0,t.jsx)(n.td,{children:"A-Za-z0-9*"}),(0,t.jsx)(n.td,{children:"String"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"enableLoreLine2"}),(0,t.jsx)(n.td,{children:"O"}),(0,t.jsx)(n.td,{children:"true/false"}),(0,t.jsx)(n.td,{children:"Boolean"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"loreLine2"}),(0,t.jsx)(n.td,{children:"O"}),(0,t.jsx)(n.td,{children:"A-Za-z0-9*"}),(0,t.jsx)(n.td,{children:"String"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"enableMaterial"}),(0,t.jsx)(n.td,{children:"O"}),(0,t.jsx)(n.td,{children:"true/false"}),(0,t.jsx)(n.td,{children:"Boolean"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"material"}),(0,t.jsx)(n.td,{children:"O"}),(0,t.jsxs)(n.td,{children:["Dropdown material",":itemname"]}),(0,t.jsx)(n.td,{children:"String"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"enableSignUser"}),(0,t.jsx)(n.td,{children:"O"}),(0,t.jsx)(n.td,{children:"true/false"}),(0,t.jsx)(n.td,{children:"Boolean"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"signUser"}),(0,t.jsx)(n.td,{children:"O"}),(0,t.jsx)(n.td,{children:"A-Za-z0-9!+_"}),(0,t.jsx)(n.td,{children:"String"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"enableSignDate"}),(0,t.jsx)(n.td,{children:"O"}),(0,t.jsx)(n.td,{children:"true/false"}),(0,t.jsx)(n.td,{children:"Boolean"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"signDate"}),(0,t.jsx)(n.td,{children:"O"}),(0,t.jsx)(n.td,{children:"Datum DD.MM.YYYY"}),(0,t.jsx)(n.td,{children:"String"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"* = A-Za-z0-9* bedeutet, dass alle Zeichen au\xdfer Sonderzeichen erlaubt sind. Sonderzeichen auf eigenes Risiko verwenden. Ggf. pr\xfcfen ob Json Escaping notwendig ist."}),"\n",(0,t.jsx)(n.h4,{id:"systemname--displayname",children:"Systemname & Displayname"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"systemname": "angezeigtername",\n"displayname": "Angezeigter Name",\n'})}),"\n",(0,t.jsx)(n.p,{children:'Jede Action besteht aus einem "systemname"\xb4n dieser wird aus dem Anzeigenamen "displayname" generiert. (nur a-z)'}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"conditions--bedingungen-f\xfcr-events",children:"Conditions / Bedingungen f\xfcr Events"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"conditions": [],\n'})}),"\n",(0,t.jsx)(n.admonition,{title:"Anleitung",type:"tip",children:(0,t.jsxs)(n.p,{children:["Wie man Event-Bedinungen/Conditions nutzt findest du ",(0,t.jsx)(n.a,{href:"/docs/doc-conditions/ConditionOverview",children:"\xdcbersicht der Conditions"})]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"minimale-ben\xf6tigte-version",children:"Minimale Ben\xf6tigte Version"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"minimalReqVersion": 1,\n'})}),"\n",(0,t.jsx)(n.p,{children:'Jedes Event kann nach Updates eine h\xf6here Version ben\xf6tigen. In der Regel muss hier "1" gesetzt werden.\nDer Editor setzt standardm\xe4\xdfig "1".'}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"kommentar",children:"Kommentar"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"comment": "Ein optimaler Kommentar der die Funktion beschreibt.",\n'})}),"\n",(0,t.jsx)(n.p,{children:"Du kannst einen Kommentar zu jedem Event erstellen um dir zus\xe4tzliche Informationen zu einem Event zu speichern."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"actions",children:"Actions"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:' "actions": []\n'})}),"\n",(0,t.jsx)(n.p,{children:'Im JsonArray "actions" werden die Aktionen hinterlegt.'}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"beispiel",children:"Beispiel"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "systemname": "angezeigtername",\n  "displayname": "Angezeigter Name",\n  "minimalReqVersion": 1,\n  "conditions": [],\n  "comment": "Ein optimaler Kommentar der die Funktion beschreibt.",\n  "enableItemDisplayName": false,\n  "itemDisplayName": "",\n  "enableLoreLine1": false,\n  "loreLine1": "test",\n  "enableLoreLine2": false,\n  "loreLine2": "hallo",\n  "enableMaterial": false,\n  "material": "",\n  "enableSignUser": false,\n  "signUser": "Spielername",\n  "enableSignDate": true,\n  "signDate": "28.09.2024",\n  "actions": []\n}\n'})})]})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var t=i(6540);const s={},d=t.createContext(s);function r(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);