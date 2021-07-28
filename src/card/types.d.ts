import { ReactNode } from 'react'

export interface CardContentProps {
  header: ReactNode[]
  body: ReactNode[]
  footer: ReactNode[]
  FlipTrigger?: JSX.Element
}

export interface CardProps {
  content: CardContent | [CardContentProps, CardContentProps]
}
