import axios from 'axios';
import {
  LOAD_USERS,
  ADD_USER,
  EDIT_USER,
  DELETE_USER
} from '../constants/actions-types';

//  GET the current user Profile

export const getUsers = () => async dispatch => {
  try {
    const res = await axios.get('/users');
    dispatch({
      type: LOAD_USERS,
      payload: res.data
    });
  } catch (error) {
    console.error(error);
  }
};
// Update / create a profile
export const addUser = ({
  name,
  surName,
  birthYear,
  birthPlace
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({
    name,
    surName,
    birthYear,
    birthPlace
  });
  try {
    const res = await axios.post('/users', body, config);
    console.log('TCL:  payload: res.data', res.data);

    dispatch(getUsers());
  } catch (error) {
    console.error(error);
  }
};
