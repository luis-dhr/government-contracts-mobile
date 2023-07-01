import { Paragraph } from '../paragraph/Paragraph'
import { View } from 'react-native'
import { palette } from '../../../../constants/Colors'
import { tagStyles } from './tagStyles'

interface TagProps {
  text: string
  type?: 'primary' | 'secondary' | 'tertiary'
  size?: number
}

export function Tag ({ text, size = 14, type = 'primary' }: TagProps) {
  const types = {
    primary: palette.primary,
    secondary: palette.secondary,
    tertiary: palette.lightTertiary
  }
  const backgroundColor = types[type]

  return (
    <View style={[tagStyles.tag, { backgroundColor }]}>
      <Paragraph size={size}>
        {text}
      </Paragraph>
    </View>
  )
}
