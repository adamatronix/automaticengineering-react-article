import React from 'react';
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

const Placeholder = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  border-radius: 16px;
  overflow: hidden;
  background: #EEEEEE;
`

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
};