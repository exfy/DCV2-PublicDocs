"use strict";(self.webpackChunkdcv_2_wiki=self.webpackChunkdcv_2_wiki||[]).push([[879],{7220:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>l});var t=i(4848),s=i(8453);const d={sidebar_position:2},r="Standardaufbau eines Events",a={id:"doc-events/StandardaufbauEvents",title:"Standardaufbau eines Events",description:"Aufbau Action Kopf",source:"@site/docs/doc-events/StandardaufbauEvents.md",sourceDirName:"doc-events",slug:"/doc-events/StandardaufbauEvents",permalink:"/DCV2-PublicDocs/index.html/docs/doc-events/StandardaufbauEvents",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/doc-events/StandardaufbauEvents.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Was ist ein Event",permalink:"/DCV2-PublicDocs/index.html/docs/doc-events/was_is_ein_event"},next:{title:"Event-Bedingungen",permalink:"/DCV2-PublicDocs/index.html/docs/category/event-bedingungen"}},c={},l=[{value:"Aufbau Action Kopf",id:"aufbau-action-kopf",level:2},{value:"Conditions / Bedingungen f\xfcr Events",id:"conditions--bedingungen-f\xfcr-events",level:4},{value:"Minimale Ben\xf6tigte Version",id:"minimale-ben\xf6tigte-version",level:4},{value:"Kommentar",id:"kommentar",level:4},{value:"Zeit",id:"zeit",level:4},{value:"Actions",id:"actions",level:4},{value:"Beispiel",id:"beispiel",level:2}];function o(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"standardaufbau-eines-events",children:"Standardaufbau eines Events"})}),"\n",(0,t.jsx)(n.h2,{id:"aufbau-action-kopf",children:"Aufbau Action Kopf"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Spezial"}),(0,t.jsx)(n.th,{children:"System-Name"}),(0,t.jsx)(n.th,{children:"Art"}),(0,t.jsx)(n.th,{children:"Validierung"}),(0,t.jsx)(n.th,{children:"Data-Typ"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uniqe"}),(0,t.jsx)(n.td,{children:"systemname"}),(0,t.jsx)(n.td,{children:"F"}),(0,t.jsx)(n.td,{children:"a-z_"}),(0,t.jsx)(n.td,{children:"String"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"displayname"}),(0,t.jsx)(n.td,{children:"F"}),(0,t.jsx)(n.td,{children:"A-Za-z0-9"}),(0,t.jsx)(n.td,{children:"String"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"conditions"}),(0,t.jsx)(n.td,{children:"F"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"JsonArray"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"minimalReqVersion"}),(0,t.jsx)(n.td,{children:"S"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Float"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"comment"}),(0,t.jsx)(n.td,{children:"O"}),(0,t.jsx)(n.td,{children:"A-Za-z0-9 !#&<>.,-_"}),(0,t.jsx)(n.td,{children:"String"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"time"}),(0,t.jsx)(n.td,{children:"F"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"String"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"actions"}),(0,t.jsx)(n.td,{children:"F"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"JsonArray"})]})]})]}),"\n",(0,t.jsx)(n.admonition,{title:"Art",type:"note",children:(0,t.jsx)(n.p,{children:"F = Force / O = optimal / S = system"})}),"\n",(0,t.jsx)(n.p,{children:"####git a Systemname & Displayname"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"systemname": "angezeigtername",\n"displayname": "Angezeigter Name",\n'})}),"\n",(0,t.jsx)(n.p,{children:'Jede Action besteht aus einem "systemname"\xb4n dieser wird aus dem Anzeigenamen "displayname" generiert. (nur a-z)'}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"conditions--bedingungen-f\xfcr-events",children:"Conditions / Bedingungen f\xfcr Events"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"conditions": [],\n'})}),"\n",(0,t.jsx)(n.p,{children:"Link"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"minimale-ben\xf6tigte-version",children:"Minimale Ben\xf6tigte Version"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"minimalReqVersion": 1,\n'})}),"\n",(0,t.jsx)(n.p,{children:'Jedes Event kann nach Updates eine h\xf6here Version ben\xf6tigen. In der Regel muss hier "1" gesetzt werden.\nDer Editor setzt standardm\xe4\xdfig "1".'}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"kommentar",children:"Kommentar"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"comment": "Ein optimaler Kommentar der die Funktion beschreibt.",\n'})}),"\n",(0,t.jsx)(n.p,{children:"Du kannst einen Kommentar zu jedem Event erstellen um dir zus\xe4tzliche Informationen zu einem Event zu speichern."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"zeit",children:"Zeit"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"time": "HH:MM",\n'})}),"\n",(0,t.jsxs)(n.p,{children:['Die Uhrzeit wird imt Format "HH',":MM",'" angegeben, sprich Stunden und Minuten, als Beispiel: "03:50" oder "16:32".']}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"actions",children:"Actions"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:' "actions": []\n'})}),"\n",(0,t.jsx)(n.p,{children:'Im JsonArray "actions" werden die Aktionen hinterlegt.'}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"beispiel",children:"Beispiel"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "systemname": "angezeigtername",\n  "displayname": "Angezeigter Name",\n  "minimalReqVersion": 1,\n  "conditions": [],\n  "comment": "Ein optimaler Kommentar der die Funktion beschreibt.",\n  "time": "HH:MM",\n  "actions": []\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(6540);const s={},d=t.createContext(s);function r(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);