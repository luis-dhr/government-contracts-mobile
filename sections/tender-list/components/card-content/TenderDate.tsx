import Colors from '../../../../constants/Colors'
import { Flex, Text } from '../../../shared/components'
import { FontAwesome } from '@expo/vector-icons'
import { StyleSheet, useColorScheme } from 'react-native'

export function TenderDate ({ date }: { date: string }) {
  const colorScheme = useColorScheme()
  const color = Colors[colorScheme ?? 'light'].text

  return (
    <Flex justify='flex-start'>
      <FontAwesome
        name='calendar'
        size={16}
        color={color}
      />
      <Text style={tenderDateStyles.tenderDateText} numberOfLines={1}>
        {date}
      </Text>
    </Flex>
  )
}

const tenderDateStyles = StyleSheet.create({
  tenderDateText: {
    fontSize: 16,
    fontFamily: 'Overpass-Medium'
  }
})
