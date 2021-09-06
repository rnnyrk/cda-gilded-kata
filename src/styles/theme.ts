import 'styled-components';

const theme = {
  colors: {
    pale: '#F6F6F5',
    gray: '#DDDDDD',
    yellow: '#D6991F',
    purple: '#663B89',
    black: '#000000',
    white: '#FFFFFF',
  },

  ui: {
    borderRadius: {
      default: '8px',
    },
    shadows: {
      default: '0 15px 30px rgba(0, 0, 0, .1)',
    },
  },

  fonts: {
    poppins: '"Poppins", sans-serif',
  },
} as const;

export default theme;
