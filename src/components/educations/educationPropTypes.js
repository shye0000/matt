import propTypes from 'prop-types';

const educationPropTypes = propTypes.shape({
  id: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  startDate: propTypes.string.isRequired,
  endDate: propTypes.string,
  school: propTypes.string.isRequired,
  major: propTypes.string.isRequired,
  badge: propTypes.string.isRequired,
});

export default educationPropTypes;
