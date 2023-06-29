import { Identifier } from './Identifier'

export interface Participant {
  id: string // participant.id
  name: string // participant.name
  contactPoint: string // participant.contactPoint.name
  identifier: Identifier // participant.identifier
  additionalIdentifiers?: Identifier[] // participant.additionalIdentifiers
  roles: string[] // participant.roles
}
