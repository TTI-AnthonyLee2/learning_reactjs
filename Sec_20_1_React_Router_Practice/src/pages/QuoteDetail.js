import { useState } from "react";
import { useSelector } from "react-redux";
import { Route, useHistory, useParams } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import FlatButton from "../components/UI/FlatButton";
import NotFound from "./NotFound";

const QuoteDetail = () => {
  const [showComments, setShowComments] = useState(false);
  const { quoteId } = useParams();
  const quotesList = useSelector(state => state.quotes.quotesList);
  const history = useHistory();

  const quote = quotesList.find(quote => quote.id === quoteId);

  if (!quote) {
    return <NotFound />;
  }

  const showCommentsHandler = () => {
    setShowComments(true);
    history.replace(`/quotes/${quoteId}/comments`);
  };

  return (
    <>
      <HighlightedQuote {...quote} />
      { !showComments && <FlatButton onClick={showCommentsHandler}>Show Comments</FlatButton>}
      <Route path='/quotes/:quoteId/comments'>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;