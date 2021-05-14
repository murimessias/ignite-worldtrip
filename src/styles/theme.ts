import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    yellow: {
      500: '#FFBA08',
    },
    gray: {
      300: '#999999',
      600: '#47585B',
    },
  },

  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
  },

  styles: {
    global: {
      body: {
        color: 'gray.600',
        bg: 'gray.50',
      },
    },
  },
});
