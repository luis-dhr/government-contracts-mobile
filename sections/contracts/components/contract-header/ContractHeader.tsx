import { Text, View } from 'react-native'
import { contractHeaderStyles } from './contractHeaderStyles'

export function ContractHeader () {
  return (
    <View style={contractHeaderStyles.contractHeader}>
      <Text>Contract Title</Text>
      <Text>Contract Publisher</Text>
    </View>
  )
}
