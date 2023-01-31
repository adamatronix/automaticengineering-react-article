import React, { useRef } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import { Section } from 'Section/Section';
import { ImageBlock } from 'ImageBlock/ImageBlock';
import { media } from 'utils/mediaQuery';
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
  position: relative;
  overflow: visible;
  z-index: 1;
`

const CustomSlide = styled(SwiperSlide)`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  width: 60%;
`

const NavCover = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;

  ${media('small')`
    display: flex;
  `}
`

const NavButton = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
`

interface CarouselProps {
  images: Array<any>,
}

export const Carousel = ({
  images,
  ...props
}: CarouselProps) => {
  const SwiperRef = useRef() as any;

  const onNext = () => {
    const swiper = SwiperRef.current?.swiper;
    swiper.slideNext();
  }

  const onPrev = () => {
    const swiper = SwiperRef.current?.swiper;
    swiper.slidePrev();
  }

  return (
    <Wrapper contain {...props}>
      <Inner>
        <NavCover>
          <NavButton onClick={onPrev}/>
          <NavButton onClick={onNext}/>
        </NavCover>
        <CustomSwiper
          ref={SwiperRef}
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
