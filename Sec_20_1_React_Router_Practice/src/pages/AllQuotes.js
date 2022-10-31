import { useSelector } from "react-redux";

import QuoteList from "../components/quotes/QuoteList";

// const DUMMY_QUOTES = [
//   {
//     id: 'q1',
//     author: 'John',
//     text: 'This is a good choice.'
//   },
//   {
//     id: 'q2',
//     author: 'John',
//     text: 'This is a good choice.'
//   },
// ];

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