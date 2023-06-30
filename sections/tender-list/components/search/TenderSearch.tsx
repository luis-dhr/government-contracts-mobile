import { Flex, View } from '../../../shared/components'
import { SearchIcon } from './SearchIcon'
import { TextInput } from 'react-native'
import { getColor } from '../../../shared/helpers/getColor'
import { palette } from '../../../../constants/Colors'
import { tenderSearchStyles } from './tenderSearchStyles'

interface TenderSearchProps {
  value: string
  onChange: (text: string) => void
  colorScheme: 'light' | 'dark'
}

export const TenderSearch = ({ value = '', onChange, colorScheme }: TenderSearchProps) => {
  const shadowColor = colorScheme === 'light' ? palette.secondary : palette.lightTertiary
  const backgroundColor = getColor(colorScheme, 'main')
  const color = getColor(colorScheme, 'text')
  const textSecondary = getColor(colorScheme, 'textSecondary')

  return (
    <View style={tenderSearchStyles.tenderSearch}>
      <Flex
        background={backgroundColor}
        gap={8}
        style={{ shadowColor, paddingLeft: 12, borderRadius: 16, elevation: 8 }}
      >
        <SearchIcon size={16} color={color} />

        <TextInput
          inputMode='search'
          placeholder='Search'
          placeholderTextColor={textSecondary}
          value={value}
          onChange={(e) => onChange(e.nativeEvent.text)}
          style={[tenderSearchStyles.searchInput, { color, backgroundColor }]}
        />
      </Flex>
    </View>
  )
}
