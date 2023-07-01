import { Flex, Paragraph, Tag } from '../../../shared/components'
import { Pressable, View } from 'react-native'
import { Tender } from '../../../../modules/tenders/domain'
import { TenderDate, TenderId } from '../card-content'
import { getColor } from '../../../shared/helpers/getColor'
import { palette } from '../../../../constants/Colors'
import { tenderCardStyles } from './tenderCardStyles'
import { useColorSchemeContext } from '../../../shared/hooks/useColorSchemeContext'

export function TenderCard ({ tender, onPress }: { tender: Tender, onPress?: () => void }) {
  const { colorScheme } = useColorSchemeContext()
  const backgroundColor = getColor(colorScheme, 'main')
  const shadowColor = colorScheme === 'light' ? palette.secondary : palette.lightTertiary
  const color = getColor(colorScheme, 'text')
  const colorSecondary = getColor(colorScheme, 'textSecondary')

  return (
    <Pressable onPress={onPress} style={tenderCardStyles.tenderCardContainer}>
      {({ pressed }) => (
        <View style={[tenderCardStyles.tenderCard, { backgroundColor, shadowColor }]}>
          <Flex
            direction='column'
            align='flex-start'
            style={{ marginBottom: 16, opacity: pressed ? 0.5 : 1 }}
          >
            <Paragraph color={color} size={24} weight='bold'>
              {tender.title}
            </Paragraph>
            <Paragraph weight='medium' size={18} color={colorSecondary}>
              {tender.publisher}
            </Paragraph>
          </Flex>

          <Flex direction='column' align='flex-start' gap={4} style={{ marginBottom: 16 }}>
            <TenderId tenderId={tender.id} />
            <TenderDate date={tender.dateOfPublication.toISOString()} />
          </Flex>

          <Flex justify='flex-start' gap={8}>
            {tender.availableContracts.length > 0 &&
              <Tag text={`${tender.availableContracts.length} contratos`} type='primary' />}
            {tender.participants.length > 0 &&
              <Tag text={`${tender.participants.length} participantes`} type='secondary' />}
          </Flex>
        </View>
      )}
    </Pressable>
  )
}
