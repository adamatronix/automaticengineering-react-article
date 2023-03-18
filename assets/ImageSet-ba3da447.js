var N=Object.defineProperty;var s=(e,r)=>N(e,"name",{value:r,configurable:!0});import{R as t}from"./index-a38f3d31.js";import{s as i}from"./styled-components.browser.esm-ca00cf6a.js";import{m as d}from"./mediaQuery-f6cad8a4.js";import{S as o}from"./Section-d473a858.js";import{j as a}from"./jsx-runtime-69008c6b.js";const c=i.div` 
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 9px;
  grid-row-gap: 20px;
  ${d("small")`
    grid-column-gap: 20px;
  `}
`,x=i.div`
  grid-column: 1 / span 12;

  ${d("small")`
    grid-column: 4 / span 6;
  `}
`,I=i.div`
  grid-column: 1 / span 12;
`,V=i.div` 
  display: flex;
  grid-column: span 12;
  ${e=>d("small")(`
    grid-column: span 6;
  `)}
`,b=i.div` 
  display: flex;
  align-items: center;
  grid-column: span 6;
  ${e=>d("small")(`
    grid-column: ${e.span};
  `)}
`,u=s(({children:e,stack:r,...n})=>{const p=t.Children.map(e,l=>t.isValidElement(l)?a(V,{children:t.cloneElement(l,{})}):l);return a(o,{contain:!0,stack:r,...n,children:a(c,{children:p||null})})},"ImageDual"),g=s(({children:e,stack:r,...n})=>{const p={5:"2 / span 2",4:"3 / span 2",3:"7 / span 2",2:"7 / span 2",1:"7 / span 2"},l=t.Children.count(e),h=t.Children.map(e,(m,k)=>t.isValidElement(m)?a(b,{span:k===0&&l<6?p[l]:"span 2",children:t.cloneElement(m,{})}):m);return a(o,{contain:!0,stack:r,...n,children:a(c,{children:h||null})})},"Image16"),_=s(({children:e,stack:r,...n})=>a(o,{contain:!0,stack:r,...n,children:a(c,{children:a(x,{children:e})})}),"Image50"),y=s(({children:e,stack:r,...n})=>a(o,{stack:r,...n,children:a(c,{children:a(I,{children:e})})}),"Image90"),f=s(({children:e,stack:r,...n})=>a(o,{full:!0,stack:r,...n,children:a(c,{children:a(I,{children:e})})}),"Image100");try{u.displayName="ImageDual",u.__docgenInfo={description:"",displayName:"ImageDual",props:{stack:{defaultValue:null,description:"",name:"stack",required:!1,type:{name:"boolean"}}}}}catch{}try{g.displayName="Image16",g.__docgenInfo={description:"",displayName:"Image16",props:{stack:{defaultValue:null,description:"",name:"stack",required:!1,type:{name:"boolean"}}}}}catch{}try{_.displayName="Image50",_.__docgenInfo={description:"",displayName:"Image50",props:{stack:{defaultValue:null,description:"",name:"stack",required:!1,type:{name:"boolean"}}}}}catch{}try{y.displayName="Image90",y.__docgenInfo={description:"",displayName:"Image90",props:{stack:{defaultValue:null,description:"",name:"stack",required:!1,type:{name:"boolean"}}}}}catch{}try{f.displayName="Image100",f.__docgenInfo={description:"",displayName:"Image100",props:{stack:{defaultValue:null,description:"",name:"stack",required:!1,type:{name:"boolean"}}}}}catch{}export{_ as I,u as a,g as b,y as c,f as d};
//# sourceMappingURL=ImageSet-ba3da447.js.map
