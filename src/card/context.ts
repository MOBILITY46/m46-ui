import { createContext } from '../utils'
import type { UseCardReturn } from './use-card'

const [CardContextProvider, useCardContext] = createContext<UseCardReturn>({
  strict: true,
  name: 'CardContext',
  errorMessage: 'useCardContext: `context` is undefined. Seems you forgot to wrap card components in `<Card />`',
})

export { CardContextProvider, useCardContext }
