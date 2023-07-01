import { Paragraph, View } from '../../../shared/components'
import { StyleSheet } from 'react-native'
import { getColor } from '../../../shared/helpers/getColor'
import { useColorSchemeContext } from '../../../shared/hooks/useColorSchemeContext'
import { useTenderListContext } from '../../hooks/useTenderListContext'

export function ListEmpty () {
  const { colorScheme } = useColorSchemeContext()
  const { pageIsLoaded } = useTenderListContext()
  const color = getColor(colorScheme, 'text')

  return (
    <View style={listEmptyStyles.listEmpty}>
      <Paragraph color={color} size={18} weight='medium' align='center'>
        {!pageIsLoaded ? 'Cargando...' : 'Resultados no disponible :c'}
      </Paragraph>
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
