import { FlatList, SafeAreaView, View } from 'react-native'
import { ListEmpty } from './list-config/ListEmpty'
import { Tender } from '../../../modules/tenders/domain'
import { TenderCard } from './card/TenderCard'
import { tenderListStyles } from './tenderListStyles'
import { useRouter } from 'expo-router'
import { useTenderListContext } from '../hooks'

export function TenderList ({ tenderList = [] }: { tenderList: Tender[] }) {
  const router = useRouter()
  const { setCurrentTender } = useTenderListContext()

  return (
    <SafeAreaView style={tenderListStyles.tenderListContainer}>
      <FlatList
        data={tenderList}
        renderItem={({ item }) => (
          <TenderCard
            tender={item}
            onPress={() => {
              setCurrentTender(item)
              router.push('/modal')
            }}
          />
        )}
        keyExtractor={item => item.id}
        style={tenderListStyles.tenderList}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => <View style={tenderListStyles.tenderListFooter} />}
        ListEmptyComponent={() => <ListEmpty />}
      />
    </SafeAreaView>
  )
}
