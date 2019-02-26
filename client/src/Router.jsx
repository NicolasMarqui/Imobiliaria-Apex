import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from './App';
import Alugar from './components/Alugar/Alugar';

export default function Routering() {
  return (
    <div>
      <Router>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/alugar" component={Alugar} />
          </Switch>
      </Router>
    </div>
  )
}
