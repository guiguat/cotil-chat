import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Join from '../Pages/Join';
import Chat from '../Pages/Chat';


const Routes: React.FC = () => {
  return (
      <Router>
          <Switch>
              <Route path="/" exact component={Join} />
              <Route path="/chat" exact component={Chat} />
          </Switch>
      </Router>
  );
}

export default Routes;