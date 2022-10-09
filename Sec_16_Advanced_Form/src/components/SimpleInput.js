import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [isNameInputTouched, setIsNameInputTouched] = useState(false);
  
  const isEnteredNameValid = enteredName.trim() !== '';

  const nameInputChangedHandler = e => {
    setEnteredName(e.target.value);
  }

  const nameInputBlurredHandler = e => {
    setIsNameInputTouched(true);
  }

  const formSubmittedHandler = e => {
    e.preventDefault();

    setIsNameInputTouched(true);

    if (!isEnteredNameValid) {
      return;
    }

    console.log(enteredName);
    setEnteredName('');
  }

  console.log('re-executing.');

  const isNameInputValid = !isNameInputTouched || isEnteredNameValid;

  const formClasses = isNameInputValid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmittedHandler}>
      <div className={formClasses}>
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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
