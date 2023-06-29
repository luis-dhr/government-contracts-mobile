import { ReactNode } from 'react'

export type ParagraphProps = {
  children: ReactNode
  align?: 'left' | 'center' | 'right'
  color?: string
  lines?: number
  size?: number
  transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase'
  weight?: 'normal' | 'bold'
}
