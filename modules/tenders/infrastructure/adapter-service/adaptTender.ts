import { ContractFromApi, adaptContract } from './adaptContract'
import { ParticipantFromApi, adaptParticipant } from './adaptParticipant'
import { Tender } from '../../domain'

export interface TenderFromApi {
  id: string
  tender: { id: string, title?: string }
  publisher: { name: string, uri: string }
  date: string
  contracts: ContractFromApi[]
  parties: ParticipantFromApi[]
}

export function adaptTender (data: TenderFromApi): Tender {
  const defaultTitle = 'Licitación sin título'

  return {
    id: data.id,
    tenderId: data.tender.id,
    title: data.tender.title ?? `${defaultTitle} #${data.tender.id}`,
    publisher: data.publisher.name,
    source: data.publisher.uri,
    dateOfPublication: new Date(data.date),
    availableContracts: data.contracts.map(adaptContract),
    participants: data.parties.map(adaptParticipant)
  }
}
