import React from 'react';
import styled from 'styled-components';
import { media } from 'utils/mediaQuery';
import { ImageBlock } from 'ImageBlock/ImageBlock';
import { Section } from 'Section/Section';

const Grid = styled.div` 
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  ${media('small')`
    grid-column-gap: 20px;
    grid-row-gap: 20px;
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

const GridDual = styled.div` 
  display: flex;
  grid-column: span 12;
  ${props => media('small')(`
    grid-column: span 6;
  `)}
`

const GridSixteen = styled.div<{span:string}>` 
  display: flex;
  align-items: center;
  grid-column: span 6;
  ${props => media('small')(`
    grid-column: ${props.span};
  `)}
`

interface ImageProps {
  children: React.ReactNode,
  stack?: boolean
}

interface items {
  [key: string]: string,
 }[]

 export const ImageDual = ({
  children,
  stack,
  ...props
}: ImageProps) => {


  const items = React.Children.map(children, (child) => {
    if(React.isValidElement(child)) {
      return <GridDual>{React.cloneElement(child, {})}</GridDual>;
    }
    return child;
  });


  return (
    <Section contain stack={stack} {...props}>
      <Grid>
        { items || null }
      </Grid>
    </Section>
  )
}

export const Image16 = ({
  children,
  stack,
  ...props
}: ImageProps) => {

  const firstColumn:items = {
    '5': '2 / span 2',
    '4': '3 / span 2',
    '3': '7 / span 2',
    '2': '7 / span 2',
    '1': '7 / span 2'
  }

  const total = React.Children.count(children);
  const items = React.Children.map(children, (child,index) => {
    if(React.isValidElement(child)) {
      return <GridSixteen span={index === 0 && total < 6 ? firstColumn[total] : 'span 2'}>{React.cloneElement(child, {})}</GridSixteen>;
    }
    return child;
  });


  return (
    <Section contain stack={stack} {...props}>
      <Grid>
        { items || null }
      </Grid>
    </Section>
  )
}



export const Image50 = ({
  children,
  stack,
  ...props
}: ImageProps) => {

  return (
    <Section contain stack={stack} {...props}>
      <Grid>
        <GridTightItem>
          { children }
        </GridTightItem>
      </Grid>
    </Section>
  )
}

export const Image90 = ({
  children,
  stack,
  ...props
}: ImageProps) => {
  return (
    <Section stack={stack} {...props}>
      <Grid>
        <GridWideItem>
          {children}
        </GridWideItem>
      </Grid>
    </Section>
  )
}

export const Image100 = ({
  children,
  stack,
  ...props
}: ImageProps) => {

  return (
    <Section full stack={stack} {...props}>
      <Grid>
        <GridWideItem>
          { children }
        </GridWideItem>
      </Grid>
    </Section>
  )
}
