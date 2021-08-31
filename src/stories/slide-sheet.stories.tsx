import * as React from 'react'
import { useRef } from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { SlideSheet, SlideSheetRef, Button } from '../'

export default {
  title: 'Components/SlideSheet',
  component: SlideSheet,
  argTypes: {
    mouseEnable: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof SlideSheet>

const style = {
  content: {
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  },
}

export const Example: ComponentStory<typeof SlideSheet> = (args) => {
  const ref = useRef<SlideSheetRef>()

  const handleToggle = () => {
    if (ref.current) ref.current.toggle()
  }

  return (
    <>
      <Button mr={3} onClick={handleToggle}>
        toggle
      </Button>
      <SlideSheet ref={ref} {...args}>
        <div style={style.content}>🙂 Hai</div>
      </SlideSheet>
    </>
  )
}
