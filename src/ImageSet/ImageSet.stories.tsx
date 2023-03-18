import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImageBlock } from 'ImageBlock/ImageBlock';
import { Image16, Image50, Image90, Image100, ImageDual } from './ImageSet';
import imageOne from 'ImageBlock/assets/20201219_DevHynes_00055.jpeg';
import imageBox from './assets/Rectangle 2775.png';



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/ImageSet',
  component: Image50,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Image50>;


const TemplateDual: ComponentStory<typeof ImageDual> = (args) => <><ImageDual {...args}><ImageBlock src={imageBox} alt="dummy"/><ImageBlock src={imageBox} alt="dummy"/><ImageBlock src={imageBox} alt="dummy"/></ImageDual></>;

export const Dual = TemplateDual.bind({});

Dual.args = {
  stack: true
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template16: ComponentStory<typeof Image16> = (args) => <Image16 {...args}><ImageBlock src={imageBox} alt="dummy"/><ImageBlock src={imageBox} alt="dummy"/><ImageBlock src={imageBox} alt="dummy"/><ImageBlock src={imageBox} alt="dummy"/><ImageBlock src={imageBox} alt="dummy"/><ImageBlock src={imageBox} alt="dummy"/></Image16>;

export const Sixteen = Template16.bind({});



const Template50: ComponentStory<typeof Image50> = (args) => <Image50 {...args} />;

export const Fifty = Template50.bind({});


// More on args: https://storybook.js.org/docs/react/writing-stories/args
Fifty.args = {
  children: <ImageBlock src={imageOne} alt="dummy"/>
};

const Template90: ComponentStory<typeof Image90> = (args) => <Image90 {...args} />;

export const Ninety = Template90.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Ninety.args = {
  children: <ImageBlock src={imageOne} alt="dummy"/>
};

const Template100: ComponentStory<typeof Image100> = (args) => <Image100 {...args} />;

export const Hundred = Template100.bind({});


// More on args: https://storybook.js.org/docs/react/writing-stories/args
Hundred.args = {
  children: <ImageBlock src={imageOne} alt="dummy"/>
};