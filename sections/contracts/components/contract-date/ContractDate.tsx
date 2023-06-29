import { FontAwesome } from '@expo/vector-icons'
import { Text } from '../../../shared/components/Themed'
import { View } from 'react-native'
import { contractDateStyles } from './contractDateStyles'
import { useThemeColor } from '../../../shared/hooks/useThemeColor'

export function ContractDate ({ date }: { date: string }) {
  const color = useThemeColor({}, 'text')

  return (
    <View style={contractDateStyles.contractDate}>
      <FontAwesome
        name='calendar'
        size={16}
        color={color}
      />
      <Text style={contractDateStyles.contractDateText} numberOfLines={1}>
        {date}
      </Text>
    </View>
  )
}
