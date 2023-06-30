import { FlexProps } from './FlexProps'
import { View, ViewStyle } from 'react-native'
import { memo } from 'react'

export const Flex = memo((props: FlexProps) => {
  const { direction = 'row', wrap = 'nowrap', justify = 'center', align = 'center', gap = 0 } = props

  const flexStyle: ViewStyle = {
    display: 'flex',
    flexDirection: direction,
    flexWrap: wrap,
    justifyContent: justify,
    alignItems: align,
    gap
  }

  return (
    <View style={flexStyle}>
      {props.children}
    </View>
  )
})
