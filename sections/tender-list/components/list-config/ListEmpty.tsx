import { ActivityIndicator, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { Paragraph, View } from '../../../shared/components'
import { getColor } from '../../../shared/helpers/getColor'
import { palette } from '../../../../constants/Colors'
import { useColorSchemeContext } from '../../../shared/hooks/useColorSchemeContext'
import { useTenderListContext } from '../../hooks/useTenderListContext'

export function ListEmpty () {
  const { colorScheme } = useColorSchemeContext()
  const { pageIsLoaded } = useTenderListContext()
  const color = getColor(colorScheme, 'text')

  return (
    <View style={listEmptyStyles.listEmpty}>
      {!pageIsLoaded
        ? <ActivityIndicator size={80} color={palette.primary} />
        : (
          <Paragraph color={color} size={18} weight='medium' align='center'>
            <FontAwesome name='exclamation-circle' size={18} color={color} />
            {' No se encontraron licitaciones'}
          </Paragraph>
          )}
    </View>
  )
}

const listEmptyStyles = StyleSheet.create({
  listEmpty: {
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
