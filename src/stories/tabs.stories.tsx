import * as React from 'react'
import { Box } from '@chakra-ui/react'

import { ComponentMeta } from '@storybook/react'
import { controlDisabled } from './props'

import { Tabs } from '../'

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    ...controlDisabled,
  },
} as ComponentMeta<typeof Tabs>

const tabs = {
  'Tab 1': <Box backgroundColor="red.200" w="100%" h="300px" p={2} borderRadius={4} />,
  'Tab 2': <Box backgroundColor="red.300" w="100%" h="300px" p={2} borderRadius={4} />,
  'Tab 3': <Box backgroundColor="red.400" w="100%" h="300px" p={2} borderRadius={4} />,
  'Tab 4': <Box backgroundColor="red.500" w="100%" h="300px" p={2} borderRadius={4} />,
  'Tab 5': <Box backgroundColor="red.600" w="100%" h="300px" p={2} borderRadius={4} />,
  'Tab 6': <Box backgroundColor="red.700" w="100%" h="300px" p={2} borderRadius={4} />,
}

export const Example = () => {
  return (
    <>
      <Tabs tabs={tabs} />
    </>
  )
}
