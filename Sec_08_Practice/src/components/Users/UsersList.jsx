import Container from '../UI/Container';

import styles from './UsersList.module.css';

const UsersList = ({ users }) => {
    return (
        <Container className={styles.users}>
          <ul>
            {
              users.length > 0 ? 
              users.map(user => <li key={user.id}>{user.name} ({user.age} years old)</li>) : 
              `Let's add some users!`
            }
          </ul>
        </Container>
    );
}

export default UsersList;