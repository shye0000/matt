import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './BoxLabel.scss';

const BoxLabel = ({ label, withBackground }) => (
  <div className={classNames('box-label', { 'with-background': withBackground })}>
    {label}
  </div>
);

BoxLabel.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
  withBackground: PropTypes.bool,
};

BoxLabel.defaultProps = {
  withBackground: false,
};

export default BoxLabel;
