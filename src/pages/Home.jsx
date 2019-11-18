import React from 'react';
import styled from 'styled-components';
import Page from '../templates/Page';
import Icon from '../atoms/Icon';
import Text from '../atoms/Typography';

const HomeRoot = styled.main`
  display: flex;
  height: 80vh;
  align-items: center;
  > *{
    flex: 1;
  }
  .icon{
    width: 100%;
  }
  section{
    padding: 1rem;
    text-align: right;
  }
`;

const Home = () => (
  <Page>
    <HomeRoot>
      <div>
        <Icon is="jobtracker" width="150" className="icon" />
      </div>
      <section>
        <Text as="h1" signature uppercase>
          Keep Track<br />
          of job applications<br />
          until you find<br />
          your dream job
        </Text>
      </section>
    </HomeRoot>
    <footer>
      <Text>Copyright &copy; 2019 JobRace</Text>
    </footer>
  </Page>
);

export default Home;