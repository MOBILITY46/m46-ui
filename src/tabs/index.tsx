import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useMeasure } from '../utils'
import { TabContainer, TabList, TabItem, Slider } from './styles'

import { Pager } from './pager'

import type { TabsProps } from './types'

export const Tabs = (props: TabsProps) => {
  const [value, setValue] = useState(0)
  const childRefs = useRef(new Map())
  const tabListRef = useRef<HTMLDivElement>(null)
  const [slider, setSlider] = useState({ left: 0, right: 0, hasValue: false })
  const { bounds, ref } = useMeasure()

  const tabNames = Object.keys(props.tabs)

  // measure our elements
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
      const left = tRect.left - cRect.left
      const right = cRect.right - tRect.right

      setSlider({
        hasValue: true,
        left,
        right,
      })
    }
  }, [value, bounds])

  return (
    <div>
      <TabContainer ref={ref}>
        <TabList ref={tabListRef}>
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
    </div>
  )
}
