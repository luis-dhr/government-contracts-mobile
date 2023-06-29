import { Text } from 'react-native'

interface TextProps {
  lightColor?: string
  darkColor?: string
}

type TextComponentProps = TextProps & Text['props']

export function StyledText (props: TextComponentProps) {
  return (
    <Text {...props} style={props.style} />
  )
}
