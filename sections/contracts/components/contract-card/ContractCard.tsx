import { ContractBody } from '../contract-body/ContractBody'
import { ContractDate } from '../contract-date/ContractDate'
import { ContractFooter } from '../contract-footer/ContractFooter'
import { ContractHeader } from '../contract-header/ContractHeader'
import { ContractSeparator } from '../contract-separator/ContractSeparator'
import { Tag } from '../../../shared/components/tag/Tag'
import { TouchableOpacity } from 'react-native'
import { contractCardStyles } from './contractCardStyles'
import { useThemeColor } from '../../../shared/hooks/useThemeColor'

export function ContractCard () {
  const backgroundColor = useThemeColor({}, 'main')

  return (
    <TouchableOpacity
      onPress={() => null}
      style={[contractCardStyles.contractCard, { backgroundColor }]}
    >
      <ContractHeader />

      <ContractSeparator />

      <ContractBody>
        <Tag text='1234-uiop-5687-jkll-1234' type='primary' />
        <ContractDate date='Today' />
      </ContractBody>

      <ContractSeparator />

      <ContractFooter>
        <Tag text='10 items' type='secondary' />
        <Tag text='5 items' type='tertiary' />
        <Tag text='2 items' type='quaternary' />
      </ContractFooter>
    </TouchableOpacity>
  )
}
