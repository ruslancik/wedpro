import React from 'react';
import './App.scss';
import Home from './pages/home/home.component'
import Shop from './pages/shop/shop.component'
import {Route, Switch } from 'react-router-dom'



function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shop' component={Shop} />
        </Switch>
    </div>
  );
}

export default App;
