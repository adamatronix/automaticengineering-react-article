import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import { Section } from 'Section/Section';
import { ImageBlock } from 'ImageBlock/ImageBlock';
import 'swiper/css';

const Wrapper = styled(Section)`
  position: relative;
  padding-left: 0;
  padding-right: 0;
  overflow: hidden;
`

const Inner = styled(Section)`
  position: relative;
  margin-top: 0;
  margin-bottom: 0;
`

const CustomSwiper = styled(Swiper)`
  overflow: visible;
`

const CustomSlide = styled(SwiperSlide)`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  width: 60%;
`

interface CarouselProps {
  images: Array<any>,
}

export const Carousel = ({
  images,
  ...props
}: CarouselProps) => {

  return (
    <Wrapper contain {...props}>
      <Inner>
        <CustomSwiper
          spaceBetween={20}
          slidesPerView={"auto"}
        >
          { images && images.map((image,i) => {

            return (
              <CustomSlide key={i}>
                <ImageBlock src={image.src} alt={image.alt}/>
              </CustomSlide>
            )
          })}


        </CustomSwiper>
      </Inner>
    </Wrapper>
  );
}
