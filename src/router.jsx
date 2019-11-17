import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './atoms/GlobalStyle';
import Home from './pages/Home';

const AppRouter = () => (
  <Router>
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  </Router>
);

export default AppRouter;