import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImageBlock } from './ImageBlock';
import imageOne from './assets/20201219_DevHynes_00055.jpeg';
import imageOneBlur from './assets/20201219_DevHynes_00055_blur.jpg';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/ImageBlock',
  component: ImageBlock,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ImageBlock>;


const Wrapper = styled.div`
  max-width: 500px;
  width: 100%;
  position: relative;
`

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ImageBlock> = (args) => <Wrapper><ImageBlock {...args} /></Wrapper>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  src: imageOne
};

export const Caption = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Caption.args = {
  src: imageOne,
  caption: "In sit amet venenatis nunc."
};

