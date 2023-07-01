import { Tender } from '../../../modules/tenders/domain'

export interface TenderListContextState {
  tenderList: Tender[]
  maxNumberOfPages: number
  currentPage: number
  pageIsLoaded: boolean
  setCurrentPage: (page: number) => void
}
