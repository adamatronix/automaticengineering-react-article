import React from 'react';
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
