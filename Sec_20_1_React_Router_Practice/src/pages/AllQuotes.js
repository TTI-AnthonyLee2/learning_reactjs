import { useSelector } from "react-redux";

import QuoteList from "../components/quotes/QuoteList";

const AllQuotes = () => {
  const quotesList = useSelector(state => state.quotes.quotesList);

  return (
    <>
      <h1>All Quotes</h1>
      <QuoteList quotes={quotesList} />
    </>
  );
};

export default AllQuotes;