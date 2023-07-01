import { PAGE_SIZE, TOTAL_OF_RECORDS } from '@env'
import { PropsWithChildren, createContext, useCallback, useEffect, useState } from 'react'
import { Tender, TenderRepository } from '../../../modules/tenders/domain'
import { TenderListContextState } from './TenderListContextState'
import { getAllTenders } from '../../../modules/tenders/application'

export const TenderListContext = createContext<TenderListContextState>({
  tenderList: [],
  maxNumberOfPages: 1,
  currentPage: 1,
  pageIsLoaded: false,
  setCurrentPage: (page: number) => null
})

export const TenderListContextProvider = ({
  children,
  repository
}: PropsWithChildren<{ repository: TenderRepository }>) => {
  const [tenderList, setTenderList] = useState<Tender[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [maxNumberOfPages, setMaxNumberOfPages] = useState<number>(0)
  const [pageIsLoaded, setPageIsLoaded] = useState<boolean>(false)

  const getTenderList = useCallback(async () => {
    setPageIsLoaded(false)
    setTenderList([])

    const list = await getAllTenders(repository)(currentPage)
    setTenderList(list)
    setMaxNumberOfPages(Math.ceil(TOTAL_OF_RECORDS / PAGE_SIZE))

    setPageIsLoaded(true)
  }, [repository, currentPage])

  useEffect(() => {
    getTenderList()
  }, [getTenderList])

  return (
    <TenderListContext.Provider
      value={{ tenderList, currentPage, maxNumberOfPages, pageIsLoaded, setCurrentPage }}
    >
      {children}
    </TenderListContext.Provider>
  )
}
