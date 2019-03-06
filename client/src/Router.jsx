import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from './App';
import Alugar from './components/Alugar/Alugar';
import Search from './components/Search/Search';
import Info from './components/Info/Info';
import Comprar from './components/Compra/Comprar';
import NotFound from './NotFound';

export default function Routering() {
  return (
    <div>
      <Router>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/casas/:tipo" component={Alugar} />
            <Route exact path="/casas/novo/:tipo" component={Comprar} />
            <Route exact path="/search/:name" component={Search} />
            <Route exatct path="/info/:id" component={Info} />
            <Route exact path="*" component={NotFound} />
          </Switch>
      </Router>
    </div>
  )
}
