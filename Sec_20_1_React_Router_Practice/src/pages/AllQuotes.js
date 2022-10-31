import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: 'q1',
    author: 'John',
    text: 'This is a good choice.'
  },
  {
    id: 'q2',
    author: 'John',
    text: 'This is a good choice.'
  },
];

const AllQuotes = () => {
  return (
    <>
      <h1>All Quotes</h1>
      <QuoteList quotes={DUMMY_QUOTES} />
    </>
  );
};

export default AllQuotes;