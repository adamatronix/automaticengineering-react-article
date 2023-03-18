import React from 'react';
import styled, { css } from 'styled-components';
import { media } from 'utils/mediaQuery';

interface SectionProps {
  children: React.ReactNode;
  small?: boolean;
  full?: boolean;
  stack?: boolean;
  contain?: boolean;
}

const gutterStyle = css` 
  padding: 0 16px;
  ${media("small")`
    padding: 0 20px;
  `}
`

const containStyle = css` 
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto; 
`

const smallStyle = css`
  margin-top: 80px;
  margin-bottom: 80px;

  ${media("small")`
    margin-top: 100px;
    margin-bottom: 100px;
  `}
`

const standardStyle = css`
  margin-top: 80px;
  margin-bottom: 80px;

  ${media("small")`
    margin-top: 120px;
    margin-bottom: 120px;
  `}
`

const Wrapper = styled.div<{ small?:boolean, full?:boolean, contain?:boolean, stack?:boolean }>` 
  ${ props => props.small ? css`
    ${smallStyle}
  ` : css` 
    ${standardStyle}
  `}

  ${ props => props.stack && css`
    margin-top: 20px;
    margin-bottom: 20px;
    ${media("small")`
      margin-top: 20px;
      margin-bottom: 20px;
    `}
  `}

  ${props => !props.full && css`
    ${gutterStyle}`
  }

  ${({ contain }) => contain && `
    ${containStyle}
  `}
`

export const Section = ({
  children,
  small,
  full,
  stack,
  contain,
  ...props
}: SectionProps) => {
  return (
    <Wrapper
      small={small} 
      full={full} 
      contain={contain}
      stack={stack}
      {...props}>
      { children }
    </Wrapper>
  )
}