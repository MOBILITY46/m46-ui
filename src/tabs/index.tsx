import * as React from 'react'
import type { FC } from 'react'
import { useState, useEffect, useRef } from 'react'
import { useMeasure } from '../utils'
import { TabContainer, TabList, TabItem, Slider, TabItemWrapper } from './styles'
import { colors } from '../theme'

import { Pager } from './pager'

import type { TabsProps } from './types'

export const Tabs: FC<TabsProps> = ({ colorScheme = 'primary', ...props }: TabsProps) => {
  const [value, setValue] = useState(0)
  const childRefs = useRef(new Map())
  const tabListRef = useRef<HTMLDivElement>(null)
  const [slider, setSlider] = useState({ left: 0, right: 0, hasValue: false })
  const { bounds, ref } = useMeasure()
  const [scrollOffset, setScrollOffset] = useState(0)

  const tabNames = Object.keys(props.tabs || {})

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

      if (value === 0) {
        setSlider(slider)
        return
      }

      if (right < tRect.width && value > 1) {
        slider.left -= tRect.width
        slider.right += tRect.width

        setScrollOffset((o) => (o -= tRect.width))
      } else if (left < tRect.width) {
        slider.left += tRect.width
        slider.right -= tRect.width

        setScrollOffset((o) => (o += tRect.width))
      }

      console.log(scroll)

      setSlider(slider)
    }
  }, [value, bounds])

  return (
    <>
      <TabContainer ref={ref}>
        <TabList ref={tabListRef}>
          <TabItemWrapper animate={{ x: scrollOffset }}>
            {(tabNames || []).map((tab, i) => (
              <TabItem
                color={colorScheme}
                key={tab}
                isActive={i === value}
                transition={{ duration: 0.3 }}
                whileTap={{ backgroundColor: colors['gray']['400'] }}
                ref={(el) => childRefs.current.set(i, el)}
                onTap={() => setValue(i)}
              >
                {tab}
              </TabItem>
            ))}
          </TabItemWrapper>
          {slider.hasValue && (
            <Slider
              color={colorScheme}
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
