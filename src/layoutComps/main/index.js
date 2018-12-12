import React from 'react';
import { EXPERIENCES } from '../../constants';
import Experiences from '../../components/experiences';

const Main = () => (
  <div className="main">
    <Experiences experiences={EXPERIENCES} />
  </div>
);

export default Main;
