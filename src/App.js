import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import Home from './components/home/Home'
import MovieDetails from './components/movies/details/MovieDetails'

function App() {
  return (
    <div>
      <div>
        <h1>It's Showtime</h1>
        {/* <Link to='/movies/coming-soon'/> */}
      </div>

      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/movies/details/:movie_id/:movie_title' exact component={MovieDetails}/>
        {/* <Route path='/coming-soon' component={ComingSoon} /> */}
      </Switch>
    </div>   
  );
}

export default App;
