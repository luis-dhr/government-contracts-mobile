import { FontAwesome } from '@expo/vector-icons'
import { LayoutAnimation, Platform, TouchableOpacity, UIManager, View } from 'react-native'
import { Paragraph } from '../../../shared/components/paragraph/Paragraph'
import { PropsWithChildren, memo, useCallback, useState } from 'react'
import { accordionItemStyles } from './accordionItemStyles'
import { getColor } from '../../../shared/helpers/getColor'

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

interface AccordionItemProps extends PropsWithChildren {
  title: string
  colorScheme?: 'light' | 'dark'
}

export const AccordionItem = memo(
  ({ children, title = '', colorScheme = 'light' }: AccordionItemProps) => {
    const [expanded, setExpanded] = useState(false)
    const backgroundColor = getColor(colorScheme, 'main')
    const color = getColor(colorScheme, 'text')

    const toggleItem = useCallback(() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
      setExpanded((prevExpanded) => !prevExpanded)
    }, [])

    return (
      <View style={accordionItemStyles.accordContainer}>
        <TouchableOpacity
          style={[accordionItemStyles.accordHeader, { backgroundColor }]}
          onPress={toggleItem}
        >
          <Paragraph size={18} weight='bold' color={color}>{title}</Paragraph>

          <FontAwesome
            name={expanded ? 'chevron-up' : 'chevron-down'}
            size={20}
            color={color}
          />
        </TouchableOpacity>

        {expanded && <View style={accordionItemStyles.accordBody}>{children}</View>}
      </View>
    )
  }
)
