import { Flex, Paragraph, Tag } from '../../../shared/components'
import { Pressable, View } from 'react-native'
import { TenderCardProps } from './TenderCardProps'
import { TenderDate, TenderId } from '../card-content'
import { getNumberOfContracts, getNumberOfParticipants } from '../../helpers'
import { tenderCardStyles } from './tenderCardStyles'
import { useTenderCardColors } from '../../hooks'

export function TenderCard ({ tender, onPress }: TenderCardProps) {
  const { backgroundColor, shadowColor, color, colorSecondary } = useTenderCardColors()
  const availableContracts = getNumberOfContracts(tender.availableContracts.length)
  const participants = getNumberOfParticipants(tender.participants.length)

  return (
    <Pressable onPress={onPress} style={tenderCardStyles.tenderCardContainer}>
      {({ pressed }) => (
        <View style={[{ backgroundColor, shadowColor }, tenderCardStyles.tenderCard]}>
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
              <Tag text={availableContracts} type='primary' />}
            {tender.participants.length > 0 &&
              <Tag text={participants} type='secondary' />}
          </Flex>
        </View>
      )}
    </Pressable>
  )
}
