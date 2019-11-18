import styled, { css } from 'styled-components';

const textStyle = (element) => ({
  h1: () => css`
    font-size: 4.8rem;
  `,
  h2: () => css`
    font-size: 4rem;
  `,
  h3: () => css`
    font-size: 3.6rem;
  `,
  h4: () => css`
    font-size: 2.4rem;
  `,
  h5: () => css`
    font-size: 1.8rem;
  `,
  h6: () => css`
    font-size: 1.6rem;
  `,
  p: () => css`
    font-size: 1.4rem;
  `,
  span: () => css`
    margin: 0;
  `,
  strong: () => css`
    margin: 0;
    font-weight: bolder;
  `,
  em: () => css`
    margin: 0;
    font-style: italic;
  `,
}[element]());

const Text = styled.p`
  margin: 1rem 0;
  ${({ as }) => as && textStyle(as) }
  ${({ uppercase }) => uppercase && css`
    text-transform: uppercase;
  `}
`;

export default Text;