import { useCallback, useState } from 'react'
import { callAllHandlers } from '../utils'

export type CardFace = 'front' | 'back'

export function useFlipCard() {
  const [face, setFace] = useState<CardFace>('front')

  const getTriggerProps = useCallback(
    (props = {}, _ref = null) => ({
      ...props,
      onClick: callAllHandlers((_event) => {
        setFace((f) => (f === 'front' ? 'back' : 'front'))
      }),
    }),
    [],
  )

  return {
    face,
    getTriggerProps,
  }
}

export type UseFlipCardReturn = ReturnType<typeof useFlipCard>
