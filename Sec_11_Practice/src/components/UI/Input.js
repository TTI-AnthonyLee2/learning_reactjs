import { StyledInput } from '../../styles/Input.styled';


const Input = ({ input, label }) => {
  return (
    <StyledInput>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </StyledInput>
  );
};

export default Input;