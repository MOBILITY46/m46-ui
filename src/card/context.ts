import { createContext } from '../utils'
import type { UseFlipCardReturn } from './use-flip-card'

const [FlipCardContextProvider, useFlipCardContext] = createContext<UseFlipCardReturn>({
  strict: true,
  name: 'FlipCardContext',
  errorMessage: 'useFlipCardContext: `context` is undefined',
})

export { FlipCardContextProvider, useFlipCardContext }
