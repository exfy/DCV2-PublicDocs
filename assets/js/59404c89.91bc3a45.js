"use strict";(self.webpackChunkdcv_2_wiki=self.webpackChunkdcv_2_wiki||[]).push([[7299],{6504:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var s=i(4848),t=i(8453);const r={sidebar_position:2},a="UUID Aufl\xf6sung",d={id:"docs-variables/system-variablen/LocaleUUID-Variable",title:"UUID Aufl\xf6sung",description:"| Variable Name         | Beschreibung                                                                                                                                                                                                                                                                                  | Beispiel                        |",source:"@site/docs/docs-variables/system-variablen/LocaleUUID-Variable.md",sourceDirName:"docs-variables/system-variablen",slug:"/docs-variables/system-variablen/LocaleUUID-Variable",permalink:"/docs/docs-variables/system-variablen/LocaleUUID-Variable",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"System Variablen",permalink:"/docs/docs-variables/system-variablen/"},next:{title:"Editor Variablen",permalink:"/docs/category/editor-variablen"}},l={},o=[];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"uuid-aufl\xf6sung",children:"UUID Aufl\xf6sung"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Variable Name"}),(0,s.jsx)(n.th,{children:"Beschreibung"}),(0,s.jsx)(n.th,{children:"Beispiel"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"getUUID(playername)"})}),(0,s.jsx)(n.td,{children:'Ersetze "playername" durch den Spielernamen, wo du die UUID erhalten m\xf6chtest. Die UUID wird nur durch TabListe aufgel\xf6st, sprich der Spieler muss auf dem Server zur Laufzeit Online gewesen sein. NickName Aufl\xf6sung ist vorhanden. Diese Funktion unerst\xfctzt keine Offline UUID aufl\xf6sung.'}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"75b935d7-7dbf-406xxxxxxxxxxxx"})})]})})]}),"\n",(0,s.jsx)(n.h1,{id:"beispiel",children:"Beispiel:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "systemname": "isUserDCVerified",\n  "displayname": "isUserDCVerified",\n  "minimalReqVersion": 1,\n  "data": {\n    "uuid": "getUUID(%system_playerInZone%)"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"math: Funktion ist nicht mit getUUID() Funktion kombinierbar."})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>d});var s=i(6540);const t={},r=s.createContext(t);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);