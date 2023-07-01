import { Link, Stack } from 'expo-router'
import { StyleSheet, Text } from 'react-native'
import { View } from '../sections/shared/components'

export default function NotFoundScreen () {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <Text style={styles.title}>
          Pantalla no encontrada :C
        </Text>

        <Link href='/' style={styles.link}>
          <Text style={styles.linkText}>
            Volver al inicio
          </Text>
        </Link>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  link: {
    marginTop: 15,
    paddingVertical: 15
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7'
  }
})
