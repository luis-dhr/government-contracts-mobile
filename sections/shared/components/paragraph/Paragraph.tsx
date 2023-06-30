import { FONT_FAMILIES } from './fontFamilies'
import { ParagraphProps } from './ParagraphProps'
import { Text } from 'react-native'
import { useThemeColor } from '../../hooks/useThemeColor'

export function Paragraph ({ size = 16, lines = 1, weight = 'normal', ...props }: ParagraphProps) {
  const color = useThemeColor({ light: props.lightColor, dark: props.darkColor }, 'text')
  const getFontFamily = () => FONT_FAMILIES[weight]

  return (
    <Text
      adjustsFontSizeToFit
      numberOfLines={lines}
      style={[{
        color,
        fontSize: size,
        lineHeight: size + 4,
        fontFamily: getFontFamily()
      }, props.style]}
    >
      {props.children}
    </Text>
  )
}
