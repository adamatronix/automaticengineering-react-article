var i=Object.defineProperty;var t=(o,a)=>i(o,"name",{value:a,configurable:!0});import{s as p}from"./styled-components.browser.esm-ca00cf6a.js";import{I as e}from"./ImageBlock-7b815022.js";import{i as r}from"./20201219_DevHynes_00055-c0ac3b92.js";import{j as n}from"./jsx-runtime-69008c6b.js";import"./index-4cb24bae.js";import"./index-a38f3d31.js";import"./es.object.get-own-property-descriptor-d261b708.js";import"./Caption-9ed1f768.js";import"./fontstack-1dbe4d5f.js";const h={parameters:{storySource:{source:`import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImageBlock } from './ImageBlock';
import imageOne from './assets/20201219_DevHynes_00055.jpeg';
import imageOneBlur from './assets/20201219_DevHynes_00055_blur.jpg';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/ImageBlock',
  component: ImageBlock,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ImageBlock>;


const Wrapper = styled.div\`
  max-width: 500px;
  width: 100%;
  position: relative;
\`

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ImageBlock> = (args) => <Wrapper><ImageBlock {...args} /></Wrapper>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  src: imageOne
};

export const Caption = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Caption.args = {
  src: imageOne,
  caption: "In sit amet venenatis nunc."
};

`,locationsMap:{default:{startLoc:{col:52,line:24},endLoc:{col:105,line:24},startBody:{col:52,line:24},endBody:{col:105,line:24}},caption:{startLoc:{col:52,line:24},endLoc:{col:105,line:24},startBody:{col:52,line:24},endBody:{col:105,line:24}}}}},title:"Components/ImageBlock",component:e},c=p.div`
  max-width: 500px;
  width: 100%;
  position: relative;
`,s=t(o=>n(c,{children:n(e,{...o})}),"Template"),m=s.bind({});m.args={src:r};const l=s.bind({});l.args={src:r,caption:"In sit amet venenatis nunc."};const C=["Default","Caption"];export{l as Caption,m as Default,C as __namedExportsOrder,h as default};
//# sourceMappingURL=ImageBlock.stories-a07cd542.js.map
