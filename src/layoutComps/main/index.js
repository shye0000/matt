import React from 'react';
import { EXPERIENCES, EDUCATIONS } from '../../constants';
import Experiences from '../../components/experiences';
import Educations from '../../components/educations';

const Main = () => (
  <div className="main">
    <Experiences experiences={EXPERIENCES} />
    <Educations educations={EDUCATIONS} />
  </div>
);

export default Main;
