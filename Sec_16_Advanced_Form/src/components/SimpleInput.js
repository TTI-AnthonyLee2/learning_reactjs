import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setenteredName] = useState('');
  const nameInputRef = useRef();

  const inputChangedHandler = e => {
    setenteredName(e.target.value);
  }

  const submitHandler = e => {
    e.preventDefault();

    console.log('useState: ' + enteredName);
    setenteredName('');

    console.log('useRef: ' + nameInputRef.current.value);
  }

  console.log('re-executing.')

  return (
    <form onSubmit={submitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input 
          ref={nameInputRef}
          type='text' 
          id='name' 
          value={enteredName}
          onChange={inputChangedHandler} 
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
