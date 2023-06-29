import { Contract } from '../../modules/contracts/domain/Contract'
import { ContractRepository } from '../../modules/contracts/domain/ContractRepository'
import { PropsWithChildren, createContext, useCallback, useEffect, useState } from 'react'
import { getAllContracts } from '../../modules/contracts/application/get-all/getAllContracts'

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
