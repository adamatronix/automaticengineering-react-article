var m=Object.defineProperty;var a=(e,n)=>m(e,"name",{value:n,configurable:!0});import{R as i}from"./index-a38f3d31.js";import{s as o}from"./styled-components.browser.esm-ca00cf6a.js";import{m as d}from"./mediaQuery-f6cad8a4.js";import{S as p}from"./Section-d473a858.js";import{j as t}from"./jsx-runtime-69008c6b.js";const u=o.div` 
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 20px;
`,f=o.div`
  grid-column: 1 / span 12;
  ${e=>d("small")(`
    grid-column: ${e.orientation==="right"?"7 / span 6":"1 / span 6"};
  `)}
`,g=o.div`
  &:not(:last-child) {
    margin: 0 0 40px;
  }
`,l=a(({children:e,orientation:n="left",...s})=>{const c=i.Children.map(e,(r,_)=>i.isValidElement(r)?t(g,{children:i.cloneElement(r,{})}):r);return t(p,{contain:!0,...s,children:t(u,{children:t(f,{orientation:n,children:c})})})},"ColumnSection");try{l.displayName="ColumnSection",l.__docgenInfo={description:"",displayName:"ColumnSection",props:{orientation:{defaultValue:{value:"left"},description:"",name:"orientation",required:!1,type:{name:"string"}}}}}catch{}export{l as C};
//# sourceMappingURL=ColumnSection-4bc71e97.js.map
