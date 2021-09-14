import { createContext } from '../utils'
import { UseFlipCardReturn } from './use-flip-card'

const [FlipCardContextProvider, useFlipCardContext] = createContext<UseFlipCardReturn>({
  name: 'FlipCardContext',
  errorMessage: 'useFlipCardContext: `context` is undefined',
})

export { FlipCardContextProvider, useFlipCardContext }
