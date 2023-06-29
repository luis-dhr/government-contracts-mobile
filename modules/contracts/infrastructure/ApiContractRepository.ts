import { Contract } from '../domain/Contract'
import { ContractRepository } from '../domain/ContractRepository'

export function createApiContractRepository (): ContractRepository {
  return {
    get,
    getAll
  }
}

async function get (id: string) {
  const contract = await fetch(`/api/contracts/${id}`).then(
    (response) => response.json() as Promise<Contract>
  )

  return contract
}

async function getAll () {
  const contracts = await fetch('/api/contracts').then(
    (response) => response.json() as Promise<Contract[]>
  )

  return contracts
}
