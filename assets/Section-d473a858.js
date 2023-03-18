var s=Object.defineProperty;var n=(a,o)=>s(a,"name",{value:o,configurable:!0});import{C as t,s as d}from"./styled-components.browser.esm-ca00cf6a.js";import{m as e}from"./mediaQuery-f6cad8a4.js";import{j as c}from"./jsx-runtime-69008c6b.js";const u=t` 
  padding: 0 16px;
  ${e("small")`
    padding: 0 20px;
  `}
`,g=t` 
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto; 
`,x=t`
  margin-top: 80px;
  margin-bottom: 80px;

  ${e("small")`
    margin-top: 100px;
    margin-bottom: 100px;
  `}
`,f=t`
  margin-top: 80px;
  margin-bottom: 80px;

  ${e("small")`
    margin-top: 120px;
    margin-bottom: 120px;
  `}
`,y=d.div` 
  ${a=>a.small?t`
    ${x}
  `:t` 
    ${f}
  `}

  ${a=>a.stack&&t`
    margin-top: 20px;
    margin-bottom: 20px;
    ${e("small")`
      margin-top: 20px;
      margin-bottom: 20px;
    `}
  `}

  ${a=>!a.full&&t`
    ${u}`}

  ${({contain:a})=>a&&`
    ${g}
  `}
`,l=n(({children:a,small:o,full:r,stack:m,contain:i,...p})=>c(y,{small:o,full:r,contain:i,stack:m,...p,children:a}),"Section");try{l.displayName="Section",l.__docgenInfo={description:"",displayName:"Section",props:{small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},full:{defaultValue:null,description:"",name:"full",required:!1,type:{name:"boolean"}},stack:{defaultValue:null,description:"",name:"stack",required:!1,type:{name:"boolean"}},contain:{defaultValue:null,description:"",name:"contain",required:!1,type:{name:"boolean"}}}}}catch{}export{l as S};
//# sourceMappingURL=Section-d473a858.js.map
