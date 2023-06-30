import { ReactNode } from 'react'

export interface FlexProps {
  children: ReactNode
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  direction?: 'row' | 'column'
  gap?: number
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
  wrap?: 'wrap' | 'nowrap'
}
