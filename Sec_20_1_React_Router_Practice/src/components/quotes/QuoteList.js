import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import NoQuotesFound from './NoQuotesFound';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const SORT_TYPE = {
  ascending: 'asc',
  descending: 'desc'
}

const sortQuotes = (quotes, isAscending) => {
  return quotes.sort((a, b) => {
    if (isAscending) {
      return a.id > b.id ? 1 : -1;
    } else {
      return a.id < b.id ? 1 : -1;
    }
  });
}

const QuoteList = ({ quotes }) => {
  const history = useHistory();
  const { pathname, search } = useLocation();
  
  const isNoQuote = quotes.length === 0;
  
  const queryParams = new URLSearchParams(search);
  const isSortingAscending = queryParams.get('sort') === SORT_TYPE.ascending;
  
  // Array.sort() method will mutate the original quotes, and the quotes from Redux CANNOT be mutated.
  // So we do a shallow copy for quotes using spread syntax to avoid this.
  const sortedQuotes = sortQuotes([...quotes], isSortingAscending);
  
  const changeSortingHandler = () => {
    history.push({
      pathname: pathname,
      search: `sort=${isSortingAscending ? SORT_TYPE.descending : SORT_TYPE.ascending}`
    });
  };

  return (
    <Fragment>
      {
        isNoQuote ? 
        <NoQuotesFound />
        : 
        <>
          <div className={classes.sorting}>
            <button onClick={changeSortingHandler}>Sort {isSortingAscending ? 'Descending' : 'Ascending'}</button>
          </div>
          <ul className={classes.list}>
            {sortedQuotes.map((quote) => (
              <QuoteItem key={quote.id} {...quote} />
            ))}
          </ul>
        </>
      }
    </Fragment>
  );
};

export default QuoteList;
