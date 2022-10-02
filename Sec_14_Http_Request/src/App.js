import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

const url = 'https://react-http-practice-2770a-default-rtdb.firebaseio.com/movies.json';

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const addMovieHandler = async movie => {
    const response = await axios.post(url, movie, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios(url);
      const moviesInfo = [];

      for (const key in response.data) {
        moviesInfo.push({
          ...response.data[key],
          id: key
        });
      }
  
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
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
    console.log('seEffect executing...');
  }, [fetchMoviesHandler]);

  console.log('[App] executing...');

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
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
