import React from 'react';
import styled from 'styled-components';
import { ImageBlock } from 'ImageBlock/ImageBlock';
import { Image90, Image16, Image50 } from 'ImageSet/ImageSet';
import { CallToAction } from 'CallToAction/CallToAction';
import { ColumnSection } from 'ColumnSection/ColumnSection';
import { Carousel } from 'Carousel/Carousel';
import { CopyIntro } from 'CopyIntro/CopyIntro';
import { CopyBody } from 'CopySection/CopySection';
import { CtaGroup } from 'CtaGroup/CtaGroup';
import { Credits } from 'Credits/Credits';
import { SanityPortable } from 'SanityPortableText/SanityPortableText';
import heroImage from './assets/Rectangle 2770.png';
import imageBox from 'ImageSet/assets/Rectangle 2775.png';
import node from 'SanityPortableText/testRaw';

const DummyBox = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 80%;
  background:#EEEEEE;
`

const DummyBoxRounded = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 80%;
  background:#EEEEEE;
  border-radius: 16px;
`

interface PageProps {
}

export const Page = ({
  ...props
}: PageProps) => {

  return (
    <>
      <Image90>
        <ImageBlock src={heroImage} alt="adssadsad" />
      </Image90>
      <ColumnSection orientation="right">
        <SanityPortable blocks={node._rawContent}/>
        <CallToAction theme='black'>Visit Site</CallToAction>
      </ColumnSection>
      <Image90>
        <ImageBlock src={heroImage} alt="adssadsad" />
      </Image90>
      <CopyIntro 
        info={{
          title: "Mini Program",
        }}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet, nisl a eleifend luctus, nisl tellus pulvinar ipsum, sit amet interdum neque nibh quis sem. Maecenas consectetur justo quis turpis efficitur, ut varius lacus aliquet. Cras scelerisque lacinia nunc, accumsan condimentum sapien. Ut placerat magna interdum, varius enim et, imperdiet libero. Quisque accumsan tincidunt interdum. Curabitur ut urna vitae libero gravida feugiat. Ut pulvinar velit in ligula volutpat, tincidunt malesuada nisi euismod. Aenean pellentesque, odio sit amet euismod molestie, diam lacus facilisis ligula, et dapibus neque ipsum in justo. Nam ornare nisl quis risus dictum lobortis. Aenean a massa gravida, efficitur orci sit amet, interdum odio. Sed tristique eros justo, sit amet ultricies velit viverra eget. Nulla aliquet ex ante, vel egestas massa rhoncus eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi nulla neque, eleifend eu tristique quis, fringilla non dui. Pellentesque rhoncus nibh et dolor posuere pharetra. In in enim faucibus, hendrerit elit nec, fermentum purus." 
      />
      <Carousel>
        <DummyBox />
        <DummyBox />
        <DummyBox />
        <DummyBox />
        <DummyBox />
      </Carousel>
      <Image16>
        <ImageBlock src={imageBox} alt="dummy"/>
        <ImageBlock src={imageBox} alt="dummy"/>
        <ImageBlock src={imageBox} alt="dummy"/>
        <ImageBlock src={imageBox} alt="dummy"/>
        <ImageBlock src={imageBox} alt="dummy"/>
        <ImageBlock src={imageBox} alt="dummy"/>
      </Image16>
      <Image50>
        <DummyBoxRounded />
      </Image50>
      <CopyBody data={<SanityPortable blocks={node._rawContent}/>} />
      <CtaGroup buttons={[
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
      ]} />
      <Credits data={[
        { title: "Creative Direction", name: "Dave Reid"},
        { title: "Art Direction", name: "Julian Cheng"},
        { title: "Photography", name: "Abdela Igmirien"},
        { title: "Development", name: "Adam Gee"}
      ]}/>
    </>
  );
}
