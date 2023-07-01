import { StyleSheet } from 'react-native'

export const accordionItemStyles = StyleSheet.create({
  accordContainer: {
    paddingBottom: 4,
    width: '100%'
  },
  accordHeader: {
    padding: 16,
    borderLeftWidth: 8,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  accordBody: {
    width: '100%',
    padding: 8
  }
})
