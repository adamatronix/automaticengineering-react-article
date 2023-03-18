var i=Object.defineProperty;var n=(o,s)=>i(o,"name",{value:s,configurable:!0});import{C as a,a as c}from"./CopySection-aa62f015.js";import{S as e,n as r}from"./testRaw-c985bc64.js";import{j as t}from"./jsx-runtime-69008c6b.js";import"./styled-components.browser.esm-ca00cf6a.js";import"./index-4cb24bae.js";import"./index-a38f3d31.js";import"./es.object.get-own-property-descriptor-d261b708.js";import"./mediaQuery-f6cad8a4.js";import"./Section-d473a858.js";import"./RichText-2e38b3e9.js";import"./fontstack-1dbe4d5f.js";const _={parameters:{storySource:{source:`import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CopyBody, CopySection } from './CopySection';
import { SanityPortable } from 'SanityPortableText/SanityPortableText';
import node from 'SanityPortableText/testRaw';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/CopySection',
  component: CopySection,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof CopySection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TemplateSection: ComponentStory<typeof CopySection> = (args) => <CopySection {...args} />;

export const Section = TemplateSection.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Section.args = {
  data: [
    <SanityPortable blocks={node._rawContent}/>,
    <SanityPortable blocks={node._rawContent}/>
  ]
};


const TemplateBody: ComponentStory<typeof CopyBody> = (args) => <CopyBody {...args} />;

export const Body = TemplateBody.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Body.args = {
  data: <SanityPortable blocks={node._rawContent}/>
};

`,locationsMap:{section:{startLoc:{col:60,line:15},endLoc:{col:95,line:15},startBody:{col:60,line:15},endBody:{col:95,line:15}},body:{startLoc:{col:54,line:27},endLoc:{col:86,line:27},startBody:{col:54,line:27},endBody:{col:86,line:27}}}}},title:"Components/CopySection",component:a},p=n(o=>t(a,{...o}),"TemplateSection"),y=p.bind({});y.args={data:[t(e,{blocks:r._rawContent}),t(e,{blocks:r._rawContent})]};const d=n(o=>t(c,{...o}),"TemplateBody"),l=d.bind({});l.args={data:t(e,{blocks:r._rawContent})};const M=["Section","Body"];export{l as Body,y as Section,M as __namedExportsOrder,_ as default};
//# sourceMappingURL=CopySection.stories-f056795c.js.map
