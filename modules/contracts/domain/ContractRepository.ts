import { Contract } from './Contract'

export interface ContractRepository {
  get: (id: string) => Promise<Contract | null>
  getAll: () => Promise<Contract[]>
}

export type getContract = (id: string) => Promise<Contract | null>
export type getAllContracts = () => Promise<Contract[]>
