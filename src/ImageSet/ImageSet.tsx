import React from 'react';
import styled from 'styled-components';
import { media } from 'utils/mediaQuery';
import { ImageBlock } from 'ImageBlock/ImageBlock';
import { Section } from 'Section/Section';

const Grid = styled.div` 
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 9px;
  grid-row-gap: 20px;
  ${media('small')`
    grid-column-gap: 30px;
  `}
`

const GridTightItem = styled.div`
  grid-column: 1 / span 12;

  ${media('small')`
    grid-column: 4 / span 6;
  `}
`

const GridWideItem = styled.div`
  grid-column: 1 / span 12;
`

const GridSixteen = styled.div<{span:string}>` 
  grid-column: span 6;
  ${props => media('small')(`
    grid-column: ${props.span};
  `)}
`

interface Image16Props {
  items: Array<any>
}

interface items {
  [key: string]: string,
 }[]

export const Image16 = ({
  items,
  ...props
}: Image16Props) => {

  const total = items.length;
  const firstColumn:items = {
    '5': '2 / span 2',
    '4': '3 / span 2',
    '3': '7 / span 2',
    '2': '7 / span 2',
    '1': '7 / span 2'
  }

  return (
    <Section contain {...props}>
      <Grid>
        { items ? items.map((item, index) => {
          return (
            <GridSixteen span={index === 0 && total < 6 ? firstColumn[total] : 'span 2'}>
              <ImageBlock src={item.src} alt={item.alt}/>
            </GridSixteen>
          )
        }) : null}
      </Grid>
    </Section>
  )
}

interface ImageProps {
  src: string,
  alt: string,
  caption?: string
}

export const Image50 = ({
  src,
  alt,
  caption,
  ...props
}: ImageProps) => {

  return (
    <Section contain {...props}>
      <Grid>
        <GridTightItem>
          { src ? <ImageBlock src={src} caption={caption} alt={alt}/> : null }
        </GridTightItem>
      </Grid>
    </Section>
  )
}

export const Image90 = ({
  src,
  alt,
  caption,
  ...props
}: ImageProps) => {
  return (
    <Section {...props}>
      <Grid>
        <GridWideItem>
        { src ? <ImageBlock src={src} caption={caption} alt={alt}/> : null }
        </GridWideItem>
      </Grid>
    </Section>
  )
}

export const Image100 = ({
  src,
  alt,
  caption,
  ...props
}: ImageProps) => {

  return (
    <Section full {...props}>
      <Grid>
        <GridWideItem>
        { src ? <ImageBlock src={src} caption={caption} alt={alt}/> : null }
        </GridWideItem>
      </Grid>
    </Section>
  )
}
