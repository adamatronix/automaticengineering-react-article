var c=Object.defineProperty;var o=(e,t)=>c(e,"name",{value:t,configurable:!0});import{s as n}from"./styled-components.browser.esm-ca00cf6a.js";import{m as l}from"./mediaQuery-f6cad8a4.js";import{C as m}from"./CallToAction-da2adeb8.js";import{S as s}from"./Section-d473a858.js";import{j as r}from"./jsx-runtime-69008c6b.js";const p=n(s)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  ${l("small")`
    flex-direction: row;
  `}
`,d=n.a`
  text-decoration: none;
`,u=n.div`
  @media screen and (max-width: 768px) {
    &:not(:last-child) {
      margin: 0 0 15px;
    }
  }
  width: 80%;
  ${l("small")`
    margin: 0 10px;
    width: auto;
  `}
`,i=o(({buttons:e,...t})=>r(p,{contain:!0,small:!0,...t,children:e&&e.map((a,h)=>r(u,{children:r(d,{href:a.href,target:"_blank",children:r(m,{theme:a.theme,children:a.label})})}))}),"CtaGroup");try{i.displayName="CtaGroup",i.__docgenInfo={description:"",displayName:"CtaGroup",props:{buttons:{defaultValue:null,description:"",name:"buttons",required:!0,type:{name:"any[]"}}}}}catch{}export{i as C};
//# sourceMappingURL=CtaGroup-8664d127.js.map
