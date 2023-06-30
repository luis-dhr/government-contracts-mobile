import { StyleSheet } from 'react-native'
import { TenderList } from '../sections/tender-list/components/TenderList'
import { View } from '../sections/shared/components/Themed'

export default function ContractListScreen () {
  // const colorScheme = useColorScheme()
  // const router = useRouter()

  return (
    <View style={styles.container}>
      {/* <TenderCard /> */}
      <TenderList />
      {/* <Pressable onPress={() => { router.push('/modal') }}>
        {({ pressed }) => (
          <FontAwesome
            name='info-circle'
            size={25}
            color={Colors[colorScheme ?? 'light'].text}
            style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          />
        )}
      </Pressable> */}
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
