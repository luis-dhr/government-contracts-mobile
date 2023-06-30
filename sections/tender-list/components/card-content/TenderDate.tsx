import Colors, { palette } from '../../../../constants/Colors'
import { Flex, Paragraph } from '../../../shared/components'
import { FontAwesome } from '@expo/vector-icons'
import { useColorScheme } from 'react-native'

export function TenderDate ({ date }: { date: string }) {
  const colorScheme = useColorScheme()
  const color = Colors[colorScheme ?? 'light'].textSecondary

  return (
    <Flex justify='flex-start' gap={4} style={{ paddingHorizontal: 4 }}>
      <FontAwesome
        name='calendar-o'
        size={16}
        color={colorScheme === 'light' ? palette.secondary : color}
      />

      <Paragraph weight='medium' style={{ color, paddingTop: 3 }}>
        {date}
      </Paragraph>
    </Flex>
  )
}
