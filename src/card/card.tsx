import * as React from 'react'
import { Box } from '@chakra-ui/layout'
import styled from '@emotion/styled'
import { MotionBox } from '../motion'
import { AnimatePresence } from 'framer-motion'

import type { CardProps } from './types.d'
import { useCard } from './use-card'
import { useCardContext, CardContextProvider } from './context'

const CardWrapper = styled(MotionBox)`
  display: grid;
  grid-template-rows: minmax(min-content, 2rem) auto minmax(min-content, 2rem);
  overflow: hidden;
  width: 320px;
  height: 420px;
  margin: 1rem;
  transform-style: preserve-3d;

  box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
`

const BodyWrapper = styled(MotionBox)`
  height: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
  padding: 10px;
  background-color: #fff;

  &::-webkit-scrollbar {
    display: none;
  }
`

const HeaderWrapper = styled(MotionBox)`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
  cursor: move; /* fallback if grab cursor is unsupported */
  cursor: grab;
`

const FooterWrapper = styled(MotionBox)`
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f5f5;
  border-top: 1px solid #e5e5e5;
`

export const Card = (props: CardProps) => {
  return (
    <CardWrapper
      role="card"
      drag
      dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
      initial={{ rotateY: -180 }}
      exit={{ rotateY: -180 }}
      animate={{ rotateY: 0 }}
      transition={{ type: 'tween' }}
      style={{
        WebkitBackfaceVisibility: 'hidden',
      }}
    >
      <HeaderWrapper>{props.content.header}</HeaderWrapper>
      <BodyWrapper>{props.content.body}</BodyWrapper>
      <FooterWrapper>{props.content.footer}</FooterWrapper>
    </CardWrapper>
  )
}

export const FlipCard = (props: CardProps) => {
  const context = useCard()
  return (
    <CardContextProvider value={context}>
      <AnimatePresence>
        {context.face === 'front' && (
          <Box position="relative">
            <Card key={0} {...props} content={props.content[0]} />
          </Box>
        )}
        {context.face === 'back' && (
          <Box position="relative">
            <Card key={1} {...props} content={props.content[1]} />
          </Box>
        )}
      </AnimatePresence>
    </CardContextProvider>
  )
}

export const CardFlipTrigger: React.FC = (props) => {
  const { getTriggerProps } = useCardContext()
  const child: any = React.Children.only(props.children)
  return React.cloneElement(child, getTriggerProps(child.props, child.ref))
}

CardFlipTrigger.displayName = 'CardFlipTrigger'
