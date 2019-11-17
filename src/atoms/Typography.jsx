import styled, { css } from 'styled-components';

export const Paragraph = styled.p`
  width: 100%;
  margin: 1rem 0;
  font-size: 1.4rem;
`;

export const Heading1 = styled.h1`
  width: 100%;
  margin: 1rem 0;
`;

export const Heading2 = styled.h2`
  width: 100%;
  margin: 1rem 0;
`;

export const Heading3 = styled.h3`
  width: 100%;
  margin: 1rem 0;
`;

export const Heading4 = styled.h4`
  width: 100%;
  margin: 1rem 0;
  ${({ uppercase }) => uppercase && css`
    text-transform: uppercase;
  `}
`;

export const Heading5 = styled.h5`
  width: 100%;
  margin: 1rem 0;
`;

export const Heading6 = styled.h6`
  width: 100%;
  margin: 1rem 0;
`;