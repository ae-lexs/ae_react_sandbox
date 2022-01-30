import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Routes as RoutePaths } from './routes';

import BoilingCalculator from '../container/boilingCalculator';
import Clock from '../container/clock';
import Home from '../container/home';
import NotFound from '../container/notFound';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={RoutePaths.BoilingCalculator}
          element={<BoilingCalculator />}
        />
        <Route path={RoutePaths.Clock} element={<Clock />} />
        <Route path={RoutePaths.Home} element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
