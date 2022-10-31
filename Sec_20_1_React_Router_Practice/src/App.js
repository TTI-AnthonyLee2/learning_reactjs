import { Route, Switch, Redirect } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import classes from './components/layout/Layout.module.css';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes'/>
          </Route>
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
    </>
  );
}

export default App;
