import React from 'react';

import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import BoxLabel from '../../BoxLabel';
import Skill from './Skill';
import logoReactSvg from '../../../images/logos/logo-react.svg';
import logoReduxSvg from '../../../images/logos/logo-redux.svg';
import logoAngularSvg from '../../../images/logos/logo-angular.svg';
import logoNodeSvg from '../../../images/logos/logo-node.svg';
import logoJquerySvg from '../../../images/logos/logo-jquery.svg';
import logoHtml5Svg from '../../../images/logos/logo-html5.svg';
import logoCss3Svg from '../../../images/logos/logo-css3.svg';
import logoSassSvg from '../../../images/logos/logo-sass.svg';
import logoWebpackSvg from '../../../images/logos/logo-webpack.svg';
import logoGruntSvg from '../../../images/logos/logo-grunt.svg';
import logoGitSvg from '../../../images/logos/logo-git.svg';
import logoLinuxSvg from '../../../images/logos/logo-linux.svg';
import logoJsSvg from '../../../images/logos/logo-js.svg';
import logoBabelSvg from '../../../images/logos/logo-babel.svg';
import logoEnzymeSvg from '../../../images/logos/logo-enzyme-airbnb.svg';
import logoJestSvg from '../../../images/logos/logo-jest.svg';
import logoEslintSvg from '../../../images/logos/logo-eslint.svg';


import './Skills.scss';

const skills = [
  { id: 'react', logo: logoReactSvg, label: 'React' },
  { id: 'redux', logo: logoReduxSvg, label: 'Redux' },
  { id: 'angular', logo: logoAngularSvg, label: 'Angularjs' },
  { id: 'node', logo: logoNodeSvg, label: 'Nodejs' },
  { id: 'webpack', logo: logoWebpackSvg, label: 'Webpack' },
  { id: 'grunt', logo: logoGruntSvg, label: 'Grunt' },
  { id: 'git', logo: logoGitSvg, label: 'Git' },
  { id: 'linux', logo: logoLinuxSvg, label: 'Linux' },
  { id: 'enzyme', logo: logoEnzymeSvg, label: 'Enzyme' },
  { id: 'jest', logo: logoJestSvg, label: 'Jest' },
  { id: 'eslint', logo: logoEslintSvg, label: 'Eslint' },
  { id: 'jquery', logo: logoJquerySvg, label: 'Jquery' },
  { id: 'html5', logo: logoHtml5Svg, label: 'HTML5' },
  { id: 'css3', logo: logoCss3Svg, label: 'CSS3' },
  { id: 'sass', logo: logoSassSvg, label: 'SASS' },
];

const Skills = () => (
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

export default Skills;
