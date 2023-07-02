import React, { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import {
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieReviews,
} from '../Api';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  // const [isCastVisible, setIsCastVisible] = useState(false);
  // const [areReviewsVisible, setAreReviewsVisible] = useState(false);
    const location = useLocation();

  console.log(location);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const movieData = await fetchMovieDetails(movieId);
        const castData = await fetchMovieCredits(movieId);
        const reviewsData = await fetchMovieReviews(movieId);

        setMovie(movieData);
        setCast(castData);
        setReviews(reviewsData);
      } catch (error) {
        console.log('Error fetching movie details:', error);
        setMovie(null);
        setCast([]);
        setReviews([]);
      }
    };

    fetchMovieData();
  }, [movieId]);

  if (!movie) {
    return <p>Loading movie details...</p>;
  }

  const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <div className={css.Detail}>
      <Link to={location.state?.from}>Go back</Link>
      <div className={css.Div}>
        <div>
          <img src={imageUrl} alt={movie.title} />
        </div>

        <div className={css.DivText}>
          <h1>{movie.title}</h1>
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
