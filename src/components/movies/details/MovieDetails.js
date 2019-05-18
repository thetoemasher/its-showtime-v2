import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {formatMoney, formatDate} from '../../../_utils/formatter'

function MovieDetails(props) {
    const [movieInfo, setMovieInfo] = useState({})
    const [loading, setloading] = useState(true)
    const {movie_id, movie_title} = props.match.params

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`).then(results => {
            setMovieInfo(results.data)
            setloading(false)
        })
    }, [])
    console.log(movieInfo)

    if(loading) {
        return (
            <div>
                <h1>{movie_title}</h1>
                Shit be loadin yo!
            </div>
        )
    } else {
        return (
            <div>
                <img src={`https://image.tmdb.org/t/p/w780${movieInfo.backdrop_path}`} style={{width: '780px', height: 'auto'}} />
                <h1>{movieInfo.title}</h1>
                <p>{movieInfo.tagline}</p>
                <p>{formatMoney(movieInfo.budget)}</p>
                <a href={movieInfo.homepage} target='_blank' rel="noopener noreferrer">Website</a>
                <p>{movieInfo.overview}</p>
                <p>{movieInfo.poster_path}</p>
                <p>{formatDate(movieInfo.release_date)}</p>
                <p>{formatMoney(movieInfo.revenue)}</p>
                <p>{movieInfo.runtime}</p>
            </div>   
        );
    }
}

export default MovieDetails;

// adult: false
// backdrop_path: "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg"
// belongs_to_collection: {id: 86311, name: "The Avengers Collection", poster_path: "/qJawKUQcIBha507UahUlX0keOT7.jpg", backdrop_path: "/zuW6fOiusv4X9nnW3paHGfXcSll.jpg"}
// budget: 356000000
// genres: (3) [{…}, {…}, {…}]
// homepage: "https://www.marvel.com/movies/avengers-endgame"
// id: 299534
// imdb_id: "tt4154796"
// original_language: "en"
// original_title: "Avengers: Endgame"
// overview: "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store."
// popularity: 320.339
// poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
// production_companies: [{…}]
// production_countries: [{…}]
// release_date: "2019-04-24"
// revenue: 2531378374
// runtime: 181
// spoken_languages: [{…}]
// status: "Released"
// tagline: "Part of the journey is the end."
// title: "Avengers: Endgame"
// video: false
// vote_average: 8.5
// vote_count: 5454