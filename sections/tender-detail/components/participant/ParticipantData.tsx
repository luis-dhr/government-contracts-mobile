import { AccordionItem } from '../accordion/AccordionItem'
import { DataItem } from '../accordion/DataItem'
import { ExternalLink, Flex, Paragraph, Tag, View } from '../../../shared/components'
import { Participant } from '../../../../modules/tenders/domain'
import { getColor } from '../../../shared/helpers'
import { participantDataStyles } from './participantDataStyles'

interface ParticipantDataProps {
  participant: Participant
  colorScheme: 'light' | 'dark'
}

export function ParticipantData ({ participant, colorScheme }: ParticipantDataProps) {
  const color = getColor(colorScheme, 'text')

  return (
    <AccordionItem title={participant.id} colorScheme={colorScheme} isChild>
      <View style={participantDataStyles.participantData}>
        <Paragraph color={color} size={18} weight='bold' transform='uppercase'>
          {participant.name}
        </Paragraph>

        <DataItem color={color} title='Contacto' value={participant.contactPoint} />

        <Flex direction='column'>
          <Paragraph color={color} weight='bold'>Roles: </Paragraph>
          {participant.roles.map(role => (
            <Paragraph key={role} color={color}>{role}</Paragraph>
          ))}
        </Flex>

        <DataItem color={color} title='Nombre legal' value={participant.identifier.legalName} />

        <DataItem color={color} title='Esquema' value={participant.identifier.scheme} />

        <Flex style={{ marginBottom: 8 }}>
          <ExternalLink href={participant.identifier.schemeUrl}>
            <Tag type='primary' text='Ir a la URL del esquema' size={16} />
          </ExternalLink>
        </Flex>
      </View>
    </AccordionItem>
  )
}
