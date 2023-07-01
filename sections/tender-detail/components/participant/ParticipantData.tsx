import { Participant } from '../../../../modules/tenders/domain'
import { ExternalLink, Paragraph, Tag } from '../../../shared/components'

export function ParticipantData ({ participant }: { participant: Participant }) {
  return (
    <>
      <Tag type='secondary' text={participant.id} />
      <Paragraph>Nombre: {participant.name}</Paragraph>
      <Paragraph>Contacto: {participant.contactPoint}</Paragraph>
      {participant.roles.map(role => (
        <Paragraph key={role}>Rol: {role}</Paragraph>
      ))}
      <Paragraph>Nombre legal: {participant.identifier.legalName}</Paragraph>
      <Paragraph>Esquema:{participant.identifier.scheme}</Paragraph>
      <ExternalLink href={participant.identifier.schemeUrl}>URL del esquema</ExternalLink>
      {/* <Paragraph>{participant.identifier.schemeUrl}</Paragraph> */}
      {/* {participant.additionalIdentifiers !== null && (
        <Paragraph>{participant.additionalIdentifiers[0].legalName}</Paragraph>
      )} */}
    </>
  )
}
