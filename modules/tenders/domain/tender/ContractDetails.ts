export interface ContractDetails {
  originalCurrencyValue: string // contract.contractDetails.originalCurrencyValue (.amount + .currency)
  minValue: string // contract.contractDetails.minValue (.amount + .currency)
  maxValue: string // contract.contractDetails.maxValue (.amount + .currency)
  priceScheme: string // contract.contractDetails.priceScheme
  multiyear: boolean // contract.contractDetails.multiyear
  contractType: string // contract.contractDetails.contractType
}
