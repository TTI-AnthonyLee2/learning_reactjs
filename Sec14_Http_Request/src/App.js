import React, { useState } from 'react';
import axios from 'axios';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios('https://swapi.dev/api/film');
      const movies = response.data.results;
      const moviesInfo = movies.map(movie => ({
        id: movie.episode_id,
        title: movie.title,
        openingText: movie.opening_crawl,
        releaseDate: movie.release_date
      }));
  
      setMoviesList(moviesInfo);
    } catch (e) {
      setError(e.message);
    }
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
        {!isLoading && !error && moviesList.length === 0 && <p>Found no movies.</p>}
        {!isLoading && <MoviesList movies={moviesList} />}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
