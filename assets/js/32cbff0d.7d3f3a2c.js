"use strict";(self.webpackChunkdcv_2_wiki=self.webpackChunkdcv_2_wiki||[]).push([[8439],{5030:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var r=n(4848),s=n(8453);const t={sidebar_position:1},d="SubString",a={id:"docs-variables/variabel-editor/methoden/substring",title:"SubString",description:"Ein SubString ist ein Teilstring, der aus einem anderen String extrahiert wird. Du hast die m\xf6glichkeit Start-Zeichen-Nummer und End-Zeichen-Nummer anzugeben.",source:"@site/docs/docs-variables/variabel-editor/methoden/substring.md",sourceDirName:"docs-variables/variabel-editor/methoden",slug:"/docs-variables/variabel-editor/methoden/substring",permalink:"/DCV2-PublicDocs/docs/docs-variables/variabel-editor/methoden/substring",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Split / Teilen",permalink:"/DCV2-PublicDocs/docs/docs-variables/variabel-editor/methoden/split"},next:{title:"Trim",permalink:"/DCV2-PublicDocs/docs/docs-variables/variabel-editor/methoden/trim"}},l={},c=[{value:"Beispiel 1:",id:"beispiel-1",level:2},{value:"Beispiel 2:",id:"beispiel-2",level:2}];function o(e){const i={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"substring",children:"SubString"})}),"\n",(0,r.jsx)(i.p,{children:"Ein SubString ist ein Teilstring, der aus einem anderen String extrahiert wird. Du hast die m\xf6glichkeit Start-Zeichen-Nummer und End-Zeichen-Nummer anzugeben."}),"\n",(0,r.jsxs)(i.p,{children:["Als alternative zur Start-Zeichen-Nummer kannst du die Methode ",(0,r.jsx)(i.code,{children:"searchFor{K}"}),' verwenden. Diese gibt die erste Position des Zeichens "K" zur\xfcck.']}),"\n",(0,r.jsxs)(i.p,{children:["Als alternative zur End-Zeichen-Nummer kannst du die Methode ",(0,r.jsx)(i.code,{children:"stringLength"})," verwenden. Diese gibt die L\xe4nge des Strings zur\xfcck."]}),"\n",(0,r.jsx)(i.h2,{id:"beispiel-1",children:"Beispiel 1:"}),"\n",(0,r.jsxs)(i.p,{children:["String: ",(0,r.jsx)(i.code,{children:"Das ist ein Beispiel-String."})]}),"\n",(0,r.jsx)(i.p,{children:"Zeichen 10 bis 20 werden extrahiren."}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-json",children:'{\n  "variables": [\n    {\n      "variableName": "example_var",\n      "filterWithColorCodes": false,\n      "filters": ["substring(12,20)"]\n    }\n  ]\n}\n'})}),"\n",(0,r.jsxs)(i.p,{children:["Die Variable ",(0,r.jsx)(i.code,{children:"example_var"})," enth\xe4lt nun den Wert ",(0,r.jsx)(i.code,{children:"Beispiel"}),"."]}),"\n",(0,r.jsx)(i.h2,{id:"beispiel-2",children:"Beispiel 2:"}),"\n",(0,r.jsxs)(i.p,{children:["String: ",(0,r.jsx)(i.code,{children:"Das ist ein Beispiel-String."}),'\nWir suchen nach dem Zeichen "B" und extrahieren alle Zeichen bis zum Ende des Strings.']}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-json",children:'{\n  "variables": [\n    {\n      "variableName": "example_var",\n      "filterWithColorCodes": false,\n      "filters": ["substring(searchFor{B},stringLength)"]\n    }\n  ]\n}\n'})}),"\n",(0,r.jsxs)(i.p,{children:["Die Variable ",(0,r.jsx)(i.code,{children:"example_var"})," enth\xe4lt nun den Wert ",(0,r.jsx)(i.code,{children:"Beispiel-String."}),"."]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>d,x:()=>a});var r=n(6540);const s={},t=r.createContext(s);function d(e){const i=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(t.Provider,{value:i},e.children)}}}]);