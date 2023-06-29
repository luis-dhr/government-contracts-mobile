import { Text, View } from 'react-native'

export function Tag ({ text }: { text: string }) {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  )
}
