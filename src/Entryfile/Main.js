import React, { Suspense, useLayoutEffect } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { Loading, RouteGuard } from './RouteGuard';
import { routes } from './Routes';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const MainApp = (props) => {
  // basename={`${config.publicPath}`}
  // const { pathname } = useLocation();

  return (
    // <Suspense fallback={<Loading />} >
    <Switch>
      {routes.map((route, i) =>
        route.guarded ? <RouteGuard key={i} {...route} /> : <Route key={i} {...route} />,
      )}
      <Redirect
        to={{
          pathname: '/',
          state: {
            from: '/',
          },
        }}
      ></Redirect>
    </Switch>
    // </Suspense>
  );
};

export default MainApp;
