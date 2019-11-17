import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Heading4, Paragraph } from '../atoms/Typography';

const ErrorStyle = styled.div`
  margin: 1rem 0;
  text-align: center;
`;

const Status = ({ code, children }) => (
  <Route render={({ staticContext }) => {
    if(staticContext) {
      staticContext.statusCode = code;
    }
    return children;
  }}
  />
);

export const NotFound = () => (
  <Status code="404">
    <ErrorStyle>
      <Heading4 uppercase>
        The content you are looking for does not exist
      </Heading4>
      <Link to="/">Back to Home</Link>
    </ErrorStyle>
  </Status>
);

export const NoAccess = () => (
  <Status code="401">
    <ErrorStyle>
      <Heading4 uppercase>
        Restricted Access
      </Heading4>
      <Paragraph>You are not authorized to view this page</Paragraph>
      <Link to="/">Back to Home</Link>
    </ErrorStyle>
  </Status>
);

Status.propTypes = {
  code: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};