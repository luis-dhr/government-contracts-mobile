import { Button, Text, View } from 'react-native'
import { RootStackParamList } from '../navigation/StackNavigator'
import { StackNavigationProp } from '@react-navigation/stack'

type ContractListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ContractList'>

type Props = {
  navigation: ContractListScreenNavigationProp
}

export function ContractList ({ navigation }: Props) {
  return (
    <View>
      <Text>Contract List</Text>
      <Button
        title='Go to Contract Details'
        onPress={() => navigation.navigate('ContractDetails')}
      />
    </View>
  )
}
