var e=Object.defineProperty;var t=(o,n)=>e(o,"name",{value:n,configurable:!0});import{S as r,n as a}from"./testRaw-c985bc64.js";import{j as s}from"./jsx-runtime-69008c6b.js";import"./index-a38f3d31.js";import"./es.object.get-own-property-descriptor-d261b708.js";import"./RichText-2e38b3e9.js";import"./styled-components.browser.esm-ca00cf6a.js";import"./index-4cb24bae.js";import"./fontstack-1dbe4d5f.js";const f={parameters:{storySource:{source:`import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SanityPortable } from './SanityPortableText';
import node from "./testRaw";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/SanityPortable',
  component: SanityPortable,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SanityPortable>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SanityPortable> = (args) => <SanityPortable {...args} />;

export const ParagraphBlocks = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ParagraphBlocks.args = {
  blocks: node._rawContent
};

`,locationsMap:{"paragraph-blocks":{startLoc:{col:56,line:14},endLoc:{col:94,line:14},startBody:{col:56,line:14},endBody:{col:94,line:14}}}}},title:"Components/SanityPortable",component:r},p=t(o=>s(r,{...o}),"Template"),i=p.bind({});i.args={blocks:a._rawContent};const k=["ParagraphBlocks"];export{i as ParagraphBlocks,k as __namedExportsOrder,f as default};
//# sourceMappingURL=SanityPortableText.stories-5d3e1873.js.map
