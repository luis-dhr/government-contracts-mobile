import { StyleSheet } from 'react-native'
import { palette } from '../../../../constants/Colors'

export const tagStyles = StyleSheet.create({
  tag: {
    alignItems: 'center',
    backgroundColor: palette.primary,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4
  },
  tagText: {
    color: palette.light,
    fontSize: 14,
    fontFamily: 'Overpass'
  }
})
