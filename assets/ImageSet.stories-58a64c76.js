var c=Object.defineProperty;var r=(e,s)=>c(e,"name",{value:s,configurable:!0});import{I as t}from"./ImageBlock-7b815022.js";import{I as m,a as i,b as l,c as g}from"./ImageSet-2c0f2efe.js";import{i as a}from"./20201219_DevHynes_00055-c0ac3b92.js";import{i as n}from"./Rectangle 2775-cbe2c76c.js";import{j as o,a as d}from"./jsx-runtime-69008c6b.js";import"./styled-components.browser.esm-ca00cf6a.js";import"./index-4cb24bae.js";import"./index-a38f3d31.js";import"./es.object.get-own-property-descriptor-d261b708.js";import"./Caption-9ed1f768.js";import"./fontstack-1dbe4d5f.js";import"./mediaQuery-f6cad8a4.js";import"./Section-d6776fcb.js";const N={parameters:{storySource:{source:`import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImageBlock } from 'ImageBlock/ImageBlock';
import { Image16, Image50, Image90, Image100 } from './ImageSet';
import imageOne from 'ImageBlock/assets/20201219_DevHynes_00055.jpeg';
import imageBox from './assets/Rectangle 2775.png';



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/ImageSet',
  component: Image50,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Image50>;


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
};`,locationsMap:{sixteen:{startLoc:{col:51,line:20},endLoc:{col:330,line:20},startBody:{col:51,line:20},endBody:{col:330,line:20}},fifty:{startLoc:{col:51,line:26},endLoc:{col:82,line:26},startBody:{col:51,line:26},endBody:{col:82,line:26}},ninety:{startLoc:{col:51,line:36},endLoc:{col:82,line:36},startBody:{col:51,line:36},endBody:{col:82,line:36}},hundred:{startLoc:{col:53,line:45},endLoc:{col:85,line:45},startBody:{col:53,line:45},endBody:{col:85,line:45}}}}},title:"Components/ImageSet",component:m},p=r(e=>d(i,{...e,children:[o(t,{src:n,alt:"dummy"}),o(t,{src:n,alt:"dummy"}),o(t,{src:n,alt:"dummy"}),o(t,{src:n,alt:"dummy"}),o(t,{src:n,alt:"dummy"}),o(t,{src:n,alt:"dummy"})]}),"Template16"),R=p.bind({}),y=r(e=>o(m,{...e}),"Template50"),I=y.bind({});I.args={children:o(t,{src:a,alt:"dummy"})};const u=r(e=>o(l,{...e}),"Template90"),B=u.bind({});B.args={children:o(t,{src:a,alt:"dummy"})};const f=r(e=>o(g,{...e}),"Template100"),x=f.bind({});x.args={children:o(t,{src:a,alt:"dummy"})};const v=["Sixteen","Fifty","Ninety","Hundred"];export{I as Fifty,x as Hundred,B as Ninety,R as Sixteen,v as __namedExportsOrder,N as default};
//# sourceMappingURL=ImageSet.stories-58a64c76.js.map
