import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, FormGroup, Input, Modal } from 'reactstrap';

import { addUser } from '../../js/actions/User';

const AddUser = ({ isOpen, toggle, alterUser }) => {
  const [userInfo, setuserInfo] = useState({
    name: '',
    surName: '',
    birthPlace: '',
    birthYear: ''
  });

  const onChangeHandler = e => {
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
    console.log('TCL: AddUser -> userInfo', userInfo);
  };
  const dispatch = useDispatch();
  const addNewUser = () => {
    dispatch(addUser(userInfo));
    toggle();
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <div className='modal-header'>
        <h5 className='modal-title' id='exampleModalPopoversLabel'>
          {alterUser ? 'Modify User' : ' Add new User'}
        </h5>
        <button
          aria-label='Close'
          className='close'
          data-dismiss='modal'
          type='button'
          onClick={toggle}
        >
          <span aria-hidden={true}>×</span>
        </button>
      </div>
      <div className='modal-body'>
        <FormGroup>
          <label>Name:</label>
          <Input
            defaultValue={userInfo.name}
            placeholder='Name'
            type='text'
            name='name'
            onChange={onChangeHandler}
          />
        </FormGroup>
        <FormGroup>
          <label>Sur Name:</label>
          <Input
            defaultValue={userInfo.surName}
            placeholder='Sur Name'
            type='text'
            name='surName'
            onChange={onChangeHandler}
          />
        </FormGroup>
        <FormGroup>
          <label>Birth Year:</label>
          <Input
            defaultValue={userInfo.birthYear}
            placeholder='Birth Year'
            type='text'
            name='birthYear'
            onChange={onChangeHandler}
          />
        </FormGroup>
        <FormGroup>
          <label>Birth Place:</label>
          <Input
            defaultValue={userInfo.birthPlace}
            placeholder='Birth Place'
            type='text'
            name='birthPlace'
            onChange={onChangeHandler}
          />
        </FormGroup>
      </div>
      <div className='modal-footer'>
        <div className='left-side'>
          <Button
            className='btn-link'
            color='default'
            onClick={() => addNewUser()}
            type='button'
          >
            {alterUser ? 'Save' : 'Add New user'}
          </Button>
        </div>
        <div className='divider' />
        <div className='right-side'>
          <Button
            className='btn-link'
            color='danger'
            type='button'
            onClick={toggle}
          >
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AddUser;
