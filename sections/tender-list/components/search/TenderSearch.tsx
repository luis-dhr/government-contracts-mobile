import Colors from '../../../../constants/Colors'
import { FontAwesome } from '@expo/vector-icons'
import { StyleSheet, TextInput, useColorScheme } from 'react-native'
import { Flex, View } from '../../../shared/components'

export function TenderSearch ({ value = '', onChange }: { value?: string, onChange?: (value: string) => void }) {
  const colorScheme = useColorScheme()
  const backgroundColor = Colors[colorScheme ?? 'light'].main
  const color = Colors[colorScheme ?? 'light'].text
  const textSecondary = Colors[colorScheme ?? 'light'].textSecondary

  return (
    <View style={styles.container}>
      <Flex gap={8} style={{ backgroundColor, paddingLeft: 12, borderRadius: 16 }}>
        <FontAwesome name='search' size={16} color={color} />

        <TextInput
          inputMode='search'
          placeholder='Search'
          placeholderTextColor={textSecondary}
          // value={value}
          onChangeText={onChange}
          style={[styles.input, { color, backgroundColor }]}
        />
      </Flex>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 16
  },
  input: {
    paddingHorizontal: 4,
    paddingVertical: 8,
    flex: 1,
    borderRadius: 16,
    fontSize: 16,
    fontFamily: 'Overpass'
  }
})
