"use strict";(self.webpackChunkdcv_2_wiki=self.webpackChunkdcv_2_wiki||[]).push([[284],{2701:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var i=t(4848),s=t(8453);const c={sidebar_position:2},r="ChatMessageAction",d={id:"doc-actions/ChatMessageAction",title:"ChatMessageAction",description:"Beschreibung",source:"@site/docs/doc-actions/ChatMessageAction.md",sourceDirName:"doc-actions",slug:"/doc-actions/ChatMessageAction",permalink:"/DCV2-PublicDocs/docs/doc-actions/ChatMessageAction",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Aktionen",permalink:"/DCV2-PublicDocs/docs/category/aktionen"},next:{title:"Config",permalink:"/DCV2-PublicDocs/docs/category/config"}},a={},o=[{value:"Beschreibung",id:"beschreibung",level:2},{value:"Felder",id:"felder",level:2},{value:"Beispiel",id:"beispiel",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"chatmessageaction",children:"ChatMessageAction"})}),"\n",(0,i.jsx)(n.h2,{id:"beschreibung",children:"Beschreibung"}),"\n",(0,i.jsxs)(n.p,{children:["Die Aktion ",(0,i.jsx)(n.code,{children:"ChatMessageAction"})," wird verwendet, um eine Nachricht im Chat zu senden. Es wird nicht unterschieden welcher Chat. Die Nachricht geht an den aktuell aktiven Chat."]}),"\n",(0,i.jsx)(n.h2,{id:"felder",children:"Felder"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"System-Name"}),(0,i.jsx)(n.th,{children:"Art"}),(0,i.jsx)(n.th,{children:"Validierung"}),(0,i.jsx)(n.th,{children:"Data-Typ"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"message"}),(0,i.jsx)(n.td,{children:"F"}),(0,i.jsx)(n.td,{children:"A-Za-z0-9 !#&<>.,-_"}),(0,i.jsx)(n.td,{children:"String"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"cmdPrio"}),(0,i.jsx)(n.td,{children:"F"}),(0,i.jsx)(n.td,{children:"HIGH, NORMAL, LOW"}),(0,i.jsx)(n.td,{children:"String"})]})]})]}),"\n",(0,i.jsx)(n.admonition,{title:"Art",type:"note",children:(0,i.jsx)(n.p,{children:"F = Force / O = optimal / S = system"})}),"\n",(0,i.jsx)(n.h2,{id:"beispiel",children:"Beispiel"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "actionname": "ChatMessageAction",\n  "actiondisplayname": "Nachricht im Chat",\n  "minimalReqVersion": 1,\n  "data": {\n    "message": "Ich bin eine Nachricht",\n    "cmdPrio": "NORMAL"\n  }\n}\n'})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var i=t(6540);const s={},c=i.createContext(s);function r(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);