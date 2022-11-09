import { useEffect, useRef } from 'react';

import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';

import classes from './NewCommentForm.module.css';

const NewCommentForm = ({ quoteId, onAddComment }) => {
  const { sendRequest, status, error } = useHttp(addComment);
  const commentTextRef = useRef();

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddComment();
      commentTextRef.current.value = '';
    }
  }, [status, error, onAddComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();
    // optional: Could validate here

    // send comment to server
    const commentText = commentTextRef.current.value;
    sendRequest({ 
      quoteId,
      commentData: {
        text: commentText,
      } 
    });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
      {
        status === 'pending' && <div className='centered'>
          <LoadingSpinner />
        </div>
      }
    </form>
  );
};

export default NewCommentForm;
