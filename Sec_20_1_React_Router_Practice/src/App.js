import { Route, Switch } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import classes from './components/layout/Layout.module.css';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';

function App() {
  return (
    <main className={classes.main}>
      <Switch>
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>
        <Route path='/quotes/:quoteId'>
          <QuoteDetail />
        </Route>
        <Route path='/new-quote'>
          <NewQuote />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
