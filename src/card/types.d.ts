import { ReactNode } from 'react'

export interface CardProps {
  content: {
    header: ReactNode[] | ReactNode
    body: ReactNode[] | ReactNode
    footer: ReactNode[] | ReactNode
  }
}

export interface FlipCardProps {
  front: ReactNode[] | ReactNode
  back: ReactNode[] | ReactNode
}
