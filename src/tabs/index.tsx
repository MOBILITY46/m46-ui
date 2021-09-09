import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useMeasure } from '../utils'
import { TabContainer, TabList, TabItem, Slider, TabItemWrapper } from './styles'

import { Pager } from './pager'

import type { TabsProps } from './types'

export const Tabs = (props: TabsProps) => {
  const [value, setValue] = useState(0)
  const childRefs = useRef(new Map())
  const tabListRef = useRef<HTMLDivElement>(null)
  const [slider, setSlider] = useState({ left: 0, right: 0, hasValue: false })
  const { bounds, ref } = useMeasure()
  const [scrollOffset, setScrollOffset] = useState(0)

  const tabNames = Object.keys(props.tabs)

  useEffect(() => {
    const target = childRefs.current.get(value)
    const container = tabListRef.current
    if (target) {
      const cRect = container?.getBoundingClientRect()

      // when container is `display: none`, width === 0.
      // ignore this case
      if (!cRect || cRect.width === 0) {
        return
      }

      const tRect = target.getBoundingClientRect()
      let left = tRect.left - cRect.left
      let right = cRect.right - tRect.right

      const slider = {
        hasValue: true,
        left,
        right,
      }

      setSlider(slider)
    }
  }, [])

  useEffect(() => {
    const target = childRefs.current.get(value)
    const container = tabListRef.current
    if (target) {
      const cRect = container?.getBoundingClientRect()

      // when container is `display: none`, width === 0.
      // ignore this case
      if (!cRect || cRect.width === 0) {
        return
      }

      const tRect = target.getBoundingClientRect()
      let left = tRect.left - cRect.left
      let right = cRect.right - tRect.right

      const slider = {
        hasValue: true,
        left,
        right,
      }

      let scroll: null | 'left' | 'right' = null
      let offset = scrollOffset

      if (right < tRect.width) {
        // We are moving right
        scroll = 'right'
        offset = scrollOffset - tRect.width
        setScrollOffset((o) => (o -= tRect.width))
      }

      if (left < tRect.width && value === 0) {
        // We are at start
        offset = 0
      } else if (left < tRect.width) {
        // We are moving left
        scroll = 'left'
        offset = scrollOffset + tRect.width
      }

      switch (scroll) {
        case 'left':
          slider.left += tRect.width
          slider.right -= tRect.width
          break
        case 'right':
          slider.left -= tRect.width
          slider.right += tRect.width
          break
        default:
          break
      }

      setScrollOffset(offset)
      setSlider(slider)
    }
  }, [value, bounds])

  return (
    <>
      <TabContainer ref={ref}>
        <TabList ref={tabListRef}>
          <TabItemWrapper animate={{ x: scrollOffset }}>
            {tabNames.map((tab, i) => (
              <TabItem
                key={tab}
                isActive={i === value}
                transition={{ duration: 0.3 }}
                whileTap={{ backgroundColor: '#e9e9e9' /* gray.300 */ }}
                ref={(el) => childRefs.current.set(i, el)}
                onClick={() => setValue(i)}
              >
                {tab}
              </TabItem>
            ))}
          </TabItemWrapper>
          {slider.hasValue && (
            <Slider
              transition={{
                tension: 190,
                friction: 70,
                mass: 0.4,
              }}
              initial={false}
              animate={{
                left: slider.left,
                right: slider.right,
              }}
            />
          )}
        </TabList>
      </TabContainer>
      <Pager value={value}>
        {tabNames.map((tab) => (
          <li key={tab}>{props.tabs[tab]}</li>
        ))}
      </Pager>
    </>
  )
}
