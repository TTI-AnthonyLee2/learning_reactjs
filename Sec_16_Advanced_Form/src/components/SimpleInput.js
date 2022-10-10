import useInput from '../hooks/useInput';

const SimpleInput = (props) => {
  const validateEnteredName = input => {
    return input.trim() !== '';
  }

  const validateEnteredEmail = input => {
    return input.trim().includes('@');
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
    
  const {
    enteredInput: enteredEmail,
    isEnteredValueValid: isEnteredEmailValid,
    isInputValid: isEmailInputValid,
    inputClasses: emailInputClasses,
    inputChangedHandler: emailInputChangedHandler,
    inputBlurredHandler: emailInputBlurredHandler,
    resetInput: resetEmailInput,
  } = useInput(validateEnteredEmail);


  const isFormValid = isEnteredNameValid && isEnteredEmailValid;

  const formSubmittedHandler = e => {
    e.preventDefault();
    
    if (!isFormValid) {
      return;
    }

    console.log(enteredName);
    resetNameInput();
    resetEmailInput();
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
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input 
          type='email' 
          id='email' 
          value={enteredEmail}
          onChange={emailInputChangedHandler}
          onBlur={emailInputBlurredHandler}
        />
        {!isEmailInputValid && <p className='error-text'>Email must include @.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
