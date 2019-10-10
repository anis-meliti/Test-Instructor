import React from 'react';
import { Container } from 'reactstrap';
import UserList from './views/UserList/UserList';

const App = () => {
  return (
    <Container className='card ml-auto mr-auto'>
      <UserList />
    </Container>
  );
};

export default App;
