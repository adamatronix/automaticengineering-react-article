var a=Object.defineProperty;var o=(t,e)=>a(t,"name",{value:e,configurable:!0});import{C as r}from"./CopyIntro-69918ee8.js";import{S as i,n as s}from"./testRaw-c985bc64.js";import{j as n}from"./jsx-runtime-69008c6b.js";import"./styled-components.browser.esm-ca00cf6a.js";import"./index-4cb24bae.js";import"./index-a38f3d31.js";import"./es.object.get-own-property-descriptor-d261b708.js";import"./mediaQuery-f6cad8a4.js";import"./Section-d473a858.js";import"./Info-e2076a1e.js";import"./fontstack-1dbe4d5f.js";import"./CallToAction-da2adeb8.js";import"./RichText-2e38b3e9.js";const M={parameters:{storySource:{source:`import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CopyIntro } from './CopyIntro';
import { SanityPortable } from 'SanityPortableText/SanityPortableText';
import node from 'SanityPortableText/testRaw';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/CopyIntro',
  component: CopyIntro,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof CopyIntro>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CopyIntro> = (args) => <CopyIntro {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  info: {
    title: "Arkival",
    role: "Co-Founder & Creative Director",
    type: "UI/UX & Branding",
    date: "2021"
  },
  cta: {
    label: "Github",
    href: "https://github.com/adamatronix/react-article"
  },
  text: <SanityPortable blocks={node._rawContent} />
};
`,locationsMap:{default:{startLoc:{col:51,line:15},endLoc:{col:84,line:15},startBody:{col:51,line:15},endBody:{col:84,line:15}}}}},title:"Components/CopyIntro",component:r},p=o(t=>n(r,{...t}),"Template"),m=p.bind({});m.args={info:{title:"Arkival",role:"Co-Founder & Creative Director",type:"UI/UX & Branding",date:"2021"},cta:{label:"Github",href:"https://github.com/adamatronix/react-article"},text:n(i,{blocks:s._rawContent})};const T=["Default"];export{m as Default,T as __namedExportsOrder,M as default};
//# sourceMappingURL=CopyIntro.stories-39997b76.js.map
