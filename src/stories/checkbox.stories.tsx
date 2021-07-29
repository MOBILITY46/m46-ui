import React from 'react'
import { VStack } from '@chakra-ui/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Checkbox } from '../'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Basic: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />

export const Variants = () => {
  return (
    <VStack align="flex-start" spacing={5}>
      <Basic size={'24px'} />
      <Basic size={'48px'} />
      <Basic size={'94px'} />
      <Basic size={'188px'} />
    </VStack>
  )
}
