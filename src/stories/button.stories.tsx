import React from 'react'
import { VStack, Icon } from '@chakra-ui/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '../'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Variants = () => {
  return (
    <VStack align="flex-start" spacing={5}>
      <Template>Default</Template>
      <Template>Primary</Template>
      <Template buttonType="secondary">Secondary</Template>
      <Template size="xs" buttonType="primary">
        Small
      </Template>
      <Template size="lg" buttonType="primary">
        Large
      </Template>
      <Template size="lg" buttonType="primary" withAnimation>
        Animated
      </Template>

      <Template leftIcon={<Icon />} buttonType="primary">
        With left icon
      </Template>
      <Template leftIcon={<Icon />} buttonType="secondary">
        With left icon
      </Template>
      <Template rightIcon={<Icon />} buttonType="primary">
        With right icon
      </Template>
      <Template rightIcon={<Icon />} buttonType="secondary">
        With right icon
      </Template>
      <Template isLoading={true} buttonType="primary">
        Loading
      </Template>
      <Template isLoading={true} buttonType="secondary">
        Loading
      </Template>
      <Template isDisabled={true} buttonType="primary">
        Disabled
      </Template>
      <Template isDisabled={true} buttonType="secondary">
        Disabled
      </Template>
    </VStack>
  )
}
