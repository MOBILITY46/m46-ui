import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SlideSheet } from '../'

export default {
  title: 'Example/SlideSheet',
  component: SlideSheet,
} as ComponentMeta<typeof SlideSheet>

const Template: ComponentStory<typeof SlideSheet> = (_args) => <SlideSheet />

export const Default = Template.bind({})

/*
Default.args = {
  primary: true,
  label: 'Button',
}
*/
