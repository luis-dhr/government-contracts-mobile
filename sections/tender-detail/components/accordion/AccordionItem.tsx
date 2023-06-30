import { FontAwesome } from '@expo/vector-icons'
import { PropsWithChildren, useState } from 'react'
import { LayoutAnimation, Platform, StyleSheet, Text, TouchableOpacity, UIManager, View } from 'react-native'

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

interface AccordionItemProps extends PropsWithChildren {
  title: string
}

export function AccordionItem ({ children, title }: AccordionItemProps) {
  const [expanded, setExpanded] = useState(false)

  function toggleItem () {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    setExpanded(!expanded)
  }

  const body = <View style={styles.accordBody}>{children}</View>

  return (
    <View style={styles.accordContainer}>
      <TouchableOpacity style={styles.accordHeader} onPress={toggleItem}>
        <Text style={styles.accordTitle}>{title}</Text>
        <FontAwesome
          name={expanded ? 'chevron-up' : 'chevron-down'}
          size={20}
          color='#bbb'
        />
      </TouchableOpacity>
      {expanded && body}
    </View>
  )
}

const styles = StyleSheet.create({
  accordContainer: {
    paddingBottom: 4,
    width: '100%'
  },
  accordHeader: {
    padding: 12,
    backgroundColor: '#666',
    color: '#eee',
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  accordTitle: {
    fontSize: 20
  },
  accordBody: {
    padding: 12
  }
})
