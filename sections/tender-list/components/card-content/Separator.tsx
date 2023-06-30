import { StyleSheet, View } from 'react-native'

export function Separator () {
  return (<View style={separatorStyles.separator} />)
}

const separatorStyles = StyleSheet.create({
  separator: {
    height: 1,
    width: '100%',
    marginVertical: 4
  }
})
