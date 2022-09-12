import { useRef, forwardRef, useImperativeHandle } from 'react';

import styles from './Input.module.css';

const Input = forwardRef(({ label, id, type, value, isValid, onChange, onBlur }, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: focus
  }));

  const focus = () => {
    inputRef.current.focus();
  }
  
  return (
    <div
      className={`${styles.control} ${
        isValid === false ? styles.invalid : ''
      }`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        ref={inputRef}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
});

export default Input;