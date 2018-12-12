import React from 'react';

import BoxLabel from '../../BoxLabel';

import './Description.scss';

const Description = () => (
  <div className="description">
    <BoxLabel
      label={(
        <div>
          <span>Qui </span>
          <strong>je suis</strong>
        </div>
      )}
      withBackground
    />
    <div className="content">
      {'Passionné et autonome, cherche des opportunités et des challenges intéressants.'}
    </div>
  </div>
);

export default Description;
