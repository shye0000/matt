import propTypes from 'prop-types';

const experiencePropTypes = propTypes.shape({
  id: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  startDate: propTypes.string.isRequired,
  endDate: propTypes.string,
  title: propTypes.string.isRequired,
  description: propTypes.string,
});

export default experiencePropTypes;
