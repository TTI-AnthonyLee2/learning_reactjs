import useInput from '../hooks/useInput';

const SimpleInput = (props) => {
  const validateEnteredName = input => {
    return input.trim() !== '';
  }
  
  const {
    enteredInput: enteredName,
    isEnteredValueValid: isEnteredNameValid,
    isInputValid: isNameInputValid,
    inputClasses: nameInputClasses,
    inputChangedHandler: nameInputChangedHandler,
    inputBlurredHandler: nameInputBlurredHandler,
    resetInput: resetNameInput,
  } = useInput(validateEnteredName);


  const isFormValid = isEnteredNameValid;

  const formSubmittedHandler = e => {
    e.preventDefault();
    
    if (!isEnteredNameValid) {
      return;
    }

    console.log(enteredName);
    resetNameInput();
  }

  return (
    <form onSubmit={formSubmittedHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          value={enteredName}
          onChange={nameInputChangedHandler}
          onBlur={nameInputBlurredHandler}
        />
        {!isNameInputValid && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
