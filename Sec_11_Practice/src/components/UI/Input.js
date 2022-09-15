import React from 'react';
import { StyledInput } from '../../styles/Input.styled';


const Input = React.forwardRef(({ input, label }, ref) => {
  return (
    <StyledInput>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} ref={ref} />
    </StyledInput>
  );
});

export default Input;