import React from 'react';
import styled, { CSSProp } from 'styled-components';
import { Section } from 'Section/Section';
import { fontstack } from 'utils/fontstack';
import { type } from 'utils/type';


const PullQuoteText = styled.div<{cssBlock?: CSSProp}>`
  ${fontstack.default}
  ${type('heading03')}
  color: rgb(var(--article-primary));
  text-align: center;

  &:before {
    content: "“";
    display: inline-block;
  }

  &:after {
    content: "”";
    display: inline-block;
  }

  ${({cssBlock}) => cssBlock || null}

`

interface PullQuoteProps {
  pullQuoteCss?: CSSProp,
  children: React.ReactNode,
}

export const PullQuote = ({
  pullQuoteCss,
  children,
  ...props
}: PullQuoteProps) => {
  return (
    <Section contain {...props}>
      <PullQuoteText cssBlock={pullQuoteCss}>{children}</PullQuoteText>
    </Section>
  )
}
