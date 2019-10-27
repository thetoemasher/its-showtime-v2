import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import Home from './components/home/Home'
import MovieDetails from './components/movies/details/MovieDetails'
import ComingSoon from './components/comingSoon/ComingSoon'
import TheaterSearch from './components/theaterSearch/TheaterSearch'
import Login from './components/auth/Login'
import axios from 'axios'

function App() {
  return (
    <div>
      <div>
        <h1>It's Showtime</h1>
        <Link to='/'>Home</Link>
        <Link to='/coming-soon'>Coming Soon</Link>
        <Link to='/theater-search'>Search Theater</Link>
      </div>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/movies/details/:movie_id/:movie_title' exact component={MovieDetails}/>
        <Route path='/coming-soon' component={ComingSoon} />
        <Route path='/theater-search' component={TheaterSearch} />
        <Route path='/Login' component={Login} />

      </Switch>
    </div>   
  );
}

export default App;
