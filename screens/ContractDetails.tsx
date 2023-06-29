import { Button, Text, View } from 'react-native'
import { RootStackParamList } from '../navigation/StackNavigator'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ContractDetails'>

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'ContractDetails'>

type Props = {
  navigation: DetailsScreenNavigationProp
  route: DetailsScreenRouteProp
}

export function ContractDetails ({ navigation }: Props) {
  return (
    <View>
      <Text>Contract Details Screen</Text>
      <Button
        title='Go back'
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}
