import Colors from '../constants/Colors'
import { ContractCard } from '../sections/contracts/components/contract-card/ContractCard'
import { FontAwesome } from '@expo/vector-icons'
import { Pressable, StyleSheet, useColorScheme } from 'react-native'
import { View } from '../sections/shared/components/Themed'
import { useRouter } from 'expo-router'

export default function ContractListScreen () {
  const colorScheme = useColorScheme()
  const router = useRouter()

  return (
    <View style={styles.container}>
      <ContractCard />
      <Pressable onPress={() => { router.push('/modal') }}>
        {({ pressed }) => (
          <FontAwesome
            name='info-circle'
            size={25}
            color={Colors[colorScheme ?? 'light'].text}
            style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          />
        )}
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 8
  }
})
