import { useSelector } from "react-redux";
import { Route, Link, useParams, useRouteMatch } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NotFound from "./NotFound";

const QuoteDetail = () => {
  const { quoteId } = useParams();
  const { path, url } = useRouteMatch();
  const quotesList = useSelector(state => state.quotes.quotesList);

  const quote = quotesList.find(quote => quote.id === quoteId);

  if (!quote) {
    return <NotFound />;
  }

  return (
    <>
      <HighlightedQuote {...quote} />
      <Route path={path} exact>
        <div className='centered'>
          <Link to={`${url}/comments`} className='btn--flat'>Show Comments</Link>
        </div>
      </Route>
      <Route path={`${path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;