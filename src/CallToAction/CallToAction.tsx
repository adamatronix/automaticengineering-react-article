import React from 'react';
import styled, { CSSProp } from 'styled-components';
import { media } from 'utils/mediaQuery';
import { type } from 'utils/type';
import { fontstack } from 'utils/fontstack';

interface CallToActionProps {
  buttonCss?: CSSProp,
  children: React.ReactNode,
  theme?:string
}

const Button = styled.button<{theme?:string, cssBlock?: CSSProp}>`
  ${fontstack.default}
  ${type('body01')}
  border: none;
  display: flex;
  outline: none;
  color: ${props => props.theme === 'black' ? 'rgb(var(--article-secondary))' : 'rgb(var(--article-primary))'};
  background: ${props => props.theme === 'black' ? 'rgb(var(--article-primary))' : '#F6F6F6'};
  cursor: pointer;
  box-sizing: border-box;
  padding: 14px 0;
  border-radius: 12px;
  border: none;
  justify-content: center;
  width: 100%;
  transition: background .2s ease;

  ${props => media("medium")(`
      width: 217px;

      &:hover {
        background: ${props.theme === 'black' ? 'rgba(68,68,68,1)' : 'rgba(var(--article-primary), 0.13)'};
      }
  `)};

  &:active {
    background: ${props => props.theme === 'black' ? 'rgba(119,119,119,1)' : 'rgba(var(--article-primary), 0.24)'};
  }

  ${({cssBlock}) => cssBlock || null}
`

export const CallToAction = ({
  buttonCss,
  children,
  theme = 'light',
  ...props
}: CallToActionProps) => {
  return (
    <Button
      cssBlock={buttonCss}
      theme={theme}
      {...props}>
      { children }
    </Button>
  )
}