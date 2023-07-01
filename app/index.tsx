import { Pagination } from '../sections/pagination/components/Pagination'
import { StyleSheet } from 'react-native'
import { TenderList } from '../sections/tender-list/components/TenderList'
import { TenderSearch } from '../sections/search/components/TenderSearch'
import { View } from '../sections/shared/components/Themed'
import { useTenderList } from '../sections/tender-list/hooks/useTenderList'

export default function TenderListScreen () {
  const {
    currentPage, filteredTenderList, maxNumberOfPages, pageIsLoaded,
    searchValue, onNext, onPrevious, setSearchValue
  } = useTenderList()

  return (
    <View style={styles.container}>
      {pageIsLoaded && <TenderSearch value={searchValue} onChange={setSearchValue} />}

      <TenderList tenderList={filteredTenderList} />

      {(maxNumberOfPages > 1) &&
        <Pagination
          current={currentPage}
          max={maxNumberOfPages}
          onNext={onNext}
          onPrevious={onPrevious}
        />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 8
  }
})
