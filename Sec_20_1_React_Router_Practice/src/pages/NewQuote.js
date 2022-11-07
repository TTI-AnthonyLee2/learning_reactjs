import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import QuoteForm from "../components/quotes/QuoteForm";
import { quotesActions } from '../store/quotesSlice';

const NewQuote = () => {
  const dispatch = useDispatch();
  const histroy = useHistory();

  const addQuoteHandler = (quote) => {
    dispatch(quotesActions.addQuote(quote));
    histroy.push('/quotes'); 
  }

  return (
    <>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </>
  );
};

export default NewQuote;