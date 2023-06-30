import { ParagraphProps } from './ParagraphProps'
import { Text } from 'react-native'
import { getFontFamily } from '../../helpers/getFontFamily'
import { memo, useMemo } from 'react'
import { useThemeColor } from '../../hooks/useThemeColor'

export const Paragraph = memo((props: ParagraphProps) => {
  const { children, style, lightColor, darkColor, size = 16, lines = 1, weight = 'normal' } = props
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text')
  const fontFamily = useMemo(() => getFontFamily(weight), [weight])

  return (
    <Text
      adjustsFontSizeToFit
      numberOfLines={lines}
      style={[{
        color,
        fontSize: size,
        lineHeight: size + 4,
        fontFamily
      }, style]}
    >
      {children}
    </Text>
  )
})
