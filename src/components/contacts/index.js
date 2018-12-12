import React from 'react';
import Icon from 'antd/lib/icon';
import BoxLabel from '../boxLabel';

import './index.scss';

const Contacts = () => (
  <div className="contacts">
    <BoxLabel
      label={(
        <div>
          <span>Me </span>
          <strong>contacter</strong>
        </div>
      )}
      withBackground
    />
    <div className="content">
      <Icon className="content-icon" type="phone" />
      <span>+33(0)625606263</span>
    </div>
    <div className="content">
      <Icon className="content-icon" type="mail" />
      <span>shye0000@gmail.com</span>
    </div>
  </div>
);

export default Contacts;
