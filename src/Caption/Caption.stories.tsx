import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Caption } from './Caption';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Caption',
  component: Caption,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Caption>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Caption> = (args) => <Caption {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: "In et tortor ac arcu pulvinar gravida. Phasellus in odio convallis, maximus elit a, scelerisque ante."
};
