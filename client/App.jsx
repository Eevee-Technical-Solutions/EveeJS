import React from 'react';

// importing browser capabilities
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './components/Main.jsx';

// import wassup and tada
import Wassup from './components/Wassup.jsx';
import Tada from './components/Tada.jsx';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/wassup' component={Wassup} />
          <Route path='/tada' component={Tada} />
          <Route path='/' exact component={Main} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
