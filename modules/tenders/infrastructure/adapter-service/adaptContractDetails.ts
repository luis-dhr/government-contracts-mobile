import { ContractDetails } from '../../domain'
import { getCurrencyValue } from './getCurrencyValue'

export interface ContractDetailsFromApi {
  originalCurrencyValue: { amount: number, currency: string }
  minValue: { amount: number, currency: string }
  maxValue: { amount: number, currency: string }
  priceScheme: string
  multiyear: boolean
  contractType: string
}

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
