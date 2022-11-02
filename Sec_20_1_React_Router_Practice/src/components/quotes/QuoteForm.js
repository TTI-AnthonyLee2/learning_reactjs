import { Prompt } from 'react-router-dom';
import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [isEntering, setIsEntering] = useState(false);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({
      id: uuidv4(),
      author: enteredAuthor,
      text: enteredText
    });

    console.log('submit!');
  }

  function focusFormHandler() {
    setIsEntering(true);
  }

  function finishEnteringHandler() {
    setIsEntering(false);
    console.log('finish entering!');
  }

  console.log('re-rendering!');

  return (
    <>
      <Prompt 
        when={isEntering} 
        message={(location) => 'Are you sure you want to leave? All your entered data will be lost!'} 
      />
      <Card>
        <form className={classes.form} onFocus={focusFormHandler} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className='btn'>Add Quote</button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
