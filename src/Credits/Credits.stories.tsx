import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Credits } from './Credits';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Credits',
  component: Credits,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Credits>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Credits> = (args) => <Credits {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
 data: [
  { title: "Creative Direction", name: "Dave Reid"},
  { title: "Art Direction", name: "Julian Cheng"},
  { title: "Photography", name: "Abdela Igmirien"},
  { title: "Development", name: "Adam Gee"}
]
};
