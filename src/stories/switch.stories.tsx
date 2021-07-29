import React from 'react'
import { VStack } from '@chakra-ui/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Switch } from '../'

export default {
  title: 'Components/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>

const Basic: ComponentStory<typeof Switch> = (args) => <Switch {...args} />

export const Variants = () => {
  return (
    <VStack align="flex-start" spacing={5}>
      <Basic />
    </VStack>
  )
}
