import { Dimensions, Platform, StyleSheet } from 'react-native'

const dim = Platform.OS === 'ios' ? 'screen' : 'window'
const { height } = Dimensions.get(dim)

export const tenderListStyles = StyleSheet.create({
  tenderListContainer: {
    width: '100%',
    maxHeight: (height * 0.75),
    borderWidth: 1,
    borderColor: '#FFF'
  },
  tenderList: {
    width: '100%'
  },
  tenderListFooter: {
    height: (height * 0.1)
  }
})
