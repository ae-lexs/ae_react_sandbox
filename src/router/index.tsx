import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Routes } from './routes';

import BoilingCalculator from '../container/boilingCalculator';
import Clock from '../container/clock';
import Home from '../container/home';
import NotFound from '../container/notFound';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={Routes.BoilingCalculator}
          component={BoilingCalculator}
        />
        <Route exact path={Routes.Clock} component={Clock} />
        <Route exact path={Routes.Home} component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
