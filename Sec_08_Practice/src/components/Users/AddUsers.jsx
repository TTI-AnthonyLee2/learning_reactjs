import { useState } from "react";

import Input from "../UI/Input";
import Button from "../UI/Button";
import Container from "../UI/Container";

import styles from "./AddUsers.module.css";

const defaultUser = {name: '', age: ''};
const AddUsers = () => {
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
