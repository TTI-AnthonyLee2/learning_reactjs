import Button from './Button';
import Container from './Container';

import styles from './ErrorModal.module.css';

const ErrorModal = ({ title, message, onConfirm }) => {
  return (
    <>
      <div className={styles.backdrop} onClick={onConfirm} />
      <Container className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <section className={styles.content}>
          <p>{message}</p>
        </section>
        <footer className={styles.actions}>
          <Button onClick={onConfirm}>Okay</Button>
        </footer>
      </Container>
    </>
  );
}

export default ErrorModal;