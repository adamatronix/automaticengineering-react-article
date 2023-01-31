import React from 'react';
import styled, { css } from 'styled-components';
import { media } from 'utils/mediaQuery';
import { type } from 'utils/type';
import { fontstack } from 'utils/fontstack';
import { Section } from 'Section/Section';

const Grid = styled.div` 
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 20px;
`

const GridBodyItem = styled.div` 
  grid-column: 1 / span 12;

  ${media('small')`
    grid-column: 4 / span 6;
  `}

`

interface CopyBodyProps {
  data: any
}

export const CopyBody = ({
  data,
  ...props
}: CopyBodyProps) => {

  return (
    <Section contain {...props}>
      <Grid>
        <GridBodyItem>
          {data}
        </GridBodyItem>
      </Grid>
    </Section>
  )
}



const GridItem = styled.div`
  &:not(:last-child) {
    margin: 0 0 20px;
    ${media('small')`
      margin: 0;
    `}
  }
`

const GridLeftItem = styled(GridItem)`
  grid-column: 1 / span 12;
  ${media('small')`
    grid-column: 1 / span 6;
  `}
`

const GridRightItem = styled(GridItem)`
  grid-column: 1 / span 12;
  ${media('small')`
    grid-column: 7 / span 6;
  `}
`

interface CopySectionProps {
  data: Array<any>
}

export const CopySection = ({
  data,
  ...props
}: CopySectionProps) => {

  return (
    <Section contain {...props}>
      <Grid>
        <GridLeftItem>
          { data && data[0] ? data[0] : '' }
        </GridLeftItem>
        <GridRightItem>
          { data && data[1] ? data[1] : '' }
        </GridRightItem>
      </Grid>
    </Section>
  )
}

