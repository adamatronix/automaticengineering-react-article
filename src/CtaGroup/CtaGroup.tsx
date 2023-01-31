import React from 'react';
import styled from 'styled-components';
import { media } from 'utils/mediaQuery';
import { CallToAction } from 'CallToAction/CallToAction';
import { Section } from 'Section/Section';

const Wrapper = styled(Section)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  ${media('small')`
    flex-direction: row;
  `}
`

const Anchor = styled.a`
  text-decoration: none;
`

const ButtonWrapper = styled.div`
  @media screen and (max-width: 768px) {
    &:not(:last-child) {
      margin: 0 0 15px;
    }
  }
  width: 80%;
  ${media('small')`
    margin: 0 10px;
    width: auto;
  `}
`

interface CtaGroupProps {
  buttons: Array<any>
}

export const CtaGroup = ({
  buttons,
  ...props
}: CtaGroupProps) => {

  return (
    <Wrapper contain small {...props}>
      { buttons && buttons.map((button:any,i:number) => {
        return (
          <ButtonWrapper>
            <Anchor href={button.href} target="_blank">
              <CallToAction theme={button.theme}>{ button.label }</CallToAction>
            </Anchor>
          </ButtonWrapper>
        )
      })}
    </Wrapper>
  )
}
