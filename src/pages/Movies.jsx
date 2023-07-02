import { useSearchParams } from 'react-router-dom';
import { fetchMovieSearch } from '../Api';
import { useState, useEffect, useCallback } from 'react';
import MoviesList from 'components/MovieList';
import SearchMovie from 'components/SearchMovie';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const formSubmitHandler = useCallback(
    async query => {
      const searchMovies = await fetchMovieSearch(query);
      setMovies(searchMovies);
      setSearchParams({ query: query });
    },
    [setSearchParams]
  );

  useEffect(() => {
    if (query) {
      formSubmitHandler(query);
    }
  }, [searchParams, query, formSubmitHandler]);

  return (
    <div>
      <SearchMovie onSubmit={formSubmitHandler} />
      <MoviesList movies={movies} />
    </div>
  );
}

export default Movies;
