import React from 'react';
import { AddUsers } from './components/Users/AddUsers';
import { Container } from './components/UI/Container';

function App() {
  return (
    <div>
      <Container>
        <AddUsers />
      </Container>
    </div>
  );
}

export default App;
