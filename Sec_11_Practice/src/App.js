import { Helmet } from 'react-helmet';
import GlobalStyles from './styles/Global';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');
        </style>
      </Helmet>
      <GlobalStyles />
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </ThemeProvider>
  );
}

export default App;
