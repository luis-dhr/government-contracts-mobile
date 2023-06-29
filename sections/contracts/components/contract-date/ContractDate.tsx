import { Text, View } from 'react-native'

export function ContractDate ({ date }: { date: string }) {
  return (
    <View>
      {/* Icon */}
      <Text>{date}</Text>
    </View>
  )
}
