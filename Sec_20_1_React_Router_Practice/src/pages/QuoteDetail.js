import { useParams } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const QuoteDetail = () => {
  const { quoteId } = useParams();

  console.log(quoteId);

  return (
    <>
      <h1>Quote Detail</h1>
      <HighlightedQuote />
      <Comments />
    </>
  );
};

export default QuoteDetail;