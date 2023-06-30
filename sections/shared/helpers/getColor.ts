import Colors from '../../../constants/Colors'

export function getColor (
  colorScheme: 'light' | 'dark',
  type: 'text' | 'textSecondary' | 'background' | 'main'
) {
  return Colors[colorScheme ?? 'light'][type]
}
