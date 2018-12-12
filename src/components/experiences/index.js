import React from 'react';
import propTypes from 'prop-types';
import BoxLabel from '../boxLabel';
import Experience from './Experience';
import experiencePropTypes from './experiencePropTypes';
import './index.scss';

const Experiences = ({ experiences }) => (
  <div className="experiences">
    <BoxLabel
      label={(
        <div>
          <span>Mes </span>
          <strong>expériences</strong>
        </div>
      )}
    />
    <div className="content">
      {experiences.map(experience => (
        <Experience key={experience.id} experience={experience} />
      ))}
    </div>
  </div>
);

Experiences.propTypes = {
  experiences: propTypes.arrayOf(experiencePropTypes).isRequired,
};

export default Experiences;
