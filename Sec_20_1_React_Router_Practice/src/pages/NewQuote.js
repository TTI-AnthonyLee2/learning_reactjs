import { useDispatch } from 'react-redux';
import QuoteForm from "../components/quotes/QuoteForm";
import { quotesActions } from '../store/quotesSlice';

const NewQuote = () => {
  const dispatch = useDispatch();

  const addQuoteHandler = (quote) => {
    dispatch(quotesActions.addQuote(quote));
  }

  return (
    <>
      <h1>New Quote</h1>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </>
  );
};

export default NewQuote;