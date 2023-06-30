import FontAwesome from '@expo/vector-icons/FontAwesome'
import { RootLayoutNav } from '../sections/shared/components/RootLayoutNav'
import { SplashScreen } from 'expo-router'
import { useEffect } from 'react'
import { useFonts } from 'expo-font'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router'

// eslint-disable-next-line react-refresh/only-export-components, @typescript-eslint/naming-convention
export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index'
}

export default function RootLayout () {
  const [loaded, error] = useFonts({
    Cabin: require('../assets/fonts/Cabin-Bold.ttf'),
    Overpass: require('../assets/fonts/Overpass-Regular.ttf'),
    'Overpass-Medium': require('../assets/fonts/Overpass-Medium.ttf'),
    'Overpass-Bold': require('../assets/fonts/Overpass-Bold.ttf'),
    ...FontAwesome.font
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error != null) throw error
  }, [error])

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  )
}
