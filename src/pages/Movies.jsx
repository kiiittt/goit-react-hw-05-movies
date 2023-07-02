import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import css from './Home.module.css';
import { fetchMovieSearch } from '../Api';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  console.log(location)

  const handleSearch = async e => {
    e.preventDefault();
    try {
      const results = await fetchMovieSearch(searchQuery);
      setSearchResults(results);
    } catch (error) {
      console.log('Ошибка при выполнении поиска:', error);
      setSearchResults([]);
    }
  };

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  return (
    <main className={css.Home}>
      <form onSubmit={handleSearch}>
        <label htmlFor="SearchFilm">
          <input
            type="text"
            id="SearchFilm"
            className={css.Input}
            value={searchQuery}
            onChange={handleChange}
          />
          <button type="submit" className={css.Btn}>
            Search
          </button>
        </label>
      </form>

      {searchResults.length > 0 ? (
        <div className={css.Results}>
          <h2>Search Results:</h2>
          <ul className={css.List}>
            {searchResults.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}
                  className={css.Link}>{movie.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </main>
  );
};

export default Movies;
