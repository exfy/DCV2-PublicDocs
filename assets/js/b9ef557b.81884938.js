"use strict";(self.webpackChunkdcv_2_wiki=self.webpackChunkdcv_2_wiki||[]).push([[8608],{805:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>o});var t=i(4848),s=i(8453);const d={sidebar_position:4},r="DEV - DynamicButtonEvent",a={id:"doc-events/dyn-buttons/DynamicButtonEvent",title:"DEV - DynamicButtonEvent",description:"Hinweis:Du kannst maximal 25 Buttons erstellen! Jeder Button mus einen eindeutigen Namen haben. Doppelte Namen werden nicht akzeptiert.",source:"@site/docs/doc-events/dyn-buttons/DynamicButtonEvent.mdx",sourceDirName:"doc-events/dyn-buttons",slug:"/doc-events/dyn-buttons/DynamicButtonEvent",permalink:"/docs/doc-events/dyn-buttons/DynamicButtonEvent",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Dynamische Buttons Event Editor",permalink:"/docs/doc-events/dyn-buttons/DynamicButtonEventUser"},next:{title:"(nach) Velo-Ankaufs-Event",permalink:"/docs/doc-events/AfterPurchaseEvent"}},l={},o=[{value:"Aufbau",id:"aufbau",level:2},{value:"Systemname &amp; Displayname",id:"systemname--displayname",level:4},{value:"Conditions / Bedingungen f\xfcr Events",id:"conditions--bedingungen-f\xfcr-events",level:4},{value:"Minimale Ben\xf6tigte Version",id:"minimale-ben\xf6tigte-version",level:4},{value:"Kommentar",id:"kommentar",level:4},{value:"Actions",id:"actions",level:4},{value:"ButtonType",id:"buttontype",level:4},{value:"Permissions",id:"permissions",level:4},{value:"Beispiel",id:"beispiel",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"dev---dynamicbuttonevent",children:"DEV - DynamicButtonEvent"})}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.p,{children:["Hinweis",":Du"," kannst maximal 25 Buttons erstellen! Jeder Button mus einen eindeutigen Namen haben. Doppelte Namen werden nicht akzeptiert."]})}),"\n",(0,t.jsx)(n.h2,{id:"aufbau",children:"Aufbau"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Spezial"}),(0,t.jsx)(n.th,{children:"System-Name"}),(0,t.jsx)(n.th,{children:"Art"}),(0,t.jsx)(n.th,{children:"Validierung"}),(0,t.jsx)(n.th,{children:"Data-Typ"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uniqe"}),(0,t.jsx)(n.td,{children:"systemname"}),(0,t.jsx)(n.td,{children:"F"}),(0,t.jsx)(n.td,{children:"a-z_"}),(0,t.jsx)(n.td,{children:"String"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"displayname"}),(0,t.jsx)(n.td,{children:"F"}),(0,t.jsx)(n.td,{children:"A-Za-z0-9"}),(0,t.jsx)(n.td,{children:"String"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"conditions"}),(0,t.jsx)(n.td,{children:"F"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"JsonArray"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"minimalReqVersion"}),(0,t.jsx)(n.td,{children:"S"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Float"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"comment"}),(0,t.jsx)(n.td,{children:"O"}),(0,t.jsx)(n.td,{children:"A-Za-z0-9 !#&<>.,-_"}),(0,t.jsx)(n.td,{children:"String"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"actions"}),(0,t.jsx)(n.td,{children:"F"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"JsonArray"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"buttonType"}),(0,t.jsx)(n.td,{children:"F"}),(0,t.jsx)(n.td,{children:"danger/primary,secondary,success"}),(0,t.jsx)(n.td,{children:"String"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"permission"}),(0,t.jsx)(n.td,{children:"O"}),(0,t.jsx)(n.td,{children:"main.botctl.dyn."}),(0,t.jsx)(n.td,{children:"String"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"* = A-Za-z0-9* bedeutet, dass alle Zeichen au\xdfer Sonderzeichen erlaubt sind. Sonderzeichen auf eigenes Risiko verwenden. Ggf. pr\xfcfen ob Json Escaping notwendig ist."}),"\n",(0,t.jsx)(n.h4,{id:"systemname--displayname",children:"Systemname & Displayname"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"systemname": "angezeigtername",\n"displayname": "Angezeigter Name",\n'})}),"\n",(0,t.jsx)(n.p,{children:'Jede Action besteht aus einem "systemname"\xb4n dieser wird aus dem Anzeigenamen "displayname" generiert. (nur a-z)'}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"conditions--bedingungen-f\xfcr-events",children:"Conditions / Bedingungen f\xfcr Events"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"conditions": [],\n'})}),"\n",(0,t.jsx)(n.admonition,{title:"Anleitung",type:"tip",children:(0,t.jsxs)(n.p,{children:["Wie man Event-Bedinungen/Conditions nutzt findest du ",(0,t.jsx)(n.a,{href:"../doc-conditions/ConditionOverview.md",children:"\xdcbersicht der Conditions"})]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"minimale-ben\xf6tigte-version",children:"Minimale Ben\xf6tigte Version"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"minimalReqVersion": 1,\n'})}),"\n",(0,t.jsx)(n.p,{children:'Jedes Event kann nach Updates eine h\xf6here Version ben\xf6tigen. In der Regel muss hier "1" gesetzt werden.\nDer Editor setzt standardm\xe4\xdfig "1".'}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"kommentar",children:"Kommentar"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"comment": "Ein optimaler Kommentar der die Funktion beschreibt.",\n'})}),"\n",(0,t.jsx)(n.p,{children:"Du kannst einen Kommentar zu jedem Event erstellen um dir zus\xe4tzliche Informationen zu einem Event zu speichern."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"actions",children:"Actions"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:' "actions": []\n'})}),"\n",(0,t.jsx)(n.p,{children:'Im JsonArray "actions" werden die Aktionen hinterlegt.'}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"buttontype",children:"ButtonType"}),"\n",(0,t.jsx)(n.p,{children:"Hier sind die verschiedenen Discord-Button-Typen, dargestellt mit ihrem jeweiligen Stil:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"primary"}),": Ein Button mit einer markanten blauen Farbe."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"secondary"}),": Ein Button mit einer grauen, grauen Farbe."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"success"}),": Ein Button mit einer gr\xfcnen Farbe, die Erfolg anzeigt."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"danger"}),": Ein Button mit einer roten Farbe, die Gefahr oder Warnung signalisiert."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"permissions",children:"Permissions"}),"\n",(0,t.jsx)(n.p,{children:'Du kannst Permissions festlegen die eine Discord-ID haben muss, um den Button zu nutzen. Die Permission wird mit "main.botctl.dyn." eingeleitet.'}),"\n",(0,t.jsx)(n.p,{children:"Wenn du das Feld frei l\xe4sst, kann jeder den Button nutzen."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"beispiel",children:"Beispiel"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "systemname": "test",\n  "displayname": "test",\n  "minimalReqVersion": 1,\n  "conditions": [],\n  "comment": "",\n  "permission": "main.botctl.dyn.test",\n  "dynButtonType": "primary",\n  "actions": []\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(6540);const s={},d=t.createContext(s);function r(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);