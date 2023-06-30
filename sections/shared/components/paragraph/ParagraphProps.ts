import { PropsWithChildren } from 'react'
import { TextProps } from 'react-native'

export interface ParagraphProps extends PropsWithChildren {
  lightColor?: string
  darkColor?: string
  size?: number
  weight?: 'normal' | 'medium' | 'bold'
  lines?: number
  style?: TextProps['style']
}
