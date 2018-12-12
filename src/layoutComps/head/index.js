import React from 'react';

import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import ProfilePhoto from '../../components/profilePhoto/index';
import Name from '../../components/name/index';
import Description from '../../components/description/index';
import Contacts from '../../components/contacts/index';

import './index.scss';

const Head = () => (
  <div className="head">
    <Row gutter={20}>
      <Col xs={24} md={6}>
        <ProfilePhoto />
        <Name />
      </Col>
      <Col xs={24} md={9}>
        <Description />
      </Col>
      <Col xs={24} md={9}>
        <Contacts />
      </Col>
    </Row>
  </div>
);

export default Head;
