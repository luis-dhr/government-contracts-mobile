import { ReactNode } from 'react'
import { View } from 'react-native'
import { contractBodyStyles } from './contractBodyStyles'

export function ContractBody ({ children }: { children: ReactNode }) {
  return (
    <View style={contractBodyStyles.contractBody}>
      {children}
    </View>
  )
}
