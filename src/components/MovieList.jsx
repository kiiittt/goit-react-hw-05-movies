import MoviesListItem from './MoviesListItem';
import css from './MoviesList.module.css';
import PropTypes from 'prop-types';

function MoviesList({ movies }) {
  return (
    <ul className={css.List}>
      {movies.map(({ id, title }) => (
          <MoviesListItem key={id} movieId={id} title={title}
              className={css.Link} />
      ))}
    </ul>
  );
}

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
