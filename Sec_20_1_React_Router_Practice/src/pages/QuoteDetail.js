import { useSelector } from "react-redux";
import { Route, useParams } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const QuoteDetail = () => {
  const { quoteId } = useParams();
  const quotesList = useSelector(state => state.quotes.quotesList);

  const quote = quotesList.find(quote => quote.id === quoteId);

  return (
    <>
      <HighlightedQuote {...quote} />
      <Route path='/quotes/:quoteId/comments'>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;