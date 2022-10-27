import { Route } from 'react-router-dom';
import About from './pages/About';
import Welcome from './pages/Welcome';

function App() {
  return (
    <>
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
