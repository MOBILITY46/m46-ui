import { Box, BoxProps, Flex, FlexProps } from '@chakra-ui/layout'
import { Button, ButtonProps } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const MotionBox = motion<BoxProps>(Box)
export const MotionFlex = motion<FlexProps>(Flex)
export const MotionButton = motion<ButtonProps>(Button)
