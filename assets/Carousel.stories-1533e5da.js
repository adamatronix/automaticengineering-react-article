var n=Object.defineProperty;var a=(r,s)=>n(r,"name",{value:s,configurable:!0});import{s as l}from"./styled-components.browser.esm-ca00cf6a.js";import{C as m}from"./Carousel-8d60c994.js";import{I as t}from"./ImageBlock-7b815022.js";import{i as e}from"./Rectangle 2775-cbe2c76c.js";import{j as o,F as c,a as i}from"./jsx-runtime-69008c6b.js";import"./index-4cb24bae.js";import"./index-a38f3d31.js";import"./es.object.get-own-property-descriptor-d261b708.js";import"./Section-d473a858.js";import"./mediaQuery-f6cad8a4.js";import"./fontstack-1dbe4d5f.js";import"./Caption-9ed1f768.js";const M={title:"Components/Carousel",component:m,parameters:{storySource:{source:`import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Carousel } from './Carousel';
import { ImageBlock } from 'ImageBlock/ImageBlock';
import imageOne from 'ImageBlock/assets/20201219_DevHynes_00055.jpeg';
import imageBox from 'ImageSet/assets/Rectangle 2775.png';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'fullscreen'
  }
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Carousel>;


const Spacer = styled.div\`
  height: 800px;
\`
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Carousel> = (args) => <>
  <Carousel {...args}>
    <ImageBlock src={imageBox} alt="dummy"/>
    <ImageBlock src={imageBox} alt="dummy"/>
    <ImageBlock src={imageBox} alt="dummy"/>
    <ImageBlock src={imageBox} alt="dummy"/>
    <ImageBlock src={imageBox} alt="dummy"/>
    <ImageBlock src={imageBox} alt="dummy"/>
  </Carousel>
  </>;

export const Default = Template.bind({});
`,locationsMap:{default:{startLoc:{col:50,line:24},endLoc:{col:5,line:33},startBody:{col:50,line:24},endBody:{col:5,line:33}}}},layout:"fullscreen"}};l.div`
  height: 800px;
`;const p=a(r=>o(c,{children:i(m,{...r,children:[o(t,{src:e,alt:"dummy"}),o(t,{src:e,alt:"dummy"}),o(t,{src:e,alt:"dummy"}),o(t,{src:e,alt:"dummy"}),o(t,{src:e,alt:"dummy"}),o(t,{src:e,alt:"dummy"})]})}),"Template"),S=p.bind({}),_=["Default"];export{S as Default,_ as __namedExportsOrder,M as default};
//# sourceMappingURL=Carousel.stories-1533e5da.js.map
