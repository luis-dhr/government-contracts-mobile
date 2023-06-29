import { ParagraphProps } from './ParagraphProps'
import { Text } from 'react-native'

export function Paragraph ({
  children,
  align = 'left',
  color = '#333333',
  lines = 1,
  size = 16,
  transform = 'none',
  weight = 'normal'
}: ParagraphProps) {
  return (
    <Text
      adjustsFontSizeToFit
      numberOfLines={lines}
      style={{
        color,
        // fontFamily: weight,
        fontWeight: weight,
        fontSize: size,
        lineHeight: size + 4,
        textAlign: align,
        textTransform: transform,
        width: 'auto'
      }}
    >
      {children}
    </Text>
  )
}
