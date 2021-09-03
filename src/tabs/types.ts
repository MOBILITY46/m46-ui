import type { ReactNode } from 'react'

export interface PagerProps {
  children: ReactNode | ReactNode[]
  value: number
}

export interface Tabs {
  [key: string]: ReactNode | ReactNode[]
}

export interface TabsProps {
  tabs: Tabs
}
