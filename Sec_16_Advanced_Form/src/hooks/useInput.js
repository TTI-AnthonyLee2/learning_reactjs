import { useState } from "react";

const useInput = (validateInput) => {
  const [enteredInput, setEnteredInput] = useState('');
  const [isInputTouched, setIsInputTouched] = useState(false);

  const isEnteredValueValid = validateInput(enteredInput);
  const isInputValid = !isInputTouched || isEnteredValueValid;

  const inputChangedHandler = e => {
    setEnteredInput(e.target.value);
  }

  const inputBlurredHandler = e => {
    setIsInputTouched(true);
  }

  const resetInput = () => {
    setEnteredInput('');
    setIsInputTouched(false);
  }

  const inputClasses = isInputValid ? 'form-control' : 'form-control invalid';

  return {
    enteredInput,
    isEnteredValueValid,
    isInputValid,
    inputClasses,
    inputChangedHandler,
    inputBlurredHandler,
    resetInput,
  };
}

export default useInput;