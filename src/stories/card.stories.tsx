import * as React from 'react'

import { Heading } from '@chakra-ui/react'
import { ComponentMeta } from '@storybook/react'
import Lorem from 'react-lorem-ipsum'

import { Card, FlipCard, Button, CardFlipTrigger } from '../'

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>

export const Basic = () => {
  return (
    <Card
      content={{
        header: <Heading>Heading</Heading>,
        body: <Lorem p={4} />,
        footer: <Button>klick me</Button>,
      }}
    />
  )
}

export const WithTwoSides = () => {
  return (
    <FlipCard
      content={[
        {
          header: <Heading>Heading</Heading>,
          body: <Lorem p={4} />,
          footer: (
            <CardFlipTrigger>
              <Button>Custom flip trigger</Button>
            </CardFlipTrigger>
          ),
        },
        {
          header: <Heading>Heading</Heading>,
          body: <Lorem p={4} />,
          footer: (
            <CardFlipTrigger>
              <Button>Back to front</Button>
            </CardFlipTrigger>
          ),
        },
      ]}
    />
  )
}
