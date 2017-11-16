import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from 'views/Home'
import MobDetail from 'views/MobDetail'

const App = () => (
  <Switch className='app'>
    <Route path="/" component={Home}/>
    <Route path="/detail" component={MobDetail}/>
  </Switch>
  );

export default App;
