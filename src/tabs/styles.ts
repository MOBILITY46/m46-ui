import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { Box } from '@chakra-ui/react'

export const TabContainer = styled(Box)`
  overflow-y: hidden;
  box-shadow: none;
  margin-bottom: 1rem;
`

export const TabList = styled(Box)`
  display: block;
  position: relative;
`

export const TabItem = styled(motion.button)<{ isActive: boolean }>`
  white-space: nowrap;
  -webkit-appearance: none;
  box-sizing: border-box;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizelegibility;
  user-select: none;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  box-shadow: none;
  cursor: pointer;
  text-decoration: none;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  padding: 10px 1rem;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  text-size-adjust: none;
  text-overflow: ellipsis;
  line-height: 1.5;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${(p) => (p.isActive ? '#1e90ff' : '#939393')};
  margin: 0px;
  overflow: hidden;
`

export const Slider = styled(motion(Box))`
  height: 2px;
  margin-left: 0;
  margin-right: 0;
  bottom: 0;
  position: absolute;
  background-color: #1e90ff;
`

export const PagerContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
`

export const PagerAnimtedContainer = styled(motion(Box))`
  flex-direction: row;
  direction: ltr;
  will-change: transform;
  min-height: 0;
  flex: 1;
  display: flex;
`

export const Page = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: stretch;
  justify-content: flex-start;
  flex-shrink: 0;
  height: 100%;
  overflow: hidden;
  outline: none;
  li {
    list-style: none;
  }
`