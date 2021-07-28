import React from 'react';

// importing browser capabilities
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './components/Main.jsx';

// import login
import Login from './components/Login.jsx';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Main} />
          {/* <Route path='/' exact component={Login} /> */}
        </Switch>
      </Router>
    </>
  );
};

export default App;
