import { Contract, ContractRepository } from '../../../modules/contracts/domain'
import { PropsWithChildren, createContext, useCallback, useEffect, useState } from 'react'
import { getAllContracts } from '../../../modules/contracts/application'

export interface ContractsContextState {
  contracts: Contract[]
}

export const ContractsContext = createContext<ContractsContextState>({ contracts: [] })

export const ContractsContextProvider = ({
  children,
  repository
}: PropsWithChildren<{ repository: ContractRepository }>) => {
  const [contracts, setContracts] = useState<Contract[]>([])

  const getContracts = useCallback(async () => {
    const contracts = await getAllContracts(repository)()
    setContracts(contracts)
  }, [repository])

  useEffect(() => {
    getContracts()
  }, [getContracts])

  return (
    <ContractsContext.Provider value={{ contracts }}>
      {children}
    </ContractsContext.Provider>
  )
}
