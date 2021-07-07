import { ChakraProvider, extendTheme, Box } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    black: {
      100: "#2e2e2e",
      200: "#2e2e2e",
      300: "#2e2e2e",
      400: "#262626",
      500: "#262626",
      600: "#2D3748",
      700: "#1A202C",
      800: "#212121",
      900: "#000000",
    },
  },
})

export const Chakra = ({ children }) => (
  <ChakraProvider theme={theme}>
    <Box p={5}>
      {children}
    </Box>
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
