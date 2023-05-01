import React, { useRef, useEffect, useState } from 'react';
import styled, { CSSProp, StyledComponent } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from "swiper/react";
import { Section } from 'Section/Section';
import { media } from 'utils/mediaQuery';
import { fontstack } from 'utils/fontstack';
import { type } from 'utils/type';
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

  & .swiper {
    position: relative;
    overflow: visible;
    z-index: 1;
  }
`

const CustomSwiper = styled(Swiper)`
  
  position: relative;
  overflow: visible;
  z-index: 1;

  & .swiper-slide {
    width: 60%;
  }
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
  cursor: none;

  ${media('small')`
    display: flex;
  `}
`

const NavButton = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
`

const NavCursor = styled.div<{cssBlock?: CSSProp}>`
  position: absolute;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  z-index: 1;
  ${fontstack.default};
  ${type('body01')}
  color: #111;
  background: rgba(204,204,204,0.3);
  backdrop-filter: blur(50px);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  ${({cssBlock}) => cssBlock || null}
`

interface CarouselProps {
  navCursorCss?: CSSProp,
  children: React.ReactNode,
}

export const Carousel = ({
  navCursorCss,
  children,
  ...props
}: CarouselProps) => {
  const { ref, inView, entry } = useInView();
  const [ Cursor, setCursor ] = useState({
    display: 'none',
    x: 0,
    y: 0,
    cursor: ''
  })
  const SwiperRef = useRef() as any;
  const ContainerRef = useRef() as any;

  const onNext = () => {
    const swiper = SwiperRef.current?.swiper;
    swiper.slideNext();
  }

  const onPrev = () => {
    const swiper = SwiperRef.current?.swiper;
    swiper.slidePrev();
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if(ContainerRef.current) {
      const containerBounding = ContainerRef.current.getBoundingClientRect();
      const x = e.clientX - containerBounding.x;
      const y = e.clientY - containerBounding.y;

      setCursor({
        display: 'flex',
        x: x - 32/2,
        y: y - 32/2,
        cursor: x < containerBounding.width / 2 ? "←" : "→"
      })
    }
    //console.log(entry)
  }

  const items = React.Children.map(children, (child,index) => {
    if(React.isValidElement(child)) {
      return <CustomSlide>{React.cloneElement(child, {})}</CustomSlide>;
    }
    return child;
  });
  
  return (
    <Wrapper full {...props}>
      <div ref={ContainerRef}>
        <Inner contain>
          <NavCover onMouseMove={onMouseMove} onMouseLeave={()=> setCursor({display: 'none', x: 0, y: 0, cursor: ''})}>
            <NavCursor cssBlock={navCursorCss} style={{ display: Cursor.display, transform: `translate(${Cursor.x}px,${Cursor.y}px)`}}>{Cursor.cursor}</NavCursor>
            <NavButton onClick={onPrev}/>
            <NavButton onClick={onNext}/>
          </NavCover>
          <CustomSwiper
            ref={SwiperRef}
            spaceBetween={20}
            slidesPerView={"auto"}
          >
            { items || null }
          </CustomSwiper>
        </Inner>
      </div>
    </Wrapper>
  );
}
