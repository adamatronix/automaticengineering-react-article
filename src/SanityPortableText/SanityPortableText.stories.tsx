import React from 'react';
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

