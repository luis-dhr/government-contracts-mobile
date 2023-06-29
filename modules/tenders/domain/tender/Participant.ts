import { Identifier } from './Identifier'

export interface Participant {
  additionalIdentifiers?: Identifier[] // participant.additionalIdentifiers
  contactPoint: string // participant.contactPoint.name
  id: string // participant.id
  identifier: Identifier // participant.identifier
  name: string // participant.name
  roles: string[] // participant.roles
}
