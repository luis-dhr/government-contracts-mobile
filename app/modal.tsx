import { Paragraph } from '../sections/shared/components'
import { Platform, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Tender } from '../modules/tenders/domain'
import { TenderDetail } from '../sections/tender-detail/components/TenderDetail'
import { View } from '../sections/shared/components/Themed'
import { useTenderListContext } from '../sections/tender-list/hooks'
import { useColorSchemeContext } from '../sections/shared/hooks/useColorSchemeContext'
import { getColor } from '../sections/shared/helpers'

export default function ModalScreen () {
  const { currentTender } = useTenderListContext()
  const { colorScheme } = useColorSchemeContext()
  const color = getColor(colorScheme, 'text')

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Paragraph weight='bold' size={24} color={color}>
          {currentTender?.title}
        </Paragraph>
      </View>

      <TenderDetail tender={currentTender as Tender} />

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
    height: '8%',
    width: '100%',
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
})
