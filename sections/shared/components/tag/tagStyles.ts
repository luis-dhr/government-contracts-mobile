import { StyleSheet } from 'react-native'
import { palette } from '../../../../constants/Colors'

export const tagStyles = StyleSheet.create({
  tag: {
    alignItems: 'center',
    backgroundColor: palette.primary,
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginVertical: 4
  },
  tagText: {
    color: palette.light,
    fontSize: 16,
    fontFamily: 'Overpass-Medium'
  }
})
