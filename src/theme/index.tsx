import * as React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    black: {
      100: '#2e2e2e',
      200: '#2e2e2e',
      300: '#2e2e2e',
      400: '#262626',
      500: '#262626',
      600: '#2D3748',
      700: '#1A202C',
      800: '#212121',
      900: '#000000',
    },
  },
})

export const UIProvider: React.FC = ({ children }) => <ChakraProvider theme={theme}>{children}</ChakraProvider>
