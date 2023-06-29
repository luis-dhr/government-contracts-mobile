import { Text } from '../../../shared/components/Themed'
import { View } from 'react-native'
import { contractHeaderStyles } from './contractHeaderStyles'

export function ContractHeader () {
  return (
    <View style={contractHeaderStyles.contractHeader}>
      <Text style={contractHeaderStyles.contractTitle} numberOfLines={1}>
        Contract Title
      </Text>
      <Text style={contractHeaderStyles.contractSubtitle} numberOfLines={1}>
        Contract Publisher
      </Text>
    </View>
  )
}
