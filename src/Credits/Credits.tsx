import React from 'react';
import styled from 'styled-components';
import { media } from 'utils/mediaQuery';
import { fontstack } from 'utils/fontstack';
import { type } from 'utils/type';
import { Section } from "Section/Section";

const Wrapper = styled(Section)`
  text-align: center;
`

const List = styled.ul` 
  list-style: none;
  list-style-image: none;
  margin: 0;
  padding: 0;
`

const Line = styled.li` 
  &:not(:last-child) {
    margin: 0 0 16px;
  }
  display: flex;
`

const LineText = styled.span`
    ${fontstack.default};
    ${type('body01')}
    width: 50%;
    box-sizing: border-box;
    padding: 0 15px;
`

const Title = styled(LineText)`
  opacity: 0.4;
  text-align: right;
`
const Name = styled(LineText)`
  text-align: left;
`

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
  transition: opacity 0.2s ease;
  opacity: 1;

  &:hover {
    opacity: 0.4;
  }
`

const Arrow = styled.span`

`

const Grid = styled.div` 
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 15px;

  ${media('small')`
    grid-column-gap: 30px;
    grid-template-columns: repeat(12, 1fr);
  `}
`

const GridItem = styled.div` 
  grid-column: 2 / span 4;

  ${media('small')`
    grid-column: 4 / span 6;
  `}
`

interface CreditLineProps {
  data: any
}

const CreditLine = ({
  data,
  ...props
}: CreditLineProps) => {

    return(
        <Line {...props}><Title>{data.title}</Title>{ data.href ? <Anchor href={data.href} target="__blank"><Name>{data.name} <Arrow>→</Arrow></Name></Anchor> : <Name>{data.name}</Name>}</Line>
    )
}

interface CreditsProps {
  data: any
}

export const Credits = ({
  data,
  ...props
}: CreditsProps) => {

    return (
        <Wrapper contain small {...props}>  
          <Grid>
            <GridItem>
              <List>
                  { data.map( (line:any, i:number) => {
                      return <CreditLine data={line} key={i} />
                  })}
              </List>
              </GridItem>
            </Grid>
        </Wrapper>
    )
}
