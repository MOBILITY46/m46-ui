import { ChakraProvider, extendTheme, Box } from '@chakra-ui/react'
import '@fontsource/dm-sans'
import { theme } from '../src/theme'

export const Chakra = ({ children }) => (
  <ChakraProvider theme={theme}>
    {children}
  </ChakraProvider>
)

export const decorators = [
  Story => (
    <Chakra>
      {Story()}
    </Chakra>
  )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
