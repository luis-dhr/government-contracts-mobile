import { Tender } from '../../../modules/tenders/domain'
import { TenderListContextState } from './TenderListContextState'
import { createContext } from 'react'

export const TenderListContext = createContext<TenderListContextState>({
  tenderList: [],
  currentTender: null,
  maxNumberOfPages: 1,
  currentPage: 1,
  pageIsLoaded: false,
  setCurrentPage: (page: number) => null,
  setCurrentTender: (tender: Tender) => null
})
