import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JobList from './components/JobList';
import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/jobs" component={JobList} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/" exact>
          <h1>Welcome to CareerForecastSA</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
