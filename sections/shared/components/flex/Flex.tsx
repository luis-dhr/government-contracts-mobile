import { FlexProps } from './FlexProps'
import { View, ViewStyle } from 'react-native'
import { memo } from 'react'

export const Flex = memo((props: FlexProps) => {
  const {
    direction = 'row',
    wrap = 'nowrap',
    justify = 'center',
    align = 'center',
    gap = 0,
    style = {}
  } = props

  const flexStyle: ViewStyle = {
    display: 'flex',
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap,
    gap,
    width: '100%',
    ...style
  }

  return (
    <View style={flexStyle}>
      {props.children}
    </View>
  )
})
