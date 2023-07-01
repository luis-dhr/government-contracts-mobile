import Colors from '../../../constants/Colors'

/** Selects a color from the given color scheme based on the given type */
export function getColor (
  colorScheme: 'light' | 'dark',
  type: 'text' | 'textSecondary' | 'background' | 'main'
) {
  return Colors[colorScheme ?? 'light'][type]
}
