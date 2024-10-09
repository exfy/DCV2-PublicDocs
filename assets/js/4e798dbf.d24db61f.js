"use strict";(self.webpackChunkdcv_2_wiki=self.webpackChunkdcv_2_wiki||[]).push([[9826],{5101:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var i=r(4848),s=r(8453);const t={sidebar_position:1},a="Replace / ersetzen",o={id:"docs-variables/variabel-editor/methoden/replace",title:"Replace / ersetzen",description:"Es gibt derzeit folgende Replace-Methoden:",source:"@site/docs/docs-variables/variabel-editor/methoden/replace.md",sourceDirName:"docs-variables/variabel-editor/methoden",slug:"/docs-variables/variabel-editor/methoden/replace",permalink:"/DCV2-PublicDocs/docs/docs-variables/variabel-editor/methoden/replace",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Lower/Uppercase",permalink:"/DCV2-PublicDocs/docs/docs-variables/variabel-editor/methoden/case"},next:{title:"Split / Teilen",permalink:"/DCV2-PublicDocs/docs/docs-variables/variabel-editor/methoden/split"}},l={},c=[{value:"Beispiel 1:",id:"beispiel-1",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"replace--ersetzen",children:"Replace / ersetzen"})}),"\n",(0,i.jsx)(n.p,{children:"Es gibt derzeit folgende Replace-Methoden:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"replaceAll(K,_)"})," - Ersetzt alle Vorkommen eines Strings durch einen anderen String."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"replaceFirst(K,_)"})," - Ersetzt das erste Vorkommen eines Strings durch einen anderen String."]}),"\n",(0,i.jsx)(n.h2,{id:"beispiel-1",children:"Beispiel 1:"}),"\n",(0,i.jsxs)(n.p,{children:["String: ",(0,i.jsx)(n.code,{children:"Das ist ein Beispiel-String. Komische Dinge passieren."})]}),"\n",(0,i.jsx)(n.p,{children:'Wir ersetzen alle Vorkommen von "K" durch "_"'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "variables": [\n    {\n      "variableName": "example_var",\n      "filterWithColorCodes": false,\n      "filters": ["replaceAll(K,_)"]\n    }\n  ]\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Die Variable ",(0,i.jsx)(n.code,{children:"example_var"})," enth\xe4lt nun den Wert ",(0,i.jsx)(n.code,{children:"Das ist ein Beispiel-String. _omische Dinge passieren."}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var i=r(6540);const s={},t=i.createContext(s);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);