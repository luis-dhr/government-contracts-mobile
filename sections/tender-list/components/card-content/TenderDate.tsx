import { Flex, Paragraph } from '../../../shared/components'
import { FontAwesome } from '@expo/vector-icons'
import { getColor } from '../../../shared/helpers/getColor'
import { palette } from '../../../../constants/Colors'
import { useColorScheme } from 'react-native'

export function TenderDate ({ date }: { date: string }) {
  const colorScheme = useColorScheme()
  const color = getColor(colorScheme ?? 'light', 'textSecondary')
  const iconColor = colorScheme === 'light' ? palette.secondary : color

  return (
    <Flex justify='flex-start' gap={4} style={{ paddingHorizontal: 4 }}>
      <FontAwesome name='calendar-o' size={16} color={iconColor} />

      <Paragraph weight='medium' style={{ color, paddingTop: 3 }}>
        {date}
      </Paragraph>
    </Flex>
  )
}
