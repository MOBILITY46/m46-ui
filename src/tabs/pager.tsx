import * as React from 'react'
import { PagerContainer, PagerAnimtedContainer, Page } from './styles'
import type { PagerProps } from './types'

export function Pager({ children, value }: PagerProps) {
  return (
    <PagerContainer>
      <PagerAnimtedContainer
        transition={{
          tension: 190,
          friction: 70,
          mass: 0.4,
        }}
        initial={false}
        animate={{ x: value * -100 + '%' }}
      >
        {React.Children.map(children, (child, i) => (
          <Page key={i} aria-hidden={value !== i} tabIndex={value === i ? 0 : -1}>
            {child}
          </Page>
        ))}
      </PagerAnimtedContainer>
    </PagerContainer>
  )
}
