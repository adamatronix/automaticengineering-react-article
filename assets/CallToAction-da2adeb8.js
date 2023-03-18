var i=Object.defineProperty;var a=(r,e)=>i(r,"name",{value:e,configurable:!0});import{s as n}from"./styled-components.browser.esm-ca00cf6a.js";import{m as c}from"./mediaQuery-f6cad8a4.js";import{f as l,t as d}from"./fontstack-1dbe4d5f.js";import{j as s}from"./jsx-runtime-69008c6b.js";const m=n.button`
  ${l.default}
  ${d("body01")}
  border: none;
  display: flex;
  outline: none;
  color: ${r=>r.theme==="black"?"rgb(var(--article-secondary))":"rgb(var(--article-primary))"};
  background: ${r=>r.theme==="black"?"rgb(var(--article-primary))":"#F6F6F6"};
  cursor: pointer;
  box-sizing: border-box;
  padding: 14px 0;
  border-radius: 12px;
  border: none;
  justify-content: center;
  width: 100%;
  transition: background .2s ease;

  ${r=>c("medium")(`
      width: 217px;

      &:hover {
        background: ${r.theme==="black"?"rgba(68,68,68,1)":"rgba(var(--article-primary), 0.13)"};
      }
  `)};

  &:active {
    background: ${r=>r.theme==="black"?"rgba(119,119,119,1)":"rgba(var(--article-primary), 0.24)"};
  }
`,t=a(({children:r,theme:e="light",...o})=>s(m,{theme:e,...o,children:r}),"CallToAction");try{t.displayName="CallToAction",t.__docgenInfo={description:"",displayName:"CallToAction",props:{theme:{defaultValue:{value:"light"},description:"",name:"theme",required:!1,type:{name:"string"}}}}}catch{}export{t as C};
//# sourceMappingURL=CallToAction-da2adeb8.js.map
