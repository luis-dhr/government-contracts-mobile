import { Contract } from '../../domain'
import { ContractFromApi } from './apiEntities'
import { adaptContractDetails } from './adaptContractDetails'
import { adaptPeriod } from './adaptPeriod'
import { getCurrencyValue } from './getCurrencyValue'

export function adaptContract (contract: ContractFromApi): Contract {
  return {
    id: contract.id,
    buyers: contract.buyers.map((buyer) => buyer.name),
    contractDetails: adaptContractDetails(contract.contractDetails),
    dateSigned: new Date(contract.dateSigned),
    period: adaptPeriod(contract.period),
    suppliers: contract.suppliers.map((supplier) => supplier.name),
    title: contract.title,
    valueWithTax: getCurrencyValue(contract.valueWithTax)
  }
}
