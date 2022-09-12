import Header from './components/Layout/Header';

import { ThemeProvider } from 'styled-components';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
