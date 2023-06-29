import React from 'react'
import { ParagraphProps } from './ParagraphProps'
import { StyleSheet, Text } from 'react-native'

function ParagraphComponent ({
  children,
  align = 'left',
  color = '#333333',
  lines = 1,
  size = 16,
  transform = 'none',
  weight = 'normal'
}: ParagraphProps) {
  const styles = StyleSheet.create({
    text: {
      color,
      fontWeight: weight,
      fontSize: size,
      lineHeight: size + 4,
      textAlign: align,
      textTransform: transform,
      flex: 1
    }
  })

  return (
    <Text
      adjustsFontSizeToFit
      numberOfLines={lines}
      style={styles.text}
    >
      {children}
    </Text>
  )
}

export const Paragraph = React.memo(ParagraphComponent)
