import { Contract } from '../../domain/Contract'
import { ContractRepository } from '../../domain/ContractRepository'

export function getAllContracts (contractRepository: ContractRepository) {
  return async function (): Promise<Contract[]> {
    return await contractRepository.getAll()
  }
}
