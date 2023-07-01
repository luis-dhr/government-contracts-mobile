import { Tender } from '../../../modules/tenders/domain'

export interface TenderListContextState {
  tenderList: Tender[]
  currentTender: Tender | null
  maxNumberOfPages: number
  currentPage: number
  pageIsLoaded: boolean
  setCurrentPage: (page: number) => void
  setCurrentTender: (tender: Tender) => void
}
