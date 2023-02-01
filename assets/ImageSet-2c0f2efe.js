var h=Object.defineProperty;var n=(e,a)=>h(e,"name",{value:a,configurable:!0});import{R as t}from"./index-a38f3d31.js";import{s as i}from"./styled-components.browser.esm-ca00cf6a.js";import{m as d}from"./mediaQuery-f6cad8a4.js";import{S as o}from"./Section-d6776fcb.js";import{j as r}from"./jsx-runtime-69008c6b.js";const s=i.div` 
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 9px;
  grid-row-gap: 20px;
  ${d("small")`
    grid-column-gap: 20px;
  `}
`,N=i.div`
  grid-column: 1 / span 12;

  ${d("small")`
    grid-column: 4 / span 6;
  `}
`,u=i.div`
  grid-column: 1 / span 12;
`,x=i.div` 
  display: flex;
  align-items: center;
  grid-column: span 6;
  ${e=>d("small")(`
    grid-column: ${e.span};
  `)}
`,m=n(({children:e,...a})=>{const y={5:"2 / span 2",4:"3 / span 2",3:"7 / span 2",2:"7 / span 2",1:"7 / span 2"},p=t.Children.count(e),I=t.Children.map(e,(c,f)=>t.isValidElement(c)?r(x,{span:f===0&&p<6?y[p]:"span 2",children:t.cloneElement(c,{})}):c);return r(o,{contain:!0,...a,children:r(s,{children:I||null})})},"Image16"),l=n(({children:e,...a})=>r(o,{contain:!0,...a,children:r(s,{children:r(N,{children:e})})}),"Image50"),g=n(({children:e,...a})=>r(o,{...a,children:r(s,{children:r(u,{children:e})})}),"Image90"),_=n(({children:e,...a})=>r(o,{full:!0,...a,children:r(s,{children:r(u,{children:e})})}),"Image100");try{m.displayName="Image16",m.__docgenInfo={description:"",displayName:"Image16",props:{}}}catch{}try{l.displayName="Image50",l.__docgenInfo={description:"",displayName:"Image50",props:{}}}catch{}try{g.displayName="Image90",g.__docgenInfo={description:"",displayName:"Image90",props:{}}}catch{}try{_.displayName="Image100",_.__docgenInfo={description:"",displayName:"Image100",props:{}}}catch{}export{l as I,m as a,g as b,_ as c};
//# sourceMappingURL=ImageSet-2c0f2efe.js.map
