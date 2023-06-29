export const palette = {
  dark: '#393939',
  light: '#f6f6f6',
  darkSecondary: '#4f5156',
  lightSecondary: '#e9e9e9',
  primary: '#268386',
  secondary: '#11819e',
  tertiary: '#3f7bae',
  quaternary: '#7371ae'
}

export default {
  light: {
    text: palette.dark,
    background: palette.light,
    main: palette.lightSecondary
  },
  dark: {
    text: palette.light,
    background: palette.dark,
    main: palette.darkSecondary
  }
}
