import { CurrentPage, PageEllipsis } from './current'
import { Flex, View } from '../../shared/components'
import { NextButton, PreviousButton } from './control'
import { getColor } from '../../shared/helpers/getColor'
import { paginationStyles } from './paginationStyles'
import { palette } from '../../../constants/Colors'
import { useColorSchemeContext } from '../../shared/hooks/useColorSchemeContext'
import { useTenderListContext } from '../../tender-list/hooks/useTenderListContext'

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

      <Flex gap={16} style={{ width: 'auto' }}>
        {currentPage !== 1 && <PageEllipsis color={color} />}
        <CurrentPage page={currentPage} />
        {currentPage !== maxNumberOfPages && <PageEllipsis color={color} />}
      </Flex>

      <NextButton onPress={onNext} disabled={currentPage === maxNumberOfPages || !pageIsLoaded} />
    </View>
  )
}
