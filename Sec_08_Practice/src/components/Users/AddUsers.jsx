import Input from "../UI/Input";
import Button from "../UI/Button";
import Container from "../UI/Container";
import styles from "./AddUsers.module.css";

const AddUsers = () => {
    const addUsersHandler = e => {
      e.preventDefault();
      console.log(e)
    }

    return (
        <Container className={styles.input}>
            <form action="/" onSubmit={addUsersHandler}>
                <Input 
                    type='text'
                    title='Username'
                    id='username'
                />
                <Input 
                    type='number'
                    title='Age ( years )'
                    id='age'
                />
                <Button type='submit'>Add User</Button>
            </form>
        </Container>
    );
}

export default AddUsers;