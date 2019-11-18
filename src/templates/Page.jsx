import React from 'react';
import styled from 'styled-components';
import Icon from '../atoms/Icon';

const PageStyle = styled.div`
  height: 100vh;
  padding: 2rem;
  border: solid 1rem var(--color-brand-1);
  header{
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }
`;

const Page = ({ children }) => (
  <PageStyle>
    <header>
      <Icon is="logo" width="150" />
    </header>
    {children}
  </PageStyle>
);

export default Page;