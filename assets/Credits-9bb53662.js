var c=Object.defineProperty;var n=(e,r)=>c(e,"name",{value:r,configurable:!0});import{s as t}from"./styled-components.browser.esm-ca00cf6a.js";import{m as s}from"./mediaQuery-f6cad8a4.js";import{f as p,t as m}from"./fontstack-1dbe4d5f.js";import{S as g}from"./Section-d473a858.js";import{j as i,a as u}from"./jsx-runtime-69008c6b.js";const x=t(g)`
  text-align: center;
`,y=t.ul` 
  list-style: none;
  list-style-image: none;
  margin: 0;
  padding: 0;
`,f=t.li` 
  &:not(:last-child) {
    margin: 0 0 16px;
  }
  display: flex;
`,d=t.span`
    ${p.default};
    ${m("body01")}
    width: 50%;
    box-sizing: border-box;
    padding: 0 15px;
`,h=t(d)`
  opacity: 0.4;
  text-align: right;
`,_=t(d)`
  text-align: left;
`,C=t.div` 
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 15px;

  ${s("small")`
    grid-column-gap: 30px;
  `}
`,b=t.div` 
  grid-column: 2 / span 10;

  ${s("small")`
    grid-column: 4 / span 6;
  `}
`,L=n(({data:e,...r})=>u(f,{...r,children:[i(h,{children:e.title}),i(_,{children:e.name})]}),"CreditLine"),a=n(({data:e,...r})=>i(x,{contain:!0,small:!0,...r,children:i(C,{children:i(b,{children:i(y,{children:e.map((l,o)=>i(L,{data:l},o))})})})}),"Credits");try{a.displayName="Credits",a.__docgenInfo={description:"",displayName:"Credits",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any"}}}}}catch{}export{a as C};
//# sourceMappingURL=Credits-9bb53662.js.map
