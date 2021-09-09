import ResizeObserver from 'resize-observer-polyfill'
import { useCallbackRef } from './use-callback-ref'
import { useState, useLayoutEffect } from 'react'

export function useMeasure() {
  const [element, attachRef] = useCallbackRef()
  const [bounds, setBounds] = useState({})

  useLayoutEffect(() => {
    function onResize([entry]: ResizeObserverEntry[]) {
      const { width, height } = entry.contentRect
      setBounds({
        height,
        width,
      })
    }

    const observer = new ResizeObserver(onResize)

    if (element) {
      observer.observe(element as any)
    }

    return () => {
      observer.disconnect()
    }
  }, [element])

  return {
    bounds,
    ref: attachRef,
  }
}
