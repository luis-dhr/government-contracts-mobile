import { Text } from '../Themed'
import { View } from 'react-native'
import { palette } from '../../../../constants/Colors'
import { tagStyles } from './tagStyles'

type TagType = 'primary' | 'secondary' | 'tertiary' | 'quaternary'

export function Tag ({ text, type = 'primary' }: { text: string, type: TagType }) {
  const types = {
    primary: palette.primary,
    secondary: palette.secondary,
    tertiary: palette.tertiary,
    quaternary: palette.quaternary
  }
  const backgroundColor = types[type]

  return (
    <View style={[tagStyles.tag, { backgroundColor }]}>
      <Text style={tagStyles.tagText}>{text}</Text>
    </View>
  )
}
