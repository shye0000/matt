import React from 'react';
import format from 'date-fns/format';
import toDate from 'date-fns/parse';
import frLocale from 'date-fns/locale/fr';
import experiencePropTypes from './experiencePropTypes';
import './Experience.scss';

const FORMAT = 'MMM YYYY';

const formatDate = dateString => format(toDate(dateString), FORMAT, { locale: frLocale });

const Experience = ({ experience }) => {
  const {
    startDate,
    endDate,
    title,
    description,
  } = experience;
  return (
    <div className="experience">
      <div className="experience-head">
        <span className="period">
          <span className="date">{formatDate(startDate)}</span>
          {' - '}
          <span className="date">{endDate ? formatDate(endDate) : 'Aujourd\'hui'}</span>
        </span>
        <span className="title">{title}</span>
      </div>
      <div className="experience-body">{description}</div>
    </div>
  );
};

Experience.propTypes = {
  experience: experiencePropTypes.isRequired,
};

export default Experience;
