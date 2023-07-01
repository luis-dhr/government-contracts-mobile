import { AccordionItem } from '../accordion/AccordionItem'
import { ContractDataProps } from './ContractDataProps'
import { DataItem } from '../accordion/DataItem'
import { Flex, Paragraph, View } from '../../../shared/components'
import { contractDataStyles } from './contractDataStyles'
import { formatDateToSpanish, getColor, getPeriodString } from '../../../shared/helpers'

export function ContractData ({ contract, colorScheme }: ContractDataProps) {
  const color = getColor(colorScheme, 'text')
  const textSecondary = getColor(colorScheme, 'textSecondary')
  const period = getPeriodString(contract.period)
  const type = contract.contractDetails.contractType

  return (
    <AccordionItem title={contract.id} colorScheme={colorScheme} isChild>
      <View style={contractDataStyles.contractData}>
        <Paragraph color={color} size={18} weight='bold' transform='uppercase'>
          {contract.title}
        </Paragraph>

        <Paragraph color={textSecondary} weight='medium'>
          {formatDateToSpanish(contract.dateSigned)}
        </Paragraph>

        <DataItem color={color} title='Monto' value={`$ ${contract.valueWithTax}`} />

        <DataItem color={color} title='Periodo' value={period} />

        <Flex direction='column'>
          <Paragraph color={color} weight='bold'>Proveedores: </Paragraph>
          {contract.suppliers.map(supplier => (
            <Paragraph key={supplier} color={color} transform='capitalize'>{supplier}</Paragraph>
          ))}
        </Flex>

        <Flex direction='column'>
          <Paragraph color={color} weight='bold'>Compradores: </Paragraph>
          {contract.buyers.map(buyer => (
            <Paragraph key={buyer} color={color} transform='capitalize'>{buyer}</Paragraph>
          ))}
        </Flex>

        <DataItem color={color} title='Tipo' value={type} />
      </View>
    </AccordionItem>
  )
}
