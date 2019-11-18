import React from 'react';
import Page from '../templates/Page';
import Text from '../atoms/Typography';

const Home = () => (
  <Page>
    <Text as="h1">The Home Page</Text>
    <Text>Hey there you <Text as="span">hurt</Text> me</Text>
  </Page>
);

export default Home;