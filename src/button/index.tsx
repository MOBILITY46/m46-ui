import * as React from 'react'
import { FC } from 'react'
import { Button as ChakraButton, StyleProps, ButtonProps as ChakraButtonProps } from '@chakra-ui/react'
import { Color } from '../theme'

export interface ButtonProps {
  colorScheme?: Color
  variant?: 'solid' | 'outline' | 'link' | 'ghost'
  rounded?: boolean
  leftIcon?: JSX.Element
  rightIcon?: JSX.Element
  size?: 'lg' | 'md' | 'sm' | 'xs'
}

/**
 * A Chakra button with some overridden values.
 */

export const Button: FC<ButtonProps & StyleProps & ChakraButtonProps> = ({
  colorScheme = 'primary',
  variant = 'solid',
  rounded = true,
  ...props
}: ButtonProps) => {
  const p = Object.assign({}, props, {
    variant,
    fontSize: '1.125rem',
    borderRadius: rounded ? '10px' : 0,
    fontWeight: 500,
    colorScheme,
  })

  return <ChakraButton {...p} />
}
