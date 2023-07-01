import { Platform, StyleSheet, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { TenderDetail } from '../sections/tender-detail/components/TenderDetail'
import { View } from '../sections/shared/components/Themed'

export default function ModalScreen () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <TenderDetail />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})
