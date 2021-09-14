import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button, HeartIcon } from '../src'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    colorScheme: {
      options: ['primary', 'secondary', 'tertiary'],
    },
    variant: {
      options: ['solid', 'ghost', 'outline', 'link'],
    },
    rounded: {
      options: [true, false],
    },
    leftIcon: { table: { disable: true } },
    rightIcon: { table: { disable: true } },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => {
  console.log('args', args)
  return <Button {...args} />
}

export const Default: ComponentStory<typeof Button> = (args) => <Template {...args}>Default</Template>

export const WithLeftIcon: ComponentStory<typeof Button> = (args) => (
  <Template {...args} leftIcon={<HeartIcon />}>
    Left icon
  </Template>
)

export const WithRightIcon: ComponentStory<typeof Button> = (args) => (
  <Template {...args} rightIcon={<HeartIcon />}>
    Right icon
  </Template>
)
