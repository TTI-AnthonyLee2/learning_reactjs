import { Route, Switch } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import classes from './components/layout/Layout.module.css';

function App() {
  return (
    <main className={classes.main}>
      <Switch>
        <Route to='/quotes'>
          <AllQuotes />
        </Route>
        <Route to='/quotes/:quoteId'></Route>
        <Route to='/new-quote'></Route>
      </Switch>
    </main>
  );
}

export default App;
