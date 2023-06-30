import Colors, { palette } from '../../../../constants/Colors'
import { Flex, Paragraph, Tag } from '../../../shared/components'
import { TenderDate, TenderId } from '../card-content'
import { TouchableOpacity, useColorScheme } from 'react-native'
import { tenderCardStyles } from './tenderCardStyles'

export function TenderCard ({ title = 'Title', onPress }: { title?: string, onPress?: () => void }) {
  const colorScheme = useColorScheme()
  const backgroundColor = Colors[colorScheme ?? 'light'].main
  const shadowColor = colorScheme === 'light' ? palette.secondary : palette.lightTertiary
  const color = Colors[colorScheme ?? 'light'].textSecondary

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[tenderCardStyles.tenderCard, { backgroundColor, shadowColor }]}
    >
      <Flex direction='column' align='flex-start' style={{ marginBottom: 16 }}>
        <Paragraph weight='bold' size={24}>{title}</Paragraph>
        <Paragraph weight='medium' size={18} style={{ color }}>Secretaria de Salud</Paragraph>
      </Flex>

      <Flex direction='column' align='flex-start' gap={4} style={{ marginBottom: 16 }}>
        <TenderId tenderId='1234-uiop-5687-jkll-1234' />
        <TenderDate date='Miercoles 12 de Marzo, 2022' />
      </Flex>

      <Flex justify='flex-start' gap={8}>
        <Tag text='10 contratos' type='primary' />
        <Tag text='5 participantes' type='secondary' />
      </Flex>
    </TouchableOpacity>
  )
}
