import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Image16, Image50, Image90, Image100 } from './ImageSet';
import imageOne from 'ImageBlock/assets/20201219_DevHynes_00055.jpeg';
import imageBox from './assets/Rectangle 2775.png';



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/ImageSet',
  component: Image50,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Image50>;


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template16: ComponentStory<typeof Image16> = (args) => <Image16 {...args} />;

export const Sixteen = Template16.bind({});
const items = [
  {
    src: imageBox, 
    alt: ''
  },
  {
    src: imageBox, 
    alt: ''
  },
  {
    src: imageBox, 
    alt: ''
  },
  {
    src: imageBox,  
    alt: ''
  },
  {
    src: imageBox, 
    alt: ''
  },
  {
    src: imageBox,  
    alt: ''
  }
]

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Sixteen.args = {
  items: items
};


const Template50: ComponentStory<typeof Image50> = (args) => <Image50 {...args} />;

export const Fifty = Template50.bind({});


// More on args: https://storybook.js.org/docs/react/writing-stories/args
Fifty.args = {
  src: imageOne,
  alt: "",
  caption: ""
};

const Template90: ComponentStory<typeof Image90> = (args) => <Image90 {...args} />;

export const Ninety = Template90.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Ninety.args = {
  src: imageOne,
  alt: "",
  caption: ""
};

const Template100: ComponentStory<typeof Image100> = (args) => <Image100 {...args} />;

export const Hundred = Template100.bind({});


// More on args: https://storybook.js.org/docs/react/writing-stories/args
Hundred.args = {
  src: imageOne,
  alt: "",
  caption: ""
};