import { FlatList, SafeAreaView, View } from 'react-native'
import { ListEmpty } from './list-config/ListEmpty'
import { Tender } from '../../../modules/tenders/domain'
import { TenderCard } from './card/TenderCard'
import { tenderListStyles } from './tenderListStyles'
import { useRouter } from 'expo-router'

export function TenderList ({ tenderList = [] }: { tenderList: Tender[] }) {
  const router = useRouter()

  return (
    <SafeAreaView style={tenderListStyles.tenderListContainer}>
      <FlatList
        data={tenderList}
        renderItem={({ item }) => (
          <TenderCard
            tender={item}
            onPress={() => {
              router.push({ pathname: '/modal', params: { id: 24, tender: item } })
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
