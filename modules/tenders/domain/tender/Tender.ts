import { Contract } from './Contract'
import { Participant } from './Participant'

export interface Tender {
  id: string // oc-id
  title: string // tender.title || tender.id
  publisher: string // publisher.name
  dateOfPublication: Date // date
  availableContracts: Contract[] // contracts
  participants: Participant[] // parties
}
