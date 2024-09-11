"use strict";(self.webpackChunkdcv_2_wiki=self.webpackChunkdcv_2_wiki||[]).push([[574],{7210:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var n=t(4848),r=t(8453);const c={sidebar_position:3},s="Logeintrag schreiben",o={id:"doc-actions/SystemPrintOutAction",title:"Logeintrag schreiben",description:"Wo wird die Nachricht angezeigt?",source:"@site/docs/doc-actions/SystemPrintOutAction.md",sourceDirName:"doc-actions",slug:"/doc-actions/SystemPrintOutAction",permalink:"/DCV2-PublicDocs/docs/doc-actions/SystemPrintOutAction",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"einfach Discord Nachricht",permalink:"/DCV2-PublicDocs/docs/doc-actions/SendSimpleMessageWebhookAction"},next:{title:"Config",permalink:"/DCV2-PublicDocs/docs/category/config"}},d={},a=[{value:"Wo wird die Nachricht angezeigt?",id:"wo-wird-die-nachricht-angezeigt",level:2},{value:"Felder:",id:"felder",level:2},{value:"Beispiel",id:"beispiel",level:2}];function l(e){const i={admonition:"admonition",code:"code",del:"del",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"logeintrag-schreiben",children:"Logeintrag schreiben"})}),"\n",(0,n.jsx)(i.h2,{id:"wo-wird-die-nachricht-angezeigt",children:"Wo wird die Nachricht angezeigt?"}),"\n",(0,n.jsxs)(i.p,{children:['Dieser Inhalt wird in einem Client-Log im "./',(0,n.jsx)(i.del,{children:"minecraft"}),'/ logs" Ordner, in der Regel im latest.log oder fmldebuglog gespeichert.']}),"\n",(0,n.jsx)(i.h2,{id:"felder",children:"Felder:"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"System-Name"}),(0,n.jsx)(i.th,{children:"Art"}),(0,n.jsx)(i.th,{children:"Validierung"}),(0,n.jsx)(i.th,{children:"Data-Typ"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"message"}),(0,n.jsx)(i.td,{children:"F"}),(0,n.jsx)(i.td,{children:"A-Za-z0-9 !#&<>\xa7.,-_"}),(0,n.jsx)(i.td,{children:"String"})]})})]}),"\n",(0,n.jsx)(i.admonition,{title:"Art",type:"note",children:(0,n.jsx)(i.p,{children:"F = Force / O = optimal / S = system"})}),"\n",(0,n.jsx)(i.h2,{id:"beispiel",children:"Beispiel"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",children:'{\n  "actionname": "SystemPrintOutAction",\n  "actiondisplayname": "SystemPrintOutAction",\n  "minimalReqVersion": 1,\n  "data": {\n    "message": "Diese Nachricht wird im Client Log eingetragen!"\n  }\n}\n'})})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>o});var n=t(6540);const r={},c=n.createContext(r);function s(e){const i=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(c.Provider,{value:i},e.children)}}}]);