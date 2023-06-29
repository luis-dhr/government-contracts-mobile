import { ContractDetails } from './ContractDetails'
import { Period } from './Period'

export interface Contract {
  id: string // contract.id
  buyers: string[] // contract.buyers (.name)
  contractDetails: ContractDetails // contract.contractDetails
  dateSigned: Date // contract.dateSigned
  period: Period
  suppliers: string[] // contract.suppliers (.name)
  title: string
  valueWithTax: string // contract.valueWithTax (.amount + .currency)
}
