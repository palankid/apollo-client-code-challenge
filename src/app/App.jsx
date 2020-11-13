import React, {Suspense} from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routes, { routeNames } from '../config/routes.config';
import NotFound from '../routes/NotFound';

import LoadingMessage from '../components/LoadingMessage';

const App = () => {
  const routeComponents = routes.map((route) => (
    <Route
      key={route.path}
      path={route.path}
      exact={route.exact}
      render={() => <route.component />}
    />
  ));

  const loadingMessage = <LoadingMessage message="Loading modules" />;

  return (
    <BrowserRouter basename={routeNames.root}>
      <Suspense
        fallback={loadingMessage}>
        <Switch>
          {routeComponents}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
};

export default hot(App);
