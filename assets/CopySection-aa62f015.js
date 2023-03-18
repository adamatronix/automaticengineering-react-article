var p=Object.defineProperty;var t=(r,n)=>p(r,"name",{value:n,configurable:!0});import{s as o}from"./styled-components.browser.esm-ca00cf6a.js";import{m as i}from"./mediaQuery-f6cad8a4.js";import{S as c}from"./Section-d473a858.js";import{j as e,a as m}from"./jsx-runtime-69008c6b.js";const s=o.div` 
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 20px;
`,y=o.div` 
  grid-column: 1 / span 12;

  ${i("small")`
    grid-column: 4 / span 6;
  `}

`,a=t(({data:r,...n})=>e(c,{contain:!0,...n,children:e(s,{children:e(y,{children:r})})}),"CopyBody"),l=o.div`
  &:not(:last-child) {
    margin: 0 0 20px;
    ${i("small")`
      margin: 0;
    `}
  }
`,u=o(l)`
  grid-column: 1 / span 12;
  ${i("small")`
    grid-column: 1 / span 6;
  `}
`,g=o(l)`
  grid-column: 1 / span 12;
  ${i("small")`
    grid-column: 7 / span 6;
  `}
`,d=t(({data:r,...n})=>e(c,{contain:!0,...n,children:m(s,{children:[e(u,{children:r&&r[0]?r[0]:""}),e(g,{children:r&&r[1]?r[1]:""})]})}),"CopySection");try{a.displayName="CopyBody",a.__docgenInfo={description:"",displayName:"CopyBody",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any"}}}}}catch{}try{d.displayName="CopySection",d.__docgenInfo={description:"",displayName:"CopySection",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any[]"}}}}}catch{}export{d as C,a};
//# sourceMappingURL=CopySection-aa62f015.js.map
