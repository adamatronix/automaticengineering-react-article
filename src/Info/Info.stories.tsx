import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Info } from './Info';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Info',
  component: Info,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Info>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Info> = (args) => <Info {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: "Arkival",
  role: "Co-Founder & Creative Director",
  type: "UI/UX & Branding",
  date: "2021"
};

