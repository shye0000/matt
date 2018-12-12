import React from 'react';
import languagePropTypes from './languagePropTypes';
import './Language.scss';

const Language = ({ language }) => {
  const {
    name,
    msg,
    background,
    color,
  } = language;
  return (
    <div className="language" style={{ background, color }}>
      <div className="language-name">{name}</div>
      <div>{msg}</div>
    </div>
  );
};

Language.propTypes = {
  language: languagePropTypes.isRequired,
};

export default Language;
