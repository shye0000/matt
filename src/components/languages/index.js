import React from 'react';
import propTypes from 'prop-types';
import BoxLabel from '../boxLabel';
import Language from './Language';
import languagePropTypes from './languagePropTypes';
import './index.scss';

const Languages = ({ languages }) => (
  <div className="languages">
    <BoxLabel
      label={(
        <div>
          <span>Mes </span>
          <strong>langues</strong>
        </div>
      )}
    />
    <div className="content">
      {languages.map(lang => (
        <Language key={lang.id} language={lang} />
      ))}
    </div>
  </div>
);

Languages.propTypes = {
  languages: propTypes.arrayOf(languagePropTypes).isRequired,
};

export default Languages;
