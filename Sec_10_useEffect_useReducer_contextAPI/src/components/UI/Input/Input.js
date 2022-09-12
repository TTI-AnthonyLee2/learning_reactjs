import styles from './Input.module.css';

const Input = ({ label, id, type, value, isValid, onChange, onBlur }) => {
  return (
    <div
      className={`${styles.control} ${
        isValid === false ? styles.invalid : ''
      }`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}

export default Input;