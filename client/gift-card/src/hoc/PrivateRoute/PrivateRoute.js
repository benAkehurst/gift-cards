import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getAdminStatus } from '../../Helpers/localStorage';

/* eslint-disable */
export const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = getAdminStatus();
  return (
    <Route
      {...rest}
      render={(props) =>
        token === 'true' ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/auth',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
