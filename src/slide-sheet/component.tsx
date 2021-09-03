import * as React from 'react'
import { useRef, useState, useEffect } from 'react'
import { animate, AnimatePresence, useDragControls, useMotionValue } from 'framer-motion'

import { Wrapper, DraggableContainer, Sheet, Content, Mask } from './styles'

import type { Props } from './types'

export const SlideSheetComponent = ({ children, isOpen, id, debug, maskClosable, ...props }: Props): JSX.Element => {
  const sheetY = useMotionValue(0)
  const [sheetHeight, setSheetHeight] = useState(0)
  const controls = useDragControls()

  const sheetRef = useRef<HTMLDivElement>(null)

  const handleClose = () => {
    props.onClose()
  }

  useEffect(() => {
    setSheetHeight(sheetRef?.current?.offsetHeight ?? 0)
  }, [sheetRef, isOpen])

  const maxDrag = sheetHeight / 3

  const removeToDom = () => {
    if (typeof window !== 'undefined') {
      document?.getElementById?.(id!)?.remove()
    }
  }

  return (
    <>
      <AnimatePresence onExitComplete={() => removeToDom()}>
        {isOpen && (
          <Wrapper
            transition={{ duration: 0.2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <DraggableContainer
              id="draggable-container"
              ref={sheetRef}
              style={{
                y: sheetY,
              }}
              drag="y"
              dragControls={controls}
              variants={{
                visible: { y: 0 },
                hidden: { y: sheetHeight },
              }}
              dragConstraints={{
                top: 0,
                bottom: sheetHeight,
              }}
              onDragStart={(e, info) => {
                if (!sheetRef?.current?.contains(e.target as HTMLDivElement)) {
                  // @ts-ignore
                  controls?.componentControls.forEach((entry) => {
                    entry.stop(e, info)
                  })
                }
              }}
              onDragEnd={() => {
                if (sheetY.get() < maxDrag) {
                  animate(sheetY, 0, { type: 'spring' })
                } else {
                  animate(sheetY, sheetHeight, { type: 'spring' })
                  setTimeout(() => {
                    handleClose()
                  }, 500)
                }
              }}
            >
              <Mask
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                exit={{ opacity: 0 }}
                debug={debug}
                {...(maskClosable
                  ? {
                      onTap: () => {
                        animate(sheetY, sheetHeight, { type: 'spring' })
                        handleClose()
                      },
                    }
                  : {})}
              />
              <Sheet
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{
                  duration: 0.2,
                }}
              >
                <Content>{children}</Content>
              </Sheet>
            </DraggableContainer>
          </Wrapper>
        )}
        {!isOpen && <div />}
      </AnimatePresence>
    </>
  )
}
