import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
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
      const navigate = useNavigate();
  const [isCastVisible, setIsCastVisible] = useState(false);
  const [areReviewsVisible, setAreReviewsVisible] = useState(false);

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
const defaultImage =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const toggleCastVisibility = () => {
    setIsCastVisible(!isCastVisible);
  };

  const toggleReviewsVisibility = () => {
    setAreReviewsVisible(!areReviewsVisible);
  };


  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={css.Detail}>
      <button className={css.GoBackButton} onClick={handleGoBack}>
        Go back
      </button>
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

      <h2>
        <Link to="#" onClick={toggleCastVisibility} className={css.Link}>
          {isCastVisible ? 'Hide Cast' : 'Show Cast'}
        </Link>
      </h2>
      {isCastVisible && (
        <div>
          {cast.length > 0 ? (
            <ul className={css.List}>
              {cast.map(actor => (
                <li key={actor.id}>
                  <img
                    src={
                      `https://image.tmdb.org/t/p/w500${actor.profile_path}` ||
                      defaultImage
                    }
                    alt={actor.name}
                    onError={e => {
                      e.target.src = defaultImage;
                    }}
                  />
                  <h3>{actor.name}</h3>
                  <p>Character: {actor.character}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>We don't have any cast for this movie</p>
          )}
        </div>
      )}

      <h2>
        <Link to="#" onClick={toggleReviewsVisibility} className={css.Link}>
          {areReviewsVisible ? 'Hide Reviews' : 'Show Reviews'}
        </Link>
      </h2>
      {areReviewsVisible && (
        <div>
          {reviews.length > 0 ? (
            <ul className={css.List}>
              {reviews.map(review => (
                <li key={review.id}>
                  <h3>Author: {review.author}</h3>
                  <p>{review.content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>We don't have any reviews for this movie</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
