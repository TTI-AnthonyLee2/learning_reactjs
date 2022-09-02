import React, { useState } from 'react';
import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';
import ErrorModal from './components/UI/ErrorModal';

import { v4 as uuidv4 } from 'uuid';

function App() {
  const [usersList, setUsersList] = useState([]);
  const [error, setError] = useState(null);

  const handleAddUser = (user) => {
    setUsersList(prev => [
      ...prev,
      {
        id: uuidv4(),
        name: user.name,
        age: user.age 
      }
    ]);
  }

  const showErrorMessage = error => {
    setError(error);
  }

  const handleErrorModal = () => {
    setError(null);
  }

  return (
    <div>
        { error && <ErrorModal title={error.title} message={error.message} onConfirm={handleErrorModal} /> }
        <AddUsers onAddUser={handleAddUser} showErrorMessage={showErrorMessage} />
        <UsersList users={usersList} />
    </div>
  );
}

export default App;
