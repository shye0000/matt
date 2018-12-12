import React from 'react';
import './Skill.scss';
import skillPropTypes from './skillPropTypes';

const Skill = ({ skill }) => (
  <div className="skill">
    <img className="logo" src={skill.logo} alt={skill.label} />
    <div>{skill.label}</div>
  </div>
);

Skill.propTypes = {
  skill: skillPropTypes.isRequired,
};

export default Skill;
