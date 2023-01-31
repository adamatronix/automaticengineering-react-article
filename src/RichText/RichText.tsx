import React from "react";
import styled from "styled-components";
import { fontstack } from "utils/fontstack";
import { type } from "utils/type";
import { media } from "utils/mediaQuery";

const ParagraphWrapper = styled.p`
  ${fontstack.default}
  ${type("body02")}
  color: var(--article-primary);
  margin: 0;

  &:not(:last-child) {
    margin: 0 0 20px;
  }
`;

interface ParagraphProps {
  children: any
}

export const Paragraph = ({
  children,
  ...props
}: ParagraphProps) => {

  return <ParagraphWrapper {...props}>{children}</ParagraphWrapper>;
};

