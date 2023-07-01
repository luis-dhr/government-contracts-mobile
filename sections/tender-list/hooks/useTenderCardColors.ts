import { getColor } from '../../shared/helpers'
import { palette } from '../../../constants/Colors'
import { useColorSchemeContext } from '../../shared/hooks/useColorSchemeContext'

export function useTenderCardColors () {
  const { colorScheme } = useColorSchemeContext()
  const backgroundColor = getColor(colorScheme, 'main')
  const color = getColor(colorScheme, 'text')
  const colorSecondary = getColor(colorScheme, 'textSecondary')

  const shadowColor = colorScheme === 'light' ? palette.secondary : palette.lightTertiary

  return { backgroundColor, shadowColor, color, colorSecondary }
}
