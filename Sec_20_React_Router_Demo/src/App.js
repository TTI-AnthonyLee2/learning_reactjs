import { Route } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import Products from './pages/Products';
import Welcome from './pages/Welcome';

function App() {
  return (
    <>
      <MainHeader />
      <Route path='/welcome'>
        <Welcome />
      </Route>
      <Route path='/products'>
        <Products />
      </Route>
    </>
  );
}

export default App;
