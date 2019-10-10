import React from 'react';
import { Modal, Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../js/actions/User';

const AlertModal = ({ show, toggle, id }) => {
  const dispatch = useDispatch();

  const delUser = () => {
    dispatch(deleteUser(id));
  };
  return (
    <Modal
      isOpen={show}
      className='modal-sm'
      modalClassName='bd-example-modal-sm'
      toggle={toggle}
    >
      <div className='modal-header'>
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
        <h4 className='title'>Whould really delete this user?</h4>
      </div>
      <div className='modal-footer'>
        <div className='left-side'>
          <Button
            className='btn-link'
            color='danger'
            onClick={() => delUser()}
            type='button'
          >
            Delete
          </Button>
        </div>
        <div className='divider' />
        <div className='right-side'>
          <Button
            className='btn-link'
            color='default'
            type='button'
            onClick={toggle}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AlertModal;
