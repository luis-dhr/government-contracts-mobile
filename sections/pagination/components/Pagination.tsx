import { CurrentPageInput } from './current/CurrentPageInput'
import { NextButton } from './control/NextButton'
import { PageLimit } from './current/PageLimit'
import { PreviousButton } from './control/PreviousButton'
import { View } from '../../shared/components'

export function Pagination () {
  return (
    <View>
      <PreviousButton />

      <PageLimit />
      <CurrentPageInput />
      <PageLimit />

      <NextButton />
    </View>
  )
}

// min, max, current, onChange, colorScheme
