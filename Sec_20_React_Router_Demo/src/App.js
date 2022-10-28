import { Route } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import About from './pages/About';
import Welcome from './pages/Welcome';

function App() {
  return (
    <>
      <MainHeader />
      <Route path='/welcome' >
        <Welcome />
      </Route>
      <Route path='/about' >
        <About />
      </Route>
    </>
  );
}

export default App;
