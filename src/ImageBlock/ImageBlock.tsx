import React from 'react';
import styled from 'styled-components';
import { Caption } from 'Caption/Caption';

const Image = styled.img`
  display: block;
  position: relative;
  width: 100%;
`

const Box = styled.div`
  display: block;
  width: 100%; 
  padding-bottom: 100%;
  background-color: #C4C4C4;
`

interface ImageBlockProps {
  src: string,
  alt: string,
  caption?: string,
}

export const ImageBlock = ({
  src,
  alt,
  caption,
  ...props
}:ImageBlockProps) => {


  return (
    <div {...props}>
      { src ? <Image src={src} alt={alt} /> : <Box /> }
      { caption ? <Caption>{caption}</Caption> : ''}
    </div>
  )
}
