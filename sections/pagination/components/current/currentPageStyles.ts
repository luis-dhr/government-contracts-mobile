import { StyleSheet } from 'react-native'
import { palette } from '../../../../constants/Colors'

export const currentPageStyles = StyleSheet.create({
  currentPage: {
    backgroundColor: palette.secondary,
    borderRadius: 40,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
