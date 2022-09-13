import Header from './components/Layout/Header';

import { Helmet } from 'react-helmet';
import GlobalStyles from './styles/Global';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');
        </style>
      </Helmet>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
}

export default App;
