import { Contract, Period } from '../../domain'
import { ContractDetailsFromApi, adaptContractDetails } from './adaptContractDetails'
import { getCurrencyValue } from './getCurrencyValue'

export interface ContractFromApi {
  id: string
  buyers: Array<{ name: string }>
  contractDetails: ContractDetailsFromApi
  dateSigned: string
  period: Period
  suppliers: Array<{ name: string }>
  title: string
  valueWithTax: { amount: number, currency: string }
}

export function adaptContract (contract: ContractFromApi): Contract {
  return {
    id: contract.id,
    buyers: contract.buyers.map((buyer) => buyer.name),
    contractDetails: adaptContractDetails(contract.contractDetails),
    dateSigned: new Date(contract.dateSigned),
    period: contract.period,
    suppliers: contract.suppliers.map((supplier) => supplier.name),
    title: contract.title,
    valueWithTax: getCurrencyValue(contract.valueWithTax)
  }
}
