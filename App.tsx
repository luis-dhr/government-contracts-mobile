// import { ContractsContextProvider } from './sections/contracts/ContractsContext'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
// import { createApiContractRepository } from './modules/contracts/infrastructure/ApiContractRepository'

export default function App () {
  // const repository = createApiContractRepository()

  return (
  // <ContractsContextProvider repository={repository}>
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style='auto' />
    </View>
  // </ContractsContextProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

/**
 * Modules
 * ! contracts
 * * * domain
 * ? * * * Contract
 * ? * * * Contract Title
 * ? * * * Contract Repository
 * ? * * * ...
 * * * application
 * ? * * * get
 * ? * * * * getContract
 * ? * * * get all
 * ? * * * * getAllContracts
 * ? * * * ...
 * * * infrastructure
 * ? * * * API Contract Repository
 * ? * * * ...
*/
