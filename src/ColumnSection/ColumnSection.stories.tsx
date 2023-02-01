import React from 'react';
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
};