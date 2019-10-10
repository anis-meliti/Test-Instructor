import axios from 'axios';
import { LOAD_GALLERY } from '../constants/actions-types';

//  GET the current user Profile

export const getgallery = userId => async dispatch => {
  try {
    const res = await axios.get(`/gallery/:${userId}`);
    dispatch({
      type: LOAD_GALLERY,
      payload: res.data
    });
  } catch (error) {
    console.error(error);
  }
};
// Create a profile
export const addPhoto = ({ userId, title, path }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({
    title,
    path
  });
  try {
    const res = await axios.post(`/gallery/:${userId}`, body, config);
    console.log('TCL:  payload: res.data', res.data);

    dispatch(getgallery(userId));
  } catch (error) {
    console.error(error);
  }
};
// Delete user
export const deleteUser = id => async dispatch => {
  try {
    const res = await axios.delete(`/gallery/${id}`);
    console.log('TCL:  payload: res.data', res.data);

    dispatch(getgallery(id));
  } catch (error) {
    console.error(error);
  }
};
