import { PropsWithChildren } from 'react'
import { TextProps } from 'react-native'

export interface ParagraphProps extends PropsWithChildren {
  align?: 'left' | 'center' | 'right'
  color?: string
  lines?: number
  size?: number
  style?: TextProps['style']
  weight?: 'normal' | 'medium' | 'bold'
}
