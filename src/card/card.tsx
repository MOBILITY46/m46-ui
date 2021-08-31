import * as React from 'react'
import type { ReactNode } from 'react'
import styled from '@emotion/styled'
import { MotionBox } from '../motion'

export interface CardProps {
  content: {
    header: ReactNode[] | ReactNode
    body: ReactNode[] | ReactNode
    footer: ReactNode[] | ReactNode
  }
}

const CardWrapper = styled(MotionBox)`
  display: grid;
  grid-template-rows: minmax(min-content, 2rem) auto minmax(min-content, 2rem);
  overflow: hidden;
  width: 320px;
  height: 420px;
  margin: 1rem;
  transform-style: preserve-3d;

  box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
`

const BodyWrapper = styled(MotionBox)`
  height: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
  padding: 10px;
  background-color: #fff;

  &::-webkit-scrollbar {
    display: none;
  }
`

const HeaderWrapper = styled(MotionBox)`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
  cursor: move; /* fallback if grab cursor is unsupported */
  cursor: grab;
`

const FooterWrapper = styled(MotionBox)`
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f5f5;
  border-top: 1px solid #e5e5e5;
`

export const Card = (props: CardProps) => {
  return (
    <CardWrapper role="card" drag dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}>
      <HeaderWrapper>{props.content.header}</HeaderWrapper>
      <BodyWrapper>{props.content.body}</BodyWrapper>
      <FooterWrapper>{props.content.footer}</FooterWrapper>
    </CardWrapper>
  )
}
