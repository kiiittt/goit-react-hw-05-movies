import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from '../pages/MovieDetails.module.css';

function Button({ location }) {
  const navigate = useNavigate();

  return (
    <button
      className={css.BtnBack}
      onClick={() => {
        navigate(location.state?.from ?? '/');
      }}
    >
      Go back
    </button>
  );
}

export default Button;

Button.propTypes = {
  location: PropTypes.shape(PropTypes.any.isRequired).isRequired,
};
