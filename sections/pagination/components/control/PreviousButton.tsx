import { FontAwesome } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { controlButtonStyles } from './controlButtonStyles'
import { palette } from '../../../../constants/Colors'

export function PreviousButton ({ onPress, disabled }: { onPress: () => void, disabled: boolean }) {
  return (
    <TouchableOpacity
      style={[controlButtonStyles.controlButton, { opacity: disabled ? 0.5 : 1 }]}
      onPress={onPress}
      disabled={disabled}
    >
      <FontAwesome name='chevron-left' size={24} color={palette.light} />
    </TouchableOpacity>
  )
}
