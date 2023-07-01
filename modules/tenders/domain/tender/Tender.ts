import { Contract } from './Contract'
import { Participant } from './Participant'

export interface Tender {
  id: string // id
  tenderId: string // tender.id
  title: string // tender.title || tender.id
  publisher: string // publisher.name
  source: string // publisher.uri
  dateOfPublication: Date // date
  availableContracts: Contract[] // contracts
  participants: Participant[] // parties
}
