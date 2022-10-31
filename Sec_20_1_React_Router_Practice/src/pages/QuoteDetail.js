import { Route, useParams } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const QuoteDetail = () => {
  const { quoteId } = useParams();

  return (
    <>
      <h1>Quote Detail</h1>
      <p>{quoteId}</p>
      <Route path='/quotes/:quoteId/comments'>
        <HighlightedQuote />
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;