import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';

import Homepage from './pages/homepage/homepage.component'

const HatsPage = (props) => {
  return (
    <div>
      <h1>HOME PAGE</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
