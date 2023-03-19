import React from 'react';
import styled, { CSSProp } from 'styled-components';
import { fontstack } from 'utils/fontstack';
import { type } from 'utils/type';


const CaptionText = styled.div<{cssBlock?: CSSProp}>`
  ${fontstack.default}
  ${type('caption01')}
  margin: 10px 0;
  ${({cssBlock}) => cssBlock || null}
`

interface CaptionProps {
  captionCss?: CSSProp,
  children: React.ReactNode,
}

export const Caption = ({
  captionCss,
  children,
  ...props
}: CaptionProps) => {
  return (
    <CaptionText cssBlock={captionCss} {...props}>{children}</CaptionText>
  )
}
