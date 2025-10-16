// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Subscription from './components/Subscription';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/subscription" component={Subscription} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;