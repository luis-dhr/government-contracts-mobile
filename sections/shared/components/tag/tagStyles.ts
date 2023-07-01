import { StyleSheet } from 'react-native'
import { palette } from '../../../../constants/Colors'

export const tagStyles = StyleSheet.create({
  tag: {
    alignItems: 'center',
    backgroundColor: palette.primary,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 6
  },
  tagText: {
    color: palette.light,
    fontSize: 14,
    fontFamily: 'Overpass'
  }
})
