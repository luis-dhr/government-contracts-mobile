import { useMemo, useState } from 'react'
import { useTenderListContext } from './useTenderListContext'

export function useTenderList () {
  const {
    tenderList, currentPage, maxNumberOfPages, pageIsLoaded, setCurrentPage
  } = useTenderListContext()
  const [searchValue, setSearchValue] = useState('')

  const onNext = () => {
    if (currentPage < maxNumberOfPages) {
      setSearchValue('')
      setCurrentPage(currentPage + 1)
    }
  }

  const onPrevious = () => {
    if (currentPage > 1) {
      setSearchValue('')
      setCurrentPage(currentPage - 1)
    }
  }

  const filteredTenderList = useMemo(() => {
    return tenderList.filter(tender => {
      return tender.title.toLowerCase().includes(searchValue.toLowerCase())
    })
  }, [tenderList, searchValue])

  return {
    filteredTenderList,
    pageIsLoaded,
    searchValue,
    tenderList,
    maxNumberOfPages,
    onNext,
    onPrevious,
    setSearchValue
  }
}
