export const palette = {
  dark: '#141414',
  light: '#FFFFFF',
  darkSecondary: '#525252',
  lightSecondary: '#F0FAFA',
  darkTertiary: '#333333',
  lightTertiary: '#7f7f7f',
  darkQuaternary: '#666666',
  primary: '#268386',
  secondary: '#2C5C9C'
}

export default {
  light: {
    text: palette.dark,
    textSecondary: palette.darkSecondary,
    background: palette.lightSecondary,
    main: palette.light
  },
  dark: {
    text: palette.light,
    textSecondary: palette.lightSecondary,
    background: palette.darkTertiary,
    main: palette.darkQuaternary
  }
}
