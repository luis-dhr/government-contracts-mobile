import { View } from 'react-native'
import { contractSeparatorStyles } from './contractSeparatorStyles'
// import { useThemeColor } from '../../../shared/hooks/useThemeColor'

export function ContractSeparator () {
  // const backgroundColor = useThemeColor({ light: '#393939', dark: '#f6f6f6' }, 'background')

  return (
    <View style={contractSeparatorStyles.separator} />
  )
}
