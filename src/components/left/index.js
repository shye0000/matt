import React from 'react';
import Skills from './components/Skills';
import Languages from './components/Languages';
import { LANGUAGES, SKILLS } from '../../constants';

const Left = () => (
  <div className="left">
    <Skills skills={SKILLS} />
    <Languages languages={LANGUAGES} />
  </div>
);

export default Left;
