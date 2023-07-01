import { Dimensions, Platform, StyleSheet } from 'react-native'

const dim = Platform.OS === 'ios' ? 'screen' : 'window'
const { width } = Dimensions.get(dim)

export const paginationStyles = StyleSheet.create({
  pagination: {
    bottom: 0,
    padding: 16,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderTopWidth: 1,
    width
  }
})
