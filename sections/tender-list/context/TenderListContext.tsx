import { createContext } from 'react'
import { TenderListContextState } from './TenderListContextState'

export const TenderListContext = createContext<TenderListContextState>({
  tenderList: [],
  maxNumberOfPages: 1,
  currentPage: 1,
  pageIsLoaded: false,
  setCurrentPage: (page: number) => null
})
