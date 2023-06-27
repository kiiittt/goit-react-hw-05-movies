// API 147cc4dddd5b149a58f132e4bbbd295e
import { fetchTrendingMovies } from '../Api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const trendingMovies = await fetchTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        console.log('error', error);
        setMovies([]);
      }
    };

    fetchMovies();
  }, []);

  if (!movies.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className={css.Home}>
      <h1 className={css.Title}>Trending today</h1>
      <ul className={css.List}>
        {movies.map(movie => (
          <li key={movie.id} >
            <Link to={`/movies/${movie.id}`} className={css.Link}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
