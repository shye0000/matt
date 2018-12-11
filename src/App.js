import React from 'react';

import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

import Head from './components/head';
import Left from './components/left';
import Main from './components/main';

import './App.scss';

const App = () => (
  <div className="App">
    <Head />
    <Row type="flex" align="top" gutter={20}>
      <Col xs={24} md={8}>
        <Left />
      </Col>
      <Col xs={24} md={16}>
        <Main />
      </Col>
    </Row>
  </div>
);

export default App;
