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
  const data = await fetch('https://api.datos.gob.mx/v2/Records/?page=1&pageSize=100').then(
    (response) => response.json()
  )
  console.log('🚀 ~ file: ApiContractRepository.ts:23 ~ getAll ~ data:', data)

  // console.log('🚀 ~ file: ApiContractRepository.ts:25 ~ data.results.forEach ~')
  // data.results.forEach((element: any) => {
  //   console.log(element.compiledRelease.contracts[0].title)
  // })

  return []
}
