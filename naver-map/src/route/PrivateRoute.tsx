import React from 'react';
import { Redirect, Route } from 'react-router-dom';

interface PrivateRouteOption {
  component: any;
  path: string;
}

const PrivateRoute = ({
  component: Component,
  ...rest
}: PrivateRouteOption) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem('token') ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
