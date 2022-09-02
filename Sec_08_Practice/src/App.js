import React, { useState } from 'react';
import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const handleAddUser = (user) => {
    setUsersList(prev => [
      ...prev,
      {
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
