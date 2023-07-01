import { Tender } from '../../domain'
import { TenderFromApi } from './apiEntities'
import { adaptContract } from './adaptContract'
import { adaptParticipant } from './adaptParticipant'

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
