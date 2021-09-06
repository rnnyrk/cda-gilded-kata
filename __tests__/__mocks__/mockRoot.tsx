import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';

import theme from 'styles/theme';

export const MockRootWrapper: React.FC = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <MemoryRouter>
        {children}
      </MemoryRouter>
    </ThemeProvider>
    <div id="modal" />
  </>
);
