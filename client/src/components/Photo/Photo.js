import React, { useState } from 'react';
import { Card, CardImg, CardBody, Col, Row } from 'reactstrap';
import { useDispatch } from 'react-redux';

import ShowPic from '../Modals/ShowPic';
import { deletePhoto } from '../../js/actions/Gallery';

const Photo = ({ title, path, id, userId }) => {
  const dispatch = useDispatch();
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
  const deletePic = e => {
    dispatch(deletePhoto(e.target.id, userId));
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
                userId={userId}
                id={id}
                src={require('../../assets/icons/delete.svg')}
                alt='eye'
                className='fa ml-3'
                onClick={e => deletePic(e)}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Photo;
