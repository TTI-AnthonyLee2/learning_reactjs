import Input from "../UI/Input";
import Button from "../UI/Button";

const AddUsers = () => {
    return (
        <>
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
            <Button>Add User</Button>
        </>
    );
}

export default AddUsers;