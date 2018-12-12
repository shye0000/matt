import React from 'react';
import propTypes from 'prop-types';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import BoxLabel from '../../../BoxLabel';

import './index.scss';

const Hobbies = ({ hobbies }) => (
  <div className="hobbies">
    <BoxLabel
      label={(
        <div>
          <span>Mes </span>
          <strong>intérêts</strong>
        </div>
      )}
    />
    <Row gutter={20}>
      <Col span={12}>
        <div className="content">
          {hobbies.filter((hobby, idx) => idx <= hobbies.length / 2 - 1)
            .map(hobby => (
              <div>{hobby}</div>
            ))
          }
        </div>
      </Col>
      <Col span={12}>
        <div className="content">
          {hobbies.filter((hobby, idx) => idx > hobbies.length / 2 - 1)
            .map(hobby => (
              <div>{hobby}</div>
            ))
          }
        </div>
      </Col>
    </Row>
  </div>
);

Hobbies.propTypes = {
  hobbies: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Hobbies;
