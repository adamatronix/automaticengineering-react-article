var i=Object.defineProperty;var r=(t,a)=>i(t,"name",{value:a,configurable:!0});import{s as c}from"./styled-components.browser.esm-ca00cf6a.js";import{S as n}from"./Section-d473a858.js";import{j as o,a as l,F as d}from"./jsx-runtime-69008c6b.js";import"./index-4cb24bae.js";import"./index-a38f3d31.js";import"./es.object.get-own-property-descriptor-d261b708.js";import"./mediaQuery-f6cad8a4.js";const j={title:"Components/Section",component:n,parameters:{storySource:{source:`import React from 'react';
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
};

const StackTemplate: ComponentStory<typeof Section> = (args) => <><Section {...args} /><Section {...args} /></>;

export const Stack = StackTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Stack.args = {
  stack: true,
  children: <Placeholder />
};`,locationsMap:{primary:{startLoc:{col:49,line:26},endLoc:{col:80,line:26},startBody:{col:49,line:26},endBody:{col:80,line:26}},small:{startLoc:{col:49,line:26},endLoc:{col:80,line:26},startBody:{col:49,line:26},endBody:{col:80,line:26}},contain:{startLoc:{col:49,line:26},endLoc:{col:80,line:26},startBody:{col:49,line:26},endBody:{col:80,line:26}},stack:{startLoc:{col:54,line:48},endLoc:{col:111,line:48},startBody:{col:54,line:48},endBody:{col:111,line:48}}}},layout:"fullscren"}},e=c.div`
  position: relative;
  width: 100%;
  height: 600px;
  border-radius: 16px;
  overflow: hidden;
  background: #EEEEEE;
`,s=r(t=>o(n,{...t}),"Template"),p=s.bind({});p.args={children:o(e,{})};const m=s.bind({});m.args={small:!0,children:o(e,{})};const g=s.bind({});g.args={contain:!0,children:o(e,{})};const y=r(t=>l(d,{children:[o(n,{...t}),o(n,{...t})]}),"StackTemplate"),h=y.bind({});h.args={stack:!0,children:o(e,{})};const w=["Primary","Small","Contain","Stack"];export{g as Contain,p as Primary,m as Small,h as Stack,w as __namedExportsOrder,j as default};
//# sourceMappingURL=Section.stories-4f526d86.js.map
