import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';
import PropTypes from 'prop-types';

function MoviesListItem({ title, movieId }) {
  const location = useLocation();
  return (
    <li>
      <Link
        to={`/movies/${movieId}`}
        state={{ from: location }}
        className={css.Link}
      >
        {title}
      </Link>
    </li>
  );
}

export default MoviesListItem;

MoviesListItem.propTypes = {
  movieId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
