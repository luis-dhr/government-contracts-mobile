// import { ContractsContextProvider } from './sections/contracts/ContractsContext'
// import { createApiContractRepository } from './modules/contracts/infrastructure/ApiContractRepository'
import { ContractDetails } from './screens/ContractDetails'
import { ContractList } from './screens/ContractList'
import { NavigationContainer } from '@react-navigation/native'
import { Stack } from './navigation/StackNavigator'

export default function App () {
  // const repository = createApiContractRepository()

  return (
  // <ContractsContextProvider repository={repository}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='ContractList' component={ContractList} />
        <Stack.Screen name='ContractDetails' component={ContractDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  // </ContractsContextProvider>
  )
}
