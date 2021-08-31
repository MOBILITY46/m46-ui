import * as React from 'react'
import { ReactNode, forwardRef, useRef, useState, useCallback, useEffect, useImperativeHandle } from 'react'
import { BoxProps, Box } from '@chakra-ui/react'

// TODO: This is not optimal. Use framer

/* TODO:
The logic to stop the backgroud from scrolling is not implemented in
this package just to keep it simple. To avoid the background from
scrolling you can toggle the overflow property of the body tag,
or you can also use some other way of your choice.
 */

/* TODO:
Phones may have a "scroll to refresh"-feature. Turn this off when
SlideSheet is open by applying overscroll-behavior: contain; to body.
*/

export interface SlideSheetProps {
  onClose(): void
  children?: ReactNode | ReactNode[]
  boxProps?: BoxProps
  mouseEnable?: boolean
  touchEnable?: boolean
  threshold?: number
  opacity?: number
  zIndex?: number
  closeOnBgTap?: boolean
  bgTransition?: string
  sheetTransition?: string
}

export interface SlideSheetRef {
  open(): void
  close(): void
  toggle(): void
}

export const SlideSheet = forwardRef<SlideSheetRef | null | undefined, SlideSheetProps>(
  (
    {
      bgTransition = 'opacity 0.5s ease-in-out, z-index 0.5s ease-in-out',
      sheetTransition = 'transform 0.3s ease-in-out',
      opacity = 1,
      zIndex = 998,
      onClose,
      closeOnBgTap = true,
      threshold = 50,
      children,
      mouseEnable,
      touchEnable,
      boxProps,
    }: SlideSheetProps,
    ref,
  ): JSX.Element => {
    const [show, setShow] = useState(false)
    const [pressed, setPressed] = useState(false)
    const sheetRef = useRef<HTMLDivElement>(null)
    const animationRef = useRef(0)
    const masterOffset = useRef(0)
    const startY = useRef(0)

    useImperativeHandle(ref, () => ({
      open(): void {
        setShow(true)
      },
      close(): void {
        setShow(false)
      },
      toggle(): void {
        setShow(!show)
      },
    }))

    const BgClick = () => {
      setShow(false)
      if (onClose) onClose()
    }

    const requestSheetDown = useCallback((): boolean => {
      if (null !== sheetRef.current) {
        sheetRef.current.style.transform = 'translate3d(0, 101%, 0)'
        return true
      }
      return false
    }, [])

    const requestSheetUp = useCallback((): boolean => {
      if (sheetRef.current) {
        sheetRef.current.style.transform = `translate3d(0, 0%, 0)`
        return true
      }
      return false
    }, [])

    useEffect(() => {
      if (show) {
        requestSheetUp()
      } else {
        requestSheetDown()
      }
    }, [requestSheetDown, requestSheetUp, show])

    const onSwipeMove = (event: React.TouchEvent<HTMLDivElement>) => {
      event.stopPropagation()
      if (pressed) {
        const offset = event.touches[0].clientY - startY.current
        move(offset)
      }
    }

    const onMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      event.stopPropagation()
      if (pressed) {
        const offset = event.clientY - startY.current
        move(offset)
      }
    }

    const move = (offset: number): boolean => {
      if (offset > 20) {
        masterOffset.current = offset
        animationRef.current = requestAnimationFrame(updatePosition)
        return true
      }
      return false
    }

    const updatePosition = (): boolean => {
      if (animationRef.current) {
        if (sheetRef.current) {
          sheetRef.current.style.transform = `translate3d(0, ${masterOffset.current}px, 0)`
          return true
        }
      }
      return false
    }

    const onSwipeStart = (event: React.TouchEvent<HTMLDivElement>): void => {
      startY.current = event.touches[0].clientY
      changePressed(true)
    }

    const onMouseStart = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
      startY.current = event.clientY
      changePressed(true)
    }

    const changePressed = (x: boolean): void => {
      setPressed(x)
    }

    const onSwipeEnd = (): void => {
      cancelAnimationFrame(animationRef.current)
      setPressed(false)
      if (Math.abs(masterOffset.current) > threshold) {
        setShow(false)
        if (onClose) onClose()
      } else {
        requestSheetUp()
      }
      masterOffset.current = 0
    }

    return (
      <>
        <div
          onClick={closeOnBgTap ? BgClick : undefined}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            backfaceVisibility: 'hidden',
            transition: bgTransition,
            opacity: show ? opacity : 0,
            zIndex: show ? zIndex : -1,
          }}
        />
        <Box
          ref={sheetRef}
          transform="translate3d(0, 101%, 0)"
          w="100%"
          position="fixed"
          overflow="hidden"
          bottom="0"
          left="0"
          maxH="80vh"
          {...boxProps}
          zIndex={zIndex + 1}
          transition={pressed ? 'transform 0.05s linear' : sheetTransition}
          onMouseDown={mouseEnable ? onMouseStart : () => undefined}
          onMouseMove={mouseEnable ? onMouseMove : () => undefined}
          onMouseUp={mouseEnable ? onSwipeEnd : () => undefined}
          onTouchStart={touchEnable ? onSwipeStart : () => undefined}
          onTouchMove={touchEnable ? onSwipeMove : () => undefined}
          onTouchEnd={touchEnable ? onSwipeEnd : () => undefined}
        >
          {children ? children : <div style={{ height: 150 }} />}
        </Box>
      </>
    )
  },
)

SlideSheet.displayName = 'SlideSheet'
