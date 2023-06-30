import { PropsWithChildren, createContext, useCallback, useEffect, useState } from 'react'
import { Tender, TenderRepository } from '../../../modules/tenders/domain'
import { getAllTenders } from '../../../modules/tenders/application'

export interface TenderListContextState {
  tenderList: Tender[]
}

export const TenderListContext = createContext<TenderListContextState>({ tenderList: [] })

export const TenderListContextProvider = ({
  children,
  repository
}: PropsWithChildren<{ repository: TenderRepository }>) => {
  const [tenderList, setTenderList] = useState<Tender[]>([])

  const getTenderList = useCallback(async () => {
    const list = await getAllTenders(repository)(1)
    setTenderList(list)
  }, [repository])

  useEffect(() => {
    getTenderList()
  }, [getTenderList])

  return (
    <TenderListContext.Provider value={{ tenderList }}>
      {children}
    </TenderListContext.Provider>
  )
}
