import { StyleSheet } from 'react-native'
import { palette } from '../../../../constants/Colors'

export const controlButtonStyles = StyleSheet.create({
  controlButton: {
    backgroundColor: palette.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 8,
    minWidth: 48,
    minHeight: 48
  }
})
