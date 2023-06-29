import { ContractCard } from '../contract-card/ContractCard'
import { FlatList, SafeAreaView } from 'react-native'
import { contractListStyles } from './contractListStyles'

export function ContractList ({ data }: { data: any[] }) {
  return (
    <SafeAreaView style={contractListStyles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <ContractCard>Hello</ContractCard>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}
