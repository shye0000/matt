import React from 'react';
import format from 'date-fns/format';
import toDate from 'date-fns/parse';
import frLocale from 'date-fns/locale/fr';
import educationPropTypes from './educationPropTypes';
import './Education.scss';

const FORMAT = 'MMM YYYY';

const formatDate = dateString => format(toDate(dateString), FORMAT, { locale: frLocale });

const Education = ({ education }) => {
  const {
    startDate,
    endDate,
    school,
    major,
    badge,
  } = education;
  return (
    <div className="education">
      <div className="education-head">
        <div className="period">
          <span className="date">{formatDate(startDate)}</span>
          {' - '}
          <span className="date">{endDate ? formatDate(endDate) : 'Aujourd\'hui'}</span>
        </div>
        <div className="title">{school}</div>
      </div>
      <div className="education-body">
        <img src={badge} alt={school} className="school-badge" />
        <div>{major}</div>
      </div>
    </div>
  );
};

Education.propTypes = {
  education: educationPropTypes.isRequired,
};

export default Education;
