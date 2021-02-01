import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  
  html{
    height: 100%
  }
  
  body {
    margin: 0;
    padding: 0;
    background: #F2C1E5;
    min-height: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    font-family: 'Lato';
    -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyles;
