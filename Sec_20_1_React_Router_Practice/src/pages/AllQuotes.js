import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";

import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import { quotesActions } from "../store/quotesSlice";

const AllQuotes = () => {
  const { sendRequest, data: allQuotes, status, error } = useHttp(getAllQuotes, true);
  const quotesList = useSelector(state => state.quotes.quotesList);
  const dispatch = useDispatch();

  useEffect(() => {
    sendRequest();
    // dispatch(quotesActions.replaceAllQuotes(allQuotes));
  }, [sendRequest, dispatch]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === 'completed' && error) {
    return <p>{error}</p>
  }

  return (
    <>
      <QuoteList quotes={allQuotes} />
    </>
  );
};

export default AllQuotes;