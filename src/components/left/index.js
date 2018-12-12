import React from 'react';
import Skills from './components/skills';
import Languages from './components/languages';
import Hobbies from './components/hobbies';
import { HOBBIES, LANGUAGES, SKILLS } from '../../constants';

const Left = () => (
  <div className="left">
    <Skills skills={SKILLS} />
    <Languages languages={LANGUAGES} />
    <Hobbies hobbies={HOBBIES} />
  </div>
);

export default Left;
