"use strict";(self.webpackChunkdcv_2_wiki=self.webpackChunkdcv_2_wiki||[]).push([[648],{9661:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=t(4848),r=t(8453);const s={sidebar_position:3},a="Boolean setzen",o={id:"doc-actions/variable-actions/SetBoolean",title:"Boolean setzen",description:"Beschreibung",source:"@site/docs/doc-actions/variable-actions/SetBoolean.md",sourceDirName:"doc-actions/variable-actions",slug:"/doc-actions/variable-actions/SetBoolean",permalink:"/docs/doc-actions/variable-actions/SetBoolean",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Integer setzen",permalink:"/docs/doc-actions/variable-actions/SetInt"},next:{title:"Boolean verz\xf6gert setzen",permalink:"/docs/doc-actions/variable-actions/SetDelayedBoolen"}},d={},c=[{value:"Beschreibung",id:"beschreibung",level:2},{value:"Felder",id:"felder",level:2},{value:"Beispiel",id:"beispiel",level:2}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"boolean-setzen",children:"Boolean setzen"})}),"\n",(0,i.jsx)(n.h2,{id:"beschreibung",children:"Beschreibung"}),"\n",(0,i.jsx)(n.p,{children:"Diese Aktion setzt eine Konfigurationsvariable auf einen bestimmten Wert. Diese Variable kann dann in anderen Aktionen oder Events verwendet werden."}),"\n",(0,i.jsx)(n.h2,{id:"felder",children:"Felder"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"System-Name"}),(0,i.jsx)(n.th,{children:"Art"}),(0,i.jsx)(n.th,{children:"Validierung"}),(0,i.jsx)(n.th,{children:"Data-Typ"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"varname"}),(0,i.jsx)(n.td,{children:"F"}),(0,i.jsx)(n.td,{children:"A-Za-z_"}),(0,i.jsx)(n.td,{children:"String"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"value"}),(0,i.jsx)(n.td,{children:"F"}),(0,i.jsx)(n.td,{children:"true/false"}),(0,i.jsx)(n.td,{children:"boolean"})]})]})]}),"\n",(0,i.jsx)(n.admonition,{title:"Wichtig",type:"warning",children:(0,i.jsxs)(n.p,{children:["Nutze am besten nur ",(0,i.jsx)(n.strong,{children:"a-z_"})," und Unterstriche in den Variabel Namen. Wichtig ist, das die JSON Formatierung durch den Namen nicht gest\xf6rt wird. Bitte nutze KEINE Sonderzeichen wie ",(0,i.jsx)(n.code,{children:"\xe4\xf6\xfc\xdf"})," oder ",(0,i.jsx)(n.code,{children:"!@#$%^&*()"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"beispiel",children:"Beispiel"}),"\n",(0,i.jsxs)(n.p,{children:["Setzen der Variable ",(0,i.jsx)(n.code,{children:"testvariable"})," auf den Wert ",(0,i.jsx)(n.code,{children:"true"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "actionname": "SetBoolean",\n  "actiondisplayname": "SetBoolean",\n  "minimalReqVersion": 1,\n  "data": {\n    "varname": "testvariable",\n    "value": true\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(6540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);