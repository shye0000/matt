import React from 'react';

import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import ProfilePhoto from './components/ProfilePhoto';
import Name from './components/Name';
import Description from './components/Description';
import Contacts from './components/Contacts';

import './index.scss';

const Head = () => (
  <div className="head">
    <Row gutter={20}>
      <Col xs={24} md={8}>
        <ProfilePhoto />
        <Name />
      </Col>
      <Col xs={24} md={8}>
        <Description />
      </Col>
      <Col xs={24} md={8}>
        <Contacts />
      </Col>
    </Row>
  </div>
);

export default Head;
