import { useCallback, useEffect, useState } from 'react';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';

import classes from './Comments.module.css';
import CommentsList from './CommentsList';
import NewCommentForm from './NewCommentForm';
import LoadingSpinner from '../UI/LoadingSpinner';

const Comments = ({ quoteId }) => {
  const { sendRequest, data: allComments, status, error } = useHttp(getAllComments);
  const [isAddingComment, setIsAddingComment] = useState(false);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = useCallback(() => {
    // after add a comment to the quote, re-call the 'getAllComments' API to refresh the page, then the new comment will be shown
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  let comments;

  if (status === 'pending') {
    comments = (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    comments = (
      <div className='centered'>
        <p>{error}</p>
      </div>
    );
  }

  if (status === 'completed' && allComments && allComments.length > 0) {
    comments = <CommentsList comments={allComments} />;
  }

  if (status === 'completed' && (!allComments || allComments.length === 0)) {
    comments = (
      <div className='centered'>
        <p>No comments were added yet!</p>
      </div>
    );
  }
  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={quoteId} onAddComment={addedCommentHandler} />}
      {comments}
    </section>
  );
};

export default Comments;
