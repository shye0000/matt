import React from 'react';
import propTypes from 'prop-types';
import BoxLabel from '../boxLabel';
import Education from './Education';
import educationPropTypes from './educationPropTypes';
import './index.scss';

const Educations = ({ educations }) => (
  <div className="educations">
    <BoxLabel
      label={(
        <div>
          <span>Mes </span>
          <strong>formations</strong>
        </div>
      )}
    />
    <div className="content">
      {educations.map(education => (
        <Education key={education.id} education={education} />
      ))}
    </div>
  </div>
);

Educations.propTypes = {
  educations: propTypes.arrayOf(educationPropTypes).isRequired,
};

export default Educations;
