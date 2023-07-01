import { Flex, Paragraph } from '../../../shared/components'
import { FontAwesome } from '@expo/vector-icons'
import { getColor } from '../../../shared/helpers/getColor'
import { palette } from '../../../../constants/Colors'
import { useColorSchemeContext } from '../../../shared/hooks/useColorSchemeContext'

export function TenderId ({ tenderId }: { tenderId: string }) {
  const { colorScheme } = useColorSchemeContext()
  const color = getColor(colorScheme ?? 'light', 'textSecondary')
  const iconColor = colorScheme === 'light' ? palette.primary : color

  return (
    <Flex justify='flex-start' gap={4} style={{ paddingHorizontal: 4 }}>
      <FontAwesome name='file-text-o' size={16} color={iconColor} />

      <Paragraph weight='medium' color={color}>
        {tenderId}
      </Paragraph>
    </Flex>
  )
}
