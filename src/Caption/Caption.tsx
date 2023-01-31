import React from 'react';
import styled from 'styled-components';
import { fontstack } from 'utils/fontstack';
import { type } from 'utils/type';


const CaptionText = styled.div`
  ${fontstack.default}
  ${type('caption01')}
  margin: 10px 0;
`

interface CaptionProps {
  children: React.ReactNode,
}

export const Caption = ({
  children,
  ...props
}: CaptionProps) => {
  return (
    <CaptionText {...props}>{children}</CaptionText>
  )
}
