import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CallToAction } from './CallToAction';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/CallToAction',
  component: CallToAction,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof CallToAction>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CallToAction> = (args) => <CallToAction {...args} />;

export const Light = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Light.args = {
  children: 'Contact Us'
};

export const Dark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Dark.args = {
  theme: 'black',
  children: 'Visit Site'
};