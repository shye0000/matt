import React from 'react';
import Skills from '../../components/skills/index';
import Languages from '../../components/languages/index';
import Hobbies from '../../components/hobbies/index';
import { HOBBIES, LANGUAGES, SKILLS } from '../../constants/index';

const Left = () => (
  <div className="left">
    <Skills skills={SKILLS} />
    <Languages languages={LANGUAGES} />
    <Hobbies hobbies={HOBBIES} />
  </div>
);

export default Left;
