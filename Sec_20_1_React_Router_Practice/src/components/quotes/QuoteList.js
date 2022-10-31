import { Fragment } from 'react';

import NoQuotesFound from './NoQuotesFound';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = ({ quotes }) => {
  const isNoQuote = quotes.length === 0;
  
  return (
    <Fragment>
      {
        isNoQuote ? 
        <NoQuotesFound />
        : 
        <ul className={classes.list}>
          {quotes.map((quote) => (
            <QuoteItem
              key={quote.id}
              id={quote.id}
              author={quote.author}
              text={quote.text}
            />
          ))}
        </ul>
      }
    </Fragment>
  );
};

export default QuoteList;
