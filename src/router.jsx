import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './utils/GlobalStyle';
import ErrorBoundary from './utils/ErrorBoundary';
import { NotFound } from './utils/Errors';
import Home from './pages/Home';

const AppRouter = () => (
  <ErrorBoundary>
    <Router>
      <>
        <GlobalStyle />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </>
    </Router>
  </ErrorBoundary>
);

export default AppRouter;