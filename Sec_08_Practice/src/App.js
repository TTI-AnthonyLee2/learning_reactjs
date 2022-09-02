import React, { useState } from 'react';
import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';

import { v4 as uuidv4 } from 'uuid';

function App() {
  const [usersList, setUsersList] = useState([]);

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

  return (
    <div>
        <AddUsers onAddUser={handleAddUser} />
        <UsersList users={usersList} />
    </div>
  );
}

export default App;
