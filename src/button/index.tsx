import * as React from 'react'
import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react'

interface Props {
  buttonType?: 'primary' | 'secondary'
}

export const Button = (props: Props & ButtonProps) => {

  const t = props.buttonType || 'primary'

  return (
    <ChakraButton
      {...props}
      borderRadius="2px"
      fontWeight="400"
      variant={t === 'primary' ? 'solid' : 'outline'}
      colorScheme="black"
      _active={{ textColor: t === 'secondary' && '#000' }}
      >
      {props.children}
    </ChakraButton>
  )
}
