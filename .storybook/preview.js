import { UIProvider } from '../src/theme'

export const Chakra = ({ children }) => (
  <ChakraProvider theme={theme}>
    {children}
  </ChakraProvider>
)

export const decorators = [
  Story => (
    <UIProvider>
      {Story()}
    </UIProvider>
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
