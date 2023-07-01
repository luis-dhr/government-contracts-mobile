import { FontAwesome } from '@expo/vector-icons'

export function PageEllipsis ({ color = '#FFFFFF' }: { color?: string }) {
  return (
    <FontAwesome name='ellipsis-h' size={18} color={color} />
  )
}
