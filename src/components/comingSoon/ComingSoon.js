import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

async function getComingSoon() {
  
}

function ComingSoon(props) {
  const [comingSoon, setComingSoon] = useState([])
  const [page, setPage] = useState(1)
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${page}`).then(results => {
      console.log(results.data)
      setComingSoon(results.data.results)
    })
    return function() {
      setComingSoon([])
    }
  }, [page])
  let date = new Date()
  // console.log(comingSoon)
  // .filter(m => new Date(m.release_date) >= date)
  const comingSoonMap = comingSoon.map(m => {
    return (
      <div key={m.id}>
        <Link to={`/movies/details/${m.id}/${m.title}`}>
          <img src={`https://image.tmdb.org/t/p/w154${m.poster_path}`} style={{width: 125, height: 'auto'}} alt={m.title}/>
          <h4>{m.title}</h4>
        </Link>
        
      </div>
    )
  })
  return (
    <div>
      What it do?
      {comingSoonMap}
      {page > 1 &&
        <button onClick={() => setPage(page - 1)}>Previous</button>
      }
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>   
  );
}

export default ComingSoon;

// adult: false
// backdrop_path: "/nDP33LmQwNsnPv29GQazz59HjJI.jpg"
// genre_ids: (8) [9648, 10751, 80, 14, 35, 878, 12, 16]
// id: 447404
// original_language: "en"
// original_title: "Pokémon Detective Pikachu"
// overview: "In a world where people collect pocket-size monsters (Pokémon) to do battle, a boy comes across an intelligent monster who seeks to be a detective."
// popularity: 298.693
// poster_path: "/wgQ7APnFpf1TuviKHXeEe3KnsTV.jpg"
// release_date: "2019-05-03"
// title: "Pokémon Detective Pikachu"
// video: false
// vote_average: 7.1
// vote_count: 466