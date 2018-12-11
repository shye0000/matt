import React from 'react';

import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import ProfilePhoto from './components/ProfilePhoto';
import Name from './components/Name';

import './index.scss';

const Head = () => (
  <div className="head">
    <Row>
      <Col xs={24} md={8}>
        <ProfilePhoto />
        <Name />
      </Col>
      <Col xs={24} md={8}>
        description
      </Col>
      <Col xs={24} md={8}>
        contacts
      </Col>
    </Row>
  </div>
);

export default Head;
