import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './components/home/Home'

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
    </div>   
  );
}

export default App;
