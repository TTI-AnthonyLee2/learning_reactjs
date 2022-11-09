import { useEffect } from "react";
import { Route, Link, useParams, useRouteMatch } from "react-router-dom";

import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NotFound from "./NotFound";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
  const { sendRequest, data: loadedQuote, status, error } = useHttp(getSingleQuote, true);
  const { quoteId } = useParams();
  const { path, url } = useRouteMatch();

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>
  }

  if (!loadedQuote) {
    return <NotFound />;
  }

  return (
    <>
      <HighlightedQuote {...loadedQuote} />
      <Route path={path} exact>
        <div className='centered'>
          <Link to={`${url}/comments`} className='btn--flat'>Show Comments</Link>
        </div>
      </Route>
      <Route path={`${path}/comments`}>
        <Comments quoteId={quoteId} />
      </Route>
    </>
  );
};

export default QuoteDetail;