import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { controlDisabled } from './props'

import { Button, HeartIcon } from '../'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    buttonType: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    ...controlDisabled,
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary: ComponentStory<typeof Button> = (args) => <Template {...args}>Primary</Template>

export const Secondary: ComponentStory<typeof Button> = (args) => (
  <Template buttonType="secondary" {...args}>
    Secondary
  </Template>
)

export const WithLeftIcon: ComponentStory<typeof Button> = (args) => (
  <Template {...args} leftIcon={<HeartIcon />}>
    Left icon
  </Template>
)

export const WithRightIcon: ComponentStory<typeof Button> = (args) => (
  <Template {...args} rightIcon={<HeartIcon />}>
    Left icon
  </Template>
)
