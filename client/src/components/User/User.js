import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';

import { deleteUser } from '../../js/actions/User';
import AlertModal from '../Modals/AlertModal';

const User = ({ id, name, surName, birthPlace, birthYear }) => {
  const [del, setdel] = useState({
    show: false,
    id: ''
  });
  const accessGallery = () => {};
  const editUser = () => {};
  const delUser = e => {
    console.log('TCL: editUser -> id', e.target.id);
    setdel({
      show: true,
      id: e.target.id
    });
  };
  return (
    <>
      <Row>
        <hr />
        <Col>{name}</Col>
        <Col>{surName}</Col>
        <Col>{birthYear}</Col>
        <Col>{birthPlace}</Col>
        <Col>
          <Row>
            <Col>
              <img
                style={{ cursor: 'pointer' }}
                className='fa'
                src={require('../../assets/icons/photos.svg')}
                onClick={() => accessGallery()}
                alt='photo'
              />
            </Col>
            <Col>
              <img
                style={{ cursor: 'pointer' }}
                className='fa'
                src={require('../../assets/icons/edit.svg')}
                onClick={() => editUser()}
                alt='edit'
              />
            </Col>
            <Col>
              <img
                id={id}
                style={{ cursor: 'pointer' }}
                className='fa'
                src={require('../../assets/icons/delete.svg')}
                onClick={e => delUser(e)}
                alt='edit'
              />
            </Col>
          </Row>
        </Col>
        <hr />
      </Row>
      <AlertModal
        show={del.show}
        toggle={() => setdel({ show: false, id: '' })}
        id={del.id}
      />
    </>
  );
};

export default User;
