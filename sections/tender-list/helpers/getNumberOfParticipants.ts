export function getNumberOfParticipants (participantsLength: number) {
  const text = 'participante'
  const textPlural = 'participantes'

  return `${participantsLength} ${participantsLength > 1 ? textPlural : text}`
}
