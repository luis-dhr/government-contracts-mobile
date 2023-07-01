import { ParagraphProps } from './ParagraphProps'
import { Text } from 'react-native'
import { getFontFamily } from '../../helpers'
import { memo, useMemo } from 'react'
import { palette } from '../../../../constants/Colors'

export const Paragraph = memo((props: ParagraphProps) => {
  const {
    children, style, color = palette.light, align = 'left',
    size = 16, lines = 1, weight = 'normal', transform = 'none'
  } = props
  const fontFamily = useMemo(() => getFontFamily(weight), [weight])

  return (
    <Text
      numberOfLines={lines}
      style={[{
        color,
        flex: 1,
        fontSize: size,
        textAlignVertical: 'center',
        textAlign: align,
        width: '100%',
        textTransform: transform,
        fontFamily
      }, style]}
    >
      {children}
    </Text>
  )
})
