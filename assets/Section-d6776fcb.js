var p=Object.defineProperty;var n=(a,e)=>p(a,"name",{value:e,configurable:!0});import{C as t,s}from"./styled-components.browser.esm-ca00cf6a.js";import{m as o}from"./mediaQuery-f6cad8a4.js";import{j as d}from"./jsx-runtime-69008c6b.js";const c=t` 
  padding: 0 16px;
  ${o("small")`
    padding: 0 20px;
  `}
`,u=t` 
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto; 
`,g=t`
  margin-top: 80px;
  margin-bottom: 80px;

  ${o("small")`
    margin-top: 100px;
    margin-bottom: 100px;
  `}
`,f=t`
  margin-top: 80px;
  margin-bottom: 80px;

  ${o("small")`
    margin-top: 120px;
    margin-bottom: 120px;
  `}
`,x=s.div` 
  ${a=>a.small?t`
    ${g}
  `:t` 
    ${f}
  `}

  ${a=>!a.full&&t`
    ${c}`}

  ${({contain:a})=>a&&`
    ${u}
  `}
`,l=n(({children:a,small:e,full:r,contain:i,...m})=>d(x,{small:e,full:r,contain:i,...m,children:a}),"Section");try{l.displayName="Section",l.__docgenInfo={description:"",displayName:"Section",props:{small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},full:{defaultValue:null,description:"",name:"full",required:!1,type:{name:"boolean"}},contain:{defaultValue:null,description:"",name:"contain",required:!1,type:{name:"boolean"}}}}}catch{}export{l as S};
//# sourceMappingURL=Section-d6776fcb.js.map
