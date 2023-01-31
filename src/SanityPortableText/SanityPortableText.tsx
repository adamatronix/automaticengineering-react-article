import React from 'react';
import { PortableText } from "@portabletext/react";
import { Paragraph } from 'RichText/RichText';

const components = {
  block: {
    paragraph: Paragraph,
  }
};

interface SanityPortableProps {
  blocks: any,
}

export const SanityPortable = ({
  blocks,
  ...props
}: SanityPortableProps) => {

  return (
    <PortableText
      value={blocks}
      //@ts-ignore
      components={components}
      {...props}
    />
  );
}