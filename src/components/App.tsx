import React, { lazy, Suspense } from 'react';
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom';

import GlobalStyle from 'styles';
import { Loader } from 'common/layout';

const Products = lazy(() => import('pages/Products'));

const App: React.FC<RouteComponentProps> = () => (
  <main>
    <GlobalStyle />
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/" component={Products} exact />
      </Switch>
    </Suspense>
  </main>
);

export default withRouter(App);
