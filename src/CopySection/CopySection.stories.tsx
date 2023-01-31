import React from 'react';
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

