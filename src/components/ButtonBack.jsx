import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ButtonBack = ({ location }) => {
  const navigate = useNavigate();
  console.log(location);
  return (
    <button type="button" onClick={() => navigate(location.state?.from ?? '/')}>
      &larr; Назад
    </button>
  );
};

ButtonBack.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ButtonBack;
