import * as React from 'react'
import { Box as ChakraBox } from '@chakra-ui/layout'
import { AnimatePresence, motion } from 'framer-motion'

import type { FlipCardProps as Props } from './types.d'
import { useFlipCard } from './use-flip-card'
import { useFlipCardContext, FlipCardContextProvider } from './context'

const Box: React.FC = (props) => (
  <motion.div
    initial={{ rotateY: -180 }}
    exit={{ rotateY: -180 }}
    animate={{ rotateY: 0 }}
    transition={{
      rotateY: {
        type: 'tween',
        stiffness: 80,
        damping: 20,
      },
    }}
    style={{
      position: 'absolute',
      backfaceVisibility: 'hidden',
    }}
  >
    {props.children}
  </motion.div>
)

export const FlipCard = (props: Props) => {
  const context = useFlipCard()

  console.log('ctx', context.face)

  return (
    <FlipCardContextProvider value={context}>
      <ChakraBox position="relative">
        <AnimatePresence>
          {context.face === 'front' && <Box key={0}>{props.front}</Box>}
          {context.face === 'back' && <Box key={1}>{props.back}</Box>}
        </AnimatePresence>
      </ChakraBox>
    </FlipCardContextProvider>
  )
}

export const FlipCardTrigger: React.FC = (props) => {
  const { getTriggerProps } = useFlipCardContext()
  const child: any = React.Children.only(props.children)
  return React.cloneElement(child, getTriggerProps(child.props, child.ref))
}
