import { useMemo, useState } from 'react'
import { useTenderListContext } from './useTenderListContext'

export function useTenderList () {
  const {
    tenderList, currentPage, maxNumberOfPages, pageIsLoaded, setCurrentPage
  } = useTenderListContext()
  const [searchValue, setSearchValue] = useState('')

  const onNext = () => {
    if (currentPage === maxNumberOfPages || !pageIsLoaded) return

    setSearchValue('')
    setCurrentPage(currentPage + 1)
  }

  const onPrevious = () => {
    if (!pageIsLoaded || currentPage === 1) return

    setSearchValue('')
    setCurrentPage(currentPage - 1)
  }

  const filteredTenderList = useMemo(() => {
    return tenderList.filter(tender => {
      return tender.title.toLowerCase().includes(searchValue.toLowerCase())
    })
  }, [tenderList, searchValue])

  return {
    filteredTenderList,
    maxNumberOfPages,
    pageIsLoaded,
    searchValue,
    tenderList,
    onNext,
    onPrevious,
    setSearchValue
  }
}
