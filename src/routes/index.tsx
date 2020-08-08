import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Play from '../pages/Play';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/play" component={Play} />
  </Switch>
);

export default Routes;
