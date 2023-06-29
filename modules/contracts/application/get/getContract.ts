import { Contract } from '../../domain/Contract'
import { ContractRepository } from '../../domain/ContractRepository'

export function getContract (contractRepository: ContractRepository) {
  return async function (idContract: string): Promise<Contract | null> {
    return await contractRepository.get(idContract)
  }
}
