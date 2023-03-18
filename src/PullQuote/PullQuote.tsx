import React from 'react';
import styled from 'styled-components';
import { Section } from 'Section/Section';
import { fontstack } from 'utils/fontstack';
import { type } from 'utils/type';


const PullQuoteText = styled.div`
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

`

interface PullQuoteProps {
  children: React.ReactNode,
}

export const PullQuote = ({
  children,
  ...props
}: PullQuoteProps) => {
  return (
    <Section contain {...props}>
      <PullQuoteText>{children}</PullQuoteText>
    </Section>
  )
}
