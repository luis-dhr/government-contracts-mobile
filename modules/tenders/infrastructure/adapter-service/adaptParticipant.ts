import { Identifier, Participant } from '../../domain'

export interface ParticipantFromApi {
  id: string
  name: string
  contactPoint: { name: string }
  identifier: Identifier
  additionalIdentifiers: Identifier[]
  roles: string[]
}

export function adaptParticipant (participant: ParticipantFromApi): Participant {
  return {
    id: participant.id,
    name: participant.name,
    contactPoint: participant.contactPoint.name,
    identifier: participant.identifier,
    additionalIdentifiers: participant.additionalIdentifiers ?? [],
    roles: participant.roles
  }
}
