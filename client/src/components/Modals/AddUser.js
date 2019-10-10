import React, { useState } from 'react';
import { Button, FormGroup, Input, Modal } from 'reactstrap';

const AddUser = ({ isOpen, toggle }) => {
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
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <div className='modal-header'>
        <h5 className='modal-title' id='exampleModalPopoversLabel'>
          Add new User
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
            defaultValue=''
            placeholder='Name'
            type='text'
            name='name'
            onChange={onChangeHandler}
          />
        </FormGroup>
        <FormGroup>
          <label>Sur Name:</label>
          <Input
            defaultValue=''
            placeholder='Sur Name'
            type='text'
            name='surName'
            onChange={onChangeHandler}
          />
        </FormGroup>
        <FormGroup>
          <label>Birth Year:</label>
          <Input
            defaultValue=''
            placeholder='Birth Year'
            type='text'
            name='birthYear'
            onChange={onChangeHandler}
          />
        </FormGroup>
        <FormGroup>
          <label>Birth Place:</label>
          <Input
            defaultValue=''
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
            //   onClick={() => setTooltipsAndPopovers(false)}
            type='button'
          >
            Add New
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
