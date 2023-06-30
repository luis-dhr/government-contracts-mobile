import { AccordionItem } from './accordion/AccordionItem'
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

export function TenderDetail () {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        style={styles.container}
      >
        <AccordionItem title='Native development'>
          <Text style={styles.textSmall}>React Native lets you create truly native apps and
            doesn't compromise your users' experiences. It provides a core set of platform
            agnostic native components
          </Text>
        </AccordionItem>
        <AccordionItem title='Fast refresh'>
          <Text style={styles.textSmall}>See your changes as soon as you save.
            With the power of JavaScript, React Native lets you iterate at
            lightning speed.
          </Text>
        </AccordionItem>
        <AccordionItem title='Cross-platform'>
          <Text style={styles.textSmall}>React components wrap existing native code
            and interact with native APIs via React's declarative UI paradigm
            and JavaScript. This enables native app development for whole new teams
            of developers
          </Text>
          <View style={styles.seperator} />
          <Button title='See more...' />
        </AccordionItem>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textSmall: {
    fontSize: 16
  },
  seperator: {
    height: 12
  }
})
