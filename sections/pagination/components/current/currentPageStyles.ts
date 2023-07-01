import { StyleSheet } from 'react-native'
import { palette } from '../../../../constants/Colors'

export const currentPageStyles = StyleSheet.create({
  currentPage: {
    backgroundColor: palette.secondary,
    borderRadius: 48,
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
