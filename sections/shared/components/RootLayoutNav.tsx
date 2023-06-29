import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { useColorScheme } from 'react-native'

export function RootLayoutNav () {
  const colorScheme = useColorScheme()
  // const repository = createApiTenderRepository()

  return (
    <>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen
            name='index'
            options={{
              title: 'Contract list ',
              headerTitleStyle: { fontSize: 18, fontFamily: 'Montserrat' },
              statusBarStyle: 'dark'
            }}
          />
          <Stack.Screen
            name='modal'
            options={{
              presentation: 'modal',
              title: 'Details',
              headerTitleStyle: { fontSize: 18, fontFamily: 'Montserrat' },
              statusBarStyle: 'dark'
            }}
          />
        </Stack>
      </ThemeProvider>
    </>
  )
}
