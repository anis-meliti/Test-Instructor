import {
  LOAD_USERS,
  LOAD_FAIL,
  ADD_USER,
  EDIT_USER,
  DELETE_USER
} from '../constants/actions-types';

const initialState = {
  users: [
    {
      name: '',
      surName: '',
      birthYear: '',
      birthPlace: ''
    }
  ],
  loading: true
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_USERS:
      return {
        ...state,
        users: payload,
        loading: false
      };

    case LOAD_FAIL:
      return {
        ...state,
        users: [
          {
            name: '',
            surName: '',
            birthYear: '',
            birthPlace: ''
          }
        ],
        loading: false
      };
    case ADD_USER:
      return {
        ...state,
        users: payload,
        loading: false
      };
    default:
      return state;
  }
};
