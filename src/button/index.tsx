import * as React from 'react'
import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react'
import { MotionButton } from '../motion'

interface Props extends ButtonProps {
  buttonType?: 'primary' | 'secondary'
  withAnimation?: boolean
}

export const Button: React.FC<Props> = React.forwardRef<React.Ref<HTMLButtonElement>, Props>((props, ref) => {
  const t = props.buttonType || 'primary'

  const p = Object.assign({}, props, {
    variant: t === 'secondary' ? 'outline' : 'solid',
    borderRadius: '2px',
    fontWeight: 400,
    colorScheme: 'black',
    _active: {
      textColor: t === 'secondary' && '#000',
    },
    style: {
      perspective: '1px',
      backfaceVisibility: 'hidden',
    },
  })

  delete p.buttonType
  delete p.withAnimation
  if (props.withAnimation) {
    return (
      <ChakraButton
        ref={ref}
        as={MotionButton}
        transition={{ type: 'tween' }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.9 }}
        {...p}
      />
    )
  } else {
    return <ChakraButton ref={ref} {...p} />
  }
})
