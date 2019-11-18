import React from 'react';
import styled from 'styled-components';
import Icon from '../atoms/Icon';

const PageRoot = styled.div`
  height: 100vh;
  padding: 5rem;
  border: solid 1rem var(--color-brand-1);
  header{
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }
`;

const Page = ({ children }) => (
  <PageRoot>
    <header>
      <Icon is="logo" width="150" />
    </header>
    {children}
  </PageRoot>
);

export default Page;