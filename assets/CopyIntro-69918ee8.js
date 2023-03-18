var p=Object.defineProperty;var o=(e,r)=>p(e,"name",{value:r,configurable:!0});import{s as a}from"./styled-components.browser.esm-ca00cf6a.js";import{m as l}from"./mediaQuery-f6cad8a4.js";import{S as m}from"./Section-d473a858.js";import{I as c}from"./Info-e2076a1e.js";import{C as u}from"./CallToAction-da2adeb8.js";import{f as y,t as f}from"./fontstack-1dbe4d5f.js";import{j as t,a as i}from"./jsx-runtime-69008c6b.js";const g=a(m)`
  ${y.default}
  ${f("body02")}
`,h=a.a`
  display: none;
  ${l("small")`
    display: inline-block;
  `}
`,_=a.div` 
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 30px;
`,I=a.div`
  grid-column: 1 / span 12;

  ${l("small")`
    grid-column: 1 / span 6;
  `}
`,C=a.div`
  grid-column: 1 / span 12;

  ${l("small")`
    grid-column: 7 / span 6;
  `}
`,s=o(({info:e,cta:r,text:n,...d})=>t(g,{contain:!0,...d,children:i(_,{children:[i(I,{children:[e?t(c,{title:e.title,role:e.role,type:e.type,date:e.date}):"",r?t(h,{href:r.href,target:"_blank",children:t(u,{theme:"black",children:r.label})}):""]}),t(C,{children:n||""})]})}),"CopyIntro");try{s.displayName="CopyIntro",s.__docgenInfo={description:"",displayName:"CopyIntro",props:{info:{defaultValue:null,description:"",name:"info",required:!1,type:{name:"any"}},cta:{defaultValue:null,description:"",name:"cta",required:!1,type:{name:"any"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"any"}}}}}catch{}export{s as C};
//# sourceMappingURL=CopyIntro-69918ee8.js.map
