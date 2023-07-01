import { FONT_FAMILIES } from '../../../constants/fontFamilies'

/** Returns a font family based on the weight specified. */
export function getFontFamily (weight: 'normal' | 'medium' | 'bold') {
  return FONT_FAMILIES[weight]
}
