import { AccordionItem } from './accordion/AccordionItem'
import { ContractData } from './contract/ContractData'
import { Paragraph, Tag } from '../../shared/components'
import { ParticipantData } from './participant/ParticipantData'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { Tender } from '../../../modules/tenders/domain'
import { useColorSchemeContext } from '../../shared/hooks/useColorSchemeContext'

export function TenderDetail ({ tender }: { tender: Tender }) {
  const { colorScheme } = useColorSchemeContext()

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        style={styles.container}
      >
        <AccordionItem title='Contratos' colorScheme={colorScheme}>
          {tender.availableContracts.map(contract => (
            <ContractData key={contract.id} contract={contract} />
          ))}
        </AccordionItem>

        <AccordionItem title='Participantes' colorScheme={colorScheme}>
          {tender.participants.map(participant => (
            <ParticipantData key={participant.id} participant={participant} />
          ))}
        </AccordionItem>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textSmall: {
    fontSize: 16
  },
  seperator: {
    height: 12
  }
})
