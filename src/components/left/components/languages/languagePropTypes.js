import propTypes from 'prop-types';

const languagePropTypes = propTypes.shape({
  id: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  color: propTypes.string.isRequired,
  background: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  msg: propTypes.string.isRequired,
});

export default languagePropTypes;
