import React from 'react';
import { Redirect, Route } from 'react-router-dom';

interface PrivateRouteOption {
  component: any;
  restricted?: boolean /* true : 로그인 했을 경우 접근 불가 */;
  exact?: boolean;
  path: string;
}

const PublicRoute = ({
  component: Component,
  restricted,
  ...rest
}: PrivateRouteOption) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem('token') && restricted ? (
          <Redirect to="/main" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
