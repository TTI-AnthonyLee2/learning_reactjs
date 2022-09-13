import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-family: 'Noto Sans JP', sans-serif;
  }

  body {
    margin: 0;
    background-color: ${({ theme }) => theme.colors.body.basic}
  }
`;

export default GlobalStyles;