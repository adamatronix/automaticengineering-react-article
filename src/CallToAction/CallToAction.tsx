import React from 'react';
import styled, { css } from 'styled-components';
import { media } from 'utils/mediaQuery';
import { type } from 'utils/type';
import { fontstack } from 'utils/fontstack';

interface CallToActionProps {
  children: React.ReactNode,
  theme?:string
}

const Button = styled.button`
  ${fontstack.default}
  ${type('body01')}
  border: none;
  display: flex;
  outline: none;
  color: rgb(var(--article-primary));
  background: #F6F6F6;
  cursor: pointer;
  box-sizing: border-box;
  padding: 14px 0;
  border-radius: 12px;
  border: none;
  justify-content: center;
  width: 100%;
  transition: background .2s ease;

  ${media("small")`
    width: 217px;

    &:hover {
      background: rgba(var(--article-primary), 0.12);
    }
  `}

  &:active {
    background: rgba(var(--article-primary), 0.24);
  }
`

export const CallToAction = ({
  children,
  theme = 'light',
  ...props
}: CallToActionProps) => {
  return (
    <Button
      {...props}>
      { children }
    </Button>
  )
}