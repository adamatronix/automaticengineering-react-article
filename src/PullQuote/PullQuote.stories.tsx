import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PullQuote } from './PullQuote';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/PullQuote',
  component: PullQuote,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof PullQuote>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PullQuote> = (args) => <PullQuote {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: "The K11 Artists in Residence Programme feature a new genesis of creative work by artistic mavens, including illustration, design, costumes, portraits and more. Handl produced a series of videos that captured the process and journey of each one of these artists."
};
