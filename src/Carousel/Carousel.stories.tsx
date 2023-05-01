import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Carousel } from './Carousel';
import { ImageBlock } from 'ImageBlock/ImageBlock';
import imageOne from 'ImageBlock/assets/20201219_DevHynes_00055.jpeg';
import imageBox from 'ImageSet/assets/Rectangle 2775.png';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'fullscreen'
  }
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Carousel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Carousel> = (args) => <>
  <Carousel {...args}>
    <ImageBlock src={imageBox} alt="dummy"/>
    <ImageBlock src={imageBox} alt="dummy"/>
    <ImageBlock src={imageBox} alt="dummy"/>
    <ImageBlock src={imageBox} alt="dummy"/>
    <ImageBlock src={imageBox} alt="dummy"/>
    <ImageBlock src={imageBox} alt="dummy"/>
  </Carousel>
  </>;

export const Default = Template.bind({});
