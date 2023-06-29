import { TenderRepository } from '../domain'

export function createApiTenderRepository (): TenderRepository {
  return { getAll }
}

async function getAll (page = 1) {
  const url = process.env.API_URL as string

  const data = await fetch(`${url}?page=${page}&pageSize=20`).then(
    (response) => response.json()
  )

  console.log('🚀 ~ file: ApiContractRepository.ts:23 ~ getAll ~ data:', data)

  // console.log('🚀 ~ file: ApiContractRepository.ts:25 ~ data.results.forEach ~')
  // data.results.forEach((element: any) => {
  //   console.log(element.compiledRelease.contracts[0].title)
  // })

  return []
}
