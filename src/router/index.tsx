import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Routes as RoutePaths } from './routes';

import BoilingCalculator from '../container/boilingCalculator';
import Clock from '../container/clock';
import Counter from '../container/counter';
import Home from '../container/home';
import NotFound from '../container/notFound';

import './normalize.css';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={RoutePaths.BoilingCalculator}
          element={<BoilingCalculator />}
        />
        <Route path={RoutePaths.Clock} element={<Clock />} />
        <Route path={RoutePaths.Counter} element={<Counter />} />
        <Route path={RoutePaths.Home} element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
