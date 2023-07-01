import { AccordionItem } from './accordion/AccordionItem'
import { ContractData } from './contract/ContractData'
import { ExternalLink, Flex, Tag, View } from '../../shared/components'
import { ParticipantData } from './participant/ParticipantData'
import { SafeAreaView, ScrollView } from 'react-native'
import { Tender } from '../../../modules/tenders/domain'
import { useColorSchemeContext } from '../../shared/hooks/useColorSchemeContext'

export function TenderDetail ({ tender }: { tender: Tender }) {
  const { colorScheme } = useColorSchemeContext()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentInsetAdjustmentBehavior='automatic' style={{ flex: 1 }}>
        <AccordionItem title='Licitación' colorScheme={colorScheme}>
          <View style={{ paddingBottom: 16, paddingTop: 8 }}>
            <Tag type='primary' text={`#${tender.tenderId}`} />
          </View>
        </AccordionItem>

        <AccordionItem title='Contratos' colorScheme={colorScheme}>
          {tender.availableContracts.map(contract => (
            <ContractData key={contract.id} contract={contract} colorScheme={colorScheme} />
          ))}
        </AccordionItem>

        <AccordionItem title='Participantes' colorScheme={colorScheme}>
          {tender.participants.map(participant => (
            <ParticipantData
              key={participant.id}
              participant={participant}
              colorScheme={colorScheme}
            />
          ))}
        </AccordionItem>

        <Flex style={{ paddingTop: 24, paddingBottom: 24 }}>
          <ExternalLink href={tender.source}>
            <Tag type='secondary' text='Fuente' size={18} />
          </ExternalLink>
        </Flex>

      </ScrollView>
    </SafeAreaView>
  )
}
