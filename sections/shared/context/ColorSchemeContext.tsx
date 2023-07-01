import { createContext, PropsWithChildren } from 'react'
import { useColorScheme } from 'react-native'

export interface ColorSchemeContextState {
  colorScheme: 'light' | 'dark'
}

export const ColorSchemeContext = createContext<ColorSchemeContextState>({ colorScheme: 'light' })

export const ColorSchemeContextProvider = ({ children }: PropsWithChildren) => {
  const schema = useColorScheme()
  const colorScheme = schema ?? 'light'

  return (
    <ColorSchemeContext.Provider value={{ colorScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  )
}
