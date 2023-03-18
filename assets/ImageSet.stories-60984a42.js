var l=Object.defineProperty;var a=(t,c)=>l(t,"name",{value:c,configurable:!0});import{I as o}from"./ImageBlock-7b815022.js";import{I as r,a as i,b as g,c as d,d as p}from"./ImageSet-ba3da447.js";import{i as m}from"./20201219_DevHynes_00055-c0ac3b92.js";import{i as n}from"./Rectangle 2775-cbe2c76c.js";import{j as e,F as y,a as s}from"./jsx-runtime-69008c6b.js";import"./styled-components.browser.esm-ca00cf6a.js";import"./index-4cb24bae.js";import"./index-a38f3d31.js";import"./es.object.get-own-property-descriptor-d261b708.js";import"./Caption-9ed1f768.js";import"./fontstack-1dbe4d5f.js";import"./mediaQuery-f6cad8a4.js";import"./Section-d473a858.js";const E={parameters:{storySource:{source:`import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImageBlock } from 'ImageBlock/ImageBlock';
import { Image16, Image50, Image90, Image100, ImageDual } from './ImageSet';
import imageOne from 'ImageBlock/assets/20201219_DevHynes_00055.jpeg';
import imageBox from './assets/Rectangle 2775.png';



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/ImageSet',
  component: Image50,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Image50>;


const TemplateDual: ComponentStory<typeof ImageDual> = (args) => <><ImageDual {...args}><ImageBlock src={imageBox} alt="dummy"/><ImageBlock src={imageBox} alt="dummy"/><ImageBlock src={imageBox} alt="dummy"/></ImageDual></>;

export const Dual = TemplateDual.bind({});

Dual.args = {
  stack: true
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template16: ComponentStory<typeof Image16> = (args) => <Image16 {...args}><ImageBlock src={imageBox} alt="dummy"/><ImageBlock src={imageBox} alt="dummy"/><ImageBlock src={imageBox} alt="dummy"/><ImageBlock src={imageBox} alt="dummy"/><ImageBlock src={imageBox} alt="dummy"/><ImageBlock src={imageBox} alt="dummy"/></Image16>;

export const Sixteen = Template16.bind({});



const Template50: ComponentStory<typeof Image50> = (args) => <Image50 {...args} />;

export const Fifty = Template50.bind({});


// More on args: https://storybook.js.org/docs/react/writing-stories/args
Fifty.args = {
  children: <ImageBlock src={imageOne} alt="dummy"/>
};

const Template90: ComponentStory<typeof Image90> = (args) => <Image90 {...args} />;

export const Ninety = Template90.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Ninety.args = {
  children: <ImageBlock src={imageOne} alt="dummy"/>
};

const Template100: ComponentStory<typeof Image100> = (args) => <Image100 {...args} />;

export const Hundred = Template100.bind({});


// More on args: https://storybook.js.org/docs/react/writing-stories/args
Hundred.args = {
  children: <ImageBlock src={imageOne} alt="dummy"/>
};`,locationsMap:{dual:{startLoc:{col:55,line:19},endLoc:{col:223,line:19},startBody:{col:55,line:19},endBody:{col:223,line:19}},sixteen:{startLoc:{col:51,line:28},endLoc:{col:330,line:28},startBody:{col:51,line:28},endBody:{col:330,line:28}},fifty:{startLoc:{col:51,line:34},endLoc:{col:82,line:34},startBody:{col:51,line:34},endBody:{col:82,line:34}},ninety:{startLoc:{col:51,line:44},endLoc:{col:82,line:44},startBody:{col:51,line:44},endBody:{col:82,line:44}},hundred:{startLoc:{col:53,line:53},endLoc:{col:85,line:53},startBody:{col:53,line:53},endBody:{col:85,line:53}}}}},title:"Components/ImageSet",component:r},u=a(t=>e(y,{children:s(i,{...t,children:[e(o,{src:n,alt:"dummy"}),e(o,{src:n,alt:"dummy"}),e(o,{src:n,alt:"dummy"})]})}),"TemplateDual"),I=u.bind({});I.args={stack:!0};const B=a(t=>s(g,{...t,children:[e(o,{src:n,alt:"dummy"}),e(o,{src:n,alt:"dummy"}),e(o,{src:n,alt:"dummy"}),e(o,{src:n,alt:"dummy"}),e(o,{src:n,alt:"dummy"}),e(o,{src:n,alt:"dummy"})]}),"Template16"),q=B.bind({}),f=a(t=>e(r,{...t}),"Template50"),x=f.bind({});x.args={children:e(o,{src:m,alt:"dummy"})};const k=a(t=>e(d,{...t}),"Template90"),b=k.bind({});b.args={children:e(o,{src:m,alt:"dummy"})};const h=a(t=>e(p,{...t}),"Template100"),T=h.bind({});T.args={children:e(o,{src:m,alt:"dummy"})};const z=["Dual","Sixteen","Fifty","Ninety","Hundred"];export{I as Dual,x as Fifty,T as Hundred,b as Ninety,q as Sixteen,z as __namedExportsOrder,E as default};
//# sourceMappingURL=ImageSet.stories-60984a42.js.map
