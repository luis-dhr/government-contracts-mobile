import { Flex, Paragraph } from '../../../shared/components'
import { FontAwesome } from '@expo/vector-icons'
import { getColor } from '../../../shared/helpers/getColor'
import { palette } from '../../../../constants/Colors'
import { useColorScheme } from 'react-native'

export function TenderId ({ tenderId }: { tenderId: string }) {
  const colorScheme = useColorScheme()
  const color = getColor(colorScheme ?? 'light', 'textSecondary')
  const iconColor = colorScheme === 'light' ? palette.primary : color

  return (
    <Flex justify='flex-start' gap={4} style={{ paddingHorizontal: 4 }}>
      <FontAwesome name='hashtag' size={16} color={iconColor} />

      <Paragraph weight='medium' style={{ color, paddingTop: 2 }}>
        {tenderId}
      </Paragraph>
    </Flex>
  )
}
