import React from 'react';
import styled, { css } from 'styled-components';
import { fontstack } from 'utils/fontstack';
import { type } from 'utils/type';
import { media } from 'utils/mediaQuery';

const Wrapper = styled.div`
  margin: 0 0 80px;

  ${media('small')`
    margin: 0 0 40px;
  `}
`

const Text = css`
  color: #111;
  ${fontstack.default}
  ${type('body02')}
  margin: 0 0 4px;
`

const Title = styled.h2`
  ${Text}
  opacity: 1;
`

const Role = styled.div`
  ${Text}
  opacity: 0.5;
`

const Type = styled.div`
  ${Text}
  opacity: 0.35;
`

const Date = styled.div`
  ${Text}
  opacity: 0.2;
`

interface InfoProps {
  title: string,
  role?: string,
  type?: string,
  date?: string
}

export const Info = ({
  title = "The Title",
  role,
  type,
  date,
  ...props
}: InfoProps) => {

  return (
    <Wrapper {...props}>
      <Title>{ title }</Title>
      { role && <Role>{ role }</Role> }
      { type && <Type>{ type }</Type> }
      { date && <Date>{ date }</Date> }
    </Wrapper>
  );
}
