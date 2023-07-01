import { Contract } from '../../../../modules/tenders/domain'
import { Paragraph, Tag } from '../../../shared/components'

export function ContractData ({ contract }: { contract: Contract }) {
  return (
    <>
      <Tag type='secondary' text={contract.id} />
      <Paragraph>Titulo: {contract.title}</Paragraph>
      <Paragraph>Fecha: {contract.dateSigned.toISOString()}</Paragraph>
      <Paragraph>Monto: $ {contract.valueWithTax}</Paragraph>
      <Paragraph>Periodo: {`${contract.period.startDate} - ${contract.period.endDate}`}</Paragraph>
      {contract.suppliers.map(supplier => (
        <Paragraph key={supplier}>{supplier}</Paragraph>
      ))}
      {contract.buyers.map(buyer => (
        <Paragraph key={buyer}>{buyer}</Paragraph>
      ))}
      <Paragraph>Tipo: {contract.contractDetails.contractType}</Paragraph>
    </>
  )
}
