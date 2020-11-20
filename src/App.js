import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Notifications from './components/notifications';
import { AuthProvider } from './auth';

const HomepageLoadable = lazy(() => import('./home'));

const BookingsLoadable = lazy(() => import('./bookings'));

const DashboardLoadable = lazy(() => import('./dashboard'));

const App = () => (
  <>
    <AuthProvider>
      <Notifications />
      <Router basename="/">
        <Switch>
          <Suspense fallback={<div />}>
            <Route exact path="/" component={HomepageLoadable} />
            <Route path="/bookings" component={BookingsLoadable} />
            <Route path="/dashboard" component={DashboardLoadable} />
          </Suspense>
        </Switch>
      </Router>
    </AuthProvider>
  </>
);

export default App;
