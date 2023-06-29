import { createStackNavigator } from '@react-navigation/stack'

export type RootStackParamList = {
  ContractList: undefined
  ContractDetails: undefined
}

export const Stack = createStackNavigator<RootStackParamList>()
