import { Paragraph } from '../../../shared/components'
import { View } from 'react-native'
import { currentPageStyles } from './currentPageStyles'

export function CurrentPage ({ page = 1 }: { page?: number }) {
  return (
    <View style={currentPageStyles.currentPage}>
      <Paragraph size={24} weight='bold' align='center'>
        {page}
      </Paragraph>
    </View>
  )
}
