import { css } from "styled-components";

const stacks = {
  // ns = not small
  default: () =>
    css`
      font-family: "Neue Montreal",Arial,Helvetica Neue,Helvetica,sans-serif;
    `,
  icon: () =>
    css` 
      font-family: 'Inter';
    `
};

export const fontstack = stacks;
