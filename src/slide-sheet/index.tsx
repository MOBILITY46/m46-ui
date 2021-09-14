import * as React from 'react'
import { createPortal } from 'react-dom'
import { Props } from './types'
import { SlideSheetComponent } from './component'

export { Props as SlideSheetProps } from './types'

export const SlideSheet = ({ id = 'default', maskClosable = true, ...props }: Props) => {
  const elementId = `m46-slide-sheet-${id}`

  if (typeof window !== 'undefined') {
    document?.getElementById?.(elementId)?.remove()
    const containerDomNode = document.createElement('div')
    containerDomNode.setAttribute('id', elementId)
    document?.body.appendChild(containerDomNode)

    return createPortal(<SlideSheetComponent id={elementId} maskClosable={maskClosable} {...props} />, containerDomNode)
  } else {
    return null
  }
}
