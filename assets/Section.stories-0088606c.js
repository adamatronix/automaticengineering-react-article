var a=Object.defineProperty;var e=(n,i)=>a(n,"name",{value:i,configurable:!0});import{s as c}from"./styled-components.browser.esm-ca00cf6a.js";import{S as s}from"./Section-d6776fcb.js";import{j as o}from"./jsx-runtime-69008c6b.js";import"./index-4cb24bae.js";import"./index-a38f3d31.js";import"./es.object.get-own-property-descriptor-d261b708.js";import"./mediaQuery-f6cad8a4.js";const x={title:"Components/Section",component:s,parameters:{storySource:{source:`import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Section } from './Section';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Section',
  component: Section,
  parameters: {
    layout: "fullscren"
  }
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Section>;

const Placeholder = styled.div\`
  position: relative;
  width: 100%;
  height: 600px;
  border-radius: 16px;
  overflow: hidden;
  background: #EEEEEE;
\`

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Section> = (args) => <Section {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: <Placeholder />
};

export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Small.args = {
  small: true,
  children: <Placeholder />
};

export const Contain = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Contain.args = {
  contain: true,
  children: <Placeholder />
};`,locationsMap:{primary:{startLoc:{col:49,line:26},endLoc:{col:80,line:26},startBody:{col:49,line:26},endBody:{col:80,line:26}},small:{startLoc:{col:49,line:26},endLoc:{col:80,line:26},startBody:{col:49,line:26},endBody:{col:80,line:26}},contain:{startLoc:{col:49,line:26},endLoc:{col:80,line:26},startBody:{col:49,line:26},endBody:{col:80,line:26}}}},layout:"fullscren"}},t=c.div`
  position: relative;
  width: 100%;
  height: 600px;
  border-radius: 16px;
  overflow: hidden;
  background: #EEEEEE;
`,r=e(n=>o(s,{...n}),"Template"),l=r.bind({});l.args={children:o(t,{})};const d=r.bind({});d.args={small:!0,children:o(t,{})};const p=r.bind({});p.args={contain:!0,children:o(t,{})};const E=["Primary","Small","Contain"];export{p as Contain,l as Primary,d as Small,E as __namedExportsOrder,x as default};
//# sourceMappingURL=Section.stories-0088606c.js.map
