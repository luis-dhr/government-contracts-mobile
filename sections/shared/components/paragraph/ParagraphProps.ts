import { ReactNode } from 'react'
import { TextProps } from 'react-native'

export interface ParagraphProps {
  children: ReactNode
  lightColor?: string
  darkColor?: string
  size?: number
  weight?: 'normal' | 'medium' | 'bold'
  lines?: number
  style?: TextProps['style']
}
