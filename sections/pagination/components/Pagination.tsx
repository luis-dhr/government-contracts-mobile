import { CurrentPage } from './current/CurrentPage'
import { Flex, View } from '../../shared/components'
import { NextButton } from './control/NextButton'
import { PageEllipsis } from './current/PageEllipsis'
import { PreviousButton } from './control/PreviousButton'
import { getColor } from '../../shared/helpers/getColor'
import { paginationStyles } from './paginationStyles'
import { palette } from '../../../constants/Colors'
import { useColorSchemeContext } from '../../shared/hooks/useColorSchemeContext'

interface PaginationProps {
  max: number
  current: number
  onNext: () => void
  onPrevious: () => void
}

export function Pagination (props: PaginationProps) {
  const { max = 5, current = 1, onNext = () => null, onPrevious = () => null } = props
  const { colorScheme } = useColorSchemeContext()
  const borderTopColor = colorScheme === 'light' ? palette.secondary : palette.lightTertiary
  const color = getColor(colorScheme, 'text')

  return (
    <View style={[{ borderTopColor }, paginationStyles.pagination]}>
      <PreviousButton onPress={onPrevious} disabled={current === 1} />

      <Flex gap={8} style={{ width: 'auto' }}>
        {current !== 1 && <PageEllipsis color={color} />}
        <CurrentPage page={current} />
        {current !== max && <PageEllipsis color={color} />}
      </Flex>

      <NextButton onPress={onNext} disabled={current === max} />
    </View>
  )
}
