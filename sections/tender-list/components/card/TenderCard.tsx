import Colors from '../../../../constants/Colors'
import { Flex, Text } from '../../../shared/components'
import { Separator } from '../card-content/Separator'
import { TouchableOpacity, useColorScheme } from 'react-native'
import { tenderCardStyles } from './tenderCardStyles'

export function TenderCard () {
  const colorScheme = useColorScheme()
  const backgroundColor = Colors[colorScheme ?? 'light'].main

  return (
    <TouchableOpacity
      onPress={() => null}
      style={[tenderCardStyles.tenderCard, { backgroundColor }]}
    >
      <Flex direction='column'>
        <Text style={tenderCardStyles.contractTitle} numberOfLines={1}>
          Contract Title
        </Text>
        <Text style={tenderCardStyles.contractSubtitle} numberOfLines={1}>
          Contract Publisher
        </Text>
      </Flex>

      <Separator />
    </TouchableOpacity>
  )
}
