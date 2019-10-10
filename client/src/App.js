import React, { useEffect } from 'react';
import { Container, Spinner } from 'reactstrap';
import { useSelector } from 'react-redux';
import store from './js/store/index';
import { getUsers } from './js/actions/User';
import UserList from './views/UserList/UserList';

const App = () => {
  useEffect(() => {
    store.dispatch(getUsers());
  }, []);

  const loading = useSelector(state => state.user.loading);

  return loading ? (
    <Spinner color='primary' />
  ) : (
    <Container className='card ml-auto mr-auto'>
      <UserList />
    </Container>
  );
};

export default App;
