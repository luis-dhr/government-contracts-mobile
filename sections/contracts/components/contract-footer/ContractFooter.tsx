import { ReactNode } from 'react'
import { View } from 'react-native'
import { contractFooterStyles } from './contractFooterStyles'

export function ContractFooter ({ children }: { children: ReactNode }) {
  return (
    <View style={contractFooterStyles.contractFooter}>
      {children}
    </View>
  )
}
