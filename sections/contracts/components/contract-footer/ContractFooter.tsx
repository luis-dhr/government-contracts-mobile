import { ReactNode } from 'react'
import { View } from 'react-native'

export function ContractFooter ({ children }: { children: ReactNode }) {
  return (
    <View>
      {children}
    </View>
  )
}
