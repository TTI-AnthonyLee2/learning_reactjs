import React, { useState } from 'react';
import axios from 'axios';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    const response = await axios('https://swapi.dev/api/films');
    const movies = response.data.results;
    const moviesInfo = movies.map(movie => ({
      id: movie.episode_id,
      title: movie.title,
      openingText: movie.opening_crawl,
      releaseDate: movie.release_date
    }));

    setMoviesList(moviesInfo);
    // fetch('https://swapi.dev/api/film')
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
    setIsLoading(false);
  }

  console.log('[App] executing...');

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={moviesList} />}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
