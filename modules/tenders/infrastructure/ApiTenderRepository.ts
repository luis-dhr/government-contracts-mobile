import { API_URL } from '@env'
import { TenderFromApi, adaptTender } from './adapter-service/adaptTender'
import { TenderRepository } from '../domain'

export function createApiTenderRepository (): TenderRepository {
  return { getAll }
}

export async function getAll (page = 1) {
  try {
    const data = await fetch(`${API_URL}?page=${page}&pageSize=20`).then(
      (response) => response.json()
    )

    if (data.results !== null && data.results !== undefined) {
      return data.results.map((result: { compiledRelease: TenderFromApi }) =>
        adaptTender(result.compiledRelease)
      )
    }
  } catch (error) {
    return []
  }
}
