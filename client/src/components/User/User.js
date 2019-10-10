import React from 'react';
import { Row, Col } from 'reactstrap';

const User = ({ name, surName, birthPlace, birthYear }) => {
  return (
    <Row>
      <hr />
      <Col>{name}</Col>
      <Col>{surName}</Col>
      <Col>{birthYear}</Col>
      <Col>{birthPlace}</Col>
      <Col>Action</Col>
      <hr />
    </Row>
  );
};

export default User;
