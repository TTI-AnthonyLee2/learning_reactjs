import { Route, Switch } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import classes from './components/layout/Layout.module.css';

function App() {
  return (
    <main className={classes.main}>
      <Switch>
        <Route path='/quotes'>
          <AllQuotes />
        </Route>
        <Route path='/quotes/:quoteId'></Route>
        <Route path='/new-quote'></Route>
      </Switch>
    </main>
  );
}

export default App;
