import Colors from '../../../constants/Colors'
import { useColorSchemeContext } from './useColorSchemeContext'

export function useThemeColor (
  props: { light?: string, dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const { colorScheme } = useColorSchemeContext()
  const colorFromProps = props[colorScheme]

  if (colorFromProps != null) {
    return colorFromProps
  } else {
    return Colors[colorScheme][colorName]
  }
}
