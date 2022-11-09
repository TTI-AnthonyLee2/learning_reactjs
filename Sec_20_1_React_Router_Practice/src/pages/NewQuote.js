import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const { sendRequest, status, error } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === 'completed' && !error) {
      history.push('/quotes'); 
    }
  }, [status, error, history]);

  const addQuoteHandler = (quote) => {
    sendRequest(quote);
  }

  return (
    <>
      <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
    </>
  );
};

export default NewQuote;