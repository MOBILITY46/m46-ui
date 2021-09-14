import * as React from 'react'

import { Heading, Box, Text } from '@chakra-ui/react'
import { ComponentMeta } from '@storybook/react'
import Lorem from 'react-lorem-ipsum'
import faker from 'faker'

import { Card, FlipCard, Button, FlipCardTrigger } from '../src'

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

export const Flip = () => {
  return (
    <FlipCard
      front={
        <Card
          content={{
            header: <Heading>Front</Heading>,
            body: (
              <>
                <Lorem p={2} />
                <Button>Some button</Button>
              </>
            ),
            footer: (
              <FlipCardTrigger>
                <Button>Flip</Button>
              </FlipCardTrigger>
            ),
          }}
        />
      }
      back={
        <Card
          content={{
            header: <Heading>Back</Heading>,
            body: <Lorem p={2} />,
            footer: (
              <FlipCardTrigger>
                <Button>Flip</Button>
              </FlipCardTrigger>
            ),
          }}
        />
      }
    />
  )
}

const CustomCardFront = () => (
  <Box border="1px solid #ccc" width={375} height={411} overflow="hidden" borderRadius={10}>
    <Box
      h={0}
      pt="56.25%"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center"
      d="block"
      background={`url(${faker.image.abstract(375, 200)})`}
    />
    <Heading p={2}>Something</Heading>
    <FlipCardTrigger>
      <Button size="lg" display="block" m="2rem auto">
        Flip
      </Button>
    </FlipCardTrigger>
  </Box>
)

const CustomCardBack = () => (
  <FlipCardTrigger>
    <Box border="1px solid #ccc" backgroundColor="orange" width={375} height={411} overflow="hidden" borderRadius={10}>
      <Heading p={2}>Something</Heading>
      <Text p={2}>Something</Text>
    </Box>
  </FlipCardTrigger>
)

export const FlipWithCustomContent = () => {
  return <FlipCard front={<CustomCardFront />} back={<CustomCardBack />} />
}
