import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CopyBody, CopySection } from './CopySection';

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
    "<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui.</p><p>Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>",
    "<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui.</p><p>Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>"
  ]
};


const TemplateBody: ComponentStory<typeof CopyBody> = (args) => <CopyBody {...args} />;

export const Body = TemplateBody.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Body.args = {
  data: "<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui.</p><p>Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>"
};

