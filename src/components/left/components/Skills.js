import React from 'react';
import propTypes from 'prop-types';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import BoxLabel from '../../BoxLabel';
import Skill from './Skill';
import logoJsSvg from '../../../images/logos/logo-js.svg';
import logoBabelSvg from '../../../images/logos/logo-babel.svg';
import skillPropTypes from './skillPropTypes';

import './Skills.scss';

const Skills = ({ skills }) => (
  <div className="skills">
    <BoxLabel
      label={(
        <div>
          <span>Mes </span>
          <strong>compétences</strong>
        </div>
      )}
    />
    <div className="content">
      <Row gutter={10}>
        {skills.map(skill => (
          <Col xs={12} sm={12} md={8} lg={6} key={skill.label}>
            <Skill skill={skill} />
          </Col>
        ))}
      </Row>
      <div className="js-with-babel">
        <img className="js" src={logoJsSvg} alt="js" />
        <img className="babel" src={logoBabelSvg} alt="babel" />
      </div>
    </div>
  </div>
);

Skills.propTypes = {
  skills: propTypes.arrayOf(skillPropTypes).isRequired,
};

export default Skills;
