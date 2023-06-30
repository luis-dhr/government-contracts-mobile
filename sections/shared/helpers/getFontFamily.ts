import { FONT_FAMILIES } from '../../../constants/fontFamilies'

export function getFontFamily (weight: 'normal' | 'medium' | 'bold') {
  return FONT_FAMILIES[weight]
}
