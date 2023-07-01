import { FontAwesome } from '@expo/vector-icons'
// import { View } from '../../../shared/components'

export function PageEllipsis ({ color = '#FFFFFF' }: { color?: string }) {
  return (
    <FontAwesome name='ellipsis-h' size={18} color={color} />
  )
}
