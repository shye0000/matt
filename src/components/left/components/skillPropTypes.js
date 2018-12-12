import propTypes from 'prop-types';

const skillPropTypes = propTypes.shape({
  id: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  logo: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
});

export default skillPropTypes;
