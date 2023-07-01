import { CurrentPage, PageEllipsis } from './current'
import { Flex, View } from '../../shared/components'
import { NextButton, PreviousButton } from './control'
import { getColor } from '../../shared/helpers'
import { paginationStyles } from './paginationStyles'
import { palette } from '../../../constants/Colors'
import { useColorSchemeContext } from '../../shared/hooks/useColorSchemeContext'
import { useTenderListContext } from '../../tender-list/hooks'

interface PaginationProps {
  onPrevious: () => void
  onNext: () => void
}

export function Pagination (props: PaginationProps) {
  const { onPrevious, onNext } = props
  const { colorScheme } = useColorSchemeContext()
  const { pageIsLoaded, maxNumberOfPages, currentPage } = useTenderListContext()
  const borderTopColor = colorScheme === 'light' ? palette.secondary : palette.lightTertiary
  const color = getColor(colorScheme, 'text')

  return (
    <View style={[{ borderTopColor }, paginationStyles.pagination]}>
      <PreviousButton onPress={onPrevious} disabled={currentPage === 1 || !pageIsLoaded} />

      <Flex gap={8} style={{ width: 'auto' }}>
        <PageEllipsis color={currentPage !== 1 ? color : 'transparent'} />
        <CurrentPage page={currentPage} />
        <PageEllipsis color={currentPage !== maxNumberOfPages ? color : 'transparent'} />
      </Flex>

      <NextButton onPress={onNext} disabled={currentPage === maxNumberOfPages || !pageIsLoaded} />
    </View>
  )
}
