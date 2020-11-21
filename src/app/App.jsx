import React, {Suspense} from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import routes, { ROUTE_NAMES } from '../config/routes.config';
import client from '../config/client.config';
import RouteInvalidView from '../routes/RouteInvalidView';

import LoadingMessage from '../components/LoadingMessage';

import 'antd/dist/antd.css';

const App = () => {
    const routeComponents = routes.map((route) => (
        <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            render={() => <route.component />}
        />
    ));

    const loadingMessage = <LoadingMessage message="Loading module" />;

    return (
        <ApolloProvider client={client}>
            <BrowserRouter basename={ROUTE_NAMES.ROOT}>
                <Suspense
                    fallback={loadingMessage}
                >
                    <Switch>
                        {routeComponents}
                        <Route component={RouteInvalidView} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </ApolloProvider>
    );
};

export default hot(App);
