import { ContractDetails } from '../../domain'
import { ContractDetailsFromApi } from './apiEntities'
import { getCurrencyValue } from './getCurrencyValue'

export function adaptContractDetails (contractDetails: ContractDetailsFromApi): ContractDetails {
  return {
    originalCurrencyValue: getCurrencyValue(contractDetails.originalCurrencyValue),
    minValue: getCurrencyValue(contractDetails.minValue),
    maxValue: getCurrencyValue(contractDetails.maxValue),
    priceScheme: contractDetails.priceScheme,
    multiyear: contractDetails.multiyear,
    contractType: contractDetails.contractType
  }
}
