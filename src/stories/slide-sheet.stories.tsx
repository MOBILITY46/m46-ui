import * as React from 'react'
import { useState } from 'react'

import { ComponentMeta } from '@storybook/react'
import { controlDisabled } from './props'

import { SlideSheet, Button } from '../'

export default {
  title: 'Components/SlideSheet',
  component: SlideSheet,
  argTypes: {
    ...controlDisabled,
  },
} as ComponentMeta<typeof SlideSheet>

const style = {
  content: {
    height: '80vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: 'blue',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  },
}

export const Example = (args: any) => {
  const [show, setShow] = useState(false)

  return (
    <>
      <Button mr={3} onClick={() => setShow(!show)}>
        toggle
      </Button>
      {show && (
        <SlideSheet isOpen={show} onClose={() => setShow(false)} {...args}>
          <div style={style.content}>Hello, World!</div>
        </SlideSheet>
      )}
    </>
  )
}
