export function getNumberOfContracts (contractsLength: number) {
  const text = 'contrato'
  const textPlural = 'contratos'

  return `${contractsLength} ${contractsLength > 1 ? textPlural : text}`
}
