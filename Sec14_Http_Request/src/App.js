import React, { useState } from 'react';
import axios from 'axios';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const fetchMoviesHandler = () => {
    axios('https://swapi.dev/api/films')
      .then(res => res.data.results)
      .then(movies => {
        const moviesInfo = movies.map(movie => ({
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date
        }));
        
        setMoviesList(moviesInfo);
      });
    // fetch('https://swapi.dev/api/films')
    //   .then(response => response.json())
    //   .then(data => {
    //     const moviesInfo = data.results.map(movie => ({
    //       id: movie.episode_id,
    //       title: movie.title,
    //       openingText: movie.opening_crawl,
    //       releaseDate: movie.release_date
    //     }));
        
    //     setMoviesList(moviesInfo);
    //   });
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={moviesList} />
      </section>
    </React.Fragment>
  );
}

export default App;
