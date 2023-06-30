import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

export function SearchIcon ({ color, size }: { color: string, size: number }) {
  return (
    <FontAwesome name='search' size={16} color={color} />
  )
}
