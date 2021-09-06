import 'styled-components';

const theme = {
  colors: {
    pale: '#F6F6F5',
    gray: '#DDDDDD',
    green: '#00FCBD',
    blue: '#2F1CFF',
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
