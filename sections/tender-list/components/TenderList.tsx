import { FlatList, SafeAreaView, View, useColorScheme } from 'react-native'
import { TenderCard } from './card/TenderCard'
import { TenderSearch } from './search/TenderSearch'
import { useRouter } from 'expo-router'
import { useState } from 'react'

export function TenderList () {
  const router = useRouter()
  const colorScheme = useColorScheme()
  const [value, setValue] = useState('')

  const onChange = (text: string) => {
    setValue(text)
  }

  return (
    <SafeAreaView style={{ width: '100%', borderWidth: 1 }}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => {
          return <TenderCard title={item.title} onPress={() => { router.push('/modal') }} />
        }}
        keyExtractor={item => item.id}
        style={{ width: '100%' }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => {
          return <TenderSearch value={value} onChange={onChange} colorScheme={colorScheme ?? 'light'} />
        }}
        stickyHeaderIndices={[0]}
        ListFooterComponent={() => <View style={{ height: 40 }} />}
        // ListEmptyComponent={() => <View style={{ height: 40 }} />}
      />
    </SafeAreaView>
  )
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Fourth Item'
  }
]
