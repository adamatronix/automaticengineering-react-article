var m=Object.defineProperty;var n=(t,s)=>m(t,"name",{value:s,configurable:!0});import{C as e}from"./ColumnSection-4bc71e97.js";import{S as r,n as i}from"./testRaw-c985bc64.js";import{C as l}from"./CallToAction-da2adeb8.js";import{j as o,F as a,a as c}from"./jsx-runtime-69008c6b.js";import"./index-a38f3d31.js";import"./es.object.get-own-property-descriptor-d261b708.js";import"./styled-components.browser.esm-ca00cf6a.js";import"./index-4cb24bae.js";import"./mediaQuery-f6cad8a4.js";import"./Section-d473a858.js";import"./RichText-2e38b3e9.js";import"./fontstack-1dbe4d5f.js";const P={title:"Components/ColumnSection",component:e,parameters:{storySource:{source:`import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ColumnSection } from './ColumnSection';
import { SanityPortable } from 'SanityPortableText/SanityPortableText';
import { CallToAction } from 'CallToAction/CallToAction';
import node from 'SanityPortableText/testRaw';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/ColumnSection',
  component: ColumnSection,
  parameters: {
    layout: 'fullscreen'
  }
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ColumnSection>;


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ColumnSection> = (args) => <>
  <ColumnSection {...args}>
    <SanityPortable blocks={node._rawContent}/>
    <CallToAction theme='black'>Visit Site</CallToAction>
  </ColumnSection>
  </>;

export const Default = Template.bind({});


const TemplateRight: ComponentStory<typeof ColumnSection> = (args) => <>
  <ColumnSection {...args}>
    <SanityPortable blocks={node._rawContent}/>
    <CallToAction theme='black'>Visit Site</CallToAction>
  </ColumnSection>
  </>;
  

export const Right = TemplateRight.bind({});

Right.args = {
  orientation: 'right'
};`,locationsMap:{default:{startLoc:{col:55,line:21},endLoc:{col:5,line:26},startBody:{col:55,line:21},endBody:{col:5,line:26}},right:{startLoc:{col:60,line:31},endLoc:{col:5,line:36},startBody:{col:60,line:31},endBody:{col:5,line:36}}}},layout:"fullscreen"}},p=n(t=>o(a,{children:c(e,{...t,children:[o(r,{blocks:i._rawContent}),o(l,{theme:"black",children:"Visit Site"})]})}),"Template"),_=p.bind({}),d=n(t=>o(a,{children:c(e,{...t,children:[o(r,{blocks:i._rawContent}),o(l,{theme:"black",children:"Visit Site"})]})}),"TemplateRight"),C=d.bind({});C.args={orientation:"right"};const j=["Default","Right"];export{_ as Default,C as Right,j as __namedExportsOrder,P as default};
//# sourceMappingURL=ColumnSection.stories-38c46ef5.js.map
