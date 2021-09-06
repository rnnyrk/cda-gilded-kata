import { createGlobalStyle } from 'styled-components';

import theme from './theme';

const globalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    min-height: 100%;
    height: 100%;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: ${theme.fonts.poppins};
    background-color: ${theme.colors.pale};
  }
`;

export default globalStyle;
