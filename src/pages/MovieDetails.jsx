import css from './MovieDetails.module.css';
import { useEffect, useState, useRef } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../Api';
import ButtonBack from '../components/ButtonBack';

const defaultImage =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const locationRef = useRef(location);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const movieData = await fetchMovieDetails(movieId);
        setMovie(movieData);
      } catch (error) {
        console.log('error', error);
        setMovie(null);
      }
    };

    fetchMovieData();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <div className={css.Detail}>
      <ButtonBack location={locationRef.current} />
      <div className={css.Div}>
        <div>
          <img
            src={imageUrl !== null ? imageUrl : defaultImage}
            alt={movie.title}
            className={css.image}
          ></img>
        </div>

        <div className={css.DivText}>
          <h1>
            {' '}
            {movie.title}({movie.release_date.slice(0, 4)})
          </h1>
          <p>User score: {(movie.vote_average * 10).toFixed(0)}%</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Overview: {movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>

      <ul className={css.List}>
        <li>
          <Link to="cast" className={css.Link}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="Reviews" className={css.Link}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
