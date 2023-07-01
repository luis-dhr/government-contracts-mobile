import { Contract } from '../../../../modules/tenders/domain'

export interface ContractDataProps {
  contract: Contract
  colorScheme: 'light' | 'dark'
}
