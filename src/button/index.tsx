import * as React from 'react'
import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/react'

export interface ButtonProps extends ChakraButtonProps {
  buttonType?: 'primary' | 'secondary'
}

/**
 * A Chakra button with some overridden values.
 */

export const Button = ({ buttonType, ...props }: ButtonProps) => {
  const t = buttonType || 'primary'

  const p = Object.assign({}, props, {
    variant: t === 'secondary' ? 'outline' : 'solid',
    borderRadius: '2px',
    fontWeight: 400,
    colorScheme: 'black',
    _active: {
      textColor: t === 'secondary' && '#000',
    },
  })

  return <ChakraButton {...p} />
}
