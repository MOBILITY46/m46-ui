import type { ReactNode } from 'react'

export type CallBack = () => void

export interface Props {
  id?: string
  isOpen: boolean
  onClose(): void
  children: ReactNode | ReactNode[]
  maskClosable?: boolean
  debug?: boolean
}
