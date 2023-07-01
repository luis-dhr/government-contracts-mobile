import { ColorSchemeContextProvider } from '../context/ColorSchemeContext'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { TenderListContextProvider } from '../../tender-list/context/TenderListContextProvider'
import { createApiTenderRepository } from '../../../modules/tenders/infrastructure'
import { useColorScheme } from 'react-native'

export function RootLayoutNav () {
  const colorScheme = useColorScheme()
  const repository = createApiTenderRepository()

  return (
    <>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <ColorSchemeContextProvider>
          <TenderListContextProvider repository={repository}>
            <Stack>
              <Stack.Screen
                name='index'
                options={{
                  title: 'Licitaciones',
                  headerTitleStyle: { fontSize: 24, fontFamily: 'Cabin' },
                  statusBarStyle: 'dark'
                }}
              />
              <Stack.Screen
                name='modal'
                options={{
                  presentation: 'modal',
                  animation: 'slide_from_right',
                  title: 'Detalles',
                  headerTitleStyle: { fontSize: 24, fontFamily: 'Cabin' },
                  statusBarStyle: 'dark'
                }}
              />
            </Stack>
          </TenderListContextProvider>
        </ColorSchemeContextProvider>
      </ThemeProvider>
    </>
  )
}
