import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CtaGroup } from './CtaGroup';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/CtaGroup',
  component: CtaGroup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof CtaGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CtaGroup> = (args) => <CtaGroup {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  buttons: [
    {
      label: "Github",
      href: "",
      theme: "light"
    },
    {
      label: "Visit Site",
      href: "",
      theme: "black"
    }
  ]
};

