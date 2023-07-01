import { Participant } from '../../domain'
import { ParticipantFromApi } from './apiEntities'

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
