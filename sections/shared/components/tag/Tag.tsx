import { Paragraph } from '../paragraph/Paragraph'
import { View } from 'react-native'
import { palette } from '../../../../constants/Colors'
import { tagStyles } from './tagStyles'

type TagType = 'primary' | 'secondary' | 'tertiary'

export function Tag ({ text, type = 'primary' }: { text: string, type: TagType }) {
  const types = {
    primary: palette.primary,
    secondary: palette.secondary,
    tertiary: palette.lightTertiary
  }
  const backgroundColor = types[type]

  return (
    <View style={[tagStyles.tag, { backgroundColor }]}>
      <Paragraph size={14} style={{ color: palette.light }}>
        {text}
      </Paragraph>
    </View>
  )
}
