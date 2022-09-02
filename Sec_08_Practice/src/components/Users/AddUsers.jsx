import { useState } from "react";

import Input from "../UI/Input";
import Button from "../UI/Button";
import Container from "../UI/Container";

import styles from "./AddUsers.module.css";

const defaultUser = {name: '', age: ''};
const AddUsers = ({ onAddUser, showErrorMessage }) => {
  const [user, setUser] = useState(defaultUser);

  const handleNameChanged = e => {
    setUser(prev => ({
      ...prev,
      name: e.target.value
    }));
  }

  const handleAgeChanged = e => {
    setUser(prev => ({
      ...prev,
      age: e.target.value
    }));
  }
  
  const handleButtonClicked = e => {
    
  };
  
  const handleAddUsersSubmitted = e => {
    e.preventDefault();
    
    const isInvalidInput = user.name.trim().length === 0 || user.age.trim().length === 0;
    const isInvalidAge = Number(user.age) <= 0;
    
    if (isInvalidInput) {
      showErrorMessage({
        title: 'Invalid input',
        message: 'Please check if your username or age is empty.'
      });
      return;
    }

    if (isInvalidAge) {
      showErrorMessage({
        title: 'Invalid age',
        message: 'Please check if the age is (> 0).'
      });
      return;
    }

    onAddUser(user);
    setUser(defaultUser);
  };

  return (
    <Container className={styles.input}>
      <form action="/" onSubmit={handleAddUsersSubmitted}>
        <Input type="text" title="Username" id="username" value={user.name} onChanged={handleNameChanged} />
        <Input type="number" title="Age ( years )" id="age" value={user.age} onChanged={handleAgeChanged} />
        <Button type="submit" onClick={handleButtonClicked}>
          Add User
        </Button>
      </form>
    </Container>
  );
};

export default AddUsers;
