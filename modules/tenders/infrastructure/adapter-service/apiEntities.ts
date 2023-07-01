import { Identifier } from '../../domain'

export interface ContractFromApi {
  id: string
  buyers: Array<{ name: string }>
  contractDetails: ContractDetailsFromApi
  dateSigned: string
  period: { startDate: string, endDate: string, durationInDays: number }
  suppliers: Array<{ name: string }>
  title: string
  valueWithTax: { amount: number, currency: string }
}

export interface ContractDetailsFromApi {
  originalCurrencyValue: { amount: number, currency: string }
  minValue: { amount: number, currency: string }
  maxValue: { amount: number, currency: string }
  priceScheme: string
  multiyear: boolean
  contractType: string
}

export interface ParticipantFromApi {
  id: string
  name: string
  contactPoint: { name: string }
  identifier: Identifier
  additionalIdentifiers: Identifier[]
  roles: string[]
}

export interface TenderFromApi {
  id: string
  tender: { id: string, title?: string }
  publisher: { name: string, uri: string }
  date: string
  contracts: ContractFromApi[]
  parties: ParticipantFromApi[]
}
