import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const QuoteDetail = () => {
  return (
    <>
      <h1>Quote Detail</h1>
      <HighlightedQuote />
      <Comments />
    </>
  );
};

export default QuoteDetail;