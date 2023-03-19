import React from 'react';
import styled, { css } from 'styled-components';
import { media } from 'utils/mediaQuery';
import { Section } from 'Section/Section';

const Grid = styled.div` 
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 20px;
`

const GridItem = styled.div<{orientation?: string}>`
  grid-column: 1 / span 12;
  ${props => media('small')(`
    grid-column: ${props.orientation === 'right' ? '7 / span 6' : '1 / span 6'};
  `)}
`

const BlockSection = styled.div`
  &:not(:last-child) {
    margin: 0 0 40px;
  }
`

interface ColumnSectionProps {
  children: React.ReactNode,
  orientation?: string
}

export const ColumnSection = ({
  children,
  orientation = 'left',
  ...props
}: ColumnSectionProps) => {

  const blocks = React.Children.map(children, (child,index) => {
    if(React.isValidElement(child)) {
      return <BlockSection>{React.cloneElement(child, {})}</BlockSection>;
    }
    return child;
  });

  return (
    <Section contain {...props}>
      <Grid>
        <GridItem orientation={orientation}>
          { blocks }
        </GridItem>
      </Grid>
    </Section>
  )
}

