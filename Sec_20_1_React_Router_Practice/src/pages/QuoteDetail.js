import { useSelector } from "react-redux";
import { Route, Link, useParams } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NotFound from "./NotFound";

const QuoteDetail = () => {
  const { quoteId } = useParams();
  const quotesList = useSelector(state => state.quotes.quotesList);

  const quote = quotesList.find(quote => quote.id === quoteId);

  if (!quote) {
    return <NotFound />;
  }

  return (
    <>
      <HighlightedQuote {...quote} />
      <div className="centered">
        <Link to={`/quotes/${quoteId}/comments`} className=" btn--flat">Show Comments</Link>
      </div>
      <Route path='/quotes/:quoteId/comments'>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;