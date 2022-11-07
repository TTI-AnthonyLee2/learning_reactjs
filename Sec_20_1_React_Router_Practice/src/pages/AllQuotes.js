import { useSelector } from "react-redux";

import QuoteList from "../components/quotes/QuoteList";

const AllQuotes = () => {
  const quotesList = useSelector(state => state.quotes.quotesList);

  return (
    <>
      <QuoteList quotes={quotesList} />
    </>
  );
};

export default AllQuotes;