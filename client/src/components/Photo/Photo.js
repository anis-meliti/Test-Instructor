import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardText, Col, Row } from 'reactstrap';

import ShowPic from '../Modals/ShowPic';

const Photo = ({ title, path }) => {
  const [pic, setpic] = useState({
    show: false,
    path: ''
  });
  const showPic = () => {
    setpic({
      show: true,
      path: path
    });
  };

  return (
    <Col>
      <ShowPic
        show={pic.show}
        path={pic.path}
        toggle={() => setpic({ show: false, path: '' })}
      />
      <Card style={{ width: '20rem' }}>
        <CardImg top src={path} alt='...' style={{ height: '250px' }} />
        <CardBody>
          <CardText>
            <Row>
              <Col>{title}</Col>
              <Col className='ml-auto'>
                <img
                  src={require('../../assets/icons/eye.svg')}
                  alt='eye '
                  className='fa '
                  onClick={showPic}
                />
                <img
                  src={require('../../assets/icons/delete.svg')}
                  alt='eye'
                  className='fa ml-3'
                />
              </Col>
            </Row>
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Photo;
