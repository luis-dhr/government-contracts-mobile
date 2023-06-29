import { Pressable } from 'react-native'
import { ReactNode } from 'react'
import { contractCardStyles } from './contractCardStyles'

export function ContractCard ({ children }: { children: ReactNode }) {
  return (
    <Pressable onPress={() => null} style={contractCardStyles.contractCard}>
      {children}
    </Pressable>
  )
}
