import React from 'react';
import propTypes from 'prop-types';
import './Skill.scss';

const Skill = ({ skill }) => (
  <div className="skill">
    <img className="logo" src={skill.logo} alt={skill.label} />
    <div>{skill.label}</div>
  </div>
);

Skill.propTypes = {
  skill: propTypes.shape({
    logo: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
  }).isRequired,
};

export default Skill;
