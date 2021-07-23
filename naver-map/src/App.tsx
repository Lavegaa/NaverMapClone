import React from 'react';
import { Switch } from 'react-router-dom';
import PublicRoute from 'route/PublicRoute';
import PrivateRoute from 'route/PrivateRoute';
import Home from 'page/Home';
import Main from 'page/Main';

function App() {
  return (
    <Switch>
      <PublicRoute exact path="/" component={Home} restricted={true} />
      <PrivateRoute path="/main" component={Main} />
    </Switch>
  );
}

export default App;
