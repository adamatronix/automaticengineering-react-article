import React from 'react';
import { PortableText } from "@portabletext/react";
import { Paragraph } from 'RichText/RichText';

const defaultComponents = {
  block: {
    paragraph: Paragraph,
  }
};

interface SanityPortableProps {
  blocks: any,
  components?: any
}

export const SanityPortable = ({
  blocks,
  components,
  ...props
}: SanityPortableProps) => {

  return (
    <PortableText
      value={blocks}
      //@ts-ignore
      components={components || defaultComponents}
      {...props}
    />
  );
}