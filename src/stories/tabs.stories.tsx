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
  'Tab 1': <Box m={1} backgroundColor="red.200" h="300px" p={2} borderRadius={4} />,
  'Tab 2': <Box m={1} backgroundColor="red.300" h="300px" p={2} borderRadius={4} />,
  'Tab 3': <Box m={1} backgroundColor="red.400" h="300px" p={2} borderRadius={4} />,
  'Tab 4': <Box m={1} backgroundColor="red.500" h="300px" p={2} borderRadius={4} />,
  'Tab 5': <Box m={1} backgroundColor="red.600" h="300px" p={2} borderRadius={4} />,
  'Tab 6': <Box m={1} backgroundColor="red.700" h="300px" p={2} borderRadius={4} />,
  'Tab 7': <Box m={1} backgroundColor="purple.700" h="300px" p={2} borderRadius={4} />,
  'Tab 8': <Box m={1} backgroundColor="purple.700" h="300px" p={2} borderRadius={4} />,
  'Tab 9': <Box m={1} backgroundColor="purple.700" h="300px" p={2} borderRadius={4} />,
  'Tab 10': <Box m={1} backgroundColor="purple.700" h="300px" p={2} borderRadius={4} />,
}

export const Example = () => {
  return (
    <>
      <Tabs tabs={tabs} />
    </>
  )
}
