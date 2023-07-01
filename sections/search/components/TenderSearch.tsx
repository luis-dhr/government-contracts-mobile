import { Flex, View } from '../../shared/components'
import { SearchIcon } from './SearchIcon'
import { TextInput } from 'react-native'
import { getColor } from '../../shared/helpers/getColor'
import { palette } from '../../../constants/Colors'
import { tenderSearchStyles } from './tenderSearchStyles'
import { useColorSchemeContext } from '../../shared/hooks/useColorSchemeContext'

interface TenderSearchProps {
  value: string
  onChange: (text: string) => void
}

export const TenderSearch = ({ value = '', onChange }: TenderSearchProps) => {
  const { colorScheme } = useColorSchemeContext()
  const shadowColor = colorScheme === 'light' ? palette.secondary : palette.lightTertiary
  const backgroundColor = getColor(colorScheme, 'main')
  const color = getColor(colorScheme, 'text')
  const textSecondary = getColor(colorScheme, 'textSecondary')

  return (
    <View style={tenderSearchStyles.tenderSearch}>
      <Flex
        background={backgroundColor}
        justify='space-around'
        gap={8}
        style={{ shadowColor, paddingHorizontal: 12, borderRadius: 16, elevation: 8 }}
      >
        <SearchIcon size={16} color={color} />

        <TextInput
          inputMode='search'
          placeholder='Buscar licitaciones'
          placeholderTextColor={textSecondary}
          value={value}
          onChangeText={onChange}
          style={[tenderSearchStyles.searchInput, { color, backgroundColor }]}
        />
      </Flex>
    </View>
  )
}
